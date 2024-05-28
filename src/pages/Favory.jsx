import React from "react";
import { useEvent } from "../contexts/EventContext";

import Event from "../components/cards/Event";

function Favory() {
  const { events } = useEvent();
  return (
    <main className="container">
      <h2>Mes évenements de la semaine</h2>
      <section className="row">
        {events.map((event) => (
          <Event event={event} key={event.id} />
        ))}
      </section>
    </main>
  );
}

export default Favory;
