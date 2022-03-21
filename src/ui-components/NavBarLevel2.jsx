/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function NavBarLevel2(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="240px"
      height="30px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(34,34,34,1)"
      {...rest}
      {...getOverrideProps(overrides, "NavBarLevel2")}
    >
      <Text
        fontFamily="Roboto"
        fontSize="12px"
        fontWeight="400"
        color="rgba(255,255,255,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        width="70px"
        position="absolute"
        top="8px"
        left="60px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="JP00000001"
        {...getOverrideProps(overrides, "JP00000001")}
      ></Text>
    </View>
  );
}
