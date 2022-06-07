import React from "react";
import { Divider } from "@aws-amplify/ui-react";

import './NavProfile.css';

export default function NavProfile() {
   return(
      <div class="navprofile-container">
         <p class="name-container">Admin Bac さん</p>
         <Divider border="1.5px solid #4CE096" borderRadius="1px" />
      </div>
   );
}
