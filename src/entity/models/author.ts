import { BaseProps } from 'rey-common';
import { MoviesProperties } from './movies';

export interface AuthorProperties extends BaseProps {
    author_id: number;
    author_name: string;

    movies?: MoviesProperties[];
}
