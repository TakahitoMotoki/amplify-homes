import { Card, Image, View, Heading, Flex, Badge, Text, Button, useTheme } from "@aws-amplify/ui-react";

import './Journal.css';

function JournalCard(props) {
   const { tokens } = useTheme();
   return(
      <Card
         height="320px"
         width="480px"
         border="solid gray"
         borderRadius="10px"
         margin="20px"
      >
         <Flex direction="row" alignItems="flex-start">
            <Image
               alt="Road to milford sound"
               src="/road-to-milford-new-zealand-800w.jpg"
               width="50%"
            />
            <Flex
               direction="column"
               alignItems="flex-start"
               gap={tokens.space.xs}
               width="50%"
            >
               <Flex>
                  <Badge size="small" variation="warning">High Rank+</Badge>
                  <Badge size="small" variation="success">Reliable</Badge>
               </Flex>

               <Heading level={5}>
                  {props.title}
               </Heading>

               <Heading level={8}>
                  インポータンス: {props.importance}
               </Heading>

               <Heading level={8}>
                  倍率: {props.rate}
               </Heading>

               <Text as="span" height="110px">
                  {props.desc}
               </Text>

               <Button
                  size='small'
                  isFullWidth={true}
               >
                  Submit
               </Button>
            </Flex>
         </Flex>
      </Card>
   )
}

export default function Journal(props) {
   return(
      <div class='rental-container'>
         <JournalCard 
            title="King Farmers"
            importance="13.2"
            rate="18%"
            desc="ハイランク・信頼度の高いデータのレポートを特集しています。"
         />
         <JournalCard 
            title="Bad Weather"
            importance="7.4"
            rate="41%"
            desc="天候に恵まれないものの、A以上のランクを獲得したレポートを特集しています。"
         />
         <JournalCard 
            title="South Report"
            importance="2.7"
            rate="88%"
            desc="温暖・熱帯気候で栽培されたレポートを特集しています。"
         />
         <JournalCard 
            title="Journal of Tomato"
            importance="2.2"
            rate="76%"
            desc="キュウリの栽培レポートを特集しています。"
         />
      </div>
   );
}
