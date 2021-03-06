import test from 'ava';
import * as sinon from 'sinon';
import { RequestData, Context } from 'rey-common';
import AuthorController from '../../src/controllers/author_controller';
import AuthorServiceImpl from '../../src/services/impl/author_service_impl';
import AuthorRepositoryImpl from '../../src/repositories/impl/author_repository_impl';

test.beforeEach('Initialize New Sandbox Before Each Test', (t: any): void => {
    t.context.sandbox = sinon.createSandbox();
});

test.afterEach.always('Restore Sandbox and Configuration After Each Test', (t: any): void => {
    t.context.sandbox.restore();
});

test.serial('should return author data on controller', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const authorController = new AuthorController(authorService);
    const author = {
        author_id: 1,
        author_name: 'naufal',
        createdAt: '',
        updatedAt: ''
    };
    const context: Context = {
        request_id: '1',
        user_id: 2,
        email: 'naufal@go-jek.id',
        name: 'naufal',
        phone_number: '081212857166'
    };

    const data: RequestData = {
        query: {},
        params: {},
        body: {},
        files: {},
    };

    const mockRepository = t.context.sandbox.mock(authorService).expects('getAuthor').resolves(author);

    await authorController.getAuthorList(data, context)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, author);
        });
});

test.serial('should return post author data on controller', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const authorController = new AuthorController(authorService);
    const author = {
        author_id: 1,
        author_name: 'naufal',
        createdAt: '',
        updatedAt: ''
    };
    const context: Context = {
        request_id: '1',
        user_id: 2,
        email: 'naufal@go-jek.id',
        name: 'naufal',
        phone_number: '081212857166'
    };

    const data: RequestData = {
        query: {},
        params: {},
        body: {},
        files: {},
    };

    const mockRepository = t.context.sandbox.mock(authorService).expects('postAuthor').resolves(author);

    await authorController.postAuthor(data, context)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, author);
        });
});

test.serial('should return author data by id on controller', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const authorController = new AuthorController(authorService);
    const author = {
        author_id: 1,
        author_name: 'naufal',
        createdAt: '',
        updatedAt: ''
    };
    const context: Context = {
        request_id: '1',
        user_id: 2,
        email: 'naufal@go-jek.id',
        name: 'naufal',
        phone_number: '081212857166'
    };

    const data: RequestData = {
        query: {},
        params: {},
        body: {},
        files: {},
    };

    const mockRepository = t.context.sandbox.mock(authorService).expects('getAuthorById').resolves(author);

    await authorController.getAuthorId(data, context)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, author);
        });
});

test.serial('should return true by delete id on controller', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const authorController = new AuthorController(authorService);
    const author = {
        author_id: 1,
        author_name: 'naufal',
        createdAt: '',
        updatedAt: ''
    };
    const context: Context = {
        request_id: '1',
        user_id: 2,
        email: 'naufal@go-jek.id',
        name: 'naufal',
        phone_number: '081212857166'
    };

    const data: RequestData = {
        query: {},
        params: {},
        body: {},
        files: {},
    };

    const mockRepository = t.context.sandbox.mock(authorService).expects('deleteAuthor').resolves(author);

    await authorController.deleteAuthorId(data, context)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, author);
        });
});

test.serial('should return id author by update id on controller', async (t: any): Promise<void> => {
    const authorRepository = new AuthorRepositoryImpl();
    const authorService = new AuthorServiceImpl(authorRepository);
    const authorController = new AuthorController(authorService);
    const author = {
        author_id: 1,
    };
    const context: Context = {
        request_id: '1',
        user_id: 2,
        email: 'naufal@go-jek.id',
        name: 'naufal',
        phone_number: '081212857166'
    };

    const data: RequestData = {
        query: {},
        params: {},
        body: {},
        files: {},
    };

    const mockRepository = t.context.sandbox.mock(authorService).expects('updateAuthorById').resolves(author);

    await authorController.updateAuthorId(data, context)
        .then(response => {
            t.true(mockRepository.called);
            t.is(response, author);
        });
});
