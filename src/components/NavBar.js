import React from "react";
import { ScrollView } from "@aws-amplify/ui-react";

import NavBarLevel1 from "./NavBarLevel1"

export default function NavBar(props) {
   return(
      <ScrollView
         orientation="horizontal"
         height="300px"
         width="100%"
      >
         <NavBarLevel1 title="Farm" />
         <NavBarLevel1 title="Consulting" />
         <NavBarLevel1 title="Journal" />
      </ScrollView>
   );
}
