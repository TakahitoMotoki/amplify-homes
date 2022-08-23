import React from "react";
import { Divider, ScrollView, Text } from "@aws-amplify/ui-react";
import { useState, useEffect } from 'react';
import { API } from "aws-amplify";
import { Auth } from "aws-amplify";

import './NavBar.css';

import NavItemLevel1 from "./navbar-components/NavItemLevel1"
import NavProfile from "./navbar-components/NavProfile"

const apiName = 'api0c080238';
const apiPath = '/rentals';

export default function NavBar(props) {
   const [userIDProxy, setUserIDProxy] = useState("");
   const [myRentals, setMyRentals] = useState([]);
   
   // 初回ロード時: Authenticated Userの取得とAPIのURL(proxy)の生成
   useEffect(()  => {
      console.log("=+=+= NavBar.js fetchUserID =+=+=");
      var auth_user = props.authUser;
      const proxy = "/" + String(auth_user.username);
      setUserIDProxy(proxy);
      console.log(userIDProxy);
   }, []);

   useEffect(()  => {
      // 初回ロード時: UserのRental一覧取得
      async function fetchRentals() {
         const my_rentals = [];
         
         API.get(apiName, apiPath + userIDProxy, {}).then(response => {
            console.log("=+=+= NavBar.js fetchRental =+=+=");
            console.log(response);

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
                     start_ts        : rental_info["start_ts"]
                  }
               )
            }

            setMyRentals(my_rentals);
         }).catch(err => {
            console.log(err);
         });
      }

      // userIDがセットされている場合、Rental情報の取得
      if (userIDProxy != "") {
         fetchRentals();
      }
   }, [userIDProxy]);

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
            
            {myRentals.map(my_rental => (
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
