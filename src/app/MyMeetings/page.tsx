'use client'
import React from 'react'
import NavBar from '../components/NavBar';
import MeetingsTable from '../components/MeetingsTable';

type Props = {}

export default function MyMeetings({}: Props) {
  return (
    <>
      <NavBar pageName='My Meetings'/>
      <div className='py-24'>
        <div className='container m-auto'>
          <MeetingsTable/>  
        </div>
      </div>
    </>
  )
}