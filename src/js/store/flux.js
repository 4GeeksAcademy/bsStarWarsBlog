const getState = ({ getStore, getActions, setStore }) => {
  return {
    store: {
      characters: [],
      vehicles: [],
      planets: [],
      favorites: [],
    },
    actions: {
      getCharacters: () => {
        fetch("https://swapi.dev/api/people/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ characters: data.results });
          })
          .catch((error) => console.error(error));
      },
      getVehicles: () => {
        fetch("https://swapi.dev/api/vehicles/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ vehicles: data.results });
          })
          .catch((error) => console.error(error));
      },
      getPlanets: () => {
        fetch("https://swapi.dev/api/planets/")
          .then((res) => res.json())
          .then((data) => {
            setStore({ planets: data.results });
          })
          .catch((error) => console.error(error));
      },
      addFavorites: (data) => {
      
        let store = getStore()
        setStore({ favorites: [...store.favorites, data] });
      },

      clearFavorites: (data) => {
        setStore({favorites: []})
      }
    },
  };
};

export default getState;
