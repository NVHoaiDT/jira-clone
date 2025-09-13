import { FindOneOptions, BaseEntity } from 'typeorm';
import { Project, User, Issue, Comment } from 'entities';
import { EntityNotFoundError, BadUserInputError } from 'errors';
import { generateErrors } from 'utils/validation';

type EntityConstructor<T = BaseEntity> = (new () => T) &
  typeof BaseEntity & {
    validations?: any;
  };

// type EntityInstance = Project | User | Issue | Comment;

const entities: { [key: string]: EntityConstructor } = { Comment, Issue, Project, User };

export const findEntityOrThrow = async <T extends BaseEntity>(
  Constructor: EntityConstructor<T>,
  id: number | string,
  options?: Omit<FindOneOptions<T>, 'where'>,
): Promise<T> => {
  const instance = await Constructor.findOne({
    where: { id } as any,
    ...options,
  });

  if (!instance) {
    throw new EntityNotFoundError(Constructor.name);
  }

  return instance;
};

export const validateAndSaveEntity = async <T extends BaseEntity>(instance: T): Promise<T> => {
  const Constructor = entities[instance.constructor.name] as EntityConstructor;

  if (Constructor && 'validations' in Constructor) {
    const errorFields = generateErrors(instance, Constructor.validations);
    if (Object.keys(errorFields).length > 0) {
      throw new BadUserInputError({ fields: errorFields });
    }
  }

  return instance.save() as Promise<T>;
};

export const createEntity = async <T extends BaseEntity>(
  Constructor: EntityConstructor<T>,
  input: Partial<T>,
): Promise<T> => {
  const instance = Constructor.create(input as any);
  return validateAndSaveEntity(instance as T);
};

export const updateEntity = async <T extends BaseEntity>(
  Constructor: EntityConstructor<T>,
  id: number | string,
  input: Partial<T>,
): Promise<T> => {
  const instance = await findEntityOrThrow(Constructor, id);
  Object.assign(instance, input);
  return validateAndSaveEntity(instance);
};

export const deleteEntity = async <T extends BaseEntity>(
  Constructor: EntityConstructor<T>,
  id: number | string,
): Promise<T> => {
  const instance = await findEntityOrThrow(Constructor, id);
  await instance.remove();
  return instance;
};
