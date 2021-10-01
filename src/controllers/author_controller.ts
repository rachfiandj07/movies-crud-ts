import { Controller as BaseController, RequestData, Context } from 'rey-common';
import { API_ROUTE } from '../entity/constant/api';
import AuthorServiceImpl from 'src/services/impl/author_service_impl';
import { SCHEME } from '../entity/validation/common';
export default class AuthorController extends BaseController {
    public constructor(
        private authorService: AuthorServiceImpl
    ) {
        super({ path: API_ROUTE.AUTHOR });
    }

    public async getAuthorList(data: RequestData, context: Context): Promise<any> {
        const author = await this.authorService.getAuthor();

        return author;
    }

    public async postAuthor(data: RequestData, context: Context): Promise<any> {
        const author = await this.authorService.postAuthor(data.body.author_name);

        return author;
    }

    public async getAuthorId(data: RequestData, context: Context): Promise<any> {
        const author = await this.authorService.getAuthorById(data.params.id);

        return author;
    }

    public setRoutes(): void {
        this.addRoute('get', '/', this.getAuthorList.bind(this));
        this.addRoute('get', '/:id', this.getAuthorId.bind(this));
        this.addRoute('post', '/', this.postAuthor.bind(this), { validate: SCHEME.CREATE_AUTHOR });
    }
}
