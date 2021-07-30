import React from "react";
import "../../styles/registrotaller.scss";
import RegisTrotaller from "../../img/RegisTrotaller.png";

export const Registrotaller = () => {
	return (
		<div className="Container">
			<div className="row  d-flex justify-content-center align-items-center">
				<div className="row col-12 col-lg-6 ">
					<div className="text-center">
						<h4>Aquí puedes activar tu perfil para ayudar a otras persona</h4>
						<p>
							<img src={RegisTrotaller} className="img-fluid" />
						</p>
					</div>
				</div>
				<form className="row tarjeta col-10 col-lg-6 ">
					<div className="col-10 col-lg-11">
						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label">
								Nombre del Taller:
							</label>
							<input type="" className="form-control" id="" />
						</div>
						<div className="col-12">
							<label htmlFor="inputPassword" className="form-label">
								Direccion del Taller
							</label>
							<input type="" className="form-control" id="" />
						</div>
						<div className="col-12">
							<p>
								Sube una imagen:
								<input type="file" name="imagensubida" accept="image/png, .jpeg, .jpg, image/gif" />
							</p>
						</div>

						<button type="submit" className="btn btn-primary m-3">
							Enviar
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};
