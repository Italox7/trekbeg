import { useState, useRef } from "react";
import Button from "./Button";

export default function AddItemForm({ handleAddItem }) {
  const [itemText, setItemText] = useState("");
  const inputRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();

    //basic validation
    if (!itemText) {
      alert("Não pode ser vazio!");
      inputRef.current.focus();
      return;
    }

    handleAddItem(itemText);
    setItemText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add an item</h2>
      <input
        ref={inputRef}
        value={itemText}
        onChange={(text) => {
          setItemText(text.target.value);
        }}
        autoFocus
      />
      <Button>Add to list</Button>
    </form>
  );
}
