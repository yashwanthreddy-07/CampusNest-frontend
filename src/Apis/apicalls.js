const BASE_URL = "https://campusnest-backend-1.onrender.com";
// const BASE_URL = "https://campusnest-backend-1.onrender.com"
const callApi = async (endpoint, method, body, token) => {
  try {
    const headers = {
      "Content-Type": "application/json",
    };

    if (token) {
      headers["x-auth-token"] = token;
    }

    const requestOptions = {
      method: method,
      headers: headers,
    };

    if (body !== null) {
      requestOptions.body = JSON.stringify(body);
    }

    const response = await fetch(`${BASE_URL}/${endpoint}`, requestOptions);

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
    return { success: false, errors: "Internal Server Error" };
  }
};

export const signupStudent = async (userData) => {
  return callApi("auth/student-signup", "POST", userData);
};

export const signupAdmin = async (userData) => {
  return callApi("auth/admin-signup", "POST", userData);
};

export const signupOwner = async (userData) => {
  return callApi("auth/owner-signup", "POST", userData);
};
export const getOwnerDetails = async () => {
  return callApi(
    "get/owner-details",
    "GET",
    null,
    localStorage.getItem("owner-token")
  );
};
export const loginStudent = async (userData) => {
  return callApi("auth/student-login", "POST", userData);
};

export const loginAdmin = async (userData) => {
  return callApi("auth/admin-login", "POST", userData);
};

export const loginOwner = async (userData) => {
  return callApi("auth/owner-login", "POST", userData);
};
export const getUserDetails = async () => {
  return callApi(
    "get/user-details",
    "GET",
    null,
    localStorage.getItem("user-token")
  );
};
export const createRoom = async (roomData) => {
  return callApi(
    "create-room",
    "POST",
    roomData,
    localStorage.getItem("owner-token")
  );
};

export const deleteRoom = async (roomData) => {
  return callApi(
    "delete-room",
    "DELETE",
    roomData,
    localStorage.getItem("owner-token")
  );
};

export const getOwnerRooms = async (roomData) => {
  return callApi(
    "owner-rooms",
    "GET",
    null,
    localStorage.getItem("owner-token")
  );
};

export const requestRoom = async (requestData) => {
  return callApi("request-room", "POST", requestData);
};

export const getAllRooms = async () => {
  return callApi("allrooms", "GET", null);
};

export const getRoomDetails = async (body) => {
  return callApi("room", "POST", body);
};

export const getSlots = async () => {
  return callApi("slots", "GET", null);
};

export const getUserSlots = async () => {
  return callApi("user-slots", "GET", null, localStorage.getItem("user-token"));
};

export const getRequestedSlotsForAdmin = async () => {
  return callApi("slot-requests", "GET", null);
};

export const ApproveRequestedSlot = async (body) => {
  return callApi("approve-user-details", "PUT", body);
};

export const RejectRequestedSlot = async (body) => {
  return callApi("reject-user-details", "PUT", body);
};

export const getRequestedRoomsForAdmin = async (body) => {
  return callApi("room-requests", "GET", body);
};

export const ApproveRoom = async (body) => {
  return callApi("approve-room", "PUT", body);
};

export const RejectRoom = async (body) => {
  return callApi("reject-room", "PUT", body);
};

export const getNotifications = async (body) => {
  return callApi(
    "get-notifications",
    "POST",
    body,
    localStorage.getItem(`${body.role}-token`)
  );
};

export const updateprofile = async (body) => {
  return callApi(
    "get/update-profile",
    "PUT",
    body,
    localStorage.getItem(`user-token`)
  );
};

export const updateprofileowner = async (body) => {
  return callApi(
    "get/update-profile",
    "PUT",
    body,
    localStorage.getItem(`user-token`)
  );
};
export const getUsersChat = async () => {
  return callApi(
    "get-user-chats",
    "GET",
    null,
    localStorage.getItem(`user-token`)
  );
};

export const getOwnerChat = async () => {
  return callApi(
    "get-owner-chats",
    "GET",
    null,
    localStorage.getItem(`owner-token`)
  );
};

export const getUserChatMessages = async (body) => {
  return callApi("get-user-chat-messages", "POST", body);
};
export const updateSecurity = async (body) => {
  return callApi(
    "get/update-security",
    "PUT",
    body,
    localStorage.getItem("user-token")
  );
};
export const updateOwnerSecurity = async (body) => {
  return callApi(
    "get/update-owner-security",
    "PUT",
    body,
    localStorage.getItem("owner-token")
  );
};

export const sendfeedback = async (body) => {
  return callApi(
    "sendreview",
    "POST",
    body,
    localStorage.getItem("user-token")
  );
};

export const getreviews = async () => {
  return callApi("getreviews", "GET", null, null);
};
export const getreviewsByRoom = async (body) => {
  return callApi("get-reviews-by-room", "POST", body, null);
};
export const showRecomendRooms = async (body) => {
  return callApi("matchUsers", "POST", body);
};
export const canUserGiveFeedback = async (body) => {
  return callApi("can-user-give-feedback", "POST", body, localStorage.getItem("user-token"));
};