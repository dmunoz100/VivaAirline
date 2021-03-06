import {ModalReservation} from '../Components/ModalReservation'
import { useState } from 'react';
import {useReservation}from '../Hooks/useReservation'
export const MyReservation = () => {

  const [Reservation,setReservation] = useReservation();
  const [showModal,setShowModal] = useState(false)
  const CalculateTotal = () => {
    var total = 0;
    Reservation.forEach((e) => {
      total = total + e.Passenger * e.Price;
    });
    return total;
  };

  const DeleteReservation = (index) => {
    var CurrentReservation = Reservation;
    CurrentReservation.splice(index, 1);
    setReservation([...CurrentReservation]);
  };

  const ShowModalReserve = () => {
    setShowModal(true);
  }

  const CloseModalReserve = () => {
    setShowModal(false);
  }

  return (
    <div>
      <div className="container">
        <div className="row">
          <div className="column-3">
            <h1>
              Detalle de Mis Reservaciones <i className="i-basket"></i>
            </h1>
          </div>
          <div className="column-1 ">
          <button onClick={e=>{setReservation([...[]])}} className="buttonLarge">Vaciar Carrito <i className='i-eraser'></i></button>
            </div>
          {Reservation.map((x, index) => (
            <div key={index} className="column-4 ">
              <div className="row ">
                <div className="column-3 item-list">
                      <div className='column-1'>
                          <div className='column-4'><i className='i-location'></i>Vuelo Origen:</div>
                          <div className='column-4'>  <label>{x.Source.name}</label></div>
                          <div className='column-4'><i className='i-location'></i>Vuelo Destino:</div>
                          <div className='column-4'> <label>{x.Destination.name}</label></div>
                      </div>
                      <div className='column-2'>
                          <div className='column-4'><i className='i-calendar'></i>Fecha Vuelo</div>
                          <div className='column-4'> <label>{x.Date}</label></div>
                          <div className='column-4'><i className='i-clock'></i>Hora de Veulo</div>
                          <div className='column-4'> <label>{x.Departuretime}</label></div>
                      </div>
                      <div className='column-1'>
                        <div className='column-4'><i className='i-user'></i> Cantidad de Pasajeros:</div>
                        <div className='column-4'>  <label>{x.Passenger}</label></div>
                        <div className='column-4'><i className='i-dollar'></i>Precio por Pasajero</div>
                        <div className='column-4'><label>{`$ ${x.Price}`}</label></div>
                      </div>

                </div>
                <div className="column-1">
                  <button
                    onClick={(e) => {
                      DeleteReservation(index);
                    }}
                    className="buttonLarge"
                  >
                    Borrar
                    <i className='i-trash'></i>
                  </button>
                </div>
              </div>
            </div>
          ))}
          <div className="column-4 ">
            <div className="row  ">
              <div className="column-3 ">
                <h1>Total ha Pagar: {CalculateTotal()}</h1>
              </div>
              <div className="column-1 ">
                {
                  Reservation.length > 0 ?   <button onClick={ShowModalReserve} className="buttonLarge">Reservar <i className='i-paper-plane-1'></i></button> : <></>
                }
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalReservation ShowModal={showModal} CloseModalReserve={CloseModalReserve} ></ModalReservation>
    </div>
  );
};
