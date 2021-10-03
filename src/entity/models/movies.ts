import { BaseProps } from 'rey-common';
import { AuthorProperties } from './author';
export interface MoviesProperties extends BaseProps {
    movies_id: number;
    author_id: number;
    movies_name: string;
    content: string;
    author?: AuthorProperties[];
}