import { useState } from "react";
import "./App.css";
import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav";
import axios from "axios";
import { Routes, Route } from "react-router-dom";
import About from "./components/About/About";
import Detail from "./components/Detail/Detail";
import PATHROUTES from "./helpers/PathRoutes.helper";
// import Favorites from "./components/Favorites/Favorites";
import { connect } from "react-redux";
import Favorites from "./components/Favorites/Favorites";

function App() {
  // const { myFavorites } = props;
  const [characters, setCharacters] = useState([]);

  const onSearch = (id) => {
    axios(`https://rickandmortyapi.com/api/character/${id}`).then(
      ({ data }) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          window.alert("¡No hay personajes con este ID!");
        }
      }
    );
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  return (
    <div className="App">
      <Nav onSearch={onSearch} />
      <Routes>
        <Route
          path={PATHROUTES.HOME}
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path={PATHROUTES.ABOUT} element={<About />} />
        <Route path={PATHROUTES.DETAIL} element={<Detail />} />
        <Route path={PATHROUTES.FAVORITES} element={<Favorites />} />
        {/* <Route
          path={PATHROUTES.FAVORITES}
          element={<Cards characters={myFavorites} onClose={onClose} />}
        /> */}
      </Routes>
    </div>
  );
}

// export default App;

const mapStateToProps = (state) => {
  return { myFavorites: state.myFavorites };
};

export default connect(mapStateToProps, null)(App);
