import React from "react";
import "./ShopList.css";
import useList from "../hooks/useList";
import useSession from "../hooks/useSession";

//He decidido separar lo que es la lista de los productos
//de la general por tema de orden
//y que ya eran demasiadas cosas en un solo archivo.

const List = ({ id, listaId, productoId, name, cant, weight, price }) => {
  const { removeProductFromList, addProductToList } = useList();
  const {isAdmin} = useSession()


  //Funciones para aumentar y disminuir cantidades.
  const handleIncrease = () => {
    addProductToList(listaId, productoId, cant + 1);
  };

  const handleDecrease = () => {
    if (cant > 1) {
      addProductToList(listaId, productoId, cant - 1);
    }
  };
//Y para que quede más chulo he puesto que salga el peso inicial 
// y que aumente según aumente o disminuyan las cantidades de los productos.
  const WeightProduct = (parseFloat(weight || 0) * cant).toFixed(2);
  
  return (
    <tr>
      <td>{name}</td>
      <td className="qty-cell">
        <button className="btn-remove" onClick={handleDecrease}>
          -
        </button>
        <span className="qty-number">{cant}</span>
        <button className="btn-remove" onClick={handleIncrease}>
          +
        </button>
      </td>
      <td>{WeightProduct}</td>
      <td>{(cant * price).toFixed(2)}€</td>
      <td>
        
        <button
          className="btn-remove"
          onClick={() => removeProductFromList(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export default List;
