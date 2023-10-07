import { useState } from "react";

export default function SearchBar(props) {
  const [id, setId] = useState("");

  const handleChange = (e) => {
    setId(e.target.value);
  };

  const handleSubmit = () => {
    onSearch(id);
    setId("");
  };

  const { onSearch } = props;
  return (
    <div>
      <input type="search" onChange={handleChange} value={id} />
      <button onClick={handleSubmit}>Agregar</button>
      {/* <button onClick={() => onSearch(id)}>Agregar</button> */}
    </div>
  );
}
