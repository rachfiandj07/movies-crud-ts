import { App as BaseApp, SQLContext, RedisContext } from 'rey-common';
import AuthorController from './controllers/author_controller';
import AuthorRepositoryImpl from './repositories/impl/author_repository_impl';
import AuthorServiceImpl from './services/impl/author_service_impl';
class App extends BaseApp {
    public constructor(port: number) {
        super(port, false, true);
    }

    public async initProviders(): Promise<void> {
        SQLContext.initialize({
            connection_string: String(process.env.DB_CONNECTION_STRING),
            models_path: './database/models'
        });
    }

    public async initControllers(): Promise<void> {
        /** initiate services */
        const authorService = new AuthorServiceImpl(
            new AuthorRepositoryImpl()
        );

        /** Register Controller */
        this.addController(new AuthorController(authorService));

    }
}

export default App;
