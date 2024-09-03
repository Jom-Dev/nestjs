import { IsEnum, MinLength } from "class-validator";

export class CreateNinjaDto {
    @MinLength(3)
    name: string;

    @IsEnum(['stars', 'enum'], { message : 'please choose correct weapon!' })
    weapon: 'stars | nunchucks';
}