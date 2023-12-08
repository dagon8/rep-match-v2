"use client";
import React from "react";
import NavBar from "../components/NavBar";
import SubscriptionsTable from "../components/SubscriptionsTable";
import { Tabs, Tab, Card, CardBody, CardHeader } from "@nextui-org/react";
import {
  columns,
  meetings,
  statusOptions,
  statusColorMap,
} from "./subscriptionsData";
import {
  columns as hospitalCols,
  meetings as hospitalMeetings,
  statusOptions as hospitalStatusOptions,
  statusColorMap as hospitalStatusColorMap,
} from "./hospitalsData";
import HospitalsTable from "../components/HospitalsTable";

type Props = {};

export default function Subscriptions({}: Props) {
  let tabs = [
    {
      id: "subscriptions",
      label: "Subscriptions",
      content: (
        <SubscriptionsTable
          columns={columns}
          meetings={meetings}
          statusOptions={statusOptions}
          statusColorMap={statusColorMap}
        />
      ),
    },
    {
      id: "hospitals",
      label: "Hospitals",
      content: (
        <HospitalsTable
          columns={hospitalCols}
          meetings={hospitalMeetings}
          statusOptions={hospitalStatusOptions}
          statusColorMap={hospitalStatusColorMap}
        />
      ),
    },
  ];
  return (
    <>
      <NavBar pageName="Subscriptions" />
      <div className="container m-auto pt-10">
        <h1 className="text-4xl font-bold text-darkBlue">Subscriptions</h1>
      </div>
      <div className="py-16">
        <div className="container m-auto">
          <div className="flex w-full flex-col">
            <Tabs aria-label="Dynamic tabs" items={tabs}>
              {(item) => (
                <Tab key={item.id} title={item.label}>
                  <div>{item.content}</div>
                </Tab>
              )}
            </Tabs>
          </div>
        </div>
      </div>
    </>
  );
}
