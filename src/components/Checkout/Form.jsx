const Form = ({ datosForm, guardarDatosInput, enviarOrden }) => {
  return (
    <div>
      <form onSubmit={enviarOrden}>
        <label htmlFor="nombre">Nombre</label>
        <input
          type="text"
          id="nombre"
          name="nombre"
          value={datosForm.nombre}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="telefono">Telefono</label>
        <input
          type="text"
          id="telefono"
          name="telefono"
          value={datosForm.telefono}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="email">E-mail</label>
        <input
          type="email"
          id="email"
          name="email"
          value={datosForm.email}
          onChange={guardarDatosInput}
          required
        />

        <label htmlFor="emailRepetido">Repetir E-mail</label>
        <input
          type="email"
          id="emailRepetido"
          name="emailRepetido"
          value={datosForm.emailRepetido}
          onChange={guardarDatosInput}
          required
        />

        <button type="submit">Enviar orden</button>
      </form>
    </div>
  );
};

export default Form;