import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class User {
  @Field({ description: 'User id' })
  id: string;

  @Field({ description: 'User name' })
  name: string;

  password: string;
}
