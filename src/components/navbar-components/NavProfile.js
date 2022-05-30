import React from "react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { Divider, View, Text } from "@aws-amplify/ui-react";
import { Link } from 'react-router-dom';

import './NavProfile.css';

export default function NavProfile(props) {
  const { overrides, ...rest } = props;
   return(
      <div class="navprofile-container">
         <p class="name-container">Admin Bac さん</p>
         <Divider border="1.5px solid #4CE096" borderRadius="1px" />
      </div>
   );
}
