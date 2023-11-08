export const student = {
  id: "18701012",
  personalInfo: {
    id: "18701012",
    name: "Shariar Hasan",
    avater: "https://i.pravatar.cc/300",
    birthDate: "09/18/1998",
    fatherName: "Shah Alam Mazumder",
    motherName: "Kamrun Naher",
  },
  contact: {
    address: "West Ukil para",
    city: "feni",
    division: "chittagong",
    zip: "1010",
    phoneNo: "01866088233",
    email: "Hasan@gmail.com",
  },
  institutional: {
    course: "B.Sc Engineering",
    department: "Department of Computer Science",
    session: "2017-18",
  },
  hallDetails: [
    {
      alloted: true,
      allotedDate: "12-12-2019",
      cardExpiryDate: "12-12-2020",
      expired: true,
      roomNo: 341,
    },
    {
      alloted: false,
      allotedDate: "12-12-2020",
      cardExpiryDate: "12-12-2021",
      expired: true,
      roomNo: 341,
    },
  ],
  notifications: [
    {
      title: "You hall card has been expired",
    },
    {
      title: "New Notice Arrived! Please Check",
    },
    {
      title: "New Notice Arrived! Please Check",
    },
    {
      title: "Please Renew your Hall Card",
    },
  ],
  authentication: {
    isAdmin: false,
    isStudent: true,
    isEmployee: false,
  },
};




export const employee = {
  phoneNo: "01234567890",
  personalInfo: {
    name: "Employee Khan",
    avater: "https://i.pravatar.cc/300",
    birthDate: "02/05/2022",
    fatherName: "Employees Father",
    motherName: "Employees Mother",
  },
  contact: {
    address: "Employee er basha",
    city: "emplye city",
    division: "emplyee division",
    zip: "1000",
    phoneNo: "01234567890",
    email: "employee@gmail.com",
  },
  institutional: {
    course: "Jharudar",
    department: "Hall Employee",
    session: "02/05/2022",
  },
  authentication: {
    isAdmin: false,
    isStudent: false,
    isEmployee: true,
  },
};

export const admin = {
  id: "admin@gmail.com",
  personalInfo: {
    name: "",
    email: "",
    avater: "",
  },
  authentication: {
    isAdmin: true,
    isStudent: false,
    isEmployee: false,
  },
};

export const allCity = [
  "Barguna",
  "Barisal",
  "Bhola",
  "Jhalokati",
  "Patuakhali",
  "Pirojpur",
  "Bandarban",
  "Brahmanbaria",
  "Chandpur",
  "Chittagong",
  "Comilla",
  "Cox's Bazar",
  "Feni",
  "Khagrachhari",
  "Lakshmipur",
  "Noakhali",
  "Rangamati",
  "Dhaka",
  "Faridpur",
  "Gazipur",
  "Gopalganj",
  "Kishoreganj",
  "Madaripur",
  "Manikganj",
  "Munshiganj",
  "Narayanganj",
  "Narsingdi",
  "Rajbari",
  "Shariatpur",
  "Tangail",
  "Bagerhat",
  "Chuadanga",
  "Jessore",
  "Jhenaidah",
  "Khulna",
  "Kushtia",
  "Magura",
  "Meherpur",
  "Narail",
  "Satkhira",
  "Jamalpur",
  "Mymensingh",
  "Netrokona",
  "Sherpur",
  "Bogra",
  "Joypurhat",
  "Naogaon",
  "Natore",
  "Chapainawabganj",
  "Pabna",
  "Rajshahi",
  "Sirajganj",
  "Dinajpur",
  "Gaibandha",
  "Kurigram",
  "Lalmonirhat",
  "Nilphamari",
  "Panchagarh",
  "Rangpur",
  "Thakurgaon",
  "Habiganj",
  "Moulvibazar",
  "Sunamganj",
  "Sylhet",
];

