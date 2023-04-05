import { ObjectType, Field, Int } from "type-graphql";
import { Entity, BaseEntity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
@ObjectType()
export class Employee extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field(() => String)
  @Column()
  firstName: string;

  @Field(() => String)
  @Column()
  lastName: string;

  @Field(() => String)
  @Column()
  email: string;
}

// @Entity()
// @ObjectType()
// export class Employee extends BaseEntity {
//   @Field(() => ID)
//   @PrimaryGeneratedColumn()
//   id: string;

//   @Field(() => String)
//   @Column()
//   name: string;

//   @Field(() => String)
//   @Column()
//   author: string;

//   @Field(() => Boolean)
//   @Column({ default: false })
//   isPublished: boolean;
// }
