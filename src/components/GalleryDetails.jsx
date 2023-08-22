import React, { useEffect } from "react";

const GalleryDetails = ({ descripcion }) => {
  //useEffect en el momento del montaje
  useEffect(() => {
    console.log("Mostrando descripcion!");
  }, []);

  //useEffect en el momento del desmontaje
  useEffect(() => {
    return () => {
      console.log("Desmontaje del componente! 😥");
    };
  }, []);

  return (
    <>
      <p>{descripcion}</p>
    </>
  );
};

export default GalleryDetails;
