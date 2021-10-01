import { SQLRepository } from 'rey-common';
import { AuthorProperties } from '../../entity/models/author';
import { AuthorRepository } from '../author_repository';

export class AuthorRepositoryImpl extends SQLRepository<AuthorProperties> implements AuthorRepository {
    public constructor() {
        super('Author');
    }
}

export default AuthorRepositoryImpl;
