import React, { useEffect, useState } from "react";
import { sculptureList } from "../data/data.js";
import GalleryDetails from "./GalleryDetails.jsx";

const Gallery = () => {
  //Estado
  const [index, setIndex] = useState(0);

  //Nuevo estado
  const [show, setShow] = useState(false);

  //useEffect
  useEffect(() => {
    alert("Bienvenidos a la galeria del arte! 🤩");
  }, []);

  console.log(sculptureList[index]);

  //Guardar la posicion
  let escultura = sculptureList[index];

  return (
    <>
      <button
        onClick={() => setIndex(index - 1)}
        // disabled={index < 1 ? true : false}
        disabled={index >= 1 ? false : true}
        className="margenes"
      >
        Back
      </button>
      <button
        onClick={() => setIndex(index + 1)}
        // disabled={index + 1 < sculptureList.length ? false : true}
        disabled={index + 1 === sculptureList.length ? true : false}
        className="margenes"
      >
        Next
      </button>

      <h2>
        {escultura.name} by {escultura.artist}
      </h2>

      <h3>
        {index + 1} of {sculptureList.length}
      </h3>

      <img src={escultura.url} alt={escultura.alt} />

      <div className="margenes">
        <button onClick={() => setShow(!show)}>
          {show ? "Hide Details" : "Show Details"}
        </button>
        {/* Muestre un parrafo con la descripcion */}
        {/* <p>Descripcion</p> */}
        {show && <GalleryDetails descripcion={escultura.description} />}
      </div>
    </>
  );
};

export default Gallery;
