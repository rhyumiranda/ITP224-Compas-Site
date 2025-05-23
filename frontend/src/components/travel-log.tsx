"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import Link from "next/link"
import { Plus, Filter, Search } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuCheckboxItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import TravelLogCard from "./travel-log-card"
import axios from "axios"
import React from 'react';

export default function TravelLogsPage() {
  const router = useRouter()
  const [userId, setUserId] = useState<string | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [bookingsData, setBookingsData] = useState<any>({ data: [] });
  
  const [searchQuery, setSearchQuery] = useState("");
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  useEffect(() => {
    setIsClient(true);
    const id = localStorage.getItem('user_id');
    setUserId(id);
  }, []);
  
  useEffect(() => {
    if (!userId || !isClient) return;
    
    axios.get('http://localhost/api/create-travel-log.php', {
      params: {
        user_id: userId
      }
    })
    .then(response => {
      setBookingsData(response.data);
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }, [userId, isClient]);

  const filteredLogs = React.useMemo(() => {
    const logsToUse = bookingsData.data && bookingsData.data.length > 0 
      ? bookingsData.data 
      : '';
      
    if (!searchQuery && !activeFilter) return logsToUse;
    
    return logsToUse.filter(log => {
      const matchesSearch = searchQuery ? (
        (log.title?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (log.city?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (log.country?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (log.description?.toLowerCase().includes(searchQuery.toLowerCase())) ||
        (log.activities?.some((act: string) => 
          act.toLowerCase().includes(searchQuery.toLowerCase())
        ))
      ) : true;
      
      const matchesFilter = activeFilter 
        ? log.activities?.includes(activeFilter)
        : true;
      
      return matchesSearch && matchesFilter;
    });
  }, [bookingsData.data, searchQuery, activeFilter]);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };
  
  const handleFilterSelect = (filter: string) => {
    setActiveFilter(filter === 'All Activities' ? null : filter);
  };

  return (
    <div className="wrapper py-10">
      <div className="flex flex-col gap-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <h1 className="text-3xl font-bold tracking-tight">My Travel Logs</h1>
          <Link href="/dashboard/create-travel">
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Log
            </Button>
          </Link>
        </div>

        <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
          <div className="relative flex-1">
            <Input 
              placeholder="Search travel logs..." 
              className="pl-10" 
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          </div>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="w-full sm:w-auto">
                <Filter className="mr-2 h-4 w-4" />
                {activeFilter || 'All Activities'}
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <DropdownMenuCheckboxItem 
                checked={activeFilter === null}
                onSelect={() => handleFilterSelect('All Activities')}
              >
                All Activities
              </DropdownMenuCheckboxItem>
              {['Hiking', 'Mountain Biking', 'Kayaking', 'Skiing', 'Fishing', 'Surfing'].map(activity => (
                <DropdownMenuCheckboxItem 
                  key={activity}
                  checked={activeFilter === activity}
                  onSelect={() => handleFilterSelect(activity)}
                >
                  {activity}
                </DropdownMenuCheckboxItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredLogs.length > 0 ? (
            filteredLogs.map((log) => (
              <TravelLogCard key={log.id} travelLogs={[log]} />
            ))
          ) : (
            <div className="col-span-3 text-center py-10 text-gray-500">
              No travel logs match your search. Try different keywords.
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
