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
import fondo from "../src/img/fondo.jpg"

function App() {
  // const { myFavorites } = props;
  const [characters, setCharacters] = useState([]);

  // const onSearch = (id) => {
  //   axios(`http://localhost:3001/rickandmorty/character/${id}`).then(
  //     ({ data }) => {
  //       if (data.name) {
  //         setCharacters((oldChars) => [...oldChars, data]);
  //       } else {
  //         window.alert("¡No hay personajes con este ID!");
  //       }
  //     }
  //   );
  // };

  // onSearch con Async Await
  const onSearch = async (id) => {
    try {
      const { data } = await axios(`http://localhost:3001/rickandmorty/character/${id}`);
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert("¡No hay personajes con este ID!");
      }
    } catch (error) {
      console.error(error);
    }
  };

  const onClose = (id) => {
    setCharacters(
      characters.filter((char) => {
        return char.id !== Number(id);
      })
    );
  };

  // const login = (userData) => {
  //   const { email, password } = userData;
  //   const URL = 'http://localhost:3001/rickandmorty/login/';
  //   axios(URL + `?email=${email}&password=${password}`).then(({ data }) => {
  //       const { access } = data;
  //       setAccess(data);
  //       access && navigate('/home');
  //   });
  // }

  // Login con Async Await
  const login = async (userData) => {
    const { email, password } = userData;
    const URL = 'http://localhost:3001/rickandmorty/login/';
    try {
      const { data } = await axios(URL + `?email=${email}&password=${password}`);
      const { access } = data;
      setAccess(data);
      access && navigate('/home');
    } catch (error) {
      console.error(error);
    }
  }

  

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
