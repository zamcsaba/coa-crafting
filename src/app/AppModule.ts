import { Module } from '@nestjs/common';
import { AppController } from './AppController';
import { AppService } from './AppService';
import { TypeOrmModule } from '@nestjs/typeorm';

// Main module
@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'sqlite',
            database: 'data/db.sqlite',
            synchronize: true,
            migrations: ['dist/migrations/*.js'],
            cli: {
                migrationsDir: 'migrations',
            },
            autoLoadEntities: true,
            entities: ['dist/Entities/*.{ts,.js}'],
        }),
    ],
    controllers: [AppController],
    providers: [AppService],
})
export class AppModule {
}
