export default (state=[],actio)=>{
    if(actio.type === "SET_CATALOG_CITIES"){
        return  actio.payload;
    }
    return state;
}