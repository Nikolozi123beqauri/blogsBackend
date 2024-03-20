
const database = {
    users:[],
    blogs:[]
}

 database.blogs = [
    {
        "id": 1,
        "title": "pirveli blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "jurkha asanidze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 2,
        "title": "meore blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "jurkha asanidze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 3,
        "title": "mesame blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "gio abulaze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 4,
        "title": "meore blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "temo giorgadze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },  
    {
        "id": 5,
        "title": "samshvid blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "levan datunashvili",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 6,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "nino dolidze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 7,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "levani tavadze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 8,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "goga meskhi",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 9,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "ana abashidze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 10,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "giorgi gvantseladze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 11,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "tako andguladze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 12,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "khatuna xizanishvili",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 13,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "nika gabunia",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 14,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "saba dolidze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 15,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "ana jangirashvili",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 16,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "nika gabunia",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 17,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "saba dolidze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false,
        "image": ""
    },
    {
        "id": 18,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "ana jangirashvili",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 19,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "nika gabunia",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    },
    {
        "id": 20,
        "title": "shvidi blogi",
        "text": "lorem ipsum anksfbkasbfakhsBFASIJHBFVAISFBIAHF",
        "thumbnail": "",
        "author": "saba dolidze",
        "year": 2006,
        "rating": 3.3,
        "isClassic": false
    }
]


database.users =[
    {
        "id": 1,
        "fullName": "John Doe",
        "userName": "John",
        "email": "john@example.com",
        "password": "123456"
    },
    {
        "id": 2,
        "fullName": "Jane Smith",
        "userName": "Jane",
        "email": "jane@example.com",
        "password": "987654"
    },
    {
        "id": 3,
        "fullName": "Michael Johnson",
        "userName": "Michael",
        "email": "michael@example.com",
        "password": "567890"
    },
    {
        "id": 4,
        "fullName": "Emily Williams",
        "userName": "Emily",
        "email": "emily@example.com",
        "password": "345678"
    },
    {
        "id": 5,
        "fullName": "David Brown",
        "userName": "David",
        "email": "david@example.com",
        "password": "901234"
    },
    {
        "id": 6,
        "fullName": "Sarah Jones",
        "userName": "Sarah",
        "email": "sarah@example.com",
        "password": "456789"
    },
    {
        "id": 7,
        "fullName": "Christopher Garcia",
        "userName": "Christopher",
        "email": "christopher@example.com",
        "password": "234567"
    },
    {
        "id": 8,
        "fullName": "Jessica Martinez",
        "userName": "Jessica",
        "email": "jessica@example.com",
        "password": "789012"
    },
    {
        "id": 9,
        "fullName": "Matthew Hernandez",
        "userName": "Matthew",
        "email": "matthew@example.com",
        "password": "890123"
    },
    {
        "id": 10,
        "fullName": "Elizabeth Young",
        "userName": "Elizabeth",
        "email": "elizabeth@example.com",
        "password": "456789"
    },
    {
        "id": 11,
        "fullName": "Daniel Lee",
        "userName": "Daniel",
        "email": "daniel@example.com",
        "password": "123456"
    },
    {
        "id": 12,
        "fullName": "Ashley Lopez",
        "userName": "Ashley",
        "email": "ashley@example.com",
        "password": "901234"
    },
    {
        "id": 13,
        "fullName": "Joseph Gonzalez",
        "userName": "Joseph",
        "email": "joseph@example.com",
        "password": "789012"
    },
    {
        "id": 14,
        "fullName": "Jennifer Wilson",
        "userName": "Jennifer",
        "email": "jennifer@example.com",
        "password": "567890"
    },
    {
        "id": 15,
        "fullName": "Andrew Anderson",
        "userName": "Andrew",
        "email": "andrew@example.com",
        "password": "234567"
    },
    {
        "id": 16,
        "fullName": "Maria Thomas",
        "userName": "Maria",
        "email": "maria@example.com",
        "password": "890123"
    },
    {
        "id": 17,
        "fullName": "James Taylor",
        "userName": "James",
        "email": "james@example.com",
        "password": "456789"
    },
    {
        "id": 18,
        "fullName": "Jessica Moore",
        "userName": "Jessica",
        "email": "jessica2@example.com",
        "password": "901234"
    },
    {
        "id": 19,
        "fullName": "Robert Jackson",
        "userName": "Robert",
        "email": "robert@example.com",
        "password": "789012"
    },
    {
        "id": 20,
        "fullName": "Amanda White",
        "userName": "Amanda",
        "email": "amanda@example.com",
        "password": "123456"
    }
]






module.exports = database;