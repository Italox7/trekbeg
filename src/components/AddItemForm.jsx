import { useState } from "react";
import Button from "./Button";

export default function AddItemForm() {
  const [itemText, setItemText] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        console.log(itemText);
      }}
    >
      <h2>Add an item</h2>
      <input
        value={itemText}
        onChange={(text) => {
          setItemText(text.target.value);
        }}
      />
      <Button>Add to list</Button>
    </form>
  );
}
