const fetch = require('node-fetch');

exports.movies = (req,res)=> {
    res.json({"adult":false,"backdrop_path":"/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg","belongs_to_collection":null,"budget":200000000,"genres":[{"id":878,"name":"Science Fiction"},{"id":28,"name":"Action"}],"homepage":"http://darkphoenix.com","id":320288,"imdb_id":"tt6565702","original_language":"en","original_title":"Dark Phoenix","overview":"The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.","popularity":257.366,"poster_path":"/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg","production_companies":[{"id":431,"logo_path":null,"name":"The Donners' Company","origin_country":"US"},{"id":25,"logo_path":"/qZCc1lty5FzX30aOCVRBLzaVmcp.png","name":"20th Century Fox","origin_country":"US"},{"id":28788,"logo_path":null,"name":"Genre Films","origin_country":"US"},{"id":9168,"logo_path":"/hQNXrYIuyLRxMSBuGHk0GX7CCBS.png","name":"Bad Hat Harry Productions","origin_country":"US"},{"id":7505,"logo_path":"/837VMM4wOkODc1idNxGT0KQJlej.png","name":"Marvel Entertainment","origin_country":"US"},{"id":112049,"logo_path":null,"name":"Kinberg Genre","origin_country":""}],"production_countries":[{"iso_3166_1":"US","name":"United States of America"}],"release_date":"2019-06-05","revenue":0,"runtime":114,"spoken_languages":[{"iso_639_1":"en","name":"English"},{"iso_639_1":"tr","name":"Türkçe"}],"status":"Released","tagline":"The phoenix will rise","title":"Dark Phoenix","video":false,"vote_average":6.3,"vote_count":825})
//   const baseurl= process.env.BASEURL,
//   movieID = process.env.SEARCHMOVIEID,
//   apikey = process.env.MOVIEDB_API_KEY,
//   userParams = parseInt(req.params.id)
//   fetch(`${baseurl}${userParams}${movieID}${apikey}`)
//   .then(response =>{
//     if(response.ok){
//       return response.json()
//     }
//     throw new err('Request failed')
//   }, networkError => console.log(networkError.message))
//   .then(jsonResponse => res.json(jsonResponse))
};


