import { useForm } from 'react-hook-form';
import { validateDni } from '../validators/dniValidator'

export default function Formulario() {

    // handleSubmit se encarga de que el formulario se envie correctamente (haciendo preventdefault para que no envie el formulario al servidor)
    // y pasa los datos del frmulario como parametro
    const { register, handleSubmit, errors, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (<>
        <div>
              <p>Nombre: { watch('nombre')}</p>  
        </div>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text"
                    className="form-control"
                    name="nombre"
                    ref={register({ 
                        required: 'El campo nombre es obligatorio', 
                        minLength: {
                            value: 4,
                            message: 'La longitud minima es 4'
                        }
                    })}
                />
                { errors.nombre && <p className="error">{ errors.nombre.message }</p>}
            </div>
            <div className="form-group">
                <label>Apellidos</label>
                <input type="text"
                    className="form-control"
                    name="apellidos"
                    ref={register}
                />
            </div>
            <div className="form-group">
                <label>Email</label>
                <input type="text"
                    className="form-control"
                    name="email"
                    ref={register({ pattern: /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/ })}
                />
            </div>
            <div className="form-group">
                <label>DNI</label>
                <input type="text"
                    className="form-control"
                    name="dni"
                    ref={register({
                        validate: validateDni
                    })}
                />
                { errors.dni && <p>El DNI esta fatal</p> }
            </div>
            <input type="submit" value="Enviar" />
        </form>
        </>);
}