/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Text, View } from "@aws-amplify/ui-react";
export default function FarmCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="122px"
      height="180px"
      overflow="hidden"
      position="relative"
      borderRadius="10px"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...rest}
      {...getOverrideProps(overrides, "FarmCard")}
    >
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="11px"
        left="11px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Sep 17"
        {...getOverrideProps(overrides, "Sep 17")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="128px"
        left="11px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="29℃ / 17 ℃"
        {...getOverrideProps(overrides, "29\u2103 / 17 \u2103")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="14.0625px"
        textAlign="left"
        display="flex"
        direction="column"
        justifyContent="flex-start"
        position="absolute"
        top="149px"
        left="11px"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="74 %"
        {...getOverrideProps(overrides, "74 %")}
      ></Text>
    </View>
  );
}
