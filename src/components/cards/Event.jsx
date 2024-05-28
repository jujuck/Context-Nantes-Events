import React from "react";
import { useEvent } from "../../contexts/EventContext";

function Event({ event }) {
  const { handleFavory } = useEvent();

  return (
    <article className="col-4">
      <div className="card">
        <img src={event.media_url} className="card-img-top" alt={event.nom} />
        <div className="card-body">
          <h3>{event.nom}</h3>
          <ul>
            <li>
              Adresse : {event.adresse} {event.ville}
            </li>
            <li>Tarif : {event.precisions_tarifs}</li>
          </ul>
        </div>
        <button type="button" onClick={() => handleFavory(event)}>
          Ajouter aux favoris
        </button>
      </div>
    </article>
  );
}

export default Event;
