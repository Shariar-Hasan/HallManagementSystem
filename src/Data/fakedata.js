export const student = {
    id: 18701012,
    personalInfo: {
        id: 18701012,
        name: "Shariar Hasan",
        avater: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
        birthDate: "18-09-1998",
        fatherName: "Shah Alam Mazumder",
        motherName: "Kamrun Naher",
        contact: {
            address: "West Ukil para",
            city: "feni",
            division: "chittagong",
            zip: 1010,
            phoneNo: "01866088233",
            email: "Hasan@gmail.com",
        }
    },
    institutional: {
        department: "Department of Computer Science",
        session: "2017-18"
    },
    hallDetails: {
        alloted: true,
        allotedDate: "12-12-2020",
        cardExpiryDate: "12-12-2021",
        roomNo: 341,
        lastAllowted: []
    },
    activeStatus: {
        isActive: true,
        lastActive: "12-12-2012"
    },
    authentication: {
        isAdmin: false,
        isStudent: true,
        isEmployee: false
    }

}

export const employee = {
    phoneNo: "01234567890",
    personalInfo: {
        phoneNo: "01234567890",
        name: "Emplyee",
        avater: "https://robohash.org/honey?set=set1",
        birthDate: "18-09-1998",
        fatherName: "Employees Father",
        motherName: "Emplayees Mother",
        contact: {
            address: "Employee er basha",
            city: "emplye city",
            division: "emplyee division",
            zip: 1000,
            phoneNo: "01234567890",
            email: "employee@gmail.com",
        }
    },
    institutional: {
        department: "Jharudar",
    },
    activeStatus: {
        isActive: true,
        lastActive: "12-12-2012"
    },
    authentication: {
        isAdmin: false,
        isStudent: false,
        isEmployee: true
    }
}
export const admin = {
    name: " Admin 1",
    email: "admin@gmail.com",
    isAdmin: true,
    isSuperAdmin: true
}


export const allCity = ["Barguna", "Barisal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur", "Bandarban", "Brahmanbaria", "Chandpur", "Chittagong", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati", "Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail", "Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira", "Jamalpur", "Mymensingh", "Netrokona", "Sherpur", "Bogra", "Joypurhat", "Naogaon", "Natore", "Chapainawabganj", "Pabna", "Rajshahi", "Sirajganj", "Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon", "Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]


export const cityOfBarishal = ["Barguna", "Barisal", "Bhola", "Jhalokati", "Patuakhali", "Pirojpur"]
export const cityOfChittagong = ["Bandarban", "Brahmanbaria", "Chandpur", "Chittagong", "Comilla", "Cox's Bazar", "Feni", "Khagrachhari", "Lakshmipur", "Noakhali", "Rangamati "]
export const cityOfDhaka = ["Dhaka", "Faridpur", "Gazipur", "Gopalganj", "Kishoreganj", "Madaripur", "Manikganj", "Munshiganj", "Narayanganj", "Narsingdi", "Rajbari", "Shariatpur", "Tangail"]
export const cityOfKhulna = ["Bagerhat", "Chuadanga", "Jessore", "Jhenaidah", "Khulna", "Kushtia", "Magura", "Meherpur", "Narail", "Satkhira"]
export const cityOfMymensingh = ["Jamalpur", "Mymensingh", "Netrokona", "Sherpur"]
export const cityOfRajshahi = ["Bogra", "Joypurhat", "Naogaon", "Natore", "Chapainawabganj", "Pabna", "Rajshahi", "Sirajganj"]
export const cityOfRangpur = ["Dinajpur", "Gaibandha", "Kurigram", "Lalmonirhat", "Nilphamari", "Panchagarh", "Rangpur", "Thakurgaon"]
export const cityOfSylhet = ["Habiganj", "Moulvibazar", "Sunamganj", "Sylhet"]



export const notices = [
    {
        noticeId: 1,
        noticeTitle: "Seats are going to be free  1",
        noticeDescription: "student Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: true,
            visibleToEmployee: false,
            visibleToEveryone: false,
        },
        noticeImage: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
    },
    {
        noticeId: 2,
        noticeTitle: "Seats are going to be free  2",
        noticeDescription: "pubic Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: false,
            visibleToEmployee: false,
            visibleToEveryone: true,

        },
        noticeImage: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
    },
    {
        noticeId: 3,
        noticeTitle: "Seats are going to be free  3",
        noticeDescription: "student Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: true,
            visibleToEmployee: false,
            visibleToEveryone: false,

        },
        noticeImage: "https://i.ibb.co/0M 0qW9M/1584040477-8.jpg",
    },
    {
        noticeId: 4,
        noticeTitle: "Seats are going to be free  4",
        noticeDescription: "public Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: false,
            visibleToEmployee: false,
            visibleToEveryone: true,

        },
        noticeImage: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
    },
    {
        noticeId: 5,
        noticeTitle: "Seats are going to be free  5",
        noticeDescription: " student Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: true,
            visibleToEmployee: false,
            visibleToEveryone: false,

        },
        noticeImage: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
    },
    {
        noticeId: 6,
        noticeTitle: "Seats are going to be free  6",
        noticeDescription: "public Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: false,
            visibleToEmployee: false,
            visibleToEveryone: true,

        },
        noticeImage: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
    },
    {
        noticeId: 7,
        noticeTitle: "Seats are going to be free  7",
        noticeDescription: " employee Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: false,
            visibleToEmployee: true,
            visibleToEveryone: false,

        },
        noticeImage: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
    },
    {
        noticeId: 8,
        noticeTitle: "Seats are going to be free  8",
        noticeDescription: "public Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: false,
            visibleToEmployee: false,
            visibleToEveryone: true,

        },
        noticeImage: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
    },
    {
        noticeId: 9,
        noticeTitle: "Seats are going to be free  9",
        noticeDescription: "employee Shaheed Abdur  Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: false,
            visibleToEmployee: true,
            visibleToEveryone: false,

        },
        noticeImage: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
    },
    {
        noticeId: 10,
        noticeTitle: "Seats are going to be free  10",
        noticeDescription: "employee Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: false,
            updatedDate: "12-08-21"
        },
        noticeDeadline: "12-4-22",
        noticePrivacy: {
            visibleToStudent: false,
            visibleToEmployee: true,
            visibleToEveryone: false,

        },
        noticeImage: "https://i.ibb.co/0M0qW9M/1584040477-8.jpg",
    },
]






