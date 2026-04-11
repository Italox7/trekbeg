import Select from "react-select";
import EmptyView from "./EmptyView";
import { useState } from "react";

const options = [
  { value: "default", label: "Sorted by default" },
  { value: "packed", label: "Sorted by packed" },
  { value: "unpacked", label: "Sorted by unpacked" },
];

export default function ItemList({
  items,
  handleDeleteItem,
  handleToggleItem,
}) {
  const [sortBy, setSortBy] = useState("default");

  const sortedItems = [...items].sort((a, b) => {
    if (sortBy == "packed") {
      return b.packed - a.packed;
    }

    if (sortBy == "unpacked") {
      return a.packed - b.packed;
    }

    return;
  });

  return (
    <ul className="item-list">
      {items.length === 0 && <EmptyView />}

      {items.length > 0 ? (
        <section className="sorting">
          <Select
            onChange={(option) => setSortBy(option.value)}
            defaultValue={options[0]}
            options={options}
          />
        </section>
      ) : null}

      {sortedItems.map((item) => {
        return (
          <Item
            key={item.id}
            item={item}
            onDeleteItem={handleDeleteItem}
            onToggleItem={handleToggleItem}
          />
        );
      })}
    </ul>
  );
}

function Item({ item, onDeleteItem, onToggleItem }) {
  return (
    <li className="item">
      <label>
        <input
          checked={item.packed}
          type="checkbox"
          onChange={() => onToggleItem(item.id)}
        />
        {item.name}
      </label>

      <button onClick={() => onDeleteItem(item.id)}>❌</button>
    </li>
  );
}
