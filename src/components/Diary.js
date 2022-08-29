import { Button, Card, Divider, Flex, Heading, Image, Loader, ScrollView, Text } from "@aws-amplify/ui-react";
import { Table, TableBody, TableRow, TableCell } from "@aws-amplify/ui-react";
import { Radio, RadioGroupField, SelectField } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { useState, useEffect } from 'react';
import { Cell, PieChart, Pie } from 'recharts';
import { useParams } from 'react-router-dom';

import { Icon } from "@aws-amplify/ui-react";
import { AiFillCheckCircle, AiFillBug, } from "react-icons/ai";

import './Diary.css';

const sub_font_color = "#AAA";
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

// Stage1 > AskSoilSetup
function AskSoilSetup(props) {
   return(
      <div>
         <Heading level={5} margin="0 0 10px 0">
            2.1. 土壌診断方法
         </Heading>
         <Text color={sub_font_color}>土壌養分の測定を行います。肥料設計に必要なプロセスです。</Text>
         <Text color={sub_font_color}>簡易診断では、ECメータを用いて電気伝導度を測定し、N（窒素）の推定を行います。</Text>

         <RadioGroupField
            label="2.1. 土壌診断方法"
            labelHidden="true"
            name="Soil Measurement"
            margin="10px 0 30px 0"
         >
            <Radio value="opt1">簡易診断（無料）</Radio>
         </RadioGroupField>

         <Heading level={5} margin="0 0 10px 0">
            2.2. 肥料配合
         </Heading>
         <Text color={sub_font_color}>土壌診断に基づき、肥料の配合を決定します。</Text>
         <Text color={sub_font_color}>おまかせでは、作業者の判断で肥料の配合を決定します。</Text>

         <RadioGroupField
            label="2.2. 肥料配合"
            labelHidden="true"
            name="Fertilizer"
            margin="10px 0 30px 0"
         >
            <Radio value="opt1">おまかせ</Radio>
         </RadioGroupField>

         <Heading level={5} margin="0 0 10px 0">
            2.3. 作業者の選択
         </Heading>
         <Text color={sub_font_color}>作業者のランクを指定します。</Text>

         <RadioGroupField
            label="2.3. 作業者"
            labelHidden="true"
            name="Worker"
            margin="10px 0 30px 0"
         >
            <Radio value="opt1">指定なし　　：500円</Radio>
            <Radio value="opt2">シルバー　　：800円</Radio>
            <Radio value="opt3">ゴールド　　：1,000円</Radio>
            <Radio value="opt4">ダイヤモンド：1,200円</Radio>
         </RadioGroupField>

         <Heading level={5} margin="0 0 10px 0">
            2.4. 作業日の選択
         </Heading>
         <Text color={sub_font_color}>作業日を選択します。</Text>
      </div>
   )
}

// Stage1 > AskSeedingSetup
function AskSeedingSetup(props) {
   return(
      <div>
         <Heading level={5} margin="0 0 10px 0">
            3.1. 作業日の指定
         </Heading>
      </div>
   )
}

