import { Controller as BaseController, RequestData, Context } from 'rey-common';
import { API_ROUTE } from '../entity/constant/api';
import AuthorServiceImpl from 'src/services/impl/author_service_impl';

export default class AuthorController extends BaseController {
    public constructor(
        private authorRepository: AuthorServiceImpl
    ) {
        super({ path: API_ROUTE.AUTHOR });
    }

    public async getAuthorList(data: RequestData, context: Context): Promise<any> {
        const author = await this.authorRepository.getAuthor();

        return author;
    }

    public setRoutes(): void {
        this.addRoute('get', '/', this.getAuthorList.bind(this));
    }
}
