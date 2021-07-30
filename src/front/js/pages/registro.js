import React from "react";
import "../../styles/registro.scss";

export const Registro = () => {
	return (
		<div className="d-flex justify-content-center align-items-center">
			<form className="tarjeta p-5 row">
				<div className="col-10 col-lg-12">
					<div className="col-12">
						<label htmlFor="inputPassword" className="form-label">
							Nombre de usuario
						</label>
						<input type="" className="form-control" id="" />
					</div>
					<div className="col-12">
						<label htmlFor="" className="form-label">
							Email address
						</label>
						<input type="email" className="form-control" id="" />
					</div>
					<div className="col-12">
						<label htmlFor="inputPassword" className="form-label">
							Password
						</label>
						<input type="password" className="form-control" id="inputPassword" />
					</div>
					<div className="col-12">
						<label htmlFor="inputPassword" className="form-label">
							Direccion
						</label>
						<input type="password" className="form-control" id="inputPassword" />
					</div>
					<div className="col-12">
						Paises
						<select id="inputState" className="form-control" value>
							<option selected>Seleciona Paises</option>
							<option value="santiago">Chile</option>
							<option value="santiago">Brasil</option>
							<option value="santiago">argentina</option>
						</select>
					</div>

					<div className="col-12">
						<label htmlFor="inputPassword" className="form-label">
							Ciudad
						</label>
						<input type="password" className="form-control" id="inputPassword" />
					</div>
					<div className="col-12 text-center">
						<a href="/Demo">
							<button type="button" className="text-white btn btn-primary">
								Iniciar Sesion
							</button>
						</a>
					</div>
				</div>
			</form>
		</div>
	);
};
