import { ChipProps } from "@nextui-org/react";

const columns = [
  { name: "SUBSCRIPTION", uid: "subscriptionName" },
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
    subscriptionName: "Subscription A",
    status: "subscribed",
    details:
      "Deleniti fugit nisi provident. Alias atque nulla animi ab quasi vel. Enim quam accusantium nulla perspiciatis voluptatum.",
    id: 1,
  },
  {
    subscriptionName: "Subscription B",
    status: "subscribed",
    details:
      "Dolorem expedita vitae nostrum corporis. Saepe rerum occaecati animi exercitationem numquam. Qui velit ad fugit pariatur ullam doloremque. Repudiandae et magnam est mollitia a porro et.",
    id: 2,
  },
  {
    subscriptionName: "Subscription C",
    status: "subscribed",
    details:
      "Quas ex vel molestiae optio laboriosam. Nisi alias sequi sit quasi maxime quo. Sed debitis sequi doloremque optio dicta quidem iure reiciendis.",
    id: 3,
  },
  {
    subscriptionName: "Subscription D",
    status: "canceled",
    details:
      "Neque debitis earum aspernatur vitae. Sit natus hic quod perspiciatis recusandae. Iure corporis et ex itaque assumenda. Saepe ex eos sequi praesentium omnis impedit consectetur. Fugit dolorem totam quis dicta tempora doloremque. Numquam suscipit deserunt.",
    id: 4,
  },
  {
    subscriptionName: "Subscription E",
    status: "canceled",
    details:
      "Esse esse alias quis eligendi accusamus maiores minus. Tempora deserunt in ipsa corrupti voluptatem. Officia rerum similique velit facere quasi eius. Eligendi at similique alias unde quisquam rem inventore. Provident quisquam asperiores repudiandae quos totam eum atque delectus.",
    id: 5,
  },
  {
    subscriptionName: "Subscription F",
    status: "subscribed",
    details:
      "Iste corporis odit facilis quasi architecto. Impedit a laborum voluptates omnis explicabo. Natus laborum nostrum explicabo accusamus culpa. Aliquam nesciunt adipisci mollitia laborum magnam odio aspernatur excepturi adipisci.",
    id: 6,
  },
  {
    subscriptionName: "Subscription G",
    status: "canceled",
    details:
      "Quasi cupiditate alias ea debitis fugit autem vitae delectus ex. Eum nihil veritatis quibusdam esse quod nam provident ullam. Laudantium aperiam minima sint in dolorem est exercitationem eligendi at. Quam maiores perferendis.",
    id: 7,
  }
];

export { columns, meetings, statusOptions, statusColorMap };
