import { useState, useEffect } from "react";
import ItemForm from '../componentes/ItemForm.js';
import ItemList from '../componentes/ItemList.js';

export default function DashBoard() {
  const [items, setItems,] = useState([])
  const [editingItem] = useState (null)

  useEffect(() => {
    setItems([
      {id:1, title: "Item 1", description: "Descrição do item 1"}
    ])
  })
}

const handleCreate = (newItem) => {
  setItems([... items, {
    ...newItem,id: Date.now()
  }])
}

const handleUpdate = (updatedItem) => {
  setItems(items.map(item => item.id === editingItem.id ? { ...updatedItem, id: editingItem.id } : item ));
  setEditingItem(null);
  }

  const handleDelete = (id) => {
    setItems(items.filter(item => item.id !== id))
  }

const handleEdit = (item) => {
  setEditingItem(item)
}

return (
  <div className="p-8">
    <h1 className="text-3x1 font-bold mb-8">DashBoard CRUD</h1>
    <ItemForm
    onSubmit= {editingItem ? handleUpdate : handleCreate} inicialData={editingItem}/>

    ItemList

  </div>
)