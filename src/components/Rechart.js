import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceLine } from 'recharts'
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

function App() {
   return (
      <div className="App">
      <LineChart
         width={750}
         height={500}
         data={data}
         margin={{
         top: 50,
         right: 60,
         left: 60,
         bottom: 50,
         }}
      >
         <CartesianGrid strokeDasharray="3 3" />
         <XAxis dataKey="name" />
         <YAxis />
         <Tooltip />
         <Legend />
         <Line type="monotone" dataKey="土壌水分率" stroke="#007BC3" activeDot={{ r: 12 }} />
         <ReferenceLine y={42.0} label={{ value: "設定値", fill: "#DDD", fontSize: 10, position: 'right' }} stroke="red" />
      </LineChart>
      </div>
   );
}

export default withAuthenticator(App);
