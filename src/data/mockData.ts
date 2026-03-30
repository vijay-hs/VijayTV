export interface Movie {
  id: number;
  title: string;
  desc: string;
  image: string;
  bg: string;
  video: string;
}

export interface Category {
  id: string;
  title: string;
  items: Movie[];
}

const posters = {
  dune: 'https://picsum.photos/id/29/800/450',
  dunebg: 'https://picsum.photos/id/29/1920/1080',
  oppenheimer: 'https://picsum.photos/id/43/800/450',
  oppenheimerbg: 'https://picsum.photos/id/43/1920/1080',
  spider: 'https://picsum.photos/id/49/800/450',
  spiderbg: 'https://picsum.photos/id/49/1920/1080',
  batman: 'https://picsum.photos/id/54/800/450',
  batmanbg: 'https://picsum.photos/id/54/1920/1080',
  interstellar: 'https://picsum.photos/id/65/800/450',
  interstellarbg: 'https://picsum.photos/id/65/1920/1080',
  inception: 'https://picsum.photos/id/74/800/450',
  inceptionbg: 'https://picsum.photos/id/74/1920/1080',
  matrix: 'https://picsum.photos/id/91/800/450',
  matrixbg: 'https://picsum.photos/id/91/1920/1080'
};

export const mockMovies: Movie[] = [
  { id: 1, title: "Bigg Boss Kannada", desc: "The biggest reality show in Karnataka, featuring celebrity contestants and dramatic challenges.", image: posters.dune, bg: posters.dunebg, video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 2, title: "Majaa Talkies", desc: "A comedy sketch show with popular Kannada comedians delivering laughter and satire.", image: posters.oppenheimer, bg: posters.oppenheimerbg, video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 3, title: "Kannadathi", desc: "A popular family drama series showcasing cultural values and relationships in Karnataka.", image: posters.spider, bg: posters.spiderbg, video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 4, title: "Jothe Jotheyali", desc: "Romantic drama series focusing on love, friendship, and societal challenges.", image: posters.batman, bg: posters.batmanbg, video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 5, title: "Neena Kanda", desc: "A thrilling investigative series delving into mysteries and crime stories.", image: posters.interstellar, bg: posters.interstellarbg, video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 6, title: "Majaa Talkies Special", desc: "Special episodes featuring celebrity guests and unique comedy sketches.", image: posters.inception, bg: posters.inceptionbg, video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" },
  { id: 7, title: "Sankranti Specials", desc: "Festive special programming celebrating the Sankranti festival with music and dance.", image: posters.matrix, bg: posters.matrixbg, video: "https://sample-videos.com/video123/mp4/720/big_buck_bunny_720p_1mb.mp4" }
];

export const mockCategories: Category[] = [
  { id: 'trending', title: 'Trending Reality Shows', items: [...mockMovies].sort(() => 0.5 - Math.random()) },
  { id: 'top-serials', title: 'Top Fiction Serials', items: [...mockMovies].sort(() => 0.5 - Math.random()) },
  { id: 'continue', title: 'Continue Watching', items: [...mockMovies].slice(0,3) },
  { id: 'specials', title: 'Vijay TV Specials', items: [...mockMovies].sort(() => 0.5 - Math.random()) }
];
