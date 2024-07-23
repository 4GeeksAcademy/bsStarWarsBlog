import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3 bg-dark">
			<Link to="/">
				<img className="navbar-brand mb-0 ms-4 justify" style={{width: '200px', height: '100px'}} src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"/>
			</Link>
			<div className="dropdown">
  <button className="btn dropdown-toggle btn btn-light me-4" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Dropdown button
  </button>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
    <li><a className="dropdown-item active" href="#">Action</a></li>
    <li><a className="dropdown-item" href="#">Another action</a></li>
    <li><a className="dropdown-item" href="#">Something else here</a></li>
    <li><hr className="dropdown-divider"/></li>
    <li><a className="dropdown-item" href="#">Separated link</a></li>
  </ul>
</div>
		</nav>
	);
};

