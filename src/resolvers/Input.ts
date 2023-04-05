import { ArgsType, Field, Int } from "type-graphql";

@ArgsType()
export class GetEmployeeDetails {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}
