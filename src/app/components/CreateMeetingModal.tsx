import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Textarea,
} from "@nextui-org/react";

export default function App() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const [meetingData, setMeetingData] = useState({
    location: "",
    startTime: "",
    duration: "",
    date: "",
    details: "",
  });

  const handleInputChange = (key: string, value: string) => {
    setMeetingData((prevData) => ({ ...prevData, [key]: value }));
  };

  const handleCreateMeeting = () => {
    // Add logic to handle the creation of the meeting with meetingData
    console.log("Meeting Data:", meetingData);
    onOpenChange(); 
    setMeetingData({
        location: "",
        startTime: "",
        duration: "",
        date: "",
        details: "",
      });
  
      // Refresh the modal
      onOpenChange();
  };

  return (
    <>
       <Button
        isDisabled={status === "canceled" ? true : false}
        size="sm"
        onPress={onOpen}
        color="default"
        // variant="light"
        aria-label="Create Meeting"
      >
        Create Meeting
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} placement="top-center">
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">Create Meeting</ModalHeader>
              <ModalBody>
                <Input
                  label="Location"
                  placeholder="Enter the location"
                  variant="bordered"
                  value={meetingData.location}
                  onChange={(e) => handleInputChange("location", e.target.value)}
                />
                <Input
                  label="Start Time"
                  placeholder="Enter the start time"
                  variant="bordered"
                  value={meetingData.startTime}
                  onChange={(e) => handleInputChange("startTime", e.target.value)}
                />
                <Input
                  label="Duration"
                  placeholder="Enter the duration"
                  variant="bordered"
                  value={meetingData.duration}
                  onChange={(e) => handleInputChange("duration", e.target.value)}
                />
                <Input
                  type="date"
                  label="Date"
                  variant="bordered"
                  value={meetingData.date}
                  onChange={(e) => handleInputChange("date", e.target.value)}
                />
                <Textarea
                  label="Details"
                  placeholder="Enter meeting details"
                  variant="bordered"
                  value={meetingData.details}
                  onChange={(e) => handleInputChange("details", e.target.value)}
                />
              </ModalBody>
              <ModalFooter>
                <Button color="danger" variant="flat" onPress={onClose}>
                  Close
                </Button>
                <Button color="primary" onPress={handleCreateMeeting}>
                  Create Meeting
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}


// import React, { useState } from "react";
// import {
//   Modal,
//   ModalContent,
//   ModalHeader,
//   ModalBody,
//   ModalFooter,
//   Button,
//   Input,
//   Textarea,
//   useDisclosure,
// } from "@nextui-org/react";

// type Props = {
//   onCreate: (meetingData: MeetingData) => void;
// };

// type MeetingData = {
//   location: string;
//   startTime: string;
//   duration: string;
//   date: string;
//   details: string;
// };

// export default function CreateMeetingModal(props: Props) {
//   const { isOpen, onOpen, onOpenChange } = useDisclosure();
//   const { onCreate } = props;

//   const [meetingData, setMeetingData] = useState<MeetingData>({
//     location: "",
//     startTime: "",
//     duration: "",
//     date: "",
//     details: "",
//   });

//   const handleChange = (key: keyof MeetingData, value: string) => {
//     setMeetingData((prevData) => ({ ...prevData, [key]: value }));
//   };

//   const handleCreate = () => {
//     onCreate(meetingData);
//     setMeetingData({
//       location: "",
//       startTime: "",
//       duration: "",
//       date: "",
//       details: "",
//     });
//     onOpenChange(); // Corrected - don't pass any arguments
//   };

//   return (
//     <>
//       <Button size="sm" onPress={onOpen} color="primary" variant="light" aria-label="create">
//         Create Meeting
//       </Button>
//       <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
//         <ModalContent>
//           {(onClose) => (
//             <>
//               <ModalHeader className="flex flex-col gap-1">Create a Meeting</ModalHeader>
//               <ModalBody>
//                 <Input
//                   label="Location"
//                   value={meetingData.location}
//                   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                     handleChange("location", e.target.value)
//                   }
//                 />
//                 <Input
//                   label="Start Time"
//                   value={meetingData.startTime}
//                   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                     handleChange("startTime", e.target.value)
//                   }
//                 />
//                 <Input
//                   label="Duration"
//                   value={meetingData.duration}
//                   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                     handleChange("duration", e.target.value)
//                   }
//                 />
//                 <Input
//                   type="date"
//                   label="Date"
//                   value={meetingData.date}
//                   onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
//                     handleChange("date", e.target.value)
//                   }
//                 />
//                 {/* <Textarea
//                 label="Details"
//                 value={meetingData.details}
//                 onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
//                     handleChange("details", e.target.value)
//                 }
//                 />   */}
//               </ModalBody>
//               <ModalFooter>
//                 <Button color="primary" variant="light" onPress={handleCreate}>
//                   Create
//                 </Button>
//                 <Button color="danger" onPress={onClose}>
//                   Cancel
//                 </Button>
//               </ModalFooter>
//             </>
//           )}
//         </ModalContent>
//       </Modal>
//     </>
//   );
// }
