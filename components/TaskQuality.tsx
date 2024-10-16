'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, PieChart, Pie, Cell, Legend, Tooltip } from 'recharts';
import { SearchParams } from './SearchBar';

const data = [
  { name: 'Excellent', value: 400 },
  { name: 'Good', value: 300 },
  { name: 'Average', value: 200 },
  { name: 'Poor', value: 100 },
];

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

interface TaskQualityProps {
  searchParams: SearchParams;
}

export default function TaskQuality({ searchParams }: TaskQualityProps) {
  // Here you would use the searchParams to fetch and filter data
  console.log('Task Quality searchParams:', searchParams);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Task Quality Distribution</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <PieChart>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              outerRadius={150}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}