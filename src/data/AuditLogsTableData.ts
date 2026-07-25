import type {
  AuditLogsNavigationListType,
  AuditLogsTableContentType,
} from "../types/data";

const auditLogsNavigationList: AuditLogsNavigationListType[] = [
  {
    label: "All Events",
    value: "all",
  },
  {
    label: "Registrations",
    value: "registrations",
  },
  {
    label: "Logins",
    value: "logins",
  },
  {
    label: "Uploads",
    value: "uploads",
  },
  {
    label: "Requests",
    value: "requests",
  },
];

const auditLogsTableTitle: string[] = [
  "TIME STAMP",
  "EVENT TYPE",
  "USER",
  "DETAILS",
];
const auditLogsTableContent: AuditLogsTableContentType[] = [
  {
    id: 1,
    timeStamp: "12:00 AM",
    eventType: "Doc Uploaded",
    user: "Hima Rai",
    details: "Uploaded Risk Assessment 2025.pdf",
  },
  {
    id: 2,
    timeStamp: "12:00 AM",
    eventType: "Access Requested",
    user: "Hima Rai",
    details: "Requested access to Q4 Financial Report 2024.pdf by.",
  },
  {
    id: 3,
    timeStamp: "12:00 AM",
    eventType: "User Login",
    user: "Hima Rai",
    details: "Logged in successfully.",
  },
  {
    id: 4,
    timeStamp: "12:00 AM",
    eventType: "Access Approved",
    user: "Hima Rai",
    details: "Approved access for Elena Rai to Risk Assesment.pdf",
  },
  {
    id: 5,
    timeStamp: "12:00 AM",
    eventType: "Doc Opened",
    user: "Hima Rai",
    details: "Opened Risk Assessment 2025.pdf (5m session)",
  },
  {
    id: 6,
    timeStamp: "12:00 AM",
    eventType: "Registration Request",
    user: "Hima Rai",
    details: "New user registration submitted for review.",
  },
  {
    id: 7,
    timeStamp: "Dec 14, 10:11 AM",
    eventType: "Access Expired",
    user: "Hima Rai",
    details: "Access expired for Compliance Audit Report.pdf",
  },
  {
    id: 8,
    timeStamp: "Dec 14",
    eventType: "Access Revoked",
    user: "Hima Rai",
    details: "Access revoked - download triggered on Compliance...",
  },
];

export const auditLogsTableData = {
  auditLogsNavigationList,
  auditLogsTableTitle,
  auditLogsTableContent,
};
