import type { ResourceType } from "../types/ResourceType";

export const mockData: ResourceType[] = [
  {
    _id: "1",
    title: "Nest JS",
    url: "https://nestjs.com/",
    category: "Backend ",
    upVotes: 15,
    downVotes: 2,
  },
  {
    _id: "2",
    title: "Tailwind ",
    url: "https://tailwindcss.com/docs",
    category: "CSS Frameworks",
    upVotes: 25,
    downVotes: 1,
  },
  {
    _id: "3",
    title: "React js",
    url: "https://react.dev/",
    category: "Frontend ",
    upVotes: 30,
    downVotes: 0,
  },
  {
    _id: "4",
    title: "Node js",
    url: "https://nodejs.org/en",
    category: "Backend",
    upVotes: 40,
    downVotes: 5,
  },
];
