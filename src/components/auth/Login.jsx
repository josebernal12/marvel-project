import { Link } from "react-router-dom";
import { useForm } from "../../hooks/useForm";
const formData ={
  email:'',
  password:'',
 
}
export const Login = () => {
    const {onInputChange, password, email, formState} =  useForm(formData)

    const onSubmit = (e) => {
      e.preventDefault()
        console.log({formState})
    }
  return (
    <div className="formContainer">
    <div className="formWrapper">
  <h1 >Marvel</h1>
    <h4 className="register">Inicia Sesion</h4>
     
    <form onSubmit={onSubmit}>
    
        <div className="form-grid">
            <label className="text-white">Email</label>
        <input placeholder="email" type="email" name='email' value={email} onChange={onInputChange} />
        </div>
        <div className="form-grid">
            <label className="text-white">Password</label>
        <input placeholder="Password" type="password" name='password' value={password} onChange={onInputChange} />
        </div>
        
       
        <input className="btn btn-primary"  value='Inicia Sesion' type='submit'/>
        <h5 className="text-white">¿No Tienes una cuenta? <Link to='/register'>Crea una Cuenta</Link></h5>
    </form>
  
  </div>
  </div>
  );
};
