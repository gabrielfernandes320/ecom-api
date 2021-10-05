import {
    Body,
    Controller,
    Delete,
    Get,
    Param,
    Patch,
    Post,
    Query,
    UseGuards,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { TransformClassToPlain } from 'class-transformer';
import JwtAuthenticationGuard from '../../../auth/guards/JwtAuthenticationGuard';
import CreateProductDto from '../../dtos/CreateProductDto';
import ListProductDto from '../../dtos/ListProductDto';
import UpdateProductDto from '../../dtos/UpdateProductDto';
import CreateProductService from '../../services/CreateProductService';
import DeleteProductService from '../../services/DeleteProductService';
import ListProductService from '../../services/ListProductService';
import ShowProductService from '../../services/ShowProductService';
import UpdateProductService from '../../services/UpdateProductService';

@UseGuards(JwtAuthenticationGuard)
@ApiTags('Products')
@Controller({
    version: '1',
    path: 'products',
})
export class ProductsController {
    public constructor(
        private createProductService: CreateProductService,
        private deleteProductService: DeleteProductService,
        private listProductService: ListProductService,
        private showProductService: ShowProductService,
        private updateProductService: UpdateProductService,
    ) {}

    // @Permissions(ProductPermissions.Create)
    // @UseGuards(PermissionsGuard)
    @Post()
    public async create(@Body() createProductDto: CreateProductDto) {
        return await this.createProductService.execute(createProductDto);
    }

    // @Permissions(ProductPermissions.List)
    // @UseGuards(PermissionsGuard)
    @Get()
    public async findAll(@Query() query: ListProductDto) {
        return await this.listProductService.execute(query);
    }

    // @Permissions(ProductPermissions.Show)
    // @UseGuards(PermissionsGuard)
    @Get(':id')
    @TransformClassToPlain()
    public async findOne(@Param('id') id: string) {
        return await this.showProductService.execute(id);
    }

    // @Permissions(ProductPermissions.Update)
    // @UseGuards(PermissionsGuard)
    @Patch(':id')
    public async update(
        @Param('id') id: string,
        @Body() updateProductDto: UpdateProductDto,
    ) {
        return await this.updateProductService.execute(id, updateProductDto);
    }

    // @Permissions(ProductPermissions.Delete)
    // @UseGuards(PermissionsGuard)
    @Delete(':id')
    public async remove(@Param('id') id: string) {
        return await this.deleteProductService.execute(id);
    }
}
