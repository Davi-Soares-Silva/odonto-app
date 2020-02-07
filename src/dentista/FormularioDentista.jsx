import React, { Component } from 'react';

class FormularioDentista extends Component {
   // Sempre que precisamos alterar o estado de um componente sempre que ele for criado, 
   // utilizamos o construtor e criamos a variável que irá definir o state do Componente
   constructor(props) {
      super(props);

      this.initialState = {
         nome: "",
         cro: "",
         telefone: "",
         email: ""
      }

      this.state = this.initialState;
   }

   inputHandler = (event) => {

      const { name, value } = event.target;

      this.setState({ [name]: value })
   }

   enviarDados = () => {

      console.log(this.state)
      this.props.enviarDados(this.state)
      this.setState({ ...this.initialState })
   }

   render() {

      const {nome, cro, telefone, email } = this.state;

      return (
         <div className="card">
            <div className="card-header">
               <h5>Cadastro de Dentistas</h5>
            </div>

            <div className="card-body">
               <div className="form-group">
                  <form>
                     <label htmlFor="nome">Nome</label>
                     <input
                        type="text"
                        className="form-control"
                        id="nome"
                        name="nome"
                        value={nome}
                        placeholder="Digite o nome..."
                        onChange={this.inputHandler}
                     />
                     <label htmlFor="cro">CRO</label>
                     <input
                        type="text"
                        className="form-control"
                        id="cro"
                        name="cro"
                        value={cro}
                        placeholder="Digite o cro..."
                        onChange={this.inputHandler}
                     />
                     <label htmlFor="telefone">Telefone</label>
                     <input
                        type="text"
                        className="form-control"
                        id="telefone"
                        value={telefone}
                        name="telefone"
                        placeholder="Digite o telefone..."
                        onChange={this.inputHandler}
                     />
                     <label htmlFor="email">Email</label>
                     <input
                        type="text"
                        className="form-control"
                        id="email"
                        name="email"
                        value={email}
                        onChange={this.inputHandler}
                        placeholder="Digite o email..."
                     />

                     <button
                        type="button"
                        onClick={this.enviarDados}
                        className="btn btn-success form-control mt-4"
                     >
                        Enviar
                     </button>
                  </form>
               </div>
            </div>
         </div>
      );
   }
}

export default FormularioDentista;