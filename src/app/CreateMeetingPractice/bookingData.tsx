const columns = [
    { name: "LOCATION", uid: "location" },
    { name: "DURATION", uid: "duration", sortable: true },
    { name: "START TIME", uid: "startTime", sortable: true },
    { name: "DATE", uid: "date", sortable: true },
    { name: "SUBSCRIPTION", uid: "subscription" },
    { name: "ACTIONS", uid: "actions" },
  ];
  
  const meetings = [
    {
      location: "27562 Bode Junction",
      startTime: "13:23:08",
      duration: "15 Mins",
      date: "2023-11-30",
      details:
        "Deleniti fugit nisi provident. Alias atque nulla animi ab quasi vel. Enim quam accusantium nulla perspiciatis voluptatum.",
      subscription: true,
      id: 1,
    },
    {
      location: "1099 Oma Well",
      startTime: "09:08:58",
      duration: "1 Hr",
      date: "2023-11-05",
      details:
        "Dolorem expedita vitae nostrum corporis. Saepe rerum occaecati animi exercitationem numquam. Qui velit ad fugit pariatur ullam doloremque. Repudiandae et magnam est mollitia a porro et.",
      subscription: true,
      id: 2,
    },
    {
      location: "552 Berniece Shore",
      startTime: "04:58:30",
      duration: "30 Mins",
      date: "2023-11-11",
      details:
        "Quas ex vel molestiae optio laboriosam. Nisi alias sequi sit quasi maxime quo. Sed debitis sequi doloremque optio dicta quidem iure reiciendis.",
      subscription: false,
      id: 3,
    },
    {
      location: "17296 Clotilde Rapid",
      startTime: "11:15:44",
      duration: "15 Mins",
      date: "2023-11-10",
      details:
        "Neque debitis earum aspernatur vitae. Sit natus hic quod perspiciatis recusandae. Iure corporis et ex itaque assumenda. Saepe ex eos sequi praesentium omnis impedit consectetur. Fugit dolorem totam quis dicta tempora doloremque. Numquam suscipit deserunt.",
      subscription: true,
      id: 4,
    },
    {
      location: "444 Roberta Lock",
      startTime: "09:37:00",
      duration: "30 Mins",
      date: "2023-11-21",
      details:
        "Esse esse alias quis eligendi accusamus maiores minus. Tempora deserunt in ipsa corrupti voluptatem. Officia rerum similique velit facere quasi eius. Eligendi at similique alias unde quisquam rem inventore. Provident quisquam asperiores repudiandae quos totam eum atque delectus.",
      subscription: false,
      id: 5,
    },
    {
      location: "80048 Buddy Viaduct",
      startTime: "16:54:32",
      duration: "15 Mins",
      date: "2023-11-21",
      details:
        "Iste corporis odit facilis quasi architecto. Impedit a laborum voluptates omnis explicabo. Natus laborum nostrum explicabo accusamus culpa. Aliquam nesciunt adipisci mollitia laborum magnam odio aspernatur excepturi adipisci.",
      subscription: false,
      id: 6,
    },
    {
      location: "002 Sincere Knolls",
      startTime: "21:07:59",
      duration: "1 Hr",
      date: "2023-11-22",
      details:
        "Quasi cupiditate alias ea debitis fugit autem vitae delectus ex. Eum nihil veritatis quibusdam esse quod nam provident ullam. Laudantium aperiam minima sint in dolorem est exercitationem eligendi at. Quam maiores perferendis.",
      subscription: false,
      id: 7,
    },
    {
      location: "118 Haley Groves",
      startTime: "03:12:06",
      duration: "1 Hr",
      date: "2023-11-27",
      details:
        "Fugiat voluptatibus quos magnam recusandae. Quam unde dignissimos alias optio debitis et temporibus. Enim possimus quibusdam inventore veritatis rerum molestiae inventore.",
      subscription: false,
      id: 8,
    },
    {
      location: "460 Raymundo Shoals",
      startTime: "06:30:28",
      duration: "15 Mins",
      date: "2023-11-08",
      details:
        "Repellat inventore eligendi blanditiis perferendis ipsam nobis perferendis. Aspernatur aliquid nisi quidem illo inventore magni eum necessitatibus suscipit. Ipsum unde minus nam ad sapiente id. Ducimus iure fuga cum minus fugiat alias.",
      subscription: false,
      id: 9,
    },
    {
      location: "7717 Reilly Ville",
      startTime: "21:59:55",
      duration: "30 Mins",
      date: "2023-11-13",
      details:
        "Itaque officiis tenetur ullam placeat enim omnis eos sint. Labore inventore placeat aliquid natus. Dolorem temporibus excepturi magnam odio repellendus doloremque at nostrum quae.",
      subscription: false,
      id: 10,
    },
    {
      location: "77963 Theron Square",
      startTime: "04:53:05",
      duration: "30 Mins",
      date: "2023-11-29",
      details:
        "Totam animi molestias veniam odit voluptatem aliquam hic. Dicta modi commodi laborum distinctio. Repellat accusamus omnis ullam.",
      subscription: false,
      id: 11,
    },
    {
      location: "47125 Francisco Knoll",
      startTime: "09:13:39",
      duration: "15 Mins",
      date: "2023-11-20",
      details:
        "Ex sequi magni sint odio quia eos ipsa. Nihil rem nam laboriosam hic unde similique excepturi. Cum officiis minus maxime sequi quis ullam perferendis nostrum repellat.",
      subscription: false,
      id: 12,
    },
    {
      location: "0778 Tremayne Neck",
      startTime: "09:19:28",
      duration: "30 Mins",
      date: "2023-11-27",
      details:
        "Blanditiis voluptates voluptates. Rem maxime eligendi neque illum dolore voluptatem libero error minus. Reiciendis repellendus molestiae.",
      subscription: true,
      id: 13,
    },
    {
      location: "1812 Hunter Curve",
      startTime: "09:22:17",
      duration: "1 Hr",
      date: "2023-11-22",
      details:
        "Optio iusto temporibus quasi voluptatem veniam ut. Laboriosam hic beatae hic placeat. Omnis vero voluptates illo esse ea eius dicta. Ea voluptate dolorem repellendus sapiente reiciendis. Eum fuga numquam saepe ratione hic beatae inventore voluptatibus quia.",
      subscription: false,
      id: 14,
    },
  ];
  
  export { columns, meetings };
  