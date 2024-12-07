export const mezclarMazo = (mazo,setMazoMezclado) => {
    const mazoMezclado = mazo.sort(() => Math.random() - 0.5);
    return setMazoMezclado(mazoMezclado);
}