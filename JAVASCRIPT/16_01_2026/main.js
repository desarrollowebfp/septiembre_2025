const main = document.querySelector("main");

const movies = [
  {
    id: "ca-bnw-2025",
    title: "Captain America: Brave New World",
    year: 2025,
    releaseDate: "2025-02-14",
    runtimeMinutes: 118,
    director: "Julius Onah",
    tags: ["superhero", "action", "mcu"],
    synopsis:
      "Sam Wilson takes up the Captain America mantle and gets pulled into a high-stakes conspiracy tied to the U.S. presidency.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Captain_America_Brave_New_World_poster.jpg/250px-Captain_America_Brave_New_World_poster.jpg",
    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Captain_America:_Brave_New_World",
  },
  {
    id: "thunderbolts-2025",
    title: "Thunderbolts*",
    year: 2025,
    releaseDate: "2025-05-02",
    runtimeMinutes: 127,
    director: "Jake Schreier",
    tags: ["superhero", "action", "mcu"],
    synopsis:
      "A group of antiheroes are forced into a dangerous mission where survival depends on working together.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/9/90/Thunderbolts%2A_poster.jpg/250px-Thunderbolts%2A_poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Thunderbolts*",
  },
  {
    id: "mi-final-reckoning-2025",
    title: "Mission: Impossible – The Final Reckoning",
    year: 2025,
    releaseDate: "2025-05-23",
    runtimeMinutes: 170,
    director: "Christopher McQuarrie",
    tags: ["action", "spy", "thriller"],
    synopsis:
      "Ethan Hunt returns for another high-risk operation where every decision has global consequences.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg/250px-Mission_Impossible_%E2%80%93_The_Final_Reckoning_Poster.jpg",
    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Mission:_Impossible_%E2%80%93_The_Final_Reckoning",
  },
  {
    id: "jurassic-rebirth-2025",
    title: "Jurassic World Rebirth",
    year: 2025,
    releaseDate: "2025-07-02",
    runtimeMinutes: 133,
    director: "Gareth Edwards",
    tags: ["sci-fi", "action", "adventure"],
    synopsis:
      "A new chapter in the Jurassic saga, with fresh threats and survival scenarios as humans face mutated prehistoric dangers.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a5/Jurassic_World_Rebirth_poster.jpg/250px-Jurassic_World_Rebirth_poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Jurassic_World_Rebirth",
  },
  {
    id: "superman-2025",
    title: "Superman",
    year: 2025,
    releaseDate: "2025-07-11",
    runtimeMinutes: 129,
    director: "James Gunn",
    tags: ["superhero", "action", "dc"],
    synopsis:
      "A rebooted Superman story where Clark Kent faces escalating pressure as his actions ripple across the world stage.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/3/32/Superman_%282025_film%29_poster.jpg/250px-Superman_%282025_film%29_poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Superman_(2025_film)",
  },
  {
    id: "ff-first-steps-2025",
    title: "The Fantastic Four: First Steps",
    year: 2025,
    releaseDate: "2025-07-25",
    runtimeMinutes: 114,
    director: "Matt Shakman",
    tags: ["superhero", "action", "mcu"],
    synopsis:
      "Marvel’s First Family faces a cosmic-scale threat in a retro-futuristic setting.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/13/The_Fantastic_Four_First_Steps_poster.jpg/250px-The_Fantastic_Four_First_Steps_poster.jpg",
    wikipediaUrl:
      "https://en.wikipedia.org/wiki/The_Fantastic_Four:_First_Steps",
  },
  {
    id: "wicked-for-good-2025",
    title: "Wicked: For Good",
    year: 2025,
    releaseDate: "2025-11-21",
    runtimeMinutes: 137,
    director: "Jon M. Chu",
    tags: ["musical", "fantasy"],
    synopsis:
      "The story continues in Oz, with shifting alliances and consequences that reshape Elphaba and Glinda’s destinies.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bf/Wicked_For_Good_poster.jpg/250px-Wicked_For_Good_poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Wicked:_For_Good",
  },
  {
    id: "snow-white-2025",
    title: "Disney's Snow White",
    year: 2025,
    releaseDate: "2025-03-21",
    runtimeMinutes: 109,
    director: "Marc Webb",
    tags: ["fantasy", "musical", "family"],
    synopsis:
      "A live-action reimagining of the classic tale, with Snow White confronting the Evil Queen to reclaim her story.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/1/1f/Snow_White_%282025_film%29_final_poster.jpg/250px-Snow_White_%282025_film%29_final_poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Snow_White_(2025_film)",
  },
  {
    id: "m3gan-2-0-2025",
    title: "M3GAN 2.0",
    year: 2025,
    releaseDate: "2025-06-27",
    runtimeMinutes: 120,
    director: "Gerard Johnstone",
    tags: ["sci-fi", "action", "thriller"],
    synopsis:
      "A rebooted M3GAN is brought back to stop a new military android created from stolen tech.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/9/94/M3GAN_2.0_Official_Poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/M3GAN_2.0",
  },
  {
    id: "fnaf-2-2025",
    title: "Five Nights at Freddy's 2",
    year: 2025,
    releaseDate: "2025-12-05",
    runtimeMinutes: 104,
    director: "Emma Tammi",
    tags: ["horror", "supernatural", "sequel"],
    synopsis:
      "A year and a half later, Abby is drawn into a new nightmare tied to the animatronics and the Marionette.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/1/11/Five_Nights_At_Freddy%27s_2_Movie_Poster.png",
    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Five_Nights_at_Freddy%27s_2_(film)",
  },
  {
    id: "tron-ares-2025",
    title: "Tron: Ares",
    year: 2025,
    releaseDate: "2025-10-10",
    runtimeMinutes: 119,
    director: "Joachim Rønning",
    tags: ["sci-fi", "action", "franchise"],
    synopsis:
      "A new chapter in the Tron universe, following Ares as the digital world collides with the real one.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/0/06/Tron_Ares_poster.jpg/250px-Tron_Ares_poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Tron:_Ares",
  },
  {
    id: "zootopia-2-2025",
    title: "Zootopia 2",
    year: 2025,
    releaseDate: "2025-11-26",
    runtimeMinutes: 108,
    director: "Jared Bush, Byron Howard",
    tags: ["animation", "comedy", "family"],
    synopsis:
      "Judy Hopps and Nick Wilde chase a new case across Zootopia as they try to clear their names.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/6a/Zootopia_2_%282025_film%29.jpg/250px-Zootopia_2_%282025_film%29.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Zootopia_2",
  },
  {
    id: "ballerina-2025",
    title: "Ballerina",
    year: 2025,
    releaseDate: "2025-06-06",
    runtimeMinutes: 125,
    director: "Len Wiseman",
    tags: ["action", "thriller", "spin-off"],
    synopsis:
      "An assassin trained in the Ruska Roma seeks revenge, expanding the world of John Wick.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Ballerina_%282025_film%29_poster.jpg/250px-Ballerina_%282025_film%29_poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Ballerina_(2025_film)",
  },
  {
    id: "the-conjuring-last-rites-2025",
    title: "The Conjuring: Last Rites",
    year: 2025,
    releaseDate: "2025-09-05",
    runtimeMinutes: 135,
    director: "Michael Chaves",
    tags: ["horror", "supernatural", "franchise"],
    synopsis:
      "Ed and Lorraine Warren face another terrifying case, tied to a notorious haunting investigation.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/b/bc/The_Conjuring_%E2%80%93_Last_Rites.jpg/250px-The_Conjuring_%E2%80%93_Last_Rites.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/The_Conjuring:_Last_Rites",
  },
  {
    id: "karate-kid-legends-2025",
    title: "Karate Kid: Legends",
    year: 2025,
    releaseDate: "2025-05-30",
    runtimeMinutes: 94,
    director: "Jonathan Entwistle",
    tags: ["martial-arts", "drama", "legacy"],
    synopsis:
      "A new protagonist enters the Karate Kid lineage, connecting eras with familiar mentors.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/8/88/Karate_Kid_Legends_Poster.jpg/250px-Karate_Kid_Legends_Poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Karate_Kid:_Legends",
  },
  {
    id: "how-to-train-your-dragon-2025",
    title: "How to Train Your Dragon",
    year: 2025,
    releaseDate: "2025-06-13",
    runtimeMinutes: 125,
    director: "Dean DeBlois",
    tags: ["fantasy", "adventure", "family"],
    synopsis:
      "A live-action retelling of Hiccup and Toothless as they challenge the Viking-dragon conflict.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/8/80/How_To_Train_Your_Dragon_2025_Poster.jpg",
    wikipediaUrl:
      "https://en.wikipedia.org/wiki/How_to_Train_Your_Dragon_(2025_film)",
  },
  {
    id: "a-minecraft-movie-2025",
    title: "A Minecraft Movie",
    year: 2025,
    releaseDate: "2025-04-04",
    runtimeMinutes: 101,
    director: "Jared Hess",
    tags: ["adventure", "comedy", "video-game"],
    synopsis:
      "A group of unlikely heroes is pulled into a blocky world where creativity is the key to survival.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/6/66/A_Minecraft_Movie_poster.jpg/250px-A_Minecraft_Movie_poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/A_Minecraft_Movie",
  },
  {
    id: "lilo-and-stitch-2025",
    title: "Lilo & Stitch",
    year: 2025,
    releaseDate: "2025-05-23",
    runtimeMinutes: 108,
    director: "Dean Fleischer Camp",
    tags: ["family", "comedy", "live-action"],
    synopsis:
      "A lonely girl forms an unexpected bond with a chaotic alien experiment trying to find a home.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/5/56/Lilo_%26_Stitch_2025_Theatrical_Poster.jpg/250px-Lilo_%26_Stitch_2025_Theatrical_Poster.jpg",
    wikipediaUrl: "https://en.wikipedia.org/wiki/Lilo_%26_Stitch_(2025_film)",
  },
  {
    id: "ca-bnw-2025",
    title: "Captain America: Brave New World",
    year: 2025,
    releaseDate: "2025-02-14",
    runtimeMinutes: 118,
    director: "Julius Onah",
    tags: ["superhero", "action", "mcu"],
    synopsis:
      "Sam Wilson takes up the Captain America mantle and gets pulled into a high-stakes conspiracy tied to the U.S. presidency.",
    posterUrl:
      "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Captain_America_Brave_New_World_poster.jpg/250px-Captain_America_Brave_New_World_poster.jpg",
    wikipediaUrl:
      "https://en.wikipedia.org/wiki/Captain_America:_Brave_New_World",
  },
];

// Una lista con li's dentro y cada una son peliculas del array movies

//LISTA CREADA
const ul = document.createElement("ul");

//RECORRO LAS PELICULAS PARA CREAR UN LI POR CADA UNA DE ELLAS
for (const movie of movies) {
  //Creo el li
  const li = document.createElement("li");
  //Editamos el HTML del li en cada una de las peliculas
  li.innerHTML = `
        <h2>${movie.title}</h2>
        <p>${movie.director}</p>
        <p>${movie.releaseDate}</p>
        <img src="${movie.posterUrl}" alt="${movie.title}"/>
    `;

    //Ahora que tenemos el li contruido en cada una de las vueltas, en cada una de las vueltas lo vamos a introducir en el ul
    ul.appendChild(li)
}

// Justo despues de haber terminado de fabricar nuestro ul con los lis y la información de las peliculas lo volcamos en el main
main.appendChild(ul)