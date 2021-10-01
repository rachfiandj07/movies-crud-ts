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

    public async postAuthor(author_name: string): Promise<AuthorProperties> {
        const author = await this.authorRepository.create({author_name});

        return author;
    }

    public async getAuthorById(author_id: number): Promise<AuthorProperties> {
        const author = await this.authorRepository.findOne({author_id});
        if (!author) {
            throw new HttpError.NotFoundError('author not found', 'AUTHOR_NOT_FOUND');
        }
        return author;
    }
}

export default AuthorServiceImpl;
