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
//     throw new Error('Request failed')
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
//     throw new Error('Request failed')
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
//   .then(response => {
//     if(response.ok){
//       return response.json()
//     }
//     throw new Error('Request failed')
//   }, networkError => console.log(networkError.message))
//   .then(jsonResponse => res.json(jsonResponse))
}

exports.tvshows = (req, res) => {
  res.json({
    "page": 1,
    "total_results": 19998,
    "total_pages": 1000,
    "results": [
        {
            "original_name": "See No Evil: The Moors Murders",
            "genre_ids": [
                18
            ],
            "name": "See No Evil: The Moors Murders",
            "popularity": 800.581,
            "origin_country": [
                "GB"
            ],
            "vote_count": 12,
            "first_air_date": "2006-05-14",
            "backdrop_path": "/7AKhSfJHnVi0zXQS4eJirHDs22p.jpg",
            "original_language": "en",
            "id": 11634,
            "vote_average": 4.8,
            "overview": "The dramatisation of one of the most notorious killing sprees in British history.",
            "poster_path": "/b71BaRjp9TwxUZodLGgSRIlkfL8.jpg"
        },
        {
            "original_name": "La casa de papel",
            "genre_ids": [
                80,
                18
            ],
            "name": "Money Heist",
            "popularity": 386.775,
            "origin_country": [
                "ES"
            ],
            "vote_count": 415,
            "first_air_date": "2017-05-02",
            "backdrop_path": "/piuRhGiQBYWgW668eSNJ2ug5uAO.jpg",
            "original_language": "es",
            "id": 71446,
            "vote_average": 8.1,
            "overview": "To carry out the biggest heist in history, a mysterious man called The Professor recruits a band of eight robbers who have a single characteristic: none of them has anything to lose. Five months of seclusion - memorizing every step, every detail, every probability - culminate in eleven days locked up in the National Coinage and Stamp Factory of Spain, surrounded by police forces and with dozens of hostages in their power, to find out whether their suicide wager will lead to everything or nothing.",
            "poster_path": "/MoEKaPFHABtA1xKoOteirGaHl1.jpg"
        },
        {
            "original_name": "ドラゴンボール",
            "genre_ids": [
                16,
                35,
                10759,
                10765
            ],
            "name": "Dragon Ball",
            "popularity": 291.912,
            "origin_country": [
                "JP"
            ],
            "vote_count": 330,
            "first_air_date": "1986-02-26",
            "backdrop_path": "/iflq7ZJfso6WC7gk9l1tD3unWK.jpg",
            "original_language": "ja",
            "id": 12609,
            "vote_average": 7.1,
            "overview": "Long ago in the mountains, a fighting master known as Gohan discovered a strange boy whom he named Goku. Gohan raised him and trained Goku in martial arts until he died. The young and very strong boy was on his own, but easily managed. Then one day, Goku met a teenage girl named Bulma, whose search for the dragon balls brought her to Goku's home. Together, they set off to find all seven dragon balls in an adventure.",
            "poster_path": "/3wx3EAMtqnbSLhGG8NrqXriCUIQ.jpg"
        },
        {
            "original_name": "The Flash",
            "genre_ids": [
                18,
                10765
            ],
            "name": "The Flash",
            "popularity": 255.217,
            "origin_country": [
                "US"
            ],
            "vote_count": 2747,
            "first_air_date": "2014-10-07",
            "backdrop_path": "/jC1KqsFx8ZyqJyQa2Ohi7xgL7XC.jpg",
            "original_language": "en",
            "id": 60735,
            "vote_average": 6.7,
            "overview": "After a particle accelerator causes a freak storm, CSI Investigator Barry Allen is struck by lightning and falls into a coma. Months later he awakens with the power of super speed, granting him the ability to move through Central City like an unseen guardian angel. Though initially excited by his newfound powers, Barry is shocked to discover he is not the only \"meta-human\" who was created in the wake of the accelerator explosion -- and not everyone is using their new powers for good. Barry partners with S.T.A.R. Labs and dedicates his life to protect the innocent. For now, only a few close friends and associates know that Barry is literally the fastest man alive, but it won't be long before the world learns what Barry Allen has become...The Flash.",
            "poster_path": "/fki3kBlwJzFp8QohL43g9ReV455.jpg"
        },
        {
            "original_name": "Arrow",
            "genre_ids": [
                80,
                18,
                9648,
                10759
            ],
            "name": "Arrow",
            "popularity": 239.556,
            "origin_country": [
                "US"
            ],
            "vote_count": 2536,
            "first_air_date": "2012-10-10",
            "backdrop_path": "/dKxkwAJfGuznW8Hu0mhaDJtna0n.jpg",
            "original_language": "en",
            "id": 1412,
            "vote_average": 5.8,
            "overview": "Spoiled billionaire playboy Oliver Queen is missing and presumed dead when his yacht is lost at sea. He returns five years later a changed man, determined to clean up the city as a hooded vigilante armed with a bow.",
            "poster_path": "/mo0FP1GxOFZT4UDde7RFDz5APXF.jpg"
        },
        {
            "original_name": "Stranger Things",
            "genre_ids": [
                18,
                9648,
                10765
            ],
            "name": "Stranger Things",
            "popularity": 231.085,
            "origin_country": [
                "US"
            ],
            "vote_count": 2432,
            "first_air_date": "2016-07-15",
            "backdrop_path": "/56v2KjBlU4XaOv9rVYEQypROD7P.jpg",
            "original_language": "en",
            "id": 66732,
            "vote_average": 8.3,
            "overview": "When a young boy vanishes, a small town uncovers a mystery involving secret experiments, terrifying supernatural forces, and one strange little girl.",
            "poster_path": "/x2LSRK2Cm7MZhjluni1msVJ3wDF.jpg"
        },
        {
            "original_name": "ありふれた職業で世界最強",
            "genre_ids": [
                16,
                10759,
                10765
            ],
            "name": "Arifureta: From Commonplace to World's Strongest",
            "popularity": 219.071,
            "origin_country": [
                "JP"
            ],
            "vote_count": 5,
            "first_air_date": "2019-07-08",
            "backdrop_path": "/1lL1ts7dzTUp0eOTHvMqfw6zFJn.jpg",
            "original_language": "ja",
            "id": 86034,
            "vote_average": 6,
            "overview": "Seventeen-year-old Hajime Nagumo is your average, everyday otaku. However, his simple life of pulling all-nighters and sleeping in school is suddenly turned upside down when he, along with the rest of his class, is summoned to a fantasy world! They're treated like heroes and tasked with the duty of saving the human race from utter extinction. But what should have been any otaku's wet dream quickly turns into Hajime's nightmare. While the rest of his class are blessed with godlike powers, Hajime's job, Synergist, only has a single transmutation skill. Ridiculed and bullied by his classmates for being weak, he soon finds himself in despair. Will he be able to survive in this dangerous world of monsters and demons with only a glorified blacksmith's level of strength?",
            "poster_path": "/5Z4799yZOHO6634NRekxo5aAeHK.jpg"
        },
        {
            "original_name": "Crímenes que cambiaron la historia",
            "genre_ids": [
                99,
                10767
            ],
            "name": "Crímenes que cambiaron la historia",
            "popularity": 218.577,
            "origin_country": [
                "ES"
            ],
            "vote_count": 6,
            "first_air_date": "2019-01-22",
            "backdrop_path": "/fngq96eBFAlXuqUzzKuxCi0ytsB.jpg",
            "original_language": "es",
            "id": 86816,
            "vote_average": 3.5,
            "overview": "",
            "poster_path": "/fMgPDXqSL4XILb0RKSXpDqc5tJ9.jpg"
        },
        {
            "original_name": "ワンパンマン",
            "genre_ids": [
                16,
                35,
                10759
            ],
            "name": "One-Punch Man",
            "popularity": 194.614,
            "origin_country": [
                "JP"
            ],
            "vote_count": 438,
            "first_air_date": "2015-10-04",
            "backdrop_path": "/s0w8JbuNNxL1YgaHeDWih12C3jG.jpg",
            "original_language": "ja",
            "id": 63926,
            "vote_average": 8,
            "overview": "Saitama is a hero who only became a hero for fun. After three years of “special” training, though, he’s become so strong that he’s practically invincible. In fact, he’s too strong—even his mightiest opponents are taken out with a single punch, and it turns out that being devastatingly powerful is actually kind of a bore. With his passion for being a hero lost along with his hair, yet still faced with new enemies every day, how much longer can he keep it going?",
            "poster_path": "/iE3s0lG5QVdEHOEZnoAxjmMtvne.jpg"
        },
        {
            "original_name": "Legion",
            "genre_ids": [
                10759,
                10765
            ],
            "name": "Legion",
            "popularity": 187.044,
            "origin_country": [
                "US"
            ],
            "vote_count": 580,
            "first_air_date": "2017-02-08",
            "backdrop_path": "/87eP7ITTrOWvkA4EqCuoRdyjzLy.jpg",
            "original_language": "en",
            "id": 67195,
            "vote_average": 7.6,
            "overview": "David Haller, AKA Legion, is a troubled young man who may be more than human. Diagnosed as schizophrenic, David has been in and out of psychiatric hospitals for years. But after a strange encounter with a fellow patient, he’s confronted with the possibility that the voices he hears and the visions he sees might be real.",
            "poster_path": "/vT0Zsbm4GWd7llNjgWEtwY0CqOv.jpg"
        },
        {
            "original_name": "Marvel's Agents of S.H.I.E.L.D.",
            "genre_ids": [
                18,
                10759,
                10765
            ],
            "name": "Marvel's Agents of S.H.I.E.L.D.",
            "popularity": 148.913,
            "origin_country": [
                "US"
            ],
            "vote_count": 1324,
            "first_air_date": "2013-09-24",
            "backdrop_path": "/iWopHyAvuIDjGX10Yc3nn6UEebW.jpg",
            "original_language": "en",
            "id": 1403,
            "vote_average": 6.8,
            "overview": "Agent Phil Coulson of S.H.I.E.L.D. (Strategic Homeland Intervention, Enforcement and Logistics Division) puts together a team of agents to investigate the new, the strange and the unknown around the globe, protecting the ordinary from the extraordinary.",
            "poster_path": "/cXiETfFK1BTLest5fhTLfDLRdL6.jpg"
        },
        {
            "original_name": "The 100",
            "genre_ids": [
                18,
                10765
            ],
            "name": "The 100",
            "popularity": 123.802,
            "origin_country": [
                "US"
            ],
            "vote_count": 1595,
            "first_air_date": "2014-03-19",
            "backdrop_path": "/qYTIuJJ7fIehicAt3bl0vW70Sq6.jpg",
            "original_language": "en",
            "id": 48866,
            "vote_average": 6.5,
            "overview": "100 years in the future, when the Earth has been abandoned due to radioactivity, the last surviving humans live on an ark orbiting the planet — but the ark won't last forever. So the repressive regime picks 100 expendable juvenile delinquents to send down to Earth to see if the planet is still habitable.",
            "poster_path": "/wBzNjurA8ijJPF21Ggs9nbviIzi.jpg"
        },
        {
            "original_name": "異世界チート魔術師",
            "genre_ids": [
                16,
                10759,
                10765
            ],
            "name": "Isekai Cheat Magician",
            "popularity": 169.839,
            "origin_country": [
                "JP"
            ],
            "vote_count": 4,
            "first_air_date": "2019-07-10",
            "backdrop_path": "/5Sr9nOKdh7g20qZPcwe9eS0WYR8.jpg",
            "original_language": "ja",
            "id": 90215,
            "vote_average": 6.8,
            "overview": "As regular high school students Taichi and Rin disappeared in a beam of light. When they came to, the two of them were already in a world of swords and magic. Finally getting away after experiencing an attack by monsters, following the suggestion of adventurers they headed on the path towards the guild. In the guild, the two of them found out that they possessed unbelievably powerful magic. Thus the regular high school students transformed into the strongest cheats...",
            "poster_path": "/bda9my9vSL78zO40hcHLzb0Ae4t.jpg"
        },
        {
            "original_name": "ワンピース",
            "genre_ids": [
                16,
                35,
                10759
            ],
            "name": "One Piece",
            "popularity": 169.576,
            "origin_country": [
                "JP"
            ],
            "vote_count": 253,
            "first_air_date": "1999-10-20",
            "backdrop_path": "/xgs7zAF5VSGAK0QstH1Q0ivybXz.jpg",
            "original_language": "ja",
            "id": 37854,
            "vote_average": 7.6,
            "overview": "Years ago, the fearsome pirate king Gol D. Roger was executed, leaving a huge pile of treasure and the famous \"One Piece\" behind. Whoever claims the \"One Piece\" will be named the new pirate king. Monkey D. Luffy, a boy who consumed one of the \"Devil's Fruits\", has it in his head that he'll follow in the footsteps of his idol, the pirate Shanks, and find the One Piece. It helps, of course, that his body has the properties of rubber and he's surrounded by a bevy of skilled fighters and thieves to help him along the way. Monkey D. Luffy brings a bunch of his crew followed by, Roronoa Zoro, Nami, Usopp, Sanji, Tony-Tony Chopper, Nico Robin, Franky, and Brook. They will do anything to get the One Piece and become King of the Pirates!",
            "poster_path": "/gJI77i79KnRuc9mGPKADPZWAE8O.jpg"
        },
        {
            "original_name": "ダンジョンに出会いを求めるのは間違っているだろうか",
            "genre_ids": [
                16,
                35,
                10765
            ],
            "name": "Is It Wrong to Try to Pick Up Girls in a Dungeon?",
            "popularity": 265.713,
            "origin_country": [
                "JP"
            ],
            "vote_count": 51,
            "first_air_date": "2015-04-04",
            "backdrop_path": "/xCmdeEvJNxptR30bEVXXWLrt4iI.jpg",
            "original_language": "ja",
            "id": 62745,
            "vote_average": 7.1,
            "overview": "Bell Cranell is a rookie adventurer and the sole member of his dirt-poor guild founded by the petite goddess Hestia. Adventurers come from far and wide looking to strike it big in the massive labyrinth known as Dungeon, located beneath the city of Orario. Bell is more interested in picking up girls than Dungeon-crawling, but his reality check comes sooner than expected. Saved from a brush with death by the beautiful, renowned adventurer Aiz Wallenstein, Bell falls head-over-heels and sets his sights on winning her heart, but she's not the only woman he's caught the attention of, for better of worse.",
            "poster_path": "/1RCLDDLhIYbHDxOEHhoLs33W4to.jpg"
        },
        {
            "original_name": "Family Guy",
            "genre_ids": [
                16,
                35
            ],
            "name": "Family Guy",
            "popularity": 162.417,
            "origin_country": [
                "US"
            ],
            "vote_count": 1567,
            "first_air_date": "1999-01-31",
            "backdrop_path": "/3OFrs1ets87VmRvG78Zg5eJTZeq.jpg",
            "original_language": "en",
            "id": 1434,
            "vote_average": 6.5,
            "overview": "Sick, twisted, politically incorrect and Freakin' Sweet animated series featuring the adventures of the dysfunctional Griffin family. Bumbling Peter and long-suffering Lois have three kids. Stewie (a brilliant but sadistic baby bent on killing his mother and taking over the world), Meg (the oldest, and is the most unpopular girl in town) and Chris (the middle kid, he's not very bright but has a passion for movies). The final member of the family is Brian - a talking dog and much more than a pet, he keeps Stewie in check whilst sipping Martinis and sorting through his own life issues.",
            "poster_path": "/gBGUL1UTUNmdRQT8gA1LUV4yg39.jpg"
        },
        {
            "original_name": "フェアリーテイル",
            "genre_ids": [
                16,
                35,
                10759,
                10765
            ],
            "name": "Fairy Tail",
            "popularity": 180.011,
            "origin_country": [
                "JP"
            ],
            "vote_count": 186,
            "first_air_date": "2009-10-12",
            "backdrop_path": "/m2lugAG39sO0yCcuxEAu4fY5u1o.jpg",
            "original_language": "ja",
            "id": 46261,
            "vote_average": 6.4,
            "overview": "Lucy is a 17-year-old girl, who wants to be a full-fledged mage. One day when visiting Harujion Town, she meets Natsu, a young man who gets sick easily by any type of transportation. But Natsu isn't just any ordinary kid, he's a member of one of the world's most infamous mage guilds: Fairy Tail.",
            "poster_path": "/58GKcwFV3lpVOGzybeMrrNOjHpz.jpg"
        },
        {
            "original_name": "Fear the Walking Dead",
            "genre_ids": [
                18,
                27
            ],
            "name": "Fear the Walking Dead",
            "popularity": 155.394,
            "origin_country": [
                "US"
            ],
            "vote_count": 965,
            "first_air_date": "2015-08-23",
            "backdrop_path": "/7r4FieFH6Eh6S55hi8c9LOiFENg.jpg",
            "original_language": "en",
            "id": 62286,
            "vote_average": 6.3,
            "overview": "What did the world look like as it was transforming into the horrifying apocalypse depicted in \"The Walking Dead\"? This spin-off set in Los Angeles, following new characters as they face the beginning of the end of the world, will answer that question.",
            "poster_path": "/aOdTWn8dXlS0tA5xl0ZBr8Ws15R.jpg"
        },
        {
            "original_name": "Murder, She Wrote",
            "genre_ids": [
                80,
                18,
                9648
            ],
            "name": "Murder, She Wrote",
            "popularity": 153.22,
            "origin_country": [
                "US"
            ],
            "vote_count": 82,
            "first_air_date": "1984-09-30",
            "backdrop_path": "/5M8bF0BwBk6RtJVrvpS9zj2bcxM.jpg",
            "original_language": "en",
            "id": 484,
            "vote_average": 7,
            "overview": "An unassuming mystery writer turned sleuth uses her professional insight to help solve real-life homicide cases.",
            "poster_path": "/j6DC2Xe0SZS6xKS2d6LWL1EGwzX.jpg"
        },
        {
            "original_name": "ドクターストーン",
            "genre_ids": [
                16,
                10759
            ],
            "name": "Dr. Stone",
            "popularity": 251.381,
            "origin_country": [
                "JP"
            ],
            "vote_count": 11,
            "first_air_date": "2019-07-05",
            "backdrop_path": "/1Ep6YHL5QcrNC1JN6RYalWRPopi.jpg",
            "original_language": "ja",
            "id": 86031,
            "vote_average": 7.1,
            "overview": "The science-fiction adventure follows two boys struggle to revive humanity after a mysterious crisis has left everyone in the world turned to stone for several millennia.",
            "poster_path": "/dLlnzbDCblBXcJqFLXyvN43NIwp.jpg"
        }
    ]
});
//   const baseurl = process.env.TVSHOWS,
//   api = process.env.MOVIEDB_API_KEY,
//   language = process.env.LANGUAGE_TV_SHOW

//   fetch(`${baseurl}${api}${language}`)
//   .then(response => {
//     if(response.ok){
//       return response.json()
//     }
//     throw new Error('Tv show request failed')
//   }).then(jsonResponse => res.json(jsonResponse))
}