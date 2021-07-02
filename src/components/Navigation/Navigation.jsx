import React from 'react';
import Logo from '../../assets/images/Medicare-logo.png';
import './Navigation.css';

function Navigation() {
    return (
        <nav className="navbar navbar-expand-md navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">
                    <img src={Logo} alt="logo" />
                </a>
                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbarNavAltMarkup"
                    aria-controls="navbarNavAltMarkup"
                    aria-expanded="false"
                    aria-label="Toggle navigation"
                >
                    <span className="navbar-toggler-icon" />
                </button>
                <div className=" collapse navbar-collapse navigation-right" id="navbarNavAltMarkup">
                    <div className="ms-5 ms-md-0 navbar-nav ">
                        <a className="nav-link active" aria-current="page" href="#">
                            Home
                        </a>
                        <a className="nav-link" href="#">
                            About us
                        </a>
                        <a className="nav-link" href="#">
                            Services
                        </a>
                        <a className="nav-link" href="#">
                            Shop
                        </a>
                    </div>
                    <div className=" social-icons d-none d-lg-block ">
                        <a className="" href="#">
                            <i className="fab fa-facebook-f" />
                        </a>
                        <a className="" href="#">
                            <i className="fab fa-instagram" />
                        </a>
                        <a className="" href="#">
                            <i className="fab fa-twitter" />{' '}
                        </a>
                        <a className="" href="#">
                            <i className="fab fa-google-plus-g" />{' '}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default Navigation;

/*

<div className="container py-3 navigation">
            <div className="row bg-white text-black nav navigation-main">
                <div className="col-6 col-md-3 ">
                    <img src={Logo} alt="logo" />
                </div>
                <div className="col-6 navigation-item ">
                    <a href="#" className="nav-link">
                        Home
                    </a>
                    <a href="#" className="nav-link">
                        About us
                    </a>
                    <a href="#" className="nav-link">
                        Services
                    </a>
                    <a href="#" className="nav-link">
                        Shop
                    </a>
                </div>
                <div className="col-6 col-sm-3 social-icons ">
                    <a className="" href="#">
                        <i className="fab fa-facebook-f" />
                    </a>
                    <a className="" href="#">
                        <i className="fab fa-instagram" />
                    </a>
                    <a className="" href="#">
                        <i className="fab fa-twitter" />{' '}
                    </a>
                    <a className="" href="#">
                        <i className="fab fa-google-plus-g" />{' '}
                    </a>
                </div>
            </div>
        </div>

*/
