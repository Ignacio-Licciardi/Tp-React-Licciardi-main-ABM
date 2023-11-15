import { useEffect, useState } from "react";
import { Product } from "../../types/Product";
import { ProductService } from "../../services/ProductService";

import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";

import { ModalType } from "../../types/ModalType";

import ProductModal from "../ProductModal/ProductModal";
import { EditButton } from "../EditButton/EditButton";
import { DeletButton } from "../DeleteButton/DeleteButton"; 



const ProductTable = () => {

    //Varialbe que va a contener los datos recibidos por la API
    const [products, setProducts] = useState<Product[]>([]);

    //Variable que muestra el componente Loader hasta que se reciban los datos de la API
    const [isLoading, setIsLoading] = useState(true);

    //Variable que va a actualizar los datos de la tabla luego de cada operacion exitosa
    const [refreshData, setRefreshData] = useState(false);

    //Este hook se va a ejecutar cada vez que se renderice el componente o refreshData cambie de estado
    useEffect(() => {

        //Llamamos a la funcion para obtener todos los productos declarados en el ProductService
        const fetchProducts = async () => {
            const products = await ProductService.getProducts();
            setProducts(products);
            setIsLoading(false);
        };

        fetchProducts();
    },  [refreshData]);

    //Test, este log esta modificado para que muestre los datos de una manera la legible.
    console.log(JSON.stringify(products, null, 2));


    //Const Se inicializa un producto vacio cuando vayamos a crar uno nuevo, para evitar "undefined"
    const initializeNewProduct = (): Product => {
        return {
            id: 0,
            title: "",
            price: 0,
            description: "", 
            category: "",
            image: "", 
            };
        };

    //Const Producto seleccionado que se va a pasar como prop al Modal.
        const [product, setProduct] = useState<Product>(initializeNewProduct);

    //Manejo del Modal.
        const [showModal, setShowModal] = useState(false);
        const [modalType, setModalType] = useState<ModalType>(ModalType.NONE); 
        const [title, setTitle] = useState("");

    //Logica del Modal.
        const handleClick = (newTitle: string, prod: Product, modal: ModalType) => {
            setTitle(newTitle);
            setModalType(modal);
            setProduct(prod);
            setShowModal(true);

        };
  


        

    return (
        <>
        <div className="container">
      <div className="row">
        <div className="col-3">
          <Button variant="danger">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" className="me-2">
              <path d="M11.5998 21.6673C16.9385 21.6673 21.2664 17.3394 21.2664 12.0007C21.2664 6.6619 16.9385 2.33398 11.5998 2.33398C6.26102 2.33398 1.93311 6.6619 1.93311 12.0007C1.93311 17.3394 6.26102 21.6673 11.5998 21.6673Z" stroke="white" strokeWidth="1.45" />
              <path d="M15.4667 11.9996H7.7334M7.7334 11.9996L10.6334 9.09961M7.7334 11.9996L10.6334 14.8996" stroke="white" strokeWidth="1.45" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Volver
          </Button>
        </div>
        <div className=" row col-5 d-flex justify-content-center align-items-center">
          <Button variant="danger">Stock de ingredientes</Button>
        </div>
      </div>
    </div>
        
        <div className="m-3">
            {/* Boton para que cuando el usuario haga click llame a la funcion que declaremos */}
                <Button onClick={() => handleClick("Nuevo producto", 
                    initializeNewProduct(), ModalType.CREATE)}> 
                    Nuevo Ingrediente 
                </Button>

            {isLoading ? <Loader/> : (

                <Table>
                    <thead>
                        <tr>
                            <th> Ingrediente </th>
                            <th> Rubro </th>
                            <th> Precio de costo </th>
                            <th> Stock Minimo </th>
                            <th> Stock Actual </th>
                            <th> Unidad de medida </th>
                            <th> Nivel Stock </th>
                            <th> Estado </th>
                            <th> Editar </th>
                            <th> Borrar </th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map( product => (
                            <tr key={product.id}>

                                <td>{product.title}</td>
                                <td>{product.category}</td>
                                <td>{product.price}</td>
                                <td>{product.price}</td>
                                <td>{product.price}</td>
                                <td>{product.price}</td>
                                <td>{product.price}</td>
                                <td>{product.price}</td>
                                
                                <td><EditButton onClick={() => handleClick("Editar producto", product, ModalType.UPDATE)}/></td>
                                <td><DeletButton onClick={() => handleClick("Borrar producto", product, ModalType.DELETE)}/></td>

                            </tr>
                        ))}

                    </tbody>

                </Table>
            )}

            {showModal && (
                <ProductModal
                show={showModal}
                onHide={() => setShowModal(false)}
                title={title}
                modalType={modalType}
                prod={product}
                refreshData={setRefreshData}
                />
            )}
            
        </div>
        
        </>
    );
};

export default ProductTable