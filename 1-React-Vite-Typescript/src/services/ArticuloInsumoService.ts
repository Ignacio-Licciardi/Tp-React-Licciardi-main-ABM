import { ArticuloInsumo } from "../types/ArticuloInsumo";


const BASE_URL = 'http://localhost:8080/api/v1';

export const ArticuloInsumoService = {


    getArticulosInsumo: async (): Promise<ArticuloInsumo[]> => {

        const response = await fetch(`${BASE_URL}/articulosinsumos`);
        const data = await response.json();
        return data;
    },

    getArticuloInsumo: async (id:number): Promise<ArticuloInsumo> => {

        const response = await fetch (`${BASE_URL}/articulosinsumos/${id}`);
        const data = await response.json();
        return data;

    },

    createArticuloInsumo:async (articuloInsumo:ArticuloInsumo):Promise<ArticuloInsumo> => {

        const response = await fetch(`${BASE_URL}/articulosinsumos`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(articuloInsumo)
        });

        const data = await response.json();
        return data;

    },

    updateArticuloInsumo: async (id: number, articuloInsumo: ArticuloInsumo): Promise<ArticuloInsumo> => {

        const response = await fetch(`${BASE_URL}/articulosinsumos/${id}`, {
            method: "PUT",
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify(articuloInsumo)
        });

        const data = await response.json();
        return data;
    },

    deleteArticuloInsumo: async (id:number): Promise<void> => {
        await fetch(`${BASE_URL}/articulosinsumos/${id}`, {
            method: "DELETE"
        });
    },


}