import type { FileNameType } from "../types/data";

export default function getNotifyMessageIcon({ fileName }: FileNameType) {
  const notifyTitle = fileName.toLowerCase();

  switch (notifyTitle) {
    case "access request":
      return "/public/icons/accessRequest.svg";
    case "access reject":
      return "/public/icons/accessReject.svg";
    case "access revoked":
      return "/public/icons/notifyAccessRevoked.svg";
    case "access approved":
      return "/icons/authorizedIcon.svg";
    case "access expired":
      return "/public/icons/notifyAccessExpired.svg";
  }
}
