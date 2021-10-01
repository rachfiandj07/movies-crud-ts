import { SQLRepository } from 'rey-common';
import { MoviesProperties } from '../../entity/models/movies';
import MoviesRepository from '../movies_repository';

export class MoviesRepositoryImpl extends SQLRepository<MoviesProperties> implements MoviesRepository {
    public constructor() {
        super('Movies');
    }
}

export default MoviesRepositoryImpl;
