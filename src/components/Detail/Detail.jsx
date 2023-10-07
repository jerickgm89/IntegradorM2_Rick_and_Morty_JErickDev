import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacter(data);
        } else {
          window.alert("No hay personajes con ese ID");
        }
      }
    );
    return setCharacter({});
  }, [id]);

  return (
    <div>
      {character ? (
        <div>
          <h1>{character.name}</h1>
          <img
            src={character.image}
            style={{ width: "300px", height: "420px" }}
          />
          <h1>{character.status}</h1>{" "}
        </div>
      ) : (
        <h1>Loading...</h1>
      )}
    </div>
  );
};

export default Detail;
