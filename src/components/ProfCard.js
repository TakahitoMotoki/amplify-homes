import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Icon, Text, View } from "@aws-amplify/ui-react";

export default function ProfCard(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="330px"
      height="165px"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(34,34,34,1)"
      {...rest}
      {...getOverrideProps(overrides, "ProfileCard")}
    >
      <View
        width="330px"
        height="165px"
        position="absolute"
        top="0px"
        left="0px"
        overflow="hidden"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(34,34,34,0.6)"
        {...getOverrideProps(overrides, "Transparent")}
      >
        <Text
          fontFamily="IBM Plex Serif"
          fontSize="14px"
          fontWeight="400"
          color="rgba(255,255,255,1)"
          lineHeight="18px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="71px"
          left="135px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="XYM: 2,967.26&#xA;Points: 2,289&#xA;Rank: S2"
          {...getOverrideProps(overrides, "Details")}
        ></Text>
        <Text
          fontFamily="IBM Plex Serif"
          fontSize="18px"
          fontWeight="700"
          color="rgba(255,255,255,1)"
          lineHeight="24px"
          textAlign="left"
          display="flex"
          direction="column"
          justifyContent="flex-start"
          position="absolute"
          top="40px"
          left="135px"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Takahito Motoki"
          {...getOverrideProps(overrides, "Name")}
        ></Text>
        <Icon
          width="85px"
          height="85px"
          viewBox={{ minX: 0, minY: 0, width: 85, height: 85 }}
          paths={[
            {
              d: "M85 42.5C85 65.9721 65.9721 85 42.5 85C19.0279 85 0 65.9721 0 42.5C0 19.0279 19.0279 0 42.5 0C65.9721 0 85 19.0279 85 42.5Z",
              fill: "rgba(196,196,196,1)",
              fillRule: "nonzero",
            },
          ]}
          position="absolute"
          top="40px"
          left="30px"
          {...getOverrideProps(overrides, "ProfilePic")}
        ></Icon>
      </View>
    </View>
  );
}
