import React from "react";
import Card from "./Card"; // Asegúrate de importar el componente Card correctamente

import image1 from "./assents/nginx.jpg";
import image2 from "./assents/java.jpg";
import image3 from "./assents/javaScript.jpg";

const cards = [
  {
    id: 1,
    title: "Nginx",
    image: image1,
    instructor: "",
  },
  {
    id: 2,
    title: "JAVA",
    image: image2,
    instructor: "Angela Rios Luna",
  },
  {
    id: 3,
    title: "JavaScript",
    image: image3,
    instructor: "Benito Lopez Razo",
  },
];

function Cards() {
  return (
    <div className="container d-flex justify-content-center align-item-center h-100">
      <div className="row">
        {cards.map((c) => (
          <div className="col-md-4" key={cards.id}>
            <Card
              key={c.id}
              id={c.id}
              title={c.title}
              image={c.image}
              instructor={c.instructor}
              url={c.url}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Cards;
