import { Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"

export const FormProduct = () => {
    const {handleChange, values, resetForm} = useForm(
        {
            nombre: '',
            imagen: '',
            precio: 0,
        }
    )

    const handleSubmitForm = () => {
        
    }

    return (
        <div>
            <Form className="p-4 border rounded m-3">
                <Form.Group className="mb-3" controlId="form.Nombre">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese nombre del producto" name="nombre" value={values.nombre} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.Imagen">
                    <Form.Label>Imagen</Form.Label>
                    <Form.Control type="text" placeholder="Ingrese imagen del producto" name="imagen" value={values.imagen} onChange={handleChange} />
                </Form.Group>
                <Form.Group className="mb-3" controlId="form.Precio">
                    <Form.Label>Precio</Form.Label>
                    <Form.Control type="number" placeholder="Ingrese precio del producto" name="precio" value={values.precio} onChange={handleChange} />
                </Form.Group>
            </Form>
        </div>
    )
}