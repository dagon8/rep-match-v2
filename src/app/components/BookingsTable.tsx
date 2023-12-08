import React from "react";
import {
  Table,
  TableHeader,
  TableColumn,
  TableBody,
  TableRow,
  TableCell,
  Input,
  Button,
  DropdownTrigger,
  Dropdown,
  DropdownMenu,
  DropdownItem,
  Pagination,
  Selection,
  SortDescriptor,
  Checkbox,
} from "@nextui-org/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons/faMagnifyingGlass";
import { faChevronDown } from "@fortawesome/free-solid-svg-icons/faChevronDown";
import { faSquare } from "@fortawesome/free-regular-svg-icons";
import { faSquareCheck } from "@fortawesome/free-regular-svg-icons/faSquareCheck";
import BookMeetingModal from "./BookMeetingModal";
import InfoMeetingModal from "./InfoModal";

function capitalize(str: string) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}

const INITIAL_VISIBLE_COLUMNS = [
  "location",
  "startTime",
  "date",
  "subscription",
  "actions",
];

type Props = {
  columns: {
    name: string;
    uid: string;
    sortable?: boolean;
  }[];
  meetings: {
    location: string;
    startTime: string;
    duration: string;
    date: string;
    details: string;
    subscription: boolean;
    id: number;
  }[];
};

