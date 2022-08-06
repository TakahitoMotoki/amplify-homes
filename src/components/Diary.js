import { Button, Card, Flex, Heading, Image, ScrollView, SelectField, Text } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { useState, useEffect } from 'react';
import { Cell, PieChart, Pie, Legend, Tooltip } from 'recharts';

import './Diary.css';

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

function Stage1(props) {
   return (
      <div> Stage1 </div>
   )
}

function ActionPanel(props) {
   const data = [
      { name: 'value', value: props.value },
      { name: 'max', value: 100 - props.value },
   ];

   return(
      <Card
         width="40%"
         border="solid #888"
         borderRadius="10px"
         margin="20px"
      >
      
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

function Stage2(props) {
   return(
      <div class='diary-container'>
         <Heading level={4}>
            農地の様子 
         </Heading>

         <ScrollView height="400px" margin="30px 0 50px 0">
            <Flex direction="row">
               {props.imgURLs.map(imgURL => (
                  <Image
                     src={imgURL}
                     height="400px"
                  />
               ))}
            </Flex>
         </ScrollView>

         <Flex direction="column">
            <Heading level={4}>
               アクションパネル
            </Heading>
           
            <Flex direction="row" justifyContent="space-around">
               <ActionPanel value={78} messageOpt={messageOpt["pest"]} actionOpt={actionOpt["pest"]} />
               <ActionPanel value={52} messageOpt={messageOpt["illness"]} actionOpt={actionOpt["illness"]} />
            </Flex>
         </Flex>
      </div>
   )
}

export default function Diary(props) {
   const [imgURLs, setImgURLs] = useState([]);
   const [farmStage, setFarmStage] = useState([]);

   // Stage 2: Fetch Image URL from S3
   useEffect(()  => {
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
         setFarmStage(2);
      }

      fetchImageURL();
   }, []);

   // Redraw the page when imgSources is updated.
   useEffect(() => {
      console.log("useEffect2");
      console.log(imgURLs[0]);
   }, [imgURLs]);

   // FarmStageによって描画内容を変更
   if (farmStage == 1) {
      return <Stage1 />
   } else if (farmStage == 2) {
      return <Stage2 imgURLs={imgURLs} />
   } else {
      return <Stage1 />
   }
}
