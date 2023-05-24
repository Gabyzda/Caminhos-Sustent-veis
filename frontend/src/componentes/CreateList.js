import React from "react";

function CreateList(props) {
  return (
    <React.Fragment>
      <button
        type="button"
        className="btn btn-info"
        data-toggle="modal"
        data-target="#myModal"
      >
        Crear Cadastro de Producto
      </button>
      <div
        className="modal fade"
        id="myModal"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <span className="modal-title" id="exampleModalLabel">
                 Cadastro de Producto
              </span>
              <button type="button" className="close" data-dismiss="modal">
                <span>&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <input
                type="text"
                placeholder="Nome do Emprendedor"
                name="title"
                value={props.singledata.title}
                onChange={props.handleChange}
              />
              <br />
              <input
                type="text"
                placeholder="Nome do Producto"
                name="author"
                value={props.singledata.author}
                onChange={props.handleChange}
              />
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-dismiss="modal"
              >
                Sair
              </button>
              <button
                type="button"
                className="btn btn-primary"
                data-dismiss="modal"
                onClick={props.createList}
              >
                Crear
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CreateList;
