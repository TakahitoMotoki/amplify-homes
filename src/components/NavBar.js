import React from "react";
import { ScrollView } from "@aws-amplify/ui-react";

import './NavBar.css';

import NavBarScrollView from "./navbar-components/NavBarScrollView"
import NavItemLevel1 from "./navbar-components/NavItemLevel1"
import NavItemLevel2 from "./navbar-components/NavItemLevel2"

export default function NavBar(props) {
   return(
      <div class='navbar-container'>
         <NavItemLevel1 title="プロフィール" link="profile" />
         <NavItemLevel1 title="ゲーム" link="game" />
         <NavItemLevel1 title="日記" link="diary" />
         <div class='scroll-container'>
            <NavBarScrollView />
         </div>
         <NavItemLevel1 title="レンタル" link="rental" />
         <NavItemLevel1 title="出版" link="journal" />
         <NavItemLevel1 title="ログアウト" link="logout" />
      </div>
   );
}
