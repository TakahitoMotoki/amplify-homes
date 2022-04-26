import './SoilMoisture.css';
import { LineChart, Line, Label, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'
import axios from 'axios';
import { withAuthenticator } from '@aws-amplify/ui-react';

const data = [
   {
      name: '02-17',
      土壌水分率: 68.8
   },
   {
      name: '',
      土壌水分率: 62.1
   },
   {
      name: '',
      土壌水分率: 55.3
   },
   {
      name: '',
      土壌水分率: 51.4
   },
   {
      name: '',
      土壌水分率: 49.6
   },
   {
      name: '',
      土壌水分率: 38.3
   },
   {
      name: '02-18',
      土壌水分率: 49.2
   },
   {
      name: '',
      土壌水分率: 42.1
   },
   {
      name: '',
      土壌水分率: 39.6
   },
   {
      name: '',
      土壌水分率: 27.5
   },
   {
      name: '',
      土壌水分率: 72.4
   },
   {
      name: '',
      土壌水分率: 56.4
   }
]

export default function SoilMoisture() {
   return (
      <ResponsiveContainer width="60%" height="30%">
         <LineChart
            data={data}
            margin={{
               top: 50,
               right: 50,
               left: 0,
               bottom: 0,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend
               align='right'
               verticalAlign='right'
               iconType='circle'
               iconSize={10}
            />
            <Line type="monotone" dataKey="土壌水分率" stroke="#007BC3" activeDot={{ r: 12 }} />
            <ReferenceLine y={42.0} label={{ value: "設定値", fill: "#222", fontSize: 10, position: 'right' }} stroke="red" />
         </LineChart>
      </ResponsiveContainer>
   );
}
