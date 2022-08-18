import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import 'dotenv/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT);
  console.log(
    `Server is running at: http://localhost:${process.env.PORT}/graphql`,
  );
}
bootstrap();
