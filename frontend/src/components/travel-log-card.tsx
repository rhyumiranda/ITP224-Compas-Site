"use client"
import React from 'react'
import { TravelLogProps as TravelLog } from '@/lib/types'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Calendar, Plus, Filter } from "lucide-react"
import Image from 'next/image'
import { Button } from './ui/button'
import { Badge } from "@/components/ui/badge"
import { useEffect, useState } from 'react'
import axios from 'axios'

interface TravelLogCardsProps {
  travelLogs: TravelLog[];
}

export default function TravelLogCard({travelLogs} : TravelLogCardsProps) {

  if (!travelLogs || travelLogs.length === 0) {
    return (
      <div className="text-center p-4">
        No travel logs found. Create one to get started!
      </div>
    );
  }

  return (
    <>
      {travelLogs.map((log) => (
        <Card key={log.id} className="overflow-hidden">
          <CardHeader>
            <CardTitle>{log.city[0].toUpperCase() + log.city.slice(1)}</CardTitle>
            <div className="flex items-center text-sm text-muted-foreground">
              <MapPin className="mr-1 h-4 w-4" />
              {log.country}
            </div>
            <div className="flex items-center text-sm text-muted-foreground">
              <Calendar className="mr-1 h-4 w-4" />
              {log.created_at}
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex flex-wrap gap-2">
              {log.activities.map((activity) => (
                <Badge key={activity} variant="secondary">
                  {activity}
                </Badge>
              ))}
              {log.information.map((infoType) => (
                <Badge key={infoType} variant="outline">
                  {infoType}
                </Badge>
              ))}
            </div>
          </CardContent>
        </Card>
      ))}
    </>
  )
}
