import Swal from 'sweetalert2';

export const showerrorAlert = ( titulo, texto ) => {
  Swal.fire({
    icon: "error",
    title:titulo,
    text: texto,
  });
};