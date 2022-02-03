export const useFlights = () => {

    const GenerateFlights = () => {
        var array = [] ;
         
        for(var i=0;i<= Math.floor(Math.random() * 15) ; i++){
            array.push({
                Date : `${Math.floor(Math.random() * 31).toString().padStart(2,0)}/${Math.floor(Math.random() * 12).toString().padStart(2,0)}/2022`,
                Departuretime:`${Math.floor(Math.random() * 24).toString().padStart(2,0)}:${Math.floor(Math.random() * 59).toString().padStart(2,0)}`,
                Price : Math.floor(Math.random() * 1500)
            });    
        }

        return array;
    }

    return {
        GenerateFlights
    }
}