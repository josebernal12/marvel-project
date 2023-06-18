import { Link } from "react-router-dom"
import { useForm } from "../../hooks/useForm"

const formData ={
  name: '',
  email:'',
  password:'',
 
}
export const Register = () => {
  const {onInputChange, password, name, email, formState} =  useForm(formData)
  const onSubmit = (e) => {
    e.preventDefault()
      console.log({formState})
  }
  return (
    <div className="formContainer">
    <div className="formWrapper">
  <h1 >Marvel</h1>
    <h4 className="register">Crea tu Cuenta</h4>
     
    <form onSubmit={onSubmit}>
    
        <div className="form-grid">
            <label className="text-white">Name</label>
        <input placeholder="name" type="text" name='name' value={name} onChange={onInputChange} />
        </div>
        <div className="form-grid">
            <label className="text-white">Email</label>
        <input placeholder="email" type="email" name='email' value={email} onChange={onInputChange} />
        </div>
        <div className="form-grid">
            <label className="text-white">Password</label>
        <input placeholder="Password" type="password" name='password' value={password} onChange={onInputChange}/>
        </div>
        
       
        <input className="btn btn-primary"  value='Crear Cuenta' type='submit'/>
        <h5 className="text-white">¿Tienes una cuenta? <Link to='/'>Inicia Sesion</Link></h5>
    </form>
  
  </div>
  </div>
  )
}
