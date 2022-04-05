import React from "react";
import { Text, View, SelectField } from '@aws-amplify/ui-react';
// import { Flex, Text, View, SelectField, StepperField } from '@aws-amplify/ui-react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
   {
      name: '窒素: N',
      推定値: 8.0,
      バーク堆肥: 2.0,
      魚粉: 1.3,
      リンカリ肥料: 0.0,
      目標値: 11.0,
      label: "目標値",
   },
   {
      name: 'リン: P',
      推定値: 5.5,
      バーク堆肥: 0.8,
      魚粉: 0.4,
      リンカリ肥料: 3.4,
      目標値: 9.0,
      label: "目標値",
   },
   {
      name: 'カリ: K',
      推定値: 4.2,
      バーク堆肥: 0.9,
      魚粉: 0.3,
      リンカリ肥料: 3.1,
      目標値: 10.0,
      label: "目標値",
   }
];

export default function Report2(props) {
   return(
      <View
         width="100%"
         height="900px"
         overflow="hidden"
         position="relative"
         padding="0px 0px 0px 80px"
         backgroundColor="rgba(242,242,242,1)"
      >
         <Text
            margin="30px 0px 30px 0px"
            fontFamily="Roboto"
            fontSize="36px"
            fontWeight="bold"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            padding="30px 30px 30px 0px"
            children="2. 肥料設計"
         ></Text>

         <Text
            margin="30px 0px 30px 0px"
            fontFamily="Roboto"
            fontSize="18px"
            fontWeight="bold"
            color="rgba(34,34,34,1)"
            lineHeight="14px"
            padding="30px 30px 0px 0px"
            children="肥料デザインの選択"
         ></Text>

         <SelectField label="" variation='quiet' size='small' width='400px'>
            <option value="op1">Option1: 推奨設計</option>    
            <option value="op2">Option2: 速効性設計</option>    
            <option value="op3">Option3: 遅効性設計</option>    
            <option value="op4">Option4: カスタム設計</option>    
         </SelectField>

         <ResponsiveContainer width="65%" height="50%">
            <BarChart
               data={data}
               margin={{
                  top: 40,
                  right: 0,
                  left: 0,
                  bottom: 0,
               }}
               barSize={30}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="name" />
               <YAxis label={{value: '含有量, kg/10a', angle: -90, position: 'middle', textAnchor: 'middle'}}/>
               <Tooltip />
               <Legend 
                  align='center'
                  verticalAlign='top'
                  iconType='circle'
                  iconSize={10}
               />
               <Bar dataKey="推定値" stackId="measured" fill="#999" />
               <Bar dataKey="バーク堆肥" stackId="measured" fill="#EF4644" />
               <Bar dataKey="魚粉" stackId="measured" fill="#4F9909" />
               <Bar dataKey="リンカリ肥料" stackId="measured" fill="#69ABDB" />
               <Bar dataKey="目標値" stackId="ref" fill="#555" />
            </BarChart>
         </ResponsiveContainer>

         {/*
         <StepperField
            max={1.5}
            min={0.5}
            defaultValue={1.0}
            step={0.01}
            size="small"
            width="300px"
            label="目標値調整 /倍"
         />

         <StepperField
            max={5.0}
            min={0}
            defaultValue={1.0}
            step={0.1}
            size="small"
            width="300px"
            label="バーク堆肥, kg/m^2"
         />

         <StepperField
            max={100}
            min={0}
            defaultValue={30}
            step={10}
            size="small"
            width="300px"
            label="魚粉, g/m^2"
         />

         <StepperField
            max={50}
            min={0}
            defaultValue={20}
            step={10}
            size="small"
            width="300px"
            label="リンカリ肥料, g/m^2"
         />
         */}

      </View>
   );
}
