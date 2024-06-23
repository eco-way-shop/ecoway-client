import React from 'react';
import {
  BrowserRouter, Switch, Route 
} from 'react-router-dom';
import App from './pages/App';
import Login from './pages/Login';
import TestDrive from './pages/TestDrive';
import Register from './pages/Register';
import Cars from './pages/Cars';
import CarItemDetail from './pages/CarItemDetail';
import Favourites from './pages/Favourites';
import AddCar from './pages/AddCar';
import { useHistory } from 'react-router-dom';

const handleLogout = () => {
  localStorage.removeItem('your_auth_token_key'); 
  const navigate = useHistory();
  navigate('/'); // Redirect to homepage after logout
};

const Routes = () => (
  
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route exact path="/cars" component={Cars} />
      <Route exact path="/favourites" component={Favourites} />
      <Route exact path="/test_drive" component={TestDrive} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/cars/:id" component={CarItemDetail} />
      <Route exact path="/add_car" component={AddCar} />
      <Route exact path="/logout" element={() => handleLogout()} />
    </Switch>
  </BrowserRouter>
);

export default Routes;
