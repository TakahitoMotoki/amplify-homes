import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View, Icon, Text } from "@aws-amplify/ui-react";

export default function NavBarLevel1(props) {
  const { overrides, ...rest } = props;
   return(
      <View
         width="100%"
         height="40px"
         overflow="hidden"
         position="relative"
         padding="0px 0px 0px 0px"
         backgroundColor="rgba(34,34,34,1)"
         {...rest}
         {...getOverrideProps(overrides, "NavBarLevel1")}
      >
         <Text
            fontFamily="Roboto"
            fontSize="12px"
            fontWeight="400"
            color="rgba(221,221,221,1)"
            lineHeight="14.0625px"
            textAlign="left"
            display="flex"
            direction="column"
            justifyContent="flex-start"
            position="absolute"
            top="8px"
            left="40px"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={props.title}
            {...getOverrideProps(overrides, "Consulting")}
         ></Text>
      </View>
   );
}
