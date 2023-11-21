import React from "react";
import { ChipProps } from "@nextui-org/react";

const columns = [
  {name: "LOCATION", uid: "location"},
  {name: "DURATION", uid: "duration", sortable: true},
  {name: "START TIME", uid: "startTime", sortable: true},
  {name: "DATE", uid: "date", sortable: true},
  {name: "STATUS", uid: "status", sortable: true},
  {name: "ACTIONS", uid: "actions"},
];

const statusOptions = [
  {name: "Scheduled", uid: "scheduled"},
  {name: "Canceled", uid: "canceled"},
  {name: "Ongoing", uid: "ongoing"},
  {name: "Finished", uid: "finished"},
];

const statusColorMap:Record<string, ChipProps["color"]>  = {
    scheduled: "success",
    canceled: "danger",
    ongoing: "warning",
    finished: "primary"
};

const meetings = [
    {
     location: "27562 Bode Junction",
     status: "scheduled",
     startTime: "13:23:08",
     duration: "15 Mins",
     date: "2023-11-30",
     details: "Deleniti fugit nisi provident. Alias atque nulla animi ab quasi vel. Enim quam accusantium nulla perspiciatis voluptatum.",
     id: 1
    },
    {
     location: "1099 Oma Well",
     status: "scheduled",
     startTime: "09:08:58",
     duration: "1 Hr",
     date: "2023-11-05",
     details: "Dolorem expedita vitae nostrum corporis. Saepe rerum occaecati animi exercitationem numquam. Qui velit ad fugit pariatur ullam doloremque. Repudiandae et magnam est mollitia a porro et.",
     id: 2
    },
    {
     location: "552 Berniece Shore",
     status: "ongoing",
     startTime: "04:58:30",
     duration: "30 Mins",
     date: "2023-11-11",
     details: "Quas ex vel molestiae optio laboriosam. Nisi alias sequi sit quasi maxime quo. Sed debitis sequi doloremque optio dicta quidem iure reiciendis.",
     id: 3
    },
    {
     location: "17296 Clotilde Rapid",
     status: "canceled",
     startTime: "11:15:44",
     duration: "15 Mins",
     date: "2023-11-10",
     details: "Neque debitis earum aspernatur vitae. Sit natus hic quod perspiciatis recusandae. Iure corporis et ex itaque assumenda. Saepe ex eos sequi praesentium omnis impedit consectetur. Fugit dolorem totam quis dicta tempora doloremque. Numquam suscipit deserunt.",
     id: 4
    },
    {
     location: "444 Roberta Lock",
     status: "finished",
     startTime: "09:37:00",
     duration: "30 Mins",
     date: "2023-11-21",
     details: "Esse esse alias quis eligendi accusamus maiores minus. Tempora deserunt in ipsa corrupti voluptatem. Officia rerum similique velit facere quasi eius. Eligendi at similique alias unde quisquam rem inventore. Provident quisquam asperiores repudiandae quos totam eum atque delectus.",
     id: 5
    },
    {
     location: "80048 Buddy Viaduct",
     status: "ongoing",
     startTime: "16:54:32",
     duration: "15 Mins",
     date: "2023-11-21",
     details: "Iste corporis odit facilis quasi architecto. Impedit a laborum voluptates omnis explicabo. Natus laborum nostrum explicabo accusamus culpa. Aliquam nesciunt adipisci mollitia laborum magnam odio aspernatur excepturi adipisci.",
     id: 6
    },
    {
     location: "002 Sincere Knolls",
     status: "canceled",
     startTime: "21:07:59",
     duration: "1 Hr",
     date: "2023-11-22",
     details: "Quasi cupiditate alias ea debitis fugit autem vitae delectus ex. Eum nihil veritatis quibusdam esse quod nam provident ullam. Laudantium aperiam minima sint in dolorem est exercitationem eligendi at. Quam maiores perferendis.",
     id: 7
    },
    {
     location: "118 Haley Groves",
     status: "ongoing",
     startTime: "03:12:06",
     duration: "1 Hr",
     date: "2023-11-27",
     details: "Fugiat voluptatibus quos magnam recusandae. Quam unde dignissimos alias optio debitis et temporibus. Enim possimus quibusdam inventore veritatis rerum molestiae inventore.",
     id: 8
    },
    {
     location: "460 Raymundo Shoals",
     status: "canceled",
     startTime: "06:30:28",
     duration: "15 Mins",
     date: "2023-11-08",
     details: "Repellat inventore eligendi blanditiis perferendis ipsam nobis perferendis. Aspernatur aliquid nisi quidem illo inventore magni eum necessitatibus suscipit. Ipsum unde minus nam ad sapiente id. Ducimus iure fuga cum minus fugiat alias.",
     id: 9
    },
    {
     location: "7717 Reilly Ville",
     status: "canceled",
     startTime: "21:59:55",
     duration: "30 Mins",
     date: "2023-11-13",
     details: "Itaque officiis tenetur ullam placeat enim omnis eos sint. Labore inventore placeat aliquid natus. Dolorem temporibus excepturi magnam odio repellendus doloremque at nostrum quae.",
     id: 10
    },
    {
     location: "77963 Theron Square",
     status: "scheduled",
     startTime: "04:53:05",
     duration: "30 Mins",
     date: "2023-11-29",
     details: "Totam animi molestias veniam odit voluptatem aliquam hic. Dicta modi commodi laborum distinctio. Repellat accusamus omnis ullam.",
     id: 11
    },
    {
     location: "47125 Francisco Knoll",
     status: "scheduled",
     startTime: "09:13:39",
     duration: "15 Mins",
     date: "2023-11-20",
     details: "Ex sequi magni sint odio quia eos ipsa. Nihil rem nam laboriosam hic unde similique excepturi. Cum officiis minus maxime sequi quis ullam perferendis nostrum repellat.",
     id: 12
    },
    {
     location: "0778 Tremayne Neck",
     status: "canceled",
     startTime: "09:19:28",
     duration: "30 Mins",
     date: "2023-11-27",
     details: "Blanditiis voluptates voluptates. Rem maxime eligendi neque illum dolore voluptatem libero error minus. Reiciendis repellendus molestiae.",
     id: 13
    },
    {
     location: "1812 Hunter Curve",
     status: "scheduled",
     startTime: "09:22:17",
     duration: "1 Hr",
     date: "2023-11-22",
     details: "Optio iusto temporibus quasi voluptatem veniam ut. Laboriosam hic beatae hic placeat. Omnis vero voluptates illo esse ea eius dicta. Ea voluptate dolorem repellendus sapiente reiciendis. Eum fuga numquam saepe ratione hic beatae inventore voluptatibus quia.",
     id: 14
    },
    {
     location: "9250 Koelpin Islands",
     status: "canceled",
     startTime: "20:13:36",
     duration: "30 Mins",
     date: "2023-11-20",
     details: "Atque molestiae vel fugiat esse natus sequi. Esse impedit perspiciatis. Quos rerum fuga nisi aspernatur. Aliquid exercitationem iusto necessitatibus culpa cumque vitae.",
     id: 15
    },
    {
     location: "3837 Zemlak Valleys",
     status: "ongoing",
     startTime: "13:53:29",
     duration: "15 Mins",
     date: "2023-11-14",
     details: "Veritatis sit facere nemo. Incidunt aperiam unde quasi quisquam eum quis qui numquam. Ab id perspiciatis autem mollitia reprehenderit. Iusto nihil doloremque ipsa accusamus unde.",
     id: 16
    },
    {
     location: "365 O'Connell Brook",
     status: "scheduled",
     startTime: "20:00:01",
     duration: "30 Mins",
     date: "2023-11-13",
     details: "Excepturi cumque eius aut eos. Facilis nobis voluptas nemo. Quidem at laboriosam consequatur. Tenetur excepturi dolore magni est assumenda maiores aliquid distinctio. Modi vero nulla impedit ex dolorem dolor veniam cum. Earum perferendis dolorem laboriosam earum.",
     id: 17
    },
    {
     location: "86347 Johnston Mills",
     status: "canceled",
     startTime: "02:02:05",
     duration: "1 Hr",
     date: "2023-11-26",
     details: "Dolore blanditiis earum error. Ea earum quaerat sunt distinctio exercitationem quos asperiores nesciunt. Dolorum ut dolorem at assumenda qui quasi accusantium pariatur laudantium. Laboriosam optio illum neque neque mollitia nisi quo facere.",
     id: 18
    }
   ]

export {columns, meetings, statusOptions, statusColorMap};
