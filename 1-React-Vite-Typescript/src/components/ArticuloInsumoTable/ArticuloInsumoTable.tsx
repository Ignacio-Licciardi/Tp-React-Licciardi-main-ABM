import { useEffect, useState } from "react"

import { Button, Table } from "react-bootstrap";
import Loader from "../Loader/Loader";
import { ArrowUp, ArrowDown, Pencil } from "react-bootstrap-icons";

import { ModalType } from "../../types/ModalType";


import { ArticuloInsumo } from "../../types/ArticuloInsumo";
import { ArticuloInsumoService } from "../../services/ArticuloInsumoService";
import ArticuloInsumoModal from "../AtriculoInsumoModal/ArticuloInsumoModal";


const ArticuloInsumoTable = () => {

    //Variable que va a contener los datos recibidos por la API
    const [articulosInsumo, setArticulosInsumos] = useState<ArticuloInsumo[]>([]);

    //Variable que muestra el componente Loader hasta que se reciban los datos de la API
    const [isLoading, setIsLoading] = useState(true);

    //Variable que va actualizar los datos de la tabla luego de cada operacion exitosa
    const [refreshData, setRefreshData] = useState(false);

    //Este hook se va a ejecutar cada vez que se renderice el componente o refreshData cambie de estado
    useEffect(() => {

        //Llamamos a la función para obtener todos los productos declarado en el service
        const fetchArticulosInsumo = async () => {
            const articulosInsumo = await ArticuloInsumoService.getArticulosInsumo();
            setArticulosInsumos(articulosInsumo);
            setIsLoading(false);
        };

        fetchArticulosInsumo();
    }, [refreshData]);

    //Test, este log está modificado para que muestre los datos de una manera más legible
    console.log(JSON.stringify(articulosInsumo, null, 2));


    //Se inicializa un producto vacio cuando vayamos a crear uno nuevo, para evitar "undefined"
        const initializeNewArticuloInsumo = (): ArticuloInsumo => {
        return {

            id: 0,
            denominacion: null,
            rubroArticulo: null,
            precioCompra: 0,
            stockMinimo: 0,
            stockActual: 0,
            fechaFacturacion: null,
            unidadMedida: null,
            fechaBaja: null,
            fechaAlta: new Date(),


        }
      };

    //Producto seleccionado que se va a pasar como prop al Modal
        const [articuloInsumo, setArticulosInsumo] = useState<ArticuloInsumo>(initializeNewArticuloInsumo);
    
    //Manejo de Modal
        const [showModal, setShowModal] = useState(false);
        const [modalType, setModalType] = useState<ModalType>(ModalType.NONE);
        const [title, setTitle] = useState("");

    //Logica de Modal
        const handleClick = (newTitle: string, articuloInsumo: ArticuloInsumo, modal: ModalType) => {
            setTitle(newTitle);
            setModalType(modal)
            setArticulosInsumo(articuloInsumo);
            setShowModal(true); 
         };

  return (
    <div className="m-3">

        {/* Botón para que cuando el usuario haga click llame a la función que declaramos */}
            <Button className="nueva-factura-btn"
            onClick={() => handleClick("Nuevo Articulo",
                initializeNewArticuloInsumo(), ModalType.CREATE)}>
                Nuevo Articulo
            </Button>

    {isLoading ? <Loader/>: (
           
        <Table>
            <thead>
                <tr>
                    <th>Nº de Articulo</th>
                    <th>Denominacion</th>
                    {/* <th>Rubro Articulo</th> */}
                    <th>Precio Compra</th>
                    <th>Stock Minimo</th>
                    <th>Stock Actual</th>
                    {/* <th>Unidad Medida</th> */}
                    <th>Acciones</th>
                </tr>
            </thead>
            <tbody>
                {articulosInsumo.map(articuloInsumo => (
                    <tr key={articuloInsumo.id} className={articuloInsumo.fechaBaja ? 'table-danger' : ''}>
                        
                        <td> {articuloInsumo.id} </td>
                        <td> {articuloInsumo.denominacion?.toString()} </td>
                        {/* <td> {articuloInsumo.rubroArticulo?.denominacion} </td> */}
                        <td> {articuloInsumo.precioCompra} </td>
                        <td> {articuloInsumo.stockMinimo} </td>
                        <td> {articuloInsumo.stockActual} </td>
                        {/* <td> {articuloInsumo.unidadMedida?.abreviatura} </td> */}

                        <td>
                            <Button variant={"light"} onClick={() => handleClick("Editar Articulo", articuloInsumo, ModalType.UPDATE)}><Pencil color='orange'/></Button>
                            {articuloInsumo.fechaBaja !== null && (
                                <Button variant={"light"} onClick={() => handleClick("Dar de alta articulo", articuloInsumo, ModalType.RESTORE)}><ArrowUp color='green'/></Button>
                            )}
                            {articuloInsumo.fechaBaja === null && (
                                <Button variant={"light"} onClick={() => handleClick("Dar de baja factura", articuloInsumo, ModalType.DELETE)}><ArrowDown color='red'/></Button>
                            )}
                        </td>
                    </tr>
                ))}
            </tbody>

        </Table>

    )}

    {showModal && (
        <ArticuloInsumoModal 
        show = {showModal}
        onHide={() => setShowModal(false)}
        title={title}
        modalType={modalType}
        articuloInsumo={articuloInsumo}
        refreshData={setRefreshData}
        />  
    )}
    </div>
  )
}

export default ArticuloInsumoTable;