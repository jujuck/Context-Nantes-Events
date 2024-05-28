import React from "react";
import { useLoaderData } from "react-router-dom";

import Event from "../components/cards/Event";

function Calendar() {
  const events = useLoaderData();

  return (
    <main className="container">
      <h2>Mes évenements de la semaine</h2>
      <section className="row">
        {events.results.map((event) => (
          <Event event={event} key={event.id} />
        ))}
      </section>
    </main>
  );
}

export default Calendar;
