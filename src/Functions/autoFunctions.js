import moment from "moment";
import { serverUrl } from "../config";

// checking admin or not
export const isAdmin = (user) => (user ? user.authentication?.isAdmin : false);

// checking student or not
export const isStudent = (user) =>
  user ? user.authentication?.isStudent : false;

// checking employee or not
export const isEmployee = (user) =>
  user ? user.authentication?.isEmployee : false;

// checking logged in or not
export const activeStatus = (data) =>
  data ? (Object.keys(data).length === 0 ? false : true) : false;

// random invoice generator
export const generateInvoice = (randomDigit) => {
  const invoiceCharList = "12sd6789ifghjxcvk0qwertyulz345opabnm".split("");
  let loopTime = randomDigit,
    createdInvoice = [];

  while (loopTime--) {
    createdInvoice = [
      ...createdInvoice,
      invoiceCharList[Math.floor(Math.random() * 100) % 36],
    ];
  }
  const invoiceString = createdInvoice.join("");

  return invoiceString;
};

export const sleepInMiliseconds = (miliseconds) => {
  const stopTime = new Date().getTime() + miliseconds;
  console.log(stopTime);
  while (new Date().getTime() <= stopTime) {
    console.log(new Date().getTime());
  }
};

// ************************************************************
// *******************Fetching Functions***********************
// ************************************************************
// about posting Datas
export const postData = (url = "", data = {}) => {
  url = serverUrl + url;
  return new Promise((res, err) => {
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((r) => res(r))
      .catch((e) => err(e));
  });
};

// about getting datas
export const getData = (url = "") => {
  url = serverUrl + url;
  return new Promise((res, err) => {
    fetch(url)
      .then((r) => res(r))
      .catch((e) => err(e));
  });
};

// about deleting Data
export const deleteData = (url = "") => {
  url = serverUrl + url;
  return new Promise((res, err) => {
    fetch(url, {
      method: "DELETE",
    })
      .then((r) => res(r))
      .catch((e) => err(e));
  });
};

// about updating Data
export const updateData = (url = "", data = {}) => {
  url = serverUrl + url;
  return new Promise((res, err) => {
    fetch(url, {
      method: "PATCH",
      body: JSON.stringify(data),
      headers: { "Content-Type": "application/json" },
    })
      .then((r) => res(r))
      .catch((e) => err(e));
  });
};

// ************************************************************
// *******************Encryption Functions*********************
// ************************************************************

export const SharuEncryption = (plaintext) => {
  return plaintext
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt() + 5))
    .join("");
};
export const SharuDecryption = (chipherText) => {
  return chipherText
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt() - 5))
    .join("");
};

export const fromNow = (dateNtime) => {
  return moment(dateNtime, "hh:mm:ss A, MM/DD/YYYY").fromNow();
};
