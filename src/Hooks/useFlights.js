export const useFlights = () => {

    const GenerateFlights = () => {
        var array = [] ;
         
        for(var i=0;i<= Math.floor(Math.random() * (15-1)) ; i++){
            array.push({
                Date : `${Math.floor(Math.random() * (12-1)+1).toString().padStart(2,0)}/${Math.floor(Math.random() * (31-1)+1).toString().padStart(2,0)}/2022`,
                Departuretime:`${Math.floor(Math.random() * (24-1)+1).toString().padStart(2,0)}:${Math.floor(Math.random() * 59).toString().padStart(2,0)}`,
                Price : Math.floor(Math.random() * 1500)
            });    
        }

        return array.sort((a,b)=> new Date(b.Date)-new Date(a.Date));
    }

    return {
        GenerateFlights
    }
}