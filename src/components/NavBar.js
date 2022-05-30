import React from "react";
import { Divider, ScrollView, Text } from "@aws-amplify/ui-react";

import './NavBar.css';

import NavItemLevel1 from "./navbar-components/NavItemLevel1"
import NavItemLevel2 from "./navbar-components/NavItemLevel2"
import NavProfile from "./navbar-components/NavProfile"

export default function NavBar(props) {
   return(
      <div class="navbar-container">
         <ScrollView
            position="fixed"
            orientation="horizontal"
            height="100%"
            width="20%"
            padding="50px 15px 0 0"
         >
            <NavProfile />
            <NavItemLevel1 title="Profile" link="profile" />
            <NavItemLevel1 title="Rental" link="rental" />
            <NavItemLevel1 title="Journal" link="journal" />
            <div class="divider-container">
               <Divider border="0.3px solid #888" borderRadius="0.3px" />
            </div>
            <Text
               color="#888"
               fontSize="14px"
               padding="5px 0 0 50px"
            >
               YOUR FARM
            </Text>
            <NavItemLevel1 title="埼玉 - ブドウ農園 001" link="diary" />
            <NavItemLevel1 title="埼玉 - ブドウ農園 002" link="diary" />
            <NavItemLevel1 title="埼玉 - ピーマン農園 013" link="diary" />
            <NavItemLevel1 title="埼玉 - ピーマン農園 017" link="diary" />
            <NavItemLevel1 title="埼玉 - ピーマン農園 026" link="diary" />
            <NavItemLevel1 title="宮崎 - 小麦農園 008" link="diary" />
            <NavItemLevel1 title="宮崎 - 小麦農園 009" link="diary" />
            <NavItemLevel1 title="宮崎 - 小麦農園 011" link="diary" />
            <NavItemLevel1 title="宮崎 - 小麦農園 014" link="diary" />
            <NavItemLevel1 title="宮崎 - 小麦農園 018" link="diary" />
            <div class="divider-container">
               <Divider border="0.3px solid #888" borderRadius="0.3px" />
            </div>
            <NavItemLevel1 title="Logout" link="logout" />
         </ScrollView>
      </div>
   );
}
