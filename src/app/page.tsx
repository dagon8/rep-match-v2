import Image from "next/image";
import { Button } from "@nextui-org/button";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Link href="/MyMeetings">
        <Button>Click me</Button>
      </Link>
    </div>
  );
}
