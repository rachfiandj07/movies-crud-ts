import test from 'ava';
import * as sinon from 'sinon';
import AuthorServiceImpl from '../../src/services/impl/author_service_impl';
import AuthorRepositoryImpl from '../../src/repositories/impl/author_repository_impl';
import { HttpError } from 'rey-common';

test.beforeEach('Initialize New Sandbox Before Each Test', (t: any): void => {
    t.context.sandbox = sinon.createSandbox();
});

test.afterEach.always('Restore Sandbox and Configuration After Each Test', (t: any): void => {
    t.context.sandbox.restore();
});

test.serial('should return author data', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const author = {
        author_id: 1,
        author_name: 'naufal',
        createdAt: '',
        updatedAt: ''
    };

    const mockRepository = t.context.sandbox.mock(authorRepository).expects('findAll').resolves(author);

    await authorService.getAuthor()
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, author);
        });
});

test.serial('should success post author data', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const author = {
        author_name: 'naufal',
    };

    const mockRepository = t.context.sandbox.mock(authorRepository).expects('create').resolves(author);

    await authorService.postAuthor(author.author_name)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, author);
        });
});

test.serial('should return author data by id', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const author = {
        author_id: 1,
        author_name: 'naufal',
        createdAt: '',
        updatedAt: ''
    };

    const mockRepository = t.context.sandbox.mock(authorRepository).expects('findOne').resolves(author);

    await authorService.getAuthorById(author.author_id)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, author);
        });
});

test.serial('should return null author data by id', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);

    const mockRepository = t.context.sandbox.mock(authorRepository).expects('findOne').resolves(null);

    await authorService.getAuthorById(2)
        .then(() => {
            t.fail();
        })
        .catch(err => {
            t.true(mockRepository.called);
            t.true(err instanceof HttpError.NotFoundError);
        });
});

test.serial('should return true data by id', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const author = {
        author_id: 1,
    };

    const mockRepository = t.context.sandbox.mock(authorRepository).expects('delete').resolves(true);

    await authorService.deleteAuthor(author.author_id)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, true);
        });
});

test.serial('should return id by update data', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const author = {
        author_id: 1,
        author_name: 'chupatkai'
    };

    const mockRepository = t.context.sandbox.mock(authorRepository).expects('update').resolves({author_id:1});

    await authorService.updateAuthorById(author.author_id, author.author_name)
        .then(response => {
            t.true(mockRepository.called);
            t.deepEqual(response, {author_id:1});
        });
});
