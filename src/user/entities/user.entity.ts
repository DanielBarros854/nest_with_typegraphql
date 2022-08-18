import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field(() => Int, { description: 'User id' })
  id: number;

  @Field({ description: 'User name' })
  name: string;

  @Field({ description: 'User email' })
  email: string;

  password: string;
}
