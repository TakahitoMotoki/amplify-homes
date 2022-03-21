import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';

import App from './App';
import ProfCard from './components/ProfCard';
import NavBar from './components/NavBar';

import { Flex, Tabs, TabItem } from '@aws-amplify/ui-react';

import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import {AmplifyProvider} from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

ReactDOM.render(
   <React.StrictMode>
      <AmplifyProvider>

         <Flex
            direction="row"
            justifyContent="flex-start"
            alignItems="flex-start"
         >
            <div class="nav-container">
               <NavBar />
            </div>

            <div class="main-container">
               <Tabs spacing="equal">
                  <TabItem title="Report">Tab 1 Content</TabItem>
                  <TabItem title="3D View">Tab 2 Content</TabItem>
               </Tabs>
            </div>
         </Flex>

      </AmplifyProvider>
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