export const studentList = [
    {
        id: 18701012,
        personalInfo: {
            id: 18701012,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701013,
        personalInfo: {
            id: 18701013,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701014,
        personalInfo: {
            id: 18701014,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701015,
        personalInfo: {
            id: 18701015,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701016,
        personalInfo: {
            id: 18701016,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701017,
        personalInfo: {
            id: 18701017,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701018,
        personalInfo: {
            id: 18701018,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701019,
        personalInfo: {
            id: 18701019,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701020,
        personalInfo: {
            id: 18701020,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701021,
        personalInfo: {
            id: 18701021,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701022,
        personalInfo: {
            id: 18701022,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701023,
        personalInfo: {
            id: 18701023,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701024,
        personalInfo: {
            id: 18701024,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701025,
        personalInfo: {
            id: 18701025,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701026,
        personalInfo: {
            id: 18701026,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701027,
        personalInfo: {
            id: 18701027,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701028,
        personalInfo: {
            id: 18701028,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701029,
        personalInfo: {
            id: 18701029,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },
    {
        id: 18701030,
        personalInfo: {
            id: 18701030,
            name: "Shariar Hasan",
            avater: "https://robohash.org/honey?set=set1",
            birthDate: "18-09-1998",
            fatherName: "Shah Alam Mazumder",
            motherName: "Kamrun Naher",
            contact: {
                address: "West Ukil para",
                city: "feni",
                division: "chittagong",
                zip: 1010,
                phoneNo: "01866088233",
                email: "Hasan@gmail.com",
            }
        },
        institutional: {
            department: "Department of Computer Science",
            session: "2017-18"
        },
        hallDetails: {
            alloted: true,
            allotedDate: "12-12-2020",
            cardExpiryDate: "12-12-2021",
            roomNo: 341,
            lastAllowted: []
        },
        activeStatus: {
            isActive: true,
            lastActive: "12-12-2012"
        },
        authentication: {
            isAdmin: false,
            isStudent: true,
            isEmployee: false
        }

    },

]




export const provostMessage = {
    info: {
        name: "Prof. Dr. AKM Moinul Haque Meaze",
        designation: "Provost",
        hallName: "Shaheed Abdur Rab Hall",
        university: "University of Chittagong",
        imgUrl: "https://i.ibb.co/2Y9xPy0/51-1-H6-DNZ4-YDL.png"
    },
    title: "Welcome Message",
    message: `Warm greetings to the students of the Shaheed Abdur Rab Hall, their respected parents/guardians, alumni and valued surfers of this website! It gives me immense pleasure to welcome you all to be a part of this stunning hall family that strives to offer CU science male students a homely environment with desirable ambience for academic, cultural, extracurricular and personality development.   

    Shaheed Abdur Rab Hall infrastructure is already fastened with 24 hour clean water availability, clean and green hygienic milieu, comfy rooms, spacious dining hall, Wi Fi connectivity, activity/indoor games, tiled open-air shower house, large playground, laundry support, seminar library, mosque, beautiful garden, and many more. We are committed to promote clean and natural green sustainability to the entire hall premises.
    
    Hall Provost, dedicated House Tutors and trained Staffs are always ready to take great opportunity to provide students net, clean and comfortable place where talent students can study, relax, laugh and live with safety. Hall administration is always conscious to make residential students feel at home.  
    Respected Parents, Guardians, Alumni and Visitor are most welcome to the Shaheed Abdur Rab Hall!`

}



export const images = [
    {
        originalTitle : "hahahahahhahahahahah",
        thumbnailTitle : "thumbnail title",
        thumbnailAlt : "thumbnailAlt ",
        description : "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21"
    },
    {
        originalTitle : "huhuhuhuhuhuuhuh",
        thumbnailTitle : "thumbnail title",
        thumbnailAlt : "thumbnailAlt ",
        description : "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21"
    },
    {
        originalTitle : "hahahahahhahahahahah",
        thumbnailTitle : "thumbnail title",
        thumbnailAlt : "thumbnailAlt ",
        description : "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21"
    },
    {
        originalTitle : "huhuhuhuhuhuuhuh",
        thumbnailTitle : "thumbnail title",
        thumbnailAlt : "thumbnailAlt ",
        description : "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21"
    },
];