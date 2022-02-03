import { Formik,Field,ErrorMessage } from 'formik'
export const ModalReservation = (props) => {
  const { ShowModal,
    Reservation,
    CloseModalReserve
 } = props;

 const saveRequest = async (values,resetForm) => {
    resetForm();
    Reservation[1]([...[]]);
    CloseModalReserve();
    alert("“Gracias por tu reserva!”");
}


const VaidateForm = (values) => {
    const error = {};
    if(values.Name===""){
        error.Name = "*";
    }
    if(values.LastName===""){
        error.LastName = "*";
    }
    if(values.Adress===""){
        error.Adress = "*";
    }
    if(values.Email===""){
        error.Email = "*";
    }
    return error
}

  return (
    <>
      {ShowModal ? (
        <div id="myModal" className="modal">
        <Formik
           enableReinitialize={true}
           initialValues = {{
              Name: "",
              LastName: "",
              Adress : "",
              Email : "" 
           }}
           validate={(Values) => {
            return VaidateForm(Values);
          }}

        onSubmit={async (values, { resetForm }) => {
            await saveRequest(values, resetForm);
          }}
        >
            {
                formik => 
          <div className="modal-content">
            <div className="row">
                <div className="column-4 ">
                    <h1>Reservacion de Vuelos</h1>
                </div>
                <div className="column-4 ">
                <ErrorMessage render={(msg) => (<i className="i-warning text-danger"></i> )}name="Name"/>
                    <Field type="text" name="Name" placeholder="Nombre" />
                </div>
                <div className="column-4 ">
                <ErrorMessage render={(msg) => (<i className="i-warning text-danger"></i> )}name="LastName"/>
                <Field type="text" name="LastName" placeholder = "Apellido"></Field>
                </div>
                <div className="column-4 ">
                <ErrorMessage render={(msg) => (<i className="i-warning text-danger"></i> )}name="Adress"/>
                <Field type="text" name="Adress" placeholder = "Dirección"></Field>
                </div>
                <div className="column-4 ">
                <ErrorMessage render={(msg) => (<i className="i-warning text-danger"></i> )}name="Email"/>
                <Field type="text" name="Email" placeholder = "Email"></Field>
                </div>
                <div className="column-2 ">
                    <button onClick={e=>{ CloseModalReserve();formik.resetForm(); }} className="buttonLarge">Cancelar</button>
                </div>
                <div className="column-2 ">
                 <button onClick={formik.handleSubmit} disabled={!formik.isValid || formik.isSubmitting}  className="buttonLarge">Reservar</button>
                </div>
            </div>
          </div>
}
          </Formik>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};
