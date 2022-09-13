import { Button, Text } from "@aws-amplify/ui-react";
import { useState, useEffect } from 'react';
import { API } from "aws-amplify";

import './Rental.css';

var authUser;

const apiName = 'api0c080238';
const apiPathCreateRental = '/rental/create';

export default function RentalList(props) {
   // 初回ロード時: 
   useEffect(()  => {
      authUser = props.authUser;
   }, []);

   return(
      <div class='profile-container'>
         <Button
            onClick={() => {
               
               // クリック時にポップアップを表示する
               if (window.confirm("Test")) {
                  // OK -> POSTリクエスト送信
                  const createRentalHeader = { 
                     body: {
                        http_request: "POST",
                        user_id: authUser.username, // e4e81b69-0e6c-4e0a-b2a9-fbced118f010
                        farm_id: "7dd073fd-639b-40f9-8e0c-d037e0335a0e",
                        cost_plan: 1,
                        alias: "TEST"
                     }
                  };

                  async function createRental() {
                     API.post(apiName, apiPathCreateRental, createRentalHeader).then(response => {
                        console.log("レンタル開始");
                        console.log(response);
                     })
                  }

                  createRental();
               } else {
                  // Cancel -> 元の画面に戻る
                  console.log("レンタルキャンセル");
               }
            }}
         >
            レンタル
         </Button>
      </div>
   );
}
