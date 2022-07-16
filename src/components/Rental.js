import { Button, Flex, Heading, SelectField, ScrollView } from "@aws-amplify/ui-react";
import { Table, TableCell, TableBody, TableHead, TableRow } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useState, useEffect } from 'react';

import './Rental.css';

const apiName = 'api0c080238';
const apiPath = '/farms/avail';

function Record(props) {
   return(
      <TableRow onClick={() => alert()} >
         <TableCell>{props.displayData.name}</TableCell>
         <TableCell>{props.displayData.is_organic}</TableCell>
         <TableCell>{props.displayData.avail_number}</TableCell>
         <TableCell>{props.temperature}</TableCell>
         <TableCell>{props.precipitation}</TableCell>
      </TableRow>
   )
}

function CustomSelectField(props) {
   return(
      <Flex direction="row" alignItems="center" margin="20px 0px 0px 0px">
         <SelectField
            label={props.title}
            size='small'
            variation='quiet'
            placeholder='-- 選択してください --'
            width="280px"
            options={props.options}
         ></SelectField>
      </Flex>
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
               options={["エダマメ", "ビーツ"]}
            />

            <CustomSelectField
               title="平均気温"
               options={["寒冷（10℃未満）", "冷涼（10℃~15℃）", "温暖（20℃~25℃）", "熱帯（25℃以上）"]} 
            />
         </Flex>
      
         <Flex direction="row" justifyContent="space-between">
            <CustomSelectField
               title="降水量"
               options={["少なめ", "普通", "多め"]} 
            />

            <CustomSelectField
               title="有機栽培"
               options={["可", "不可"]} 
            />
         </Flex>

         <Flex direction="row" justifyContent="center">
            <Button
               variation='primary'
               isLoading={false}
               width="100%"
               margin='40px 0px 0px 0px'
            >
               検索
            </Button>
         </Flex>
      </div>
   )
}

function Result(props) {
   const displayData = props.displayData;
   return(
      <div class='result-container'>
         <Search />

         <Heading level={4} margin="0 0 30px 0">
            検索結果
         </Heading>
         
         <Table
            highlightOnHover={true}
            size={undefined}
            variation={undefined}
         >
            <TableHead>
               <TableRow>
                  <TableCell as="th">農園</TableCell>
                  <TableCell as="th">有機栽培</TableCell>
                  <TableCell as="th">空き農園数</TableCell>
                  <TableCell as="th">気温</TableCell>
                  <TableCell as="th">降水量</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               {displayData.map(displayData => (
                  <Record
                     displayData={displayData}
                     temperature="温暖"
                     precipitation="湿潤"
                  />
               ))}
            </TableBody>
         </Table>
      </div>
   )
}

function ResultDetail(props) {
   return(
      <div class='resultdetail-container'>
         <ScrollView
            position="fixed"
            orientation="horizontal"
            width="100%"
            height="100vh"
            padding="50px 15px 0 15px"
         >
            <Heading level={4} color="#DDD">
               詳細データ
            </Heading>
            <p>
            ・写真
            ・平均気温
            ・平均湿度
            ・平均光量（快晴の割合とか）
            ・降水量
            ・土壌成分履歴
            ・作付の履歴（連作障害とかチェック用）
            ・作付可能な農作物
            ・アラート（連作障害起こる可能性あり、XXの害虫に注意など）
            </p>
         </ScrollView>
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
                           avail_number: "24 / 50",
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
                           avail_number: "8 / 100",
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

   // Data displayed in ResultDetail.
   const [resultDetailData, setResultDetailData] = useState([]);

   function updateRentalDetail(data) {
      setResultDetailData(data);
   }

   // Update ResultDetail when TableCell is clicked.
   useEffect(()  => {
      console.log("ResultDetailData is updated.");
      console.log(resultDetailData.name);
   }, [resultDetailData]);

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
            <ResultDetail />
         </Flex>
      </div>
   );
}
