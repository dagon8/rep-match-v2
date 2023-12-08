"use client";
import React from "react";
import NavBar from "../../components/NavBar";
import MeetingsTable from "../../components/MeetingsTable";
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
      <div className="py-24">
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
