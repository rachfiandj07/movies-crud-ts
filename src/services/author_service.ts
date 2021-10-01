import { Service } from 'rey-common';
import { AuthorProperties } from '../entity/models/author';

interface AuthorService extends Service {
    getAuthor(): Promise<AuthorProperties[]>
    postAuthor(author_name: string): Promise<AuthorProperties>
    getAuthorById(author_id: number): Promise<AuthorProperties>
    // deleteAuthor(id: number): Promise<AuthorProperties>
}

export default AuthorService;
