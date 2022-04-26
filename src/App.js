import NavBar from "./components/NavBar";
import Diary from "./components/Diary";
import Profile from "./components/Profile";
import Rental from "./components/Rental";
import Journal from "./components/Journal";
import './App.css';

import { View, withAuthenticator } from '@aws-amplify/ui-react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
   return (
      <div class="container">
         <BrowserRouter>
            <NavBar />

            <Routes>
               <Route index element={ <Profile /> } />
               <Route path="diary" element={ <Diary /> } />
               <Route path="rental" element={ <Rental /> } />
               <Route path="journal" element={ <Journal /> } />
            </Routes>
         </BrowserRouter>

      </div>
   );
}

export default withAuthenticator(App);
