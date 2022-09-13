import { Badge, Button, Card, CheckboxField, Divider, Flex, Heading, Image, SelectField, Text } from "@aws-amplify/ui-react";
import { API } from "aws-amplify";
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

import { Icon } from "@aws-amplify/ui-react";
import { HiLocationMarker } from "react-icons/hi"; // MIT License

import './Rental.css';
import farm_image from './images/farm_sample.jpg';

const apiName = 'api0c080238';
const apiPath = '/farms/avail';

var authUser;
const sub_font_color = "#AAA";

// Child Component for <Search>
function CustomCheckboxField(props) {
   return(
      <Card padding="0" width="33%">
         <Text color={sub_font_color} margin={props.margin}>
            {props.title} 
         </Text>
         {props.options.map(option => (
            <CheckboxField label={option} margin={props.ops_margin} />
         ))}
      </Card>
   )
}

// Parent Component for <Search>
function Search(props) {
   return(
      <div class='search-container'>
         <Heading level={3}>
            検索条件
         </Heading>

         <Flex direction="column" alignItems="center">
            <Flex direction="row" width="100%">
               <CustomCheckboxField
                  title="エリア"
                  options={ ["北海道・東北", "関東", "中部", "関西・四国", "九州・沖縄"] }
                  margin="20px 0 10px 0"
                  ops_margin="5px 0 5px 0"
               />

               <CustomCheckboxField
                  title="基準価格（一区画の月額、税込）"
                  options={ ["~500円", "501円~1,000円","1,001円~"] }
                  margin="20px 0 10px 0"
                  ops_margin="5px 0 5px 0"
               />

               <CustomCheckboxField
                  title="栽培条件"
                  options={ ["有機栽培のみ表示"] }
                  margin="20px 0 10px 0"
                  ops_margin="5px 0 5px 0"
               />
            </Flex>

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

function InfoCard(props) {
   return(
      <Card width={props.width} padding="0">
         <Text color={sub_font_color}>{props.title}</Text>
         <Heading level={6} margin={props.value_margin}>
            {props.value}
         </Heading>
      </Card>
   )
}

function InfoIcon(props) {
   return(
      <Flex width="100%" alignItems="center" margin="-10px 0 -10px 0">
         <Icon 
            as={props.as}
            height="30px"
            width="30px"
            viewBox={{
               minX: 0,
               minY: -5,
               width: 30,
               height: 30,
            }}
            color={sub_font_color}
            ariaLabel="Search"
            margin="0 -10px 0 0"
         />
         <Text color={sub_font_color}>
            {props.value} 
         </Text>
      </Flex>
   )
}

// Child Component for <FarmComList>
function FarmComRecord(props) {
   return(
      <Card
         width="100%"
         padding="0"
         margin="0 0 30px 0"
      >
         <Flex direction="column">
            <Divider border="2px solid #888" borderRadius="2px" margin="0 0 10px 0" />
            <Flex direction="row" alignItems="flex-start">
               <Image
                  src={farm_image}
                  width="30%"
                  margin="0 30px 0 0"
               />
               <Flex direction="column" alignItems="flex-start" width="70%">
                  <Heading level={4}>
                     {props.farmComRecord.name}
                  </Heading>

                  <InfoIcon
                     as={HiLocationMarker}
                     value="埼玉県 XX市 YY町 1-2-3"
                  />

                  { props.farmComRecord.is_organic &&
                     <Flex direction="row" margin="0 0 20px 0">
                        <Badge variation="success">有機栽培</Badge>
                     </Flex>
                  }

                  <InfoCard
                     title="基準価格（一区画の月額・税込）"
                     value={props.farmComRecord.base_price + "円"}
                     value_margin="10px 0 10px 0"
                  />

                  <InfoCard
                     title="空き農園"
                     value={ props.farmComRecord.avail_number + "/" + props.farmComRecord.farm_number }
                     value_margin="10px 0 10px 0"
                  />
         
                  <Link to={props.farmComRecord.id} style={{ textDecoration: 'none' }}>
                     <Text>+ レンタル可能な農地を見る</Text>
                  </Link>
               </Flex>
            </Flex>
         </Flex>
      </Card>
   )
}

function FarmComList(props) {
   return(
      <div>
         <Heading level={3} margin="0 0 30px 0">
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

            setToAllFarmComInfo.push(
               {
                  id              : farmComID,
                  name            : farmComInfo["name"],
                  is_organic      : farmComInfo["is_organic"],
                  temperature     : farmComInfo["temperature"],
                  humidity        : farmComInfo["humidity"],
                  precipitation   : farmComInfo["precipitation"],
                  vol_of_sunshine : farmComInfo["vol_of_sunshine"],
                  farm_number     : farmComInfo["farm_number"],
                  avail_number    : farmComInfo["avail_number"],
                  base_price      : farmComInfo["base_price"],
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
      <div className='rental-container'>
         <Flex direction="row">
            <Result displayData={sortedFarmComInfo} />
         </Flex>
      </div>
   );
}
