// const BASE_URL="http://localhost:8080/api/v1"
// production url
const BASE_URL = "http://16.170.209.126:9090/api/v1";

export const endpoints = {
  SIGNUP_API: BASE_URL + "/auth/signup",
  LOGIN_API: BASE_URL + "/auth/login",
};

export const bookOrderEndpoints = {
  CREATE_ORDER: BASE_URL + "/createOrder",
  GET_ORDERS: BASE_URL + "/fetchAllBookOrders",
  DELETE_ORDERS: BASE_URL + "/deleteOrderById",
};

export const contactUsEndPoint = {
  CONTACT_US_API: BASE_URL + "/contact-us",
};
