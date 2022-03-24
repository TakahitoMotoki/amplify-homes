import { Tabs, TabItem } from "@aws-amplify/ui-react";

export default function FarmPage(props) {
   return(
      <Tabs spacing="equal">
         <TabItem title="Report">Tab 1 Content</TabItem>
         <TabItem title="3D View">Tab 2 Content</TabItem>
      </Tabs>
   );
}
