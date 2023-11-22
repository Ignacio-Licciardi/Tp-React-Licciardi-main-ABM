
import { Button, Form, Modal } from "react-bootstrap";
import { useFormik } from "formik";
import { toast } from 'react-toastify';

import { ModalType } from "../../types/ModalType";

import { ArticuloInsumo } from "../../types/ArticuloInsumo";
import { ArticuloInsumoService } from "../../services/ArticuloInsumoService";


type ArticuloInsumoModalProps = {
  show: boolean;
  onHide: () => void;
  title: string;
  modalType: ModalType;
  articuloInsumo: ArticuloInsumo;
  refreshData: React.Dispatch<React.SetStateAction<boolean>>;
};

const ArticuloInsumoModal: React.FC<ArticuloInsumoModalProps> = ({
  show,
  onHide,
  title,
  modalType,
  articuloInsumo,
  refreshData,
}) => {


    const formik = useFormik({
        initialValues: articuloInsumo,
        validateOnChange: true,
        validateOnBlur: true,
        onSubmit: (formData: ArticuloInsumo) => handleSave(formData),
      });
    
      
  const handleSave = async (formData: ArticuloInsumo) => {
    try {
      if (modalType === ModalType.CREATE) {
        await ArticuloInsumoService.createArticuloInsumo(formData);
      } else if (modalType === ModalType.UPDATE) {
        await ArticuloInsumoService.updateArticuloInsumo(formData.id!, formData);
      }

      toast.success(modalType === ModalType.CREATE ? "Articulo Creado" : "Articulo Actualizado", {
        position: "top-center",
      });

      onHide();
      refreshData(prevState => !prevState);
    } catch (error) {
      console.error("Error saving Articulo:", error);
      toast.error('Ha ocurrido un error');
    }
  };


  

  const handleDelete = async () => {
    try {
      // Actualizar la fecha de baja
      if (articuloInsumo) {
        articuloInsumo.fechaBaja = new Date();
        await ArticuloInsumoService.updateArticuloInsumo(articuloInsumo.id!, articuloInsumo);
        toast.success("Articulo dado de baja con éxito", {
          position: "top-center",
        });
  
        // Resto del código para refrescar la lista de facturas, etc.
        onHide();
        refreshData(prevState => !prevState);
      }
    } catch (error) {
      console.error("Error deleting articulo:", error);
      toast.error("Ha ocurrido un error al eliminar el articulo");
    }
  };
  
  const handleRestore = async () => {
    try {
      // Restaurar la fecha de baja a null
      if (articuloInsumo) {
        articuloInsumo.fechaBaja = null;
        await ArticuloInsumoService.updateArticuloInsumo(articuloInsumo.id!, articuloInsumo);
        toast.success("Articulo restaurado con éxito", {
          position: "top-center",
        });
  
        // Resto del código para refrescar la lista de facturas, etc.
        onHide();
        refreshData(prevState => !prevState);
      }
    } catch (error) {
      console.error("Error restoring articulo:", error);
      toast.error("Ha ocurrido un error al restaurar la articulo");
    }
  };
  

  return (
    <>
    
    {modalType === ModalType.RESTORE && (
      <Modal show={show} onHide={onHide} centered backdrop="static">
         <Modal.Header closeButton>
              <Modal.Title>{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p> ¿Está seguro que desea dar de alta el articulo  
                <br /> <strong> {articuloInsumo.id} </strong> ?
              </p>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="secondary" onClick={onHide}>
                Cancelar
              </Button>
              <Button variant="success" onClick={handleRestore}>
                Dar de alta
              </Button>
            </Modal.Footer>
      </Modal>
    )}




    {/*FECHA DE BAJA*/}

    {modalType === ModalType.DELETE && (
      <Modal show={show} onHide={onHide} centered backdrop="static">
          <Modal.Header closeButton>
            <Modal.Title>{title}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <p> ¿Está seguro que desea dar de baja el articulo  
                <br /> <strong> {articuloInsumo.id} </strong> ?
            </p>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
                Cancelar
            </Button>
            <Button variant="danger" onClick={handleDelete}>
                Dar de baja
            </Button>
        </Modal.Footer>
      </Modal>
    )}

    {modalType !== ModalType.DELETE && modalType !== ModalType.RESTORE && (
    <Modal show={show} onHide={onHide} centered backdrop="static">
      <Modal.Header closeButton>
        <Modal.Title>{title}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={formik.handleSubmit}>

        <Form.Group controlId="formDenominacion">
  <Form.Label>Denominación</Form.Label>
  <Form.Control
    name="denominacion"
    type="text"
    value={formik.values.denominacion || ''}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    isInvalid={formik.touched.denominacion && Boolean(formik.errors.denominacion)}
  />
  <Form.Control.Feedback type="invalid">
    {formik.errors.denominacion}
  </Form.Control.Feedback>
</Form.Group>

{/* <Form.Group controlId="formRubroArticulo">
  <Form.Label>Rubro Articulo</Form.Label>
  <Form.Control
    name="rubroArticulo.denominacion"
    type="text"
    value={formik.values.rubroArticulo?.denominacion || ''}
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    isInvalid={formik.touched.rubroArticulo?.denominacion && Boolean(formik.errors.rubroArticulo?.denominacion)}
  />
  <Form.Control.Feedback type="invalid">
    {formik.errors.denominacion}
  </Form.Control.Feedback>
</Form.Group>
 */}


<Form.Group controlId="formPrecioCompra">
  <Form.Label>Precio Compra</Form.Label>
  <Form.Control
    name="precioCompra" 
    type="number"
    value={formik.values.precioCompra || ''} 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    isInvalid={formik.touched.precioCompra && Boolean(formik.errors.precioCompra)}
  />
  <Form.Control.Feedback type="invalid">
    {formik.errors.stockMinimo}
  </Form.Control.Feedback>
</Form.Group>  

          {/*Stock*/}

  <Form.Group controlId="formStockMinimo">
  <Form.Label>Stock Minimo</Form.Label>
  <Form.Control
    name="stockMinimo" 
    type="number"
    value={formik.values.stockMinimo || ''} 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    isInvalid={formik.touched.stockMinimo && Boolean(formik.errors.stockMinimo)}
  />
  <Form.Control.Feedback type="invalid">
    {formik.errors.stockMinimo}
  </Form.Control.Feedback>
</Form.Group>

<Form.Group controlId="formStockActual">
  <Form.Label>Stock Actual</Form.Label>
  <Form.Control
    name="stockActual" 
    type="number"
    value={formik.values.stockActual || ''} 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    isInvalid={formik.touched.stockActual && Boolean(formik.errors.stockActual)}
  />
  <Form.Control.Feedback type="invalid">
    {formik.errors.stockActual}
  </Form.Control.Feedback>
</Form.Group>

{/* <Form.Group controlId="formUndidadMedida">
  <Form.Label>Unidad Medida</Form.Label>
  <Form.Control
    name="unidadMedida" 
    type="text"
    value={formik.values.unidadMedida || ''} 
    onChange={formik.handleChange}
    onBlur={formik.handleBlur}
    isInvalid={formik.touched.unidadMedida && Boolean(formik.errors.unidadMedida)}
  />
  <Form.Control.Feedback type="invalid">
    {formik.errors.stockActual}
  </Form.Control.Feedback>
</Form.Group> */}

          <Modal.Footer>
            <Button variant="secondary" onClick={onHide}>
              Cancelar
            </Button>
            <Button variant="primary" type="submit" disabled={!formik.isValid}>
              Guardar
            </Button>
          </Modal.Footer>
        </Form>
      </Modal.Body>
    </Modal>
    )};
    </>
  );
};

export default ArticuloInsumoModal;