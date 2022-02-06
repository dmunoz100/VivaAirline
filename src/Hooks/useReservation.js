import {ReservationContext} from '../Context/ReservationContext'
import { useContext } from 'react'
export const useReservation = () => {
    return useContext(ReservationContext);
}