import React, { useContext, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { Context } from "../store/appContext";
import BikeMeApp from "../../img/BikeMeApp.png";
import "../../styles/home.scss";

export const Home = () => {
	const { store, actions } = useContext(Context);
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const history = useHistory();

	console.log("This is your token", store.token);
	const handleClick = () => {
		actions.login(email, password);
	};

	if (store.token && store.token != "" && store.token != undefined) history.push("/demo");

	return (
		<div className="Container w-100">
			<div className="mt-5" />
			<div className="row d-flex justify-content-center align-items-center">
				<div className="col-12 col-lg-6 text-center">
					<h1 className="titulo">BikeMeApp</h1>
					<p>
						<img src={BikeMeApp} className="img-fluid" />
					</p>
				</div>

				<div className="row d-flex justify-content-center">
					<div className="card col-12 col-lg-12">
						{store.token && store.token != "" && store.token != undefined ? (
							"You are logged in with this token" + store.token
						) : (
							<form className="col-11 py-2">
								<div>
									<div className="col-12">
										<label htmlFor="" className="form-label">
											Email
										</label>
										<input
											type="email"
											className="form-control"
											id=""
											placeholder="email@Address.com"
											value={email}
											onChange={e => setEmail(e.target.value)}
										/>
									</div>
									<div className="col-12">
										<label htmlFor="inputPassword" className="form-label">
											Password
										</label>
										<input
											type="password"
											className="form-control"
											id="inputPassword"
											placeholder="password"
											value={password}
											onChange={e => setPassword(e.target.value)}
										/>
									</div>
									<div className="col-12">
										<button type="button" className="btn btn-primary" onClick={handleClick}>
											Iniciar esion
										</button>
									</div>
									<div className="col-12">
										<h5>¿Olvidaste tu contraseña?</h5>
									</div>
									<div className="col-12">
										<button type="button" className="btn btn-primary ">
											Crear cuenta
										</button>
									</div>
								</div>
							</form>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

//    <div className="text-center mt-5">
// 		<h1>Hello Rigo!</h1>
// 		<p>
// 			<img src={rigoImageUrl} />
// 		</p>
// 		<div className="alert alert-info">{store.message || "Loading message from the backend..."}</div>
// 		<p>
// 			This boilerplate comes with lots of documentation:{" "}
// 			<a href="https://github.com/4GeeksAcademy/react-flask-hello/tree/95e0540bd1422249c3004f149825285118594325/docs">
// 				Read documentation
// 			</a>
// 		</p>
// 	</div>
