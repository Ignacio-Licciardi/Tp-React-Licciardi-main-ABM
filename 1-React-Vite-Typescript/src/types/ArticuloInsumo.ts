import { rubroArticulo } from "./RubroArticulo";
import { unidadMedida } from "./unidadMediad";


export type ArticuloInsumo = {

    id?: number;
    denominacion: string | null;
    rubroArticulo: rubroArticulo | null;
    precioCompra: number;
    stockMinimo: number;
    stockActual: number;
    fechaFacturacion: Date | null;
    unidadMedida: unidadMedida | null ;
    fechaBaja: Date | null;
    fechaAlta: Date;


};