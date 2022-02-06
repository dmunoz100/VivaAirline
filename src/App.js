import { Routes, Route, Link } from "react-router-dom";
import Home from "./Pages/Home";
import { MyReservation } from "./Pages/MyReservation";
import { useReservation } from "./Hooks/useReservation";
const App = () => {
  const [Reservation] = useReservation();
  return (
    <>
      <div className="header backg-purple">
        <h1>
          Viva Aeroline <i className="i-flight-1"></i>
        </h1>
        <nav className="menu">
          <Link to="VivaAirline">
            <i className="i-home"></i>Home{" "}
          </Link>
          <Link to="VivaAirline/MyReservation">
            <i className="i-basket"></i>Mi Reservaciones{" "}
            {Reservation.length > 0 ? <span>{Reservation.length}</span> : <></>}
          </Link>
        </nav>
      </div>

      <Routes>
        <Route path="VivaAirline" index element={<Home></Home>} />
        <Route
          path="VivaAirline/MyReservation"
          element={<MyReservation></MyReservation>}
        />
        <Route path="*" element={<>No encontrado</>} />
      </Routes>
    </>
  );
};

export default App;
