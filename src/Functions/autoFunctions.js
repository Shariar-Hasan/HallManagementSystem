// checking admin or not
export const isAdmin = (user) => (user ? user.authentication?.isAdmin : false);

// checking student or not
export const isStudent = (user) =>
  user ? user.authentication?.isStudent : false;

// checking employee or not
export const isEmployee = (user) =>
  user ? user.authentication?.isEmployee : false;

// checking logged in or not
export const activeStatus = (data) => (data ? true : false);

// when log in
export const quickChangeOnLogIn = (data) => {
  data.activeStatus.isActive = true;
};

// when log out
export const quickChangeOnLogOut = (data) => {
  data.activeStatus.isActive = false;
  data.activeStatus.lastActive = new Date().toLocaleString();
};

// random invoice generator
export const generateInvoice = () => {
  const invoiceCharList = "12sd6789ifghjxcvk0qwertyulz345opabnm".split("");
  let loopTime = 15,
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
