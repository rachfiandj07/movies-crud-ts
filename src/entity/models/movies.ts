import { BaseProps } from 'rey-common';

export interface MoviesProperties extends BaseProps {
    movies_id: number;
    author_id: number;
    movies_name: string;
    content: string;
}