import { Resolver, Query, Mutation, Args, Int, Arg } from "type-graphql";
import { Employee } from "../entities/Employee";
import { GetEmployeeDetails } from "./Input";

@Resolver(Employee)
export class EmployeeResolver {
  @Query(() => [Employee])
  async employee() {
    return await Employee.find();
  }

  @Mutation(() => Boolean)
  async insertEmployee(
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string
  ) {
    const employeeInsert = await Employee.save({
      firstName: firstName,
      lastName: lastName,
      email: email,
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });

    return employeeInsert;
  }

  @Mutation(() => Boolean)
  async deleteEmployee(@Arg("id", () => Int) id: number) {
    console.log("this is id ", id);
    const employeeDelete = await Employee.delete(id);

    return employeeDelete.affected! > 0;
  }

  @Mutation(() => Boolean)
  async updateEmployee(
    @Arg("id", () => Int) id: number,
    @Arg("firstName") firstName: string,
    @Arg("lastName") lastName: string,
    @Arg("email") email: string
  ) {
    const employeeUpdate = await Employee.update(id, {
      firstName: firstName,
      lastName: lastName,
      email: email,
    })
      .then(() => {
        return true;
      })
      .catch(() => {
        return false;
      });

    return employeeUpdate;
  }
}
