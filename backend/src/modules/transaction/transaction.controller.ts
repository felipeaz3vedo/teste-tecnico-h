import {
  Controller,
  FileTypeValidator,
  Get,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  Query,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UploadTransactionsService } from './services/upload-transactions.service';

import { AuthGuard } from 'src/guards/auth.guard';
import { GetAllTransactionsService } from './services/get-all-transactions.service';

@Controller('transactions')
export class TransactionController {
  constructor(
    private readonly uploadTransactionsService: UploadTransactionsService,
    private readonly getAllTransactionsService: GetAllTransactionsService
  ) {}

  @Get()
  @UseGuards(AuthGuard)
  async getAll(@Query('seller') seller?: string) {
    const transactions = this.getAllTransactionsService.execute(seller);

    return transactions;
  }

  @Post('/upload')
  @UseGuards(AuthGuard)
  @UseInterceptors(FileInterceptor('file'))
  async upload(
    @UploadedFile(
      new ParseFilePipe({
        validators: [
          new MaxFileSizeValidator({ maxSize: 20 * 1024 * 1024 }), // 20mb
          new FileTypeValidator({ fileType: 'text/plain' }) // txt
        ]
      })
    )
    file: Express.Multer.File
  ) {
    await this.uploadTransactionsService.execute(file);
  }
}
