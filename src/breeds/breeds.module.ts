import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BreedsService } from './breeds.service';
import { BreedsController } from './breeds.controller';
import { Breed } from './entities/breed.entity';

@Module({
  controllers: [BreedsController],
  providers: [BreedsService],
  imports: [TypeOrmModule.forFeature([Breed])],
  exports: [TypeOrmModule],
})
export class BreedsModule {}
