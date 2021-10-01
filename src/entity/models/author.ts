import { BaseProps } from 'rey-common';
import { MoviesProperties } from './movies';

export interface UserProperties extends BaseProps {
    author_id: number;
    author_name: string;

    movies?: MoviesProperties[];
}
