import { NestFactory } from "@nestjs/core"
import { AppModule } from "./app.module"
import envTyped from "./shared/envTyped"
import { configureSwagger } from "./shared/swagger"

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  configureSwagger(app)
  await app.listen(envTyped.port)
}
void bootstrap()
