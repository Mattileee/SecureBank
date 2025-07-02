import React, { forwardRef } from "react";

interface ListProps<T> {
  items: T[];
  onSelect: (item: T) => void;
}

// Inner component with generic props and ref
function ListInner<T>(
  { items, onSelect }: ListProps<T>,
  ref: React.Ref<HTMLUListElement>
) {
  return (
    <ul ref={ref}>
      {items.map((item, index) => (
        <li key={index}>
          <button onClick={() => onSelect(item)}>Select</button>
          {String(item)}
        </li>
      ))}
    </ul>
  );
}

// Factory function to create a typed list component
export function createGenericList<T>() {
  return forwardRef<HTMLUListElement, ListProps<T>>(ListInner);
}