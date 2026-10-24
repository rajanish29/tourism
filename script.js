/* =====================================================
                    NAVIGATION MENU
===================================================== */

function toggleMenu() {

    const nav = document.getElementById("navLinks");

    nav.classList.toggle("active");
}


/* =====================================================
                 DESTINATION DATABASE
===================================================== */

const destinationData = {

    /* =================================================
                         PATNA
    ================================================= */

    "Patna": {

        image:
            "https://hindi.magadhatimes.com/wp-content/uploads/2023/11/famous-tourist-places-in-patna.jpg",

        description:
            "Patna is the capital of Bihar and one of the oldest continuously inhabited cities in the world. It is famous for history, museums, religious places and the Ganga River.",

        location:
            "Patna, Bihar, India",

        tourismContact:
            "+91-612-2217045",

        hotel:
            "Hotels available in Patna",

        hotelCharge:
            "Approx. ₹1,000 – ₹3,500 per night",

        van:
            "Tourist van / local cab",

        vanCharge:
            "Approx. ₹2,500 – ₹4,000 per day",

        places: [

            {
                name: "Golghar",
                image: "https://tse3.mm.bing.net/th/id/OIP.X0myZ75ulJOSHagqRu0pdAAAAA?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
                location: "Gandhi Maidan area, Patna",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Historic granary and one of the famous landmarks of Patna."
            },

            {
                name: "Gandhi Ghat",
                image: "https://th.bing.com/th/id/OIP.YoeGDJw3XYCk-oubhoE9ewHaEK?w=236&h=184&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                location: "Ganga River, Patna",
                entry: "Usually free",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Popular riverside location known for the Ganga Aarti."
            },

            {
                name: "Bihar Museum",
                image: "https://th.bing.com/th/id/OIP.T9QEDjDTUlApOPYtHgzLVwHaFA?w=233&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                location: "Bailey Road, Patna",
                entry: "Check current fee",
                guide: "Museum guide may be available",
                guideCharge: "Check current charge",
                description: "Modern museum showcasing Bihar's history, art and archaeological heritage."
            },

            {
                name: "Patna Museum",
                image: "https://images.unsplash.com/photo-1561214115-f2f134cc4912?auto=format&fit=crop&w=900&q=80",
                location: "Patna, Bihar",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Historic museum containing important archaeological and cultural collections."
            },

            {
                name: "Buddha Smriti Park",
                image: "https://thumbs.dreamstime.com/z/buddha-smriti-park-patna-bihar-buddha-smriti-park-also-known-as-buddha-memorial-park-urban-park-located-frazer-road-near-168780837.jpg",
                location: "Fraser Road, Patna",
                entry: "Check current fee",
                guide: "Guide available on request",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Peaceful Buddhist park near Patna Junction."
            },

            {
                name: "Takht Sri Patna Sahib",
                image: "https://takhatpatnasahib.in/en/assets/designer/themes/default/images/five-takhat-3.jpg",
                location: "Patna Sahib, Patna",
                entry: "Usually free",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Important Sikh pilgrimage site and birthplace of Guru Gobind Singh."
            },

            {
                name: "Mahavir Mandir",
                image: "https://th.bing.com/th/id/OIP.7Wlba9zIKSUg24kN3YLEwQHaFj?w=222&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                location: "Near Patna Junction",
                entry: "Usually free",
                guide: "Guide not generally required",
                guideCharge: "Not applicable",
                description: "One of the most visited Hindu temples in Patna."
            },

            {
                name: "Patna Zoo",
                image: "https://tse4.mm.bing.net/th/id/OIP.fcB-xMwYKki65FXyN1NN6QHaEK?r=0&rs=1&pid=ImgDetMain&o=7&rm=3",
                location: "Bailey Road, Patna",
                entry: "Check current fee",
                guide: "Guide available",
                guideCharge: "Check current charge",
                description: "Large zoological park with animals, birds and green spaces."
            },

            {
                name: "Eco Park",
                image: "https://i.ytimg.com/vi/s6pcsYkT80g/maxresdefault.jpg",
                location: "Patna, Bihar",
                entry: "Check current fee",
                guide: "Guide usually not required",
                guideCharge: "Not applicable",
                description: "Popular green recreational park in Patna."
            },

            {
                name: "Gandhi Maidan",
                image: "https://th.bing.com/th/id/OIP.xeEvI9S7PghmWfODmK7GIQHaEi?w=282&h=180&c=7&r=0&o=7&dpr=1.3&pid=1.7&rm=3",
                location: "Central Patna",
                entry: "Free",
                guide: "Guide usually not required",
                guideCharge: "Not applicable",
                description: "Large historic ground located in the heart of Patna."
            }

        ]
    },


    /* =================================================
                       BODH GAYA
    ================================================= */

    "Bodh Gaya": {

        image:
            "https://static2.tripoto.com/media/filter/tst/img/1820511/TripDocument/1577906167_mahabodhi_temple_3.jpeg",

        description:
            "Bodh Gaya is one of the world's most important Buddhist pilgrimage destinations and is associated with the enlightenment of Gautama Buddha.",

        location:
            "Bodh Gaya, Gaya, Bihar, India",

        tourismContact:
            "+91-612-2217045",

        hotel:
            "Hotels and guest houses available",

        hotelCharge:
            "Approx. ₹1,000 – ₹4,000 per night",

        van:
            "Tourist van / local cab",

        vanCharge:
            "Approx. ₹2,500 – ₹4,500 per day",

        places: [

            {
                name: "Mahabodhi Temple",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSLWgYllnNdHA6IsuDGA6Lkma6-inD7bsVxSYrJRvEKfg&s=10",
                location: "Bodh Gaya, Bihar",
                entry: "Usually no general entry fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "The most important Buddhist temple complex in Bodh Gaya."
            },

            {
                name: "Great Buddha Statue",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRqLrpLo8twtrh-Nw6byxnMiMzQE-6jsINfwaZ80hVUcw&s=10",
                location: "Bodh Gaya",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "A large Buddha statue and popular tourist attraction."
            },

            {
                name: "Thai Monastery",
                image: "https://www.shutterstock.com/shutterstock/photos/1179527731/display_1500/stock-photo-thailand-buddhist-temple-in-bodhgaya-city-india-1179527731.jpg",
                location: "Bodh Gaya",
                entry: "Usually free",
                guide: "Guide optional",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Beautiful Buddhist monastery with Thai architectural influence."
            },

            {
                name: "Japanese Temple",
                image: "https://dynamic-media-cdn.tripadvisor.com/media/photo-o/21/4f/82/4b/caption.jpg?w=1200&h=-1&s=1",
                location: "Bodh Gaya",
                entry: "Usually free",
                guide: "Guide optional",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Japanese Buddhist temple known for its peaceful surroundings."
            },

            {
                name: "Bodhi Tree",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBrQonT2WUCwmiL9idefmdmMJSgSOxj-ZvWv2v1Ni3bQ&s=10",
                location: "Mahabodhi Temple Complex",
                entry: "Included with temple visit",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Sacred tree associated with Buddha's enlightenment."
            }

        ]
    },


    /* =================================================
                         NALANDA
    ================================================= */

    "Nalanda": {

        image:
            "https://www.exploreourindia.com/backend/web/images/blog/5144_nalandauniversity.webp",

        description:
            "Nalanda is famous for the ancient Nalanda Mahavihara, one of the world's great ancient centers of learning.",

        location:
            "Nalanda, Bihar, India",

        tourismContact:
            "+91-612-2217045",

        hotel:
            "Tathagat Vihar / local hotels",

        hotelCharge:
            "Approx. ₹1,000 – ₹3,500 per night",

        van:
            "Tourist van / cab from Rajgir or Patna",

        vanCharge:
            "Approx. ₹2,500 – ₹4,000 per day",

        places: [

            {
                name: "Nalanda Mahavihara Ruins",
                image: "https://www.exploreourindia.com/backend/web/images/blog/5144_nalandauniversity.webp",
                location: "Nalanda, Bihar",
                entry: "₹30/person*",
                guide: "Local guide available",
                guideCharge: "Approx. ₹800 – ₹1,500/day",
                description: "Ancient university ruins and one of Bihar's most important archaeological sites."
            },

            {
                name: "Nalanda Archaeological Museum",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJchX_9ZbNL79EkR_jYQ-p7654xzSBUjRno6y-txbDTw&s=10",
                location: "Near Nalanda Ruins",
                entry: "Check current fee",
                guide: "Museum information available",
                guideCharge: "Check current charge",
                description: "Museum containing sculptures, coins and archaeological objects from Nalanda."
            },

            {
                name: "Xuanzang Memorial Hall",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVlZUG4aus2f2M-Wd4G1flPP9w-FWOSqqNOZs-PmSzLQ&s=10",
                location: "Nalanda",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Memorial associated with the Chinese Buddhist scholar Xuanzang."
            },

            {
                name: "Kundalpur",
                image: "https://media-cdn.tripadvisor.com/media/photo-s/21/d6/98/b2/kundal-pur-bade-baba.jpg",
                location: "Near Nalanda",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Important Jain religious destination near Nalanda."
            },

            {
                name: "Pawapuri Jal Mandir",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQcztZG-EeGl-NNDisLIhtuyAD7uRwWDkEOIoYq-FnznQ&s=10",
                location: "Pawapuri, Nalanda district",
                entry: "Usually free",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Beautiful Jain temple located in the middle of a water body."
            },

            {
                name: "Telhara Ancient University",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScwHwWVZ8johQI6lAGb8gIIoZ_CIZnTfVteuvntDa1nw&s=10",
                location: "Nalanda district",
                entry: "Check current fee",
                guide: "Local guide recommended",
                guideCharge: "Approx. ₹800 – ₹1,500/day",
                description: "Archaeological remains of an ancient educational center."
            },

            {
                name: "Vishwa Shanti Stupa",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQIfST751gOWmXXt7RmSq47KBXiSW2imDggIKCraazISA&s=10",
                location: "Rajgir, Nalanda district",
                entry: "₹10/person*",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Peace Pagoda located on Ratnagiri Hill in Rajgir."
            }

        ]
    },


    /* =================================================
                         RAJGIR
    ================================================= */

    "Rajgir": {

        image:
            "https://t3.ftcdn.net/jpg/00/86/33/28/360_F_86332883_ZXujI7IQL8PtKEBILcFrJilWHSIjAWIa.jpg",

        description:
            "Rajgir is a historic city surrounded by hills and associated with Buddhism, Jainism and ancient Indian history.",

        location:
            "Rajgir, Nalanda, Bihar, India",

        tourismContact:
            "+91-612-2217045",

        hotel:
            "Hotels and tourist accommodations in Rajgir",

        hotelCharge:
            "Approx. ₹1,200 – ₹4,000 per night",

        van:
            "Tourist van / local cab",

        vanCharge:
            "Approx. ₹2,500 – ₹4,000 per day",

        places: [

            {
                name: "Vishwa Shanti Stupa",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT4-TJJjEVPZieeIy9vorLv8CvZc9jX2dEkqDjwsd0pow&s=10",
                location: "Ratnagiri Hill, Rajgir",
                entry: "₹10/person*",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Beautiful Peace Pagoda located on a hilltop."
            },

            {
                name: "Rajgir Ropeway",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXH90g4YJYNEcvqk4gdgoRj-fSCbzuM9UjAbeZUeEAgg&s=10",
                location: "Rajgir",
                entry: "Check current ticket",
                guide: "Guide not generally required",
                guideCharge: "Not applicable",
                description: "Ropeway providing access towards the hilltop area and Peace Pagoda."
            },

            {
                name: "Griddhakuta Hill",
                image: "https://st4.depositphotos.com/1868209/23994/i/1600/depositphotos_239940960-stock-photo-gandhakuti-buddha-hut-griddhakuta-hill.jpg",
                location: "Rajgir hills",
                entry: "Check current fee",
                guide: "Local guide recommended",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Historic hill associated with Buddha and Buddhist teachings."
            },

            {
                name: "Venu Vana",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSj43saFtDmFW2mRczhZIzTPeljcFuIG3zRG6s48Yr8bw&s=10",
                location: "Rajgir",
                entry: "Check current fee",
                guide: "Guide optional",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Peaceful park associated with the Buddha's stay at Rajgir."
            },

            {
                name: "Brahmakund",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXBYFuG_mXNL4NFWgklano-Ki4cw3rJMcqIJm6arUMyQ&s=10",
                location: "Rajgir",
                entry: "Usually free",
                guide: "Guide optional",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Historic hot spring area visited by pilgrims and tourists."
            },

            {
                name: "Ghora Katora Lake",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRA28GKmPISo3wFnjOmwjAerUM2C1-8rJLeOWI2IKmcYg&s=10",
                location: "Near Rajgir",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Scenic natural lake surrounded by hills."
            },

            {
                name: "Rajgir Nature Safari",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSbOBRbVGMwSuF6OYnxdqyfqezrfQdZ9pdZv31qeE3iA&s=10",
                location: "Rajgir",
                entry: "Check current ticket",
                guide: "Safari staff / guide",
                guideCharge: "Included or check current charge",
                description: "Adventure and nature attraction offering wildlife and forest experiences."
            },

            {
                name: "Jarasandha's Akhara",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS02MJERVAQ76ToJaasHurZeaqRG-VWrQ1YaQ3XUXLn7w&s=10",
                location: "Rajgir",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Historic site associated with the legendary figure Jarasandha."
            }

        ]
    },


    /* =================================================
                        VAISHALI
    ================================================= */

    "Vaishali": {

        image:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGbQhPLJV6Zjc5juhzHvSgsQn0sE_y3IQVNz22TR7n0CTyQTc76TIZEqrV&s=10",

        description:
            "Vaishali is an ancient historical city with important connections to Buddhism, Jainism and the early republican tradition of India.",

        location:
            "Vaishali, Bihar, India",

        tourismContact:
            "+91-612-2217045",

        hotel:
            "Local hotels and tourist accommodations",

        hotelCharge:
            "Approx. ₹1,000 – ₹3,000 per night",

        van:
            "Tourist van / local cab",

        vanCharge:
            "Approx. ₹2,500 – ₹4,000 per day",

        places: [

            {
                name: "Ashokan Pillar",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROefmxyc9rc8l30IhA3GDDJrl0eG668Xi8nb1ru1l1Bg&s=10",
                location: "Kolhua, Vaishali",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Historic Ashokan pillar at the ancient site of Vaishali."
            },

            {
                name: "Buddha Stupa",
                image: "https://www.google.com/imgres?q=Buddha%20Stupa%20vaishali&imgurl=https%3A%2F%2Flookaside.instagram.com%2Fseo%2Fgoogle_widget%2Fcrawler%2F%3Fmedia_id%3D3685217102501577555&imgrefurl=https%3A%2F%2Fwww.instagram.com%2Fp%2FDMkhXD6zxau%2F&docid=HDL-1gx_pFNLyM&tbnid=mPi1F9g5vzVL4M&vet=12ahUKEwiAppek2emWAxVIUWwGHRwwK6sQnPAOegQIYBAA..i&w=1440&h=1800&hcb=2&ved=2ahUKEwiAppek2emWAxVIUWwGHRwwK6sQnPAOegQIYBAA",
                location: "Vaishali",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Important Buddhist archaeological site."
            },

            {
                name: "Vaishali Archaeological Site",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGasKkgJpoipMNXrGwMAVKz4s5EITZJnc7txMuWNeBOw&s=10",
                location: "Vaishali",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Archaeological remains showing the historical importance of ancient Vaishali."
            },

            {
                name: "Abhishek Pushkarini",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZyFD6mhYLZJquQSRaVRJmW2jaqcQddzuWRSN_D2NiaA&s=10",
                location: "Vaishali",
                entry: "Usually free",
                guide: "Guide optional",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Ancient ceremonial water tank associated with Vaishali."
            },

            {
                name: "Raja Vishal Ka Garh",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ1u_YYCdMwItjrySszxAYq-9CjCBryAiM-JCIS3kOqw&s=10",
                location: "Vaishali",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Ancient archaeological mound associated with Vaishali's history."
            },

            {
                name: "Kutagarasala Vihara",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3IMrsvhdBlZq5EuyoqO0dO6vT4HrMdYkMrxQb3LzuiQ&s=10",
                location: "Vaishali",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Important Buddhist heritage location in Vaishali."
            }

        ]
    },


    /* =================================================
                     VALMIKI NAGAR
    ================================================= */

    "Valmiki Nagar": {

        image:
            "https://d26dp53kz39178.cloudfront.net/media/uploads/Travel_Guide_Images/Top_15_Activities_in_Valmiki_Nagar_Tiger_Reserve_for_a_Fun__KDULh2S.webp",

        description:
            "Valmiki Nagar is a beautiful natural destination in north-western Bihar known for forests, wildlife, the Gandak River and Valmiki Tiger Reserve.",

        location:
            "Valmiki Nagar, West Champaran, Bihar, India",

        tourismContact:
            "+91-612-2217045",

        hotel:
            "Forest accommodation / local hotels",

        hotelCharge:
            "Approx. ₹1,500 – ₹4,500 per night",

        van:
            "Tourist van / safari vehicle",

        vanCharge:
            "Approx. ₹3,000 – ₹5,000 per day",

        places: [

            {
                name: "Valmiki Tiger Reserve",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_JqX0cLaT8kP0M8s9A3errnbKxdubjEUsr1Ak8ZnIbA&s=10",
                location: "West Champaran, Bihar",
                entry: "Check current safari fee",
                guide: "Safari guide required/available",
                guideCharge: "Check current charge",
                description: "Bihar's major tiger reserve and an important wildlife destination."
            },

            {
                name: "Gandak Barrage",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPC4h05UO_t3EA_kPsMPlc75qB6IYVotDtIBaQhvdAg&s=10",
                location: "Valmiki Nagar",
                entry: "Usually free",
                guide: "Guide optional",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Large barrage on the Gandak River with scenic surroundings."
            },

            {
                name: "Triveni Sangam",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9MqnV5CHSQVEZ_aISRBvSXUSeEsVHCuf69vFwjEZA0Q&s=10",
                location: "Near Valmiki Nagar",
                entry: "Usually free",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Scenic confluence area near the Bihar-Nepal region."
            },

            {
                name: "Valmiki Ashram",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQoNOd9m7VLrFkJQOOpvUpHWQ6hl9zSSbv9_AJiB03i3w&s=10",
                location: "Valmiki Nagar region",
                entry: "Check current fee",
                guide: "Local guide available",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Religious and historical site associated with Maharishi Valmiki."
            },

            {
                name: "Someshwar Hills",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRhPsMpuFFSdbPK8WqimEHvGS-CJJHvVC8dLuIGjz7cw&s=10",
                location: "West Champaran",
                entry: "Check current access",
                guide: "Local guide recommended",
                guideCharge: "Approx. ₹800 – ₹1,500/day",
                description: "Beautiful hilly region with forests and natural scenery."
            },

            {
                name: "Gandak River",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpLZgSGi0y2VS-tsY-inbfIHTsmL-CdQH9LvZhS2clVg&s=10",
                location: "Valmiki Nagar",
                entry: "Free",
                guide: "Guide optional",
                guideCharge: "Approx. ₹500 – ₹1,000/day",
                description: "Major river flowing through the scenic Valmiki Nagar region."
            },

            {
                name: "Jungle Safari",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOqlXlJIi098f4wzrN9wOTAsewJalduPDDDs9sAFaoZA&s=10",
                location: "Valmiki Tiger Reserve",
                entry: "Check current safari fee",
                guide: "Safari guide provided",
                guideCharge: "Check current charge",
                description: "Wildlife safari experience through the forest landscape."
            },

            {
                name: "Gandak Riverfront",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSkPC4h05UO_t3EA_kPsMPlc75qB6IYVotDtIBaQhvdAg&s=10",
                location: "Valmiki Nagar",
                entry: "Free",
                guide: "Guide usually not required",
                guideCharge: "Not applicable",
                description: "Relaxing scenic area beside the Gandak River."
            }

        ]
    }

};


