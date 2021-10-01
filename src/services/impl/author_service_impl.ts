import { HttpError, Service } from 'rey-common';
import AuthorRepository from '../../repositories/author_repository';
import AuthorService from '../author_service';
import { AuthorProperties } from '../../entity/models/author';

export class AuthorServiceImpl extends Service implements AuthorService {

    constructor(
        private authorRepository: AuthorRepository
    ){
        super();
    }

    public async getAuthor(): Promise<AuthorProperties[]> {
        const author = await this.authorRepository.findAll({}, {});

        return author;
    }
}

export default AuthorServiceImpl;
