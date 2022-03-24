import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import NavBar from './components/NavBar';

import { Flex } from '@aws-amplify/ui-react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import FarmPage from "./components/app-components/FarmPage";

import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

ReactDOM.render(
   <React.StrictMode>
      <AmplifyProvider>
         <BrowserRouter>
            <Flex
               direction="row"
               justifyContent="flex-start"
               alignItems="flex-start"
            >

               <div class="nav-container">
                  <NavBar />
               </div>

               <div class="main-container">
                  <Routes>
                     <Route pass="/farm" element={<FarmPage />} />
                     <Route pass="*" element={<FarmPage />} />
                  </Routes>
               </div>

            </Flex>
         </BrowserRouter>
      </AmplifyProvider>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