export const cityOfBarishal = [
  "Barguna",
  "Barisal",
  "Bhola",
  "Jhalokati",
  "Patuakhali",
  "Pirojpur",
];
export const cityOfChittagong = [
  "Bandarban",
  "Brahmanbaria",
  "Chandpur",
  "Chittagong",
  "Comilla",
  "Cox's Bazar",
  "Feni",
  "Khagrachhari",
  "Lakshmipur",
  "Noakhali",
  "Rangamati ",
];
export const cityOfDhaka = [
  "Dhaka",
  "Faridpur",
  "Gazipur",
  "Gopalganj",
  "Kishoreganj",
  "Madaripur",
  "Manikganj",
  "Munshiganj",
  "Narayanganj",
  "Narsingdi",
  "Rajbari",
  "Shariatpur",
  "Tangail",
];
export const cityOfKhulna = [
  "Bagerhat",
  "Chuadanga",
  "Jessore",
  "Jhenaidah",
  "Khulna",
  "Kushtia",
  "Magura",
  "Meherpur",
  "Narail",
  "Satkhira",
];
export const cityOfMymensingh = [
  "Jamalpur",
  "Mymensingh",
  "Netrokona",
  "Sherpur",
];
export const cityOfRajshahi = [
  "Bogra",
  "Joypurhat",
  "Naogaon",
  "Natore",
  "Chapainawabganj",
  "Pabna",
  "Rajshahi",
  "Sirajganj",
];
export const cityOfRangpur = [
  "Dinajpur",
  "Gaibandha",
  "Kurigram",
  "Lalmonirhat",
  "Nilphamari",
  "Panchagarh",
  "Rangpur",
  "Thakurgaon",
];
export const cityOfSylhet = ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"];
export const allDivision = ["Dhaka", "Chattagram", "Khulna", "Rajshahi", "Barishal", "Sylhet", "Rangpur", "Meghna", "Padma"];


export const provostMessage = {
  info: {
    name: "Robiul Hasan Bhuiyan",
    designation: "Provost(Associate Professor)",
    hallName: "Shaheed Abdur Rab Hall",
    university: "University of Chittagong",
    imgUrl: "https://scontent.fcgp3-2.fna.fbcdn.net/v/t1.18169-9/1934665_1052164938338_1623116_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=de6eea&_nc_eui2=AeF9pdhHwwCzf_8fPxeDAWYWJo4_iPzfSbsmjj-I_N9Ju68jyfozd2wHBmwhOLgYshh0l0cX0nS476mKc8i1vcFt&_nc_ohc=dNabJuVPvAcAX_UWyFc&_nc_ht=scontent.fcgp3-2.fna&oh=00_AT89J0_CEmFPZdaGmdNtA5Sbp9TZYqhSSryzJzyTtHqoqg&oe=630A34A1",
  },
  title: "Welcome Message",
  message: `Warm greetings to the students of the Shaheed Abdur Rab Hall, their respected parents/guardians, alumni and valued surfers of this website! It gives me immense pleasure to welcome you all to be a part of this stunning hall family that strives to offer CU science male students a homely environment with desirable ambience for academic, cultural, extracurricular and personality development.   

    Shaheed Abdur Rab Hall infrastructure is already fastened with 24 hour clean water availability, clean and green hygienic milieu, comfy rooms, spacious dining hall, Wi Fi connectivity, activity/indoor games, tiled open-air shower house, large playground, laundry support, seminar library, mosque, beautiful garden, and many more. We are committed to promote clean and natural green sustainability to the entire hall premises.
    
    Hall Provost, dedicated House Tutors and trained Staffs are always ready to take great opportunity to provide students net, clean and comfortable place where talent students can study, relax, laugh and live with safety. Hall administration is always conscious to make residential students feel at home.  
    Respected Parents, Guardians, Alumni and Visitor are most welcome to the Shaheed Abdur Rab Hall!`,
};

export const smallTalkData = {
  heading: "Photo Gallery of Shaheed Abdur Rab Hall",
  text: "This section has been reserved for the beautiful and successive photos, as storing section for them. Any of the user can visit this section and enjoy the beauty of the gallery",
};


export const footerLink1 = [
  {
    title: "Vision and Mission",
    url: "https://cu.ac.bd/content/index.php?menumapno=13",
  },
  {
    title: "Facts and Acts",
    url: "https://cu.ac.bd/content/index.php?menumapno=14",
  },
  {
    title: "News & Events",
    url: "https://cu.ac.bd/news_and_events.php?id=1",
  },
  {
    title: "Notice Board",
    url: "/notice",
  },
  {
    title: "Directories",
    url: "https://cu.ac.bd/content/index.php?menumapno=22",
  },
  {
    title: "Department/Institute",
    url: "https://cu.ac.bd/allsections.php?menumapno=28",
  },
  {
    title: "Academic Calendar",
    url: "https://cu.ac.bd/content/index.php?menumapno=31",
  },
  {
    title: "Contact Us",
    url: "https://cu.ac.bd/content/index.php?menumapno=26",
  },
];

