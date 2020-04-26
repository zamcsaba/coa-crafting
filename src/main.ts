import { NestFactory } from '@nestjs/core';
import { AppModule } from './app/AppModule';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';

// Asynchronous bootstrap function
async function bootstrap() {
  // Create the application from the main module
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  // Initialize front-end templating engine
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  app.setViewEngine('pug');

  // Start the application listening on port 3000 (http://localhost:3000)
  await app.listen(3000);
}

// Run the app
bootstrap();
