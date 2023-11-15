import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";

import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";

import { ModalType } from "../../types/ModalType";

import ProductModal from "../ProductModal/ProductModal";
import { EditButton } from "../EditButton/EditButton";
import { DeletButton } from "../DeleteButton/DeleteButton"; 



// Datos de ejemplo basados en la imagen proporcionada
const datosIngredientes = [
  { ingrediente: 'Cheddar', rubro: 'Hamburguesa', precioCosto: 800, stockMinimo: 50, stockActual: 45, unidadMedida: 'gr', nivelStock: 'Faltante', estado: 'Baja' },
  { ingrediente: 'Muzzarela', rubro: 'Pizza', precioCosto: 2000, stockMinimo: 500, stockActual: 2000, unidadMedida: 'gr', nivelStock: 'Óptimo', estado: 'Alta' },
  { ingrediente: 'Mostaza', rubro: 'Condimentos', precioCosto: 1800, stockMinimo: 50, stockActual: 200, unidadMedida: 'cm3', nivelStock: 'Óptimo', estado: 'Alta' },
  { ingrediente: 'Carne Molida', rubro: 'Hamburguesa', precioCosto: 800, stockMinimo: 500, stockActual: 20000, unidadMedida: 'gr', nivelStock: 'Óptimo', estado: 'Alta' },
  { ingrediente: 'Salchicha', rubro: 'Panchos', precioCosto: 2000, stockMinimo: 50, stockActual: 45, unidadMedida: 'gr', nivelStock: 'Faltante', estado: 'Baja' },
  { ingrediente: 'Cebolla', rubro: 'Hamburguesa', precioCosto: 400, stockMinimo: 50, stockActual: 150, unidadMedida: 'gr', nivelStock: 'Óptimo', estado: 'Alta' },
  { ingrediente: 'Ketchup', rubro: 'Condimentos', precioCosto: 1800, stockMinimo: 50, stockActual: 200, unidadMedida: 'cm3', nivelStock: 'Óptimo', estado: 'Alta' },
  // ... puedes seguir agregando más filas según sea necesario
];

const IngredientesTable = () => {
  return (
    <table>
      <thead>
        <tr>
          <th>Ingrediente</th>
          <th>Rubro</th>
          <th>Precio de costo</th>
          <th>Stock mínimo</th>
          <th>Stock actual</th>
          <th>Unidad de medida</th>
          <th>Nivel de stock</th>
          <th>Estado</th>
          <th>Acciones</th>
        </tr>
      </thead>
      <tbody>
        {datosIngredientes.map((item, index) => (
          <tr key={index} style={{ backgroundColor: item.nivelStock === 'Faltante' ? '#FFD1D1' : '#FFFFFF' }}>
            <td>{item.ingrediente}</td>
            <td>{item.rubro}</td>
            <td>${item.precioCosto}</td>
            <td>{item.stockMinimo}</td>
            <td>{item.stockActual}</td>
            <td>{item.unidadMedida}</td>
            <td>{item.nivelStock}</td>
            <td>{item.estado}</td>
            <td>
              {/* Iconos de acciones */}
              <button>Editar</button>
              <button>Eliminar</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default IngredientesTable;