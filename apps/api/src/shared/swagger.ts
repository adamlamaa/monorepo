import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger"
import { INestApplication } from "@nestjs/common"

export const configureSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle("Monorepo API")
    .setDescription("Monorepo API documentation")
    .setVersion("1.0")
    .build()

  const documentFactory = () => SwaggerModule.createDocument(app, config)
  SwaggerModule.setup("api", app, documentFactory)
}
