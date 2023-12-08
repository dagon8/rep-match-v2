"use client";
import React from "react";
import NavBar from "../components/NavBar";
import MeetingsTable from "../components/MeetingsTable";
import {
  columns,
  meetings,
  statusOptions,
  statusColorMap,
} from "./meetingData";

type Props = {};

export default function MyMeetings({}: Props) {
  return (
    <>
      <NavBar pageName="My Meetings" />
      <div className="container m-auto pt-10">
        <h1 className="text-4xl font-bold text-darkBlue">Meetings</h1>
      </div>
      <div className="py-16">
        <div className="container m-auto">
          <MeetingsTable
            columns={columns}
            meetings={meetings}
            statusOptions={statusOptions}
            statusColorMap={statusColorMap}
          />
        </div>
      </div>
    </>
  );
}
