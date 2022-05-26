import React from "react";
import { ScrollView } from "@aws-amplify/ui-react";

import './NavBar.css';

import NavItemLevel1 from "./navbar-components/NavItemLevel1"
import NavItemLevel2 from "./navbar-components/NavItemLevel2"
import NavProfile from "./navbar-components/NavProfile"

export default function NavBar(props) {
   return(
      <div class="navbar-container">
         <ScrollView
            orientation="horizontal"
            height="100%"
            width="100%"
         >
            <NavProfile />
            <NavItemLevel1 title="プロフィール" link="profile" />
            <NavItemLevel1 title="レンタル" link="rental" />
            <NavItemLevel1 title="日記" link="diary" />
            <NavItemLevel2 title="JP00000000" />
            <NavItemLevel2 title="JP00000001" />
            <NavItemLevel2 title="JP00000002" />
            <NavItemLevel2 title="JP00000003" />
            <NavItemLevel2 title="JP00000004" />
            <NavItemLevel2 title="JP00000005" />
            <NavItemLevel1 title="出版" link="journal" />
            <NavItemLevel1 title="ログアウト" link="logout" />
         </ScrollView>
      </div>
   );
}
