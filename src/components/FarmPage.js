import { Tabs, TabItem } from "@aws-amplify/ui-react";

import Abstruct from './farmpage-components/Abstruct';
import Report1 from './farmpage-components/Report1';
import Report2 from './farmpage-components/Report2';
import Report3 from './farmpage-components/Report3';

export default function FarmPage(props) {
   return(
      <Tabs spacing="equal" border="solid" style={{margin:"0"}}>
         <TabItem title="Report">
            <Abstruct />
            <Report1 />
            <Report2 />
            <Report3 />
         </TabItem>

         <TabItem title="3D View">
            Tab 2 Content
         </TabItem>
      </Tabs>
   );
}
