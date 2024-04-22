import { useEffect, useState } from "react";
import Body from "./components/Body";
import axios from 'axios';
import banner from './assets/bg-cafe.jpg';

const App = () => {
  const [coffees, setCoffees] = useState([]);
  const [showAll, setShowAll] = useState(true);

  useEffect(() => {
    axios.get('https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json')
      .then(response => {
        setCoffees(response.data);
      })
      .catch(error => console.error(error));
  }, []);

  const handleShowAll = () => {
    setShowAll(true);
  }

  const handleShowAvailable = () => {
    setShowAll(false);
  }

  return (
    <>
      <div className={`bg-cover bg-center w-full h-[300px]`} style={{ backgroundImage: `url(${banner})` }}></div>
      <div className={'px-4 sm:px-[124px]'}>
        <Body coffees={ coffees } handleShowAll={ handleShowAll } handleShowAvailable={ handleShowAvailable } showAll={ showAll }/>
      </div>
    </>
  );
}

export default App
