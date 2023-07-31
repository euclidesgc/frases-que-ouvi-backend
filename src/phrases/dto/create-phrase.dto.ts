import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreatePhraseDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(1024)
    phrase: string;

    @ApiProperty()
    @IsOptional()
    @MinLength(10)
    @MaxLength(1024)
    context: string;

    @ApiProperty()
    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(64)
    author: string;

    @ApiProperty()
    @IsOptional()
    @IsNumber()
    @Min(0)
    likes: number;
}