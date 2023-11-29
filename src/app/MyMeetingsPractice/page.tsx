"use client";
import React from "react";
import NavBarPractice from "../components/NavBarPractice";
import MeetingsTable from "../components/MeetingsTable";
import CreateMeetingModal from "../components/CreateMeetingModal";

import {
  columns,
  meetings,
  statusOptions,
  statusColorMap,
} from "./meetingData";

type Props = {};

export default function MyMeetingsPractice({}: Props) {
  return (
    <>
      <NavBarPractice pageName="My Meetings" />
      
      <div className="py-24">
        <div className="container m-auto">
        <div className="fixed top-[-30%] left-0 w-full h-full flex justify-center items-center">
            <CreateMeetingModal />
          </div>
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
