import React from "react";

function DeleteButton({ handleDeleteClick }) {
  return (
    <div>
      <button name="delete" onClick={handleDeleteClick}>
        Delete
      </button>
    </div>
  );
}
export default DeleteButton;
