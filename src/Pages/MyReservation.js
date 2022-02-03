import {ModalReservation} from '../Components/ModalReservation'
import { useState } from 'react';
export const MyReservation = (props) => {
  const { Reservation } = props;
  const [showModal,setShowModal] = useState(false)
  const CalculateTotal = () => {
    var total = 0;
    Reservation[0].forEach((e) => {
      total = total + e.Passenger * e.Price;
    });
    return total;
  };

  const DeleteReservation = (index) => {
    var CurrentReservation = Reservation[0];
    CurrentReservation.splice(index, 1);
    Reservation[1]([...CurrentReservation]);
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
          <button onClick={e=>{Reservation[1]([...[]])}} className="buttonLarge">Vaciar Carrito <i className='i-eraser'></i></button>
            </div>
          {Reservation[0].map((x, index) => (
            <div key={index} className="column-4 ">
              <div className="row ">
                <div className="column-3 item-list">
                  <label>
                    <i className="i-location"></i>Origen:
                  </label>
                  <label>{x.Source.name}</label>
                  <label>
                    <i className="i-location"></i>Destino:
                  </label>
                  <label>{x.Destination.name}</label>
                  <label>
                    <i className="i-user"></i>Cantidad de Pasajeros:
                  </label>
                  <label>{x.Passenger}</label>
                  <label>
                    <i className="i-calendar"></i>Fecha Salida:
                  </label>
                  <label>{x.Date}</label> <br></br>
                  <label>
                    <i className="i-clock"></i>Hora Salida:
                  </label>
                  <label>{x.Departuretime}</label>
                  <label>
                    <i className="i-dollar"></i>Precio:
                  </label>
                  <label>{x.Price}</label>
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
                  Reservation[0].length > 0 ?   <button onClick={ShowModalReserve} className="buttonLarge">Reservar <i className='i-paper-plane-1'></i></button> : <></>
                }
              
              </div>
            </div>
          </div>
        </div>
      </div>
      <ModalReservation ShowModal={showModal} Reservation={Reservation} CloseModalReserve={CloseModalReserve} ></ModalReservation>
    </div>
  );
};