/* =====================================================
              OPEN DESTINATION DETAILS
===================================================== */

function openDestination(destinationName) {

    const destination = destinationData[destinationName];

    if (!destination) {
        alert("Destination information not found.");
        return;
    }


    /* Get elements */

    const modal =
        document.getElementById("destinationModal");

    const title =
        document.getElementById("destinationTitle");

    const description =
        document.getElementById("destinationDescription");

    const mainImage =
        document.getElementById("destinationMainImage");

    const location =
        document.getElementById("destinationLocation");

    const contact =
        document.getElementById("destinationContact");

    const hotel =
        document.getElementById("destinationHotels");

    const transport =
        document.getElementById("destinationTransport");

    const placesGrid =
        document.getElementById("placesGrid");


    /* Fill destination information */

    title.textContent = destinationName;

    description.textContent =
        destination.description;

    mainImage.src =
        destination.image;

    location.textContent =
        destination.location;

    contact.textContent =
        destination.tourismContact;

    hotel.innerHTML =
        destination.hotel +
        "<br>" +
        destination.hotelCharge;

    transport.innerHTML =
        destination.van +
        "<br>" +
        destination.vanCharge;


    /* Clear old places */

    placesGrid.innerHTML = "";


    /* Create place cards */

    destination.places.forEach(function (place) {

        const card =
            document.createElement("div");

        card.className =
            "place-detail-card";


        card.innerHTML = `

            <img
                src="${place.image}"
                alt="${place.name}"
                onerror="this.src='${destination.image}'"
            >

            <div class="place-detail-content">

                <h3>
                    ${place.name}
                </h3>

                <p class="place-description">
                    ${place.description}
                </p>


                <div class="detail-row">

                    <strong>📍 Location:</strong>

                    <span>
                        ${place.location}
                    </span>

                </div>


                <div class="detail-row">

                    <strong>🎟️ Entry:</strong>

                    <span>
                        ${place.entry}
                    </span>

                </div>


                <div class="detail-row">

                    <strong>👨‍🏫 Guide:</strong>

                    <span>
                        ${place.guide}
                    </span>

                </div>


                <div class="detail-row">

                    <strong>💰 Guide Charge:</strong>

                    <span>
                        ${place.guideCharge}
                    </span>

                </div>

            </div>
        `;


        placesGrid.appendChild(card);

    });


    /* Show modal */

    modal.classList.add("show");

    document.body.style.overflow = "hidden";
}


