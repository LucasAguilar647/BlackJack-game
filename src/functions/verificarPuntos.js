import { showerrorAlert } from "../components/sweetAlert/errorSweetAlert";
import { showsuccessAlert } from "../components/sweetAlert/succesSweetAlert";

export const verificarPuntos = (puntos, jugador) => {
    if (puntos > 21) {
        showerrorAlert(`Jugador ${jugador}: Te pasaste`, `Tus puntos son mayores a 21`);
    } else if (puntos === 21) {
        showsuccessAlert(`Jugador ${jugador}: ¡Ganaste!`, 'Tienes exactamente 21 puntos');
    }
};

export default verificarPuntos;