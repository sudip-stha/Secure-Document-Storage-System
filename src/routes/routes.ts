export const appRoutes = {
  Home: "/",
  Login: "/login",
  Register: "/register",
  ForgotPassword: "/forgot-password",
  UserHome: "/user/home",
  UserMyFiles: "/user/my-files",
  UserAccessRequests: "/user/access-requests",
  UserRecent: "/user/recent",
  UserStarred: "/user/starred",
  UserTrash: "/user/trash",
  UserFilePreview: "/user/file/:fileId",

  AdminAuditLogs:"/admin/audit-logs",
  AdminUserManagement:"/admin/users",
  AdminFiles:"/admin/files"
} as const;
