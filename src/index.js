import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import App from './App';

// import reportWebVitals from './reportWebVitals';
import Amplify from 'aws-amplify';
import "@aws-amplify/ui-react/styles.css";
import { AmplifyProvider } from "@aws-amplify/ui-react";
import { createTheme, defaultTheme, ThemeProvider } from "@aws-amplify/ui-react";
import { Card, Text, ToggleButton, ToggleButtonGroup } from "@aws-amplify/ui-react";
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

function MyThemeProvider() {
   const theme = createTheme({
      name: 'dark-mode-theme',
      overrides: [
         {
            colorMode: "dark",
            tokens: {
               colors: {
                  neutral: {
                     // flipping the neutral palette
                     10: defaultTheme.tokens.colors.neutral[100],
                     20: defaultTheme.tokens.colors.neutral[90],
                     40: defaultTheme.tokens.colors.neutral[80],
                     80: defaultTheme.tokens.colors.neutral[40],
                     90: defaultTheme.tokens.colors.neutral[20],
                     100: defaultTheme.tokens.colors.neutral[10],
                  },
                  black: { value: "#fff" },
                  white: { value: "#000" },
               },
            },
         },
      ],
   });

   return (
      <AmplifyProvider theme={theme} colorMode="dark" >
         <App />
      </AmplifyProvider>
   );
}

ReactDOM.render(
   <React.StrictMode>
      <MyThemeProvider />
   </React.StrictMode>,
   document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
