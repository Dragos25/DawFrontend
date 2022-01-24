import { Author } from "./author";
import { Publisher } from "./publisher";

export interface Book{
    id: string;
    name: string;
    genre: string;
    releaseDate: string;
    author: Author;
    publisher: Publisher;
}