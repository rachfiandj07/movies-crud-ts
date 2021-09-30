import * as Joi from 'joi';
import { IObject } from 'rey-common';

export const SCHEME: IObject<Joi.ObjectSchema> = {
    CREATE_MOVIES: Joi.object({
        body: Joi.object({
            author_id: Joi.number().required(),
            movies_name: Joi.string().min(4).required(),
            content: Joi.string().min(4).max(100).required()
        }).required()
    }),
    UPDATE_MOVIES: Joi.object({
        body: Joi.object({
            author_id: Joi.number().optional(),
            movies_name: Joi.string().min(4).optional(),
            content: Joi.string().min(4).max(100).optional()
        }).required(),
        params: Joi.object({
            movies_id: Joi.number().required()
        }).required()
    }),
    CREATE_AUTHOR: Joi.object({
        body: Joi.object({
            author_name: Joi.string().min(4).max(50).required(),
        }).required()
    }),
    UPDATE_AUTHOR: Joi.object({
        body: Joi.object({
            author_name: Joi.string().min(4).max(50).optional(),
        }).required(),
        params: Joi.object({
            author_id: Joi.number().required()
        }).required()
    })
};
