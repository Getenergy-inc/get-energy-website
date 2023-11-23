const LOCAL_ADDRESS = (process.env.NEXT_PUBLIC_DEVELOPMEMT_SERVER_URL as string) ?? "";
const LIVE_ADDRESS = (process.env.NEXT_PUBLIC_PRODUCTION_SERVER_URL as string) ?? "";
const WAITLIST_ADDRESS = (process.env.NEXT_PUBLIC_WAITLIST_URL as string) ?? "";
const SHOP_NOW_ADDRESS = (process.env.NEXT_PUBLIC_SHOW_NOW_ADDRESS as string) ?? "";
const GET_STARTED_ADDRESS = (process.env.NEXT_PUBLIC_GET_STARTED_ADDRESS as string) ?? "";
const VOLUNTEER_FORM_URL = (process.env.NEXT_PUBLIC_VOLUNTEER_FORM_URL as string) ?? "";
const INTERN_FORM_URL = (process.env.NEXT_PUBLIC_INTERN_FORM_URL as string) ?? "";
const DASHBOARD_URL = (process.env.NEXT_PUBLIC_DASHBOARD_URL as string) ?? "";

export {
  LIVE_ADDRESS,
  LOCAL_ADDRESS,
  SHOP_NOW_ADDRESS,
  GET_STARTED_ADDRESS,
  WAITLIST_ADDRESS,
  INTERN_FORM_URL,
  VOLUNTEER_FORM_URL,
  DASHBOARD_URL,
};
