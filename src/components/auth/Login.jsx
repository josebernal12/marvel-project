import { Link } from "react-router-dom";

export const Login = () => {
  return (
    <div className="formContainer">
    <div className="formWrapper">
  <h1 >Marvel</h1>
    <h4 className="register">Inicia Sesion</h4>
     
    <form >
    
        <div className="form-grid">
            <label>Email</label>
        <input placeholder="email" type="email" name='email' />
        </div>
        <div className="form-grid">
            <label>Password</label>
        <input placeholder="Password" type="password" name='password' />
        </div>
        
       
        <input className="btn btn-primary"  value='Inicia Sesion' type='submit'/>
        <p>¿No Tienes una cuenta? <Link to='#'>Crea una Cuenta</Link></p>
    </form>
  
  </div>
  </div>
  );
};
