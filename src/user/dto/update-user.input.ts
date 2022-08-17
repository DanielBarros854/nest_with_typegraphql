import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType, OmitType } from '@nestjs/graphql';

@InputType()
export class UpdateUserInput extends PartialType(
  OmitType(CreateUserInput, ['password'] as const),
) {
  @Field(() => Int, { description: 'User id to update' })
  id: number;
}
