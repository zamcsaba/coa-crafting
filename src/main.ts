import { NestFactory } from '@nestjs/core';
import { AppModule } from './AppModule';

// Asynchronous bootstrap function
async function bootstrap() {
  // Create the application from the main module
  const app = await NestFactory.create(AppModule);
  // Start the application listening on port 3000 (http://localhost:3000)
  await app.listen(3000);
}

// Run the app
bootstrap();
