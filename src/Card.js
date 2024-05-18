import React from "react";

const Card = ({ title, image, instructor }) => {
  return (
    <div className="card text-center hg-dark">
      <div class="card-body text-light">
        <img src={image} alt={title} className="image-width"></img>
        <h4 className="card-title">{title}</h4>
        <p className="card-text text-secondary">Contenido del curso {title}</p>

        {instructor && <p className="card-text">Instructor: {instructor}</p>}
      </div>
    </div>
  );
};

export default Card;
