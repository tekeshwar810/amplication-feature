import { Injectable, NestMiddleware } from "@nestjs/common";
import { Request,Response,NextFunction } from 'express';

@Injectable()
export class UserMiddelware implements NestMiddleware{
    use(req: Request, res: Response, next: NextFunction) {
      console.log('user get module middlware')
      next()
    }
}