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

               <Heading level={4}>
                  {props.title}
               </Heading>

               <Heading level={6}>
                  Impact Factor: {props.imf}
               </Heading>

               <Text as="span" height="140px">
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
            imf="13.2"
            desc="ハイランク・信頼度の高いデータのレポートを特集しています。"
         />
         <JournalCard 
            title="Bad Weather"
            imf="9.8"
            desc="天候に恵まれないものの、A以上のランクを獲得したレポートを特集しています。"
         />
         <JournalCard 
            title="Bad Weather"
            imf="9.8"
            desc="天候に恵まれないものの、A以上のランクを獲得したレポートを特集しています。"
         />
      </div>
   );
}
