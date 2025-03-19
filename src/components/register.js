import React, { useState } from 'react';

export const Register = () => {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  
  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const validate = () => {
    let tempErrors = {};
    
    if (!formData.username) tempErrors.username = "El nombre de usuario es obligatorio";
    else if (formData.username.length < 3) tempErrors.username = "El nombre debe tener al menos 3 caracteres";
    
    if (!formData.email) tempErrors.email = "El email es obligatorio";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = "El formato del email es inválido";
    
    if (!formData.password) tempErrors.password = "La contraseña es obligatoria";
    else if (formData.password.length < 6) tempErrors.password = "La contraseña debe tener al menos 6 caracteres";
    
    if (!formData.confirmPassword) tempErrors.confirmPassword = "Confirmar la contraseña es obligatorio";
    else if (formData.password !== formData.confirmPassword) tempErrors.confirmPassword = "Las contraseñas no coinciden";
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
      // Aquí iría la lógica para enviar los datos al backend
    }
  };

  // Estilos en línea para elementos con gradientes
  const headerStyle = {
    background: 'linear-gradient(to right, #4e73df, #8a2be2)',
    borderRadius: '4px 4px 0 0'
  };
  
  const buttonStyle = {
    background: 'linear-gradient(to right, #4e73df, #8a2be2)',
    border: 'none'
  };
  
  const pageStyle = {
    background: 'linear-gradient(to bottom right, #e6e6fa, #d1d1ff)',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px'
  };

  return (
    <div style={pageStyle}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow">
              <div className="card-header py-4 text-white text-center" style={headerStyle}>
                <h2 className="m-0 fw-bold">Crear Cuenta</h2>
              </div>
              
              {isSubmitted ? (
                <div className="card-body text-center p-5">
                  <div className="text-success mb-4 display-3">✓</div>
                  <h3 className="fs-4 fw-semibold mb-3">¡Registro Exitoso!</h3>
                  <p className="text-muted">Gracias por registrarte, {formData.username}.</p>
                  <button 
                    onClick={() => setIsSubmitted(false)}
                    className="btn btn-primary mt-4 px-4 py-2"
                    style={buttonStyle}
                  >
                    Regresar
                  </button>
                </div>
              ) : (
                <div className="card-body p-4">
                  <form onSubmit={handleSubmit} className="p-2">
                    <div className="mb-4">
                      <label htmlFor="username" className="form-label fw-semibold mb-2">
                        Nombre de Usuario
                      </label>
                      <input
                        type="text"
                        className={`form-control py-2 ${errors.username ? 'is-invalid' : ''}`}
                        id="username"
                        name="username"
                        placeholder="Escribe tu nombre de usuario"
                        value={formData.username}
                        onChange={handleChange}
                      />
                      {errors.username && <div className="invalid-feedback">{errors.username}</div>}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="email" className="form-label fw-semibold mb-2">
                        Email
                      </label>
                      <input
                        type="email"
                        className={`form-control py-2 ${errors.email ? 'is-invalid' : ''}`}
                        id="email"
                        name="email"
                        placeholder="ejemplo@correo.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                      {errors.email && <div className="invalid-feedback">{errors.email}</div>}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="password" className="form-label fw-semibold mb-2">
                        Contraseña
                      </label>
                      <input
                        type="password"
                        className={`form-control py-2 ${errors.password ? 'is-invalid' : ''}`}
                        id="password"
                        name="password"
                        placeholder="Escribe tu contraseña"
                        value={formData.password}
                        onChange={handleChange}
                      />
                      {errors.password && <div className="invalid-feedback">{errors.password}</div>}
                    </div>
                    
                    <div className="mb-4">
                      <label htmlFor="confirmPassword" className="form-label fw-semibold mb-2">
                        Confirmar Contraseña
                      </label>
                      <input
                        type="password"
                        className={`form-control py-2 ${errors.confirmPassword ? 'is-invalid' : ''}`}
                        id="confirmPassword"
                        name="confirmPassword"
                        placeholder="Confirma tu contraseña"
                        value={formData.confirmPassword}
                        onChange={handleChange}
                      />
                      {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
                    </div>
                    
                    <button
                      type="submit"
                      className="btn btn-primary w-100 py-3 mt-2 fw-semibold"
                      style={buttonStyle}
                    >
                      Registrarse
                    </button>
                    
                    <div className="text-center mt-4">
                      <p className="text-muted mb-0">
                        ¿Ya tienes una cuenta? <p href="#" className="text-decoration-none text-primary">Iniciar Sesión</p>
                      </p>
                    </div>
                  </form>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>¨¨
    </div>
  );
};
