export const student = {
    id: 18701012,
    personalInfo: {
        id: 18701012,
        name: "Shariar Hasan",
        avater: "http://cu.ac.bd/csd/assets/image/studentphoto/18701012_PRGTCAO37P.jpg",
        birthDate: "18-09-1998",
        fatherName: "Shah Alam Mazumder",
        motherName: "Kamrun Naher",

    },
    contact: {
        address: "West Ukil para",
        city: "feni",
        division: "chittagong",
        zip: 1010,
        phoneNo: "01866088233",
        email: "Hasan@gmail.com",
    },
    institutional: {
        course: "B.Sc Engineering",
        department: "Department of Computer Science",
        session: "2017-18"
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
        name: "Employee Khan",
        avater: "https://robohash.org/honey?set=set1",
        birthDate: "18-09-1998",
        fatherName: "Employees Father",
        motherName: "Employees Mother",
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
        job: "Jharudar",
        joiningDate: "12-09-13",
        leavingDate: ""
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
    authentication: {
        isAdmin: true,
        isSuperAdmin: true,
        isStudent: false,
        isEmployee: true
    },


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
        noticeTitle: "Hall seats are going to to be free",
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
        noticeImage: "",  // https://i.ibb.co/0M0qW9M/1584040477-8.jpg
    },
    {
        noticeId: 2,
        noticeTitle: "Hall construction project going to start in near",
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
        noticeTitle: "Hall dining will closed for two days",
        noticeDescription: "student Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: true,
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
        noticeId: 4,
        noticeTitle: "Hall Construction will be end very soon",
        noticeDescription: "public Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: true,
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
        noticeTitle: "Hall room services staff will here by tomorrow",
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
        noticeTitle: "Hall security system updated",
        noticeDescription: "public Shaheed Abdur Rab Hall Seats are going to be free from 12-3-22 and the latest Apply for your seat lorelorelroe re fdafs af asf a sf af sa f asf a s sfasfa sfa sf asf as f asf asfa ",
        lastUpdated: {
            edited: true,
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
        noticeTitle: "Application  for hall employee opened today",
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
    {
        noticeId: 8,
        noticeTitle: "Hall website got some new updates",
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
        noticeTitle: "Emplyees reunion will held near today",
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
        noticeTitle: "Eid bonus for all Employee",
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

export const smallTalkData = {
    heading: "Photo Gallery of Shaheed Abdur Rab Hall",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aspernatur, repudiandae. Ad, exercitationem praesentium dolor sequi delectus rerum sit possimus tempore mollitia numquam odio dolorum enim ratione iure alias ullam minima voluptate libero natus, voluptatum amet doloribus. Fuga velit sit eaque magnam nostrum. Nostrum at deserunt expedita numquam laudantium ducimus laborum nihil reprehenderit nisi, illo, tenetur assumenda quas quibusdam repudiandae deleniti inventore quia odit totam accusamus doloremque officiis ratione. Officia alias incidunt expedita doloremque aspernatur facilis culpa officiis. Suscipit ad quisquam velit at minus, praesentium dolorum corporis asperiores voluptates non facilis perferendis temporibus consectetur eligendi, rem harum dolor sit quia maiores."
}

export const images = [
    {
        id: 1,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 2,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 3,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 4,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 5,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 6,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 7,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 8,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 9,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 10,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 11,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 12,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 13,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 14,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 15,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 16,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 17,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 18,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 19,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 20,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 21,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 22,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 23,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 24,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 25,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 26,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 27,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 28,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 29,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 30,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 31,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 32,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 33,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 34,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 35,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 36,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 37,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 38,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 39,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 40,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 41,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 42,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 43,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 44,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 45,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 46,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 47,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 48,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 49,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 50,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 51,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 52,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 53,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 54,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 55,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 56,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 57,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 58,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: true,
            hall: false,
        }
    },
    {
        id: 59,
        originalTitle: "hahahahahhahahahahah",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        thumbnail: 'https://i.ibb.co/0M0qW9M/1584040477-8.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 60,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 61,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },
    {
        id: 62,
        originalTitle: "huhuhuhuhuhuuhuh",
        thumbnailTitle: "thumbnail title",
        thumbnailAlt: "thumbnailAlt ",
        description: "eita omuk din tola pic bujhcho ni mia",
        original: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        thumbnail: 'https://i.ibb.co/8BwzSWc/IMG-20210521-221907.jpg',
        uploadDate: "12-8-21",
        category: {
            institutional: false,
            hall: true,
        }
    },

];


export const footerLink1 = [
    {
        title: "Vision and Mission",
        url: "https://cu.ac.bd/content/index.php?menumapno=13"
    },
    {
        title: "Facts and Acts",
        url: "https://cu.ac.bd/content/index.php?menumapno=14"
    },
    {
        title: "News & Events",
        url: "https://cu.ac.bd/news_and_events.php?id=1"
    },
    {
        title: "Notice Board",
        url: "/notice"
    },
    {
        title: "Directories",
        url: "https://cu.ac.bd/content/index.php?menumapno=22"
    },
    {
        title: "Department/Institute",
        url: "https://cu.ac.bd/allsections.php?menumapno=28"
    },
    {
        title: "Academic Calendar",
        url: "https://cu.ac.bd/content/index.php?menumapno=31"
    },
    {
        title: "Contact Us",
        url: "https://cu.ac.bd/content/index.php?menumapno=26"
    },

]

export const footerLink2 = [
    {
        title: "Central Library",
        url: "https://library.cu.ac.bd/"
    },
    {
        title: "Financial Aid",
        url: "https://cu.ac.bd/content/index.php?menumapno=48"
    },
    {
        title: "Office of the Vice-Chancellor",
        url: "https://cu.ac.bd/vco/"
    },
    {
        title: "Registrar Office",
        url: "https://cu.ac.bd/rego/"
    },
    {
        title: "Controller of Examination Office",
        url: "https://cu.ac.bd/cexo/"
    },
    {
        title: "Medical Center",
        url: "https://cu.ac.bd/medicalcenter/"
    },
    {
        title: "Proctorial Body",
        url: "https://cu.ac.bd/proctoroffice/"
    },

]
export const footerLink3 = [
    {
        title: "ICT Cell",
        url: "https://cu.ac.bd/ict/"
    },
    {
        title: "Guest Houses",
        url: "https://cu.ac.bd/content/index.php?menumapno=660"
    },
    {
        title: "Research and Publication Cell",
        url: "https://curpc.cu.ac.bd/"
    },
    {
        title: "University Journal",
        url: "https://cu.ac.bd/content/index.php?menumapno=72"
    },
    {
        title: "Conference",
        url: "https://cu.ac.bd/content/index.php?menumapno=73"
    },
    {
        title: "Publications",
        url: "https://cu.ac.bd/content/index.php?menumapno=74"
    },
    {
        title: "Residence Halls",
        url: "/"
    },

]


export const footerLink4 = [
    {
        title: "CU Shuttle",
        url: "https://cu.ac.bd/content/index.php?menumapno=86"
    },
    {
        title: "Arts & Culture",
        url: "https://cu.ac.bd/content/index.php?menumapno=91"
    },
    {
        title: "Campus Attractions",
        url: "https://cu.ac.bd/content/index.php?menumapno=91"
    },
    {
        title: "Gallery",
        url: "/gallery"
    },
    {
        title: "Forms & Downloads",
        url: "https://cu.ac.bd/forms.php"
    },
    {
        title: "Important Weblinks",
        url: "https://cu.ac.bd/important_weblinks.php"
    },
    {
        title: "FAQ",
        url: "/faq"
    },

]


