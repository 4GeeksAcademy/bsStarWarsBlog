import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-light bg-light mb-3 bg-dark">
			<Link to="/">
				<img className="navbar-brand mb-0 ms-4 justify" style={{width: '200px', height: '100px'}} src="https://lumiere-a.akamaihd.net/v1/images/sw_logo_stacked_2x-52b4f6d33087_7ef430af.png?region=0,0,586,254"/>
			</Link>
			<div className="dropdown">
  <button className="btn dropdown-toggle btn btn-light me-4" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
    Favorites
  </button>
  <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
  {store.favorites.length != 0 &&
          store.favorites.map((favorites, ind) => {
            return (
            <Link to='/DetailsView' state={favorites}>   
              <li key={ind}>{favorites.data.name != null && favorites.data.name}</li>
            </Link>
          );
          })}
  </ul>
</div>
		</nav>
	);
};

