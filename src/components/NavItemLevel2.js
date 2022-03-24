import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Link, View } from "@aws-amplify/ui-react";

import { Link as ReactRouterLink } from 'react-router-dom';

import './NavItemLevel2.css';

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
         <Link as={ReactRouterLink} to={props.link} >
            <div class="link-container">{props.title}</div>
         </Link>
      </View>
   );
}
