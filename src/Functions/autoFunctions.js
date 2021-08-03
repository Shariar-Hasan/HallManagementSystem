
// checking admin or not
export const isAdmin = (user) => user ? user.authentication.isAdmin : false;


// checking student or not
export const isStudent = (user) => user ? user.authentication.isStudent : false;;


// checking employee or not
export const isEmployee = (user) => user ? user.authentication.isEmployee : false;;



// checking logged in or not
export const activeStatus = (data) => (Object.keys(data) === 0) ? false : true;


