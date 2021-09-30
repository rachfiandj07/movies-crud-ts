export interface UpdateMoviesRequest {
    body: {
        author_id?: number;
        movies_name?: string;
        content?: string;
    };
    query: Record<string, unknown>;
    params: {
        movies_id: string;
    };
}

export interface UpdateMoviesResponse {
    movie_id: string | number;
}

export interface UpdateAuthorRequest {
    body: {
        author_name?: string;
    };
    query: Record<string, unknown>;
    params: {
        author_id: string;
    };
}

export interface UpdateAuthorResponse {
    author_id: string | number;
}
