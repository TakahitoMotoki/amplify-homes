import { Button, Card, Flex, Heading, Image, SelectField, Text } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useState, useEffect } from 'react';

import './Rental.css';

const apiName = 'api0c080238';
const apiPath = '/farms/avail';

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

function Record(props) {
   const organic_converter = {0: "不可", 1: "可"}
   return(
      <Card
         width="100%"
         border="solid gray"
         borderRadius="10px"
         margin="20px"
      >
         <Flex direction="row" alignItems="flex-start">
            <Image
               alt="Road to milford sound"
               src="/road-to-milford-new-zealand-800w.jpg"
               width="30%"
            />
            <Flex
               direction="column"
               alignItems="flex-start"
               width="70%"
            >
               <Heading level={5}>
                  {props.displayData.name}
               </Heading>

               <Text>
                  有機栽培: {organic_converter[props.displayData.is_organic]}
               </Text>

               <Text>
                  空き農園： {props.displayData.avail_number} / {props.displayData.farm_number}
               </Text>
               <CustomSelectField
                  title="農園の選択"
                  margin="0"
                  options={props.displayData.avail_farms}
               />

               <Button
                  size='small'
                  margin="20px 0 0 0"
                  width="100%"
               >
                  レンタル
               </Button>
            </Flex>
         </Flex>
      </Card>
   )
}

function DataList(props) {
   const displayData = props.displayData;
   return(
      <div>
         <Heading level={4} margin="0 0 30px 0">
            検索結果
         </Heading>

         {displayData.map(displayData => (
            <Record
               displayData={displayData}
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
         <DataList displayData={displayData} />
      </div>
   )
}

export default function Rental(props) {
   // Data displayed in Result.
   const resultData = [
                        {
                           name: "埼玉 XX農園",
                           length: 5.0,
                           width: 0.7,
                           area: 3.5,
                           is_organic: 1,
                           avail_number: 3,
                           avail_farms:
                              [
                                 "農場003 （1,500円/月、最終利用: 2021/12/17）",
                                 "農場007 （2,500円/月、最終利用: 2022/06/17）",
                                 "農場019 （2,500円/月、最終利用: 2022/06/17）",
                              ],
                           farm_number: 50,
                           temperature: { Aug: 23.0, Sep: 18.5, Oct: 16.8 },
                           temperature: { Aug: 23.0, Sep: 18.5, Oct: 16.8 },
                           humidity: { Aug: 23.0, Sep: 18.5, Oct: 16.8 },
                           precipitation: { Aug: 110, Sep: 160, Oct: 80 },
                           vol_of_sunshine: { Aug: 120, Sep: 80, Oct: 60 }
                        },
                        {
                           name: "埼玉 YY農園",
                           length: 5.0,
                           width: 0.7,
                           area: 3.5,
                           is_organic: 0,
                           avail_number: 3,
                           avail_farms:
                              [
                                 "農場003 （1,500円/月、最終利用: 2021/12/17）",
                                 "農場007 （2,500円/月、最終利用: 2022/06/17）",
                                 "農場019 （2,500円/月、最終利用: 2022/06/17）",
                              ],
                           farm_number: 100,
                           temperature: { Aug: 23.0, Sep: 18.5, Oct: 16.8 },
                           humidity: { Aug: 23.0, Sep: 18.5, Oct: 16.8 },
                           precipitation: { Aug: 110, Sep: 160, Oct: 80 },
                           vol_of_sunshine: { Aug: 120, Sep: 80, Oct: 60 }
                        }
                     ];
   /*
   // Get available farms when the page is loaded.
   useEffect(()  => {
      getAvailFarms();
   }, []);
   */

   /*
   async function getAvailFarms() {
      API.get(apiName, apiPath, {}).then(response => {
         console.log("+=+=+ in getAvailFarms +=+=+");
         let respFarm = response["farm"];
         let respFarmCom = response["farmcom"];

         // FarmComからデータを抽出しtableDataにセットする
         for (let key in respFarm) {
            // Farm: farmcom_id と一致するFarmComを探す
            if (respFarm[key]["farmcom_id"] in respFarmCom) {
               let farmComKey = respFarm[key]["farmcom_id"];
               // FarmCom情報も含めてtableDataにセット
               tableData.push(
                  {
                     name: respFarm["name"],
                     length: respFarm["length"],
                     width: respFarm["width"],
                     area: respFarm["area"],
                     temperature: respFarmCom[farmComKey]["temperature"],
                     humidity: respFarmCom[farmComKey]["humidity"],
                     precipitation: respFarmCom[farmComKey]["precipitation"],
                     vol_of_sunshine: respFarmCom[farmComKey]["vol_of_sunshine"]
                  }
               );
            }
         }
      }).catch(err => {
        console.log(err);
      });
      console.log("Called API");
      console.log(tableData);
   }
   */

   return(
      <div class='rental-container'>
         <Flex direction="row">
            <Result displayData={resultData} />
         </Flex>
      </div>
   );
}
