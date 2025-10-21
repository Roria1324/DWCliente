import React from "react";
import {Routes, Route} from "react-router-dom";

const Rutas = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Inicio />} />
            <Route path='/contacto' element={<Contacto />} />
            <Route path='/acerca-de' element={<AcercaDe />} />
            <Route path='/discentes' element={<Discentes />} />
            <Route path='/administracion' element={<Administracion />}>
                <Route
                    path='/administracion/discentes'
                    element={<AdminDiscentes />}
                />
                <Route path='notas' element={<AdminNotas />} />
                <Route path='/administracion/usuarios' element={<AdminUsuarios />}/>
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='*' element={<Error />} />
      </Routes>
        </>
    );
};
