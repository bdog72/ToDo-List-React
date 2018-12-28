import React, { Component } from 'react';

export default class TodoItem extends Component {
  render() {
    const deleteButton = {
      cursor: 'pointer'
    };

    const { title, handleDelete, handleEdit } = this.props;
    return (
      <li className="list-group-item text-capitalize d-flex justify-content-between mt-2">
        <h6>{title}</h6>
        <div className="todo-icon">
          <span
            style={deleteButton}
            className="mx-2 text-success"
            onClick={handleEdit}
          >
            <i className="fas fa-pen" />
          </span>
          <span
            style={deleteButton}
            className="mx-2 text-danger"
            onClick={handleDelete}
          >
            <i className="fas fa-trash" />
          </span>
        </div>
      </li>
    );
  }
}