export const footerLink2 = [
  {
    title: "Central Library",
    url: "https://library.cu.ac.bd/",
  },
  {
    title: "Financial Aid",
    url: "https://cu.ac.bd/content/index.php?menumapno=48",
  },
  {
    title: "Office of the Vice-Chancellor",
    url: "https://cu.ac.bd/vco/",
  },
  {
    title: "Registrar Office",
    url: "https://cu.ac.bd/rego/",
  },
  {
    title: "Controller of Examination Office",
    url: "https://cu.ac.bd/cexo/",
  },
  {
    title: "Medical Center",
    url: "https://cu.ac.bd/medicalcenter/",
  },
  {
    title: "Proctorial Body",
    url: "https://cu.ac.bd/proctoroffice/",
  },
];
export const footerLink3 = [
  {
    title: "ICT Cell",
    url: "https://cu.ac.bd/ict/",
  },
  {
    title: "Guest Houses",
    url: "https://cu.ac.bd/content/index.php?menumapno=660",
  },
  {
    title: "Research and Publication Cell",
    url: "https://curpc.cu.ac.bd/",
  },
  {
    title: "University Journal",
    url: "https://cu.ac.bd/content/index.php?menumapno=72",
  },
  {
    title: "Conference",
    url: "https://cu.ac.bd/content/index.php?menumapno=73",
  },
  {
    title: "Publications",
    url: "https://cu.ac.bd/content/index.php?menumapno=74",
  },
  {
    title: "Residence Halls",
    url: "/",
  },
];

export const footerLink4 = [
  {
    title: "CU Shuttle",
    url: "https://cu.ac.bd/content/index.php?menumapno=86",
  },
  {
    title: "Arts & Culture",
    url: "https://cu.ac.bd/content/index.php?menumapno=91",
  },
  {
    title: "Campus Attractions",
    url: "https://cu.ac.bd/content/index.php?menumapno=91",
  },
  {
    title: "Gallery",
    url: "/gallery",
  },
  {
    title: "Forms & Downloads",
    url: "https://cu.ac.bd/forms.php",
  },
  {
    title: "Important Weblinks",
    url: "https://cu.ac.bd/important_weblinks.php",
  },
  {
    title: "FAQ",
    url: "/faq",
  },
];




export const studentDashboardlist = [
  {
    title: "Profile",
    link: "/profile",
    icon: "fas fa-user",
  },
  {
    title: "Gallery",
    link: "/gallery",
    icon: "fas fa-camera",
  },
  {
    title: "Notice Board",
    link: "/notice",
    icon: "fas fa-flag",
  },
  {
    title: "Open an Issue",
    link: "/issuebox",
    icon: "fas fa-info",
  },
];
export const employeeDashboardlist = [
  {
    title: "Profile",
    link: "/profile",
    icon: "fas fa-user",
  },
  {
    title: "Notice Board",
    link: "/notice",
    icon: "fas fa-flag",
  },
  {
    title: "Gallery",
    link: "/gallery",
    icon: "fas fa-camera",
  },
  {
    title: "Check Issue",
    link: "/issuebox",
    icon: "fas fa-info",
  },
];
export const adminDashboardlist = [
  {
    title: "Dashboard",
    link: "/profile",
    icon: "fas fa-tasks",
  },
  {
    title: "Users List",
    link: "/userlist",
    icon: "fas fa-user",
  },
  {
    title: "Hall Applications",
    link: "/applications",
    icon: "fas fa-envelope-open",
  },
  // {
  //   title: "Appoint Seat",
  //   link: "/appoint-seat",
  //   icon: "fas fa-plus-square",
  // },
  {
    title: "Upload Notice",
    link: "/notice",
    icon: "fas fa-edit",
  },
  {
    title: "Gallery Management",
    link: "/gallery",
    icon: "fas fa-file-upload",
  },
  {
    title: "Create User",
    link: "/create-user",
    icon: "fas fa-user-plus",
  },
  {
    title: "Hall Issue Check",
    link: "/issuebox",
    icon: "fas fa-info-circle",
  },
  
];

// {
//     title: "Help Section",
//     link: "/help-section",
//     icon: "fas fa-question-circle",
//   },