export const MoreServices = () => {


    const AditionalServices = [
        {
            icon : "i-location-circled",
            text : "VIAJES A MEXICO"
        },
        {
            icon : "i-shield",
            text : "VIAJA SEGURO"
        },
        {
            icon : "i-shopping-bag",
            text : "REGLAS DE EQUIPAJE"
        },
        {
            icon : "i-credit-card-alt",
            text : "PAGA CON TUS PUNTOS O CON TU TARJETA VIVA AIRLINE"
        },
    ]

    return(
        <div className="container">
        <div className="row">
            {
                AditionalServices.map((x,index)=>
                    <div key={index} className="column-2 card">
                    <div className="column-4"><i className={x.icon}></i></div>
                    <div className="column-4"><label>{x.text}</label></div>
                  </div>
                )
            }
        </div>
      </div>
    );
}