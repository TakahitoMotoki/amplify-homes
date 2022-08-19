import NavBar from "./components/NavBar";
import Diary from "./components/Diary";
import Profile from "./components/Profile";
import Rental from "./components/Rental";
import Journal from "./components/Journal";
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from "aws-amplify";
import { API } from "aws-amplify";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

const apiName = 'api0c080238';
const apiPath = '/rental';

function App() {
   // Authenticated User
   const [authUser, setAuthUser] = useState([]);
   const [yourRentals, setYourRentals] = useState([]);

   // 初回ロード時: Authenticated Userの取得
   useEffect(()  => {
      async function fetchAuthUser() {
         setAuthUser(await Auth.currentAuthenticatedUser());
      }
      fetchAuthUser();
      console.log("Authenticated User");
      console.log(authUser);
   }, []);

   // 初回ロード時: Rental一覧の取得
   useEffect(() => {
      console.log("TEST");
   }, []);

   async function fetchRentals() {
      const setToYourRentals = [];
      API.get(apiName, apiPath, {}).then(response => {
         for (let rentalID in response) {
            const rentalInfo = response[rentalID];

            setToYourRentals.push(
               {
                  id: rentalID,
                  alias: rentalInfo["alias"]
               }
            );
         }

         setYourRentals(setToYourRentals);
      }).catch(err => {
         console.log(err);
      });
   }

   return (
      <div class="container">
         <BrowserRouter>
            <NavBar />

            <Routes>
               <Route index element={ <Profile /> } />
               <Route path="diary" element={ <Diary authUser={authUser} /> } />
               <Route path="rental" element={ <Rental authUser={authUser} /> } />
               <Route path="journal" element={ <Journal /> } />
            </Routes>
         </BrowserRouter>

      </div>
   );
}

export default withAuthenticator(App);
