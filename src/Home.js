
import './App.css';

import Up from './Up';
import Avia from './Avia';
import Reviews from './Reviews';
import Instructor from './Instructor';
import Contact from './Contact';

const Home = () => {
  return (
    <div className="App">
     <Up/>
     <Avia/>
     <Reviews/>
     <Instructor/>
     <Contact/>
    </div>
  );
}

export default Home;