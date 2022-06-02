import { Flex, Heading, Text, Tabs, TabItem } from "@aws-amplify/ui-react";
import { AmplifyS3Image } from "@aws-amplify/ui-react/legacy";
import { Storage } from "aws-amplify";

import './Diary.css';

export default function Diary(props) {
   return(
      <div class='diary-container'>
         <AmplifyS3Image
            imgKey="220602_Photo2.jpg"
         />

         <Flex direction="column">
            <Heading level={4}>
               現在の状態   
            </Heading>

            <Text as="span" height="40px">
               ✅ 害虫による被害拡大は確認されていません。
            </Text>

            <Text as="span" height="40px">
               ⚠️  病気の発生に対して対策を施しました。経過観察中です。
            </Text>

            <Text as="span" height="40px">
               ❌ 雑草の量が許容範囲を超過しました。アクションが必要です。
            </Text>
               
            <Text as="span" height="40px">
               ✅ 土壌水分量は適切にコントロールされています。
            </Text>
               
            <Heading level={4}>
               コメント  
            </Heading>

            <Heading level={4}>
               アクションパネル   
            </Heading>

         </Flex>
      </div>
   );
}
