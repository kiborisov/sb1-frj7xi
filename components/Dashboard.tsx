'use client';

import { useState, useEffect } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import PerformanceMetrics from './PerformanceMetrics';
import TeamComparison from './TeamComparison';
import TaskQuality from './TaskQuality';
import ProductivityTrends from './ProductivityTrends';
import SearchBar, { SearchParams } from './SearchBar';

export default function Dashboard() {
  const [activeTab, setActiveTab] = useState('performance');
  const [isMounted, setIsMounted] = useState(false);
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handleSearch = (params: SearchParams) => {
    setSearchParams(params);
    // Here you would typically fetch data based on the search parameters
    console.log('Search params:', params);
  };

  if (!isMounted) {
    return null;
  }

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold mb-8">Data Annotation Team Analytics Dashboard</h1>
      <SearchBar onSearch={handleSearch} />
      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-4">
        <TabsList>
          <TabsTrigger value="performance">Performance Metrics</TabsTrigger>
          <TabsTrigger value="team">Team Comparison</TabsTrigger>
          <TabsTrigger value="quality">Task Quality</TabsTrigger>
          <TabsTrigger value="productivity">Productivity Trends</TabsTrigger>
        </TabsList>
        <TabsContent value="performance">
          <PerformanceMetrics searchParams={searchParams} />
        </TabsContent>
        <TabsContent value="team">
          <TeamComparison searchParams={searchParams} />
        </TabsContent>
        <TabsContent value="quality">
          <TaskQuality searchParams={searchParams} />
        </TabsContent>
        <TabsContent value="productivity">
          <ProductivityTrends searchParams={searchParams} />
        </TabsContent>
      </Tabs>
    </div>
  );
}