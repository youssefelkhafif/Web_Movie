import { images } from "../constant";

export const comingSoonMovies = [
  {
    id: 1,
    title: "El Camino",
    year: 2019,
    duration: "2h 2min",
    age: "16+",
    rating: 4.8,
    reviews: 12,
    genre: ["Crime", "Drama", "Thriller"],
    poster: images.elclamindo,
    description:
      "Fugitive Jesse Pinkman runs from his captors, the law, and his past in this gripping continuation of Breaking Bad.",
    starring: ["Aaron Paul", "Jonathan Banks"],
    director: "Vince Gilligan",
    relatedMovies: [3, 7, 13],
    movie:"https://www.youtube.com/embed/1JLUn2DFW4w"
    
   
  },

  {
    id: 2,
    title: "Tenet",
    year: 2020,
    duration: "2h 30min",
    age: "13+",
    rating: 5.0,
    reviews: 38,
    genre: ["Action", "Sci-Fi", "Thriller"],
    poster: images.Tent,
    description:
      "A secret agent embarks on a time-bending mission to prevent World War III using the power of inversion.",
    starring: ["John David Washington", "Robert Pattinson"],
    director: "Christopher Nolan",
    relatedMovies: [8, 9, 14],
  
     movie:"https://www.youtube.com/embed/L3pk_TBkihU"
     
  },

  {
    id: 3,
    title: "After",
    year: 2019,
    duration: "1h 45min",
    age: "16+",
    rating: 4.6,
    reviews: 9,
    genre: ["Romance", "Drama"],
    poster: images.After,
    description:
      "A young woman’s life takes a dramatic turn when she meets a mysterious and troubled young man.",
    starring: ["Josephine Langford", "Hero Fiennes Tiffin"],
    director: "Jenny Gage",
    relatedMovies: [1, 11],
    movie:"https://www.youtube.com/embed/q0GTFmhO1k4"
  },

  {
    id: 4,
    title: "Archer",
    year: 2021,
    duration: "1h 40min",
    age: "16+",
    rating: 4.8,
    reviews: 12,
    genre: ["Action", "Thriller"],
    poster: images.archer,
    description:
      "A former lawman finds himself protecting a young boy from a ruthless gang.",
    starring: ["Liam Neeson"],
    director: "Robert Lorenz",
    relatedMovies: [13, 7],
    movie:"https://www.youtube.com/embed/I3ueuk2NUFk"
  },

  {
    id: 5,
    title: "The Spongebob Movie",
    year: 2020,
    duration: "1h 35min",
    age: "7+",
    rating: 4.8,
    reviews: 12,
    genre: ["Animation", "Comedy", "Family"],
    poster: images.spon,
    description:
      "SpongeBob and Patrick go on a heroic mission to save Bikini Bottom.",
    starring: ["Tom Kenny", "Bill Fagerbakke"],
    director: "Tim Hill",
    relatedMovies: [11],
    movie:"https://www.youtube.com/embed/a2cowVH03Xo"
  },

  {
    id: 6,
    title: "Tides",
    year: 2021,
    duration: "1h 44min",
    age: "16+",
    rating: 4.8,
    reviews: 12,
    genre: ["Sci-Fi", "Drama"],
    poster: images.tides,
    description:
      "A space mission returns to Earth to discover a world changed forever.",
    starring: ["Nora Arnezeder"],
    director: "Tim Fehlbaum",
    relatedMovies: [2, 14],
    movie:"https://www.youtube.com/embed/TOOoDf1Gttc"
  },

  {
    id: 7,
    title: "The Reckoning",
    year: 2020,
    duration: "1h 51min",
    age: "18+",
    rating: 4.8,
    reviews: 12,
    genre: ["Horror", "Mystery"],
    poster: images.reck,
    description:
      "A woman accused of witchcraft faces her darkest fears in medieval England.",
    starring: ["Charlotte Kirk"],
    director: "Neil Marshall",
    relatedMovies: [1, 4],
    movie:"https://www.youtube.com/embed/Wud_ofC2rAI"
  },

  {
    id: 8,
    title: "The Batman",
    year: 2022,
    duration: "2h 56min",
    age: "16+",
    rating: 4.8,
    reviews: 12,
    genre: ["Action", "Crime", "Drama"],
    poster: images.Batman,
    description:
      "Batman uncovers corruption in Gotham while pursuing the Riddler.",
    starring: ["Robert Pattinson", "Zoë Kravitz"],
    director: "Matt Reeves",
    relatedMovies: [2, 9],
    movie:"https://www.youtube.com/embed/mqqft2x_Aa4"
  },

  {
    id: 9,
    title: "Mortal Kombat",
    year: 2021,
    duration: "1h 50min",
    age: "18+",
    rating: 4.5,
    reviews: 7,
    genre: ["Action", "Fantasy"],
    poster: images.mortal,
    description:
      "Earth’s champions fight to stop Outworld from conquering the universe.",
    starring: ["Lewis Tan", "Joe Taslim"],
    director: "Simon McQuoid",
    relatedMovies: [8, 12],
    movie:"https://www.youtube.com/embed/ZdC5mFHPldg"
  },

  {
    id: 10,
    title: "Resident Evil",
    year: 2021,
    duration: "1h 47min",
    age: "18+",
    rating: 4.6,
    reviews: 9,
    genre: ["Horror", "Action"],
    poster: images.evil,
    description:
      "Survivors battle a deadly virus unleashed by a powerful corporation.",
    starring: ["Kaya Scodelario"],
    director: "Johannes Roberts",
    relatedMovies: [7, 9],
    movie:"https://www.youtube.com/embed/Xd72Q0Tg4ug"
  },

  {
    id: 11,
    title: "Jungle Cruise",
    year: 2021,
    duration: "2h 7min",
    age: "10+",
    rating: 4.8,
    reviews: 12,
    genre: ["Adventure", "Fantasy"],
    poster: images.jungle,
    description:
      "A riverboat captain helps explorers uncover a mystical tree.",
    starring: ["Dwayne Johnson", "Emily Blunt"],
    director: "Jaume Collet-Serra",
    relatedMovies: [5, 3],
    movie:"https://www.youtube.com/embed/f_HvoipFcA8"
  },

  {
    id: 12,
    title: "Black Adam",
    year: 2022,
    duration: "2h 5min",
    age: "13+",
    rating: 4.8,
    reviews: 12,
    genre: ["Action", "Fantasy"],
    poster: images.Adam,
    description:
      "A powerful anti-hero is unleashed after thousands of years.",
    starring: ["Dwayne Johnson"],
    director: "Jaume Collet-Serra",
    relatedMovies: [9, 8],
    movie:"https://www.youtube.com/embed/X0tOpBuYasI"
  },

  {
    id: 13,
    title: "The Marksman",
    year: 2021,
    duration: "1h 48min",
    age: "16+",
    rating: 4.8,
    reviews: 12,
    genre: ["Action", "Thriller"],
    poster: images.marksman,
    description:
      "A rancher protects a young boy from a violent cartel.",
    starring: ["Liam Neeson"],
    director: "Robert Lorenz",
    relatedMovies: [4, 1],
    movie:"https://www.youtube.com/embed/lEBPNi4bEbc"
  },

  {
    id: 14,
    title: "No Man's Land",
    year: 2021,
    duration: "1h 54min",
    age: "16+",
    rating: 4.8,
    reviews: 12,
    genre: ["Drama", "Thriller"],
    poster: images.mansland,
    description:
      "A man crosses borders in search of justice after a tragic loss.",
    starring: ["Jake Allyn"],
    director: "Conor Allyn",
    relatedMovies: [2, 6],
    movie:"https://www.youtube.com/embed/4oF92lXFpTM"
  },
];

