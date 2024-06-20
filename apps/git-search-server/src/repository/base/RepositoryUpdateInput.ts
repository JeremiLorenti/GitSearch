/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommitWhereUniqueInput } from "../../commit/base/CommitWhereUniqueInput";
import {
  ValidateNested,
  IsOptional,
  IsDate,
  IsString,
  IsInt,
} from "class-validator";
import { Type } from "class-transformer";
import { OwnerWhereUniqueInput } from "../../owner/base/OwnerWhereUniqueInput";
import { TagWhereUniqueInput } from "../../tag/base/TagWhereUniqueInput";

@InputType()
class RepositoryUpdateInput {
  @ApiProperty({
    required: false,
    type: () => CommitWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => CommitWhereUniqueInput)
  @IsOptional()
  @Field(() => CommitWhereUniqueInput, {
    nullable: true,
  })
  commit?: CommitWhereUniqueInput | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  dateAdded?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  description?: string | null;

  @ApiProperty({
    required: false,
  })
  @IsDate()
  @Type(() => Date)
  @IsOptional()
  @Field(() => Date, {
    nullable: true,
  })
  lastCommit?: Date | null;

  @ApiProperty({
    required: false,
    type: String,
  })
  @IsString()
  @IsOptional()
  @Field(() => String, {
    nullable: true,
  })
  name?: string | null;

  @ApiProperty({
    required: false,
    type: () => OwnerWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => OwnerWhereUniqueInput)
  @IsOptional()
  @Field(() => OwnerWhereUniqueInput, {
    nullable: true,
  })
  owner?: OwnerWhereUniqueInput | null;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsInt()
  @IsOptional()
  @Field(() => Number, {
    nullable: true,
  })
  stars?: number | null;

  @ApiProperty({
    required: false,
    type: () => TagWhereUniqueInput,
  })
  @ValidateNested()
  @Type(() => TagWhereUniqueInput)
  @IsOptional()
  @Field(() => TagWhereUniqueInput, {
    nullable: true,
  })
  tag?: TagWhereUniqueInput | null;
}

export { RepositoryUpdateInput as RepositoryUpdateInput };
