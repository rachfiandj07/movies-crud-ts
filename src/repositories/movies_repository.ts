import { SQLRepository } from 'rey-common';
import { MoviesProperties } from '../entity/models/movies';

export type MoviesRepository = SQLRepository<MoviesProperties>

export default MoviesRepository;