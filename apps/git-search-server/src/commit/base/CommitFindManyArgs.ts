/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { CommitWhereInput } from "./CommitWhereInput";
import { IsOptional, ValidateNested, IsInt } from "class-validator";
import { Type } from "class-transformer";
import { CommitOrderByInput } from "./CommitOrderByInput";

@ArgsType()
class CommitFindManyArgs {
  @ApiProperty({
    required: false,
    type: () => CommitWhereInput,
  })
  @IsOptional()
  @ValidateNested()
  @Field(() => CommitWhereInput, { nullable: true })
  @Type(() => CommitWhereInput)
  where?: CommitWhereInput;

  @ApiProperty({
    required: false,
    type: [CommitOrderByInput],
  })
  @IsOptional()
  @ValidateNested({ each: true })
  @Field(() => [CommitOrderByInput], { nullable: true })
  @Type(() => CommitOrderByInput)
  orderBy?: Array<CommitOrderByInput>;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  skip?: number;

  @ApiProperty({
    required: false,
    type: Number,
  })
  @IsOptional()
  @IsInt()
  @Field(() => Number, { nullable: true })
  @Type(() => Number)
  take?: number;
}

export { CommitFindManyArgs as CommitFindManyArgs };
