import { Button, SelectField } from "@aws-amplify/ui-react";
import { Table, TableCell, TableBody, TableHead, TableRow } from "@aws-amplify/ui-react";

import './Rental.css';

function Record(props) {
   return(
      <TableRow>
         <TableCell>{props.farm}</TableCell>
         <TableCell>{props.vegetable}</TableCell>
         <TableCell>{props.last_revenue}</TableCell>
         <TableCell>{props.last_measurement}</TableCell>
      </TableRow>
   )
}

export default function Rental(props) {
   return(
      <div class='rental-container'>
         <div class='search-container'>
            検索条件
            <SelectField
               size='small'
               placeholder='-- 選択してください --'
               label="農作物"
               width="200px"
            >
               <option value="soy">エダマメ</option>   
               <option value="beets">ビーツ</option>   
            </SelectField>

            <SelectField
               size='small'
               placeholder='-- 選択してください --'
               label="地域"
               width="200px"
            >
               <option value="tohoku">東北地方</option>   
               <option value="kanto">関東地方</option>   
               <option value="kyusyu">九州地方</option>   
            </SelectField>

            <Button
               variation='primary'
               isLoading={false}
            >
               検索
            </Button>

         </div>

         <div class='result-container'>
            
            <Table
               highlightOnHover={true}
               size={undefined}
               variation={undefined}
            >
               <TableHead>
                  <TableRow>
                     <TableCell as="th">農地</TableCell>
                     <TableCell as="th">野菜</TableCell>
                     <TableCell as="th">前回の売上, XYM</TableCell>
                     <TableCell as="th">前回の土壌測定</TableCell>
                  </TableRow>
               </TableHead>
               <TableBody>
                  <Record farm="JP00000000" vegetable="エダマメ" last_revenue="228.67" last_measurement="2022/2/24" />
                  <Record farm="JP00000001" vegetable="エダマメ" last_revenue="349.23" last_measurement="2022/1/9" />
                  <Record farm="JP00000002" vegetable="ビーツ" last_revenue="199.75" last_measurement="2021/12/18" />
               </TableBody>
            </Table>
  
         </div>
      </div>
   );
}
