'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
import { SearchParams } from './SearchBar';

const data = [
  { name: 'Week 1', Team1: 4000, Team2: 2400 },
  { name: 'Week 2', Team1: 3000, Team2: 1398 },
  { name: 'Week 3', Team1: 2000, Team2: 9800 },
  { name: 'Week 4', Team1: 2780, Team2: 3908 },
  { name: 'Week 5', Team1: 1890, Team2: 4800 },
  { name: 'Week 6', Team1: 2390, Team2: 3800 },
  { name: 'Week 7', Team1: 3490, Team2: 4300 },
];

interface ProductivityTrendsProps {
  searchParams: SearchParams;
}

export default function ProductivityTrends({ searchParams }: ProductivityTrendsProps) {
  // Here you would use the searchParams to fetch and filter data
  console.log('Productivity Trends searchParams:', searchParams);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Productivity Trends</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <LineChart
            data={data}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="Team1" stroke="#8884d8" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="Team2" stroke="#82ca9d" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}