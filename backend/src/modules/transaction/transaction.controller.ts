import {
  Controller,
  FileTypeValidator,
  MaxFileSizeValidator,
  ParseFilePipe,
  Post,
  UploadedFile,
  UseGuards,
  UseInterceptors
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';

import { UploadTransactionsService } from './services/upload-transactions.service';

import { AuthGuard } from 'src/guards/auth.guard';

@Controller('transaction')
export class TransactionController {
  constructor(
    private readonly uploadTransactionsService: UploadTransactionsService
  ) {}

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
