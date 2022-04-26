import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";

import './NavItemLevel.css';

export default function NavItemLevel2(props) {
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
         <div class="link-container-lv2">{props.title}</div>
      </View>
   );
}
