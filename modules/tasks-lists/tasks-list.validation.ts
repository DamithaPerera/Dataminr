import Joi from "joi";
import {NextFunction, Request, Response} from 'express';

/**
 * validate taskBody
 * @param req
 * @param res
 * @param next
 */
export const taskBody = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        title: Joi.string().required().label('Title Is required'),
        taskListId: Joi.number().required().label('TaskListId Is required'),
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};

/**
 * validate taskListBody
 * @param req
 * @param res
 * @param next
 */
export const taskListBody = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        title: Joi.string().required().label('Title Is required'),
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};