exports.popularMovies = (req, res)=>{
res.json({
    "page": 1,
    "total_results": 19840,
    "total_pages": 992,
    "results": [
        {
            "vote_count": 12,
            "id": 532321,
            "video": false,
            "vote_average": 4.7,
            "title": "Re: Zero kara Hajimeru Isekai Seikatsu - Memory Snow",
            "popularity": 288.706,
            "poster_path": "/xqR4ABkFTFYe8NDJi3knwWX7zfn.jpg",
            "original_language": "ja",
            "original_title": "Re:ゼロから始める異世界生活 Memory Snow",
            "genre_ids": [
                16,
                12
            ],
            "backdrop_path": "/8sNz2DxYiYqGkxk66U8BqvuZZjE.jpg",
            "adult": false,
            "overview": "Subaru and friends finally get a moment of peace, and Subaru goes on a certain secret mission that he must not let anyone find out about! However, even though Subaru is wearing a disguise, Petra and other children of the village immediately figure out who he is. Now that his mission was exposed within five seconds of it starting, what will happen with Subaru's \"date course\" with Emilia?",
            "release_date": "2018-10-06"
        },
        {
            "vote_count": 576,
            "id": 320288,
            "video": false,
            "vote_average": 6.2,
            "title": "Dark Phoenix",
            "popularity": 286.663,
            "poster_path": "/kZv92eTc0Gg3mKxqjjDAM73z9cy.jpg",
            "original_language": "en",
            "original_title": "Dark Phoenix",
            "genre_ids": [
                878,
                28
            ],
            "backdrop_path": "/phxiKFDvPeQj4AbkvJLmuZEieDU.jpg",
            "adult": false,
            "overview": "The X-Men face their most formidable and powerful foe when one of their own, Jean Grey, starts to spiral out of control. During a rescue mission in outer space, Jean is nearly killed when she's hit by a mysterious cosmic force. Once she returns home, this force not only makes her infinitely more powerful, but far more unstable. The X-Men must now band together to save her soul and battle aliens that want to use Grey's new abilities to rule the galaxy.",
            "release_date": "2019-06-05"
        },
        {
            "vote_count": 1503,
            "id": 420817,
            "video": false,
            "vote_average": 7.2,
            "title": "Aladdin",
            "popularity": 228.595,
            "poster_path": "/3iYQTLGoy7QnjcUYRJy4YrAgGvp.jpg",
            "original_language": "en",
            "original_title": "Aladdin",
            "genre_ids": [
                12,
                14,
                10749,
                35,
                10751
            ],
            "backdrop_path": "/v4yVTbbl8dE1UP2dWu5CLyaXOku.jpg",
            "adult": false,
            "overview": "A kindhearted street urchin named Aladdin embarks on a magical adventure after finding a lamp that releases a wisecracking genie while a power-hungry Grand Vizier vies for the same lamp that has the power to make their deepest wishes come true.",
            "release_date": "2019-05-22"
        },
        {
            "vote_count": 5651,
            "id": 299537,
            "video": false,
            "vote_average": 7,
            "title": "Captain Marvel",
            "popularity": 186.464,
            "poster_path": "/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
            "original_language": "en",
            "original_title": "Captain Marvel",
            "genre_ids": [
                28,
                12,
                878
            ],
            "backdrop_path": "/w2PMyoyLU22YvrGK3smVM9fW1jj.jpg",
            "adult": false,
            "overview": "The story follows Carol Danvers as she becomes one of the universe’s most powerful heroes when Earth is caught in the middle of a galactic war between two alien races. Set in the 1990s, Captain Marvel is an all-new adventure from a previously unseen period in the history of the Marvel Cinematic Universe.",
            "release_date": "2019-03-06"
        },
        {
            "vote_count": 54,
            "id": 479455,
            "video": false,
            "vote_average": 6.2,
            "title": "Men in Black: International",
            "popularity": 159.659,
            "poster_path": "/dPrUPFcgLfNbmDL8V69vcrTyEfb.jpg",
            "original_language": "en",
            "original_title": "Men in Black: International",
            "genre_ids": [
                28,
                35,
                878,
                12
            ],
            "backdrop_path": "/2SBStvzMSzScJjZE9uTn3vIgo7b.jpg",
            "adult": false,
            "overview": "The Men in Black have always protected the Earth from the scum of the universe. In this new adventure, they tackle their biggest, most global threat to date: a mole in the Men in Black organization.",
            "release_date": "2019-06-12"
        },
        {
            "vote_count": 37,
            "id": 280960,
            "video": false,
            "vote_average": 4.5,
            "title": "Catarina and the others",
            "popularity": 151.946,
            "poster_path": "/kZMCbp0o46Tsg43omSHNHJKNTx9.jpg",
            "original_language": "pt",
            "original_title": "Catarina e os Outros",
            "genre_ids": [
                18,
                9648
            ],
            "backdrop_path": "/8FfD5WXHrJLx0r4expl9IIBMsOW.jpg",
            "adult": false,
            "overview": "Outside, the first sun rays break the dawn.  Sixteen years old Catarina can't fall asleep.  Inconsequently, in the big city adults are moved by desire...  Catarina found she is HIV positive. She wants to drag everyone else along.",
            "release_date": "2011-03-01"
        },
        {
            "vote_count": 521,
            "id": 373571,
            "video": false,
            "vote_average": 6.4,
            "title": "Godzilla: King of the Monsters",
            "popularity": 139.753,
            "poster_path": "/pU3bnutJU91u3b4IeRPQTOP8jhV.jpg",
            "original_language": "en",
            "original_title": "Godzilla: King of the Monsters",
            "genre_ids": [
                878,
                28,
                53
            ],
            "backdrop_path": "/uovH5k4BAEPqXqxgwVrTtqH169g.jpg",
            "adult": false,
            "overview": "The new story follows the heroic efforts of the crypto-zoological agency Monarch as its members face off against a battery of god-sized monsters, including the mighty Godzilla, who collides with Mothra, Rodan, and his ultimate nemesis, the three-headed King Ghidorah. When these ancient super-species—thought to be mere myths—rise again, they all vie for supremacy, leaving humanity’s very existence hanging in the balance.",
            "release_date": "2019-05-29"
        },
        {
            "vote_count": 1062,
            "id": 458156,
            "video": false,
            "vote_average": 7.2,
            "title": "John Wick: Chapter 3 – Parabellum",
            "popularity": 136.633,
            "poster_path": "/ziEuG1essDuWuC5lpWUaw1uXY2O.jpg",
            "original_language": "en",
            "original_title": "John Wick: Chapter 3 – Parabellum",
            "genre_ids": [
                80,
                28,
                53
            ],
            "backdrop_path": "/vVpEOvdxVBP2aV166j5Xlvb5Cdc.jpg",
            "adult": false,
            "overview": "Super-assassin John Wick returns with a $14 million price tag on his head and an army of bounty-hunting killers on his trail. After killing a member of the shadowy international assassin’s guild, the High Table, John Wick is excommunicado, but the world’s most ruthless hit men and women await his every turn.",
            "release_date": "2019-05-15"
        },
        {
            "vote_count": 6795,
            "id": 299534,
            "video": false,
            "vote_average": 8.4,
            "title": "Avengers: Endgame",
            "popularity": 110.013,
            "poster_path": "/or06FN3Dka5tukK1e9sl16pB3iy.jpg",
            "original_language": "en",
            "original_title": "Avengers: Endgame",
            "genre_ids": [
                12,
                878,
                28
            ],
            "backdrop_path": "/7RyHsO4yDXtBv1zUU3mTpHeQ0d5.jpg",
            "adult": false,
            "overview": "After the devastating events of Avengers: Infinity War, the universe is in ruins due to the efforts of the Mad Titan, Thanos. With the help of remaining allies, the Avengers must assemble once more in order to undo Thanos' actions and restore order to the universe once and for all, no matter what consequences may be in store.",
            "release_date": "2019-04-24"
        },
        {
            "vote_count": 14,
            "id": 566555,
            "video": false,
            "vote_average": 4.7,
            "title": "Detective Conan: The Fist of Blue Sapphire",
            "popularity": 108.791,
            "poster_path": "/86Y6qM8zTn3PFVfCm9J98Ph7JEB.jpg",
            "original_language": "ja",
            "original_title": "名探偵コナン 紺青の拳（フィスト）",
            "genre_ids": [
                16,
                28,
                18,
                9648,
                35
            ],
            "backdrop_path": "/wf6VDSi4aFCZfuD8sX8JAKLfJ5m.jpg",
            "adult": false,
            "overview": "23rd movie in the \"Detective Conan\" franchise.",
            "release_date": "2019-04-12"
        },
        {
            "vote_count": 1274,
            "id": 447404,
            "video": false,
            "vote_average": 7,
            "title": "Pokémon Detective Pikachu",
            "popularity": 97.67,
            "poster_path": "/wgQ7APnFpf1TuviKHXeEe3KnsTV.jpg",
            "original_language": "en",
            "original_title": "Pokémon Detective Pikachu",
            "genre_ids": [
                9648,
                10751,
                35,
                878,
                28,
                12
            ],
            "backdrop_path": "/nDP33LmQwNsnPv29GQazz59HjJI.jpg",
            "adult": false,
            "overview": "In a world where people collect pocket-size monsters (Pokémon) to do battle, a boy comes across an intelligent monster who seeks to be a detective.",
            "release_date": "2019-05-03"
        },
        {
            "vote_count": 246,
            "id": 505948,
            "video": false,
            "vote_average": 6.7,
            "title": "I Am Mother",
            "popularity": 91.137,
            "poster_path": "/eItrj5GcjvCI3oD3bIcz1A2IL9t.jpg",
            "original_language": "en",
            "original_title": "I Am Mother",
            "genre_ids": [
                53,
                878
            ],
            "backdrop_path": "/kmPnDn9mbjD9Vzn1FTclNiSHGNa.jpg",
            "adult": false,
            "overview": "A teenage girl is raised underground by a robot \"Mother\", designed to repopulate the earth following an extinction event. But their unique bond is threatened when an inexplicable stranger arrives with alarming news.",
            "release_date": "2019-06-07"
        },
        {
            "vote_count": 109,
            "id": 412117,
            "video": false,
            "vote_average": 6.5,
            "title": "The Secret Life of Pets 2",
            "popularity": 90.674,
            "poster_path": "/q3mKnSkzp1doIsCye6ap4KIUAbu.jpg",
            "original_language": "en",
            "original_title": "The Secret Life of Pets 2",
            "genre_ids": [
                12,
                16,
                35,
                10751
            ],
            "backdrop_path": "/etaok7q2E5tV36oXe7GQzhUQ4fX.jpg",
            "adult": false,
            "overview": "What happens with our pets when we’re not home? This movie continues the original movie with Max and his friends.",
            "release_date": "2019-05-24"
        },
        {
            "vote_count": 2041,
            "id": 166428,
            "video": false,
            "vote_average": 7.6,
            "title": "How to Train Your Dragon: The Hidden World",
            "popularity": 90.071,
            "poster_path": "/xvx4Yhf0DVH8G4LzNISpMfFBDy2.jpg",
            "original_language": "en",
            "original_title": "How to Train Your Dragon: The Hidden World",
            "genre_ids": [
                16,
                10751,
                12
            ],
            "backdrop_path": "/lFwykSz3Ykj1Q3JXJURnGUTNf1o.jpg",
            "adult": false,
            "overview": "As Hiccup fulfills his dream of creating a peaceful dragon utopia, Toothless’ discovery of an untamed, elusive mate draws the Night Fury away. When danger mounts at home and Hiccup’s reign as village chief is tested, both dragon and rider must make impossible decisions to save their kind.",
            "release_date": "2019-01-03"
        },
        {
            "vote_count": 7556,
            "id": 920,
            "video": false,
            "vote_average": 6.7,
            "title": "Cars",
            "popularity": 85.975,
            "poster_path": "/5damnMcRFKSjhCirgX3CMa88MBj.jpg",
            "original_language": "en",
            "original_title": "Cars",
            "genre_ids": [
                16,
                12,
                35,
                10751
            ],
            "backdrop_path": "/a1MlbLBk5Sy6YvMbSuKfwGlDVlb.jpg",
            "adult": false,
            "overview": "Lightning McQueen, a hotshot rookie race car driven to succeed, discovers that life is about the journey, not the finish line, when he finds himself unexpectedly detoured in the sleepy Route 66 town of Radiator Springs. On route across the country to the big Piston Cup Championship in California to compete against two seasoned pros, McQueen gets to know the town's offbeat characters.",
            "release_date": "2006-06-08"
        },
        {
            "vote_count": 13963,
            "id": 299536,
            "video": false,
            "vote_average": 8.3,
            "title": "Avengers: Infinity War",
            "popularity": 85.058,
            "poster_path": "/7WsyChQLEftFiDOVTGkv3hFpyyt.jpg",
            "original_language": "en",
            "original_title": "Avengers: Infinity War",
            "genre_ids": [
                12,
                28,
                14
            ],
            "backdrop_path": "/bOGkgRGdhrBYJSLpXaxhXVstddV.jpg",
            "adult": false,
            "overview": "As the Avengers and their allies have continued to protect the world from threats too large for any one hero to handle, a new danger has emerged from the cosmic shadows: Thanos. A despot of intergalactic infamy, his goal is to collect all six Infinity Stones, artifacts of unimaginable power, and use them to inflict his twisted will on all of reality. Everything the Avengers have fought for has led up to this moment - the fate of Earth and existence itself has never been more uncertain.",
            "release_date": "2018-04-25"
        },
        {
            "vote_count": 10088,
            "id": 245891,
            "video": false,
            "vote_average": 7.2,
            "title": "John Wick",
            "popularity": 84.318,
            "poster_path": "/b9uYMMbm87IBFOq59pppvkkkgNg.jpg",
            "original_language": "en",
            "original_title": "John Wick",
            "genre_ids": [
                28,
                53
            ],
            "backdrop_path": "/mFb0ygcue4ITixDkdr7wm1Tdarx.jpg",
            "adult": false,
            "overview": "Ex-hitman John Wick comes out of retirement to track down the gangsters that took everything from him.",
            "release_date": "2014-10-22"
        },
        {
            "vote_count": 1721,
            "id": 458723,
            "video": false,
            "vote_average": 7.1,
            "title": "Us",
            "popularity": 79.844,
            "poster_path": "/ux2dU1jQ2ACIMShzB3yP93Udpzc.jpg",
            "original_language": "en",
            "original_title": "Us",
            "genre_ids": [
                53,
                27
            ],
            "backdrop_path": "/AiG8iWpFtFSXAdhStWu6qBaqmv9.jpg",
            "adult": false,
            "overview": "Husband and wife Gabe and Adelaide Wilson take their kids to their beach house expecting to unplug and unwind with friends. But as night descends, their serenity turns to tension and chaos when some shocking visitors arrive uninvited.",
            "release_date": "2019-03-14"
        },
        {
            "vote_count": 130,
            "id": 502416,
            "video": false,
            "vote_average": 5.8,
            "title": "Ma",
            "popularity": 77.761,
            "poster_path": "/6n7ASmQ1wY2cxTubFFGlcvPpyk7.jpg",
            "original_language": "en",
            "original_title": "Ma",
            "genre_ids": [
                53,
                27
            ],
            "backdrop_path": "/mBOv5YrX5QGr5CusK0PKSHuxOt9.jpg",
            "adult": false,
            "overview": "Sue Ann is a loner who keeps to herself in her quiet Ohio town. One day, she is asked by Maggie, a new teenager in town, to buy some booze for her and her friends, and Sue Ann sees the chance to make some unsuspecting, if younger, friends of her own.",
            "release_date": "2019-05-29"
        },
        {
            "vote_count": 1226,
            "id": 329996,
            "video": false,
            "vote_average": 6.6,
            "title": "Dumbo",
            "popularity": 75.803,
            "poster_path": "/279PwJAcelI4VuBtdzrZASqDPQr.jpg",
            "original_language": "en",
            "original_title": "Dumbo",
            "genre_ids": [
                12,
                10751,
                14
            ],
            "backdrop_path": "/5tFt6iuGnKapHl5tw0X0cKcnuVo.jpg",
            "adult": false,
            "overview": "A young elephant, whose oversized ears enable him to fly, helps save a struggling circus, but when the circus plans a new venture, Dumbo and his friends discover dark secrets beneath its shiny veneer.",
            "release_date": "2019-03-27"
        }
    ]
});
//   const apikey = process.env.MOVIEDB_API_KEY,
//   popular = process.env.POPULARMOVIES,
//   countryLanguage = process.env.LANGUAGES_FOR_POPULAR_MOVIES,
//   extra = process.env.EXTRA;
//   fetch(`${popular}${apikey}${countryLanguage}${extra}`)
//   .then(response =>{
//     if(response.ok){
//       return response.json()
//     }
//     throw new err('Request failed')
//   }, networkError => console.log(networkError.message))
//   .then(jsonResponse => res.json(jsonResponse))
}

