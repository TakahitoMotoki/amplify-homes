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
import { Loader } from "@aws-amplify/ui-react";

function App() {
   // Authenticated User
   const [authUser, setAuthUser] = useState("");

   // 初回ロード時: Authenticated Userの取得
   useEffect(()  => {
      async function fetchAuthUser() {
         setAuthUser(await Auth.currentAuthenticatedUser());
      }

      // Auth Userの取得
      fetchAuthUser();
      console.log("Authenticated User is fetched!");
      console.log(authUser);
   }, []);
   
   // Auth Userが取得されたら再描画
   useEffect(()  => {
      console.log("Authenticated User is fetched and redraw!");
      console.log(authUser);
   }, [authUser]);

   return (
      <div class="container">
         <BrowserRouter>
         { authUser =="" ? <Loader /> : <NavBar authUser={authUser} /> }

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
