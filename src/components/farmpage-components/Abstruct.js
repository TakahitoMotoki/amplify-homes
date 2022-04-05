import React from "react";
import { Text, View } from '@aws-amplify/ui-react';

export default function Abstruct(props) {
   return(
      <View
         width="100%"
         overflow="hidden"
         position="relative"
         padding="0px 0px 0px 80px"
         backgroundColor="rgba(242,242,242,1)"
      >
         <Text
            margin="30px 0px 30px 0px"
            fontFamily="Roboto"
            fontSize="36px"
            fontWeight="bold"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            padding="30px 30px 30px 0px"
            children="概要"
         ></Text>
         
         <Text
            margin="30px 0px 30px 0px"
            fontFamily="Roboto"
            fontSize="18px"
            fontWeight="bold"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            padding="30px 30px 30px 0px"
            children="基本情報"
         ></Text>


         
         <Text
            margin="30px 0px 30px 0px"
            fontFamily="Roboto"
            fontSize="18px"
            fontWeight="bold"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            padding="30px 30px 30px 0px"
            children="Reference"
         ></Text>
      </View>
   );
}
