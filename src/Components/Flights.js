import { useEffect,useState } from 'react'
import {useFlights} from '../Hooks/useFlights'
export const FlightsPanel = (props) => {

    const {
        FlightsData,
        resetForm,
        Reservation
    }=props;
    const [TimeFlights,setFlights] = useState([]);
    const Flights = useFlights();


    useEffect( async () => {
        setFlights(Flights.GenerateFlights());} 
    ,[]);

    const Bookflight = itemSelected => {
        var CurrentReservation = Reservation[0];
        CurrentReservation.push({...FlightsData,...itemSelected});
        Reservation[1]([...CurrentReservation]);
        resetForm()
    }

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="column-4">
              <h1>Hoario de Vuelos <i className="i-clock"></i></h1> 
          </div>
          <div className="column-4">
               <label>{`${FlightsData.Source.name} - ${FlightsData.Destination.name} `} <i className="i-flight"></i> {`Cantidad de Pasajeros ${FlightsData.Passenger}`}  <i className="i-user"></i></label>
          </div>
         {
             TimeFlights.map((x,index)=>  
                <div key={index} className="column-4 ">
                <div className="row  item-list">
                     <div className="column-1">
                         {x.Date} <i className='i-calendar'></i>
                         </div>
                         <div className="column-1">   
                         {x.Departuretime} <i className='i-clock'></i>
                         </div>
                         <div className="column-1">
                         {`$ ${x.Price} MXN / por Pasajero`}
                         </div>
                         <div className="column-1">
                            <button onClick={e=>Bookflight(x)} className='buttonLarge'>Agregar al Carrito <i className='i-cart-plus'></i></button>
                         </div>
                         </div>
            </div>
                )
         }
        
         
  
        </div>
      </div>
    </>
  );
};
