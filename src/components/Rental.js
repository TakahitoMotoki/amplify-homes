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
         <Text as="span" width="80px">
            {props.title}
         </Text>
         <SelectField
            size='small'
            placeholder='-- 選択してください --'
            width="200px"
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
            title="気候"
            options={["温暖・湿潤", "温暖・乾燥", "冷涼・湿潤", "冷涼・乾燥"]} 
         />

         <Flex direction="row" alignItems="center" margin="20px 0px 0px 0px">
            <Text as="span" width="80px">
               有機栽培
            </Text>
            <CheckboxField label="可能" name="organic" value="yes" />
            <CheckboxField label="不可" name="organic" value="yes" />
         </Flex>

         <Flex direction="row" alignItems="center" margin="20px 0px 0px 0px">
            <Text as="span" width="80px">
               前回の結果
            </Text>
            <CheckboxField label="S" name="rank_s" value="yes" />
            <CheckboxField label="A" name="rank_a" value="yes" />
            <CheckboxField label="B" name="rank_b" value="yes" />
            <CheckboxField label="C" name="rank_c" value="yes" />
            <CheckboxField label="D" name="rank_d" value="yes" />
            <CheckboxField label="E" name="rank_e" value="yes" />
         </Flex>

         <Button
            variation='primary'
            isLoading={false}
            margin='20px 0px 0px 0px'
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
               <Record farm="JP00000000" climate="温暖・湿潤" is_organic="---" last_result="B" last_measurement="2022/2/24" />
               <Record farm="JP00000001" climate="冷涼・乾燥" is_organic="◯" last_result="S" last_measurement="2022/4/12" />
               <Record farm="JP00000002" climate="温暖・湿潤" is_organic="◯" last_result="A" last_measurement="2021/12/23" />
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
