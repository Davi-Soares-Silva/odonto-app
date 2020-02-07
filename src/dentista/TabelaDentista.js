import React, { Component } from 'react';

const TableHead = () => {
  return (
    <thead>
      <tr>
        <th>CODIGO</th>
        <th>NOME</th>
        <th>TELEFONE</th>
        <th colSpan="2">AÇÕES</th>
      </tr>
    </thead>
  )
}

const TableBody = (props) => {

  const dentistas = props.dentistas.map((dentista) => {
    return (
      <tr key={dentista.codigo}>
        <td>{dentista.codigo}</td>
        <td>{dentista.nome}</td>
        <td>{dentista.telefone}</td>
        <td>
          <button className="btn btn-warning btn-small">
            <i className="fas fa-pencil-alt"></i>
          </button>
        </td>
        <td>
          <button 
            className="btn btn-danger btn-small"
            onClick={()=> props.excluirDentista(dentista.codigo)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </td>
      </tr>
    );
  });

  return (
    <tbody>
      {dentistas}
    </tbody>
  )

}

class TabelaDentista extends Component {

  render() {

    const { dentistas } = this.props;
    const { excluirDentista } = this.props;

    return (
      <div className="card">
        <div className="card-header">
          <h5>Lista de Dentistas Cadastrados</h5>
        </div>

        <div className="card-body">
          <table className="table table-hover">
            <TableHead />
            <TableBody 
              dentistas={dentistas} 
              excluirDentista = {excluirDentista}  
            />
          </table>
        </div>
      </div>
    );
  }
}

export default TabelaDentista;