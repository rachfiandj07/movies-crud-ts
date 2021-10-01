import test from 'ava';
import * as sinon from 'sinon';
import AuthorServiceImpl from '../../src/services/impl/author_service_impl';
import AuthorRepositoryImpl from '../../src/repositories/impl/author_repository_impl';

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
