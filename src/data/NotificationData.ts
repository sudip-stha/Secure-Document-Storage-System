import type { NotificationDataTypes } from "../types/data";

export const notificationData: NotificationDataTypes[] = [
  {
    id: 1,
    title: "Access Request",
    message: "Simon Khadka requested access to “Compliance Audit 2025.pdf",
    date: "Dec 11, 10:43 AM",
  },
  {
    id: 2,
    title: "Access Reject",
    message:
      "Simon Khadka has declined your access request to Compliance Audit 2025.pdf",
    date: "Dec 11, 10:43 AM",
  },
  {
    id: 3,
    title: "Access Revoked",
    message:
      "Your access to Compliance Audit 2025.pdf was revoked after print/download action.",
    date: "Dec 25, 2:23 PM",
  },
  {
    id: 4,
    title: "Access Approved",
    message:
      "Simon Khadka has approved your access to  Compliance Audit 2025.pdf",
    date: "Dec 25, 2:23 PM",
  },
  {
    id: 5,
    title: "Access Expired",
    message:
      "Your access to Compliance Audit 2025.pdf has been expired after 5 minutes view. ",
    date: "Dec 25, 2:23 PM",
  },
];
