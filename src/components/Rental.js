import { Button, CheckboxField, Flex, Heading, SelectField, ScrollView, Text } from "@aws-amplify/ui-react";
import { Table, TableCell, TableBody, TableHead, TableRow } from "@aws-amplify/ui-react";

import './Rental.css';

function Record(props) {
   return(
      <TableRow>
         <TableCell>{props.farm}</TableCell>
         <TableCell>{props.climate}</TableCell>
         <TableCell>{props.is_organic}</TableCell>
         <TableCell>{props.last_result}</TableCell>
         <TableCell>{props.last_measurement}</TableCell>
      </TableRow>
   )
}

function CustomSelectField(props) {
   return(
      <Flex direction="row" alignItems="center" margin="20px 0px 0px 0px">
         <SelectField
            label={props.title}
            size='small'
            variation='quiet'
            placeholder='-- 選択してください --'
            width="280px"
            options={props.options}
         ></SelectField>
      </Flex>
   )
}

function Search(props) {
   return(
      <div class='search-container'>
         <Heading level={4}>
            検索条件
         </Heading>

         <CustomSelectField 
            title="農作物" 
            options={["エダマメ", "ビーツ"]}
         />

         <CustomSelectField
            title="平均気温"
            options={["寒冷（10℃未満）", "冷涼（10℃~15℃）", "温暖（20℃~25℃）", "熱帯（25℃以上）"]} 
         />
      
         <CustomSelectField
            title="降水量"
            options={["少なめ", "普通", "多め"]} 
         />

         <CustomSelectField
            title="有機栽培"
            options={["可", "不可"]} 
         />

         <Button
            variation='primary'
            isLoading={false}
            width="280px"
            margin='40px 0px 0px 0px'
         >
            検索
         </Button>
      </div>
   )
}

function Result(props) {
   return(
      <div class='result-container'>
         <Search />

         <Heading level={4}>
            検索結果
         </Heading>
         
         <Table
            highlightOnHover={true}
            size={undefined}
            variation={undefined}
         >
            <TableHead>
               <TableRow>
                  <TableCell as="th">農地</TableCell>
                  <TableCell as="th">気候</TableCell>
                  <TableCell as="th">有機栽培</TableCell>
                  <TableCell as="th">前回の結果</TableCell>
                  <TableCell as="th">前回の土壌測定</TableCell>
               </TableRow>
            </TableHead>
            <TableBody>
               <Record farm="JP00000000" climate="温暖・湿潤" is_organic="不可" last_result="B" last_measurement="2022/2/24" />
               <Record farm="JP00000001" climate="冷涼・乾燥" is_organic="可" last_result="S" last_measurement="2022/4/12" />
               <Record farm="JP00000002" climate="温暖・湿潤" is_organic="可" last_result="A" last_measurement="2021/12/23" />
            </TableBody>
         </Table>
      </div>
   )
}

function ResultDetail(props) {
   return(
      <div class='resultdetail-container'>
         <ScrollView
            position="fixed"
            orientation="horizontal"
            width="100%"
            height="100vh"
            padding="50px 15px 0 15px"
         >
            <Heading level={4} color="#DDD">
               詳細データ
            </Heading>
            <p>
            ・写真
            ・平均気温
            ・平均湿度
            ・平均光量（快晴の割合とか）
            ・降水量
            ・土壌成分履歴
            ・作付の履歴（連作障害とかチェック用）
            ・作付可能な農作物
            ・アラート（連作障害起こる可能性あり、XXの害虫に注意など）
            </p>
         </ScrollView>
      </div>
   )
}

export default function Rental(props) {
   return(
      <div class='rental-container'>
         <Flex direction="row">
            <Result />
            <ResultDetail />
         </Flex>
      </div>
   );
}
