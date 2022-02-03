import { useState } from "react"

export const usePassenger=() => {

    const [CountPassenger,setCountPassenger] = useState(0);

    const IncrementPassenger = () => {
        var count = CountPassenger +1;
        setCountPassenger(count);
    }

    const DecrementPassenger = () => {
        if(CountPassenger<=0){
            setCountPassenger(0);
        }else {
            var count = CountPassenger -1;
            setCountPassenger(count);  
        }
    }

    const ResetoCountPassenger = () => {
        setCountPassenger(0);
    }

    return {
        CountPassenger,
        IncrementPassenger,
        DecrementPassenger,
        ResetoCountPassenger
    }
}