/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import {
  Badge,
  Button,
  Divider,
  Flex,
  Icon,
  Image,
  SelectField,
  Text,
  TextField,
  View,
} from "@aws-amplify/ui-react";
export default function FormCheckout(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="row"
      width="1160px"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...rest}
      {...getOverrideProps(overrides, "FormCheckout")}
    >
      <Flex
        gap="0"
        direction="row"
        width="667px"
        alignItems="flex-start"
        grow="1"
        basis="667px"
        height="1148px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 411")}
      >
        <Flex
          gap="32px"
          direction="column"
          width="667px"
          justifyContent="center"
          alignItems="center"
          grow="1"
          basis="667px"
          height="1084px"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 313")}
        >
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 406")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Info"
              {...getOverrideProps(overrides, "Info")}
            ></Text>
            <TextField
              display="flex"
              gap="4px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextFieldrvf")}
            ></TextField>
            <TextField
              display="flex"
              gap="4px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextFieldwck")}
            ></TextField>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Dividerdiv")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 409")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Shipping"
              {...getOverrideProps(overrides, "Shippingnwx")}
            ></Text>
            <TextField
              display="flex"
              gap="4px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextFieldmwd")}
            ></TextField>
            <TextField
              display="flex"
              gap="4px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextFielddsm")}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 407")}
            >
              <TextField
                display="flex"
                gap="4px"
                direction="column"
                width="289.5px"
                grow="1"
                basis="289.5px"
                height="74px"
                position="relative"
                padding="0px 0px 0px 0px"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                isMultiline={false}
                {...getOverrideProps(overrides, "TextFieldyfn")}
              ></TextField>
              <SelectField
                display="flex"
                gap="4px"
                direction="column"
                width="289.5px"
                justifyContent="center"
                grow="1"
                basis="289.5px"
                height="74px"
                position="relative"
                padding="0px 0px 0px 0px"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectFieldydm")}
              ></SelectField>
            </Flex>
            <Flex
              gap="24px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 408")}
            >
              <TextField
                display="flex"
                gap="4px"
                direction="column"
                width="289.5px"
                grow="1"
                basis="289.5px"
                height="74px"
                position="relative"
                padding="0px 0px 0px 0px"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                isMultiline={false}
                {...getOverrideProps(overrides, "TextFieldkht")}
              ></TextField>
              <SelectField
                display="flex"
                gap="4px"
                direction="column"
                width="289.5px"
                justifyContent="center"
                grow="1"
                basis="289.5px"
                height="74px"
                position="relative"
                padding="0px 0px 0px 0px"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectFieldsmr")}
              ></SelectField>
            </Flex>
          </Flex>
          <Divider
            height="1px"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divideriad")}
          ></Divider>
          <Flex
            gap="24px"
            direction="column"
            shrink="0"
            alignSelf="stretch"
            objectFit="cover"
            position="relative"
            padding="0px 32px 0px 32px"
            {...getOverrideProps(overrides, "Frame 313soe")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              shrink="0"
              position="relative"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Card info"
              {...getOverrideProps(overrides, "Card info")}
            ></Text>
            <TextField
              display="flex"
              gap="4px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextFieldrrp")}
            ></TextField>
            <TextField
              display="flex"
              gap="4px"
              direction="column"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              size="large"
              isDisabled={false}
              labelHidden={false}
              variation="default"
              isMultiline={false}
              {...getOverrideProps(overrides, "TextFieldjal")}
            ></TextField>
            <Flex
              gap="24px"
              direction="row"
              alignItems="flex-start"
              shrink="0"
              alignSelf="stretch"
              objectFit="cover"
              position="relative"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "Frame 410")}
            >
              <SelectField
                display="flex"
                gap="4px"
                direction="column"
                width="289.5px"
                justifyContent="center"
                grow="1"
                basis="289.5px"
                height="74px"
                position="relative"
                padding="0px 0px 0px 0px"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectFieldvph")}
              ></SelectField>
              <SelectField
                display="flex"
                gap="4px"
                direction="column"
                width="289.5px"
                justifyContent="center"
                grow="1"
                basis="289.5px"
                height="74px"
                position="relative"
                padding="0px 0px 0px 0px"
                size="large"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SelectFieldscf")}
              ></SelectField>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="fit-content"
        alignItems="flex-start"
        shrink="0"
        height="934px"
        position="relative"
        padding="32px 0px 32px 0px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "Frame 412")}
      >
        <Flex
          padding="0px 0px 0px 0px"
          width="469px"
          height="870px"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "Group 320")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="134px"
            position="absolute"
            top="194px"
            left="32px"
            {...getOverrideProps(overrides, "Group 314")}
          >
            <Image
              position="absolute"
              top="0%"
              bottom="2.99%"
              height="97.01%"
              left="0%"
              right="78.02%"
              width="21.98%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "imageesb")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.49px"
              position="absolute"
              top="83.58%"
              bottom="1.49%"
              left="29.88%"
              right="37.53%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Order Summary"
              {...getOverrideProps(overrides, "Order Summaryolw")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="23.88%"
              bottom="58.21%"
              left="29.88%"
              right="59.75%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Black"
              {...getOverrideProps(overrides, "Blackihv")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="82.09%"
              left="29.88%"
              right="51.85%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Basic Tee"
              {...getOverrideProps(overrides, "Basic Teelli")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="47.76%"
              bottom="34.33%"
              left="29.88%"
              right="59.26%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Large"
              {...getOverrideProps(overrides, "Largefno")}
            ></Text>
            <Icon
              position="absolute"
              top="0%"
              bottom="82.09%"
              left="94.07%"
              right="0%"
              overflow="hidden"
              padding="0px 0px 0px 0px"
              type="delete"
              {...getOverrideProps(overrides, "Iconsdp")}
            ></Icon>
            <SelectField
              display="flex"
              gap="4px"
              position="absolute"
              top="77.61%"
              bottom="0%"
              left="84.2%"
              right="0%"
              direction="column"
              width="64px"
              justifyContent="center"
              padding="0px 0px 0px 0px"
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "SelectFieldwgn")}
            ></SelectField>
          </View>
          <Divider
            position="absolute"
            top="41.61%"
            bottom="58.28%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Divideriew")}
          ></Divider>
          <Divider
            position="absolute"
            top="18.51%"
            bottom="81.38%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Dividerucu")}
          ></Divider>
          <Divider
            position="absolute"
            top="8.28%"
            bottom="91.61%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Dividerebn")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="134px"
            position="absolute"
            top="395px"
            left="32px"
            {...getOverrideProps(overrides, "Group 315")}
          >
            <Image
              position="absolute"
              top="0%"
              bottom="2.99%"
              height="97.01%"
              left="0%"
              right="78.02%"
              width="21.98%"
              padding="0px 0px 0px 0px"
              {...getOverrideProps(overrides, "imagebdz")}
            ></Image>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.49px"
              position="absolute"
              top="83.58%"
              bottom="1.49%"
              left="29.88%"
              right="37.53%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Order Summary"
              {...getOverrideProps(overrides, "Order Summaryiom")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="23.88%"
              bottom="58.21%"
              left="29.88%"
              right="59.75%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Black"
              {...getOverrideProps(overrides, "Blacktgt")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="82.09%"
              left="29.88%"
              right="51.85%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Basic Tee"
              {...getOverrideProps(overrides, "Basic Teeina")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(92,102,112,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="47.76%"
              bottom="34.33%"
              left="29.88%"
              right="59.26%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Large"
              {...getOverrideProps(overrides, "Largefzr")}
            ></Text>
            <Icon
              position="absolute"
              top="0%"
              bottom="82.09%"
              left="94.07%"
              right="0%"
              overflow="hidden"
              padding="0px 0px 0px 0px"
              type="delete"
              {...getOverrideProps(overrides, "Iconlnn")}
            ></Icon>
            <SelectField
              display="flex"
              gap="4px"
              position="absolute"
              top="77.61%"
              bottom="0%"
              left="84.2%"
              right="0%"
              direction="column"
              width="64px"
              justifyContent="center"
              padding="0px 0px 0px 0px"
              size="small"
              isDisabled={false}
              labelHidden={true}
              variation="default"
              {...getOverrideProps(overrides, "SelectFieldvmo")}
            ></SelectField>
          </View>
          <Divider
            position="absolute"
            top="64.71%"
            bottom="35.17%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Dividervsn")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            top="596px"
            left="32px"
            {...getOverrideProps(overrides, "Group 316")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="80.8%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Subtotal"
              {...getOverrideProps(overrides, "Subtotal")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="83.95%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$320.00"
              {...getOverrideProps(overrides, "$320.00")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            top="636px"
            left="32px"
            {...getOverrideProps(overrides, "Group 317")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="80.21%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Shipping"
              {...getOverrideProps(overrides, "Shippingfdv")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="87.16%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$15.00"
              {...getOverrideProps(overrides, "$15.00")}
            ></Text>
          </View>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            top="676px"
            left="32px"
            {...getOverrideProps(overrides, "Group 318")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(48,64,80,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="86.71%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Taxes"
              {...getOverrideProps(overrides, "Taxes")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="400"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.01px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="86.42%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$26.80"
              {...getOverrideProps(overrides, "$26.80")}
            ></Text>
          </View>
          <Divider
            position="absolute"
            top="82.3%"
            bottom="17.59%"
            left="6.82%"
            right="6.82%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Dividerdoi")}
          ></Divider>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="20px"
            position="absolute"
            top="733px"
            left="32px"
            {...getOverrideProps(overrides, "Group 319")}
          >
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.49px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="87.6%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Total"
              {...getOverrideProps(overrides, "Total")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="20px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              letterSpacing="0.49px"
              position="absolute"
              top="0%"
              bottom="0%"
              left="82.96%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$361.80"
              {...getOverrideProps(overrides, "$361.80")}
            ></Text>
          </View>
          <Divider
            position="absolute"
            top="90.69%"
            bottom="9.2%"
            left="0%"
            right="0%"
            padding="0px 0px 0px 0px"
            size="small"
            orientation="horizontal"
            {...getOverrideProps(overrides, "Dividerkxg")}
          ></Divider>
          <Button
            display="flex"
            gap="10px"
            position="absolute"
            top="94.48%"
            bottom="0%"
            left="6.82%"
            right="6.82%"
            direction="row"
            width="405px"
            justifyContent="center"
            alignItems="center"
            borderRadius="4px"
            padding="12px 24px 12px 24px"
            backgroundColor="rgba(4,125,149,1)"
            size="large"
            isDisabled={false}
            variation="primary"
            {...getOverrideProps(overrides, "Button")}
          ></Button>
          <View
            padding="0px 0px 0px 0px"
            width="405px"
            height="24px"
            position="absolute"
            top="105px"
            left="32px"
            {...getOverrideProps(overrides, "Group 313")}
          >
            <Icon
              position="absolute"
              top="0%"
              bottom="0%"
              left="0%"
              right="94.07%"
              overflow="hidden"
              padding="0px 0px 0px 0px"
              type="shopping_bag"
              {...getOverrideProps(overrides, "Iconmmo")}
            ></Icon>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="left"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0%"
              bottom="0%"
              left="9.88%"
              right="74.81%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="Cart (2)"
              {...getOverrideProps(overrides, "Cart (2)")}
            ></Text>
            <Text
              fontFamily="Inter"
              fontSize="16px"
              fontWeight="700"
              color="rgba(13,26,38,1)"
              lineHeight="24px"
              textAlign="right"
              display="flex"
              direction="column"
              justifyContent="flex-start"
              position="absolute"
              top="0%"
              bottom="0%"
              left="84.69%"
              right="0%"
              padding="0px 0px 0px 0px"
              whiteSpace="pre-wrap"
              children="$101.70"
              {...getOverrideProps(overrides, "$101.70")}
            ></Text>
          </View>
          <Badge
            display="flex"
            gap="10px"
            position="absolute"
            top="0px"
            left="32px"
            direction="row"
            width="405px"
            justifyContent="center"
            alignItems="center"
            borderRadius="99px"
            padding="8px 12px 8px 12px"
            backgroundColor="rgba(214,245,219,1)"
            size="default"
            variation="success"
            {...getOverrideProps(overrides, "Badge")}
          ></Badge>
        </Flex>
      </Flex>
    </Flex>
  );
}
