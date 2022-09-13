import { Button, Card, Divider, Flex, Heading, Image, Loader, Text } from "@aws-amplify/ui-react";
import { Table, TableBody, TableRow, TableCell } from "@aws-amplify/ui-react";
import { Radio, RadioGroupField, SelectField } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

import { Icon } from "@aws-amplify/ui-react";
import { AiOutlineCheckCircle, AiFillBug, } from "react-icons/ai";

import './Diary.css';

const sub_font_color = "#AAA";

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
      <Card width={props.width}>
         <Text color={sub_font_color}>{props.title}</Text>
         <Heading level={4} margin={props.value_margin}>
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
            <InfoCard title="農作物" value={props.rental.alias} width="30%" value_margin="20px 0 10px 0" />
            <Divider border="0.3px solid #888" borderRadius="0.3px" orientation="vertical" />
            <InfoCard title="レンタル開始" value="2022年7月25日" width="30%" value_margin="20px 0 10px 0" />
            <Divider border="0.3px solid #888" borderRadius="0.3px" orientation="vertical" />
            <InfoCard title="レンタル終了" value="2022年10月25日" width="30%" value_margin="20px 0 10px 0" />
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

function Weather(props) {
   return(
      <Flex direction="column" justifyContent="flex-start">
         <InfoCard title="現在の天候" value="29.5 ℃ / 68 %" width="100%" value_margin="10px 0 0 0" />
         <InfoCard title="写真撮影日" value="2日前" width="100%" value_margin="10px 0 0 0" />
         <InfoCard title="種まきから" value="18日" width="100%" value_margin="10px 0 0 0" />
         <InfoCard title="収穫" value="不可" width="100%" value_margin="10px 0 0 0" />
      </Flex>
   )
}

function ActionPanelIcon(props) {
   var icon_as    = AiOutlineCheckCircle;
   var icon_color = "#43C082";
   var icon_text1, icon_text2 = "";
   var icon_text_color = "#DDD";
   if (props.type === 1) {
      icon_as = AiOutlineCheckCircle;
      icon_color = "#43C082";
      icon_text1 = "アクションは不要です";
      icon_text2 = "　";
      icon_text_color = sub_font_color;
   } else if (props.type === 2) {
      if (props.panel === "害虫") { icon_as = AiFillBug; }
      icon_color = "#EED202";
      icon_text1 = "食害が見つかりました";
      icon_text2 = "アクションが必要です";
   } else if (props.type === 3) {
      icon_as = AiOutlineCheckCircle;
      icon_color = "#43C082";
   }

   return(
      <Flex direction="column" justifyContent="center" margin={props.margin}>
         <Flex justifyContent="center" width="100%">
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
         </Flex>
         <Text color={icon_text_color} textAlign="center" margin="-30px 0 0 0"> {icon_text1} </Text>
         <Text color={icon_text_color} textAlign="center" margin="-15px 0 0 0"> {icon_text2} </Text>
      </Flex>
   )
}

function ActionPanel(props) {
   return(
      <Card width="33%">
         <Heading level={4} margin="20px 0 10px 0">
            {props.title}
         </Heading>

         <ActionPanelIcon panel={props.title} type={props.type} margin="0 0 30px 0" />

         <SelectField
            size='small'
            variation='quiet'
            placeholder='-- アクションを選択 --'
            options={props.actionOpt}
            margin="0 0 20px 0"
         ></SelectField>

         <Button width="100%">アクション実行</Button>
         
      </Card>
   )
}

// Stage3 > FarmStatus
// props
//   - s3_latest_urls: 各撮影ポイントの最新の画像URL 
function FarmStatus(props) {
   return(
      <div>
         <Heading level={3}>
            2. 農地の状態 
         </Heading>

         <Flex direction="row" margin="30px 0 30px 0">
            <Image
               src={ props.s3_latest_urls["1"] }
               width="50%"
            />
            <Weather />
         </Flex>

         <Flex height="400px" direction="row" justifyContent="flex-start" margin="0 0 50px 0">
            <ActionPanel title="害虫" type={2} />
            <Divider border="0.3px solid #888" borderRadius="0.3px" orientation="vertical" />
            <ActionPanel title="病気" type={1} />
            <Divider border="0.3px solid #888" borderRadius="0.3px" orientation="vertical" />
            <ActionPanel title="水やり" type={1} />
         </Flex>
      </div>
   )
}

