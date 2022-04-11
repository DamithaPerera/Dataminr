import Joi from "joi";
import {NextFunction, Request, Response} from 'express';

/**
 * Validate taskBody
 * @param req
 * @param res
 * @param next
 */
export const taskBody = (req: Request, res: Response, next: NextFunction) => {
    const schema = Joi.object({
        taskListId: Joi.number().required().label('taskListId Is required'),
        taskId: Joi.number().required().label('taskId Is required'),
    });

    const result = schema.validate(req.body);
    if (result.error) {
        console.log(result.error.message);
        res.status(422).send(result.error.message);
    } else {
        next()
    }
};
