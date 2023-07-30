import { IsNotEmpty, IsNumber, IsOptional, IsString, MaxLength, Min, MinLength } from "class-validator";

export class CreatePhraseDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(1024)
    phrase: string;

    @IsOptional()
    @MinLength(10)
    @MaxLength(1024)
    context: string;

    @IsOptional()
    @IsString()
    @MinLength(3)
    @MaxLength(64)
    author: string;

    @IsOptional()
    @IsNumber()
    @Min(0)
    likes: number;
}