// props
//   - s3_latest_urls: 各撮影ポイントの最新の画像URL 
function Stage3(props) {
   return(
      <div class='diary-container'>
         <FarmInfoAbstruct rental={props.rental} />
         <FarmStatus s3_latest_urls={props.s3_latest_urls} />
      </div>
   )
}

export default function Diary(props) {
   // URLのパスパラメータ
   const path_param = String(useParams()["rental_id"]);
   const [rentalID, setRentalID] = useState("");

   // Rentalデータ
   const [rentalData, setRentalData] = useState({});
   var proceeding = 3;

   // 前回のパスパラメータと異なる場合、パスパラメータをアップデート
   if (rentalID != path_param) {
      setRentalID(path_param);
      console.log("[Diary.js] rentalID is updaated!");
      console.log(rentalID);
      console.log(path_param);
   }

   // Rentalに紐づく全ての画像データを保持
   const [s3Imgs, setS3Imgs] = useState({}); // FORMAT - { point_num: { date: key, ... }, ... }

   // s3Imgsのうち、最新の表示すべき画像URLを保持
   const [latestS3ImgURLs, setLatestS3ImgURLs] = useState({}); // FORMAT - { point_num: url, ... }

   var POINT_NUMBER = 2; // 本来Rentalテーブルに含まれるべき

   // 初回ロード時の処理：Proceeding により処理を変更
   useEffect(()  => {
      console.log("[Diary.js] Rental ID");
      console.log(rentalID);

      // proceeding = 3 の場合、S3の画像URLを取得
      async function fetchImageURL() {
         var s3_imgs = {};

         // 撮影地点数だけ配列を用意
         for (let point_num=1; point_num<POINT_NUMBER+1; point_num++) {
            s3_imgs[String(point_num)] = {};
         }
         
         // AWS S3 から画像リストの一覧取得
         const s3_list = await Storage.list('');

         // 一覧をs3Imgsのフォーマットに変換
         for (let i=0; i<s3_list.length; i++) {
            // const url = await Storage.get(s3_list[i].key); // KeyからURLを取得するコード

            // 名前から日付と撮影地点を取得
            if (s3_list[i].key !== '') {
               var tmp = s3_list[i].key.split('_');
               var img_point = tmp[1]; // ファイル名から画像撮影ポイントを取得
               var img_date = tmp[0]; // ファイル名から画像撮影日時を取得
               s3_imgs[img_point][img_date] = s3_list[i].key;
            }
         }

         // imgURLs にURLをセット
         setS3Imgs(s3_imgs);
      }

      if (proceeding === 3) {
         fetchImageURL();
      }
   }, []);

   // s3Imgsアップデート時：
   useEffect(() => {
      function isDictionaryFetched(dict) {
         return Object.keys(dict).length;
      }

      // s3Imgsから最新の画像URLを検索
      async function searchNewestImage(s3_imgs) {      
         var latest_urls = {};
         
         for (let point_num=1; point_num<POINT_NUMBER+1; point_num++) {
            var s3_imgs_at_point = s3_imgs[String(point_num)];
            var latest_date = 0;

            // 最新の日付の抽出
            for (let date in s3_imgs_at_point) {
               if (Number(date) > latest_date) {
                  latest_date = date;
               }
            }

            // URLの取得
            const latest_url = await Storage.get(s3_imgs_at_point[latest_date]);
            latest_urls[String(point_num)] = latest_url;
         }

         setLatestS3ImgURLs(latest_urls);
      }
      
      if (isDictionaryFetched(s3Imgs)) {
         searchNewestImage(s3Imgs);
      }
   }, [s3Imgs]);

   // rentalID変更時：rentalDataとrentalProceedingを更新し、ページを再読み込み
   useEffect(() => {
      setRentalData(props.myRentals[rentalID]); 
   }, [rentalID]);

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
         <Stage3 rental={rentalData} s3_latest_urls={latestS3ImgURLs}/>
      )
   } else {
      return <Loader />
   }
}
