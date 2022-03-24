import './App.css';

import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

import FarmPage from "./components/app-components/FarmPage";

import { withAuthenticator } from '@aws-amplify/ui-react';

function App() {
   return (
      <Routes>
         <Route pass="/farm/*" element={ <FarmPage /> } />
         <Route pass="*" element={ No Page Founded 404 } />
      </Routes>
   );
}

export default withAuthenticator(App);
