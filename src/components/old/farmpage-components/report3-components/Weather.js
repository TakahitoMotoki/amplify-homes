import React from 'react';

import { Divider, Text, View } from '@aws-amplify/ui-react';

const baseURL = "https://rn7d4bw87a.execute-api.us-east-2.amazonaws.com/default/test_httpAPI";

export default function Weather(props) {
   return(
      <View
         width="120px"
         height="180px"
         border="solid 1px rgba(212,212,212,1)"
         borderRadius="10px"
         overflow="hidden"
         position="relative"
         padding="0px 0px 0px 0px"
         backgroundColor="rgba(238,238,238,1)"
      >
         <Text
            margin="5px 0px 0px 10px"
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="bold"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            padding="0px 0px 0px 0px"
            children="Sep 17"
         ></Text>

         <Text
            margin="100px 0px 5px 10px"
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="bold"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            padding="0px 0px 0px 0px"
            children="29℃ / 17℃"
         ></Text>

         <Divider
            size="small"
            margin="0px 0px 0px 10px"
            orientation="horizontal"
            width="80%"
         />

         <Text
            margin="5px 0px 0px 10px"
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="bold"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            padding="0px 0px 0px 0px"
            children="40 %"
         ></Text>

      </View>
   );
}
