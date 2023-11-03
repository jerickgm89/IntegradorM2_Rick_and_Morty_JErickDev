import axios from "axios";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import styles from "./Detail.css";
import PATHROUTES from "../../helpers/PathRoutes.helper";

const Detail = () => {
  const { id } = useParams();
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(`http://localhost:3001/rickandmorty/character/${id}`).then(
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

  const onClose = (id) => {
    setCharacter(
      character.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className={styles.containerDt}>
      <Link to={PATHROUTES.HOME}>
        <div className={styles.divButtonDt}>
          <button className={styles.buttonDt} onClick={() => onClose(id)}>
            X
          </button>
        </div>
      </Link>
      {character.name ? (
        <>
          <h3>NOMBRE: {character.name} 🦸‍♂️</h3>
          <h3>ESTADO: {character.status} ☠</h3>
          <h3>ESPECIE: {character.species} 👽</h3>
          <h3>GÉNERO: {character.gender} 👫</h3>
          <h3>ORIGEN: {character.origin?.name} 🌎</h3>
          <img className={styles.imgDt} src={character.image} alt="" />
        </>
      ) : null}
    </div>
  );
};

export default Detail;
