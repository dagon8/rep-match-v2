"use client";
import React from "react";
import NavBar from "../../components/NavBar";
import BookingsTable from "../../components/BookingsTable";
import { columns, meetings } from "./bookingData";

type Props = {};

export default function Booking({}: Props) {
  return (
    <>
      <NavBar pageName="Booking" />
      <div className="py-24">
        <div className="container m-auto">
          <BookingsTable columns={columns} meetings={meetings} />
        </div>
      </div>
    </>
  );
}