exports.discover = (req, res) =>{
  res.json(
    {
        "page": 1,
        "total_results": 443451,
        "total_pages": 22173,
        "results": [
            {
                "vote_count": 1,
                "id": 611716,
                "video": false,
                "vote_average": 10,
                "title": "Hikaru Utada Laughter in the Dark Tour 2018",
                "popularity": 0,
                "poster_path": "/jevByc1pGXEHuFYS7C0qYwVgpGg.jpg",
                "original_language": "ja",
                "original_title": "Hikaru Utada Laughter in the Dark Tour 2018",
                "genre_ids": [
                    99,
                    10402
                ],
                "backdrop_path": "/y2T906BfsqNqDle6RuSUoomhVn6.jpg",
                "adult": false,
                "overview": "Celebrating twenty years since her debut, Hikaru Utada takes the stage at Makuhari Messe for the final performance of her Laughter in the Dark Tour.",
                "release_date": "2019-06-26"
            },
            {
                "vote_count": 1,
                "id": 611807,
                "video": false,
                "vote_average": 6,
                "title": "Gregorio por Nachman",
                "popularity": 0,
                "poster_path": "/sRU0T1KeYUrZb8b4lExulKXsQ9c.jpg",
                "original_language": "es",
                "original_title": "Gregorio por Nachman",
                "genre_ids": [
                    99
                ],
                "backdrop_path": null,
                "adult": false,
                "overview": "This documentary follows the life of the argentinian actor and producer Gregorio Nachman until his disappearance told by his family and friends.",
                "release_date": "2019-06-28"
            },
            {
                "vote_count": 0,
                "id": 611836,
                "video": false,
                "vote_average": 0,
                "title": "кошмар",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "кошмар",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "In a day full of nightmares, a girl can't distinguish between reality and hallucinations.",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611835,
                "video": false,
                "vote_average": 0,
                "title": "El Rey de Monterrey",
                "popularity": 0,
                "poster_path": null,
                "original_language": "es",
                "original_title": "El Rey de Monterrey",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611830,
                "video": false,
                "vote_average": 0,
                "title": "El amor y la muerte. Historia de Enrique Granados",
                "popularity": 0,
                "poster_path": "/qnv5jSYLj5MmlIb4ozIOKqEg9Bt.jpg",
                "original_language": "es",
                "original_title": "El amor y la muerte. Historia de Enrique Granados",
                "genre_ids": [
                    99
                ],
                "backdrop_path": null,
                "adult": false,
                "overview": "Documentary that recreates the biography of the Catalan composer and pianist Enrique Granados (1867-1916), his trips to Madrid, Paris and New York, his sensitive nature, the struggle to make his way in life despite the family economic straits and his first successes The story, built from vintage images, is interspersed with versions of the Granados repertoire by interpreters such as Rosa Torres-Pardo, Evgeny Kissin, Cañizares, Arcángel, Rocío Márquez, Carlos Álvarez and Nancy Fabiola Herrera, among others.",
                "release_date": "2018-10-23"
            },
            {
                "vote_count": 0,
                "id": 611828,
                "video": false,
                "vote_average": 0,
                "title": "De repente, la noche",
                "popularity": 0,
                "poster_path": "/n4KMj6s8RlZY2rq5JFRXe8H9MqL.jpg",
                "original_language": "es",
                "original_title": "De repente, la noche",
                "genre_ids": [
                    18,
                    53
                ],
                "backdrop_path": null,
                "adult": false,
                "overview": "Elena & Mario have a daughter who suffers from a serious illness.In order to survive,she will need a transplant from a genetically compatible sibling. After a number of unsuccessful pregnancies, Elena is expecting again. This time,everything is going well; but loneliness,and the fear of losing her husband's love will push Elena deep into the abyss.",
                "release_date": "2018-10-24"
            },
            {
                "vote_count": 0,
                "id": 611827,
                "video": false,
                "vote_average": 0,
                "title": "Cactus",
                "popularity": 0,
                "poster_path": "/1i4R5aOcLSa7MZpKDBWR7szm6wS.jpg",
                "original_language": "es",
                "original_title": "Cactus",
                "genre_ids": [
                    18
                ],
                "backdrop_path": null,
                "adult": false,
                "overview": "Two men meet in a florist shop. Their talk will bring them through the city of San Sebastian and through their memories.",
                "release_date": "2018-10-24"
            },
            {
                "vote_count": 0,
                "id": 611826,
                "video": false,
                "vote_average": 0,
                "title": "Jean Vigo",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Jean Vigo",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "A short animation made by Michel Gondry produced for the Criterion Collection release of The Complete Jean Vigo.",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611825,
                "video": false,
                "vote_average": 0,
                "title": "Four Rivers (Chu-Bzhi)",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Four Rivers (Chu-Bzhi)",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "A cinematic landscape film, based on a pilgrimage guide book on the four river sources that originate near Mount Kailash, in Tibet. The film depicts the beauty and brutality of nature and the rapidly evolving development projects taking place on the plateau. Narrated by the artist.",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611824,
                "video": false,
                "vote_average": 0,
                "title": "Derive",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Derive",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "A film by Fred L'Epee.",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611823,
                "video": false,
                "vote_average": 0,
                "title": "No me despertéis",
                "popularity": 0,
                "poster_path": "/UPtu03BXk3ltiX3pYidtoQEtiO.jpg",
                "original_language": "eu",
                "original_title": "No me despertéis",
                "genre_ids": [
                    18,
                    10751
                ],
                "backdrop_path": null,
                "adult": false,
                "overview": "Jone is a sixteen year old girl that lives in Bilbao (Basque Country) in 2009. In her highschool you can feel the independentist environment, demonstrations, strikes... are usuals between the students organizations. In this moment her dad starts to work int the Basque Government, between other things he has to go with body guards. This situation will change Jones life and she will have to learn to live between two worlds that she doesn't understand yet, and to understand that not everything is black or white.",
                "release_date": "2018-10-22"
            },
            {
                "vote_count": 0,
                "id": 611822,
                "video": false,
                "vote_average": 0,
                "title": "Saca una Foto",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Saca una Foto",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "Saca una Foto was completed several months after the Zapatista Revolution in January of 1994. Filmed throughout Chiapas and Yucatan the film juxtaposes the Western influences on the Maya and the filmmaker’s own sense of intrusion. The sounds of Spanish opera interwoven with the shaman chant through the corridors of an ancient Mayan palace, and the reoccurring voice of a young Mayan girl asking to have her picture taken for money - ”Saca una foto” - take my picture, depicts the complexities the filmmaker has towards making the film. The clashing of modern day Mexico with ancient tradition is reflected in the awkwardness of the eye of the camera.",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611821,
                "video": false,
                "vote_average": 0,
                "title": "Al khourouj an la nas",
                "popularity": 0,
                "poster_path": "/6y8O8qyuloiQg5uxQb0k0WXYB6C.jpg",
                "original_language": "en",
                "original_title": "Al khourouj an la nas",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "A film director who after facing a major financial crisis turns to drug trafficking which leads to a major turn in his life.",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611820,
                "video": false,
                "vote_average": 0,
                "title": "Okbaraji Alley",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Okbaraji Alley",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611819,
                "video": false,
                "vote_average": 0,
                "title": "Colone Calais",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Colone Calais",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "Three migratory points of passage. The displacement of a young actress at the Albanian border, in Athens, in Calais. In Athens, place Syntagma, she interferes with two other artists in the heart of one of the events of autumn 2014 against the European policy of austerity.\r  ",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611818,
                "video": false,
                "vote_average": 0,
                "title": "Nacho no conduce",
                "popularity": 0,
                "poster_path": "/wTggPN5yf9zJqwY783B51PLqJAP.jpg",
                "original_language": "es",
                "original_title": "Nacho no conduce",
                "genre_ids": [
                    35,
                    18
                ],
                "backdrop_path": null,
                "adult": false,
                "overview": "Nacho has been working away from Málaga, his hometown, for a year. He comes back to take his driving test for the eighth time. He is so ashamed that he has only told his best friend, Jorge. But this is not the only secret Nacho has kept from his friends.",
                "release_date": "2018-10-23"
            },
            {
                "vote_count": 0,
                "id": 611817,
                "video": false,
                "vote_average": 0,
                "title": "Un Rumor atraviesa el Tiempo",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Un Rumor atraviesa el Tiempo",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "In the Central Cemetery of Bogotá a popular tradition has been practiced for fifty years: the rites for the deceased. The isolated atmosphere, the crackling of the candles, the cooing of the pigeons or the singing of the mariachis, make the Central a suitable place for recollection, for communication with the beyond and the search for a superior force that brings aid and benefits to the lives of believers. Listening to those whispers that call death to life allows us to perceive elements of life that remain veiled.",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611816,
                "video": false,
                "vote_average": 0,
                "title": "Rice",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Rice",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "I work with time, movement and light in the film. The object photographed is rice. I placed rice one by one and then took them away one by one on an Acrylic desk. I took a photograph when I placed a grain of rice or I changed the direction of light. I used 465 grains of rice and took 1355 photographs. Then I jointed the 1355 photographs together in software and edited them to be a moving-image.",
                "release_date": ""
            },
            {
                "vote_count": 0,
                "id": 611815,
                "video": false,
                "vote_average": 0,
                "title": "Majlis al Jinn (Meeting Place of the Jinn)",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Majlis al Jinn (Meeting Place of the Jinn)",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "In this video I wanted to mix Ballardian landscapes with elements of Islamic mythology to arrive at something new and unfamiliar.\r This is the reality of this part of the middle east: 21st century technologies combined with religious beliefs forged in the 7th century.",
                "release_date": "2010-08-29"
            },
            {
                "vote_count": 0,
                "id": 611814,
                "video": false,
                "vote_average": 0,
                "title": "Over My Dead Country",
                "popularity": 0,
                "poster_path": null,
                "original_language": "en",
                "original_title": "Over My Dead Country",
                "genre_ids": [],
                "backdrop_path": null,
                "adult": false,
                "overview": "A film by Wei-ming Ho.",
                "release_date": ""
            }
        ]
    }
  )
//   const discover = process.env.DISCOVER,
//   query = process.env.DISCOVERQUERY
//   key = process.env.MOVIEDB_API_KEY
//   fetch(`${discover}${key}${query}`)
//   .then(response =>{
//     if(response.ok){
//       return response.json()
//     }
//     throw new err('Request failed')
//   }, networkError => console.log(networkError.message))
//   .then(jsonResponse => res.json(jsonResponse))
}