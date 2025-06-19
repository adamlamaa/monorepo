import * as winston from "winston"
import { Format } from "logform"
import { Injectable } from "@nestjs/common"
import {
  utilities as nestWinstonModuleUtilities,
  WinstonModuleOptions,
  WinstonModuleOptionsFactory,
} from "nest-winston"
import envTyped from "../envTyped"

@Injectable()
export class LoggerService implements WinstonModuleOptionsFactory {
  constructor() {}

  createWinstonModuleOptions(): WinstonModuleOptions {
    return {
      level: envTyped.logLevel,
      defaultMeta: { service: "monorepo" },
      transports: [
        new winston.transports.Console({
          format: this.formatFn(),
        }),
      ],
    }
  }

  /**
   * Select the format for log.
   * It will be JSON in production and a nicer pretty print for development.
   */
  formatFn(): Format {
    if (envTyped.nodeEnv === "production") {
      return winston.format.json()
    } else {
      return winston.format.combine(
        winston.format.timestamp(),
        winston.format.ms(),
        nestWinstonModuleUtilities.format.nestLike("monorepo", {
          colors: true,
          prettyPrint: true,
          processId: false,
          appName: false,
        }),
      )
    }
  }
}
