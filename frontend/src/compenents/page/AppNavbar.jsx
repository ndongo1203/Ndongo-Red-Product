import React from 'react';
import profileImage from '../../Assets/images/profile.png'; 
import { IoIosNotifications } from "react-icons/io";
import HeaderHotels from './contenuHotel/HeaderHotels';

const AppNavbar = () => {
    return (
        <div className="">
        <nav className="navbar navbar-expand-lg navbar-light p-2 shadow-sm">
        <div className="container-fluid">
            <a className="navbar-brand fw-bold" href="#dashboard">Dashboard</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse justify-content-end me-5" id="navbarNav">
                <form className="d-flex me-2 reduis-input">
                    <input className="form-control" type="search" placeholder="Rechercher" aria-label="Search" />
                </form>
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a className="nav-link" href="#notification">
                            <IoIosNotifications className='fs-3 mt-2' />
                        </a>
                    </li>
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle this-profile" href="#Profil" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            <img src={profileImage} alt="Profile" className="profile-image img-fluid" />
                        </a>
                        <ul className="dropdown-menu ms-5" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#profile">Profil</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#deconnexion">Déconnexion</a></li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        </nav>
        <div className="">
            {/*<HeaderDashboard />*/}
            <HeaderHotels />
        </div>
        </div>
    );
};

export default AppNavbar;
