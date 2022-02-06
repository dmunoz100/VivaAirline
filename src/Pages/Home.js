
import { Promotion } from "../Components/Promotion";
import {MoreServices} from '../Components/MoreServices'
import SearchFlight from '../Components/SearchFlight'
 const Home = () => {
  return (
    <>
      <SearchFlight></SearchFlight>
      <MoreServices></MoreServices>
      <Promotion></Promotion>
    </>
  );
};

export default Home;
