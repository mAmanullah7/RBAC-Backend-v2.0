import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot(), // Add this to ensure .env is loaded
    MongooseModule.forRoot(process.env.MONGO_URI),
  ],
})
export class DatabaseModule {}