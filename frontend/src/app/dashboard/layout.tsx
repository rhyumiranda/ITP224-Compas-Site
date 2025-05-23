import React from 'react'
import DashboardNav from '@/components/dashboard-nav'

export default function layout( {children} : {children: React.ReactNode}) {
  return (
    <>
      <DashboardNav/>
      {children}
    </>
  )
}
