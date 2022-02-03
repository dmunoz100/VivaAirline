import http from '../Helpers/http';

export const GetCitys = async () =>{
    const {data} = await http.post(`countries/states`,{
        country : "Mexico"
    });
    return data;
}
