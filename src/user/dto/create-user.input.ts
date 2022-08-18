import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserInput {
  @Field({ description: 'New user email' })
  email: string;

  @Field({ description: 'New user name', nullable: true })
  name?: string;

  @Field({ description: 'New user password' })
  password: string;
}
