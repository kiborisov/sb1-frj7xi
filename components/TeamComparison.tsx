'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, Legend } from 'recharts';
import { SearchParams } from './SearchBar';

const data = [
  { subject: 'Speed', A: 120, B: 110, fullMark: 150 },
  { subject: 'Accuracy', A: 98, B: 130, fullMark: 150 },
  { subject: 'Consistency', A: 86, B: 130, fullMark: 150 },
  { subject: 'Task Completion', A: 99, B: 100, fullMark: 150 },
  { subject: 'Adaptability', A: 85, B: 90, fullMark: 150 },
  { subject: 'Collaboration', A: 65, B: 85, fullMark: 150 },
];

interface TeamComparisonProps {
  searchParams: SearchParams;
}

export default function TeamComparison({ searchParams }: TeamComparisonProps) {
  // Here you would use the searchParams to fetch and filter data
  console.log('Team Comparison searchParams:', searchParams);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Team Comparison</CardTitle>
      </CardHeader>
      <CardContent>
        <ResponsiveContainer width="100%" height={400}>
          <RadarChart cx="50%" cy="50%" outerRadius="80%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Team A" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Team B" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
}