export default function BookingsTable(props: Props) {
  //destructure prop values
  const { columns, meetings } = props;
  type Meeting = (typeof meetings)[0];

  //set states
  const [filterValue, setFilterValue] = React.useState("");
  const [filterDate, setFilterDate] = React.useState("");
  const [subscriptionFilter, setSubscriptionFilter] = React.useState(false);
  const [visibleColumns, setVisibleColumns] = React.useState<Selection>(
    new Set(INITIAL_VISIBLE_COLUMNS)
  );
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [sortDescriptor, setSortDescriptor] = React.useState<SortDescriptor>({
    column: "age",
    direction: "ascending",
  });
  const [page, setPage] = React.useState(1);

  const pages = Math.ceil(meetings.length / rowsPerPage);

  const hasSearchFilter = Boolean(filterValue);
  const hasDateFilter = Boolean(filterDate);

  const headerColumns = React.useMemo(() => {
    if (visibleColumns === "all") return columns;

    return columns.filter((column) =>
      Array.from(visibleColumns).includes(column.uid)
    );
  }, [visibleColumns]);

  const filteredItems = React.useMemo(() => {
    let filteredMeetings = [...meetings];

    if (hasSearchFilter) {
      filteredMeetings = filteredMeetings.filter((meeting) =>
        meeting.location.toLowerCase().includes(filterValue.toLowerCase())
      );
    }
    if (hasDateFilter) {
      filteredMeetings = filteredMeetings.filter((meeting) =>
        meeting.date.toLowerCase().includes(filterDate.toLowerCase())
      );
    }
    if (subscriptionFilter) {
      filteredMeetings = filteredMeetings.filter(
        (meeting) => meeting.subscription
      );
    }

    return filteredMeetings;
  }, [meetings, filterValue, filterDate, subscriptionFilter]);

  const items = React.useMemo(() => {
    const start = (page - 1) * rowsPerPage;
    const end = start + rowsPerPage;

    return filteredItems.slice(start, end);
  }, [page, filteredItems, rowsPerPage]);

  const sortedItems = React.useMemo(() => {
    return [...items].sort((a: Meeting, b: Meeting) => {
      const first = a[sortDescriptor.column as keyof Meeting] as number;
      const second = b[sortDescriptor.column as keyof Meeting] as number;
      const cmp = first < second ? -1 : first > second ? 1 : 0;

      return sortDescriptor.direction === "descending" ? -cmp : cmp;
    });
  }, [sortDescriptor, items]);

  const renderCell = React.useCallback(
    (meeting: Meeting, columnKey: React.Key) => {
      const cellValue = meeting[columnKey as keyof Meeting];

      switch (columnKey) {
        case "location":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">
                <InfoMeetingModal details={meeting.details} />
                {cellValue}
              </p>
            </div>
          );
        case "duration":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          );
        case "starTime":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          );
        case "date":
          return (
            <div className="flex flex-col">
              <p className="text-bold text-small capitalize">{cellValue}</p>
            </div>
          );
        case "subscription":
          return (
            <div className="flex justify-center w-1/3">
              <FontAwesomeIcon
                color="gray"
                size="lg"
                icon={cellValue ? faSquareCheck : faSquare}
              />
            </div>
          );
        case "actions":
          return (
            <div className="flex">
              <div className="relative flex items-center">
                <BookMeetingModal itemId={meeting.id}/>
              </div>
            </div>
          );
        default:
          return cellValue;
      }
    },
    []
  );

  const onRowsPerPageChange = React.useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      setRowsPerPage(Number(e.target.value));
      setPage(1);
    },
    []
  );

  const onSearchChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterValue(value);
      setPage(1);
    } else {
      setFilterValue("");
    }
  }, []);

  const onDateChange = React.useCallback((value?: string) => {
    if (value) {
      setFilterDate(value);
      setPage(1);
    } else {
      setFilterDate("");
    }
  }, []);

  const topContent = React.useMemo(() => {
    return (
      <div className="flex flex-col gap-4">
        <div className="flex justify-between gap-3 items-end">
          <Input
            isClearable
            classNames={{
              base: "w-full sm:max-w-[44%]",
            }}
            placeholder="Search by location..."
            size="sm"
            startContent={<FontAwesomeIcon icon={faMagnifyingGlass} />}
            value={filterValue}
            variant="underlined"
            onClear={() => setFilterValue("")}
            onValueChange={onSearchChange}
          />
          <div className="flex flex-grow justify-end items-center gap-2">
            <Checkbox
              onChange={() => setSubscriptionFilter(!subscriptionFilter)}
            >
              Subscriptions Only
            </Checkbox>
            <Input
              type="date"
              size="sm"
              classNames={{
                inputWrapper: "m-0 h-8",
              }}
              isClearable
              value={filterDate}
              onClear={() => setFilterDate("")}
              onValueChange={onDateChange}
              className="invisible sm:visible sm:flex sm:items-end sm:justify-end"
            />
            <Dropdown>
              <DropdownTrigger className="hidden sm:flex px-6">
                <Button
                  endContent={<FontAwesomeIcon icon={faChevronDown} />}
                  size="sm"
                  variant="flat"
                >
                  Columns
                </Button>
              </DropdownTrigger>
              <DropdownMenu
                disallowEmptySelection
                aria-label="Table Columns"
                closeOnSelect={false}
                selectedKeys={visibleColumns}
                selectionMode="multiple"
                onSelectionChange={setVisibleColumns}
              >
                {columns
                  .filter((column) => column.uid !== "actions")
                  .map((column) => (
                    <DropdownItem key={column.uid} className="capitalize">
                      {capitalize(column.name)}
                    </DropdownItem>
                  ))}
              </DropdownMenu>
            </Dropdown>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <span className="text-default-400 text-small">
            Total {meetings.length} meetings
          </span>
          <label className="flex items-center text-default-400 text-small">
            Rows per page:
            <select
              className="bg-transparent outline-none text-default-400 text-small"
              onChange={onRowsPerPageChange}
            >
              <option value="5">5</option>
              <option value="10">10</option>
              <option value="15">15</option>
              <option value={meetings.length}>All</option>
            </select>
          </label>
        </div>
      </div>
    );
  }, [
    filterValue,
    filterDate,
    subscriptionFilter,
    visibleColumns,
    onSearchChange,
    onDateChange,
    onRowsPerPageChange,
    meetings.length,
    hasSearchFilter,
    hasDateFilter,
  ]);

  const bottomContent = React.useMemo(() => {
    return (
      <div className="py-2 px-2 flex justify-between items-center">
        <Pagination
          showControls
          classNames={{
            cursor: "bg-darkBlue text-background",
          }}
          isDisabled={hasSearchFilter || hasDateFilter}
          page={page}
          total={pages}
          variant="light"
          onChange={setPage}
        />
      </div>
    );
  }, [items.length, page, pages, hasSearchFilter, hasDateFilter]);

  return (
    <Table
      isCompact
      removeWrapper
      aria-label="Meetings table data"
      bottomContent={bottomContent}
      bottomContentPlacement="outside"
      sortDescriptor={sortDescriptor}
      topContent={topContent}
      topContentPlacement="outside"
      onSortChange={setSortDescriptor}
    >
      <TableHeader columns={headerColumns}>
        {(column) => (
          <TableColumn
            key={column.uid}
            align="center"
            allowsSorting={column.sortable}
          >
            {column.name}
          </TableColumn>
        )}
      </TableHeader>
      <TableBody emptyContent={"No meetings found"} items={sortedItems}>
        {(item) => (
          <TableRow key={item.id}>
            {(columnKey) => (
              <TableCell>{renderCell(item, columnKey)}</TableCell>
            )}
          </TableRow>
        )}
      </TableBody>
    </Table>
  );
}
