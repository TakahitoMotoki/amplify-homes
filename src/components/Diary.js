import { Button, Card, Flex, Heading, Image, Loader, ScrollView, SelectField, Text } from "@aws-amplify/ui-react";
import { Table, TableBody, TableRow, TableCell } from "@aws-amplify/ui-react";
import { StepperField, Radio, RadioGroupField } from "@aws-amplify/ui-react";
import { API, Storage } from "aws-amplify";
import { useState, useEffect } from 'react';
import { Cell, PieChart, Pie, Legend, Tooltip } from 'recharts';

import './Diary.css';

const API_NAME = 'api0c080238';
const API_PATH_RENTAL = '/rental';

const messageOpt = {
   "pest": [
      "害虫による影響は許容範囲内です。",
      "アクションを実施済、経過観察中です",
      "害虫による被害が拡大しています。アクションが必要です"
   ],
   "illness": [
      "病気による影響は許容範囲内です。",
      "アクションを実施済、経過観察中です",
      "病気による被害が拡大しています。アクションが必要です"
   ],

}

const actionOpt = {
   "pest": [
      "ストチュウ散布 (無料)"
   ],
   "illness": [
    "XX (無料)",
    "YY (+1,000円)"
   ],
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

function AskSoilSetup(props) {
   return(
      <div>
         <CustomSelectField
            title="野菜"
            margin="20px 0 0 0"
            width="40%"
            options={["ニンジン", "おでん大根", "エダマメ", "ビーツ"]} 
         />
         
         <CustomSelectField
            title="土壌診断方法"
            margin="20px 0 0 0"
            width="40%"
            options={["簡易診断（無料）", "詳細診断（12,000円）"]} 
         />
         
      </div>
   )
}

function AskSeedingSetup(props) {
   return(
      <div></div>
   )
}
function Stage1(props) {
   const [soilSetup, setSoilSetup] = useState('self');
   const [seedingSetup, setSeedingSetup] = useState('self');

   return (
      <div>
         <Heading level={4} margin="0 0 30px 0">
            全体の流れ
         </Heading>

         <Heading level={4} margin="0">
            土づくり
         </Heading>

         <RadioGroupField
            name="selectSoilSetup"
            onChange={(e) => setSoilSetup(e.target.value)}
         >
            <Radio value="self">自分で実施する</Radio>
            <Radio value="ask">依頼する</Radio>
         </RadioGroupField>
         
         { soilSetup == "ask" && <AskSoilSetup /> }
         { soilSetup == "self" && <Text> Comming soon ... </Text> }

         <Heading level={4} margin="0">
            種まき
         </Heading>

         <RadioGroupField
            name="selectSeedingSetup"
            onChange={(e) => setSeedingSetup(e.target.value)}
         >
            <Radio value="self">自分で実施する</Radio>
            <Radio value="ask">依頼する</Radio>
         </RadioGroupField>

         { seedingSetup == "ask" && <AskSeedingSetup /> }
         { seedingSetup == "self" && <Text> Comming soon ... </Text> }

      </div>
   )
}

function FarmSummary(props) {
   return(
      <div>
         <Heading level={4} margin="0 0 30px 0">
            基本情報
         </Heading>
         
         <Table variation="bordered" margin="30px 0 50px 0">
            <TableBody>
               <TableRow>
                  <TableCell>進捗状況</TableCell>
                  <TableCell>生育中</TableCell>
                  <TableCell>生育中</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell rowspan="2">経過日数</TableCell>
                  <TableCell>種まきからの経過日数</TableCell>
                  <TableCell>23日</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>収穫開始までの日数（目安）</TableCell>
                  <TableCell>37日</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell rowspan="2">収入・支出</TableCell>
                  <TableCell>総コスト</TableCell>
                  <TableCell>1,870円</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>収穫総数</TableCell>
                  <TableCell>0.00 kg</TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </div>
   )
}

function FarmPhoto(props) {
   return(
      <div>
      </div>
   )
}

function FarmPhotoGallery(props) {
   return(
      <div>
         <Heading level={4}>
            農地の様子 
         </Heading>

         <ScrollView height="400px" width="100%" margin="30px 0 50px 0">
            <Flex direction="row">
               {props.imgURLs.map(imgURL => (
                  <Image
                     src={imgURL}
                     height="400px"
                  />
               ))}
            </Flex>
         </ScrollView>
      </div>
   )
}

function ActionPanel(props) {
   const data = [
      { name: 'value', value: props.value },
      { name: 'max', value: 100 - props.value },
   ];

   return(
      <Card
         width="45%"
         border="solid #888"
         borderRadius="10px"
         margin="0"
      >
         <Heading level={4}>
            {props.title} 
         </Heading>

      
         <Flex direction="column" justifyContent="center" alignItems="center">
            <PieChart width={400} height={200}>
               <Pie
                  dataKey="value"
                  startAngle={180}
                  endAngle={0}
                  data={data}
                  innerRadius={60}
                  outerRadius={80}
                  cx="50%"
                  cy="50%"
                  outerRadius={80}
                  fill="#222"
               >
                  <Cell key="value" fill={ props.value < 70 ? "#f00" : "#0ff" } />
               </Pie>
            </PieChart>
            <Text fontSize="36px" margin="-130px 0 0 0"> {props.value} </Text>
         </Flex>

         <Text>DXX</Text>

         <SelectField
            size='small'
            variation='quiet'
            placeholder='-- アクションを選択してください --'
            options={props.actionOpt}
         ></SelectField>

         <Button>アクション実行</Button>
      </Card>
   )
}

function ActionPanelContainer(props) {
   return(
      <Flex direction="column">
         <Heading level={4}>
            アクションパネル
         </Heading>
        
         <Flex direction="row" justifyContent="space-between">
            <ActionPanel title="害虫" value={78} messageOpt={messageOpt["pest"]} actionOpt={actionOpt["pest"]} />
            <ActionPanel title="病気" value={52} messageOpt={messageOpt["illness"]} actionOpt={actionOpt["illness"]} />
         </Flex>
         <Flex direction="row" justifyContent="space-between">
            <ActionPanel title="雑草" value={52} messageOpt={messageOpt["illness"]} actionOpt={actionOpt["illness"]} />
            <ActionPanel title="水やり" value={52} messageOpt={messageOpt["illness"]} actionOpt={actionOpt["illness"]} />
         </Flex>
      </Flex>
   )
}

function Stage2(props) {
   return(
      <div class='diary-container'>
         <FarmSummary />
         <FarmPhotoGallery imgURLs={props.imgURLs} />
         <ActionPanelContainer />
      </div>
   )
}

export default function Diary(props) {
   const [imgURLs, setImgURLs] = useState([]);
   const [farmStage, setFarmStage] = useState(0);

   useEffect(()  => {
      var auth_user = props.authUser;
      var rental_id = "5SX7Nswd-KZSC-P8GT-yyoj-4mWOgomGM0KS";

      // Stage 1: Fetch Rental
      async function fetchRental() {
         API.get(API_NAME, API_PATH_RENTAL + "/" + rental_id, {}).then(response => {
            console.log(response); 
         });
      }

      // Stage 2: Fetch Image URL from S3
      async function fetchImageURL() {
         const urlList: string[] = [];
         
         // Get the list of images on AWS S3.
         const s3ImgList = await Storage.list('');

         // Convert the list to URLs.
         for (let i=0; i<s3ImgList.length; i++) {
            const url = await Storage.get(s3ImgList[i].key);
            if (s3ImgList[i].key !== '') {
               urlList.push(url);
            }
         }

         // Set URLs to imgURLs.
         setImgURLs(urlList);
         // Set a value to farmStage.
         setFarmStage(1);
      }

      fetchRental();
      fetchImageURL();
   }, []);

   // Redraw the page when imgSources is updated.
   useEffect(() => {
   }, [imgURLs]);

   // FarmStageによって描画内容を変更
   if (farmStage == 1) {
      return (
         <div class='diary-container'>
            <Stage1 />
         </div>
      )
   } else if (farmStage == 2) {
      return (
         <Stage2 imgURLs={imgURLs} />
      )
   } else {
      return <Loader />
   }
}
