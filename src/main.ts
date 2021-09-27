import { ValidationPipe, VersioningType } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cookieParser from 'cookie-parser';
import { AppModule } from './AppModule';

async function bootstrap() {
    const app = await NestFactory.create(AppModule, {
        cors: { credentials: true, origin: true },
    });

    app.useGlobalPipes(new ValidationPipe({ transform: true }));
    app.use(cookieParser());
    app.enableVersioning({
        type: VersioningType.URI,
    });
    app.setGlobalPrefix('api');

    const config = new DocumentBuilder()
        .setTitle('Nestjs Template ')
        .setDescription('A template to start Nestjs API`s')
        .setVersion('1.0')
        .build();
    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);

    await app.listen(3001);
}
bootstrap();
