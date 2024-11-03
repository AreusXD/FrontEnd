import React from "react";
import '../assets/css/Login.css'; 
import { urlApi } from "../services/apirest";
import axios from 'axios';

class Login extends React.Component {
    state = {
        form:{
            "usuario":"",
            "contrasenia":"",
        },
        error:false,
        errorMsg:""
    }
    
    manejadorOnchange = async e => {
        this.setState({
            form:{
                ...this.state.form,
                [e.target.name]: e.target.value
            
            }
        })
        console.log(this.state.form);
    }

    ManejadorLogin = () => {
        let url = urlApi + "auth";
        axios.post(url, this.state.form)
            .then(response => {
                console.log("Respuesta del servidor:", response.data); 
                if (response.data.status === "ok") {
                    localStorage.setItem("token", response.data.result.token);
                    window.location.href = "/dashboard";
                } else {
                    this.setState({
                        error: true,
                        errorMsg: response.data.result.error_msg
                    });
                }
            })
            .catch(error => {
                console.error("Error en la solicitud:", error); // También podrías ver el error en caso de que falle la conexión
                this.setState({
                    error: true,
                    errorMsg: "Error de conexión"
                });
            });
    }

    render() {
        return (
<React.Fragment>

    <section className="vh-100 d-flex align-items-center bg-light">
        <div className="container">
            <div className="row justify-content-center align-items-center">
                <div className="col-md-5 col-lg-6">
                    <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                        className="img-fluid" alt="Sample image" />

                </div>
                <div className="col-md-7 col-lg-5">
                    <form>
                        <h3 className="text-center mb-4">ACCESO AL SISTEMA</h3>
                        <div className="d-flex justify-content-center mb-3"></div>

                        <div className="form-outline mb-4">
                            <input type="text" id="form3Example3" className="form-control form-control-lg" name="usuario"
                                placeholder="Username" onChange={this.manejadorOnchange} />
                        </div>

                        <div className="form-outline mb-3">
                            <input type="password" id="form3Example4" className="form-control form-control-lg" name="contrasenia"
                                placeholder="Password" onChange={this.manejadorOnchange} />
                        </div>

                        <div className="d-flex justify-content-between align-items-center mb-4">
                            <div className="form-check">
                                <input className="form-check-input" type="checkbox" value="" id="form2Example3" />
                                <label className="form-check-label" htmlFor="form2Example3">
                                    Remember me
                                </label>
                            </div>
                            <a href="#!" className="text-muted">Forgot password?</a>
                        </div>

                        <div className="text-center">
                            <button type="button" className="btn btn-primary btn-lg w-100" onClick={this.ManejadorLogin}>Login</button>
                        </div>

                        <p className="text-center mt-3 mb-0">Don't have an account? <a href="#!" className="link-primary">Register</a></p>
                        
                        {this.state.error &&
                            <div className="alert alert-danger mt-3" role="alert">
                                {this.state.errorMsg}
                            </div>
                        }
                    </form>
                </div>
            </div>
        </div>
        
    </section>
</React.Fragment>
        );
    }
}

export default Login;
