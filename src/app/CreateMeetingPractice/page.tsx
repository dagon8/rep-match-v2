"use client";
import React from "react";
import NavBarPractice from "../../components/NavBarPractice";
import BookingsTable from "../../components/BookingsTable";
import CreateMeetingModal from "../../components/CreateMeetingModal";

import { columns, meetings } from "./bookingData";

type Props = {

  };

export default function Booking({}: Props) {
  return (
    <>
      <NavBarPractice pageName="Booking" />
      <div className="py-24">
        <div className="container m-auto">
            <CreateMeetingModal />
          {/* <BookingsTable columns={columns} meetings={meetings} /> */}
        </div>
      </div>
    </>
  );
}
