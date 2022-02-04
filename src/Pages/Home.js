import { useEffect, useState } from "react";
import { usePassenger } from "../Hooks/usePassenger";
import { Promotion } from "../Components/Promotion";
import {MoreServices} from '../Components/MoreServices'
import { Autocomplete } from "../Components/Autocomplete";
import * as CityServices from "../Services/CityServices";
import { Formik } from "formik";
import { FlightsPanel } from "../Components/Flights";
import {setCatalogCities}from '../Store/Action'
import {connect} from 'react-redux'


  const Cities = state=> {
    console.log(state);
    return {
      cities : state
    }
  }

 const Home = (props) => {
  const {cities ,Reservation,setCatalogCities} = props;
  const Passenger = usePassenger();
  const [Flights, setFlights] = useState(false);

 useEffect(async () => {
    var AllCitiesWord = [];
    var ServicesCities = await CityServices.GetCitys();
    AllCitiesWord = ServicesCities.data.states.map((x, index) => {
      return {
        id: index,
        name: x.name,
      };
    });
    setCatalogCities(AllCitiesWord);
  }, []);

  const VaidateForm = (values) => {
    const error = {};
    if (values.Source === null) {
      error.Source = "*";
    } else {
      setFlights(false);
    }

    if (values.Destination === null) {
      error.Destination = "*";
    } else {
      setFlights(false);
    }
    if (values.Passenger <= 0) {
      error.Passenger = "*";
    } else {
      setFlights(false);
    }
    return error;
  };

  const saveRequest = async () => {
    setFlights(true);
  };

  const resetForm = (resetForm) => {
    resetForm();
    Passenger.ResetoCountPassenger();
    setFlights(false);
  };

  return (
    <>
      <Formik
        enableReinitialize={true}
        initialValues={{
          Source: null,
          Destination: null,
          Passenger: 0,
        }}
        validate={(Values) => {
          return VaidateForm(Values);
        }}
        onSubmit={async (values, { resetForm }) => {
          await saveRequest(values, resetForm);
        }}
      >
        {(formik) => (
          <>
            <div className="container">
              <div className="row">
                <div className="column-4">
                  <h1>
                    Busca tu Vuelo <i className="i-plane-outline"></i>
                  </h1>
                </div>
                <div className="column-2">
                  {formik.errors.Source ? (
                    <i className="i-warning"></i>
                  ) : (
                    <> </>
                  )}
                  <Autocomplete
                    items={cities}
                    name="Source"
                    formik={formik}
                    placeholder="Origen"
                  ></Autocomplete>
                </div>
                <div className="column-2">
                  {formik.errors.Destination ? (
                    <i className="i-warning"></i>
                  ) : (
                    <> </>
                  )}
                  <Autocomplete
                    items={cities}
                    name="Destination"
                    formik={formik}
                    placeholder="Destino"
                  ></Autocomplete>
                </div>
                <div className="column-2">
                  <label>Cantidad de Pasajeros</label>
                </div>
                <div className="column-2">
                  <button
                    onClick={(e) => {
                      Passenger.DecrementPassenger();
                      formik.setFieldValue(
                        "Passenger",
                        Passenger.CountPassenger - 1
                      );
                    }}
                    className="button"
                  >
                    -
                  </button>
                  <i className="i-user"></i> {Passenger.CountPassenger}
                  <button
                    onClick={(e) => {
                      Passenger.IncrementPassenger();
                      formik.setFieldValue(
                        "Passenger",
                        Passenger.CountPassenger + 1
                      );
                    }}
                    className="button"
                  >
                    +
                  </button>
                  {formik.errors.Passenger ? (
                    <i className="i-warning"></i>
                  ) : (
                    <> </>
                  )}
                </div>
                <div className="column-4">
                  <button
                    onClick={formik.handleSubmit}
                    disabled={!formik.isValid || formik.isSubmitting}
                    className="buttonLarge"
                  >
                    Buscar Vuelo <i className="i-search"></i>
                  </button>
                </div>
              </div>
            </div>
            {Flights ? (
              <FlightsPanel
                ShowHideFlightsPanel={setFlights}
                Reservation={Reservation}
                resetForm={(e) => {
                  resetForm(formik.resetForm);
                }}
                FlightsData={formik.values}
              ></FlightsPanel>
            ) : (
              <></>
            )}
          </>
        )}
      </Formik>
      <MoreServices></MoreServices>
      <Promotion></Promotion>
    </>
  );
};

export default connect(Cities,{setCatalogCities})(Home);
