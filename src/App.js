import { Component } from 'react';

import './App.css';

import { Routes, Route, Link as ReactRouterLink } from 'react-router-dom';
import axios from 'axios';

import FarmPage from "./components/app-components/FarmPage";

import { withAuthenticator } from '@aws-amplify/ui-react';

class FarmPageCp extends Component {
   render() {
      return <FarmPage />;
   }
}

function App() {
   return (
      <Routes>
         <Route pass="/" component={FarmPageCp} />
      </Routes>
   );
}

export default withAuthenticator(App);
