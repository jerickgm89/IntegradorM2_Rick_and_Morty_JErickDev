import axios from "axios";

export const ADD_FAV = "ADD_FAV";
export const REMOVE_FAV = "REMOVE_FAV";
export const FILTER = "FILTER";
export const ORDER = "ORDER";
export const FILTER_STATUS = "FILTER_STATUS";
export const FILTER_SPECIES = "FILTER_SPECIES";
export const FILTER_ORIGIN = "FILTER_ORIGIN";

// export const addFav = (character) => {
//    const endpoint = 'http://localhost:3001/rickandmorty/fav';
//    return (dispatch) => {
//       axios.post(endpoint, character).then(({ data }) => {
//          return dispatch({
//             type: 'ADD_FAV',
//             payload: data,
//          });
//       });
//    };
// };

// com async await addFav
export const addFav = (character) => {
  const endpoint = 'http://localhost:3001/rickandmorty/fav';
  return async (dispatch) => {
    try {
      const { data } = await axios.post(endpoint, character);
      return dispatch({
        type: 'ADD_FAV',
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

// export const removeFav = (id) => {
//   const endpoint = 'http://localhost:3001/rickandmorty/fav/' + id;
//     return (dispatch) => {
//         axios.delete(endpoint).then(({ data }) => {
//           return dispatch({
//               type: 'REMOVE_FAV',
//               payload: data,
//         });
//         });
//     };
// };

//con async await removeFav
export const removeFav = (id) => {
  const endpoint = `http://localhost:3001/rickandmorty/fav/${id}`;
  return async (dispatch) => {
    try {
      const { data } = await axios.delete(endpoint);
      return dispatch({
        type: 'REMOVE_FAV',
        payload: data,
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const filterCards = (gender) => {
  return {
    type: "FILTER",
    payload: gender,
  };
};

export const orderCards = (order) => {
  return {
    type: "ORDER",
    payload: order,
  };
};
