import { ArgsType, ObjectType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";

@ArgsType()
@ObjectType("RepositoryFilterInputObject")
class RepositoryFilterInput {
    @Field(() => Number, {
        nullable: true
    })
    @ApiProperty({
        required: false,
        type: () => Number
    })
    @Type(() => Number)
    minStars?: number;
}

export { RepositoryFilterInput as RepositoryFilterInput };