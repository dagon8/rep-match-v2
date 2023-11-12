import React from "react";
import {Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, getKeyValue} from "@nextui-org/react";

const rows = [
  {
   "location": "Hospital",
   "status": "status 1",
   "date": "2023-11-12",
   "time": "12:30pm",
   "id": "1"
  },
  {
   "location": "Hospital",
   "status": "status 2",
   "date": "2023-11-11",
   "time": "12:30pm",
   "id": "2"
  },
  {
   "location": "Office",
   "status": "status 3",
   "date": "2023-11-12",
   "time": "12:30pm",
   "id": "3"
  },
  {
   "location": "Hospital",
   "status": "status 4",
   "date": "2023-11-11",
   "time": "12:30pm",
   "id": "4"
  },
  {
   "location": "Office",
   "status": "status 5",
   "date": "2023-11-12",
   "time": "12:30pm",
   "id": "5"
  }
 ]

const columns = [
  {
    key: "date",
    label: "DATE",
  },
  {
    key: "location",
    label: "LOCATION",
  },
  {
    key: "time",
    label: "TIME",
  },
  {
    key: "status",
    label: "STATUS",
  },
];

export default function MeetingsTable() {
  return (
    <Table aria-label="Example table with dynamic content">
      <TableHeader columns={columns}>
        {(column) => <TableColumn key={column.key}>{column.label}</TableColumn>}
      </TableHeader>
      <TableBody items={rows}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => <TableCell>{getKeyValue(item, columnKey)}</TableCell>}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
