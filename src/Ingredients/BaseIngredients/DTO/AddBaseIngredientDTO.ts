import { IsString } from 'class-validator';

export class AddBaseIngredientDTO {
    @IsString()
    name: string;
}