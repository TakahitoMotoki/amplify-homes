/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";
export default function NavBarLevel1(props) {
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
      {...getOverrideProps(overrides, "NavBarLevel1")}
    >
      <Icon
        width="24px"
        height="24px"
        position="absolute"
        top="3px"
        left="8px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        type="people_alt"
        fontSize="24px"
        {...getOverrideProps(overrides, "Icon")}
      ></Icon>
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
        children="Consulting"
        {...getOverrideProps(overrides, "Consulting")}
      ></Text>
    </View>
  );
}
