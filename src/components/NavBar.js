import React from "react";
import { Divider, ScrollView, Text } from "@aws-amplify/ui-react";
import { Auth } from "aws-amplify";

import './NavBar.css';

import NavItemLevel1 from "./navbar-components/NavItemLevel1"
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

            <NavItemLevel1 title="Profile" link="" />
            <NavItemLevel1 title="Rental" link="rental" />
            
            <div class="divider-container">
               <Divider border="0.3px solid #888" borderRadius="0.3px" />
            </div>
            
            <Text
               color="#888"
               fontSize="14px"
               padding="5px 0 0 50px"
            >
               JOURNAL
            </Text>
            <NavItemLevel1 title="Publish" link="journal" />
            <NavItemLevel1 title="Subscribe" link="journal" />
            
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
            
            {props.myRentals.map(my_rental => (
               <NavItemLevel1
                  key={my_rental.id}
                  title={my_rental.alias}
                  link={"diary/" + my_rental.id}
               />
            ))}
            
            <div class="divider-container">
               <Divider border="0.3px solid #888" borderRadius="0.3px" />
            </div>
            
            <div 
               class="signout-container"
               onClick={() => {
                  if (window.confirm('ログアウトしますか?')) {
                     async function signOut() {
                        await Auth.signOut();
                        console.log('ログアウト完了');
                     }

                     signOut();
                  } else {
                     console.log('ログアウトキャンセル');
                  }}
               }
            >ログアウト</div>
         
         </ScrollView>
      </div>
   );
}
