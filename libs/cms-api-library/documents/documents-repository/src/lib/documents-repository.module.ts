import { Module } from '@nestjs/common';
import { PrismaClient } from '@prisma/client';
import { DocumentsRepository } from './documents-repository';

@Module({
  controllers: [],
  providers: [PrismaClient, DocumentsRepository],
  exports: [DocumentsRepository],
})
export class DocumentsRepositoryModule {}
