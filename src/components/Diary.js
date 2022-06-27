import { Flex, Heading, Image, ScrollView, Text } from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import { useState, useEffect } from 'react';

import './Diary.css';

export default function Diary(props) {
   console.log("Diary");
   const [imgSources, setImgSources] = useState([]);

   useEffect(()  => {
      async function loadImage() {
         const imgKeys: string[] = [];
         const result = await Storage.list('');
         for (let i=0; i<result.length; i++) {
            const url = await Storage.get(result[i].key);
            if (result[i].key !== '') {
               imgKeys.push(url);
            }
         }
         setImgSources(imgKeys);
      }
      console.log("useEffect");
      loadImage();
   }, []);

   useEffect(() => {
      console.log("useEffect2");
      console.log(imgSources[0]);
   }, [imgSources]);

   return(
      <div class='diary-container'>
         <Heading level={4}>
            農地の様子 
         </Heading>
         <ScrollView height="400px" margin="30px 0 50px 0">
            <Flex direction="row">
               {imgSources.map(imgSources => (
                  <Image
                     src={imgSources}
                     height="400px"
                  />
               ))}
            </Flex>
         </ScrollView>

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
               アクションパネル   
            </Heading>
         </Flex>
      </div>
   );
}
