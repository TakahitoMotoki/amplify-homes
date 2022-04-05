import React from 'react';
import axios from 'axios';

import { Text, View } from '@aws-amplify/ui-react';

const baseURL = "https://rn7d4bw87a.execute-api.us-east-2.amazonaws.com/default/test_httpAPI";

export default function Report3(props) {
   const [post, setPost] = React.useState(null);

   React.useEffect(() => {
      axios.get(baseURL,).then((response) => {
         setPost(response.data);
      });
   }, []);

   if(!post) return null;

   return(
      <View
         width="100%"
         height="900px"
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
            children="3. 生育記録"
         ></Text>

         <Text
            margin="30px 0px 30px 0px"
            fontFamily="Roboto"
            fontSize="18px"
            fontWeight="bold"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            padding="30px 30px 0px 0px"
            children="AAA"
         ></Text>

      </View>
   );
}
