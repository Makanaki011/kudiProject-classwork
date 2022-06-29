import logo from './logo.svg';
import './App.css';
import Navigation from './Navigation';
import Heading from './Heading';
import Earning from './Earning';
import Sub from './Sub';
import Approach from './Approach';
import Footer from './Footer';
// import Welcome from './Welcome';

function App() {
  // const name = 'Ayo'
  // let likes = 10
  return(
    <div className="app">
       <Navigation />
   <Heading />
   <Earning/>
   <Sub />
   <Approach />
   <Footer />
    </div>
   
  )
}

export default App;
