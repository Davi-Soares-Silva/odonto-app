import React, { Component, Fragment } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

import Tabela from './dentista/TabelaDentista';
import FormularioDentista from './dentista/FormularioDentista'
import Navbar from './components/NavBar'


import './App.css';

class App extends Component {
   state = {
      dentistas: [],
   };


   componentDidMount() {
      axios.get("http://localhost:8080/odonto/dentistas").then((res) => {
         const dentistas = res.data;
         this.setState({ dentistas });
      })
   }

   enviarDados = (dentista) => {
      axios.post("http://localhost:8080/odonto/dentistas", dentista).then((res) => {
         this.setState({ dentistas: [...this.state.dentistas, res.data] })
      })
   }

   excluirDentista = (codigo) => {

      const dentistasAtual = this.state.dentistas;

      axios.delete(`http://localhost:8080/odonto/dentistas/${codigo}`).then((res)=>{
         if(res.status === 204){
            this.setState(
               {dentistas: dentistasAtual.filter((dentista) =>{
                  return dentista.codigo !== codigo;
               })
            })
         }
      })
   }

   consultarDentista = (codigo) =>{
      const dentista = this.state.dentistas.filter((dentista)=>{
         return dentista.codigo === codigo;
      })

      console.log(dentista);
   }

   render() {
      return (
         <Fragment>
            <Navbar />
            <div className="container">
               <div className="row">
                  <div className="col-md-4">
                     <FormularioDentista enviarDados={this.enviarDados} />
                  </div>
                  <div className="col-md-8">
                     <Tabela
                        dentistas={this.state.dentistas}
                        excluirDentista={this.excluirDentista}
                        consultarDentista={this.consultarDentista}
                     />
                  </div>
               </div>
            </div>
         </Fragment>
      );
   }
}

export default App;
