import { Body, Controller, Patch, Req, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import JwtAuthenticationGuard from '../../../auth/guards/JwtAuthenticationGuard';
import UpdateItemDto from '../../dtos/UpdateItemDto';
import UpdateItemService from '../../services/UpdateItemService';

@UseGuards(JwtAuthenticationGuard)
@ApiTags('Carts')
@Controller({
    version: '1',
    path: 'carts',
})
export class CartsController {
    public constructor(private updateItemService: UpdateItemService) {}

    @Patch('item')
    public async updateCartItem(
        @Body() updateItemDto: UpdateItemDto,
        @Req() request: any,
    ) {
        return await this.updateItemService.execute(
            'd519a534-3f51-422b-b344-505260bdfa00',
            updateItemDto,
        );
    }
}
