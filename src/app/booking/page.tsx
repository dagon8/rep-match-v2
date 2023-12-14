"use client";
import React from "react";
import NavBar from "../components/NavBar";
import BookingsTable from "../components/BookingsTable";
import { columns, meetings } from "./bookingData";

type Props = {};

export default function Booking({}: Props) {
  return (
    <>
      <NavBar pageName="Booking" />
      <div className="container m-auto pt-10">
        <h1 className="text-4xl font-bold text-darkBlue">Book</h1>
      </div>
      <div className="py-16">
        <div className="container m-auto">
          <BookingsTable columns={columns} meetings={meetings} />
        </div>
      </div>
    </>
  );
}
