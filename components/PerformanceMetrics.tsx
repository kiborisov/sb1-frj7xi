'use client';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { SearchParams } from './SearchBar';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Performance Metrics',
    },
  },
};

const labels = ['Time per Task', 'Quality Score', 'Tasks Completed'];

const data = {
  labels,
  datasets: [
    {
      label: 'Team Average',
      data: [5, 85, 100],
      backgroundColor: 'rgba(255, 99, 132, 0.5)',
    },
    {
      label: 'Top Performer',
      data: [3, 95, 150],
      backgroundColor: 'rgba(53, 162, 235, 0.5)',
    },
  ],
};

interface PerformanceMetricsProps {
  searchParams: SearchParams;
}

export default function PerformanceMetrics({ searchParams }: PerformanceMetricsProps) {
  // Here you would use the searchParams to fetch and filter data
  console.log('Performance Metrics searchParams:', searchParams);

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance Metrics</CardTitle>
      </CardHeader>
      <CardContent>
        <Bar options={options} data={data} />
      </CardContent>
    </Card>
  );
}