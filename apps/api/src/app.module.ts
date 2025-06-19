import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common"
import { AppController } from "./app.controller"
import { AppService } from "./app.service"
import { SharedModule } from "./shared/shared.module"
import { UserModule } from "./user/user.module"
import { LoggerMiddleware } from "./shared/logger/logger.middleware"

@Module({
  imports: [SharedModule, UserModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes("*")
  }
}
