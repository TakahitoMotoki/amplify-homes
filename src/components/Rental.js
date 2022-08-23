import { Button, Card, Divider, Flex, Heading, Image, SelectField, Text } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useState, useEffect } from 'react';

import './Rental.css';

const apiName = 'api0c080238';
const apiPath = '/farms/avail';
const apiPathCreateRental = '/rental/create';

var authUser;

// Child Component for <Search>
function CustomSelectField(props) {
   return(
         <SelectField
            label={props.title}
            size='small'
            margin={props.margin}
            width={props.width}
            variation='quiet'
            placeholder='-- 選択してください --'
            options={props.options}
         ></SelectField>
   )
}

// Parent Component for <Search>
function Search(props) {
   return(
      <div class='search-container'>
         <Heading level={4}>
            検索条件
         </Heading>

         <Flex direction="row" justifyContent="space-between">
            <CustomSelectField 
               title="農作物" 
               margin="20px 0 0 0"
               width="40%"
               options={["エダマメ", "ビーツ"]}
            />

            <CustomSelectField
               title="平均気温"
               margin="20px 0 0 0"
               width="40%"
               options={["寒冷（10℃未満）", "冷涼（10℃~15℃）", "温暖（20℃~25℃）", "熱帯（25℃以上）"]} 
            />
         </Flex>
      
         <Flex direction="row" justifyContent="space-between">
            <CustomSelectField
               title="降水量"
               margin="20px 0 0 0"
               width="40%"
               options={["少なめ", "普通", "多め"]} 
            />

            <CustomSelectField
               title="有機栽培"
               margin="20px 0 0 0"
               width="40%"
               options={["可", "不可"]} 
            />
         </Flex>

         <Flex direction="row" justifyContent="center">
            <Button
               variation='primary'
               isLoading={false}
               width="60%"
               margin='40px 0px 0px 0px'
            >
               検索
            </Button>
         </Flex>
      </div>
   )
}

// Child Component for <FarmComList>
function FarmComRecord(props) {
   const is_organic_to_text = { "TRUE": "可", "FALSE": "不可" };

   return(
      <Card
         width="100%"
         border="solid #888"
         borderRadius="10px"
         margin="20px"
      >
         <Flex direction="column">
            <Flex direction="row" alignItems="flex-start">
               <Image
                  alt="Road to milford sound"
                  src="/road-to-milford-new-zealand-800w.jpg"
                  width="30%"
               />
               <Flex direction="column" alignItems="flex-start" height="200px" width="70%">
                  <Heading level={4}>
                     {props.farmComRecord.name}
                  </Heading>

                  <Text>
                     有機栽培: {props.farmComRecord.is_organic ? is_organic_to_text["TRUE"] : is_organic_to_text["FALSE"] }
                  </Text>

                  <Text>
                     空き農園： {props.farmComRecord.avail_number} / {props.farmComRecord.farm_number}
                  </Text>

               </Flex>
            </Flex>

            <Flex direction="column">
               <Divider border="0.3px solid #888" borderRadius="0.3px" />
               <Flex direction="row" alignItems="flex-start">
                  <Text width="25%">農園名</Text>
                  <Text width="25%">コスト 円/月</Text>
                  <Text width="25%">最終利用</Text>
               </Flex>
            </Flex>

            {props.farmComRecord.avail_farms.map(avail_farm => (
               <Flex direction="column" key={avail_farm.name}>

                  <Divider border="0.3px solid #888" borderRadius="0.3px" />
                  
                  <Flex direction="row" alignItems="center">
                     <Text width="25%">{avail_farm.name}</Text>
                     <Text width="25%">{avail_farm.fee}</Text>
                     <Text width="25%">{avail_farm.last_used}</Text>
                     <Button
                        onClick={() => {
                           const confirmString = "レンタル開始しますか?\n"
                              + "農園名: " + String(avail_farm.name) + "\n"
                              + "価格　: " + String(avail_farm.fee) + "円/月";
                           
                           // クリック時にポップアップを表示する
                           if (window.confirm(confirmString)) {
                              // OK -> POSTリクエスト送信
                              const createRentalHeader = { 
                                 body: {
                                    http_request: "POST",
                                    user_id: authUser.username, // e4e81b69-0e6c-4e0a-b2a9-fbced118f010
                                    farm_id: avail_farm.id, // 7dd073fd-639b-40f9-8e0c-d037e0335a0e
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
                  </Flex>
               </Flex>
            ))}
            
         </Flex>
      </Card>
   )
}

function FarmComList(props) {
   return(
      <div>
         <Heading level={4} margin="0 0 30px 0">
            検索結果
         </Heading>

         {props.farmComList.map(farmComRecord => (
            <FarmComRecord
               key={farmComRecord.name}
               farmComRecord={farmComRecord}
            />
         ))}
      </div>
   )

}

function Result(props) {
   const displayData = props.displayData;
   return(
      <div class='result-container'>
         <Search />
         <FarmComList farmComList={displayData} />
      </div>
   )
}

export default function Rental(props) {

   // Data displayed in Result.
   const [allFarmComInfo, setAllFarmComInfo] = useState([]);
   const [sortedFarmComInfo, setSortedFarmComInfo] = useState([]);

   // 初回ロード時: 利用可能なFarm一覧を取得
   useEffect(()  => {
      authUser = props.authUser;
      getAvailFarms();
   }, []);

   // sortedFarmComInfoが更新された時、リロードを行う（検索機能使用時）
   useEffect(()  => {
         console.log("sortedFarmComInfo is updated!");
   }, [sortedFarmComInfo]);
   
   async function getAvailFarms() {
      const setToAllFarmComInfo = [];

      API.get(apiName, apiPath, {}).then(response => {
         console.log("+=+=+ in getAvailFarms +=+=+");
         console.log(response);

         // farmComIDを使って各FarmComのデータを抽出し、tableDataにセットする
         for (let farmComID in response) {
            // 各FarmComのデータ取得
            const farmComInfo = response[farmComID]

            // avail_farms用の配列を作成
            const avail_farms = [];
            for (let farmID in farmComInfo["avail_farms"]) {
               avail_farms.push(farmComInfo["avail_farms"][farmID]);
            }
               
            setToAllFarmComInfo.push(
               {
                  name: farmComInfo["name"],
                  is_organic: farmComInfo["is_organic"],
                  temperature: farmComInfo["temperature"],
                  humidity: farmComInfo["humidity"],
                  precipitation: farmComInfo["precipitation"],
                  vol_of_sunshine: farmComInfo["vol_of_sunshine"],
                  avail_vegitables: ["エダマメ"],
                  farm_number: 100,
                  avail_number: 3,
                  avail_farms: avail_farms
               }
            );
         }
         setAllFarmComInfo(setToAllFarmComInfo);
         setSortedFarmComInfo(setToAllFarmComInfo);
      }).catch(err => {
        console.log(err);
      });
   }

   return(
      <div class='rental-container'>
         <Flex direction="row">
            <Result displayData={sortedFarmComInfo} />
         </Flex>
      </div>
   );
}
