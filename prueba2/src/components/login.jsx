import React,{ useState } from "react"

const Login = () => {
    const [formData, setFormData] = useState({
        email: '',
        contraseña: ''
    });

    const handleChange = (event) => {
        const {name, value} = event.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log('Datos del LogIn: ', formData);
    };

    return (
        <form onSubmit = {handleSubmit}>
            <h1 className="Login">Login</h1>
            <label>Correo</label>
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Correo electronico"/>
            <label>Contraseña</label>
            <input type="password" name="contraseña" value={formData.contraseña} onChange={handleChange} placeholder="Contraseña"/>
            <button type="submit">Enviar</button>
        </form>
    );
};

export default Login