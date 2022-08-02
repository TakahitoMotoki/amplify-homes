import { Button, Card, Divider, Flex, Heading, Image, SelectField, Text } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useState, useEffect } from 'react';

import './Rental.css';

const apiName = 'api0c080238';
const apiPath = '/farms/avail';
const initHeader = {
   headers: {
   }
}

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
               <Flex
                  direction="column"
                  alignItems="flex-start"
                  height="200px"
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

               </Flex>
            </Flex>

            <Flex direction="column">
               <Divider border="0.3px solid #888" borderRadius="0.3px" />
               <Flex direction="row">
                  <Text>農園名</Text>
                  <Text>コスト 円/月</Text>
                  <Text>最終利用</Text>
               </Flex>
            </Flex>

            {props.displayData.avail_farms.map(avail_farm => (
               <Flex direction="column">
                  <Divider border="0.3px solid #888" borderRadius="0.3px" />
                  <Flex direction="row">
                     <Text>{avail_farm.name}</Text>
                     <Text>{avail_farm.fee}</Text>
                     <Text>{avail_farm.last_used}</Text>
                  </Flex>
               </Flex>
            ))}
            
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
   const [tableData, setTableData] = useState([]);
   const resultData = [
                        {
                           name: "埼玉 XX農園",
                           is_organic: 1,
                           temperature: { Aug: 23.0, Sep: 18.5, Oct: 16.8 },
                           humidity: { Aug: 23.0, Sep: 18.5, Oct: 16.8 },
                           precipitation: { Aug: 110, Sep: 160, Oct: 80 },
                           vol_of_sunshine: { Aug: 120, Sep: 80, Oct: 60 },
                           avail_vegitables:
                              [
                                 "エダマメ"
                              ],
                           farm_number: 50,
                           avail_number: 3,
                           avail_farms:
                              [
                                 { id: "", name: "農園003", fee: 1500, last_used: "2021-12-17", area: 5.0 },
                                 { id: "", name: "農園007", fee: 2500, last_used: "2022-06-17", area: 5.0 },
                                 { id: "", name: "農園019", fee: 3500, last_used: "2021-06-17", area: 7.0 }
                              ]
                        },
                        {
                           name: "埼玉 YY農園",
                           is_organic: 0,
                           temperature: { Aug: 23.0, Sep: 18.5, Oct: 16.8 },
                           humidity: { Aug: 23.0, Sep: 18.5, Oct: 16.8 },
                           precipitation: { Aug: 110, Sep: 160, Oct: 80 },
                           vol_of_sunshine: { Aug: 120, Sep: 80, Oct: 60 },
                           avail_vegitables:
                              [
                                 "エダマメ",
                                 "ビーツ"
                              ],
                           farm_number: 100,
                           avail_number: 3,
                           avail_farms:
                              [
                                 { id: "", name: "農園003", fee: 1500, last_used: "2021-12-17", area: 5.0 },
                                 { id: "", name: "農園007", fee: 2500, last_used: "2022-06-17", area: 5.0 },
                                 { id: "", name: "農園019", fee: 3500, last_used: "2021-06-17", area: 7.0 }
                              ]
                        }
                     ];

   // Get available farms when the page is loaded.
   useEffect(()  => {
      getAvailFarms();
   }, []);
   
   async function getAvailFarms() {
      const data = [];

      API.get(apiName, apiPath, initHeader).then(response => {
         console.log("+=+=+ in getAvailFarms +=+=+");
         console.log(response);

         // FarmComからデータを抽出しtableDataにセットする
         for (let key in response) {
            const record = response[key]

            // avail_farms用の配列を作成
            const avail_farms = [];
            for (let farmKey in response[key]["avail_farms"]) {
               avail_farms.push(response[key]["avail_farms"][farmKey]);
            }
               
            data.push(
               {
                  name: record["name"],
                  is_organic: record["is_organic"],
                  temperature: record["temperature"],
                  humidity: record["humidity"],
                  precipitation: record["precipitation"],
                  vol_of_sunshine: record["vol_of_sunshine"],
                  avail_vegitables: ["エダマメ"],
                  farm_number: 100,
                  avail_number: 3,
                  avail_farms: avail_farms
               }
            );
         }
         setTableData(data);
      }).catch(err => {
        console.log(err);
      });
      console.log("Called API");
      console.log(tableData);
   }

   return(
      <div class='rental-container'>
         <Flex direction="row">
            <Result displayData={tableData} />
         </Flex>
      </div>
   );
}
