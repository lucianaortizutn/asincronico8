import { Button, Form } from "react-bootstrap"
import { useForm } from "../../../hooks/useForm"
import { FC } from 'react';

interface IPropsFormProduct {
    handleAddProduct: Function;
}

export const FormProduct: FC<IPropsFormProduct> = ({handleAddProduct}) => {
    const {handleChange, values, resetForm} = useForm(
        {
            nombre: '',
            imagen: '',
            precio: 0,
        }
    )

    const handleSubmitForm = () => {
        handleAddProduct(values)
        resetForm()
    }

    return (
        <div>
            <Form className="p-4 border rounded" onSubmit={(e) => { e.preventDefault(); handleSubmitForm(); }}>
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
                <div className="d-flex justify-content-center">
                    <Button onClick={handleSubmitForm} variant="primary"disabled={!values.imagen || !values.nombre || !values.precio}>Guardar Producto</Button>
                </div>
            </Form>
        </div>
    )
}