# Descipcion de la Aplicacion

Viva Airline es una aplicacion web realizada mendiante React Js para emular la reservacion de un vuelo en la cual se implemento el uso de varias librerias y consumo de una api publica para la consulta de los destinos 

## Librerias Usadas

1) Axios .- consumo de api
2) React Route .- Controlar las rutas
3) Formik .- Para la validacion y control de los formularios
4) Fontello .- Iconos
### API de consumo

Liga de API "https://countriesnow.space/api/v0.1/"

Sitio web Oficial https://countriesnow.space/

Metodo usado en el proyecto Actual 

  const {data} = await http.post(`countries/states`,{
        country : "Mexico"
    });

### Instalacion de la Aplicacion para su Ejecucion de manera local

1) Tener Instalado Node.js 
2) Ejecutar el Comando para la inatalacion de los paquetes de react js npm install -g create-react-app
3) Tener un Editor de Texto se Recomienda el uso de Visual Studio Code (https://code.visualstudio.com/download)
4) Descargar El proyecto de este Repositorio
5) Abrir el la carpeta de repositorio mediante mediante el visual studio code 
6) Una ves Con la carpeta abierta abrimos la terminal 
7) Importante desargar los paquetes de node_modules para esto ejecutamos npm install
8) Despues ejecutamos el comando para correr nuestra aplicacion npm serve 
9) Listo ya con esto tendremos abierto la aplicacion de manera local 
