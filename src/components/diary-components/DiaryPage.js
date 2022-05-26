import { Tabs, TabItem } from "@aws-amplify/ui-react";

export default function Diary(props) {
   return(
      <div class='diary-container'>
         <Tabs spacing="equal" border="solid" style={{margin:"0"}}>
            <TabItem title="日記">
               Diary
            </TabItem>

            <TabItem title="設定">
               Configuration
            </TabItem>
         </Tabs>
      </div>
   );
}
