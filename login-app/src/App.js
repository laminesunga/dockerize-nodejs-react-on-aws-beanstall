
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import './components/Accounts'

import AppRoutes from './route/appRouter';
import { Account } from './components/Accounts';


export default function app ()  {
  return (
  <Account>
  <AppRoutes className="App"/>
  </Account>
      
   
  );
};