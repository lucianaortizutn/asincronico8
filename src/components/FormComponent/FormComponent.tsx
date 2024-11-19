import { ChangeEvent, useState } from "react"

export const FormComponent = () => {

  const [values, setValues] = useState({
    email: "",
    nombre: "",
    edad: 0,
  })

  const {email, nombre, edad} = values

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const {value, name} = event.target;

    if (name != 'edad') {
      setValues({...values, [`${name}`]: value})
    } else {
      setValues({...values, [`${name}`]: parseInt(value)})
    }
  }

  const handleSubmitForm = () => {
    console.log({values});
  }

  return (
    <div>
      <div>
        <h2>Formulario</h2>
      </div>
      <div style={{display: 'flex', flexDirection: 'column', gap: '2vh'}}>
        <input value={email} onChange={handleChange} type="email" name="email" id="email" placeholder="example@example.com"/>
        <input value={nombre} onChange={handleChange} type="text" name="nombre" id="nombre" placeholder="Nombre" />
        <input value={edad} onChange={handleChange} type="number" name="edad" id="edad" placeholder="Edad"/>
      </div>
      <div>
        <button onClick={handleSubmitForm}>Enviar</button>
      </div>
    </div>
  )
}