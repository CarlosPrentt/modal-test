import React from "react";

export const TableIcon = ({ onEdit = () => {}, onDelete = () => {} }) => (
  <div className="users__icons-container">
    <i className="fas fa-edit edit users__edit-icon" onClick={onEdit} />
    <i
      className="fas fa-trash-alt trash users__delete-icon"
      onClick={onDelete}
    />
  </div>
);
