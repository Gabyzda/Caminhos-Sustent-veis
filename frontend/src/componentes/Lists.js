import React from 'react'
import UpdateList from './UpdateList';
import DeleteList from './DeleteList';
import '../Apprutas.css';
function Lists(props) {
    var rows = [];
    props.alldata.forEach(element => {
        rows.push(
        <tr className="fondocrud" key={element.id}>
            <td>{element.id}</td>
            <td>{element.title}</td>
            <td>{element.author}</td>
            <td><UpdateList
                elementId={element.id}
                singledata={props.singledata}
                getList={props.getList}
                updateList={props.updateList}
                handleChange={props.handleChange}></UpdateList></td>
            <td>
                <DeleteList
                elementId={element.id}
                singledata={props.singledata}
                getList={props.getList}
                deleteList={props.deleteList}></DeleteList>
            </td>
        </tr>)
    });
    return(
      <table className="table table-striped">
          <thead className="fondocrud">
              <tr>
                  <th>#</th>
                  <th>Nome do Emprendedor</th>
                  <th>Nome do Produto</th>
                  <th>Atualizar</th>
                  <th>Eliminar</th>
              </tr>
          </thead>
        <tbody>{rows}</tbody>
      </table>
    )
    
}

export default Lists;