function Stage1(props) {
   const [soilSetup, setSoilSetup] = useState('self');
   const [seedingSetup, setSeedingSetup] = useState('self');

   return (
      <div>
         <Heading level={3} margin="0 0 30px 0">
            全体の流れ
         </Heading>

         <Heading level={3} margin="50px 0 0 0">
            1. 野菜の選択
         </Heading>

         <SelectField
            label="野菜"
            labelHidden="true"
            size='small'
            margin="20px 0 0 0"
            width="40%"
            variation='quiet'
            placeholder='-- 選択してください --'
            options={["ニンジン", "おでん大根", "エダマメ", "ビーツ"]} 
         ></SelectField>

         <Heading level={3} margin="50px 0 10px 0">
            2. 肥料設計
         </Heading>

         <RadioGroupField
            name="selectSoilSetup"
            onChange={(e) => setSoilSetup(e.target.value)}
            margin="0 0 30px 0"
         >
            <Radio value="self">自分で実施する</Radio>
            <Radio value="ask">依頼する</Radio>
         </RadioGroupField>
         
         { soilSetup === "ask" && <AskSoilSetup /> }
         { soilSetup === "self" && <Text> Comming soon ... </Text> }

         <Heading level={3} margin="50px 0 10px 0">
            3. 種まき
         </Heading>

         <RadioGroupField
            name="selectSeedingSetup"
            onChange={(e) => setSeedingSetup(e.target.value)}
            margin="0 0 30px 0"
         >
            <Radio value="self">自分で実施する</Radio>
            <Radio value="ask">依頼する</Radio>
         </RadioGroupField>

         { seedingSetup === "ask" && <AskSeedingSetup /> }
         { seedingSetup === "self" && <Text> Comming soon ... </Text> }
         
         <Button
            onClick={() => {
               // クリック時にポップアップを表示する
               if (window.confirm("送信しますか？")) {
               /*
                  async function createRental() {
                     API.post(apiName, apiPathCreateRental, createRentalHeader).then(response => {
                        console.log("[Diary.js] Stage1 初期設定依頼送信");
                        console.log(response);
                     })
                  }
               */

                  // createRental();
               } else {
                  // Cancel -> 元の画面に戻る
                  console.log("[Diary.js] Stage1 初期設定キャンセル");
               }
            }}
         >
            レンタル
         </Button>

      </div>
   )
}

function InfoCard(props) {
   return(
      <Card width="30%">
         <Text color={sub_font_color}>{props.title}</Text>
         <Heading level={4} margin="20px 0 10px 0">
            {props.value}
         </Heading>
      </Card>
   )
}

// Stage3 > FarmSummary
function FarmInfoAbstruct(props) {
   return(
      <div>
         <Heading level={3} margin="0 0 30px 0">
            1. 基本情報
         </Heading>
         
         <Flex direction="row" justifyContent="flex-start" margin="0 0 50px 0">
            <InfoCard title="農作物" value="ビーツ" />
            <Divider border="0.3px solid #888" borderRadius="0.3px" orientation="vertical" />
            <InfoCard title="レンタル開始" value="2022年7月25日" />
            <Divider border="0.3px solid #888" borderRadius="0.3px" orientation="vertical" />
            <InfoCard title="レンタル終了" value="2022年10月25日" />
         </Flex>
      </div>
   )
}

function FarmInfoInitReport(props) {
   return(
      <div>
         <Heading level={5} margin="0 0 30px 0">
            1.2. 初期設定情報
         </Heading>
         <Table variation="bordered" margin="30px 0 50px 0">
            <TableBody>
               <TableRow>
                  <TableCell>農作物</TableCell>
                  <TableCell colspan="2">おでん大根</TableCell>
               </TableRow>
      
               <TableRow>
                  <TableCell rowspan="4">土壌診断・肥料設計</TableCell>
                  <TableCell>作業実施日</TableCell>
                  <TableCell>2022/7/28</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>作業者</TableCell>
                  <TableCell>依頼 (@takamtk)</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>土壌診断方法</TableCell>
                  <TableCell>簡易診断</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>肥料配合</TableCell>
                  <TableCell>おまかせ</TableCell>
               </TableRow>

               <TableRow>
                  <TableCell rowspan="2">種まき</TableCell>
                  <TableCell>作業実施日</TableCell>
                  <TableCell>2022/8/10</TableCell>
               </TableRow>
               <TableRow>
                  <TableCell>作業者</TableCell>
                  <TableCell>依頼 (@takamtk)</TableCell>
               </TableRow>
            </TableBody>
         </Table>
      </div>
   )
}

function Stage2(props) {
   return(
      <div class='diary-container'>
         <FarmInfoAbstruct />
      </div>
   )
}

