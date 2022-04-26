import React from "react";
import { ScrollView } from "@aws-amplify/ui-react";

import NavItemLevel2 from "./NavItemLevel2"

export default function NavBarScrollView(props) {
   return(
      <ScrollView
         orientation="horizontal"
         height="100%"
         width="100%"
      >
         <NavItemLevel2 title="JP00000000" />
         <NavItemLevel2 title="JP00000001" />
         <NavItemLevel2 title="JP00000002" />
         <NavItemLevel2 title="JP00000003" />
         <NavItemLevel2 title="JP00000004" />
         <NavItemLevel2 title="JP00000005" />
      </ScrollView>
   );
}
