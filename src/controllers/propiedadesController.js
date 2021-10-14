import httpClient from "./httpClient";

const END_POINT = "/api/propiedades";

const listarPropiedades = () => httpClient.get(END_POINT);

const mostrarPropiedad = (code) => httpClient.get(END_POINT + "/" + code);

const crearPropiedad = (propiedad) => httpClient.post(END_POINT, propiedad);

const actualizarPropiedad = (code, propiedad) => httpClient.put(END_POINT + "/" + code, propiedad);

const borrarPropiedad = (code) => httpClient.delete(END_POINT + "/" + code);

export {
  listarPropiedades,
  mostrarPropiedad,
  crearPropiedad,
  actualizarPropiedad,
  borrarPropiedad
};
