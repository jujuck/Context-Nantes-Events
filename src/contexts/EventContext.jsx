import { createContext, useState, useContext } from "react";

const EventContext = createContext();

export function EventProvider({ children }) {
  const [events, setEvents] = useState([]);

  /** Goal => ajouter l'event dans les favoris */
  const handleFavory = (event) => {
    if (!events.some((evt) => evt.id_manif === event.id_manif)) {
      setEvents((prev) => [...prev, event]);
    } else {
      setEvents((prev) =>
        prev.filter((evt) => evt.id_manif !== event.id_manif)
      );
    }
  };

  return (
    <EventContext.Provider
      value={{
        events,
        handleFavory,
      }}
    >
      {children}
    </EventContext.Provider>
  );
}

export const useEvent = () => useContext(EventContext);
