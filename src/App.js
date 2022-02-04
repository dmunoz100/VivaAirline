import { Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import {Home} from './Pages/Home';
import {MyReservation} from './Pages/MyReservation'
 const App = () => {

  const Reservation = useState([]);

  return (
    <>
      <div className="header backg-purple">
          <h1>Viva Aeroline <i className="i-flight-1"></i></h1>
          <nav className="menu">
          <Link to="VivaAirline"><i className="i-home"></i>Home </Link>
          <Link to="VivaAirline/MyReservation"><i className="i-basket"></i>Mi Reservaciones {  Reservation[0].length > 0 ?  <span>{ Reservation[0].length}</span>  : <></>}</Link>
				</nav>
      </div>

      <Routes>
          <Route path="VivaAirline" index element={<Home Reservation={Reservation}></Home>} />
          <Route path="VivaAirline/MyReservation" element={<MyReservation Reservation={Reservation}  ></MyReservation>} />
          <Route path="*" element={<>No encontrado</>} />
      </Routes>
    </>
  );
}

export default App;
