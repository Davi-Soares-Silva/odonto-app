import React from 'react';

const NavBar = () => {
   return (
      <nav className="navbar navbar-expand navbar-light bg-dark mb-5">
         <a
            className="navbar-brand text-white text-uppercase"
            href="/"
         >
            Odonto
         </a>

         <div className="collapse navbar-collapse">
            <ul className="navbar-nav mr-auto">
               <li className="nav-item active">
                  <a href="/home" className="nav-link text-white">
                     <i className="fas fa-home"></i>
                     &nbsp;Home</a>
               </li>
               <li className="nav-item active">
                  <a href="/dentistas" className="nav-link text-white">
                     <i className="fas fa-tooth"></i>
                     &nbsp;Dentistas</a>
               </li>
               <li className="nav-item active">
                  <a href="/pacientes" className="nav-link text-white">
                     <i className="fas fa-user-injured"></i>
                     &nbsp;Pacientes</a>
               </li>
               <li className="nav-item active">
                  <a href="/consultas" className="nav-link text-white">
                     <i className="fas fa-calendar-alt"></i>
                     &nbsp;Marcar Consulta</a>
               </li>
            </ul>

            <form className="form-inline">
               <input
                  type="search"
                  className="form-control mr-sm-2"
                  placeholder="Buscar..."
               />

               <button
                  className="btn btn-primary my-2 my-sm-0"
               >
                  Buscar
               </button>
            </form>
         </div>


      </nav>
   )
}

export default NavBar;