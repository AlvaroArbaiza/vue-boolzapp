/*
Consegna: Boolzap
Milestone 1:
    - Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
    - Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto
*/

const { createApp } = Vue

createApp({
    data() {
        return { 
            emoBool: false,
            emoIndex: 0,
            optNum: 0,
            boolean: true,
            dt: luxon.DateTime,
            orario: "",
            indice: 0,
            filtraggio: "",
            contacts: [
                {
                    name: 'Michele',
                    avatar: 'img/avatar_1.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Hai portato a spasso il cane?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Ricordati di stendere i panni',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 16:15:22',
                            message: 'Tutto fatto!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Fabio',
                    avatar: 'img/avatar_2.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '20/03/2020 16:30:00',
                            message: 'Ciao come stai?',
                            status: 'sent'
                        },
                        {
                            date: '20/03/2020 16:30:55',
                            message: 'Bene grazie! Stasera ci vediamo?',
                            status: 'received'
                        },
                        {
                            date: '20/03/2020 16:35:00',
                            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Samuele',
                    avatar: 'img/avatar_3.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '28/03/2020 10:10:40',
                            message: 'La Marianna va in campagna',
                            status: 'received'
                        },
                        {
                            date: '28/03/2020 10:20:10',
                            message: 'Sicuro di non aver sbagliato chat?',
                            status: 'sent'
                        },
                        {
                            date: '28/03/2020 16:15:22',
                            message: 'Ah scusa!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro B.',
                    avatar: 'img/avatar_4.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Lo sai che ha aperto una nuova pizzeria?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Si, ma preferirei andare al cinema',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Alessandro L.',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ricordati di chiamare la nonna',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Va bene, stasera la sento',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Claudia',
                    avatar: 'img/avatar_5.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao Claudia, hai novità?',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Non ancora',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'Nessuna nuova, buona nuova',
                            status: 'sent'
                        }
                    ],
                },
                {
                    name: 'Federico',
                    avatar: 'img/avatar_7.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Fai gli auguri a Martina che è il suo compleanno!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'Grazie per avermelo ricordato, le scrivo subito!',
                            status: 'received'
                        }
                    ],
                },
                {
                    name: 'Davide',
                    avatar: 'img/avatar_8.jpg',
                    visible: true,
                    messages: [
                        {
                            date: '10/01/2020 15:30:55',
                            message: 'Ciao, andiamo a mangiare la pizza stasera?',
                            status: 'received'
                        },
                        {
                            date: '10/01/2020 15:50:00',
                            message: 'No, l\'ho già mangiata ieri, ordiniamo sushi!',
                            status: 'sent'
                        },
                        {
                            date: '10/01/2020 15:51:00',
                            message: 'OK!!',
                            status: 'received'
                        }
                    ],
                }
            ],
            emojis: [
                {
                    id: 'recenti',
                    classes: 'fa-regular fa-clock',
                    name: 'Recenti',
                    emos: [

                    ]
                },
                {
                    id: 'fac-pers',
                    classes: 'fa-regular fa-face-laugh',
                    name: 'Faccine e Persone',
                    emos: [
                        "em em-smiley",
                        "em em-blush",
                        "em em-heart_eyes_cat",
                        "em em-relaxed",
                        "em em-smirk_cat",
                        "em em-face_with_hand_over_mouth",
                        "em em-innocent",
                        "em em-slightly_smiling_face",
                        "em em-smiley_cat",
                        "em em-sunglasses",
                        "em em-grin",
                        "em em-kissing_smiling_eyes",
                        "em em-smile",
                        "em em-smiling_face_with_3_hearts",
                        "em em-sweat_smile",
                        "em em-heart_eyes",
                        "em em-laughing",
                        "em em-smile_cat",
                        "em em-smiling_imp",
                        "em em-angry",
                        "em em-anguished",
                        "em em-angel",
                        "em em-astonished",
                        "em em-baby",
                        "em em-blond-haired-man",
                        "em em-blond-haired-woman",
                        "em em-bow",
                        "em em-boy",
                        "em em-breast-feeding",
                        "em em-bride_with_veil",
                        "em em-clown_face",
                        "em em-child",                        
                        "em em-confounded",
                        "em em-confused",                        
                        "em em-construction_worker",
                        "em em-cop",                        
                        "em em-couple",
                        "em em-cold_face",                        
                        "em em-cold_sweat",
                        "em em-couple_with_heart",                        
                        "em em-couplekiss",
                        "em em-cry",                        
                        "em em-crying_cat_face",
                        "em em-dancer",                        
                        "em em-dancers",
                        "em em-disappointed",
                        "em em-disappointed_relieved",
                        "em em-dizzy_face",
                        "em em-drooling_face",                        
                        "em em-elf",
                        "em em-exploding_head",                        
                        "em em-couple",
                        "em em-expressionless",                        
                        "em em-face_palm",
                        "em em-face_vomiting",                        
                        "em em-face_with_cowboy_hat",
                        "em em-face_with_hand_over_mouth",                        
                        "em em-face_with_head_bandage",
                        "em em-face_with_monocle",                        
                        "em em-face_with_raised_eyebrow",
                        "em em-face_with_rolling_eyes",
                        "em em-face_with_symbols_on_mouth",                        
                        "em em-face_with_thermometer",
                        "em em-facepunch",                        
                        "em em-fairy",
                        "em em-family",                        
                        "em em-fearful",
                        "em em-female-artist",                        
                        "em em-female-astronaut",
                        "em em-female-construction-worker",                   
                        "em em-female-cook",
                        "em em-female-detective",                        
                        "em em-female-doctor",
                        "em em-female-factory-worker",                        
                        "em em-female-farmer",
                        "em em-female-firefighter",
                        "em em-female-guard",                        
                        "em em-female-judge",                        
                        "em em-female-mechanic",
                        "em em-female-office-worker",                        
                        "em em-female-pilot",
                        "em em-female-police-officer",                        
                        "em em-female-scientist",
                        "em em-female-singer",                        
                        "em em-female-student",
                        "em em-female-teacher",
                        "em em-female-technologist",
                        "em em-female_bald",                        
                        "em em-female_curly_haired",
                        "em em-female_elf",                        
                        "em em-female_fairy",
                        "em em-female_genie",                        
                        "em em-female_mage",
                        "em em-female_red_haired",                        
                        "em em-female_superhero",
                        "em em-female_supervillain",
                        "em em-female_vampire",                        
                        "em em-female_white_haired",                        
                        "em em-female_zombie",
                        "em em-fencer",                        
                        "em em-flushed",
                        "em em-frowning",                        
                        "em em-full_moon_with_face",
                        "em em-genie",                        
                        "em em-ghost",
                        "em em-girl",
                        "em em-golfer",                        
                        "em em-grimacing",                        
                        "em em-grin",
                        "em em-grinning",                        
                        "em em-guardsman",
                        "em em-haircut",                        
                        "em em-handball",
                        "em em-handshake",                        
                        "em em-hankey",
                        "em em-hear_no_evil",
                        "em em-heart_eyes",
                        "em em-heart_eyes_cat",                        
                        "em em-hugging_face",
                        "em em-hushed",                        
                        "em em-i_love_you_hand_sign",
                        "em em-imp",                        
                        "em em-information_desk_person",
                        "em em-innocent",                        
                        "em em-japanese_ogre",
                        "em em-joy",
                        "em em-joy_cat",
                        "em em-juggling",                        
                        "em em-kissing",
                        "em em-kiss",                        
                        "em em-kissing_cat",
                        "em em-kissing_closed_eyes",                    
                        "em em-kissing_heart",
                        "em em-kissing_smiling_eyes",                        
                        "em em-lips",
                        "em em-lying_face",
                        "em em-male-artist",
                        "em em-male-astronaut",                        
                        "em em-male-construction-worker",
                        "em em-male-cook",                        
                        "em em-male-detective",
                        "em em-male-doctor",                        
                        "em em-male-factory-worker",
                        "em em-male-farmer",                        
                        "em em-male-firefighter",
                        "em em-male-guard",
                        "em em-male-judge",
                        "em em-male-mechanic",                        
                        "em em-male-office-worker",
                        "em em-male-pilot",                        
                        "em em-male-police-officer",
                        "em em-male-scientist",                        
                        "em em-male-singer",
                        "em em-male-student",                        
                        "em em-male-teacher",
                        "em em-male-technologist",
                        "em em-male_bald",
                        "em em-male_curly_haired",                        
                        "em em-male_elf",
                        "em em-male_fairy",                        
                        "em em-male_genie",
                        "em em-male_mage",                        
                        "em em-male_red_haired",
                        "em em-male_superhero",                        
                        "em em-male_supervillain",
                        "em em-male_vampire",
                        "em em-male_white_haired",                        
                        "em em-male_zombie",                        
                        "em em-man",
                        "em em-man-biking",                        
                        "em em-man-bouncing-ball",
                        "em em-man-bowing",                        
                        "em em-man-boy",
                        "em em-man-boy-boy",                        
                        "em em-man-cartwheeling",
                        "em em-man-facepalming",
                        "em em-man-frowning",
                        "em em-man-gesturing-no",                        
                        "em em-man-gesturing-ok",
                        "em em-man-getting-haircut",                        
                        "em em-man-getting-massage",
                        "em em-man-girl",                        
                        "em em-man-girl-boy",
                        "em em-man-girl-girl",                        
                        "em em-man-golfing",
                        "em em-man-heart-man",
                        "em em-man-juggling",
                        "em em-man-kiss-man",                        
                        "em em-man-lifting-weights",
                        "em em-man-man-boy",                        
                        "em em-man-man-boy-boy",
                        "em em-man-man-girl",                        
                        "em em-man-man-girl-boy",
                        "em em-man-man-girl-girl",                        
                        "em em-man-mountain-biking",
                        "em em-man-playing-handball",
                        "em em-man-playing-water-polo",                       
                        "em em-man-raising-hand",
                        "em em-man-rowing-boat",                        
                        "em em-man-running",
                        "em em-man-shrugging",                        
                        "em em-man-surfing",
                        "em em-man-swimming",                        
                        "em em-man-tipping-hand",
                        "em em-man-wearing-turban",
                        "em em-man-bowing",                        
                        "em em-man-boy",
                        "em em-man-boy-boy",                        
                        "em em-man-cartwheeling",
                        "em em-man-facepalming",
                        "em em-man-frowning",
                        "em em-man-gesturing-no",                        
                        "em em-man-gesturing-ok",
                        "em em-man-getting-haircut",                        
                        "em em-man-getting-massage",
                        "em em-man-girl",                        
                        "em em-man-girl-boy",
                        "em em-man-girl-girl",                        
                        "em em-man-golfing",
                        "em em-man-heart-man",
                        "em em-man-juggling",
                        "em em-man-kiss-man",                        
                        "em em-man-lifting-weights",
                        "em em-man-man-boy",                        
                        "em em-man-man-boy-boy",
                        "em em-man-man-girl",                        
                        "em em-man-man-girl-boy",
                        "em em-man-man-girl-girl",           
                        "em em-man-playing-handball",
                        "em em-man-playing-water-polo",
                        "em em-man-pouting",                       
                        "em em-man-rowing-boat",                        
                        "em em-man-running",
                        "em em-man-shrugging",                        
                        "em em-man-surfing",
                        "em em-man-swimming",                        
                        "em em-man-tipping-hand",
                        "em em-man-walking",
                        "em em-man-wearing-turban",
                        "em em-man-with-bunny-ears-partying",                        
                        "em em-man-woman-boy",
                        "em em-man-woman-boy-boy",                        
                        "em em-man-woman-girl",
                        "em em-man-woman-girl-boy",
                        "em em-man-woman-girl-girl",
                        "em em-man-wrestling",                        
                        "em em-man_climbing",
                        "em em-man_dancing",                        
                        "em em-man_in_business_suit_levitating",
                        "em em-man_in_lotus_position",                        
                        "em em-man_in_steamy_room",
                        "em em-man_in_tuxedo",                        
                        "em em-man_with_gua_pi_mao",
                        "em em-man_with_turban",
                        "em em-mask",
                        "em em-massage",                        
                        "em em-mermaid",
                        "em em-merperson",                        
                        "em em-money_mouth_face",
                        "em em-mrs_claus",                        
                        "em em-muscle",
                        "em em-nauseated_face",                        
                        "em em-nerd_face",
                        "em em-neutral_face",
                        "em em-no_good",
                        "em em-no_mouth",                        
                        "em em-nose",
                        "em em-merman",                        
                        "em em-middle_finger",
                        "em em-mountain_bicyclist",                        
                        "em em-ok_hand",
                        "em em-ok_woman",                        
                        "em em-older_adult",
                        "em em-older_man",
                        "em em-older_woman",
                    ]
                },
                {
                    id: 'anim-natura',
                    classes: 'fa-solid fa-dog',
                    name: 'Animali e Natura',
                    emos: [
                        "em em-bear",
                        "em em-bird",
                        "em em-bug",
                        "em em-butterfly",
                        "em em-cat",
                        "em em-chicken",
                        "em em-cow",
                        "em em-crocodile",
                        "em em-dog",
                        "em em-dolphin",
                        "em em-eagle",
                        "em em-elephant",
                        "em em-fish",
                        "em em-fox_face",
                        "em em-frog",
                        "em em-goat",
                        "em em-hamster",
                        "em em-hatched_chick",
                        "em em-hedgehog",
                        "em em-honeybee",
                        "em em-horse",
                        "em em-kangaroo",
                        "em em-koala",
                        "em em-leopard",
                        "em em-lion_face",
                        "em em-monkey",
                        "em em-mouse",
                        "em em-octopus",
                        "em em-owl",
                        "em em-panda_face",
                        "em em-penguin",
                        "em em-pig",
                        "em em-pig_nose",
                        "em em-rabbit",
                        "em em-raccoon",
                        "em em-shark",
                        "em em-sheep",
                        "em em-snail",
                        "em em-snake",
                        "em em-spider",
                        "em em-tiger",
                        "em em-turkey",
                        "em em-turtle",
                        "em em-whale",
                        "em em-wolf",
                        "em em-blossom",
                        "em em-cherry_blossom",
                        "em em-cloud",
                        "em em-droplet",
                        "em em-earth_africa",
                        "em em-earth_americas",
                        "em em-earth_asia",
                        "em em-fire",
                        "em em-fireworks",
                        "em em-fog",
                        "em em-full_moon",
                        "em em-full_moon_with_face",
                        "em em-globe_with_meridians",
                        "em em-high_brightness",
                        "em em-icecream",
                        "em em-leaves",
                        "em em-moon",
                        "em em-mountain",
                        "em em-new_moon",
                        "em em-new_moon_with_face",
                        "em em-ocean",
                        "em em-partly_sunny",
                        "em em-rainbow",
                        "em em-star",
                        "em em-star2",
                        "em em-sun_with_face",
                        "em em-sunflower",
                        "em em-sunny",
                        "em em-christmas_tree",
                        "em em-deciduous_tree",
                        "em em-evergreen_tree",
                        "em em-christmas_tree",
                        "em em-palm_tree",
                        "em em-tanabata_tree",
                        "em em-tulip"
                    ]
                },
                {
                    id: 'cibo-bevande',
                    classes: 'fa-solid fa-utensils',
                    name: 'Cibo e Bevande',
                    emos: [
                        "em em-bread",
                        "em em-hamburger",
                        "em em-cheese_wedge",
                        "em em-cherries",
                        "em em-coconut",
                        "em em-coffee",
                        "em em-corn",
                        "em em-croissant",
                        "em em-cupcake",
                        "em em-cut_of_meat",
                        "em em-doughnut",
                        "em em-egg",
                        "em em-eggplant",
                        "em em-fish_cake",
                        "em em-fried_egg",
                        "em em-grapes",
                        "em em-green_apple",
                        "em em-honey_pot",
                        "em em-ice_cream",
                        "em em-lollipop",
                        "em em-meat_on_bone",
                        "em em-pie",
                        "em em-pizza",
                        "em em-ramen",
                        "em em-shallow_pan_of_food",
                        "em em-shaved_ice",
                        "em em-shrimp",
                        "em em-stew",
                        "em em-tangerine",
                        "em em-tea",
                        "em em-tomato",
                        "em em-watermelon",
                        "em em-beer",
                        "em em-beers",
                        "em em-baby_bottle",
                        "em em-champagne",
                        "em em-sake",
                        "em em-wine_glass",
                        "em em-cooking",
                        "em em-cup_with_straw",
                        "em em-fries",
                        "em em-fried_shrimp",
                        "em em-hotdog",
                        "em em-pancakes",
                        "em em-popcorn",
                        "em em-poultry_leg",
                        "em em-sushi",
                        "em em-taco"
                    ]
                },
                {
                    id: 'attivita',
                    classes: 'fa-regular fa-futbol',
                    name: 'Attivit\u00E0',
                    emos: [
                        "em em-8ball",
                        "em em-badminton_racquet_and_shuttlecock",
                        "em em-baseball",
                        "em em-basketball",
                        "em em-bowling",
                        "em em-boxing_glove",
                        "em em-chess_pawn",
                        "em em-cricket_bat_and_ball",
                        "em em-dart",
                        "em em-fishing_pole_and_fish",
                        "em em-football",
                        "em em-golf",
                        "em em-field_hockey_stick_and_ball",
                        "em em-ice_hockey_stick_and_puck",
                        "em em-ice_skate",
                        "em em-lacrosse",
                        "em em-martial_arts_uniform",
                        "em em-racing_car",
                        "em em-ski",
                        "em em-sled",
                        "em em-snowboarder",
                        "em em-soccer",
                        "em em-surfer",
                        "em em-table_tennis_paddle_and_ball",
                        "em em-tennis",
                        "em em-trophy"
                    ]
                },
                {
                    id: 'vggi-lghi',
                    classes: 'fa-solid fa-car',
                    name: 'Viaggi e Luoghi',
                    emos: [
                        "em em-airplane",
                        "em em-airplane_arriving",
                        "em em-airplane_departure",
                        "em em-ambulance",
                        "em em-bike",
                        "em em-boat",
                        "em em-bus",
                        "em em-ship",
                        "em em-passenger_ship",
                        "em em-helicopter",
                        "em em-motor_scooter",
                        "em em-mountain_bicyclist",
                        "em em-oncoming_automobile",
                        "em em-oncoming_bus",
                        "em em-oncoming_police_car",
                        "em em-oncoming_taxi",
                        "em em-police_car",
                        "em em-racing_car",
                        "em em-rocket",
                        "em em-sailboat",
                        "em em-scooter",
                        "em em-steam_locomotive",
                        "em em-taxi",
                        "em em-tractor",
                        "em em-traffic_light",
                        "em em-train",
                        "em em-tram",
                        "em em-trolleybus",
                        "em em-world_map",
                        "em em-anchor",
                        "em em-building_construction",
                        "em em-cinema",
                        "em em-cityscape",
                        "em em-derelict_house_building",
                        "em em-european_castle",
                        "em em-factory",
                        "em em-fireworks",
                        "em em-fountain",
                        "em em-house",
                        "em em-japanese_castle",
                        "em em-mosque",
                        "em em-mount_fuji",
                        "em em-mountain",
                        "em em-national_park",
                        "em em-office",
                        "em em-post_office",
                        "em em-roller_coaster",
                        "em em-railway_car",
                        "em em-shinto_shrine",
                        "em em-stadium",
                        "em em-statue_of_liberty",
                        "em em-sunrise",
                        "em em-sunrise_over_mountains",
                        "em em-suspension_railway",
                        "em em-tent",
                        "em em-tokyo_tower",
                        "em em-wedding"
                    ]
                },
                {
                    id: 'oggetti',
                    classes: 'fa-regular fa-lightbulb',
                    name: 'Oggetti',
                    emos: [
                        "em em-bellhop_bell",
                        "em em-camera",
                        "em em-candle",
                        "em em-coffin",
                        "em em-compression",
                        "em em-couch_and_lamp",
                        "em em-frame_with_picture",
                        "em em-gear",
                        "em em-gift",
                        "em em-joystick",
                        "em em-key",
                        "em em-keyboard",
                        "em em-luggage",
                        "em em-movie_camera",
                        "em em-musical_score",
                        "em em-old_key",
                        "em em-paperclip",
                        "em em-pencil2",
                        "em em-phone",
                        "em em-reminder_ribbon",
                        "em em-satellite",
                        "em em-shopping_bags",
                        "em em-shopping_trolley",
                        "em em-spiral_note_pad",
                        "em em-spiral_calendar_pad",
                        "em em-studio_microphone",
                        "em em-tv",
                        "em em-video_camera",
                        "em em-battery",
                        "em em-black_large_square",
                        "em em-black_medium_small_square",
                        "em em-black_medium_square",
                        "em em-black_small_square",
                        "em em-cd",
                        "em em-computer",
                        "em em-desktop_computer",
                        "em em-floppy_disk",
                        "em em-headphones",
                        "em em-iphone",
                        "em em-minidisc",
                        "em em-mobile_phone_off",
                        "em em-mouse",
                        "em em-phone",
                        "em em-printer",
                        "em em-radio",
                        "em em-three_button_mouse" ,
                        "em em-tv",
                        "em em-vhs",
                        "em em-video_camera",
                        "em em-video_game",
                        "em em-mailbox",
                        "em em-mailbox_closed",
                        "em em-mailbox_with_mail",
                        "em em-mailbox_with_no_mail",
                        "em em-watch",
                        "em em-hammer",
                        "em em-jigsaw",     
                        "em em-toolbox",
                        "em em-wrench",                        
                    ]
                },
                {
                    id: 'simboli',
                    classes: 'fa-solid fa-hashtag',
                    name: 'Simboli',
                    emos: [
                        "em em-atom_symbol",
                        "em em-biohazard_sign",
                        "em em-butterfly",
                        "em em-capital_abcd",
                        "em em-cl",
                        "em em-eject",
                        "em em-fleur_de_lis",
                        "em em-gemini",
                        "em em-ideograph_advantage",
                        "em em-infinity",
                        "em em-keycap_ten",
                        "em em-om_symbol",
                        "em em-ophiuchus",
                        "em em-parking",
                        "em em-part_alternation_mark",
                        "em em-pisces",
                        "em em-recycle",
                        "em em-registered",
                        "em em-sagittarius",
                        "em em-scales",
                        "em em-snowflake",
                        "em em-spades",
                        "em em-star_of_david",
                        "em em-stopwatch",
                        "em em-thermometer",
                        "em em-trident",
                        "em em-u6307",
                        "em em-u6708",
                        "em em-u6709",
                        "em em-u6e80",
                        "em em-u7121",
                        "em em-u7533",
                        "em em-u7981",
                        "em em-u7a7a",
                        "em em-wheel_of_dharma",
                        "em em-yen",
                        "em em-aquarius",
                        "em em-aries",
                        "em em-cancer",
                        "em em-capricorn",
                        "em em-gemini",
                        "em em-leo",
                        "em em-libra",
                        "em em-ophiuchus",
                        "em em-pisces",
                        "em em-sagittarius",
                        "em em-scorpius",
                        "em em-taurus",
                        "em em-virgo",
                    ]
                },
                {
                    id: 'bandiere',
                    classes: 'fa-regular fa-flag',
                    name: 'Bandiere',
                    emos: [
                        "em em-flag-ad",
                        "em em-flag-ae",
                        "em em-flag-af",
                        "em em-flag-ag",
                        "em em-flag-ai",
                        "em em-flag-al",
                        "em em-flag-am",
                        "em em-flag-ao",
                        "em em-flag-aq",
                        "em em-flag-ar",
                        "em em-flag-as",
                        "em em-flag-at",
                        "em em-flag-au",
                        "em em-flag-aw",
                        "em em-flag-ax",
                        "em em-flag-az",
                        "em em-flag-ba",
                        "em em-flag-bb",
                        "em em-flag-bd",
                        "em em-flag-be",
                        "em em-flag-bf",
                        "em em-flag-bg",
                        "em em-flag-bh",
                        "em em-flag-bi",
                        "em em-flag-bj",
                        "em em-flag-bl",
                        "em em-flag-bm",
                        "em em-flag-bn",
                        "em em-flag-bo",
                        "em em-flag-bq",
                        "em em-flag-br",
                        "em em-flag-bs",
                        "em em-flag-bt",
                        "em em-flag-bv",
                        "em em-flag-bw",
                        "em em-flag-by",
                        "em em-flag-bz",
                        "em em-flag-ca",
                        "em em-flag-cc",
                        "em em-flag-cd",
                        "em em-flag-cf",
                        "em em-flag-cg",
                        "em em-flag-ch",
                        "em em-flag-ci",
                        "em em-flag-ck",
                        "em em-flag-cl",
                        "em em-flag-cm",
                        "em em-flag-cn",
                        "em em-flag-co",
                        "em em-flag-cp",
                        "em em-flag-cr",
                        "em em-flag-cu",
                        "em em-flag-cv",
                        "em em-flag-cw",
                        "em em-flag-cx",
                        "em em-flag-cy",
                        "em em-flag-cz",
                        "em em-flag-de",
                        "em em-flag-dg",
                        "em em-flag-dj",
                        "em em-flag-dk",
                        "em em-flag-dm",
                        "em em-flag-do",
                        "em em-flag-dz",
                        "em em-flag-ea",
                        "em em-flag-ec",
                        "em em-flag-ee",
                        "em em-flag-eg",
                        "em em-flag-eh",
                        "em em-flag-er",
                        "em em-flag-es",
                        "em em-flag-et",
                        "em em-flag-eu",
                        "em em-flag-fi",
                        "em em-flag-fj",
                        "em em-flag-fk",
                        "em em-flag-fm",
                        "em em-flag-fo",
                        "em em-flag-fr",
                        "em em-flag-ga",
                        "em em-flag-gb",
                        "em em-flag-gd",
                        "em em-flag-ge",
                        "em em-flag-gf",
                        "em em-flag-gg",
                        "em em-flag-gh",
                        "em em-flag-gi",
                        "em em-flag-gl",
                        "em em-flag-gm",
                        "em em-flag-gn",
                        "em em-flag-gp",
                        "em em-flag-gq",
                        "em em-flag-gr",
                        "em em-flag-gs",
                        "em em-flag-hm",
                        "em em-flag-hn",
                        "em em-flag-hr",
                        "em em-flag-ht",
                        "em em-flag-hu",
                        "em em-flag-ic",
                        "em em-flag-id",
                        "em em-flag-ie",
                        "em em-flag-il",
                        "em em-flag-im",
                        "em em-flag-in",
                        "em em-flag-io",
                        "em em-flag-iq",
                        "em em-flag-ir",
                        "em em-flag-is",
                        "em em-flag-it",
                        "em em-flag-je",
                        "em em-flag-jm",
                        "em em-flag-jo",
                        "em em-flag-jp",
                        "em em-flag-ke",
                        "em em-flag-kg",
                        "em em-flag-kh",
                        "em em-flag-ki",
                        "em em-flag-km",
                        "em em-flag-kn",
                        "em em-flag-kp",
                        "em em-flag-kr",
                        "em em-flag-kw",
                        "em em-flag-ky",
                        "em em-flag-kz",
                        "em em-flag-la",
                        "em em-flag-lb",
                        "em em-flag-lc",
                        "em em-flag-li",
                        "em em-flag-lk",
                        "em em-flag-lr",
                        "em em-flag-ls",
                        "em em-flag-lt",
                        "em em-flag-lu",
                        "em em-flag-lv",
                        "em em-flag-ly",
                        "em em-flag-ma",
                        "em em-flag-mc",
                        "em em-flag-md",
                        "em em-flag-me",
                        "em em-flag-mf",
                        "em em-flag-mg",
                        "em em-flag-mh",
                        "em em-flag-mk",
                        "em em-flag-ml",
                        "em em-flag-mm",
                        "em em-flag-mn",
                        "em em-flag-mo",
                        "em em-flag-mp",
                        "em em-flag-mq",
                        "em em-flag-mr",
                        "em em-flag-ms",
                        "em em-flag-mt",
                        "em em-flag-mu",
                        "em em-flag-mv",
                        "em em-flag-mw",
                        "em em-flag-mx",
                        "em em-flag-my",
                        "em em-flag-mz",
                        "em em-flag-na",
                        "em em-flag-nc",
                        "em em-flag-ne",
                        "em em-flag-nf",
                        "em em-flag-ng",
                        "em em-flag-ni",
                        "em em-flag-nl",
                        "em em-flag-no",
                        "em em-flag-np",
                        "em em-flag-nr",
                        "em em-flag-nu",
                        "em em-flag-nz",
                        "em em-flag-om",
                        "em em-flag-pa",
                        "em em-flag-pe",
                        "em em-flag-pf",
                        "em em-flag-pg",
                        "em em-flag-ph",
                        "em em-flag-pk",
                        "em em-flag-pl",
                        "em em-flag-pm",
                        "em em-flag-pn",
                        "em em-flag-pr",
                        "em em-flag-ps",
                        "em em-flag-pt",
                        "em em-flag-pw",
                        "em em-flag-py",
                        "em em-flag-qa",
                        "em em-flag-re",
                        "em em-flag-ro",
                        "em em-flag-rs",
                        "em em-flag-ru",
                        "em em-flag-rw",
                        "em em-flag-sa",
                        "em em-flag-sb",
                        "em em-flag-sc",
                        "em em-flag-sd",
                        "em em-flag-se",
                        "em em-flag-sg",
                        "em em-flag-sh",
                        "em em-flag-si",
                        "em em-flag-sj",
                        "em em-flag-sk",
                        "em em-flag-sl",
                        "em em-flag-sm",
                        "em em-flag-sn",
                        "em em-flag-so",
                        "em em-flag-sr",
                        "em em-flag-ss",
                        "em em-flag-st",
                        "em em-flag-sv",
                        "em em-flag-sx",
                        "em em-flag-sy",
                        "em em-flag-sz",
                        "em em-flag-ta",
                        "em em-flag-tc",
                        "em em-flag-td",
                        "em em-flag-tf",
                        "em em-flag-tg",
                        "em em-flag-th",
                        "em em-flag-tj",
                        "em em-flag-tk",
                        "em em-flag-tl",
                        "em em-flag-tm",
                        "em em-flag-tn",
                        "em em-flag-to",
                        "em em-flag-tr",
                        "em em-flag-tt",
                        "em em-flag-tv",
                        "em em-flag-tw",
                        "em em-flag-tz",
                        "em em-flag-ua",
                        "em em-flag-ug",
                        "em em-flag-um",
                        "em em-flag-us",
                        "em em-flag-uy",
                        "em em-flag-uz",
                        "em em-flag-va",
                        "em em-flag-vc",
                        "em em-flag-ve",
                        "em em-flag-vg",
                        "em em-flag-vi",
                        "em em-flag-vn",
                        "em em-flag-vu",
                        "em em-flag-wf",
                        "em em-flag-ws",
                        "em em-flag-xk",
                        "em em-flag-ye",
                        "em em-flag-yt",
                        "em em-flag-za",
                        "em em-flag-zm",
                        "em em-flag-zw"
                    ]
                }
            ]
        };   
    },

    created(){
        this.can()
    },
    
    /* ----------------- METHODS ----------------- */
    methods: {

        // funzione per ottenere date e orari dalla libreria luxon
        can(){

            // let dt = luxon.DateTime;

            console.log(this.dt.now().hour.toString())
            console.log(this.dt.now().toLocaleString())
            console.log(this.dt.now().toLocaleString(this.dt.TIME_SIMPLE))

            console.log(!this.boolean)
        },

        // funzione che al click trasferisce il valore ( index ) alla variabile ( indice )
        apriMessaggi(index) {

            this.indice = index;
        },

        // funzione per comparsa di dropdown al click sull'icona dentro a ogni messaggio scritto nella conversazione
        optionsShow(index) {

            // variabile numero assegnata al valore index
            this.optNum = index;

            // Seleziono tutti i "dropdown"
            let dropdown = document.querySelectorAll(".dropdown"); 
            // Seleziono tutti i "message"
            let message = document.querySelectorAll(".message"); 

            dropdown[index].classList.toggle("show"); 

            message[index].classList.toggle("index"); 
        },

        // funzione per la creazione di messaggi che poi verranno inseriti nella schermata della conversazione
        creoMessaggio() {
            
            let inputMessage = document.querySelector('#input-new-message');

            this.boolean = false;

            // assegno a una variabile l'ora attuale
            let orario = this.dt.now().toLocaleString(this.dt.TIME_SIMPLE);

            // estraggo il contenuto testuale
            let message = inputMessage.textContent.trim();

            // Nuovo oggetto con il valore di nuovoMessaggio
            let sentMessage = {
                date: '10/01/2020 '+ orario,
                message: '<span>'+ message +'</span>',
                status: 'sent'
            };

            // seleziono tutte le "i" se, presenti
            inputMessage.querySelectorAll('.em').forEach( element => {

                // creo un elemento span
                const span = document.createElement('span');

                // aggiungo la classe delle "i"
                span.className = element.className;

                // lo inserisco dentro la chiave message
                sentMessage.message += span.outerHTML;
            });

            // variabile assegnata all'array( messages )
            let messaggio = this.contacts[this.indice].messages;

            // variabile assegnata a un generatore di tempo random
            let randTime = this.getRandom(1000, 10000);

            // Se nuovoMessaggio non è vuoto
            if( message != '' ) {

                // Pusho il nuovo oggetto
                messaggio.push(sentMessage);
                message = '';
            } 
            
            // setTimeout che mi darà una risposta dopo 1 secondo
            setTimeout( () => {

                // Nuovo oggetto
                let receivedMessage = {
                    date: '10/01/2020 '+ orario,
                    message: 'Ok!',
                    status: 'received'
                };

                // push nuovo oggetto nell'array "messages"
                messaggio.push(receivedMessage);

                // refresh la pagina
                this.apriMessaggi(this.indice);

                this.boolean = true;
                
            }, randTime);
            
        }, 

        // funzione per numeri random( min, max ) inclusi
        getRandom(min, max) {

            min = Math.ceil(min);
            max = Math.floor(max);

            let num = Math.max(Math.floor(Math.random() * (max - min + 1) + min));
            
            // condizione per ottenere multipli di 1000
            if (num % 1000 == 0) {
                return num;
            } else {
                return this.getRandom(min, max);
            }
        },

        // funzione che crea una ricerca dinamica al digitare le lettere dentro all'input
        ricerca() {
            
            // Seleziono le classi "friend"
            let friend = document.getElementsByClassName("friend");
            
            // Transformo il value di input in lettere maiuscole
            let filter = this.filtraggio.toUpperCase();
            
            // Creo un ciclo for per prendere l'indice del insieme di elementi "friend"
            for (let i = 0; i < friend.length; i++) {

                // Seleziono tutti gli h4 posizione [0] di ogni contact
                let h4 = friend[i].getElementsByTagName("h4")[0];

                // Prendo il contenuto testuale di h4
                let txtValue = h4.textContent;

                // Se txtValue reso maiuscolo( .toUpperCase ) ha corrispondenza con filter( indexOf() ), ovvero il risultato sarà ( = 0 e < -1 ) ci sarà corrispondeza e lo stile display sarà uguale a niente altrimenti display none
                if (txtValue.toUpperCase().indexOf(filter) > -1) {

                    friend[i].style.display = "";
                } else {

                    friend[i].style.display = "none";
                }
            }
        },

        // funzione che cancella un oggetto di messages con indice ( i )
        deleteMessage(i){

            this.contacts[this.indice].messages.splice( i, 1 );
        },

        // funzione per aprire il menu con tutte le emojis
        emojisShow() {

            const root = document.querySelector(":root")

            // se ( this.emoBool = false ) imposto questo settaggio e la variabile diventa true
            if (!this.emoBool) {
                
                root.style.setProperty(`--hMessages`, `calc(100% - 425px)`);
                root.style.setProperty(`--dispEmojis`, `block`);

                this.emoBool = true;
                
                // altrimenti se la variabile è vera reimposto il settaggio iniziale e la variabile diventa false
            } else {

                root.style.setProperty(`--hMessages`, `calc(100% - 125px)`);
                root.style.setProperty(`--dispEmojis`, `none`);

                this.emoBool = false
            }
        },

        // funzione per lasciare lo stile selected sull'elemento clicked
        clicked(index) {

            // creo un array selezionando tutte le classi "emos_link"
            let a = document.querySelectorAll(".emos_link")

            // ciclo for per prendere l'indice di tutte gli elementi di "a"
            for (let i = 0; i < a.length; i++) {

                // se "i" ha lo stesso valore di "index" aggiungo la classe "selected" altrimenti la rimuovo
                if (i === index) {

                    a[i].classList.add("selected");
                } else {

                    a[i].classList.remove("selected");
                }
            }
        },

        // funzione al click che inserisce l'emoji nell'input
        selectEmoji(emojiClass) {
            
            let inputMessage = document.querySelector('#input-new-message');
            
            // creo l'elemento "i"
            const emoji = document.createElement('span');

            // assegno la classe selezionata al click
            emoji.className = emojiClass;

            // inserisco l'emoji nell'input
            inputMessage.append(emoji)

            let range = document.createRange()
            
            range.setStartAfter(emoji)

            console.log(range)
            // mantengo il focus sull'input
            inputMessage.focus();

            // forse dovrei creare delle emoji son simboli e poi ricerarle come span una volta selezionati e mandati nel div conversazione
        }
    }
}).mount('#app')