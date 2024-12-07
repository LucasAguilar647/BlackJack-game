import { showerrorAlert } from "../components/sweetAlert/errorSweetAlert";
import { showsuccessAlert } from "../components/sweetAlert/succesSweetAlert";

export const verificarPuntos = (puntos) => {
    if (puntos > 21) {
        showerrorAlert('Te pasaste', 'Tus puntos son mayores a 21');
    } else if (puntos === 21) {
        showsuccessAlert('Ganaste', 'Tienes 21 puntos');
    }
   


 }