import { mezclarMazo } from "./mezclarMazo";

export const fetchMazo = async (setMazo) => {
    try {
        const response = await fetch("/assets/mazo/mazo.json");
        if (!response.ok) {
            throw new Error("Error al cargar el mazo");
        }

        const data = await response.json();
        const mazo = data.mazo;

        const mazoTransformado = mazo.map((carta) => {
            const valor = carta.valor;
            const inicialPalo = carta.palo.charAt(0).toUpperCase();
            return `${valor}${inicialPalo}`;
        });

        mezclarMazo(mazoTransformado, setMazo);
    } catch (error) {
        console.error("Error:", error.message);
    }
};
