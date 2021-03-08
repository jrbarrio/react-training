import { useForm } from 'react-hook-form';
import { validateDni } from '../validators/dniValidator'

export default function Form() {

    // handleSubmit manages form submission (previously setting preventdefault so it is not sent to the server)
    // and passes form data as parameter
    const { register, handleSubmit, errors, watch } = useForm();

    const onSubmit = (data) => {
        console.log(data);
    }

    return (<>
        <div>
              <p>Name: { watch('name')}</p>  
        </div>
        <form onSubmit={ handleSubmit(onSubmit) }>
            <div className="form-group">
                <label>Nombre</label>
                <input type="text"
                    className="form-control"
                    name="name"
                    ref={register({ 
                        required: 'Name is required', 
                        minLength: {
                            value: 4,
                            message: 'Name must have at least 4 characters'
                        }
                    })}
                />
                { errors.name && <p className="error">{ errors.name.message }</p>}
            </div>
            <div className="form-group">
                <label>Surname</label>
                <input type="text"
                    className="form-control"
                    name="surname"
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
                { errors.dni && <p>DNI is not valid</p> }
            </div>
            <input type="submit" value="Send" />
        </form>
        </>);
}