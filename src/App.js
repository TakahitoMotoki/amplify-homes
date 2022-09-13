import NavBar from "./components/NavBar";
import Diary from "./components/Diary";
import Profile from "./components/Profile";
import Rental from "./components/Rental";
import RentalList from "./components/RentalList";
import Journal from "./components/Journal";
import './App.css';

import { withAuthenticator } from '@aws-amplify/ui-react';
import { Auth } from "aws-amplify";
import { API } from "aws-amplify";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';

const apiName = 'api0c080238';
const apiPath = '/rentals';

function App() {
   // Authenticated User
   const [authUser, setAuthUser] = useState("");

   // fetchRentalsのためのproxy
   const [userIDProxy, setUserIDProxy] = useState("");
   
   // Rental一覧
   const [myRentals, setMyRentals] = useState([]);
   const [myRentalsDict, setMyRentalsDict] = useState({});

   // 初回ロード時: Authenticated Userの取得
   useEffect(()  => {
      async function fetchAuthUser() {
         setAuthUser(await Auth.currentAuthenticatedUser());
      }

      // Auth Userの取得
      fetchAuthUser();
      console.log("[App.js] Authenticated User is fetched!");
      console.log(authUser);
   }, []);
   
   // fetchRentals用のパラメータ生成
   useEffect(()  => {
      if (authUser !== "") {
         console.log("[App.js] proxy is created!");
         const proxy = "/" + String(authUser.username);
         setUserIDProxy(proxy);
         console.log(userIDProxy);
      }
   }, [authUser]);

   // Auth Userが取得されたらRental一覧取得
   useEffect(()  => {
      // Rental一覧取得
      async function fetchRentals() {
         var my_rentals = [];
         var my_rentals_dict = {};
         
         // GETリクエスト送信
         API.get(apiName, apiPath + userIDProxy, {}).then(response => {
            console.log("[App.js] fetchRentals API is activated!");
            console.log(response);
            
            // Responseをレンタル一覧にセット
            for (let rental_id in response) {
               var rental_info = response[rental_id];
               my_rentals.push(
                  {
                     id              : rental_info["id"],
                     farm_id         : rental_info["farm_id"],
                     vegetable_id    : rental_info["vegetable_id"],
                     proceeding      : rental_info["proceeding"],
                     cost_plan       : rental_info["cost_plan"],
                     init_measurement: rental_info["init_measurement"],
                     alias           : rental_info["alias"],
                     start_ts        : rental_info["start_ts"],
                     end_ts          : rental_info["end_ts"]
                  }
               )

               my_rentals_dict[rental_id] = {
                  id              : rental_info["id"],
                  farm_id         : rental_info["farm_id"],
                  vegetable_id    : rental_info["vegetable_id"],
                  proceeding      : rental_info["proceeding"],
                  cost_plan       : rental_info["cost_plan"],
                  init_measurement: rental_info["init_measurement"],
                  alias           : rental_info["alias"],
                  start_ts        : rental_info["start_ts"],
                  end_ts          : rental_info["end_ts"]
               }
            }

            setMyRentals(my_rentals);
            setMyRentalsDict(my_rentals_dict);
         }).catch(err => {
            console.log(err);
         });
      }

      if (userIDProxy !== "") {
         fetchRentals();    
      }
   }, [userIDProxy]);

   return (
      <div class="container">
         <BrowserRouter>
            <NavBar myRentals={myRentals} />

            <Routes>
               <Route index
                  element={ <Profile /> }
               />
               <Route path="diary/:rental_id" 
                  element={ <Diary authUser={authUser} myRentals={myRentalsDict} />}
               />
               <Route path="rental/:farmcom_id"
                  element={ <RentalList authUser={authUser} /> }
               />
               <Route path="rental"
                  element={ <Rental authUser={authUser} /> }
               />
            </Routes>
         </BrowserRouter>

      </div>
   );
}

export default withAuthenticator(App);
