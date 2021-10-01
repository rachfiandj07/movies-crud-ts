import { Service } from 'rey-common';
import { AuthorProperties } from '../entity/models/author';

interface AuthorService extends Service {
    getAuthor(): Promise<AuthorProperties>
    getAuthorById(id: number): Promise<AuthorProperties>
    postAuthor(): Promise<AuthorProperties>
    deleteAuthor(id: number): Promise<AuthorProperties>
}

export default AuthorService;
