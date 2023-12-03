import { ChipProps } from "@nextui-org/react";

const columns = [
  { name: "HOSPITAL", uid: "hospitalName" },
  { name: "STATUS", uid: "status", sortable: true },
  { name: "ACTIONS", uid: "actions" },
];

const statusOptions = [
  { name: "Canceled", uid: "canceled" },
  { name: "Subscribed", uid: "subscribed" },
];

const statusColorMap: Record<string, ChipProps["color"]> = {
  canceled: "danger",
  subscribed: "success",
};

const meetings = [
  {
    hospitalName: "Hospital A",
    status: "subscribed",
    details:
      "Deleniti fugit nisi provident. Alias atque nulla animi ab quasi vel. Enim quam accusantium nulla perspiciatis voluptatum.",
    id: 1,
  },
  {
    hospitalName: "Hospital B",
    status: "subscribed",
    details:
      "Dolorem expedita vitae nostrum corporis. Saepe rerum occaecati animi exercitationem numquam. Qui velit ad fugit pariatur ullam doloremque. Repudiandae et magnam est mollitia a porro et.",
    id: 2,
  },
  {
    hospitalName: "Hospital C",
    status: "subscribed",
    details:
      "Quas ex vel molestiae optio laboriosam. Nisi alias sequi sit quasi maxime quo. Sed debitis sequi doloremque optio dicta quidem iure reiciendis.",
    id: 3,
  },
  {
    hospitalName: "Hospital D",
    status: "canceled",
    details:
      "Neque debitis earum aspernatur vitae. Sit natus hic quod perspiciatis recusandae. Iure corporis et ex itaque assumenda. Saepe ex eos sequi praesentium omnis impedit consectetur. Fugit dolorem totam quis dicta tempora doloremque. Numquam suscipit deserunt.",
    id: 4,
  },
  {
    hospitalName: "Hospital E",
    status: "canceled",
    details:
      "Esse esse alias quis eligendi accusamus maiores minus. Tempora deserunt in ipsa corrupti voluptatem. Officia rerum similique velit facere quasi eius. Eligendi at similique alias unde quisquam rem inventore. Provident quisquam asperiores repudiandae quos totam eum atque delectus.",
    id: 5,
  },
];

export { columns, meetings, statusOptions, statusColorMap };
