import { useState, useEffect, useContext } from "react";
import CardsItem from "./CardsItem";
import api from "../../services/api";
import "./Cards.css";
import { authContext } from "../../hooks/authContext";

function tableau() {
  const [allcar, setAllcar] = useState([]);
  const { logout } = useContext(authContext);

  const getAllCar = () => {
    api
      .get("car/getAllCars")
      .then((response) => setAllcar(response.data))
      .catch((err) => console.warn(err.response));
  };

  useEffect(() => {
    getAllCar();
  }, [allcar]);

  const cardAllMap = allcar.map((cardItem) => (
    <CardsItem
      id={cardItem.id}
      modele={cardItem.modele}
      brand={cardItem.brand}
      kilometer={cardItem.kilometer}
      color={cardItem.color}
    />
  ));

  return (
    <div className="Allcars">
      <button id="btn-logout" type="button" onClick={() => logout()}>
        logout
      </button>

      {cardAllMap}
    </div>
  );
}

export default tableau;
