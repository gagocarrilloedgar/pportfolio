import React from "react";
import { useState, createContext } from "react";
import { routerMain } from "utils";
import axios from "axios";

export const ChallengesContext = createContext();

export function ChallengesContextProvider(props) {

    const [challenges, setChallenges] = useState({});

    const fetchChallengesData = () => {
        axios
            .get(routerMain.challengeRouter.findAll)
            .then((res) => {
                setChallenges(res.data);
                //setJWT(localStorageDB.projects, res.data);
            })
            .catch((err) => console.log(err));
    };


    return (
        <ChallengesContext.Provider
            value={{
                challenges,
                fetchChallengesData
            }}
        >
            {props.children}
        </ChallengesContext.Provider>
    );
}

export default ChallengesContextProvider;
