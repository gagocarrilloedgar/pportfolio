import React from "react";
import { useState, createContext } from "react";
import { routerMain } from "utils";
import axios from "axios";

export const EventsContext = createContext();

export function EventsContextProvider(props) {

    const [events, setEvents] = useState({});

    const fetchEventsData = () => {
        axios
            .get(routerMain.eventRouter.findAll)
            .then((res) => {
                setEvents(res.data);
                //setJWT(localStorageDB.projects, res.data);
            })
            .catch((err) => console.log(err));
    };


    return (
        <EventsContext.Provider
            value={{
                events,
                fetchEventsData
            }}
        >
            {props.children}
        </EventsContext.Provider>
    );
}

export default EventsContextProvider;
