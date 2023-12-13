import { Module } from '@nestjs/common';
import { AuthModule } from 'auth/auth.module';
import { ProductModule } from 'product/product.module';
import { UserModule } from 'user/user.module';
import { PrismaModule } from './prisma/prisma.module';


@Module({
  imports: [AuthModule, UserModule, ProductModule, PrismaModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
