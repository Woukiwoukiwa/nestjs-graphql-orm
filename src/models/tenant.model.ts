import { Field, InputType, ObjectType } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@ObjectType()
@Entity({ name: 'tenant' })
export class TenantModel {
    @Field()
    @PrimaryGeneratedColumn('uuid')
    @ApiProperty({
        description: 'Id of tenant',
    })
    id: string;

    @Field()
    @Column('text', { nullable: false })
    @ApiProperty()
    name: string;

    @Field()
    @Column('bool', { nullable: false })
    @ApiProperty()
    active: boolean;
}

@InputType()
export class TenantInput{
    @Field()
    id: string;
    @Field()
    name: string;
    @Field()
    active: boolean;
}