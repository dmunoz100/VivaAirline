import React, { useState,useContext } from "react";

export const ReservationContext = React.createContext();

export const ReservationProvider = props => {
    const Reservation = useState([]);
    return <ReservationContext.Provider value={Reservation} {...props} />
}