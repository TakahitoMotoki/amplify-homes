import { Button, Card, Divider, Flex, Image, Heading, Text } from "@aws-amplify/ui-react";

import './Profile.css';
import farm_image from './images/farm_sample.jpg';
const sub_font_color = "#AAA";


function StatusCard(props) {
   return(
      <Flex direction="row" width="45%">
         <Flex direction="column">
            <Heading level={5}> {props.grade} {props.title} </Heading>

            <Text color={sub_font_color} fontSize="12px" margin="0 0 -10px 0">
               ポイント 
            </Text>
            <Text> {props.points} pts </Text>
         </Flex>
      </Flex>
   )
}

function UserStatus(props) {
   return(
      <Flex direction="column">
         <Flex direction="row" alignItems="center" margin="0 0 50px 0">
            <Image
               src={farm_image}
               border="solid 1px #DDD"
               borderRadius="120px"
               height="120px"
               width="120px"
               margin="0 30px 0 0"
            />
            
            <Flex direction="column">
               <Heading level={3}>
                  Admin
               </Heading>
               
               <Text color={sub_font_color} fontSize="12px" margin="0 0 -10px 0">
                  XYM Wallet 
               </Text>
               <Text>
                  NDOE4H5X5XU6SFAKHKKCZ2EZ4SK3MJMX3MO3YWY 
               </Text>
            </Flex>
         </Flex>

         <Flex direction="row">
            <StatusCard title="Consultant" points="229" grade="Silver" />
            <Divider border="0.3px solid #888" borderRadius="0.3px" orientation="vertical" />
            <StatusCard title="Executive" points="347" grade="Gold" />
         </Flex>
      </Flex>
   );
}

function SalesRecordHeader(props) {
   return(
      <Flex
         justifyContent="space-between"
         alignItems="center"
         backgroundColor="#000"
         borderRadius="5px"
         padding="10px 15px 10px 15px"
         width="90%"
      >
         <Text width="15%" fontSize="12px"> 品種 </Text>
         <Text width="15%" fontSize="12px"> 数量 </Text>
         <Text width="15%" fontSize="12px"> 販売先 </Text>
         <Text width="15%" fontSize="12px"> 収益(予想) </Text>
         <Text width="15%" fontSize="12px"> 農園 </Text>
         <Text width="15%" fontSize="12px"> 収穫日 </Text>
      </Flex>
   )
}

function SoldRecordHeader(props) {
   return(
      <Flex
         justifyContent="space-between"
         alignItems="center"
         backgroundColor="#000"
         borderRadius="5px"
         padding="10px 15px 10px 15px"
         width="90%"
      >
         <Text width="15%" fontSize="12px"> 品種 </Text>
         <Text width="15%" fontSize="12px"> 数量 </Text>
         <Text width="15%" fontSize="12px"> 販売先 </Text>
         <Text width="15%" fontSize="12px"> 収益 </Text>
         <Text width="15%" fontSize="12px"> 農園 </Text>
         <Text width="15%" fontSize="12px"> 収穫日 </Text>
      </Flex>
   )
}

function SalesRecord(props) {
   return(
      <Flex
         justifyContent="space-between"
         alignItems="center"
         backgroundColor="#2A2A2A"
         border="solid 1px #444"
         borderRadius="10px"
         padding="15px"
         margin="5px 0 0 0"
         width="90%"
      >
         <Text width="15%" fontSize="14px" fontWeight="600"> 🍆 ナス </Text>
         <Text width="15%" fontSize="14px" fontWeight="600"> 18個 </Text>
         <Text width="15%" fontSize="14px" fontWeight="600"> 市場A </Text>
         <Text width="15%" fontSize="14px" fontWeight="600"> 1,980円 </Text>
         <Text width="15%" fontSize="14px" fontWeight="600"> 埼玉XX農園002 </Text>
         <Text width="15%" fontSize="14px" fontWeight="600"> 2022/9/5 </Text>
      </Flex>
   );
}

function SalesDashboard(props) {
   return(
      <Flex direction="column" width="100%" margin="30px 0 0 0">
         <Heading level={4}>
            販売中
         </Heading>

         <SalesRecordHeader />
         <SalesRecord />
         <SalesRecord />
         <SalesRecord />

         <Heading level={4} margin="50px 0 0 0">
            販売済
         </Heading>

         <SoldRecordHeader  />
         <SalesRecord />
         <SalesRecord />
         <SalesRecord />
      </Flex>
   );
}

export default function Profile(props) {
   return(
      <div class='profile-container'>
         <UserStatus />
         <SalesDashboard />
      </div>
   );
}
