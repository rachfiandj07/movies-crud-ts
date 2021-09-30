import { BaseProps } from 'rey-common';

export interface MoviesProperties extends BaseProps {
    author_id: number;
    movies_name: string;
    content: string;
}