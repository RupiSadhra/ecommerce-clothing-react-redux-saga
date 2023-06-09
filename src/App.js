import { Routes, Route } from 'react-router-dom';
import Navigation from './navigation/navigation.component';
import Home from './routes/home/home.component';

const Shop = ()=> {
  return (
    <h1>I am in Shop page</h1>
  )
}

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={ <Navigation/> }>
          <Route index path='home' element={ <Home/> }/>
          <Route path='/shop' element={ <Shop/> }/>
        </Route>
      </Routes>
    </>
  );
};

export default App;
