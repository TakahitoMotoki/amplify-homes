import './App.css';

import FarmPage from "./components/FarmPage";
import NavBar from "./components/NavBar";

import { View, withAuthenticator } from '@aws-amplify/ui-react';

function App() {
   return (
      <View className="container">

         <div class="nav-container">
            <NavBar />
         </div>

         <div class="main-container">
            <FarmPage />
         </div>

      </View>
   );
}

export default withAuthenticator(App);
