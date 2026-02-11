import React, { useState, useEffect, useMemo } from "react";
import "./ShopList.css";
import useList from "../hooks/useList";
import useSession from "../hooks/useSession";
import List from "./List";

//Quebradero de cabeza a continuación tenga cuidado si no lleva 
// una piedra de palinca encima o un ron-cola.

//Creo que me he complicado de más para lo que era pero bueno ya está.

//También creo que para como tengo estructurado el proyecto
//mejor separar las listas de los productos porque ya tenía mucha carga en la interfaz.
const ShopList = () => {
  const {
    getList,
    createList,
    deleteList,
    getListWithProducts,
    addProductToList,
    loadCatalog,
    error,
    currentList,
    lists,
    allProducts,
  } = useList();

  const { user } = useSession();
  const userId = user?.id;
  const [view, setView] = useState("all_lists");
  const [newListName, setNewListName] = useState("");
  const [selectedProdId, setSelectedProdId] = useState("");
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    if (userId) {
      getList(userId);
      loadCatalog();
    }
  }, [userId]);
//Uso de useMemo para que no se actualice el estado de los datos de las listas a menos que estos mismos sean modificados.
  const listStats = useMemo(() => {
    if (!currentList?.listas_productos) return { totalVal: 0, totalWeight: 0 };

    return currentList.listas_productos.reduce(
      (acc, item) => {
        const price = parseFloat(item.productos?.price || 0);
        const weight = parseFloat(item.productos?.weight || 0);
        const qty = item.cantidad;

        acc.totalVal += price * qty;
        acc.totalWeight += weight * qty;
        return acc;
      },
      { totalVal: 0, totalWeight: 0 },
    );
  }, [currentList]);
//Variable para hacer el calculo del peso del transporte.
  const CAR_THRESHOLD = 15;
  const needsCar = listStats.totalWeight > CAR_THRESHOLD;

  const handleCreate = async () => {
    if (!newListName.trim()) return;
    await createList({ nombre: newListName, propietario_id: userId });
    setNewListName("");
  };

  const handleViewDetail = async (id) => {
    await getListWithProducts(id);
    setView("detail");
  };

  const handleAddProduct = async () => {
    if (!selectedProdId) return alert("Select 1 product.");
    if (quantity < 1) return alert("Minimum quantity 1.");

    await addProductToList(currentList.id, selectedProdId, quantity);
    setQuantity(1);
    setSelectedProdId("");
  };

  return (
    <div className="lists-container">
      <header className="lists-header">
        <h1>{user?.user_metadata?.display_name || "User"}'s Shopping Lists 🛒</h1>
      </header>

      {error && <div className="error-message">{error}</div>}

      {view === "all_lists" && (
        <div className="lists-view">
          <div className="create-bar">
            <input
              type="text"
              placeholder="New list name (e.g. Christmas Dinner)"
              value={newListName}
              onChange={(e) => setNewListName(e.target.value)}
            />
            <button className="btn-create" onClick={handleCreate}>
              Create List
            </button>
          </div>

          <div className="grid-lists">
            {lists.map((list) => (
              <div key={list.id} className="list-card">
                <div className="card-header">
                  <h3>{list.nombre}</h3>
                  <button
                    className="btn-delete"
                    onClick={() => deleteList(list.id)}
                  >
                    Delete
                  </button>
                </div>
                <p className="list-date">
                  Created: {new Date(list.created_at).toLocaleDateString()}
                </p>
                <button
                  className="btn-view"
                  onClick={() => handleViewDetail(list.id)}
                >
                  View Details / Add Products
                </button>
              </div>
            ))}
          </div>
        </div>
      )}

      {view === "detail" && currentList && (
        <div className="detail-view">
          <button className="btn-back" onClick={() => setView("all_lists")}>
            ⬅ Back to lists
          </button>

          <div className="stats-panel">
            <h2>Details: {currentList.nombre}</h2>
            <div className="stats-grid">
              <p>
                <strong>Estimated Cost:</strong>{" "}
                {listStats.totalVal.toFixed(2)} €
              </p>
              <p>
                <strong>Total Weight:</strong> {listStats.totalWeight.toFixed(2)}{" "}
                kg
              </p>
            </div>

            {needsCar ? (
              <div className="alert-car">
                🚗 <strong>NOTICE:</strong> Weight exceeds {CAR_THRESHOLD}kg.
                Take the car!
              </div>
            ) : (
              <div className="alert-walk">
                🚶 Lightweight, you can walk.
              </div>
            )}
          </div>

          <div className="add-product-section">
            <select
              value={selectedProdId}
              onChange={(e) => setSelectedProdId(e.target.value)}
            >
              <option value="">-- Select a product --</option>
              {allProducts.map((p) => (
                <option key={p.id} value={p.id}>
                  {p.name} ({p.price}€)
                </option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              className="input-qty"
            />
            <button className="btn-add" onClick={handleAddProduct}>
              Add
            </button>
          </div>
          <div className="table-container">
            <table className="products-table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Qty.</th>
                  <th>Weight</th>
                  <th>Subtotal</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {currentList.listas_productos?.map((item) => (
                  <List
                    key={item.id}
                    id={item.id}
                    listaId={currentList.id}
                    productoId={item.productos?.id} 
                    name={item.productos?.name}
                    cant={item.cantidad}
                    weight={item.productos?.weight}
                    price={item.productos?.price}
                  />
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

export default ShopList;
