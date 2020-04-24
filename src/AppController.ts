import { Controller, Get, Render } from '@nestjs/common';

// Main application controller
@Controller()
export class AppController {
  // AppController object constructor (called by the framework itself)
  constructor() {
  }

  @Get('/')
  @Render('index')
  index() {
    return {
      message: 'Welcome to CoA Crafting Helper!',
    };
  }
}
