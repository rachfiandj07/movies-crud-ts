import { SQLRepository } from 'rey-common';
import { AuthorProperties } from '../entity/models/author';

export type AuthorRepository = SQLRepository<AuthorProperties>

export default AuthorRepository;