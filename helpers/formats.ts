export const DateFormat = (fecha: string): string => {
    const fechaObjeto = new Date(fecha);
    return fechaObjeto.toLocaleDateString('es-ES',  {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
};