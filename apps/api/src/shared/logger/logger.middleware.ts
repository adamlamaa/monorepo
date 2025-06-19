import { Injectable, Logger, NestMiddleware } from "@nestjs/common"

import { NextFunction, Request, Response } from "express"

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name)

  use(req: Request, res: Response, next: NextFunction) {
    if (!["/favicon.ico"].includes(req.baseUrl)) {
      this.logger.log(`${req.method} ${req.baseUrl}`)
    }

    next()
  }
}