function ActionPanelIcon(props) {
   var icon_as = AiFillCheckCircle;
   var icon_color = "#43C082";
   if (props.type === 1) {
      icon_as = AiFillCheckCircle;
      icon_color = "#43C082";
   } else if (props.type === 2) {
      if (props.panel === "害虫") { icon_as = AiFillBug; }
      icon_color = "#EED202";
   } else if (props.type === 3) {
      icon_as = AiFillCheckCircle;
      icon_color = "#43C082";
   }

   return(
      <Icon 
         as={icon_as}
         width="75%"
         height="75%"
         viewBox={{
            minX: -250,
            minY: -250,
            width: 1500,
            height: 1500,
         }}
         color={icon_color}
         ariaLabel="Search"
      />
   )
}

function ActionPanel(props) {
   return(
      <Card width="33%">
         <Heading level={4} margin="20px 0 10px 0">
            {props.title}
         </Heading>
         <Flex justifyContent="center" margin="30px 0 30px 0">
            <ActionPanelIcon panel={props.title} type={props.type} />
         </Flex>

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

// Stage3 > FarmPhotoGallery
function FarmPhotoGallery(props) {
   return(
      <div>
         <Heading level={3}>
            2. 農地の状態 
         </Heading>

         <Flex direction="row">
            <Image
               src=""
               height="300px"
               widtht="400px"
            />
         </Flex>

         <Flex height="500px" direction="row" justifyContent="flex-start" margin="0 0 50px 0">
            <ActionPanel title="害虫" type={2} />
            <Divider border="0.3px solid #888" borderRadius="0.3px" orientation="vertical" />
            <ActionPanel title="病気" type={1} />
            <Divider border="0.3px solid #888" borderRadius="0.3px" orientation="vertical" />
            <ActionPanel title="水やり" type={1} />
         </Flex>
      </div>
   )
}

// !=== CAUTION ===! Duplicated
// Stage3 > ActionPanelContainer > ActionPanel
/*
function old_ActionPanel(props) {
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
*/

// !=== CAUTION ===! Duplicated
// Stage3 > ActionPanelContainer
/*
function ActionPanelContainer(props) {
   return(
      <Flex direction="column">
         <Heading level={3}>
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
*/

function Stage3(props) {
   return(
      <div class='diary-container'>
         <FarmInfoAbstruct />
         <FarmPhotoGallery imgURLs={props.imgURLs} />
      </div>
   )
}

export default function Diary(props) {
   // URLのProxy取得
   const proxy = useParams()["*"];

   const [imgURLs, setImgURLs] = useState([]);
   const proceeding = 3;// props.rental.proceeding;

   // 初回ロード時の処理：Proceeding により処理を変更
   useEffect(()  => {
      console.log("[Diary.js] Rental ID (proxy)");
      console.log(proxy);

      // Proceeding = 2 の場合、S3の画像URLを取得
      async function fetchImageURL() {
         const urlList: string[] = [];
         
         // AWS S3 から画像リストの取得
         const s3ImgList = await Storage.list('');

         // 画像リスト -> URL に変換
         for (let i=0; i<s3ImgList.length; i++) {
            const url = await Storage.get(s3ImgList[i].key);
            if (s3ImgList[i].key !== '') {
               urlList.push(url);
            }
         }

         // imgURLs にURLをセット
         setImgURLs(urlList);
      }

      // <!== CAUTION ==!> 
      // if (proceeding == 2) {
      // console.log("[Diary.js] S3 Image URLs are fetched!");
      // fetchImageURL();
      // }
   }, []);

   // Redraw the page when imgSources is updated.
   useEffect(() => {
   }, [imgURLs]);

   // FarmStageによって描画内容を変更
   if (proceeding === 1) {
      return (
         <div class='diary-container'>
            <Stage1 />
         </div>
      )
   } else if (proceeding === 2) {
      return (
         <Stage2 />
      )
   } else if (proceeding === 3) {
      return (
         <Stage3 imgURLs={imgURLs} />
      )
   } else {
      return <Loader />
   }
}
