import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { View } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';

import './NavItemLevel.css';

export default function NavItemLevel1(props) {
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
         <Link to={props.link} style={{ textDecoration: 'none' }}>
            <div class="link-container-lv1">{props.title}</div>
         </Link>
      </View>
   );
}
