'use client';

import { useState } from 'react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Search } from 'lucide-react';

interface SearchBarProps {
  onSearch: (searchParams: SearchParams) => void;
}

export interface SearchParams {
  projectName?: string;
  projectId?: string;
  batchId?: string;
  taskId?: string;
  attemptId?: string;
  annotatorEmail?: string;
}

export default function SearchBar({ onSearch }: SearchBarProps) {
  const [searchParams, setSearchParams] = useState<SearchParams>({});

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSearchParams((prev) => ({ ...prev, [name]: value }));
  };

  const handleSearch = () => {
    onSearch(searchParams);
  };

  return (
    <div className="flex flex-col space-y-4 mb-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Input
          name="projectName"
          placeholder="Project Name"
          onChange={handleInputChange}
        />
        <Input
          name="projectId"
          placeholder="Project ID"
          onChange={handleInputChange}
        />
        <Input
          name="batchId"
          placeholder="Batch ID"
          onChange={handleInputChange}
        />
        <Input
          name="taskId"
          placeholder="Task ID"
          onChange={handleInputChange}
        />
        <Input
          name="attemptId"
          placeholder="Attempt ID"
          onChange={handleInputChange}
        />
        <Input
          name="annotatorEmail"
          placeholder="Annotator Email"
          onChange={handleInputChange}
        />
      </div>
      <Button onClick={handleSearch} className="w-full md:w-auto">
        <Search className="mr-2 h-4 w-4" /> Search
      </Button>
    </div>
  );
}