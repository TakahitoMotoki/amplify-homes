import React from "react";
import { ScrollView } from "@aws-amplify/ui-react";

import NavItemLevel1 from "./NavItemLevel1"
import NavItemLevel2 from "./NavItemLevel2"

export default function NavBar(props) {
   return(
      <ScrollView
         orientation="horizontal"
         height="300px"
         width="100%"
      >
         <NavItemLevel1 title="Rental" />
         <NavItemLevel1 title="Journal" />
         <NavItemLevel1 title="Consulting" />
         <NavItemLevel1 title="Farm" />
         <NavItemLevel2 title="JP00000000" />
         <NavItemLevel2 title="JP00000001" />
         <NavItemLevel2 title="JP00000002" />
      </ScrollView>
   );
}