/* =====================================================
                 CLOSE DESTINATION
===================================================== */

function closeDestination() {

    const modal =
        document.getElementById("destinationModal");

    modal.classList.remove("show");

    document.body.style.overflow = "auto";
}


/* =====================================================
                     SEARCH
===================================================== */

function searchPlaces() {

    const input =
        document
            .getElementById("searchInput")
            .value
            .toLowerCase()
            .trim();


    const cards =
        document.querySelectorAll(
            ".destination-card"
        );


    let found = false;


    cards.forEach(function (card) {

        const name =
            card
                .querySelector("h3")
                .textContent
                .toLowerCase();


        const description =
            card
                .querySelector("p")
                .textContent
                .toLowerCase();


        if (
            name.includes(input) ||
            description.includes(input)
        ) {

            card.style.display = "";

            found = true;

        } else {

            card.style.display = "none";

        }

    });


    const noResult =
        document.getElementById("noResult");


    if (found) {

        noResult.style.display = "none";

    } else {

        noResult.style.display = "block";

    }

}


/* =====================================================
                  CONTACT FORM
===================================================== */

function submitForm(event) {

    event.preventDefault();


    const name =
        document.getElementById("name").value;

    const place =
        document.getElementById("place").value;


    alert(
        "Thank you " +
        name +
        "!\n\nYour travel enquiry for " +
        place +
        " has been submitted."
    );


    document
        .getElementById("contactForm")
        .reset();

}


/* =====================================================
             CLOSE MODAL BY CLICKING OUTSIDE
===================================================== */

window.addEventListener("click", function (event) {

    const modal =
        document.getElementById("destinationModal");


    if (event.target === modal) {

        closeDestination();

    }

});


/* =====================================================
                     ESC KEY
===================================================== */

document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeDestination();

    }

});


/* =====================================================
              CLOSE MOBILE MENU AFTER CLICK
===================================================== */

document.querySelectorAll(".nav-links a")
    .forEach(function (link) {

        link.addEventListener("click", function () {

            document
                .getElementById("navLinks")
                .classList.remove("active");

        });

    });