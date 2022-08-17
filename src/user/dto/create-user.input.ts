import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'New user name' })
  name: string;

  @Field({ description: 'New user password' })
  password: string;
}
