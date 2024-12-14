import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ConfigModule } from '@nestjs/config';

async function bootstrap() {
  await ConfigModule.envVariablesLoaded;

  const app = await NestFactory.create(AppModule);

  app.enableCors({
    origin: ['http://localhost:4200', 'http://172.23.166.15:4200'],
    methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
    credentials: true,
  });

  const config = new DocumentBuilder()
    .setTitle('Documentation')
    .setDescription('Backend')
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  const swagger = 'swagger';

  SwaggerModule.setup(swagger, app, documentFactory);

  const port = process.env.PORT || 3000;

  await app.listen(port);

  return { port, swagger };
}

bootstrap().then(({ port, swagger }) => {
  console.log(`Application is running on http://localhost:${port}`);
  console.log(`Swagger available at http://localhost:${port}/${swagger}`);
});
