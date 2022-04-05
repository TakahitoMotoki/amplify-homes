import React from "react";
import { CheckboxField, Divider, Flex, Text, View } from '@aws-amplify/ui-react';
// import { CheckboxField, Divider, Flex, Text, View, Table, TableHead, TableBody, TableRow, TableCell } from '@aws-amplify/ui-react';

function SettingItem(props) {
   return(
      <Flex
         direction="row"
         justifyContent="flex-start"
         alignItems="flex-start"
         padding="0 0 20px 0"
      >
         <Text
            margin="0px 0px 0px 32px"
            fontFamily="Roboto"
            fontSize="14px"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            width="200px"
            children={props.label}
         ></Text>
         <Text
            margin="0px 0px 0px 50px"
            fontFamily="Roboto"
            fontSize="14px"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            children={props.price}
         ></Text>
      </Flex>
   );
}

function SettingItemWithCheck(props) {
   return(
      <Flex
         direction="row"
         justifyContent="flex-start"
         alignItems="flex-start"
      >
         <CheckboxField
            label=""
            labelHidden={true}
         />
         <Text
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="400"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            width="200px"
            children={props.label}
         ></Text>
         <Text
            margin="0px 0px 0px 50px"
            fontFamily="Roboto"
            fontSize="14px"
            fontWeight="400"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            children={props.price}
         ></Text>
      </Flex>
   );
}

export default function Report1(props) {
   return(
      <View
         width="100%"
         height="400px"
         overflow="hidden"
         position="relative"
         padding="0px"
         backgroundColor="rgba(242,242,242,1)"
      >
         <Flex
            margin="0 0 0 80px"
            direction="column"
            justifyContent="flex-start"
            alignItems="flex-start"
         >
            <Text
               margin="30px 0px 30px 0px"
               fontFamily="Roboto"
               fontSize="36px"
               fontWeight="bold"
               color="rgba(34,34,34,1)"
               lineHeight="14px"
               padding="30px 30px 0px 0px"
               children="1. 初期設定"
            ></Text>

            <Text
               margin="30px 0px 30px 0px"
               fontFamily="Roboto"
               fontSize="18px"
               fontWeight="bold"
               color="rgba(34,34,34,1)"
               lineHeight="14px"
               padding="0px 0px 0px 0px"
               children="初期オプションの選択"
            ></Text>
            
            <SettingItem label="レンタル料" price="86.50 XYM" />
            <SettingItemWithCheck label="土壌計測（NPK/pH）" price="1.25 XYM" />
            <SettingItemWithCheck label="雨よけシールド" price="1.25 XYM" />
            <Divider size="large" orientation="horizontal" width="500px" />
            <SettingItem label="Total" price="89.00 XYM" />

            {/*
            <Text
               margin="30px 0px 30px 0px"
               fontFamily="Roboto"
               fontSize="18px"
               fontWeight="bold"
               color="rgba(34,34,34,1)"
               lineHeight="14px"
               padding="0px 0px 0px 0px"
               children="参考：初期オプションの効果"
            ></Text>

            <Table
               highlightOnHover={true}
               size='small'
            >
               <TableHead>
                  <TableRow>
                     <TableCell as="th">オプション</TableCell>
                     <TableCell as="th">土壌設計</TableCell>
                     <TableCell as="th">雨よけ</TableCell>
                     <TableCell as="th">防虫</TableCell>
                     <TableCell as="th">保温</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  <TableRow>
                     <TableCell>Detail Soil Measurement</TableCell>
                     <TableCell>○</TableCell>
                     <TableCell>--</TableCell>
                     <TableCell>--</TableCell>
                     <TableCell>--</TableCell>
                  </TableRow>
                  <TableRow>
                     <TableCell>Rain Shielter</TableCell>
                     <TableCell>--</TableCell>
                     <TableCell>○</TableCell>
                     <TableCell>--</TableCell>
                     <TableCell>▲</TableCell>
                  </TableRow>
               </TableBody>
            </Table>
            */}

         </Flex>
      </View>
   );
}
