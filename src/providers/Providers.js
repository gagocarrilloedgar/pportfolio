import React from 'react'
import {
    UserContextProvider,
    ProjectContextProvider,
    OpenContextProvider,
    CompanyContextProvider,
    ResourcesContextProvider,
    EventsContextProvider,
    ChallengesContextProvider
} from "hooks";

export const Providers = ({ children }) => {
    return (
        <OpenContextProvider>
            <EventsContextProvider>
                <ChallengesContextProvider>
                    <CompanyContextProvider>
                        <ResourcesContextProvider>
                            <UserContextProvider>
                                <ProjectContextProvider>
                                    {children}
                                </ProjectContextProvider>
                            </UserContextProvider>
                        </ResourcesContextProvider>
                    </CompanyContextProvider>
                </ChallengesContextProvider>
            </EventsContextProvider>
        </OpenContextProvider>
    );
}
