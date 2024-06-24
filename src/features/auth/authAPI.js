import { isRejected } from "@reduxjs/toolkit";

export function createUser(userData) {
  return new Promise(async (resolve) => {
    const response = await fetch("http://localhost:3002/users", {
      method: "POST",
      body: JSON.stringify(userData),
      headers: { "content-type": "application/json" },
    });
    const data = await response.json();
    //TODO: on server it will only return relevent information but bot the password
    resolve({ data });
  });
}

export function checkUser(loginInfo) {
  return new Promise(async (resolve, reject) => {
    const email = loginInfo.email;
    const password = loginInfo.password;
    const response = await fetch("http://localhost:3002/users?email=" + email);
    const data = await response.json();
    //TODO: on server it will only return relevent information but bot the password
    if (data.length) {
      if (password === data[0].password) {
        resolve({ data: data[0] });
      } else {
        reject({ message: "password didn't match" });
      }
    } else {
      reject({ message: "user not found" });
    }
  });
}
