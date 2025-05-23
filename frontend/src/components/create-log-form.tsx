"use client"

import type React from "react"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Check, ChevronsUpDown } from "lucide-react"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem, CommandList } from "@/components/ui/command"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { cn } from "@/lib/utils"
import axios from "axios"
import {toast} from "sonner"
// Mock data for cities
const cities = [
  { value: "new-york", label: "New York", country: "United States" },
  { value: "london", label: "London", country: "United Kingdom" },
  { value: "paris", label: "Paris", country: "France" },
  { value: "tokyo", label: "Tokyo", country: "Japan" },
  { value: "sydney", label: "Sydney", country: "Australia" },
  { value: "rome", label: "Rome", country: "Italy" },
  { value: "bangkok", label: "Bangkok", country: "Thailand" },
  { value: "cairo", label: "Cairo", country: "Egypt" },
  { value: "rio", label: "Rio de Janeiro", country: "Brazil" },
  { value: "cape-town", label: "Cape Town", country: "South Africa" },
]

// Activity options
const activityOptions = [
  { id: "hiking", label: "Hiking" },
  { id: "mountain-biking", label: "Mountain Biking" },
  { id: "kayaking", label: "Kayaking" },
  { id: "skiing", label: "Skiing" },
  { id: "fishing", label: "Fishing" },
  { id: "surfing", label: "Surfing" },
]

// Information type options
const infoTypeOptions = [
  { id: "transportation", label: "Transportation" },
  { id: "health", label: "Health" },
  { id: "weather", label: "Weather" },
  { id: "gear", label: "Gear" },
  { id: "political-info", label: "Political Info" },
  { id: "activity-specific", label: "Activity Specific" },
]

export default function CreateLogForm() {
  const router = useRouter()
  const [open, setOpen] = useState(false)
  const [selectedCity, setSelectedCity] = useState("")
  const [country, setCountry] = useState("")
  const [selectedActivities, setSelectedActivities] = useState<string[]>([])
  const [selectedInfoTypes, setSelectedInfoTypes] = useState<string[]>([])

  const handleActivityChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedActivities([...selectedActivities, id])
    } else {
      setSelectedActivities(selectedActivities.filter((item) => item !== id))
    }
  }

  const handleInfoTypeChange = (id: string, checked: boolean) => {
    if (checked) {
      setSelectedInfoTypes([...selectedInfoTypes, id])
    } else {
      setSelectedInfoTypes(selectedInfoTypes.filter((item) => item !== id))
    }
  }

  let user_id = localStorage.getItem('user_id');

  const data = {
    user_id,
    city: selectedCity,
    country: country,
    activities: selectedActivities,
    information: selectedInfoTypes
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    axios.post("http://localhost/api/create-travel-log.php", data)
    .then(response => {
      toast.success("Travel log created successfully", {
        description: "Your travel log has been created.",
      });
      console.log(response.data);
      router.push("/dashboard");
    })
    .catch(error => {
      console.error("error: ", error)
    })
  }

  return (
    <div className="wrapper py-10">
      <div className="mx-auto max-w-3xl">
        <div className="flex flex-col gap-6">
          <div>
            <h1 className="text-3xl font-bold tracking-tight">Create Travel Plan</h1>
            <p className="text-muted-foreground">Document your travel experience and get personalized information.</p>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="space-y-8">
              {/* Section 1: Location */}
              <Card>
                <CardHeader>
                  <CardTitle>Location</CardTitle>
                  <CardDescription>Either select a region on the map or type it into the fields below:</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="city">Choose a City</Label>
                    <Popover open={open} onOpenChange={setOpen}>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          role="combobox"
                          aria-expanded={open}
                          className="w-full justify-between"
                        >
                          {selectedCity ? cities.find((city) => city.value === selectedCity)?.label : "Select city..."}
                          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-[--radix-popover-trigger-width] p-0">
                        <Command>
                          <CommandInput placeholder="Search city..." />
                          <CommandList>
                            <CommandEmpty>No city found.</CommandEmpty>
                            <CommandGroup>
                              {cities.map((city) => (
                                <CommandItem
                                  key={city.value}
                                  value={city.value}
                                  onSelect={(currentValue) => {
                                    setSelectedCity(currentValue === selectedCity ? "" : currentValue)
                                    setCountry(city.country)
                                    setOpen(false)
                                  }}
                                >
                                  <Check
                                    className={cn(
                                      "mr-2 h-4 w-4",
                                      selectedCity === city.value ? "opacity-100" : "opacity-0",
                                    )}
                                  />
                                  {city.label}
                                </CommandItem>
                              ))}
                            </CommandGroup>
                          </CommandList>
                        </Command>
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="country">Country</Label>
                    <Input
                      id="country"
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      placeholder="Enter country"
                    />
                  </div>
                </CardContent>
              </Card>

              {/* Section 2: Activities */}
              <Card>
                <CardHeader>
                  <CardTitle>Activities</CardTitle>
                  <CardDescription>Tell us what kind of things you will be doing there:</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {activityOptions.map((activity) => (
                      <div key={activity.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={activity.id}
                          checked={selectedActivities.includes(activity.id)}
                          onCheckedChange={(checked) => handleActivityChange(activity.id, checked as boolean)}
                        />
                        <Label htmlFor={activity.id}>{activity.label}</Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Section 3: Information Types */}
              <Card>
                <CardHeader>
                  <CardTitle>Information Types</CardTitle>
                  <CardDescription>What kind of information do you want about this trip?</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="grid gap-4 sm:grid-cols-2">
                    {infoTypeOptions.map((infoType) => (
                      <div key={infoType.id} className="flex items-center space-x-2">
                        <Checkbox
                          id={infoType.id}
                          checked={selectedInfoTypes.includes(infoType.id)}
                          onCheckedChange={(checked) => handleInfoTypeChange(infoType.id, checked as boolean)}
                        />
                        <Label htmlFor={infoType.id}>{infoType.label}</Label>
                      </div>
                    ))}
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" type="button" onClick={() => router.back()}>
                    Cancel
                  </Button>
                  <Button type="submit">Create Trip Plan</Button>
                </CardFooter>
              </Card>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
