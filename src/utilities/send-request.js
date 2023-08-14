import { getToken } from "./users-service";

export default async function sendRequest(url, method = "GET", payload = null) {
  // Fetch accepts an options object as the 2nd argument
  // used to include a data payload, set headers, etc.
  const options = { method };

  if (payload) {
    options.headers = { "Content-Type": "application/json" };
    options.body = JSON.stringify(payload);
  }
  // Add the below code
  const token = getToken();
  if (token) {
    // Ensure the headers object exists
    options.headers = options.headers || {};
    // Add token to an Authorization header
    // Prefacing with 'Bearer' is recommended in the HTTP specification
    options.headers.Authorization = `Bearer ${token}`;
  }
  console.log("options", options, "url", url);
  const res = await fetch(url, options);
  console.log("res", res);
  // if res.ok is false then something went wrong
  if (res.ok) return res.json();
  throw new Error("Bad Request");
}
