
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Exam
 * 
 */
export type Exam = $Result.DefaultSelection<Prisma.$ExamPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Choice
 * 
 */
export type Choice = $Result.DefaultSelection<Prisma.$ChoicePayload>
/**
 * Model UserExamJoin
 * 
 */
export type UserExamJoin = $Result.DefaultSelection<Prisma.$UserExamJoinPayload>
/**
 * Model UserExamAnswer
 * 
 */
export type UserExamAnswer = $Result.DefaultSelection<Prisma.$UserExamAnswerPayload>
/**
 * Model UserExamAnswerChoice
 * 
 */
export type UserExamAnswerChoice = $Result.DefaultSelection<Prisma.$UserExamAnswerChoicePayload>

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.exam`: Exposes CRUD operations for the **Exam** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Exams
    * const exams = await prisma.exam.findMany()
    * ```
    */
  get exam(): Prisma.ExamDelegate<ExtArgs>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs>;

  /**
   * `prisma.choice`: Exposes CRUD operations for the **Choice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Choices
    * const choices = await prisma.choice.findMany()
    * ```
    */
  get choice(): Prisma.ChoiceDelegate<ExtArgs>;

  /**
   * `prisma.userExamJoin`: Exposes CRUD operations for the **UserExamJoin** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExamJoins
    * const userExamJoins = await prisma.userExamJoin.findMany()
    * ```
    */
  get userExamJoin(): Prisma.UserExamJoinDelegate<ExtArgs>;

  /**
   * `prisma.userExamAnswer`: Exposes CRUD operations for the **UserExamAnswer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExamAnswers
    * const userExamAnswers = await prisma.userExamAnswer.findMany()
    * ```
    */
  get userExamAnswer(): Prisma.UserExamAnswerDelegate<ExtArgs>;

  /**
   * `prisma.userExamAnswerChoice`: Exposes CRUD operations for the **UserExamAnswerChoice** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserExamAnswerChoices
    * const userExamAnswerChoices = await prisma.userExamAnswerChoice.findMany()
    * ```
    */
  get userExamAnswerChoice(): Prisma.UserExamAnswerChoiceDelegate<ExtArgs>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics 
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.0.1
   * Query Engine version: 5dbef10bdbfb579e07d35cc85fb1518d357cb99e
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    * 
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    * 
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   * 
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Exam: 'Exam',
    Question: 'Question',
    Choice: 'Choice',
    UserExamJoin: 'UserExamJoin',
    UserExamAnswer: 'UserExamAnswer',
    UserExamAnswerChoice: 'UserExamAnswerChoice'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.InternalArgs, clientOptions: PrismaClientOptions }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], this['params']['clientOptions']>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, ClientOptions = {}> = {
    meta: {
      modelProps: "user" | "exam" | "question" | "choice" | "userExamJoin" | "userExamAnswer" | "userExamAnswerChoice"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Exam: {
        payload: Prisma.$ExamPayload<ExtArgs>
        fields: Prisma.ExamFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ExamFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ExamFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findFirst: {
            args: Prisma.ExamFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ExamFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          findMany: {
            args: Prisma.ExamFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          create: {
            args: Prisma.ExamCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          createMany: {
            args: Prisma.ExamCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ExamCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>[]
          }
          delete: {
            args: Prisma.ExamDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          update: {
            args: Prisma.ExamUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          deleteMany: {
            args: Prisma.ExamDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ExamUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ExamUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ExamPayload>
          }
          aggregate: {
            args: Prisma.ExamAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateExam>
          }
          groupBy: {
            args: Prisma.ExamGroupByArgs<ExtArgs>
            result: $Utils.Optional<ExamGroupByOutputType>[]
          }
          count: {
            args: Prisma.ExamCountArgs<ExtArgs>
            result: $Utils.Optional<ExamCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Choice: {
        payload: Prisma.$ChoicePayload<ExtArgs>
        fields: Prisma.ChoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ChoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ChoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findFirst: {
            args: Prisma.ChoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ChoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          findMany: {
            args: Prisma.ChoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          create: {
            args: Prisma.ChoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          createMany: {
            args: Prisma.ChoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ChoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>[]
          }
          delete: {
            args: Prisma.ChoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          update: {
            args: Prisma.ChoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          deleteMany: {
            args: Prisma.ChoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ChoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.ChoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ChoicePayload>
          }
          aggregate: {
            args: Prisma.ChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateChoice>
          }
          groupBy: {
            args: Prisma.ChoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<ChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.ChoiceCountArgs<ExtArgs>
            result: $Utils.Optional<ChoiceCountAggregateOutputType> | number
          }
        }
      }
      UserExamJoin: {
        payload: Prisma.$UserExamJoinPayload<ExtArgs>
        fields: Prisma.UserExamJoinFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserExamJoinFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserExamJoinFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload>
          }
          findFirst: {
            args: Prisma.UserExamJoinFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserExamJoinFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload>
          }
          findMany: {
            args: Prisma.UserExamJoinFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload>[]
          }
          create: {
            args: Prisma.UserExamJoinCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload>
          }
          createMany: {
            args: Prisma.UserExamJoinCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserExamJoinCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload>[]
          }
          delete: {
            args: Prisma.UserExamJoinDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload>
          }
          update: {
            args: Prisma.UserExamJoinUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload>
          }
          deleteMany: {
            args: Prisma.UserExamJoinDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserExamJoinUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserExamJoinUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamJoinPayload>
          }
          aggregate: {
            args: Prisma.UserExamJoinAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserExamJoin>
          }
          groupBy: {
            args: Prisma.UserExamJoinGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserExamJoinGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserExamJoinCountArgs<ExtArgs>
            result: $Utils.Optional<UserExamJoinCountAggregateOutputType> | number
          }
        }
      }
      UserExamAnswer: {
        payload: Prisma.$UserExamAnswerPayload<ExtArgs>
        fields: Prisma.UserExamAnswerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserExamAnswerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserExamAnswerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload>
          }
          findFirst: {
            args: Prisma.UserExamAnswerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserExamAnswerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload>
          }
          findMany: {
            args: Prisma.UserExamAnswerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload>[]
          }
          create: {
            args: Prisma.UserExamAnswerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload>
          }
          createMany: {
            args: Prisma.UserExamAnswerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserExamAnswerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload>[]
          }
          delete: {
            args: Prisma.UserExamAnswerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload>
          }
          update: {
            args: Prisma.UserExamAnswerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload>
          }
          deleteMany: {
            args: Prisma.UserExamAnswerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserExamAnswerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserExamAnswerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerPayload>
          }
          aggregate: {
            args: Prisma.UserExamAnswerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserExamAnswer>
          }
          groupBy: {
            args: Prisma.UserExamAnswerGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserExamAnswerGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserExamAnswerCountArgs<ExtArgs>
            result: $Utils.Optional<UserExamAnswerCountAggregateOutputType> | number
          }
        }
      }
      UserExamAnswerChoice: {
        payload: Prisma.$UserExamAnswerChoicePayload<ExtArgs>
        fields: Prisma.UserExamAnswerChoiceFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserExamAnswerChoiceFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserExamAnswerChoiceFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload>
          }
          findFirst: {
            args: Prisma.UserExamAnswerChoiceFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserExamAnswerChoiceFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload>
          }
          findMany: {
            args: Prisma.UserExamAnswerChoiceFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload>[]
          }
          create: {
            args: Prisma.UserExamAnswerChoiceCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload>
          }
          createMany: {
            args: Prisma.UserExamAnswerChoiceCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserExamAnswerChoiceCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload>[]
          }
          delete: {
            args: Prisma.UserExamAnswerChoiceDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload>
          }
          update: {
            args: Prisma.UserExamAnswerChoiceUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload>
          }
          deleteMany: {
            args: Prisma.UserExamAnswerChoiceDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserExamAnswerChoiceUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          upsert: {
            args: Prisma.UserExamAnswerChoiceUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserExamAnswerChoicePayload>
          }
          aggregate: {
            args: Prisma.UserExamAnswerChoiceAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserExamAnswerChoice>
          }
          groupBy: {
            args: Prisma.UserExamAnswerChoiceGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserExamAnswerChoiceGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserExamAnswerChoiceCountArgs<ExtArgs>
            result: $Utils.Optional<UserExamAnswerChoiceCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
  }


  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userExamJoins: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExamJoins?: boolean | UserCountOutputTypeCountUserExamJoinsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserExamJoinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamJoinWhereInput
  }


  /**
   * Count Type ExamCountOutputType
   */

  export type ExamCountOutputType = {
    questions: number
    userExamJoins: number
  }

  export type ExamCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | ExamCountOutputTypeCountQuestionsArgs
    userExamJoins?: boolean | ExamCountOutputTypeCountUserExamJoinsArgs
  }

  // Custom InputTypes
  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ExamCountOutputType
     */
    select?: ExamCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ExamCountOutputType without action
   */
  export type ExamCountOutputTypeCountUserExamJoinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamJoinWhereInput
  }


  /**
   * Count Type QuestionCountOutputType
   */

  export type QuestionCountOutputType = {
    choices: number
    userExamAnswerChoices: number
  }

  export type QuestionCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choices?: boolean | QuestionCountOutputTypeCountChoicesArgs
    userExamAnswerChoices?: boolean | QuestionCountOutputTypeCountUserExamAnswerChoicesArgs
  }

  // Custom InputTypes
  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the QuestionCountOutputType
     */
    select?: QuestionCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
  }

  /**
   * QuestionCountOutputType without action
   */
  export type QuestionCountOutputTypeCountUserExamAnswerChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamAnswerChoiceWhereInput
  }


  /**
   * Count Type ChoiceCountOutputType
   */

  export type ChoiceCountOutputType = {
    userExamAnswerChoices: number
  }

  export type ChoiceCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExamAnswerChoices?: boolean | ChoiceCountOutputTypeCountUserExamAnswerChoicesArgs
  }

  // Custom InputTypes
  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ChoiceCountOutputType
     */
    select?: ChoiceCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ChoiceCountOutputType without action
   */
  export type ChoiceCountOutputTypeCountUserExamAnswerChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamAnswerChoiceWhereInput
  }


  /**
   * Count Type UserExamJoinCountOutputType
   */

  export type UserExamJoinCountOutputType = {
    userExamAnswers: number
  }

  export type UserExamJoinCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExamAnswers?: boolean | UserExamJoinCountOutputTypeCountUserExamAnswersArgs
  }

  // Custom InputTypes
  /**
   * UserExamJoinCountOutputType without action
   */
  export type UserExamJoinCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoinCountOutputType
     */
    select?: UserExamJoinCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserExamJoinCountOutputType without action
   */
  export type UserExamJoinCountOutputTypeCountUserExamAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamAnswerWhereInput
  }


  /**
   * Count Type UserExamAnswerCountOutputType
   */

  export type UserExamAnswerCountOutputType = {
    userExamAnswerChoices: number
  }

  export type UserExamAnswerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExamAnswerChoices?: boolean | UserExamAnswerCountOutputTypeCountUserExamAnswerChoicesArgs
  }

  // Custom InputTypes
  /**
   * UserExamAnswerCountOutputType without action
   */
  export type UserExamAnswerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerCountOutputType
     */
    select?: UserExamAnswerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserExamAnswerCountOutputType without action
   */
  export type UserExamAnswerCountOutputTypeCountUserExamAnswerChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamAnswerChoiceWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    lineUid: string | null
    displayName: string | null
    pictureUrl: string | null
    statusMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    lineUid: string | null
    displayName: string | null
    pictureUrl: string | null
    statusMessage: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    lineUid: number
    displayName: number
    pictureUrl: number
    statusMessage: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    lineUid?: true
    displayName?: true
    pictureUrl?: true
    statusMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    lineUid?: true
    displayName?: true
    pictureUrl?: true
    statusMessage?: true
    createdAt?: true
    updatedAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    lineUid?: true
    displayName?: true
    pictureUrl?: true
    statusMessage?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    lineUid: string
    displayName: string
    pictureUrl: string | null
    statusMessage: string | null
    createdAt: Date
    updatedAt: Date
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineUid?: boolean
    displayName?: boolean
    pictureUrl?: boolean
    statusMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userExamJoins?: boolean | User$userExamJoinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    lineUid?: boolean
    displayName?: boolean
    pictureUrl?: boolean
    statusMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    lineUid?: boolean
    displayName?: boolean
    pictureUrl?: boolean
    statusMessage?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExamJoins?: boolean | User$userExamJoinsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userExamJoins: Prisma.$UserExamJoinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      lineUid: string
      displayName: string
      pictureUrl: string | null
      statusMessage: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userExamJoins<T extends User$userExamJoinsArgs<ExtArgs> = {}>(args?: Subset<T, User$userExamJoinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly lineUid: FieldRef<"User", 'String'>
    readonly displayName: FieldRef<"User", 'String'>
    readonly pictureUrl: FieldRef<"User", 'String'>
    readonly statusMessage: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }

  /**
   * User.userExamJoins
   */
  export type User$userExamJoinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    where?: UserExamJoinWhereInput
    orderBy?: UserExamJoinOrderByWithRelationInput | UserExamJoinOrderByWithRelationInput[]
    cursor?: UserExamJoinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExamJoinScalarFieldEnum | UserExamJoinScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Exam
   */

  export type AggregateExam = {
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  export type ExamAvgAggregateOutputType = {
    passingScore: number | null
    questionCount: number | null
  }

  export type ExamSumAggregateOutputType = {
    passingScore: number | null
    questionCount: number | null
  }

  export type ExamMinAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    isQuestionOrderRandom: boolean | null
    isChoicesOrderRandom: boolean | null
    passingScore: number | null
    questionCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamMaxAggregateOutputType = {
    id: string | null
    code: string | null
    title: string | null
    isQuestionOrderRandom: boolean | null
    isChoicesOrderRandom: boolean | null
    passingScore: number | null
    questionCount: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ExamCountAggregateOutputType = {
    id: number
    code: number
    title: number
    isQuestionOrderRandom: number
    isChoicesOrderRandom: number
    passingScore: number
    questionCount: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ExamAvgAggregateInputType = {
    passingScore?: true
    questionCount?: true
  }

  export type ExamSumAggregateInputType = {
    passingScore?: true
    questionCount?: true
  }

  export type ExamMinAggregateInputType = {
    id?: true
    code?: true
    title?: true
    isQuestionOrderRandom?: true
    isChoicesOrderRandom?: true
    passingScore?: true
    questionCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamMaxAggregateInputType = {
    id?: true
    code?: true
    title?: true
    isQuestionOrderRandom?: true
    isChoicesOrderRandom?: true
    passingScore?: true
    questionCount?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ExamCountAggregateInputType = {
    id?: true
    code?: true
    title?: true
    isQuestionOrderRandom?: true
    isChoicesOrderRandom?: true
    passingScore?: true
    questionCount?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ExamAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exam to aggregate.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Exams
    **/
    _count?: true | ExamCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ExamAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ExamSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ExamMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ExamMaxAggregateInputType
  }

  export type GetExamAggregateType<T extends ExamAggregateArgs> = {
        [P in keyof T & keyof AggregateExam]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateExam[P]>
      : GetScalarType<T[P], AggregateExam[P]>
  }




  export type ExamGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ExamWhereInput
    orderBy?: ExamOrderByWithAggregationInput | ExamOrderByWithAggregationInput[]
    by: ExamScalarFieldEnum[] | ExamScalarFieldEnum
    having?: ExamScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ExamCountAggregateInputType | true
    _avg?: ExamAvgAggregateInputType
    _sum?: ExamSumAggregateInputType
    _min?: ExamMinAggregateInputType
    _max?: ExamMaxAggregateInputType
  }

  export type ExamGroupByOutputType = {
    id: string
    code: string
    title: string
    isQuestionOrderRandom: boolean
    isChoicesOrderRandom: boolean
    passingScore: number
    questionCount: number
    createdAt: Date
    updatedAt: Date
    _count: ExamCountAggregateOutputType | null
    _avg: ExamAvgAggregateOutputType | null
    _sum: ExamSumAggregateOutputType | null
    _min: ExamMinAggregateOutputType | null
    _max: ExamMaxAggregateOutputType | null
  }

  type GetExamGroupByPayload<T extends ExamGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ExamGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ExamGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ExamGroupByOutputType[P]>
            : GetScalarType<T[P], ExamGroupByOutputType[P]>
        }
      >
    >


  export type ExamSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore?: boolean
    questionCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    userExamJoins?: boolean | Exam$userExamJoinsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    code?: boolean
    title?: boolean
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore?: boolean
    questionCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["exam"]>

  export type ExamSelectScalar = {
    id?: boolean
    code?: boolean
    title?: boolean
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore?: boolean
    questionCount?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ExamInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    questions?: boolean | Exam$questionsArgs<ExtArgs>
    userExamJoins?: boolean | Exam$userExamJoinsArgs<ExtArgs>
    _count?: boolean | ExamCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ExamIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ExamPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Exam"
    objects: {
      questions: Prisma.$QuestionPayload<ExtArgs>[]
      userExamJoins: Prisma.$UserExamJoinPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      code: string
      title: string
      isQuestionOrderRandom: boolean
      isChoicesOrderRandom: boolean
      passingScore: number
      questionCount: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["exam"]>
    composites: {}
  }

  type ExamGetPayload<S extends boolean | null | undefined | ExamDefaultArgs> = $Result.GetResult<Prisma.$ExamPayload, S>

  type ExamCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ExamFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ExamCountAggregateInputType | true
    }

  export interface ExamDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Exam'], meta: { name: 'Exam' } }
    /**
     * Find zero or one Exam that matches the filter.
     * @param {ExamFindUniqueArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ExamFindUniqueArgs>(args: SelectSubset<T, ExamFindUniqueArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Exam that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ExamFindUniqueOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ExamFindUniqueOrThrowArgs>(args: SelectSubset<T, ExamFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Exam that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ExamFindFirstArgs>(args?: SelectSubset<T, ExamFindFirstArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Exam that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindFirstOrThrowArgs} args - Arguments to find a Exam
     * @example
     * // Get one Exam
     * const exam = await prisma.exam.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ExamFindFirstOrThrowArgs>(args?: SelectSubset<T, ExamFindFirstOrThrowArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Exams that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Exams
     * const exams = await prisma.exam.findMany()
     * 
     * // Get first 10 Exams
     * const exams = await prisma.exam.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const examWithIdOnly = await prisma.exam.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ExamFindManyArgs>(args?: SelectSubset<T, ExamFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Exam.
     * @param {ExamCreateArgs} args - Arguments to create a Exam.
     * @example
     * // Create one Exam
     * const Exam = await prisma.exam.create({
     *   data: {
     *     // ... data to create a Exam
     *   }
     * })
     * 
     */
    create<T extends ExamCreateArgs>(args: SelectSubset<T, ExamCreateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Exams.
     * @param {ExamCreateManyArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ExamCreateManyArgs>(args?: SelectSubset<T, ExamCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Exams and returns the data saved in the database.
     * @param {ExamCreateManyAndReturnArgs} args - Arguments to create many Exams.
     * @example
     * // Create many Exams
     * const exam = await prisma.exam.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Exams and only return the `id`
     * const examWithIdOnly = await prisma.exam.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ExamCreateManyAndReturnArgs>(args?: SelectSubset<T, ExamCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Exam.
     * @param {ExamDeleteArgs} args - Arguments to delete one Exam.
     * @example
     * // Delete one Exam
     * const Exam = await prisma.exam.delete({
     *   where: {
     *     // ... filter to delete one Exam
     *   }
     * })
     * 
     */
    delete<T extends ExamDeleteArgs>(args: SelectSubset<T, ExamDeleteArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Exam.
     * @param {ExamUpdateArgs} args - Arguments to update one Exam.
     * @example
     * // Update one Exam
     * const exam = await prisma.exam.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ExamUpdateArgs>(args: SelectSubset<T, ExamUpdateArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Exams.
     * @param {ExamDeleteManyArgs} args - Arguments to filter Exams to delete.
     * @example
     * // Delete a few Exams
     * const { count } = await prisma.exam.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ExamDeleteManyArgs>(args?: SelectSubset<T, ExamDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Exams
     * const exam = await prisma.exam.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ExamUpdateManyArgs>(args: SelectSubset<T, ExamUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Exam.
     * @param {ExamUpsertArgs} args - Arguments to update or create a Exam.
     * @example
     * // Update or create a Exam
     * const exam = await prisma.exam.upsert({
     *   create: {
     *     // ... data to create a Exam
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Exam we want to update
     *   }
     * })
     */
    upsert<T extends ExamUpsertArgs>(args: SelectSubset<T, ExamUpsertArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Exams.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamCountArgs} args - Arguments to filter Exams to count.
     * @example
     * // Count the number of Exams
     * const count = await prisma.exam.count({
     *   where: {
     *     // ... the filter for the Exams we want to count
     *   }
     * })
    **/
    count<T extends ExamCountArgs>(
      args?: Subset<T, ExamCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ExamCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ExamAggregateArgs>(args: Subset<T, ExamAggregateArgs>): Prisma.PrismaPromise<GetExamAggregateType<T>>

    /**
     * Group by Exam.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ExamGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ExamGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ExamGroupByArgs['orderBy'] }
        : { orderBy?: ExamGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ExamGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetExamGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Exam model
   */
  readonly fields: ExamFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Exam.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ExamClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    questions<T extends Exam$questionsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$questionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany"> | Null>
    userExamJoins<T extends Exam$userExamJoinsArgs<ExtArgs> = {}>(args?: Subset<T, Exam$userExamJoinsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Exam model
   */ 
  interface ExamFieldRefs {
    readonly id: FieldRef<"Exam", 'String'>
    readonly code: FieldRef<"Exam", 'String'>
    readonly title: FieldRef<"Exam", 'String'>
    readonly isQuestionOrderRandom: FieldRef<"Exam", 'Boolean'>
    readonly isChoicesOrderRandom: FieldRef<"Exam", 'Boolean'>
    readonly passingScore: FieldRef<"Exam", 'Int'>
    readonly questionCount: FieldRef<"Exam", 'Int'>
    readonly createdAt: FieldRef<"Exam", 'DateTime'>
    readonly updatedAt: FieldRef<"Exam", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Exam findUnique
   */
  export type ExamFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findUniqueOrThrow
   */
  export type ExamFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam findFirst
   */
  export type ExamFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findFirstOrThrow
   */
  export type ExamFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exam to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Exams.
     */
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam findMany
   */
  export type ExamFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter, which Exams to fetch.
     */
    where?: ExamWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Exams to fetch.
     */
    orderBy?: ExamOrderByWithRelationInput | ExamOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Exams.
     */
    cursor?: ExamWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Exams from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Exams.
     */
    skip?: number
    distinct?: ExamScalarFieldEnum | ExamScalarFieldEnum[]
  }

  /**
   * Exam create
   */
  export type ExamCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to create a Exam.
     */
    data: XOR<ExamCreateInput, ExamUncheckedCreateInput>
  }

  /**
   * Exam createMany
   */
  export type ExamCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
  }

  /**
   * Exam createManyAndReturn
   */
  export type ExamCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Exams.
     */
    data: ExamCreateManyInput | ExamCreateManyInput[]
  }

  /**
   * Exam update
   */
  export type ExamUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The data needed to update a Exam.
     */
    data: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
    /**
     * Choose, which Exam to update.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam updateMany
   */
  export type ExamUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Exams.
     */
    data: XOR<ExamUpdateManyMutationInput, ExamUncheckedUpdateManyInput>
    /**
     * Filter which Exams to update
     */
    where?: ExamWhereInput
  }

  /**
   * Exam upsert
   */
  export type ExamUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * The filter to search for the Exam to update in case it exists.
     */
    where: ExamWhereUniqueInput
    /**
     * In case the Exam found by the `where` argument doesn't exist, create a new Exam with this data.
     */
    create: XOR<ExamCreateInput, ExamUncheckedCreateInput>
    /**
     * In case the Exam was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ExamUpdateInput, ExamUncheckedUpdateInput>
  }

  /**
   * Exam delete
   */
  export type ExamDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
    /**
     * Filter which Exam to delete.
     */
    where: ExamWhereUniqueInput
  }

  /**
   * Exam deleteMany
   */
  export type ExamDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Exams to delete
     */
    where?: ExamWhereInput
  }

  /**
   * Exam.questions
   */
  export type Exam$questionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Exam.userExamJoins
   */
  export type Exam$userExamJoinsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    where?: UserExamJoinWhereInput
    orderBy?: UserExamJoinOrderByWithRelationInput | UserExamJoinOrderByWithRelationInput[]
    cursor?: UserExamJoinWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExamJoinScalarFieldEnum | UserExamJoinScalarFieldEnum[]
  }

  /**
   * Exam without action
   */
  export type ExamDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Exam
     */
    select?: ExamSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ExamInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    examId: string | null
    text: string | null
    infoText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    examId: string | null
    text: string | null
    infoText: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    examId: number
    text: number
    infoText: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    examId?: true
    text?: true
    infoText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    examId?: true
    text?: true
    infoText?: true
    createdAt?: true
    updatedAt?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    examId?: true
    text?: true
    infoText?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    examId: string
    text: string
    infoText: string | null
    createdAt: Date
    updatedAt: Date
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    text?: boolean
    infoText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    choices?: boolean | Question$choicesArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    userExamAnswerChoices?: boolean | Question$userExamAnswerChoicesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    examId?: boolean
    text?: boolean
    infoText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    examId?: boolean
    text?: boolean
    infoText?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    choices?: boolean | Question$choicesArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    userExamAnswerChoices?: boolean | Question$userExamAnswerChoicesArgs<ExtArgs>
    _count?: boolean | QuestionCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      choices: Prisma.$ChoicePayload<ExtArgs>[]
      exam: Prisma.$ExamPayload<ExtArgs>
      userExamAnswerChoices: Prisma.$UserExamAnswerChoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      examId: string
      text: string
      infoText: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    choices<T extends Question$choicesArgs<ExtArgs> = {}>(args?: Subset<T, Question$choicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany"> | Null>
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    userExamAnswerChoices<T extends Question$userExamAnswerChoicesArgs<ExtArgs> = {}>(args?: Subset<T, Question$userExamAnswerChoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */ 
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly examId: FieldRef<"Question", 'String'>
    readonly text: FieldRef<"Question", 'String'>
    readonly infoText: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
  }

  /**
   * Question.choices
   */
  export type Question$choicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    cursor?: ChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Question.userExamAnswerChoices
   */
  export type Question$userExamAnswerChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    where?: UserExamAnswerChoiceWhereInput
    orderBy?: UserExamAnswerChoiceOrderByWithRelationInput | UserExamAnswerChoiceOrderByWithRelationInput[]
    cursor?: UserExamAnswerChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExamAnswerChoiceScalarFieldEnum | UserExamAnswerChoiceScalarFieldEnum[]
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Choice
   */

  export type AggregateChoice = {
    _count: ChoiceCountAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  export type ChoiceMinAggregateOutputType = {
    id: string | null
    questionId: string | null
    text: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoiceMaxAggregateOutputType = {
    id: string | null
    questionId: string | null
    text: string | null
    isCorrect: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ChoiceCountAggregateOutputType = {
    id: number
    questionId: number
    text: number
    isCorrect: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ChoiceMinAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoiceMaxAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ChoiceCountAggregateInputType = {
    id?: true
    questionId?: true
    text?: true
    isCorrect?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choice to aggregate.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Choices
    **/
    _count?: true | ChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ChoiceMaxAggregateInputType
  }

  export type GetChoiceAggregateType<T extends ChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateChoice[P]>
      : GetScalarType<T[P], AggregateChoice[P]>
  }




  export type ChoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ChoiceWhereInput
    orderBy?: ChoiceOrderByWithAggregationInput | ChoiceOrderByWithAggregationInput[]
    by: ChoiceScalarFieldEnum[] | ChoiceScalarFieldEnum
    having?: ChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ChoiceCountAggregateInputType | true
    _min?: ChoiceMinAggregateInputType
    _max?: ChoiceMaxAggregateInputType
  }

  export type ChoiceGroupByOutputType = {
    id: string
    questionId: string
    text: string
    isCorrect: boolean
    createdAt: Date
    updatedAt: Date
    _count: ChoiceCountAggregateOutputType | null
    _min: ChoiceMinAggregateOutputType | null
    _max: ChoiceMaxAggregateOutputType | null
  }

  type GetChoiceGroupByPayload<T extends ChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], ChoiceGroupByOutputType[P]>
        }
      >
    >


  export type ChoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    userExamAnswerChoices?: boolean | Choice$userExamAnswerChoicesArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["choice"]>

  export type ChoiceSelectScalar = {
    id?: boolean
    questionId?: boolean
    text?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ChoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    userExamAnswerChoices?: boolean | Choice$userExamAnswerChoicesArgs<ExtArgs>
    _count?: boolean | ChoiceCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ChoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    question?: boolean | QuestionDefaultArgs<ExtArgs>
  }

  export type $ChoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Choice"
    objects: {
      question: Prisma.$QuestionPayload<ExtArgs>
      userExamAnswerChoices: Prisma.$UserExamAnswerChoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      questionId: string
      text: string
      isCorrect: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["choice"]>
    composites: {}
  }

  type ChoiceGetPayload<S extends boolean | null | undefined | ChoiceDefaultArgs> = $Result.GetResult<Prisma.$ChoicePayload, S>

  type ChoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<ChoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: ChoiceCountAggregateInputType | true
    }

  export interface ChoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Choice'], meta: { name: 'Choice' } }
    /**
     * Find zero or one Choice that matches the filter.
     * @param {ChoiceFindUniqueArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ChoiceFindUniqueArgs>(args: SelectSubset<T, ChoiceFindUniqueArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one Choice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {ChoiceFindUniqueOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ChoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, ChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first Choice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ChoiceFindFirstArgs>(args?: SelectSubset<T, ChoiceFindFirstArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first Choice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindFirstOrThrowArgs} args - Arguments to find a Choice
     * @example
     * // Get one Choice
     * const choice = await prisma.choice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ChoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, ChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more Choices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Choices
     * const choices = await prisma.choice.findMany()
     * 
     * // Get first 10 Choices
     * const choices = await prisma.choice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const choiceWithIdOnly = await prisma.choice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ChoiceFindManyArgs>(args?: SelectSubset<T, ChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a Choice.
     * @param {ChoiceCreateArgs} args - Arguments to create a Choice.
     * @example
     * // Create one Choice
     * const Choice = await prisma.choice.create({
     *   data: {
     *     // ... data to create a Choice
     *   }
     * })
     * 
     */
    create<T extends ChoiceCreateArgs>(args: SelectSubset<T, ChoiceCreateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many Choices.
     * @param {ChoiceCreateManyArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ChoiceCreateManyArgs>(args?: SelectSubset<T, ChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Choices and returns the data saved in the database.
     * @param {ChoiceCreateManyAndReturnArgs} args - Arguments to create many Choices.
     * @example
     * // Create many Choices
     * const choice = await prisma.choice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Choices and only return the `id`
     * const choiceWithIdOnly = await prisma.choice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ChoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, ChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a Choice.
     * @param {ChoiceDeleteArgs} args - Arguments to delete one Choice.
     * @example
     * // Delete one Choice
     * const Choice = await prisma.choice.delete({
     *   where: {
     *     // ... filter to delete one Choice
     *   }
     * })
     * 
     */
    delete<T extends ChoiceDeleteArgs>(args: SelectSubset<T, ChoiceDeleteArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one Choice.
     * @param {ChoiceUpdateArgs} args - Arguments to update one Choice.
     * @example
     * // Update one Choice
     * const choice = await prisma.choice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ChoiceUpdateArgs>(args: SelectSubset<T, ChoiceUpdateArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more Choices.
     * @param {ChoiceDeleteManyArgs} args - Arguments to filter Choices to delete.
     * @example
     * // Delete a few Choices
     * const { count } = await prisma.choice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ChoiceDeleteManyArgs>(args?: SelectSubset<T, ChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Choices
     * const choice = await prisma.choice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ChoiceUpdateManyArgs>(args: SelectSubset<T, ChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Choice.
     * @param {ChoiceUpsertArgs} args - Arguments to update or create a Choice.
     * @example
     * // Update or create a Choice
     * const choice = await prisma.choice.upsert({
     *   create: {
     *     // ... data to create a Choice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Choice we want to update
     *   }
     * })
     */
    upsert<T extends ChoiceUpsertArgs>(args: SelectSubset<T, ChoiceUpsertArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of Choices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceCountArgs} args - Arguments to filter Choices to count.
     * @example
     * // Count the number of Choices
     * const count = await prisma.choice.count({
     *   where: {
     *     // ... the filter for the Choices we want to count
     *   }
     * })
    **/
    count<T extends ChoiceCountArgs>(
      args?: Subset<T, ChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ChoiceAggregateArgs>(args: Subset<T, ChoiceAggregateArgs>): Prisma.PrismaPromise<GetChoiceAggregateType<T>>

    /**
     * Group by Choice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ChoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ChoiceGroupByArgs['orderBy'] }
        : { orderBy?: ChoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Choice model
   */
  readonly fields: ChoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Choice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ChoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    userExamAnswerChoices<T extends Choice$userExamAnswerChoicesArgs<ExtArgs> = {}>(args?: Subset<T, Choice$userExamAnswerChoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Choice model
   */ 
  interface ChoiceFieldRefs {
    readonly id: FieldRef<"Choice", 'String'>
    readonly questionId: FieldRef<"Choice", 'String'>
    readonly text: FieldRef<"Choice", 'String'>
    readonly isCorrect: FieldRef<"Choice", 'Boolean'>
    readonly createdAt: FieldRef<"Choice", 'DateTime'>
    readonly updatedAt: FieldRef<"Choice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Choice findUnique
   */
  export type ChoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findUniqueOrThrow
   */
  export type ChoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice findFirst
   */
  export type ChoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findFirstOrThrow
   */
  export type ChoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choice to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Choices.
     */
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice findMany
   */
  export type ChoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter, which Choices to fetch.
     */
    where?: ChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Choices to fetch.
     */
    orderBy?: ChoiceOrderByWithRelationInput | ChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Choices.
     */
    cursor?: ChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Choices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Choices.
     */
    skip?: number
    distinct?: ChoiceScalarFieldEnum | ChoiceScalarFieldEnum[]
  }

  /**
   * Choice create
   */
  export type ChoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a Choice.
     */
    data: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
  }

  /**
   * Choice createMany
   */
  export type ChoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Choices.
     */
    data: ChoiceCreateManyInput | ChoiceCreateManyInput[]
  }

  /**
   * Choice createManyAndReturn
   */
  export type ChoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many Choices.
     */
    data: ChoiceCreateManyInput | ChoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Choice update
   */
  export type ChoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a Choice.
     */
    data: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
    /**
     * Choose, which Choice to update.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice updateMany
   */
  export type ChoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Choices.
     */
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyInput>
    /**
     * Filter which Choices to update
     */
    where?: ChoiceWhereInput
  }

  /**
   * Choice upsert
   */
  export type ChoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the Choice to update in case it exists.
     */
    where: ChoiceWhereUniqueInput
    /**
     * In case the Choice found by the `where` argument doesn't exist, create a new Choice with this data.
     */
    create: XOR<ChoiceCreateInput, ChoiceUncheckedCreateInput>
    /**
     * In case the Choice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ChoiceUpdateInput, ChoiceUncheckedUpdateInput>
  }

  /**
   * Choice delete
   */
  export type ChoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
    /**
     * Filter which Choice to delete.
     */
    where: ChoiceWhereUniqueInput
  }

  /**
   * Choice deleteMany
   */
  export type ChoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Choices to delete
     */
    where?: ChoiceWhereInput
  }

  /**
   * Choice.userExamAnswerChoices
   */
  export type Choice$userExamAnswerChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    where?: UserExamAnswerChoiceWhereInput
    orderBy?: UserExamAnswerChoiceOrderByWithRelationInput | UserExamAnswerChoiceOrderByWithRelationInput[]
    cursor?: UserExamAnswerChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExamAnswerChoiceScalarFieldEnum | UserExamAnswerChoiceScalarFieldEnum[]
  }

  /**
   * Choice without action
   */
  export type ChoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Choice
     */
    select?: ChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ChoiceInclude<ExtArgs> | null
  }


  /**
   * Model UserExamJoin
   */

  export type AggregateUserExamJoin = {
    _count: UserExamJoinCountAggregateOutputType | null
    _min: UserExamJoinMinAggregateOutputType | null
    _max: UserExamJoinMaxAggregateOutputType | null
  }

  export type UserExamJoinMinAggregateOutputType = {
    id: string | null
    userId: string | null
    examId: string | null
    createdAt: Date | null
  }

  export type UserExamJoinMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    examId: string | null
    createdAt: Date | null
  }

  export type UserExamJoinCountAggregateOutputType = {
    id: number
    userId: number
    examId: number
    createdAt: number
    _all: number
  }


  export type UserExamJoinMinAggregateInputType = {
    id?: true
    userId?: true
    examId?: true
    createdAt?: true
  }

  export type UserExamJoinMaxAggregateInputType = {
    id?: true
    userId?: true
    examId?: true
    createdAt?: true
  }

  export type UserExamJoinCountAggregateInputType = {
    id?: true
    userId?: true
    examId?: true
    createdAt?: true
    _all?: true
  }

  export type UserExamJoinAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExamJoin to aggregate.
     */
    where?: UserExamJoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamJoins to fetch.
     */
    orderBy?: UserExamJoinOrderByWithRelationInput | UserExamJoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExamJoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamJoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamJoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExamJoins
    **/
    _count?: true | UserExamJoinCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExamJoinMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExamJoinMaxAggregateInputType
  }

  export type GetUserExamJoinAggregateType<T extends UserExamJoinAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExamJoin]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExamJoin[P]>
      : GetScalarType<T[P], AggregateUserExamJoin[P]>
  }




  export type UserExamJoinGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamJoinWhereInput
    orderBy?: UserExamJoinOrderByWithAggregationInput | UserExamJoinOrderByWithAggregationInput[]
    by: UserExamJoinScalarFieldEnum[] | UserExamJoinScalarFieldEnum
    having?: UserExamJoinScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExamJoinCountAggregateInputType | true
    _min?: UserExamJoinMinAggregateInputType
    _max?: UserExamJoinMaxAggregateInputType
  }

  export type UserExamJoinGroupByOutputType = {
    id: string
    userId: string
    examId: string
    createdAt: Date
    _count: UserExamJoinCountAggregateOutputType | null
    _min: UserExamJoinMinAggregateOutputType | null
    _max: UserExamJoinMaxAggregateOutputType | null
  }

  type GetUserExamJoinGroupByPayload<T extends UserExamJoinGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserExamJoinGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExamJoinGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExamJoinGroupByOutputType[P]>
            : GetScalarType<T[P], UserExamJoinGroupByOutputType[P]>
        }
      >
    >


  export type UserExamJoinSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    examId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    userExamAnswers?: boolean | UserExamJoin$userExamAnswersArgs<ExtArgs>
    _count?: boolean | UserExamJoinCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExamJoin"]>

  export type UserExamJoinSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    examId?: boolean
    createdAt?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExamJoin"]>

  export type UserExamJoinSelectScalar = {
    id?: boolean
    userId?: boolean
    examId?: boolean
    createdAt?: boolean
  }

  export type UserExamJoinInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
    userExamAnswers?: boolean | UserExamJoin$userExamAnswersArgs<ExtArgs>
    _count?: boolean | UserExamJoinCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserExamJoinIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    exam?: boolean | ExamDefaultArgs<ExtArgs>
  }

  export type $UserExamJoinPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserExamJoin"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      exam: Prisma.$ExamPayload<ExtArgs>
      userExamAnswers: Prisma.$UserExamAnswerPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      examId: string
      createdAt: Date
    }, ExtArgs["result"]["userExamJoin"]>
    composites: {}
  }

  type UserExamJoinGetPayload<S extends boolean | null | undefined | UserExamJoinDefaultArgs> = $Result.GetResult<Prisma.$UserExamJoinPayload, S>

  type UserExamJoinCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserExamJoinFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserExamJoinCountAggregateInputType | true
    }

  export interface UserExamJoinDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserExamJoin'], meta: { name: 'UserExamJoin' } }
    /**
     * Find zero or one UserExamJoin that matches the filter.
     * @param {UserExamJoinFindUniqueArgs} args - Arguments to find a UserExamJoin
     * @example
     * // Get one UserExamJoin
     * const userExamJoin = await prisma.userExamJoin.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserExamJoinFindUniqueArgs>(args: SelectSubset<T, UserExamJoinFindUniqueArgs<ExtArgs>>): Prisma__UserExamJoinClient<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserExamJoin that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserExamJoinFindUniqueOrThrowArgs} args - Arguments to find a UserExamJoin
     * @example
     * // Get one UserExamJoin
     * const userExamJoin = await prisma.userExamJoin.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserExamJoinFindUniqueOrThrowArgs>(args: SelectSubset<T, UserExamJoinFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserExamJoinClient<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserExamJoin that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamJoinFindFirstArgs} args - Arguments to find a UserExamJoin
     * @example
     * // Get one UserExamJoin
     * const userExamJoin = await prisma.userExamJoin.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserExamJoinFindFirstArgs>(args?: SelectSubset<T, UserExamJoinFindFirstArgs<ExtArgs>>): Prisma__UserExamJoinClient<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserExamJoin that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamJoinFindFirstOrThrowArgs} args - Arguments to find a UserExamJoin
     * @example
     * // Get one UserExamJoin
     * const userExamJoin = await prisma.userExamJoin.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserExamJoinFindFirstOrThrowArgs>(args?: SelectSubset<T, UserExamJoinFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserExamJoinClient<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserExamJoins that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamJoinFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExamJoins
     * const userExamJoins = await prisma.userExamJoin.findMany()
     * 
     * // Get first 10 UserExamJoins
     * const userExamJoins = await prisma.userExamJoin.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExamJoinWithIdOnly = await prisma.userExamJoin.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserExamJoinFindManyArgs>(args?: SelectSubset<T, UserExamJoinFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserExamJoin.
     * @param {UserExamJoinCreateArgs} args - Arguments to create a UserExamJoin.
     * @example
     * // Create one UserExamJoin
     * const UserExamJoin = await prisma.userExamJoin.create({
     *   data: {
     *     // ... data to create a UserExamJoin
     *   }
     * })
     * 
     */
    create<T extends UserExamJoinCreateArgs>(args: SelectSubset<T, UserExamJoinCreateArgs<ExtArgs>>): Prisma__UserExamJoinClient<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserExamJoins.
     * @param {UserExamJoinCreateManyArgs} args - Arguments to create many UserExamJoins.
     * @example
     * // Create many UserExamJoins
     * const userExamJoin = await prisma.userExamJoin.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserExamJoinCreateManyArgs>(args?: SelectSubset<T, UserExamJoinCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserExamJoins and returns the data saved in the database.
     * @param {UserExamJoinCreateManyAndReturnArgs} args - Arguments to create many UserExamJoins.
     * @example
     * // Create many UserExamJoins
     * const userExamJoin = await prisma.userExamJoin.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserExamJoins and only return the `id`
     * const userExamJoinWithIdOnly = await prisma.userExamJoin.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserExamJoinCreateManyAndReturnArgs>(args?: SelectSubset<T, UserExamJoinCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserExamJoin.
     * @param {UserExamJoinDeleteArgs} args - Arguments to delete one UserExamJoin.
     * @example
     * // Delete one UserExamJoin
     * const UserExamJoin = await prisma.userExamJoin.delete({
     *   where: {
     *     // ... filter to delete one UserExamJoin
     *   }
     * })
     * 
     */
    delete<T extends UserExamJoinDeleteArgs>(args: SelectSubset<T, UserExamJoinDeleteArgs<ExtArgs>>): Prisma__UserExamJoinClient<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserExamJoin.
     * @param {UserExamJoinUpdateArgs} args - Arguments to update one UserExamJoin.
     * @example
     * // Update one UserExamJoin
     * const userExamJoin = await prisma.userExamJoin.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserExamJoinUpdateArgs>(args: SelectSubset<T, UserExamJoinUpdateArgs<ExtArgs>>): Prisma__UserExamJoinClient<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserExamJoins.
     * @param {UserExamJoinDeleteManyArgs} args - Arguments to filter UserExamJoins to delete.
     * @example
     * // Delete a few UserExamJoins
     * const { count } = await prisma.userExamJoin.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserExamJoinDeleteManyArgs>(args?: SelectSubset<T, UserExamJoinDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExamJoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamJoinUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExamJoins
     * const userExamJoin = await prisma.userExamJoin.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserExamJoinUpdateManyArgs>(args: SelectSubset<T, UserExamJoinUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserExamJoin.
     * @param {UserExamJoinUpsertArgs} args - Arguments to update or create a UserExamJoin.
     * @example
     * // Update or create a UserExamJoin
     * const userExamJoin = await prisma.userExamJoin.upsert({
     *   create: {
     *     // ... data to create a UserExamJoin
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExamJoin we want to update
     *   }
     * })
     */
    upsert<T extends UserExamJoinUpsertArgs>(args: SelectSubset<T, UserExamJoinUpsertArgs<ExtArgs>>): Prisma__UserExamJoinClient<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserExamJoins.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamJoinCountArgs} args - Arguments to filter UserExamJoins to count.
     * @example
     * // Count the number of UserExamJoins
     * const count = await prisma.userExamJoin.count({
     *   where: {
     *     // ... the filter for the UserExamJoins we want to count
     *   }
     * })
    **/
    count<T extends UserExamJoinCountArgs>(
      args?: Subset<T, UserExamJoinCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExamJoinCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExamJoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamJoinAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserExamJoinAggregateArgs>(args: Subset<T, UserExamJoinAggregateArgs>): Prisma.PrismaPromise<GetUserExamJoinAggregateType<T>>

    /**
     * Group by UserExamJoin.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamJoinGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserExamJoinGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExamJoinGroupByArgs['orderBy'] }
        : { orderBy?: UserExamJoinGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserExamJoinGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExamJoinGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserExamJoin model
   */
  readonly fields: UserExamJoinFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExamJoin.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserExamJoinClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    exam<T extends ExamDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ExamDefaultArgs<ExtArgs>>): Prisma__ExamClient<$Result.GetResult<Prisma.$ExamPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    userExamAnswers<T extends UserExamJoin$userExamAnswersArgs<ExtArgs> = {}>(args?: Subset<T, UserExamJoin$userExamAnswersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserExamJoin model
   */ 
  interface UserExamJoinFieldRefs {
    readonly id: FieldRef<"UserExamJoin", 'String'>
    readonly userId: FieldRef<"UserExamJoin", 'String'>
    readonly examId: FieldRef<"UserExamJoin", 'String'>
    readonly createdAt: FieldRef<"UserExamJoin", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserExamJoin findUnique
   */
  export type UserExamJoinFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    /**
     * Filter, which UserExamJoin to fetch.
     */
    where: UserExamJoinWhereUniqueInput
  }

  /**
   * UserExamJoin findUniqueOrThrow
   */
  export type UserExamJoinFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    /**
     * Filter, which UserExamJoin to fetch.
     */
    where: UserExamJoinWhereUniqueInput
  }

  /**
   * UserExamJoin findFirst
   */
  export type UserExamJoinFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    /**
     * Filter, which UserExamJoin to fetch.
     */
    where?: UserExamJoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamJoins to fetch.
     */
    orderBy?: UserExamJoinOrderByWithRelationInput | UserExamJoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExamJoins.
     */
    cursor?: UserExamJoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamJoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamJoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExamJoins.
     */
    distinct?: UserExamJoinScalarFieldEnum | UserExamJoinScalarFieldEnum[]
  }

  /**
   * UserExamJoin findFirstOrThrow
   */
  export type UserExamJoinFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    /**
     * Filter, which UserExamJoin to fetch.
     */
    where?: UserExamJoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamJoins to fetch.
     */
    orderBy?: UserExamJoinOrderByWithRelationInput | UserExamJoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExamJoins.
     */
    cursor?: UserExamJoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamJoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamJoins.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExamJoins.
     */
    distinct?: UserExamJoinScalarFieldEnum | UserExamJoinScalarFieldEnum[]
  }

  /**
   * UserExamJoin findMany
   */
  export type UserExamJoinFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    /**
     * Filter, which UserExamJoins to fetch.
     */
    where?: UserExamJoinWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamJoins to fetch.
     */
    orderBy?: UserExamJoinOrderByWithRelationInput | UserExamJoinOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExamJoins.
     */
    cursor?: UserExamJoinWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamJoins from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamJoins.
     */
    skip?: number
    distinct?: UserExamJoinScalarFieldEnum | UserExamJoinScalarFieldEnum[]
  }

  /**
   * UserExamJoin create
   */
  export type UserExamJoinCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    /**
     * The data needed to create a UserExamJoin.
     */
    data: XOR<UserExamJoinCreateInput, UserExamJoinUncheckedCreateInput>
  }

  /**
   * UserExamJoin createMany
   */
  export type UserExamJoinCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserExamJoins.
     */
    data: UserExamJoinCreateManyInput | UserExamJoinCreateManyInput[]
  }

  /**
   * UserExamJoin createManyAndReturn
   */
  export type UserExamJoinCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserExamJoins.
     */
    data: UserExamJoinCreateManyInput | UserExamJoinCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserExamJoin update
   */
  export type UserExamJoinUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    /**
     * The data needed to update a UserExamJoin.
     */
    data: XOR<UserExamJoinUpdateInput, UserExamJoinUncheckedUpdateInput>
    /**
     * Choose, which UserExamJoin to update.
     */
    where: UserExamJoinWhereUniqueInput
  }

  /**
   * UserExamJoin updateMany
   */
  export type UserExamJoinUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserExamJoins.
     */
    data: XOR<UserExamJoinUpdateManyMutationInput, UserExamJoinUncheckedUpdateManyInput>
    /**
     * Filter which UserExamJoins to update
     */
    where?: UserExamJoinWhereInput
  }

  /**
   * UserExamJoin upsert
   */
  export type UserExamJoinUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    /**
     * The filter to search for the UserExamJoin to update in case it exists.
     */
    where: UserExamJoinWhereUniqueInput
    /**
     * In case the UserExamJoin found by the `where` argument doesn't exist, create a new UserExamJoin with this data.
     */
    create: XOR<UserExamJoinCreateInput, UserExamJoinUncheckedCreateInput>
    /**
     * In case the UserExamJoin was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExamJoinUpdateInput, UserExamJoinUncheckedUpdateInput>
  }

  /**
   * UserExamJoin delete
   */
  export type UserExamJoinDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
    /**
     * Filter which UserExamJoin to delete.
     */
    where: UserExamJoinWhereUniqueInput
  }

  /**
   * UserExamJoin deleteMany
   */
  export type UserExamJoinDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExamJoins to delete
     */
    where?: UserExamJoinWhereInput
  }

  /**
   * UserExamJoin.userExamAnswers
   */
  export type UserExamJoin$userExamAnswersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    where?: UserExamAnswerWhereInput
    orderBy?: UserExamAnswerOrderByWithRelationInput | UserExamAnswerOrderByWithRelationInput[]
    cursor?: UserExamAnswerWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExamAnswerScalarFieldEnum | UserExamAnswerScalarFieldEnum[]
  }

  /**
   * UserExamJoin without action
   */
  export type UserExamJoinDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamJoin
     */
    select?: UserExamJoinSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamJoinInclude<ExtArgs> | null
  }


  /**
   * Model UserExamAnswer
   */

  export type AggregateUserExamAnswer = {
    _count: UserExamAnswerCountAggregateOutputType | null
    _min: UserExamAnswerMinAggregateOutputType | null
    _max: UserExamAnswerMaxAggregateOutputType | null
  }

  export type UserExamAnswerMinAggregateOutputType = {
    id: string | null
    userExamJoinId: string | null
    isPassed: boolean | null
    createdAt: Date | null
  }

  export type UserExamAnswerMaxAggregateOutputType = {
    id: string | null
    userExamJoinId: string | null
    isPassed: boolean | null
    createdAt: Date | null
  }

  export type UserExamAnswerCountAggregateOutputType = {
    id: number
    userExamJoinId: number
    isPassed: number
    createdAt: number
    _all: number
  }


  export type UserExamAnswerMinAggregateInputType = {
    id?: true
    userExamJoinId?: true
    isPassed?: true
    createdAt?: true
  }

  export type UserExamAnswerMaxAggregateInputType = {
    id?: true
    userExamJoinId?: true
    isPassed?: true
    createdAt?: true
  }

  export type UserExamAnswerCountAggregateInputType = {
    id?: true
    userExamJoinId?: true
    isPassed?: true
    createdAt?: true
    _all?: true
  }

  export type UserExamAnswerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExamAnswer to aggregate.
     */
    where?: UserExamAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAnswers to fetch.
     */
    orderBy?: UserExamAnswerOrderByWithRelationInput | UserExamAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExamAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExamAnswers
    **/
    _count?: true | UserExamAnswerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExamAnswerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExamAnswerMaxAggregateInputType
  }

  export type GetUserExamAnswerAggregateType<T extends UserExamAnswerAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExamAnswer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExamAnswer[P]>
      : GetScalarType<T[P], AggregateUserExamAnswer[P]>
  }




  export type UserExamAnswerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamAnswerWhereInput
    orderBy?: UserExamAnswerOrderByWithAggregationInput | UserExamAnswerOrderByWithAggregationInput[]
    by: UserExamAnswerScalarFieldEnum[] | UserExamAnswerScalarFieldEnum
    having?: UserExamAnswerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExamAnswerCountAggregateInputType | true
    _min?: UserExamAnswerMinAggregateInputType
    _max?: UserExamAnswerMaxAggregateInputType
  }

  export type UserExamAnswerGroupByOutputType = {
    id: string
    userExamJoinId: string
    isPassed: boolean
    createdAt: Date
    _count: UserExamAnswerCountAggregateOutputType | null
    _min: UserExamAnswerMinAggregateOutputType | null
    _max: UserExamAnswerMaxAggregateOutputType | null
  }

  type GetUserExamAnswerGroupByPayload<T extends UserExamAnswerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserExamAnswerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExamAnswerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExamAnswerGroupByOutputType[P]>
            : GetScalarType<T[P], UserExamAnswerGroupByOutputType[P]>
        }
      >
    >


  export type UserExamAnswerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userExamJoinId?: boolean
    isPassed?: boolean
    createdAt?: boolean
    userExamJoin?: boolean | UserExamJoinDefaultArgs<ExtArgs>
    userExamAnswerChoices?: boolean | UserExamAnswer$userExamAnswerChoicesArgs<ExtArgs>
    _count?: boolean | UserExamAnswerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExamAnswer"]>

  export type UserExamAnswerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userExamJoinId?: boolean
    isPassed?: boolean
    createdAt?: boolean
    userExamJoin?: boolean | UserExamJoinDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExamAnswer"]>

  export type UserExamAnswerSelectScalar = {
    id?: boolean
    userExamJoinId?: boolean
    isPassed?: boolean
    createdAt?: boolean
  }

  export type UserExamAnswerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExamJoin?: boolean | UserExamJoinDefaultArgs<ExtArgs>
    userExamAnswerChoices?: boolean | UserExamAnswer$userExamAnswerChoicesArgs<ExtArgs>
    _count?: boolean | UserExamAnswerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserExamAnswerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExamJoin?: boolean | UserExamJoinDefaultArgs<ExtArgs>
  }

  export type $UserExamAnswerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserExamAnswer"
    objects: {
      userExamJoin: Prisma.$UserExamJoinPayload<ExtArgs>
      userExamAnswerChoices: Prisma.$UserExamAnswerChoicePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userExamJoinId: string
      isPassed: boolean
      createdAt: Date
    }, ExtArgs["result"]["userExamAnswer"]>
    composites: {}
  }

  type UserExamAnswerGetPayload<S extends boolean | null | undefined | UserExamAnswerDefaultArgs> = $Result.GetResult<Prisma.$UserExamAnswerPayload, S>

  type UserExamAnswerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserExamAnswerFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserExamAnswerCountAggregateInputType | true
    }

  export interface UserExamAnswerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserExamAnswer'], meta: { name: 'UserExamAnswer' } }
    /**
     * Find zero or one UserExamAnswer that matches the filter.
     * @param {UserExamAnswerFindUniqueArgs} args - Arguments to find a UserExamAnswer
     * @example
     * // Get one UserExamAnswer
     * const userExamAnswer = await prisma.userExamAnswer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserExamAnswerFindUniqueArgs>(args: SelectSubset<T, UserExamAnswerFindUniqueArgs<ExtArgs>>): Prisma__UserExamAnswerClient<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserExamAnswer that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserExamAnswerFindUniqueOrThrowArgs} args - Arguments to find a UserExamAnswer
     * @example
     * // Get one UserExamAnswer
     * const userExamAnswer = await prisma.userExamAnswer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserExamAnswerFindUniqueOrThrowArgs>(args: SelectSubset<T, UserExamAnswerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserExamAnswerClient<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserExamAnswer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerFindFirstArgs} args - Arguments to find a UserExamAnswer
     * @example
     * // Get one UserExamAnswer
     * const userExamAnswer = await prisma.userExamAnswer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserExamAnswerFindFirstArgs>(args?: SelectSubset<T, UserExamAnswerFindFirstArgs<ExtArgs>>): Prisma__UserExamAnswerClient<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserExamAnswer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerFindFirstOrThrowArgs} args - Arguments to find a UserExamAnswer
     * @example
     * // Get one UserExamAnswer
     * const userExamAnswer = await prisma.userExamAnswer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserExamAnswerFindFirstOrThrowArgs>(args?: SelectSubset<T, UserExamAnswerFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserExamAnswerClient<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserExamAnswers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExamAnswers
     * const userExamAnswers = await prisma.userExamAnswer.findMany()
     * 
     * // Get first 10 UserExamAnswers
     * const userExamAnswers = await prisma.userExamAnswer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExamAnswerWithIdOnly = await prisma.userExamAnswer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserExamAnswerFindManyArgs>(args?: SelectSubset<T, UserExamAnswerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserExamAnswer.
     * @param {UserExamAnswerCreateArgs} args - Arguments to create a UserExamAnswer.
     * @example
     * // Create one UserExamAnswer
     * const UserExamAnswer = await prisma.userExamAnswer.create({
     *   data: {
     *     // ... data to create a UserExamAnswer
     *   }
     * })
     * 
     */
    create<T extends UserExamAnswerCreateArgs>(args: SelectSubset<T, UserExamAnswerCreateArgs<ExtArgs>>): Prisma__UserExamAnswerClient<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserExamAnswers.
     * @param {UserExamAnswerCreateManyArgs} args - Arguments to create many UserExamAnswers.
     * @example
     * // Create many UserExamAnswers
     * const userExamAnswer = await prisma.userExamAnswer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserExamAnswerCreateManyArgs>(args?: SelectSubset<T, UserExamAnswerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserExamAnswers and returns the data saved in the database.
     * @param {UserExamAnswerCreateManyAndReturnArgs} args - Arguments to create many UserExamAnswers.
     * @example
     * // Create many UserExamAnswers
     * const userExamAnswer = await prisma.userExamAnswer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserExamAnswers and only return the `id`
     * const userExamAnswerWithIdOnly = await prisma.userExamAnswer.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserExamAnswerCreateManyAndReturnArgs>(args?: SelectSubset<T, UserExamAnswerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserExamAnswer.
     * @param {UserExamAnswerDeleteArgs} args - Arguments to delete one UserExamAnswer.
     * @example
     * // Delete one UserExamAnswer
     * const UserExamAnswer = await prisma.userExamAnswer.delete({
     *   where: {
     *     // ... filter to delete one UserExamAnswer
     *   }
     * })
     * 
     */
    delete<T extends UserExamAnswerDeleteArgs>(args: SelectSubset<T, UserExamAnswerDeleteArgs<ExtArgs>>): Prisma__UserExamAnswerClient<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserExamAnswer.
     * @param {UserExamAnswerUpdateArgs} args - Arguments to update one UserExamAnswer.
     * @example
     * // Update one UserExamAnswer
     * const userExamAnswer = await prisma.userExamAnswer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserExamAnswerUpdateArgs>(args: SelectSubset<T, UserExamAnswerUpdateArgs<ExtArgs>>): Prisma__UserExamAnswerClient<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserExamAnswers.
     * @param {UserExamAnswerDeleteManyArgs} args - Arguments to filter UserExamAnswers to delete.
     * @example
     * // Delete a few UserExamAnswers
     * const { count } = await prisma.userExamAnswer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserExamAnswerDeleteManyArgs>(args?: SelectSubset<T, UserExamAnswerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExamAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExamAnswers
     * const userExamAnswer = await prisma.userExamAnswer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserExamAnswerUpdateManyArgs>(args: SelectSubset<T, UserExamAnswerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserExamAnswer.
     * @param {UserExamAnswerUpsertArgs} args - Arguments to update or create a UserExamAnswer.
     * @example
     * // Update or create a UserExamAnswer
     * const userExamAnswer = await prisma.userExamAnswer.upsert({
     *   create: {
     *     // ... data to create a UserExamAnswer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExamAnswer we want to update
     *   }
     * })
     */
    upsert<T extends UserExamAnswerUpsertArgs>(args: SelectSubset<T, UserExamAnswerUpsertArgs<ExtArgs>>): Prisma__UserExamAnswerClient<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserExamAnswers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerCountArgs} args - Arguments to filter UserExamAnswers to count.
     * @example
     * // Count the number of UserExamAnswers
     * const count = await prisma.userExamAnswer.count({
     *   where: {
     *     // ... the filter for the UserExamAnswers we want to count
     *   }
     * })
    **/
    count<T extends UserExamAnswerCountArgs>(
      args?: Subset<T, UserExamAnswerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExamAnswerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExamAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserExamAnswerAggregateArgs>(args: Subset<T, UserExamAnswerAggregateArgs>): Prisma.PrismaPromise<GetUserExamAnswerAggregateType<T>>

    /**
     * Group by UserExamAnswer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserExamAnswerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExamAnswerGroupByArgs['orderBy'] }
        : { orderBy?: UserExamAnswerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserExamAnswerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExamAnswerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserExamAnswer model
   */
  readonly fields: UserExamAnswerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExamAnswer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserExamAnswerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userExamJoin<T extends UserExamJoinDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserExamJoinDefaultArgs<ExtArgs>>): Prisma__UserExamJoinClient<$Result.GetResult<Prisma.$UserExamJoinPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    userExamAnswerChoices<T extends UserExamAnswer$userExamAnswerChoicesArgs<ExtArgs> = {}>(args?: Subset<T, UserExamAnswer$userExamAnswerChoicesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "findMany"> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserExamAnswer model
   */ 
  interface UserExamAnswerFieldRefs {
    readonly id: FieldRef<"UserExamAnswer", 'String'>
    readonly userExamJoinId: FieldRef<"UserExamAnswer", 'String'>
    readonly isPassed: FieldRef<"UserExamAnswer", 'Boolean'>
    readonly createdAt: FieldRef<"UserExamAnswer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserExamAnswer findUnique
   */
  export type UserExamAnswerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswer to fetch.
     */
    where: UserExamAnswerWhereUniqueInput
  }

  /**
   * UserExamAnswer findUniqueOrThrow
   */
  export type UserExamAnswerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswer to fetch.
     */
    where: UserExamAnswerWhereUniqueInput
  }

  /**
   * UserExamAnswer findFirst
   */
  export type UserExamAnswerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswer to fetch.
     */
    where?: UserExamAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAnswers to fetch.
     */
    orderBy?: UserExamAnswerOrderByWithRelationInput | UserExamAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExamAnswers.
     */
    cursor?: UserExamAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExamAnswers.
     */
    distinct?: UserExamAnswerScalarFieldEnum | UserExamAnswerScalarFieldEnum[]
  }

  /**
   * UserExamAnswer findFirstOrThrow
   */
  export type UserExamAnswerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswer to fetch.
     */
    where?: UserExamAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAnswers to fetch.
     */
    orderBy?: UserExamAnswerOrderByWithRelationInput | UserExamAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExamAnswers.
     */
    cursor?: UserExamAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAnswers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExamAnswers.
     */
    distinct?: UserExamAnswerScalarFieldEnum | UserExamAnswerScalarFieldEnum[]
  }

  /**
   * UserExamAnswer findMany
   */
  export type UserExamAnswerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswers to fetch.
     */
    where?: UserExamAnswerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAnswers to fetch.
     */
    orderBy?: UserExamAnswerOrderByWithRelationInput | UserExamAnswerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExamAnswers.
     */
    cursor?: UserExamAnswerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAnswers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAnswers.
     */
    skip?: number
    distinct?: UserExamAnswerScalarFieldEnum | UserExamAnswerScalarFieldEnum[]
  }

  /**
   * UserExamAnswer create
   */
  export type UserExamAnswerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    /**
     * The data needed to create a UserExamAnswer.
     */
    data: XOR<UserExamAnswerCreateInput, UserExamAnswerUncheckedCreateInput>
  }

  /**
   * UserExamAnswer createMany
   */
  export type UserExamAnswerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserExamAnswers.
     */
    data: UserExamAnswerCreateManyInput | UserExamAnswerCreateManyInput[]
  }

  /**
   * UserExamAnswer createManyAndReturn
   */
  export type UserExamAnswerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserExamAnswers.
     */
    data: UserExamAnswerCreateManyInput | UserExamAnswerCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserExamAnswer update
   */
  export type UserExamAnswerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    /**
     * The data needed to update a UserExamAnswer.
     */
    data: XOR<UserExamAnswerUpdateInput, UserExamAnswerUncheckedUpdateInput>
    /**
     * Choose, which UserExamAnswer to update.
     */
    where: UserExamAnswerWhereUniqueInput
  }

  /**
   * UserExamAnswer updateMany
   */
  export type UserExamAnswerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserExamAnswers.
     */
    data: XOR<UserExamAnswerUpdateManyMutationInput, UserExamAnswerUncheckedUpdateManyInput>
    /**
     * Filter which UserExamAnswers to update
     */
    where?: UserExamAnswerWhereInput
  }

  /**
   * UserExamAnswer upsert
   */
  export type UserExamAnswerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    /**
     * The filter to search for the UserExamAnswer to update in case it exists.
     */
    where: UserExamAnswerWhereUniqueInput
    /**
     * In case the UserExamAnswer found by the `where` argument doesn't exist, create a new UserExamAnswer with this data.
     */
    create: XOR<UserExamAnswerCreateInput, UserExamAnswerUncheckedCreateInput>
    /**
     * In case the UserExamAnswer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExamAnswerUpdateInput, UserExamAnswerUncheckedUpdateInput>
  }

  /**
   * UserExamAnswer delete
   */
  export type UserExamAnswerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
    /**
     * Filter which UserExamAnswer to delete.
     */
    where: UserExamAnswerWhereUniqueInput
  }

  /**
   * UserExamAnswer deleteMany
   */
  export type UserExamAnswerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExamAnswers to delete
     */
    where?: UserExamAnswerWhereInput
  }

  /**
   * UserExamAnswer.userExamAnswerChoices
   */
  export type UserExamAnswer$userExamAnswerChoicesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    where?: UserExamAnswerChoiceWhereInput
    orderBy?: UserExamAnswerChoiceOrderByWithRelationInput | UserExamAnswerChoiceOrderByWithRelationInput[]
    cursor?: UserExamAnswerChoiceWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserExamAnswerChoiceScalarFieldEnum | UserExamAnswerChoiceScalarFieldEnum[]
  }

  /**
   * UserExamAnswer without action
   */
  export type UserExamAnswerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswer
     */
    select?: UserExamAnswerSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerInclude<ExtArgs> | null
  }


  /**
   * Model UserExamAnswerChoice
   */

  export type AggregateUserExamAnswerChoice = {
    _count: UserExamAnswerChoiceCountAggregateOutputType | null
    _min: UserExamAnswerChoiceMinAggregateOutputType | null
    _max: UserExamAnswerChoiceMaxAggregateOutputType | null
  }

  export type UserExamAnswerChoiceMinAggregateOutputType = {
    id: string | null
    userExamAnswerId: string | null
    questionId: string | null
    choiceId: string | null
    isCorrect: boolean | null
    createdAt: Date | null
  }

  export type UserExamAnswerChoiceMaxAggregateOutputType = {
    id: string | null
    userExamAnswerId: string | null
    questionId: string | null
    choiceId: string | null
    isCorrect: boolean | null
    createdAt: Date | null
  }

  export type UserExamAnswerChoiceCountAggregateOutputType = {
    id: number
    userExamAnswerId: number
    questionId: number
    choiceId: number
    isCorrect: number
    createdAt: number
    _all: number
  }


  export type UserExamAnswerChoiceMinAggregateInputType = {
    id?: true
    userExamAnswerId?: true
    questionId?: true
    choiceId?: true
    isCorrect?: true
    createdAt?: true
  }

  export type UserExamAnswerChoiceMaxAggregateInputType = {
    id?: true
    userExamAnswerId?: true
    questionId?: true
    choiceId?: true
    isCorrect?: true
    createdAt?: true
  }

  export type UserExamAnswerChoiceCountAggregateInputType = {
    id?: true
    userExamAnswerId?: true
    questionId?: true
    choiceId?: true
    isCorrect?: true
    createdAt?: true
    _all?: true
  }

  export type UserExamAnswerChoiceAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExamAnswerChoice to aggregate.
     */
    where?: UserExamAnswerChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAnswerChoices to fetch.
     */
    orderBy?: UserExamAnswerChoiceOrderByWithRelationInput | UserExamAnswerChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserExamAnswerChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAnswerChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAnswerChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserExamAnswerChoices
    **/
    _count?: true | UserExamAnswerChoiceCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserExamAnswerChoiceMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserExamAnswerChoiceMaxAggregateInputType
  }

  export type GetUserExamAnswerChoiceAggregateType<T extends UserExamAnswerChoiceAggregateArgs> = {
        [P in keyof T & keyof AggregateUserExamAnswerChoice]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserExamAnswerChoice[P]>
      : GetScalarType<T[P], AggregateUserExamAnswerChoice[P]>
  }




  export type UserExamAnswerChoiceGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserExamAnswerChoiceWhereInput
    orderBy?: UserExamAnswerChoiceOrderByWithAggregationInput | UserExamAnswerChoiceOrderByWithAggregationInput[]
    by: UserExamAnswerChoiceScalarFieldEnum[] | UserExamAnswerChoiceScalarFieldEnum
    having?: UserExamAnswerChoiceScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserExamAnswerChoiceCountAggregateInputType | true
    _min?: UserExamAnswerChoiceMinAggregateInputType
    _max?: UserExamAnswerChoiceMaxAggregateInputType
  }

  export type UserExamAnswerChoiceGroupByOutputType = {
    id: string
    userExamAnswerId: string
    questionId: string
    choiceId: string
    isCorrect: boolean
    createdAt: Date
    _count: UserExamAnswerChoiceCountAggregateOutputType | null
    _min: UserExamAnswerChoiceMinAggregateOutputType | null
    _max: UserExamAnswerChoiceMaxAggregateOutputType | null
  }

  type GetUserExamAnswerChoiceGroupByPayload<T extends UserExamAnswerChoiceGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserExamAnswerChoiceGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserExamAnswerChoiceGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserExamAnswerChoiceGroupByOutputType[P]>
            : GetScalarType<T[P], UserExamAnswerChoiceGroupByOutputType[P]>
        }
      >
    >


  export type UserExamAnswerChoiceSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userExamAnswerId?: boolean
    questionId?: boolean
    choiceId?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    userExamAnswer?: boolean | UserExamAnswerDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExamAnswerChoice"]>

  export type UserExamAnswerChoiceSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userExamAnswerId?: boolean
    questionId?: boolean
    choiceId?: boolean
    isCorrect?: boolean
    createdAt?: boolean
    userExamAnswer?: boolean | UserExamAnswerDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userExamAnswerChoice"]>

  export type UserExamAnswerChoiceSelectScalar = {
    id?: boolean
    userExamAnswerId?: boolean
    questionId?: boolean
    choiceId?: boolean
    isCorrect?: boolean
    createdAt?: boolean
  }

  export type UserExamAnswerChoiceInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExamAnswer?: boolean | UserExamAnswerDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }
  export type UserExamAnswerChoiceIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userExamAnswer?: boolean | UserExamAnswerDefaultArgs<ExtArgs>
    question?: boolean | QuestionDefaultArgs<ExtArgs>
    choice?: boolean | ChoiceDefaultArgs<ExtArgs>
  }

  export type $UserExamAnswerChoicePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserExamAnswerChoice"
    objects: {
      userExamAnswer: Prisma.$UserExamAnswerPayload<ExtArgs>
      question: Prisma.$QuestionPayload<ExtArgs>
      choice: Prisma.$ChoicePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userExamAnswerId: string
      questionId: string
      choiceId: string
      isCorrect: boolean
      createdAt: Date
    }, ExtArgs["result"]["userExamAnswerChoice"]>
    composites: {}
  }

  type UserExamAnswerChoiceGetPayload<S extends boolean | null | undefined | UserExamAnswerChoiceDefaultArgs> = $Result.GetResult<Prisma.$UserExamAnswerChoicePayload, S>

  type UserExamAnswerChoiceCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = 
    Omit<UserExamAnswerChoiceFindManyArgs, 'select' | 'include' | 'distinct'> & {
      select?: UserExamAnswerChoiceCountAggregateInputType | true
    }

  export interface UserExamAnswerChoiceDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserExamAnswerChoice'], meta: { name: 'UserExamAnswerChoice' } }
    /**
     * Find zero or one UserExamAnswerChoice that matches the filter.
     * @param {UserExamAnswerChoiceFindUniqueArgs} args - Arguments to find a UserExamAnswerChoice
     * @example
     * // Get one UserExamAnswerChoice
     * const userExamAnswerChoice = await prisma.userExamAnswerChoice.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserExamAnswerChoiceFindUniqueArgs>(args: SelectSubset<T, UserExamAnswerChoiceFindUniqueArgs<ExtArgs>>): Prisma__UserExamAnswerChoiceClient<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "findUnique"> | null, null, ExtArgs>

    /**
     * Find one UserExamAnswerChoice that matches the filter or throw an error with `error.code='P2025'` 
     * if no matches were found.
     * @param {UserExamAnswerChoiceFindUniqueOrThrowArgs} args - Arguments to find a UserExamAnswerChoice
     * @example
     * // Get one UserExamAnswerChoice
     * const userExamAnswerChoice = await prisma.userExamAnswerChoice.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserExamAnswerChoiceFindUniqueOrThrowArgs>(args: SelectSubset<T, UserExamAnswerChoiceFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserExamAnswerChoiceClient<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "findUniqueOrThrow">, never, ExtArgs>

    /**
     * Find the first UserExamAnswerChoice that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerChoiceFindFirstArgs} args - Arguments to find a UserExamAnswerChoice
     * @example
     * // Get one UserExamAnswerChoice
     * const userExamAnswerChoice = await prisma.userExamAnswerChoice.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserExamAnswerChoiceFindFirstArgs>(args?: SelectSubset<T, UserExamAnswerChoiceFindFirstArgs<ExtArgs>>): Prisma__UserExamAnswerChoiceClient<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "findFirst"> | null, null, ExtArgs>

    /**
     * Find the first UserExamAnswerChoice that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerChoiceFindFirstOrThrowArgs} args - Arguments to find a UserExamAnswerChoice
     * @example
     * // Get one UserExamAnswerChoice
     * const userExamAnswerChoice = await prisma.userExamAnswerChoice.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserExamAnswerChoiceFindFirstOrThrowArgs>(args?: SelectSubset<T, UserExamAnswerChoiceFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserExamAnswerChoiceClient<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "findFirstOrThrow">, never, ExtArgs>

    /**
     * Find zero or more UserExamAnswerChoices that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerChoiceFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserExamAnswerChoices
     * const userExamAnswerChoices = await prisma.userExamAnswerChoice.findMany()
     * 
     * // Get first 10 UserExamAnswerChoices
     * const userExamAnswerChoices = await prisma.userExamAnswerChoice.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userExamAnswerChoiceWithIdOnly = await prisma.userExamAnswerChoice.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserExamAnswerChoiceFindManyArgs>(args?: SelectSubset<T, UserExamAnswerChoiceFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "findMany">>

    /**
     * Create a UserExamAnswerChoice.
     * @param {UserExamAnswerChoiceCreateArgs} args - Arguments to create a UserExamAnswerChoice.
     * @example
     * // Create one UserExamAnswerChoice
     * const UserExamAnswerChoice = await prisma.userExamAnswerChoice.create({
     *   data: {
     *     // ... data to create a UserExamAnswerChoice
     *   }
     * })
     * 
     */
    create<T extends UserExamAnswerChoiceCreateArgs>(args: SelectSubset<T, UserExamAnswerChoiceCreateArgs<ExtArgs>>): Prisma__UserExamAnswerChoiceClient<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "create">, never, ExtArgs>

    /**
     * Create many UserExamAnswerChoices.
     * @param {UserExamAnswerChoiceCreateManyArgs} args - Arguments to create many UserExamAnswerChoices.
     * @example
     * // Create many UserExamAnswerChoices
     * const userExamAnswerChoice = await prisma.userExamAnswerChoice.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserExamAnswerChoiceCreateManyArgs>(args?: SelectSubset<T, UserExamAnswerChoiceCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserExamAnswerChoices and returns the data saved in the database.
     * @param {UserExamAnswerChoiceCreateManyAndReturnArgs} args - Arguments to create many UserExamAnswerChoices.
     * @example
     * // Create many UserExamAnswerChoices
     * const userExamAnswerChoice = await prisma.userExamAnswerChoice.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserExamAnswerChoices and only return the `id`
     * const userExamAnswerChoiceWithIdOnly = await prisma.userExamAnswerChoice.createManyAndReturn({ 
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserExamAnswerChoiceCreateManyAndReturnArgs>(args?: SelectSubset<T, UserExamAnswerChoiceCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "createManyAndReturn">>

    /**
     * Delete a UserExamAnswerChoice.
     * @param {UserExamAnswerChoiceDeleteArgs} args - Arguments to delete one UserExamAnswerChoice.
     * @example
     * // Delete one UserExamAnswerChoice
     * const UserExamAnswerChoice = await prisma.userExamAnswerChoice.delete({
     *   where: {
     *     // ... filter to delete one UserExamAnswerChoice
     *   }
     * })
     * 
     */
    delete<T extends UserExamAnswerChoiceDeleteArgs>(args: SelectSubset<T, UserExamAnswerChoiceDeleteArgs<ExtArgs>>): Prisma__UserExamAnswerChoiceClient<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "delete">, never, ExtArgs>

    /**
     * Update one UserExamAnswerChoice.
     * @param {UserExamAnswerChoiceUpdateArgs} args - Arguments to update one UserExamAnswerChoice.
     * @example
     * // Update one UserExamAnswerChoice
     * const userExamAnswerChoice = await prisma.userExamAnswerChoice.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserExamAnswerChoiceUpdateArgs>(args: SelectSubset<T, UserExamAnswerChoiceUpdateArgs<ExtArgs>>): Prisma__UserExamAnswerChoiceClient<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "update">, never, ExtArgs>

    /**
     * Delete zero or more UserExamAnswerChoices.
     * @param {UserExamAnswerChoiceDeleteManyArgs} args - Arguments to filter UserExamAnswerChoices to delete.
     * @example
     * // Delete a few UserExamAnswerChoices
     * const { count } = await prisma.userExamAnswerChoice.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserExamAnswerChoiceDeleteManyArgs>(args?: SelectSubset<T, UserExamAnswerChoiceDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserExamAnswerChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerChoiceUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserExamAnswerChoices
     * const userExamAnswerChoice = await prisma.userExamAnswerChoice.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserExamAnswerChoiceUpdateManyArgs>(args: SelectSubset<T, UserExamAnswerChoiceUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one UserExamAnswerChoice.
     * @param {UserExamAnswerChoiceUpsertArgs} args - Arguments to update or create a UserExamAnswerChoice.
     * @example
     * // Update or create a UserExamAnswerChoice
     * const userExamAnswerChoice = await prisma.userExamAnswerChoice.upsert({
     *   create: {
     *     // ... data to create a UserExamAnswerChoice
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserExamAnswerChoice we want to update
     *   }
     * })
     */
    upsert<T extends UserExamAnswerChoiceUpsertArgs>(args: SelectSubset<T, UserExamAnswerChoiceUpsertArgs<ExtArgs>>): Prisma__UserExamAnswerChoiceClient<$Result.GetResult<Prisma.$UserExamAnswerChoicePayload<ExtArgs>, T, "upsert">, never, ExtArgs>


    /**
     * Count the number of UserExamAnswerChoices.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerChoiceCountArgs} args - Arguments to filter UserExamAnswerChoices to count.
     * @example
     * // Count the number of UserExamAnswerChoices
     * const count = await prisma.userExamAnswerChoice.count({
     *   where: {
     *     // ... the filter for the UserExamAnswerChoices we want to count
     *   }
     * })
    **/
    count<T extends UserExamAnswerChoiceCountArgs>(
      args?: Subset<T, UserExamAnswerChoiceCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserExamAnswerChoiceCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserExamAnswerChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerChoiceAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserExamAnswerChoiceAggregateArgs>(args: Subset<T, UserExamAnswerChoiceAggregateArgs>): Prisma.PrismaPromise<GetUserExamAnswerChoiceAggregateType<T>>

    /**
     * Group by UserExamAnswerChoice.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserExamAnswerChoiceGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserExamAnswerChoiceGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserExamAnswerChoiceGroupByArgs['orderBy'] }
        : { orderBy?: UserExamAnswerChoiceGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserExamAnswerChoiceGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserExamAnswerChoiceGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserExamAnswerChoice model
   */
  readonly fields: UserExamAnswerChoiceFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserExamAnswerChoice.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserExamAnswerChoiceClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userExamAnswer<T extends UserExamAnswerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserExamAnswerDefaultArgs<ExtArgs>>): Prisma__UserExamAnswerClient<$Result.GetResult<Prisma.$UserExamAnswerPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    question<T extends QuestionDefaultArgs<ExtArgs> = {}>(args?: Subset<T, QuestionDefaultArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    choice<T extends ChoiceDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ChoiceDefaultArgs<ExtArgs>>): Prisma__ChoiceClient<$Result.GetResult<Prisma.$ChoicePayload<ExtArgs>, T, "findUniqueOrThrow"> | Null, Null, ExtArgs>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserExamAnswerChoice model
   */ 
  interface UserExamAnswerChoiceFieldRefs {
    readonly id: FieldRef<"UserExamAnswerChoice", 'String'>
    readonly userExamAnswerId: FieldRef<"UserExamAnswerChoice", 'String'>
    readonly questionId: FieldRef<"UserExamAnswerChoice", 'String'>
    readonly choiceId: FieldRef<"UserExamAnswerChoice", 'String'>
    readonly isCorrect: FieldRef<"UserExamAnswerChoice", 'Boolean'>
    readonly createdAt: FieldRef<"UserExamAnswerChoice", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * UserExamAnswerChoice findUnique
   */
  export type UserExamAnswerChoiceFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswerChoice to fetch.
     */
    where: UserExamAnswerChoiceWhereUniqueInput
  }

  /**
   * UserExamAnswerChoice findUniqueOrThrow
   */
  export type UserExamAnswerChoiceFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswerChoice to fetch.
     */
    where: UserExamAnswerChoiceWhereUniqueInput
  }

  /**
   * UserExamAnswerChoice findFirst
   */
  export type UserExamAnswerChoiceFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswerChoice to fetch.
     */
    where?: UserExamAnswerChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAnswerChoices to fetch.
     */
    orderBy?: UserExamAnswerChoiceOrderByWithRelationInput | UserExamAnswerChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExamAnswerChoices.
     */
    cursor?: UserExamAnswerChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAnswerChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAnswerChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExamAnswerChoices.
     */
    distinct?: UserExamAnswerChoiceScalarFieldEnum | UserExamAnswerChoiceScalarFieldEnum[]
  }

  /**
   * UserExamAnswerChoice findFirstOrThrow
   */
  export type UserExamAnswerChoiceFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswerChoice to fetch.
     */
    where?: UserExamAnswerChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAnswerChoices to fetch.
     */
    orderBy?: UserExamAnswerChoiceOrderByWithRelationInput | UserExamAnswerChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserExamAnswerChoices.
     */
    cursor?: UserExamAnswerChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAnswerChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAnswerChoices.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserExamAnswerChoices.
     */
    distinct?: UserExamAnswerChoiceScalarFieldEnum | UserExamAnswerChoiceScalarFieldEnum[]
  }

  /**
   * UserExamAnswerChoice findMany
   */
  export type UserExamAnswerChoiceFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    /**
     * Filter, which UserExamAnswerChoices to fetch.
     */
    where?: UserExamAnswerChoiceWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserExamAnswerChoices to fetch.
     */
    orderBy?: UserExamAnswerChoiceOrderByWithRelationInput | UserExamAnswerChoiceOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserExamAnswerChoices.
     */
    cursor?: UserExamAnswerChoiceWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserExamAnswerChoices from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserExamAnswerChoices.
     */
    skip?: number
    distinct?: UserExamAnswerChoiceScalarFieldEnum | UserExamAnswerChoiceScalarFieldEnum[]
  }

  /**
   * UserExamAnswerChoice create
   */
  export type UserExamAnswerChoiceCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    /**
     * The data needed to create a UserExamAnswerChoice.
     */
    data: XOR<UserExamAnswerChoiceCreateInput, UserExamAnswerChoiceUncheckedCreateInput>
  }

  /**
   * UserExamAnswerChoice createMany
   */
  export type UserExamAnswerChoiceCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserExamAnswerChoices.
     */
    data: UserExamAnswerChoiceCreateManyInput | UserExamAnswerChoiceCreateManyInput[]
  }

  /**
   * UserExamAnswerChoice createManyAndReturn
   */
  export type UserExamAnswerChoiceCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * The data used to create many UserExamAnswerChoices.
     */
    data: UserExamAnswerChoiceCreateManyInput | UserExamAnswerChoiceCreateManyInput[]
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserExamAnswerChoice update
   */
  export type UserExamAnswerChoiceUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    /**
     * The data needed to update a UserExamAnswerChoice.
     */
    data: XOR<UserExamAnswerChoiceUpdateInput, UserExamAnswerChoiceUncheckedUpdateInput>
    /**
     * Choose, which UserExamAnswerChoice to update.
     */
    where: UserExamAnswerChoiceWhereUniqueInput
  }

  /**
   * UserExamAnswerChoice updateMany
   */
  export type UserExamAnswerChoiceUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserExamAnswerChoices.
     */
    data: XOR<UserExamAnswerChoiceUpdateManyMutationInput, UserExamAnswerChoiceUncheckedUpdateManyInput>
    /**
     * Filter which UserExamAnswerChoices to update
     */
    where?: UserExamAnswerChoiceWhereInput
  }

  /**
   * UserExamAnswerChoice upsert
   */
  export type UserExamAnswerChoiceUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    /**
     * The filter to search for the UserExamAnswerChoice to update in case it exists.
     */
    where: UserExamAnswerChoiceWhereUniqueInput
    /**
     * In case the UserExamAnswerChoice found by the `where` argument doesn't exist, create a new UserExamAnswerChoice with this data.
     */
    create: XOR<UserExamAnswerChoiceCreateInput, UserExamAnswerChoiceUncheckedCreateInput>
    /**
     * In case the UserExamAnswerChoice was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserExamAnswerChoiceUpdateInput, UserExamAnswerChoiceUncheckedUpdateInput>
  }

  /**
   * UserExamAnswerChoice delete
   */
  export type UserExamAnswerChoiceDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
    /**
     * Filter which UserExamAnswerChoice to delete.
     */
    where: UserExamAnswerChoiceWhereUniqueInput
  }

  /**
   * UserExamAnswerChoice deleteMany
   */
  export type UserExamAnswerChoiceDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserExamAnswerChoices to delete
     */
    where?: UserExamAnswerChoiceWhereInput
  }

  /**
   * UserExamAnswerChoice without action
   */
  export type UserExamAnswerChoiceDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserExamAnswerChoice
     */
    select?: UserExamAnswerChoiceSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserExamAnswerChoiceInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    lineUid: 'lineUid',
    displayName: 'displayName',
    pictureUrl: 'pictureUrl',
    statusMessage: 'statusMessage',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ExamScalarFieldEnum: {
    id: 'id',
    code: 'code',
    title: 'title',
    isQuestionOrderRandom: 'isQuestionOrderRandom',
    isChoicesOrderRandom: 'isChoicesOrderRandom',
    passingScore: 'passingScore',
    questionCount: 'questionCount',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ExamScalarFieldEnum = (typeof ExamScalarFieldEnum)[keyof typeof ExamScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    examId: 'examId',
    text: 'text',
    infoText: 'infoText',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const ChoiceScalarFieldEnum: {
    id: 'id',
    questionId: 'questionId',
    text: 'text',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ChoiceScalarFieldEnum = (typeof ChoiceScalarFieldEnum)[keyof typeof ChoiceScalarFieldEnum]


  export const UserExamJoinScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    examId: 'examId',
    createdAt: 'createdAt'
  };

  export type UserExamJoinScalarFieldEnum = (typeof UserExamJoinScalarFieldEnum)[keyof typeof UserExamJoinScalarFieldEnum]


  export const UserExamAnswerScalarFieldEnum: {
    id: 'id',
    userExamJoinId: 'userExamJoinId',
    isPassed: 'isPassed',
    createdAt: 'createdAt'
  };

  export type UserExamAnswerScalarFieldEnum = (typeof UserExamAnswerScalarFieldEnum)[keyof typeof UserExamAnswerScalarFieldEnum]


  export const UserExamAnswerChoiceScalarFieldEnum: {
    id: 'id',
    userExamAnswerId: 'userExamAnswerId',
    questionId: 'questionId',
    choiceId: 'choiceId',
    isCorrect: 'isCorrect',
    createdAt: 'createdAt'
  };

  export type UserExamAnswerChoiceScalarFieldEnum = (typeof UserExamAnswerChoiceScalarFieldEnum)[keyof typeof UserExamAnswerChoiceScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references 
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    lineUid?: StringFilter<"User"> | string
    displayName?: StringFilter<"User"> | string
    pictureUrl?: StringNullableFilter<"User"> | string | null
    statusMessage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userExamJoins?: UserExamJoinListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    lineUid?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    statusMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userExamJoins?: UserExamJoinOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    lineUid?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    displayName?: StringFilter<"User"> | string
    pictureUrl?: StringNullableFilter<"User"> | string | null
    statusMessage?: StringNullableFilter<"User"> | string | null
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    userExamJoins?: UserExamJoinListRelationFilter
  }, "id" | "lineUid">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    lineUid?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrderInput | SortOrder
    statusMessage?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    lineUid?: StringWithAggregatesFilter<"User"> | string
    displayName?: StringWithAggregatesFilter<"User"> | string
    pictureUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    statusMessage?: StringNullableWithAggregatesFilter<"User"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ExamWhereInput = {
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    id?: StringFilter<"Exam"> | string
    code?: StringFilter<"Exam"> | string
    title?: StringFilter<"Exam"> | string
    isQuestionOrderRandom?: BoolFilter<"Exam"> | boolean
    isChoicesOrderRandom?: BoolFilter<"Exam"> | boolean
    passingScore?: IntFilter<"Exam"> | number
    questionCount?: IntFilter<"Exam"> | number
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    updatedAt?: DateTimeFilter<"Exam"> | Date | string
    questions?: QuestionListRelationFilter
    userExamJoins?: UserExamJoinListRelationFilter
  }

  export type ExamOrderByWithRelationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    isQuestionOrderRandom?: SortOrder
    isChoicesOrderRandom?: SortOrder
    passingScore?: SortOrder
    questionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    questions?: QuestionOrderByRelationAggregateInput
    userExamJoins?: UserExamJoinOrderByRelationAggregateInput
  }

  export type ExamWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    code?: string
    AND?: ExamWhereInput | ExamWhereInput[]
    OR?: ExamWhereInput[]
    NOT?: ExamWhereInput | ExamWhereInput[]
    title?: StringFilter<"Exam"> | string
    isQuestionOrderRandom?: BoolFilter<"Exam"> | boolean
    isChoicesOrderRandom?: BoolFilter<"Exam"> | boolean
    passingScore?: IntFilter<"Exam"> | number
    questionCount?: IntFilter<"Exam"> | number
    createdAt?: DateTimeFilter<"Exam"> | Date | string
    updatedAt?: DateTimeFilter<"Exam"> | Date | string
    questions?: QuestionListRelationFilter
    userExamJoins?: UserExamJoinListRelationFilter
  }, "id" | "code">

  export type ExamOrderByWithAggregationInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    isQuestionOrderRandom?: SortOrder
    isChoicesOrderRandom?: SortOrder
    passingScore?: SortOrder
    questionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ExamCountOrderByAggregateInput
    _avg?: ExamAvgOrderByAggregateInput
    _max?: ExamMaxOrderByAggregateInput
    _min?: ExamMinOrderByAggregateInput
    _sum?: ExamSumOrderByAggregateInput
  }

  export type ExamScalarWhereWithAggregatesInput = {
    AND?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    OR?: ExamScalarWhereWithAggregatesInput[]
    NOT?: ExamScalarWhereWithAggregatesInput | ExamScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Exam"> | string
    code?: StringWithAggregatesFilter<"Exam"> | string
    title?: StringWithAggregatesFilter<"Exam"> | string
    isQuestionOrderRandom?: BoolWithAggregatesFilter<"Exam"> | boolean
    isChoicesOrderRandom?: BoolWithAggregatesFilter<"Exam"> | boolean
    passingScore?: IntWithAggregatesFilter<"Exam"> | number
    questionCount?: IntWithAggregatesFilter<"Exam"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Exam"> | Date | string
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    examId?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    infoText?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    choices?: ChoiceListRelationFilter
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    userExamAnswerChoices?: UserExamAnswerChoiceListRelationFilter
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    infoText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    choices?: ChoiceOrderByRelationAggregateInput
    exam?: ExamOrderByWithRelationInput
    userExamAnswerChoices?: UserExamAnswerChoiceOrderByRelationAggregateInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    examId?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    infoText?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    choices?: ChoiceListRelationFilter
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    userExamAnswerChoices?: UserExamAnswerChoiceListRelationFilter
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    infoText?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    examId?: StringWithAggregatesFilter<"Question"> | string
    text?: StringWithAggregatesFilter<"Question"> | string
    infoText?: StringNullableWithAggregatesFilter<"Question"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
  }

  export type ChoiceWhereInput = {
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    id?: StringFilter<"Choice"> | string
    questionId?: StringFilter<"Choice"> | string
    text?: StringFilter<"Choice"> | string
    isCorrect?: BoolFilter<"Choice"> | boolean
    createdAt?: DateTimeFilter<"Choice"> | Date | string
    updatedAt?: DateTimeFilter<"Choice"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    userExamAnswerChoices?: UserExamAnswerChoiceListRelationFilter
  }

  export type ChoiceOrderByWithRelationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: QuestionOrderByWithRelationInput
    userExamAnswerChoices?: UserExamAnswerChoiceOrderByRelationAggregateInput
  }

  export type ChoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ChoiceWhereInput | ChoiceWhereInput[]
    OR?: ChoiceWhereInput[]
    NOT?: ChoiceWhereInput | ChoiceWhereInput[]
    questionId?: StringFilter<"Choice"> | string
    text?: StringFilter<"Choice"> | string
    isCorrect?: BoolFilter<"Choice"> | boolean
    createdAt?: DateTimeFilter<"Choice"> | Date | string
    updatedAt?: DateTimeFilter<"Choice"> | Date | string
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    userExamAnswerChoices?: UserExamAnswerChoiceListRelationFilter
  }, "id">

  export type ChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ChoiceCountOrderByAggregateInput
    _max?: ChoiceMaxOrderByAggregateInput
    _min?: ChoiceMinOrderByAggregateInput
  }

  export type ChoiceScalarWhereWithAggregatesInput = {
    AND?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    OR?: ChoiceScalarWhereWithAggregatesInput[]
    NOT?: ChoiceScalarWhereWithAggregatesInput | ChoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Choice"> | string
    questionId?: StringWithAggregatesFilter<"Choice"> | string
    text?: StringWithAggregatesFilter<"Choice"> | string
    isCorrect?: BoolWithAggregatesFilter<"Choice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Choice"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Choice"> | Date | string
  }

  export type UserExamJoinWhereInput = {
    AND?: UserExamJoinWhereInput | UserExamJoinWhereInput[]
    OR?: UserExamJoinWhereInput[]
    NOT?: UserExamJoinWhereInput | UserExamJoinWhereInput[]
    id?: StringFilter<"UserExamJoin"> | string
    userId?: StringFilter<"UserExamJoin"> | string
    examId?: StringFilter<"UserExamJoin"> | string
    createdAt?: DateTimeFilter<"UserExamJoin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    userExamAnswers?: UserExamAnswerListRelationFilter
  }

  export type UserExamJoinOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    user?: UserOrderByWithRelationInput
    exam?: ExamOrderByWithRelationInput
    userExamAnswers?: UserExamAnswerOrderByRelationAggregateInput
  }

  export type UserExamJoinWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserExamJoinWhereInput | UserExamJoinWhereInput[]
    OR?: UserExamJoinWhereInput[]
    NOT?: UserExamJoinWhereInput | UserExamJoinWhereInput[]
    userId?: StringFilter<"UserExamJoin"> | string
    examId?: StringFilter<"UserExamJoin"> | string
    createdAt?: DateTimeFilter<"UserExamJoin"> | Date | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    exam?: XOR<ExamScalarRelationFilter, ExamWhereInput>
    userExamAnswers?: UserExamAnswerListRelationFilter
  }, "id">

  export type UserExamJoinOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
    _count?: UserExamJoinCountOrderByAggregateInput
    _max?: UserExamJoinMaxOrderByAggregateInput
    _min?: UserExamJoinMinOrderByAggregateInput
  }

  export type UserExamJoinScalarWhereWithAggregatesInput = {
    AND?: UserExamJoinScalarWhereWithAggregatesInput | UserExamJoinScalarWhereWithAggregatesInput[]
    OR?: UserExamJoinScalarWhereWithAggregatesInput[]
    NOT?: UserExamJoinScalarWhereWithAggregatesInput | UserExamJoinScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserExamJoin"> | string
    userId?: StringWithAggregatesFilter<"UserExamJoin"> | string
    examId?: StringWithAggregatesFilter<"UserExamJoin"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserExamJoin"> | Date | string
  }

  export type UserExamAnswerWhereInput = {
    AND?: UserExamAnswerWhereInput | UserExamAnswerWhereInput[]
    OR?: UserExamAnswerWhereInput[]
    NOT?: UserExamAnswerWhereInput | UserExamAnswerWhereInput[]
    id?: StringFilter<"UserExamAnswer"> | string
    userExamJoinId?: StringFilter<"UserExamAnswer"> | string
    isPassed?: BoolFilter<"UserExamAnswer"> | boolean
    createdAt?: DateTimeFilter<"UserExamAnswer"> | Date | string
    userExamJoin?: XOR<UserExamJoinScalarRelationFilter, UserExamJoinWhereInput>
    userExamAnswerChoices?: UserExamAnswerChoiceListRelationFilter
  }

  export type UserExamAnswerOrderByWithRelationInput = {
    id?: SortOrder
    userExamJoinId?: SortOrder
    isPassed?: SortOrder
    createdAt?: SortOrder
    userExamJoin?: UserExamJoinOrderByWithRelationInput
    userExamAnswerChoices?: UserExamAnswerChoiceOrderByRelationAggregateInput
  }

  export type UserExamAnswerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserExamAnswerWhereInput | UserExamAnswerWhereInput[]
    OR?: UserExamAnswerWhereInput[]
    NOT?: UserExamAnswerWhereInput | UserExamAnswerWhereInput[]
    userExamJoinId?: StringFilter<"UserExamAnswer"> | string
    isPassed?: BoolFilter<"UserExamAnswer"> | boolean
    createdAt?: DateTimeFilter<"UserExamAnswer"> | Date | string
    userExamJoin?: XOR<UserExamJoinScalarRelationFilter, UserExamJoinWhereInput>
    userExamAnswerChoices?: UserExamAnswerChoiceListRelationFilter
  }, "id">

  export type UserExamAnswerOrderByWithAggregationInput = {
    id?: SortOrder
    userExamJoinId?: SortOrder
    isPassed?: SortOrder
    createdAt?: SortOrder
    _count?: UserExamAnswerCountOrderByAggregateInput
    _max?: UserExamAnswerMaxOrderByAggregateInput
    _min?: UserExamAnswerMinOrderByAggregateInput
  }

  export type UserExamAnswerScalarWhereWithAggregatesInput = {
    AND?: UserExamAnswerScalarWhereWithAggregatesInput | UserExamAnswerScalarWhereWithAggregatesInput[]
    OR?: UserExamAnswerScalarWhereWithAggregatesInput[]
    NOT?: UserExamAnswerScalarWhereWithAggregatesInput | UserExamAnswerScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserExamAnswer"> | string
    userExamJoinId?: StringWithAggregatesFilter<"UserExamAnswer"> | string
    isPassed?: BoolWithAggregatesFilter<"UserExamAnswer"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserExamAnswer"> | Date | string
  }

  export type UserExamAnswerChoiceWhereInput = {
    AND?: UserExamAnswerChoiceWhereInput | UserExamAnswerChoiceWhereInput[]
    OR?: UserExamAnswerChoiceWhereInput[]
    NOT?: UserExamAnswerChoiceWhereInput | UserExamAnswerChoiceWhereInput[]
    id?: StringFilter<"UserExamAnswerChoice"> | string
    userExamAnswerId?: StringFilter<"UserExamAnswerChoice"> | string
    questionId?: StringFilter<"UserExamAnswerChoice"> | string
    choiceId?: StringFilter<"UserExamAnswerChoice"> | string
    isCorrect?: BoolFilter<"UserExamAnswerChoice"> | boolean
    createdAt?: DateTimeFilter<"UserExamAnswerChoice"> | Date | string
    userExamAnswer?: XOR<UserExamAnswerScalarRelationFilter, UserExamAnswerWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    choice?: XOR<ChoiceScalarRelationFilter, ChoiceWhereInput>
  }

  export type UserExamAnswerChoiceOrderByWithRelationInput = {
    id?: SortOrder
    userExamAnswerId?: SortOrder
    questionId?: SortOrder
    choiceId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    userExamAnswer?: UserExamAnswerOrderByWithRelationInput
    question?: QuestionOrderByWithRelationInput
    choice?: ChoiceOrderByWithRelationInput
  }

  export type UserExamAnswerChoiceWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserExamAnswerChoiceWhereInput | UserExamAnswerChoiceWhereInput[]
    OR?: UserExamAnswerChoiceWhereInput[]
    NOT?: UserExamAnswerChoiceWhereInput | UserExamAnswerChoiceWhereInput[]
    userExamAnswerId?: StringFilter<"UserExamAnswerChoice"> | string
    questionId?: StringFilter<"UserExamAnswerChoice"> | string
    choiceId?: StringFilter<"UserExamAnswerChoice"> | string
    isCorrect?: BoolFilter<"UserExamAnswerChoice"> | boolean
    createdAt?: DateTimeFilter<"UserExamAnswerChoice"> | Date | string
    userExamAnswer?: XOR<UserExamAnswerScalarRelationFilter, UserExamAnswerWhereInput>
    question?: XOR<QuestionScalarRelationFilter, QuestionWhereInput>
    choice?: XOR<ChoiceScalarRelationFilter, ChoiceWhereInput>
  }, "id">

  export type UserExamAnswerChoiceOrderByWithAggregationInput = {
    id?: SortOrder
    userExamAnswerId?: SortOrder
    questionId?: SortOrder
    choiceId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    _count?: UserExamAnswerChoiceCountOrderByAggregateInput
    _max?: UserExamAnswerChoiceMaxOrderByAggregateInput
    _min?: UserExamAnswerChoiceMinOrderByAggregateInput
  }

  export type UserExamAnswerChoiceScalarWhereWithAggregatesInput = {
    AND?: UserExamAnswerChoiceScalarWhereWithAggregatesInput | UserExamAnswerChoiceScalarWhereWithAggregatesInput[]
    OR?: UserExamAnswerChoiceScalarWhereWithAggregatesInput[]
    NOT?: UserExamAnswerChoiceScalarWhereWithAggregatesInput | UserExamAnswerChoiceScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserExamAnswerChoice"> | string
    userExamAnswerId?: StringWithAggregatesFilter<"UserExamAnswerChoice"> | string
    questionId?: StringWithAggregatesFilter<"UserExamAnswerChoice"> | string
    choiceId?: StringWithAggregatesFilter<"UserExamAnswerChoice"> | string
    isCorrect?: BoolWithAggregatesFilter<"UserExamAnswerChoice"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"UserExamAnswerChoice"> | Date | string
  }

  export type UserCreateInput = {
    id: string
    lineUid: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userExamJoins?: UserExamJoinCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    lineUid: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userExamJoins?: UserExamJoinUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamJoins?: UserExamJoinUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamJoins?: UserExamJoinUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    lineUid: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamCreateInput = {
    id: string
    code: string
    title: string
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore: number
    questionCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutExamInput
    userExamJoins?: UserExamJoinCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateInput = {
    id: string
    code: string
    title: string
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore: number
    questionCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
    userExamJoins?: UserExamJoinUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isQuestionOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    isChoicesOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    passingScore?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutExamNestedInput
    userExamJoins?: UserExamJoinUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isQuestionOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    isChoicesOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    passingScore?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
    userExamJoins?: UserExamJoinUncheckedUpdateManyWithoutExamNestedInput
  }

  export type ExamCreateManyInput = {
    id: string
    code: string
    title: string
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore: number
    questionCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ExamUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isQuestionOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    isChoicesOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    passingScore?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isQuestionOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    isChoicesOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    passingScore?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateInput = {
    id: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: ChoiceCreateNestedManyWithoutQuestionInput
    exam: ExamCreateNestedOneWithoutQuestionsInput
    userExamAnswerChoices?: UserExamAnswerChoiceCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateInput = {
    id: string
    examId: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUpdateManyWithoutQuestionNestedInput
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    userExamAnswerChoices?: UserExamAnswerChoiceUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionCreateManyInput = {
    id: string
    examId: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateInput = {
    id: string
    text: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutChoicesInput
    userExamAnswerChoices?: UserExamAnswerChoiceCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateInput = {
    id: string
    questionId: string
    text: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutChoicesNestedInput
    userExamAnswerChoices?: UserExamAnswerChoiceUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceCreateManyInput = {
    id: string
    questionId: string
    text: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamJoinCreateInput = {
    id: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserExamJoinsInput
    exam: ExamCreateNestedOneWithoutUserExamJoinsInput
    userExamAnswers?: UserExamAnswerCreateNestedManyWithoutUserExamJoinInput
  }

  export type UserExamJoinUncheckedCreateInput = {
    id: string
    userId: string
    examId: string
    createdAt?: Date | string
    userExamAnswers?: UserExamAnswerUncheckedCreateNestedManyWithoutUserExamJoinInput
  }

  export type UserExamJoinUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserExamJoinsNestedInput
    exam?: ExamUpdateOneRequiredWithoutUserExamJoinsNestedInput
    userExamAnswers?: UserExamAnswerUpdateManyWithoutUserExamJoinNestedInput
  }

  export type UserExamJoinUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswers?: UserExamAnswerUncheckedUpdateManyWithoutUserExamJoinNestedInput
  }

  export type UserExamJoinCreateManyInput = {
    id: string
    userId: string
    examId: string
    createdAt?: Date | string
  }

  export type UserExamJoinUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamJoinUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerCreateInput = {
    id: string
    isPassed: boolean
    createdAt?: Date | string
    userExamJoin: UserExamJoinCreateNestedOneWithoutUserExamAnswersInput
    userExamAnswerChoices?: UserExamAnswerChoiceCreateNestedManyWithoutUserExamAnswerInput
  }

  export type UserExamAnswerUncheckedCreateInput = {
    id: string
    userExamJoinId: string
    isPassed: boolean
    createdAt?: Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedCreateNestedManyWithoutUserExamAnswerInput
  }

  export type UserExamAnswerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamJoin?: UserExamJoinUpdateOneRequiredWithoutUserExamAnswersNestedInput
    userExamAnswerChoices?: UserExamAnswerChoiceUpdateManyWithoutUserExamAnswerNestedInput
  }

  export type UserExamAnswerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userExamJoinId?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedUpdateManyWithoutUserExamAnswerNestedInput
  }

  export type UserExamAnswerCreateManyInput = {
    id: string
    userExamJoinId: string
    isPassed: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userExamJoinId?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceCreateInput = {
    id: string
    isCorrect: boolean
    createdAt?: Date | string
    userExamAnswer: UserExamAnswerCreateNestedOneWithoutUserExamAnswerChoicesInput
    question: QuestionCreateNestedOneWithoutUserExamAnswerChoicesInput
    choice: ChoiceCreateNestedOneWithoutUserExamAnswerChoicesInput
  }

  export type UserExamAnswerChoiceUncheckedCreateInput = {
    id: string
    userExamAnswerId: string
    questionId: string
    choiceId: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerChoiceUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswer?: UserExamAnswerUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput
    question?: QuestionUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput
    choice?: ChoiceUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput
  }

  export type UserExamAnswerChoiceUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userExamAnswerId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    choiceId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceCreateManyInput = {
    id: string
    userExamAnswerId: string
    questionId: string
    choiceId: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerChoiceUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userExamAnswerId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    choiceId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserExamJoinListRelationFilter = {
    every?: UserExamJoinWhereInput
    some?: UserExamJoinWhereInput
    none?: UserExamJoinWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserExamJoinOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    lineUid?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrder
    statusMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    lineUid?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrder
    statusMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    lineUid?: SortOrder
    displayName?: SortOrder
    pictureUrl?: SortOrder
    statusMessage?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ExamCountOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    isQuestionOrderRandom?: SortOrder
    isChoicesOrderRandom?: SortOrder
    passingScore?: SortOrder
    questionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamAvgOrderByAggregateInput = {
    passingScore?: SortOrder
    questionCount?: SortOrder
  }

  export type ExamMaxOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    isQuestionOrderRandom?: SortOrder
    isChoicesOrderRandom?: SortOrder
    passingScore?: SortOrder
    questionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamMinOrderByAggregateInput = {
    id?: SortOrder
    code?: SortOrder
    title?: SortOrder
    isQuestionOrderRandom?: SortOrder
    isChoicesOrderRandom?: SortOrder
    passingScore?: SortOrder
    questionCount?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ExamSumOrderByAggregateInput = {
    passingScore?: SortOrder
    questionCount?: SortOrder
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type ChoiceListRelationFilter = {
    every?: ChoiceWhereInput
    some?: ChoiceWhereInput
    none?: ChoiceWhereInput
  }

  export type ExamScalarRelationFilter = {
    is?: ExamWhereInput
    isNot?: ExamWhereInput
  }

  export type UserExamAnswerChoiceListRelationFilter = {
    every?: UserExamAnswerChoiceWhereInput
    some?: UserExamAnswerChoiceWhereInput
    none?: UserExamAnswerChoiceWhereInput
  }

  export type ChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserExamAnswerChoiceOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    infoText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    infoText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    examId?: SortOrder
    text?: SortOrder
    infoText?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type QuestionScalarRelationFilter = {
    is?: QuestionWhereInput
    isNot?: QuestionWhereInput
  }

  export type ChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    questionId?: SortOrder
    text?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserExamAnswerListRelationFilter = {
    every?: UserExamAnswerWhereInput
    some?: UserExamAnswerWhereInput
    none?: UserExamAnswerWhereInput
  }

  export type UserExamAnswerOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserExamJoinCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExamJoinMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExamJoinMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    examId?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExamJoinScalarRelationFilter = {
    is?: UserExamJoinWhereInput
    isNot?: UserExamJoinWhereInput
  }

  export type UserExamAnswerCountOrderByAggregateInput = {
    id?: SortOrder
    userExamJoinId?: SortOrder
    isPassed?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExamAnswerMaxOrderByAggregateInput = {
    id?: SortOrder
    userExamJoinId?: SortOrder
    isPassed?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExamAnswerMinOrderByAggregateInput = {
    id?: SortOrder
    userExamJoinId?: SortOrder
    isPassed?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExamAnswerScalarRelationFilter = {
    is?: UserExamAnswerWhereInput
    isNot?: UserExamAnswerWhereInput
  }

  export type ChoiceScalarRelationFilter = {
    is?: ChoiceWhereInput
    isNot?: ChoiceWhereInput
  }

  export type UserExamAnswerChoiceCountOrderByAggregateInput = {
    id?: SortOrder
    userExamAnswerId?: SortOrder
    questionId?: SortOrder
    choiceId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExamAnswerChoiceMaxOrderByAggregateInput = {
    id?: SortOrder
    userExamAnswerId?: SortOrder
    questionId?: SortOrder
    choiceId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExamAnswerChoiceMinOrderByAggregateInput = {
    id?: SortOrder
    userExamAnswerId?: SortOrder
    questionId?: SortOrder
    choiceId?: SortOrder
    isCorrect?: SortOrder
    createdAt?: SortOrder
  }

  export type UserExamJoinCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExamJoinCreateWithoutUserInput, UserExamJoinUncheckedCreateWithoutUserInput> | UserExamJoinCreateWithoutUserInput[] | UserExamJoinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutUserInput | UserExamJoinCreateOrConnectWithoutUserInput[]
    createMany?: UserExamJoinCreateManyUserInputEnvelope
    connect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
  }

  export type UserExamJoinUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserExamJoinCreateWithoutUserInput, UserExamJoinUncheckedCreateWithoutUserInput> | UserExamJoinCreateWithoutUserInput[] | UserExamJoinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutUserInput | UserExamJoinCreateOrConnectWithoutUserInput[]
    createMany?: UserExamJoinCreateManyUserInputEnvelope
    connect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserExamJoinUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExamJoinCreateWithoutUserInput, UserExamJoinUncheckedCreateWithoutUserInput> | UserExamJoinCreateWithoutUserInput[] | UserExamJoinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutUserInput | UserExamJoinCreateOrConnectWithoutUserInput[]
    upsert?: UserExamJoinUpsertWithWhereUniqueWithoutUserInput | UserExamJoinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExamJoinCreateManyUserInputEnvelope
    set?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    disconnect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    delete?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    connect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    update?: UserExamJoinUpdateWithWhereUniqueWithoutUserInput | UserExamJoinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExamJoinUpdateManyWithWhereWithoutUserInput | UserExamJoinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExamJoinScalarWhereInput | UserExamJoinScalarWhereInput[]
  }

  export type UserExamJoinUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserExamJoinCreateWithoutUserInput, UserExamJoinUncheckedCreateWithoutUserInput> | UserExamJoinCreateWithoutUserInput[] | UserExamJoinUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutUserInput | UserExamJoinCreateOrConnectWithoutUserInput[]
    upsert?: UserExamJoinUpsertWithWhereUniqueWithoutUserInput | UserExamJoinUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserExamJoinCreateManyUserInputEnvelope
    set?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    disconnect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    delete?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    connect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    update?: UserExamJoinUpdateWithWhereUniqueWithoutUserInput | UserExamJoinUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserExamJoinUpdateManyWithWhereWithoutUserInput | UserExamJoinUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserExamJoinScalarWhereInput | UserExamJoinScalarWhereInput[]
  }

  export type QuestionCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserExamJoinCreateNestedManyWithoutExamInput = {
    create?: XOR<UserExamJoinCreateWithoutExamInput, UserExamJoinUncheckedCreateWithoutExamInput> | UserExamJoinCreateWithoutExamInput[] | UserExamJoinUncheckedCreateWithoutExamInput[]
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutExamInput | UserExamJoinCreateOrConnectWithoutExamInput[]
    createMany?: UserExamJoinCreateManyExamInputEnvelope
    connect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type UserExamJoinUncheckedCreateNestedManyWithoutExamInput = {
    create?: XOR<UserExamJoinCreateWithoutExamInput, UserExamJoinUncheckedCreateWithoutExamInput> | UserExamJoinCreateWithoutExamInput[] | UserExamJoinUncheckedCreateWithoutExamInput[]
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutExamInput | UserExamJoinCreateOrConnectWithoutExamInput[]
    createMany?: UserExamJoinCreateManyExamInputEnvelope
    connect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type QuestionUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserExamJoinUpdateManyWithoutExamNestedInput = {
    create?: XOR<UserExamJoinCreateWithoutExamInput, UserExamJoinUncheckedCreateWithoutExamInput> | UserExamJoinCreateWithoutExamInput[] | UserExamJoinUncheckedCreateWithoutExamInput[]
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutExamInput | UserExamJoinCreateOrConnectWithoutExamInput[]
    upsert?: UserExamJoinUpsertWithWhereUniqueWithoutExamInput | UserExamJoinUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: UserExamJoinCreateManyExamInputEnvelope
    set?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    disconnect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    delete?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    connect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    update?: UserExamJoinUpdateWithWhereUniqueWithoutExamInput | UserExamJoinUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: UserExamJoinUpdateManyWithWhereWithoutExamInput | UserExamJoinUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: UserExamJoinScalarWhereInput | UserExamJoinScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput> | QuestionCreateWithoutExamInput[] | QuestionUncheckedCreateWithoutExamInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutExamInput | QuestionCreateOrConnectWithoutExamInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutExamInput | QuestionUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: QuestionCreateManyExamInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutExamInput | QuestionUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutExamInput | QuestionUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type UserExamJoinUncheckedUpdateManyWithoutExamNestedInput = {
    create?: XOR<UserExamJoinCreateWithoutExamInput, UserExamJoinUncheckedCreateWithoutExamInput> | UserExamJoinCreateWithoutExamInput[] | UserExamJoinUncheckedCreateWithoutExamInput[]
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutExamInput | UserExamJoinCreateOrConnectWithoutExamInput[]
    upsert?: UserExamJoinUpsertWithWhereUniqueWithoutExamInput | UserExamJoinUpsertWithWhereUniqueWithoutExamInput[]
    createMany?: UserExamJoinCreateManyExamInputEnvelope
    set?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    disconnect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    delete?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    connect?: UserExamJoinWhereUniqueInput | UserExamJoinWhereUniqueInput[]
    update?: UserExamJoinUpdateWithWhereUniqueWithoutExamInput | UserExamJoinUpdateWithWhereUniqueWithoutExamInput[]
    updateMany?: UserExamJoinUpdateManyWithWhereWithoutExamInput | UserExamJoinUpdateManyWithWhereWithoutExamInput[]
    deleteMany?: UserExamJoinScalarWhereInput | UserExamJoinScalarWhereInput[]
  }

  export type ChoiceCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type ExamCreateNestedOneWithoutQuestionsInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
  }

  export type UserExamAnswerChoiceCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutQuestionInput, UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput> | UserExamAnswerChoiceCreateWithoutQuestionInput[] | UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutQuestionInput | UserExamAnswerChoiceCreateOrConnectWithoutQuestionInput[]
    createMany?: UserExamAnswerChoiceCreateManyQuestionInputEnvelope
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
  }

  export type ChoiceUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
  }

  export type UserExamAnswerChoiceUncheckedCreateNestedManyWithoutQuestionInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutQuestionInput, UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput> | UserExamAnswerChoiceCreateWithoutQuestionInput[] | UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutQuestionInput | UserExamAnswerChoiceCreateOrConnectWithoutQuestionInput[]
    createMany?: UserExamAnswerChoiceCreateManyQuestionInputEnvelope
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
  }

  export type ChoiceUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutQuestionInput | ChoiceUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutQuestionInput | ChoiceUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutQuestionInput | ChoiceUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type ExamUpdateOneRequiredWithoutQuestionsNestedInput = {
    create?: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutQuestionsInput
    upsert?: ExamUpsertWithoutQuestionsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutQuestionsInput, ExamUpdateWithoutQuestionsInput>, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type UserExamAnswerChoiceUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutQuestionInput, UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput> | UserExamAnswerChoiceCreateWithoutQuestionInput[] | UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutQuestionInput | UserExamAnswerChoiceCreateOrConnectWithoutQuestionInput[]
    upsert?: UserExamAnswerChoiceUpsertWithWhereUniqueWithoutQuestionInput | UserExamAnswerChoiceUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserExamAnswerChoiceCreateManyQuestionInputEnvelope
    set?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    disconnect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    delete?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    update?: UserExamAnswerChoiceUpdateWithWhereUniqueWithoutQuestionInput | UserExamAnswerChoiceUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserExamAnswerChoiceUpdateManyWithWhereWithoutQuestionInput | UserExamAnswerChoiceUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserExamAnswerChoiceScalarWhereInput | UserExamAnswerChoiceScalarWhereInput[]
  }

  export type ChoiceUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput> | ChoiceCreateWithoutQuestionInput[] | ChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: ChoiceCreateOrConnectWithoutQuestionInput | ChoiceCreateOrConnectWithoutQuestionInput[]
    upsert?: ChoiceUpsertWithWhereUniqueWithoutQuestionInput | ChoiceUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: ChoiceCreateManyQuestionInputEnvelope
    set?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    disconnect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    delete?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    connect?: ChoiceWhereUniqueInput | ChoiceWhereUniqueInput[]
    update?: ChoiceUpdateWithWhereUniqueWithoutQuestionInput | ChoiceUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: ChoiceUpdateManyWithWhereWithoutQuestionInput | ChoiceUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
  }

  export type UserExamAnswerChoiceUncheckedUpdateManyWithoutQuestionNestedInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutQuestionInput, UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput> | UserExamAnswerChoiceCreateWithoutQuestionInput[] | UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutQuestionInput | UserExamAnswerChoiceCreateOrConnectWithoutQuestionInput[]
    upsert?: UserExamAnswerChoiceUpsertWithWhereUniqueWithoutQuestionInput | UserExamAnswerChoiceUpsertWithWhereUniqueWithoutQuestionInput[]
    createMany?: UserExamAnswerChoiceCreateManyQuestionInputEnvelope
    set?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    disconnect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    delete?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    update?: UserExamAnswerChoiceUpdateWithWhereUniqueWithoutQuestionInput | UserExamAnswerChoiceUpdateWithWhereUniqueWithoutQuestionInput[]
    updateMany?: UserExamAnswerChoiceUpdateManyWithWhereWithoutQuestionInput | UserExamAnswerChoiceUpdateManyWithWhereWithoutQuestionInput[]
    deleteMany?: UserExamAnswerChoiceScalarWhereInput | UserExamAnswerChoiceScalarWhereInput[]
  }

  export type QuestionCreateNestedOneWithoutChoicesInput = {
    create?: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoicesInput
    connect?: QuestionWhereUniqueInput
  }

  export type UserExamAnswerChoiceCreateNestedManyWithoutChoiceInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutChoiceInput, UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput> | UserExamAnswerChoiceCreateWithoutChoiceInput[] | UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutChoiceInput | UserExamAnswerChoiceCreateOrConnectWithoutChoiceInput[]
    createMany?: UserExamAnswerChoiceCreateManyChoiceInputEnvelope
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
  }

  export type UserExamAnswerChoiceUncheckedCreateNestedManyWithoutChoiceInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutChoiceInput, UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput> | UserExamAnswerChoiceCreateWithoutChoiceInput[] | UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutChoiceInput | UserExamAnswerChoiceCreateOrConnectWithoutChoiceInput[]
    createMany?: UserExamAnswerChoiceCreateManyChoiceInputEnvelope
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
  }

  export type QuestionUpdateOneRequiredWithoutChoicesNestedInput = {
    create?: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutChoicesInput
    upsert?: QuestionUpsertWithoutChoicesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutChoicesInput, QuestionUpdateWithoutChoicesInput>, QuestionUncheckedUpdateWithoutChoicesInput>
  }

  export type UserExamAnswerChoiceUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutChoiceInput, UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput> | UserExamAnswerChoiceCreateWithoutChoiceInput[] | UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutChoiceInput | UserExamAnswerChoiceCreateOrConnectWithoutChoiceInput[]
    upsert?: UserExamAnswerChoiceUpsertWithWhereUniqueWithoutChoiceInput | UserExamAnswerChoiceUpsertWithWhereUniqueWithoutChoiceInput[]
    createMany?: UserExamAnswerChoiceCreateManyChoiceInputEnvelope
    set?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    disconnect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    delete?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    update?: UserExamAnswerChoiceUpdateWithWhereUniqueWithoutChoiceInput | UserExamAnswerChoiceUpdateWithWhereUniqueWithoutChoiceInput[]
    updateMany?: UserExamAnswerChoiceUpdateManyWithWhereWithoutChoiceInput | UserExamAnswerChoiceUpdateManyWithWhereWithoutChoiceInput[]
    deleteMany?: UserExamAnswerChoiceScalarWhereInput | UserExamAnswerChoiceScalarWhereInput[]
  }

  export type UserExamAnswerChoiceUncheckedUpdateManyWithoutChoiceNestedInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutChoiceInput, UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput> | UserExamAnswerChoiceCreateWithoutChoiceInput[] | UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutChoiceInput | UserExamAnswerChoiceCreateOrConnectWithoutChoiceInput[]
    upsert?: UserExamAnswerChoiceUpsertWithWhereUniqueWithoutChoiceInput | UserExamAnswerChoiceUpsertWithWhereUniqueWithoutChoiceInput[]
    createMany?: UserExamAnswerChoiceCreateManyChoiceInputEnvelope
    set?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    disconnect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    delete?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    update?: UserExamAnswerChoiceUpdateWithWhereUniqueWithoutChoiceInput | UserExamAnswerChoiceUpdateWithWhereUniqueWithoutChoiceInput[]
    updateMany?: UserExamAnswerChoiceUpdateManyWithWhereWithoutChoiceInput | UserExamAnswerChoiceUpdateManyWithWhereWithoutChoiceInput[]
    deleteMany?: UserExamAnswerChoiceScalarWhereInput | UserExamAnswerChoiceScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserExamJoinsInput = {
    create?: XOR<UserCreateWithoutUserExamJoinsInput, UserUncheckedCreateWithoutUserExamJoinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserExamJoinsInput
    connect?: UserWhereUniqueInput
  }

  export type ExamCreateNestedOneWithoutUserExamJoinsInput = {
    create?: XOR<ExamCreateWithoutUserExamJoinsInput, ExamUncheckedCreateWithoutUserExamJoinsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutUserExamJoinsInput
    connect?: ExamWhereUniqueInput
  }

  export type UserExamAnswerCreateNestedManyWithoutUserExamJoinInput = {
    create?: XOR<UserExamAnswerCreateWithoutUserExamJoinInput, UserExamAnswerUncheckedCreateWithoutUserExamJoinInput> | UserExamAnswerCreateWithoutUserExamJoinInput[] | UserExamAnswerUncheckedCreateWithoutUserExamJoinInput[]
    connectOrCreate?: UserExamAnswerCreateOrConnectWithoutUserExamJoinInput | UserExamAnswerCreateOrConnectWithoutUserExamJoinInput[]
    createMany?: UserExamAnswerCreateManyUserExamJoinInputEnvelope
    connect?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
  }

  export type UserExamAnswerUncheckedCreateNestedManyWithoutUserExamJoinInput = {
    create?: XOR<UserExamAnswerCreateWithoutUserExamJoinInput, UserExamAnswerUncheckedCreateWithoutUserExamJoinInput> | UserExamAnswerCreateWithoutUserExamJoinInput[] | UserExamAnswerUncheckedCreateWithoutUserExamJoinInput[]
    connectOrCreate?: UserExamAnswerCreateOrConnectWithoutUserExamJoinInput | UserExamAnswerCreateOrConnectWithoutUserExamJoinInput[]
    createMany?: UserExamAnswerCreateManyUserExamJoinInputEnvelope
    connect?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
  }

  export type UserUpdateOneRequiredWithoutUserExamJoinsNestedInput = {
    create?: XOR<UserCreateWithoutUserExamJoinsInput, UserUncheckedCreateWithoutUserExamJoinsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserExamJoinsInput
    upsert?: UserUpsertWithoutUserExamJoinsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserExamJoinsInput, UserUpdateWithoutUserExamJoinsInput>, UserUncheckedUpdateWithoutUserExamJoinsInput>
  }

  export type ExamUpdateOneRequiredWithoutUserExamJoinsNestedInput = {
    create?: XOR<ExamCreateWithoutUserExamJoinsInput, ExamUncheckedCreateWithoutUserExamJoinsInput>
    connectOrCreate?: ExamCreateOrConnectWithoutUserExamJoinsInput
    upsert?: ExamUpsertWithoutUserExamJoinsInput
    connect?: ExamWhereUniqueInput
    update?: XOR<XOR<ExamUpdateToOneWithWhereWithoutUserExamJoinsInput, ExamUpdateWithoutUserExamJoinsInput>, ExamUncheckedUpdateWithoutUserExamJoinsInput>
  }

  export type UserExamAnswerUpdateManyWithoutUserExamJoinNestedInput = {
    create?: XOR<UserExamAnswerCreateWithoutUserExamJoinInput, UserExamAnswerUncheckedCreateWithoutUserExamJoinInput> | UserExamAnswerCreateWithoutUserExamJoinInput[] | UserExamAnswerUncheckedCreateWithoutUserExamJoinInput[]
    connectOrCreate?: UserExamAnswerCreateOrConnectWithoutUserExamJoinInput | UserExamAnswerCreateOrConnectWithoutUserExamJoinInput[]
    upsert?: UserExamAnswerUpsertWithWhereUniqueWithoutUserExamJoinInput | UserExamAnswerUpsertWithWhereUniqueWithoutUserExamJoinInput[]
    createMany?: UserExamAnswerCreateManyUserExamJoinInputEnvelope
    set?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
    disconnect?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
    delete?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
    connect?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
    update?: UserExamAnswerUpdateWithWhereUniqueWithoutUserExamJoinInput | UserExamAnswerUpdateWithWhereUniqueWithoutUserExamJoinInput[]
    updateMany?: UserExamAnswerUpdateManyWithWhereWithoutUserExamJoinInput | UserExamAnswerUpdateManyWithWhereWithoutUserExamJoinInput[]
    deleteMany?: UserExamAnswerScalarWhereInput | UserExamAnswerScalarWhereInput[]
  }

  export type UserExamAnswerUncheckedUpdateManyWithoutUserExamJoinNestedInput = {
    create?: XOR<UserExamAnswerCreateWithoutUserExamJoinInput, UserExamAnswerUncheckedCreateWithoutUserExamJoinInput> | UserExamAnswerCreateWithoutUserExamJoinInput[] | UserExamAnswerUncheckedCreateWithoutUserExamJoinInput[]
    connectOrCreate?: UserExamAnswerCreateOrConnectWithoutUserExamJoinInput | UserExamAnswerCreateOrConnectWithoutUserExamJoinInput[]
    upsert?: UserExamAnswerUpsertWithWhereUniqueWithoutUserExamJoinInput | UserExamAnswerUpsertWithWhereUniqueWithoutUserExamJoinInput[]
    createMany?: UserExamAnswerCreateManyUserExamJoinInputEnvelope
    set?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
    disconnect?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
    delete?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
    connect?: UserExamAnswerWhereUniqueInput | UserExamAnswerWhereUniqueInput[]
    update?: UserExamAnswerUpdateWithWhereUniqueWithoutUserExamJoinInput | UserExamAnswerUpdateWithWhereUniqueWithoutUserExamJoinInput[]
    updateMany?: UserExamAnswerUpdateManyWithWhereWithoutUserExamJoinInput | UserExamAnswerUpdateManyWithWhereWithoutUserExamJoinInput[]
    deleteMany?: UserExamAnswerScalarWhereInput | UserExamAnswerScalarWhereInput[]
  }

  export type UserExamJoinCreateNestedOneWithoutUserExamAnswersInput = {
    create?: XOR<UserExamJoinCreateWithoutUserExamAnswersInput, UserExamJoinUncheckedCreateWithoutUserExamAnswersInput>
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutUserExamAnswersInput
    connect?: UserExamJoinWhereUniqueInput
  }

  export type UserExamAnswerChoiceCreateNestedManyWithoutUserExamAnswerInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutUserExamAnswerInput, UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput> | UserExamAnswerChoiceCreateWithoutUserExamAnswerInput[] | UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutUserExamAnswerInput | UserExamAnswerChoiceCreateOrConnectWithoutUserExamAnswerInput[]
    createMany?: UserExamAnswerChoiceCreateManyUserExamAnswerInputEnvelope
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
  }

  export type UserExamAnswerChoiceUncheckedCreateNestedManyWithoutUserExamAnswerInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutUserExamAnswerInput, UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput> | UserExamAnswerChoiceCreateWithoutUserExamAnswerInput[] | UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutUserExamAnswerInput | UserExamAnswerChoiceCreateOrConnectWithoutUserExamAnswerInput[]
    createMany?: UserExamAnswerChoiceCreateManyUserExamAnswerInputEnvelope
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
  }

  export type UserExamJoinUpdateOneRequiredWithoutUserExamAnswersNestedInput = {
    create?: XOR<UserExamJoinCreateWithoutUserExamAnswersInput, UserExamJoinUncheckedCreateWithoutUserExamAnswersInput>
    connectOrCreate?: UserExamJoinCreateOrConnectWithoutUserExamAnswersInput
    upsert?: UserExamJoinUpsertWithoutUserExamAnswersInput
    connect?: UserExamJoinWhereUniqueInput
    update?: XOR<XOR<UserExamJoinUpdateToOneWithWhereWithoutUserExamAnswersInput, UserExamJoinUpdateWithoutUserExamAnswersInput>, UserExamJoinUncheckedUpdateWithoutUserExamAnswersInput>
  }

  export type UserExamAnswerChoiceUpdateManyWithoutUserExamAnswerNestedInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutUserExamAnswerInput, UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput> | UserExamAnswerChoiceCreateWithoutUserExamAnswerInput[] | UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutUserExamAnswerInput | UserExamAnswerChoiceCreateOrConnectWithoutUserExamAnswerInput[]
    upsert?: UserExamAnswerChoiceUpsertWithWhereUniqueWithoutUserExamAnswerInput | UserExamAnswerChoiceUpsertWithWhereUniqueWithoutUserExamAnswerInput[]
    createMany?: UserExamAnswerChoiceCreateManyUserExamAnswerInputEnvelope
    set?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    disconnect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    delete?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    update?: UserExamAnswerChoiceUpdateWithWhereUniqueWithoutUserExamAnswerInput | UserExamAnswerChoiceUpdateWithWhereUniqueWithoutUserExamAnswerInput[]
    updateMany?: UserExamAnswerChoiceUpdateManyWithWhereWithoutUserExamAnswerInput | UserExamAnswerChoiceUpdateManyWithWhereWithoutUserExamAnswerInput[]
    deleteMany?: UserExamAnswerChoiceScalarWhereInput | UserExamAnswerChoiceScalarWhereInput[]
  }

  export type UserExamAnswerChoiceUncheckedUpdateManyWithoutUserExamAnswerNestedInput = {
    create?: XOR<UserExamAnswerChoiceCreateWithoutUserExamAnswerInput, UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput> | UserExamAnswerChoiceCreateWithoutUserExamAnswerInput[] | UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput[]
    connectOrCreate?: UserExamAnswerChoiceCreateOrConnectWithoutUserExamAnswerInput | UserExamAnswerChoiceCreateOrConnectWithoutUserExamAnswerInput[]
    upsert?: UserExamAnswerChoiceUpsertWithWhereUniqueWithoutUserExamAnswerInput | UserExamAnswerChoiceUpsertWithWhereUniqueWithoutUserExamAnswerInput[]
    createMany?: UserExamAnswerChoiceCreateManyUserExamAnswerInputEnvelope
    set?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    disconnect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    delete?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    connect?: UserExamAnswerChoiceWhereUniqueInput | UserExamAnswerChoiceWhereUniqueInput[]
    update?: UserExamAnswerChoiceUpdateWithWhereUniqueWithoutUserExamAnswerInput | UserExamAnswerChoiceUpdateWithWhereUniqueWithoutUserExamAnswerInput[]
    updateMany?: UserExamAnswerChoiceUpdateManyWithWhereWithoutUserExamAnswerInput | UserExamAnswerChoiceUpdateManyWithWhereWithoutUserExamAnswerInput[]
    deleteMany?: UserExamAnswerChoiceScalarWhereInput | UserExamAnswerChoiceScalarWhereInput[]
  }

  export type UserExamAnswerCreateNestedOneWithoutUserExamAnswerChoicesInput = {
    create?: XOR<UserExamAnswerCreateWithoutUserExamAnswerChoicesInput, UserExamAnswerUncheckedCreateWithoutUserExamAnswerChoicesInput>
    connectOrCreate?: UserExamAnswerCreateOrConnectWithoutUserExamAnswerChoicesInput
    connect?: UserExamAnswerWhereUniqueInput
  }

  export type QuestionCreateNestedOneWithoutUserExamAnswerChoicesInput = {
    create?: XOR<QuestionCreateWithoutUserExamAnswerChoicesInput, QuestionUncheckedCreateWithoutUserExamAnswerChoicesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUserExamAnswerChoicesInput
    connect?: QuestionWhereUniqueInput
  }

  export type ChoiceCreateNestedOneWithoutUserExamAnswerChoicesInput = {
    create?: XOR<ChoiceCreateWithoutUserExamAnswerChoicesInput, ChoiceUncheckedCreateWithoutUserExamAnswerChoicesInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutUserExamAnswerChoicesInput
    connect?: ChoiceWhereUniqueInput
  }

  export type UserExamAnswerUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput = {
    create?: XOR<UserExamAnswerCreateWithoutUserExamAnswerChoicesInput, UserExamAnswerUncheckedCreateWithoutUserExamAnswerChoicesInput>
    connectOrCreate?: UserExamAnswerCreateOrConnectWithoutUserExamAnswerChoicesInput
    upsert?: UserExamAnswerUpsertWithoutUserExamAnswerChoicesInput
    connect?: UserExamAnswerWhereUniqueInput
    update?: XOR<XOR<UserExamAnswerUpdateToOneWithWhereWithoutUserExamAnswerChoicesInput, UserExamAnswerUpdateWithoutUserExamAnswerChoicesInput>, UserExamAnswerUncheckedUpdateWithoutUserExamAnswerChoicesInput>
  }

  export type QuestionUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput = {
    create?: XOR<QuestionCreateWithoutUserExamAnswerChoicesInput, QuestionUncheckedCreateWithoutUserExamAnswerChoicesInput>
    connectOrCreate?: QuestionCreateOrConnectWithoutUserExamAnswerChoicesInput
    upsert?: QuestionUpsertWithoutUserExamAnswerChoicesInput
    connect?: QuestionWhereUniqueInput
    update?: XOR<XOR<QuestionUpdateToOneWithWhereWithoutUserExamAnswerChoicesInput, QuestionUpdateWithoutUserExamAnswerChoicesInput>, QuestionUncheckedUpdateWithoutUserExamAnswerChoicesInput>
  }

  export type ChoiceUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput = {
    create?: XOR<ChoiceCreateWithoutUserExamAnswerChoicesInput, ChoiceUncheckedCreateWithoutUserExamAnswerChoicesInput>
    connectOrCreate?: ChoiceCreateOrConnectWithoutUserExamAnswerChoicesInput
    upsert?: ChoiceUpsertWithoutUserExamAnswerChoicesInput
    connect?: ChoiceWhereUniqueInput
    update?: XOR<XOR<ChoiceUpdateToOneWithWhereWithoutUserExamAnswerChoicesInput, ChoiceUpdateWithoutUserExamAnswerChoicesInput>, ChoiceUncheckedUpdateWithoutUserExamAnswerChoicesInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[]
    notIn?: string[]
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | null
    notIn?: string[] | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | null
    notIn?: number[] | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[]
    notIn?: Date[] | string[]
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[]
    notIn?: number[]
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type UserExamJoinCreateWithoutUserInput = {
    id: string
    createdAt?: Date | string
    exam: ExamCreateNestedOneWithoutUserExamJoinsInput
    userExamAnswers?: UserExamAnswerCreateNestedManyWithoutUserExamJoinInput
  }

  export type UserExamJoinUncheckedCreateWithoutUserInput = {
    id: string
    examId: string
    createdAt?: Date | string
    userExamAnswers?: UserExamAnswerUncheckedCreateNestedManyWithoutUserExamJoinInput
  }

  export type UserExamJoinCreateOrConnectWithoutUserInput = {
    where: UserExamJoinWhereUniqueInput
    create: XOR<UserExamJoinCreateWithoutUserInput, UserExamJoinUncheckedCreateWithoutUserInput>
  }

  export type UserExamJoinCreateManyUserInputEnvelope = {
    data: UserExamJoinCreateManyUserInput | UserExamJoinCreateManyUserInput[]
  }

  export type UserExamJoinUpsertWithWhereUniqueWithoutUserInput = {
    where: UserExamJoinWhereUniqueInput
    update: XOR<UserExamJoinUpdateWithoutUserInput, UserExamJoinUncheckedUpdateWithoutUserInput>
    create: XOR<UserExamJoinCreateWithoutUserInput, UserExamJoinUncheckedCreateWithoutUserInput>
  }

  export type UserExamJoinUpdateWithWhereUniqueWithoutUserInput = {
    where: UserExamJoinWhereUniqueInput
    data: XOR<UserExamJoinUpdateWithoutUserInput, UserExamJoinUncheckedUpdateWithoutUserInput>
  }

  export type UserExamJoinUpdateManyWithWhereWithoutUserInput = {
    where: UserExamJoinScalarWhereInput
    data: XOR<UserExamJoinUpdateManyMutationInput, UserExamJoinUncheckedUpdateManyWithoutUserInput>
  }

  export type UserExamJoinScalarWhereInput = {
    AND?: UserExamJoinScalarWhereInput | UserExamJoinScalarWhereInput[]
    OR?: UserExamJoinScalarWhereInput[]
    NOT?: UserExamJoinScalarWhereInput | UserExamJoinScalarWhereInput[]
    id?: StringFilter<"UserExamJoin"> | string
    userId?: StringFilter<"UserExamJoin"> | string
    examId?: StringFilter<"UserExamJoin"> | string
    createdAt?: DateTimeFilter<"UserExamJoin"> | Date | string
  }

  export type QuestionCreateWithoutExamInput = {
    id: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: ChoiceCreateNestedManyWithoutQuestionInput
    userExamAnswerChoices?: UserExamAnswerChoiceCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutExamInput = {
    id: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutExamInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionCreateManyExamInputEnvelope = {
    data: QuestionCreateManyExamInput | QuestionCreateManyExamInput[]
  }

  export type UserExamJoinCreateWithoutExamInput = {
    id: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserExamJoinsInput
    userExamAnswers?: UserExamAnswerCreateNestedManyWithoutUserExamJoinInput
  }

  export type UserExamJoinUncheckedCreateWithoutExamInput = {
    id: string
    userId: string
    createdAt?: Date | string
    userExamAnswers?: UserExamAnswerUncheckedCreateNestedManyWithoutUserExamJoinInput
  }

  export type UserExamJoinCreateOrConnectWithoutExamInput = {
    where: UserExamJoinWhereUniqueInput
    create: XOR<UserExamJoinCreateWithoutExamInput, UserExamJoinUncheckedCreateWithoutExamInput>
  }

  export type UserExamJoinCreateManyExamInputEnvelope = {
    data: UserExamJoinCreateManyExamInput | UserExamJoinCreateManyExamInput[]
  }

  export type QuestionUpsertWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
    create: XOR<QuestionCreateWithoutExamInput, QuestionUncheckedCreateWithoutExamInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutExamInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutExamInput, QuestionUncheckedUpdateWithoutExamInput>
  }

  export type QuestionUpdateManyWithWhereWithoutExamInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutExamInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    examId?: StringFilter<"Question"> | string
    text?: StringFilter<"Question"> | string
    infoText?: StringNullableFilter<"Question"> | string | null
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
  }

  export type UserExamJoinUpsertWithWhereUniqueWithoutExamInput = {
    where: UserExamJoinWhereUniqueInput
    update: XOR<UserExamJoinUpdateWithoutExamInput, UserExamJoinUncheckedUpdateWithoutExamInput>
    create: XOR<UserExamJoinCreateWithoutExamInput, UserExamJoinUncheckedCreateWithoutExamInput>
  }

  export type UserExamJoinUpdateWithWhereUniqueWithoutExamInput = {
    where: UserExamJoinWhereUniqueInput
    data: XOR<UserExamJoinUpdateWithoutExamInput, UserExamJoinUncheckedUpdateWithoutExamInput>
  }

  export type UserExamJoinUpdateManyWithWhereWithoutExamInput = {
    where: UserExamJoinScalarWhereInput
    data: XOR<UserExamJoinUpdateManyMutationInput, UserExamJoinUncheckedUpdateManyWithoutExamInput>
  }

  export type ChoiceCreateWithoutQuestionInput = {
    id: string
    text: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceUncheckedCreateWithoutQuestionInput = {
    id: string
    text: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedCreateNestedManyWithoutChoiceInput
  }

  export type ChoiceCreateOrConnectWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceCreateManyQuestionInputEnvelope = {
    data: ChoiceCreateManyQuestionInput | ChoiceCreateManyQuestionInput[]
  }

  export type ExamCreateWithoutQuestionsInput = {
    id: string
    code: string
    title: string
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore: number
    questionCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userExamJoins?: UserExamJoinCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutQuestionsInput = {
    id: string
    code: string
    title: string
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore: number
    questionCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    userExamJoins?: UserExamJoinUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutQuestionsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
  }

  export type UserExamAnswerChoiceCreateWithoutQuestionInput = {
    id: string
    isCorrect: boolean
    createdAt?: Date | string
    userExamAnswer: UserExamAnswerCreateNestedOneWithoutUserExamAnswerChoicesInput
    choice: ChoiceCreateNestedOneWithoutUserExamAnswerChoicesInput
  }

  export type UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput = {
    id: string
    userExamAnswerId: string
    choiceId: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerChoiceCreateOrConnectWithoutQuestionInput = {
    where: UserExamAnswerChoiceWhereUniqueInput
    create: XOR<UserExamAnswerChoiceCreateWithoutQuestionInput, UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type UserExamAnswerChoiceCreateManyQuestionInputEnvelope = {
    data: UserExamAnswerChoiceCreateManyQuestionInput | UserExamAnswerChoiceCreateManyQuestionInput[]
  }

  export type ChoiceUpsertWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    update: XOR<ChoiceUpdateWithoutQuestionInput, ChoiceUncheckedUpdateWithoutQuestionInput>
    create: XOR<ChoiceCreateWithoutQuestionInput, ChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type ChoiceUpdateWithWhereUniqueWithoutQuestionInput = {
    where: ChoiceWhereUniqueInput
    data: XOR<ChoiceUpdateWithoutQuestionInput, ChoiceUncheckedUpdateWithoutQuestionInput>
  }

  export type ChoiceUpdateManyWithWhereWithoutQuestionInput = {
    where: ChoiceScalarWhereInput
    data: XOR<ChoiceUpdateManyMutationInput, ChoiceUncheckedUpdateManyWithoutQuestionInput>
  }

  export type ChoiceScalarWhereInput = {
    AND?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    OR?: ChoiceScalarWhereInput[]
    NOT?: ChoiceScalarWhereInput | ChoiceScalarWhereInput[]
    id?: StringFilter<"Choice"> | string
    questionId?: StringFilter<"Choice"> | string
    text?: StringFilter<"Choice"> | string
    isCorrect?: BoolFilter<"Choice"> | boolean
    createdAt?: DateTimeFilter<"Choice"> | Date | string
    updatedAt?: DateTimeFilter<"Choice"> | Date | string
  }

  export type ExamUpsertWithoutQuestionsInput = {
    update: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
    create: XOR<ExamCreateWithoutQuestionsInput, ExamUncheckedCreateWithoutQuestionsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutQuestionsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutQuestionsInput, ExamUncheckedUpdateWithoutQuestionsInput>
  }

  export type ExamUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isQuestionOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    isChoicesOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    passingScore?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamJoins?: UserExamJoinUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isQuestionOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    isChoicesOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    passingScore?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamJoins?: UserExamJoinUncheckedUpdateManyWithoutExamNestedInput
  }

  export type UserExamAnswerChoiceUpsertWithWhereUniqueWithoutQuestionInput = {
    where: UserExamAnswerChoiceWhereUniqueInput
    update: XOR<UserExamAnswerChoiceUpdateWithoutQuestionInput, UserExamAnswerChoiceUncheckedUpdateWithoutQuestionInput>
    create: XOR<UserExamAnswerChoiceCreateWithoutQuestionInput, UserExamAnswerChoiceUncheckedCreateWithoutQuestionInput>
  }

  export type UserExamAnswerChoiceUpdateWithWhereUniqueWithoutQuestionInput = {
    where: UserExamAnswerChoiceWhereUniqueInput
    data: XOR<UserExamAnswerChoiceUpdateWithoutQuestionInput, UserExamAnswerChoiceUncheckedUpdateWithoutQuestionInput>
  }

  export type UserExamAnswerChoiceUpdateManyWithWhereWithoutQuestionInput = {
    where: UserExamAnswerChoiceScalarWhereInput
    data: XOR<UserExamAnswerChoiceUpdateManyMutationInput, UserExamAnswerChoiceUncheckedUpdateManyWithoutQuestionInput>
  }

  export type UserExamAnswerChoiceScalarWhereInput = {
    AND?: UserExamAnswerChoiceScalarWhereInput | UserExamAnswerChoiceScalarWhereInput[]
    OR?: UserExamAnswerChoiceScalarWhereInput[]
    NOT?: UserExamAnswerChoiceScalarWhereInput | UserExamAnswerChoiceScalarWhereInput[]
    id?: StringFilter<"UserExamAnswerChoice"> | string
    userExamAnswerId?: StringFilter<"UserExamAnswerChoice"> | string
    questionId?: StringFilter<"UserExamAnswerChoice"> | string
    choiceId?: StringFilter<"UserExamAnswerChoice"> | string
    isCorrect?: BoolFilter<"UserExamAnswerChoice"> | boolean
    createdAt?: DateTimeFilter<"UserExamAnswerChoice"> | Date | string
  }

  export type QuestionCreateWithoutChoicesInput = {
    id: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    exam: ExamCreateNestedOneWithoutQuestionsInput
    userExamAnswerChoices?: UserExamAnswerChoiceCreateNestedManyWithoutQuestionInput
  }

  export type QuestionUncheckedCreateWithoutChoicesInput = {
    id: string
    examId: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutChoicesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
  }

  export type UserExamAnswerChoiceCreateWithoutChoiceInput = {
    id: string
    isCorrect: boolean
    createdAt?: Date | string
    userExamAnswer: UserExamAnswerCreateNestedOneWithoutUserExamAnswerChoicesInput
    question: QuestionCreateNestedOneWithoutUserExamAnswerChoicesInput
  }

  export type UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput = {
    id: string
    userExamAnswerId: string
    questionId: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerChoiceCreateOrConnectWithoutChoiceInput = {
    where: UserExamAnswerChoiceWhereUniqueInput
    create: XOR<UserExamAnswerChoiceCreateWithoutChoiceInput, UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput>
  }

  export type UserExamAnswerChoiceCreateManyChoiceInputEnvelope = {
    data: UserExamAnswerChoiceCreateManyChoiceInput | UserExamAnswerChoiceCreateManyChoiceInput[]
  }

  export type QuestionUpsertWithoutChoicesInput = {
    update: XOR<QuestionUpdateWithoutChoicesInput, QuestionUncheckedUpdateWithoutChoicesInput>
    create: XOR<QuestionCreateWithoutChoicesInput, QuestionUncheckedCreateWithoutChoicesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutChoicesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutChoicesInput, QuestionUncheckedUpdateWithoutChoicesInput>
  }

  export type QuestionUpdateWithoutChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
    userExamAnswerChoices?: UserExamAnswerChoiceUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type UserExamAnswerChoiceUpsertWithWhereUniqueWithoutChoiceInput = {
    where: UserExamAnswerChoiceWhereUniqueInput
    update: XOR<UserExamAnswerChoiceUpdateWithoutChoiceInput, UserExamAnswerChoiceUncheckedUpdateWithoutChoiceInput>
    create: XOR<UserExamAnswerChoiceCreateWithoutChoiceInput, UserExamAnswerChoiceUncheckedCreateWithoutChoiceInput>
  }

  export type UserExamAnswerChoiceUpdateWithWhereUniqueWithoutChoiceInput = {
    where: UserExamAnswerChoiceWhereUniqueInput
    data: XOR<UserExamAnswerChoiceUpdateWithoutChoiceInput, UserExamAnswerChoiceUncheckedUpdateWithoutChoiceInput>
  }

  export type UserExamAnswerChoiceUpdateManyWithWhereWithoutChoiceInput = {
    where: UserExamAnswerChoiceScalarWhereInput
    data: XOR<UserExamAnswerChoiceUpdateManyMutationInput, UserExamAnswerChoiceUncheckedUpdateManyWithoutChoiceInput>
  }

  export type UserCreateWithoutUserExamJoinsInput = {
    id: string
    lineUid: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserUncheckedCreateWithoutUserExamJoinsInput = {
    id: string
    lineUid: string
    displayName: string
    pictureUrl?: string | null
    statusMessage?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserCreateOrConnectWithoutUserExamJoinsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserExamJoinsInput, UserUncheckedCreateWithoutUserExamJoinsInput>
  }

  export type ExamCreateWithoutUserExamJoinsInput = {
    id: string
    code: string
    title: string
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore: number
    questionCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionCreateNestedManyWithoutExamInput
  }

  export type ExamUncheckedCreateWithoutUserExamJoinsInput = {
    id: string
    code: string
    title: string
    isQuestionOrderRandom?: boolean
    isChoicesOrderRandom?: boolean
    passingScore: number
    questionCount: number
    createdAt?: Date | string
    updatedAt?: Date | string
    questions?: QuestionUncheckedCreateNestedManyWithoutExamInput
  }

  export type ExamCreateOrConnectWithoutUserExamJoinsInput = {
    where: ExamWhereUniqueInput
    create: XOR<ExamCreateWithoutUserExamJoinsInput, ExamUncheckedCreateWithoutUserExamJoinsInput>
  }

  export type UserExamAnswerCreateWithoutUserExamJoinInput = {
    id: string
    isPassed: boolean
    createdAt?: Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceCreateNestedManyWithoutUserExamAnswerInput
  }

  export type UserExamAnswerUncheckedCreateWithoutUserExamJoinInput = {
    id: string
    isPassed: boolean
    createdAt?: Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedCreateNestedManyWithoutUserExamAnswerInput
  }

  export type UserExamAnswerCreateOrConnectWithoutUserExamJoinInput = {
    where: UserExamAnswerWhereUniqueInput
    create: XOR<UserExamAnswerCreateWithoutUserExamJoinInput, UserExamAnswerUncheckedCreateWithoutUserExamJoinInput>
  }

  export type UserExamAnswerCreateManyUserExamJoinInputEnvelope = {
    data: UserExamAnswerCreateManyUserExamJoinInput | UserExamAnswerCreateManyUserExamJoinInput[]
  }

  export type UserUpsertWithoutUserExamJoinsInput = {
    update: XOR<UserUpdateWithoutUserExamJoinsInput, UserUncheckedUpdateWithoutUserExamJoinsInput>
    create: XOR<UserCreateWithoutUserExamJoinsInput, UserUncheckedCreateWithoutUserExamJoinsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserExamJoinsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserExamJoinsInput, UserUncheckedUpdateWithoutUserExamJoinsInput>
  }

  export type UserUpdateWithoutUserExamJoinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutUserExamJoinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    lineUid?: StringFieldUpdateOperationsInput | string
    displayName?: StringFieldUpdateOperationsInput | string
    pictureUrl?: NullableStringFieldUpdateOperationsInput | string | null
    statusMessage?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ExamUpsertWithoutUserExamJoinsInput = {
    update: XOR<ExamUpdateWithoutUserExamJoinsInput, ExamUncheckedUpdateWithoutUserExamJoinsInput>
    create: XOR<ExamCreateWithoutUserExamJoinsInput, ExamUncheckedCreateWithoutUserExamJoinsInput>
    where?: ExamWhereInput
  }

  export type ExamUpdateToOneWithWhereWithoutUserExamJoinsInput = {
    where?: ExamWhereInput
    data: XOR<ExamUpdateWithoutUserExamJoinsInput, ExamUncheckedUpdateWithoutUserExamJoinsInput>
  }

  export type ExamUpdateWithoutUserExamJoinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isQuestionOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    isChoicesOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    passingScore?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUpdateManyWithoutExamNestedInput
  }

  export type ExamUncheckedUpdateWithoutUserExamJoinsInput = {
    id?: StringFieldUpdateOperationsInput | string
    code?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    isQuestionOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    isChoicesOrderRandom?: BoolFieldUpdateOperationsInput | boolean
    passingScore?: IntFieldUpdateOperationsInput | number
    questionCount?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    questions?: QuestionUncheckedUpdateManyWithoutExamNestedInput
  }

  export type UserExamAnswerUpsertWithWhereUniqueWithoutUserExamJoinInput = {
    where: UserExamAnswerWhereUniqueInput
    update: XOR<UserExamAnswerUpdateWithoutUserExamJoinInput, UserExamAnswerUncheckedUpdateWithoutUserExamJoinInput>
    create: XOR<UserExamAnswerCreateWithoutUserExamJoinInput, UserExamAnswerUncheckedCreateWithoutUserExamJoinInput>
  }

  export type UserExamAnswerUpdateWithWhereUniqueWithoutUserExamJoinInput = {
    where: UserExamAnswerWhereUniqueInput
    data: XOR<UserExamAnswerUpdateWithoutUserExamJoinInput, UserExamAnswerUncheckedUpdateWithoutUserExamJoinInput>
  }

  export type UserExamAnswerUpdateManyWithWhereWithoutUserExamJoinInput = {
    where: UserExamAnswerScalarWhereInput
    data: XOR<UserExamAnswerUpdateManyMutationInput, UserExamAnswerUncheckedUpdateManyWithoutUserExamJoinInput>
  }

  export type UserExamAnswerScalarWhereInput = {
    AND?: UserExamAnswerScalarWhereInput | UserExamAnswerScalarWhereInput[]
    OR?: UserExamAnswerScalarWhereInput[]
    NOT?: UserExamAnswerScalarWhereInput | UserExamAnswerScalarWhereInput[]
    id?: StringFilter<"UserExamAnswer"> | string
    userExamJoinId?: StringFilter<"UserExamAnswer"> | string
    isPassed?: BoolFilter<"UserExamAnswer"> | boolean
    createdAt?: DateTimeFilter<"UserExamAnswer"> | Date | string
  }

  export type UserExamJoinCreateWithoutUserExamAnswersInput = {
    id: string
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutUserExamJoinsInput
    exam: ExamCreateNestedOneWithoutUserExamJoinsInput
  }

  export type UserExamJoinUncheckedCreateWithoutUserExamAnswersInput = {
    id: string
    userId: string
    examId: string
    createdAt?: Date | string
  }

  export type UserExamJoinCreateOrConnectWithoutUserExamAnswersInput = {
    where: UserExamJoinWhereUniqueInput
    create: XOR<UserExamJoinCreateWithoutUserExamAnswersInput, UserExamJoinUncheckedCreateWithoutUserExamAnswersInput>
  }

  export type UserExamAnswerChoiceCreateWithoutUserExamAnswerInput = {
    id: string
    isCorrect: boolean
    createdAt?: Date | string
    question: QuestionCreateNestedOneWithoutUserExamAnswerChoicesInput
    choice: ChoiceCreateNestedOneWithoutUserExamAnswerChoicesInput
  }

  export type UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput = {
    id: string
    questionId: string
    choiceId: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerChoiceCreateOrConnectWithoutUserExamAnswerInput = {
    where: UserExamAnswerChoiceWhereUniqueInput
    create: XOR<UserExamAnswerChoiceCreateWithoutUserExamAnswerInput, UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput>
  }

  export type UserExamAnswerChoiceCreateManyUserExamAnswerInputEnvelope = {
    data: UserExamAnswerChoiceCreateManyUserExamAnswerInput | UserExamAnswerChoiceCreateManyUserExamAnswerInput[]
  }

  export type UserExamJoinUpsertWithoutUserExamAnswersInput = {
    update: XOR<UserExamJoinUpdateWithoutUserExamAnswersInput, UserExamJoinUncheckedUpdateWithoutUserExamAnswersInput>
    create: XOR<UserExamJoinCreateWithoutUserExamAnswersInput, UserExamJoinUncheckedCreateWithoutUserExamAnswersInput>
    where?: UserExamJoinWhereInput
  }

  export type UserExamJoinUpdateToOneWithWhereWithoutUserExamAnswersInput = {
    where?: UserExamJoinWhereInput
    data: XOR<UserExamJoinUpdateWithoutUserExamAnswersInput, UserExamJoinUncheckedUpdateWithoutUserExamAnswersInput>
  }

  export type UserExamJoinUpdateWithoutUserExamAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserExamJoinsNestedInput
    exam?: ExamUpdateOneRequiredWithoutUserExamJoinsNestedInput
  }

  export type UserExamJoinUncheckedUpdateWithoutUserExamAnswersInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceUpsertWithWhereUniqueWithoutUserExamAnswerInput = {
    where: UserExamAnswerChoiceWhereUniqueInput
    update: XOR<UserExamAnswerChoiceUpdateWithoutUserExamAnswerInput, UserExamAnswerChoiceUncheckedUpdateWithoutUserExamAnswerInput>
    create: XOR<UserExamAnswerChoiceCreateWithoutUserExamAnswerInput, UserExamAnswerChoiceUncheckedCreateWithoutUserExamAnswerInput>
  }

  export type UserExamAnswerChoiceUpdateWithWhereUniqueWithoutUserExamAnswerInput = {
    where: UserExamAnswerChoiceWhereUniqueInput
    data: XOR<UserExamAnswerChoiceUpdateWithoutUserExamAnswerInput, UserExamAnswerChoiceUncheckedUpdateWithoutUserExamAnswerInput>
  }

  export type UserExamAnswerChoiceUpdateManyWithWhereWithoutUserExamAnswerInput = {
    where: UserExamAnswerChoiceScalarWhereInput
    data: XOR<UserExamAnswerChoiceUpdateManyMutationInput, UserExamAnswerChoiceUncheckedUpdateManyWithoutUserExamAnswerInput>
  }

  export type UserExamAnswerCreateWithoutUserExamAnswerChoicesInput = {
    id: string
    isPassed: boolean
    createdAt?: Date | string
    userExamJoin: UserExamJoinCreateNestedOneWithoutUserExamAnswersInput
  }

  export type UserExamAnswerUncheckedCreateWithoutUserExamAnswerChoicesInput = {
    id: string
    userExamJoinId: string
    isPassed: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerCreateOrConnectWithoutUserExamAnswerChoicesInput = {
    where: UserExamAnswerWhereUniqueInput
    create: XOR<UserExamAnswerCreateWithoutUserExamAnswerChoicesInput, UserExamAnswerUncheckedCreateWithoutUserExamAnswerChoicesInput>
  }

  export type QuestionCreateWithoutUserExamAnswerChoicesInput = {
    id: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: ChoiceCreateNestedManyWithoutQuestionInput
    exam: ExamCreateNestedOneWithoutQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutUserExamAnswerChoicesInput = {
    id: string
    examId: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    choices?: ChoiceUncheckedCreateNestedManyWithoutQuestionInput
  }

  export type QuestionCreateOrConnectWithoutUserExamAnswerChoicesInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserExamAnswerChoicesInput, QuestionUncheckedCreateWithoutUserExamAnswerChoicesInput>
  }

  export type ChoiceCreateWithoutUserExamAnswerChoicesInput = {
    id: string
    text: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    question: QuestionCreateNestedOneWithoutChoicesInput
  }

  export type ChoiceUncheckedCreateWithoutUserExamAnswerChoicesInput = {
    id: string
    questionId: string
    text: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ChoiceCreateOrConnectWithoutUserExamAnswerChoicesInput = {
    where: ChoiceWhereUniqueInput
    create: XOR<ChoiceCreateWithoutUserExamAnswerChoicesInput, ChoiceUncheckedCreateWithoutUserExamAnswerChoicesInput>
  }

  export type UserExamAnswerUpsertWithoutUserExamAnswerChoicesInput = {
    update: XOR<UserExamAnswerUpdateWithoutUserExamAnswerChoicesInput, UserExamAnswerUncheckedUpdateWithoutUserExamAnswerChoicesInput>
    create: XOR<UserExamAnswerCreateWithoutUserExamAnswerChoicesInput, UserExamAnswerUncheckedCreateWithoutUserExamAnswerChoicesInput>
    where?: UserExamAnswerWhereInput
  }

  export type UserExamAnswerUpdateToOneWithWhereWithoutUserExamAnswerChoicesInput = {
    where?: UserExamAnswerWhereInput
    data: XOR<UserExamAnswerUpdateWithoutUserExamAnswerChoicesInput, UserExamAnswerUncheckedUpdateWithoutUserExamAnswerChoicesInput>
  }

  export type UserExamAnswerUpdateWithoutUserExamAnswerChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamJoin?: UserExamJoinUpdateOneRequiredWithoutUserExamAnswersNestedInput
  }

  export type UserExamAnswerUncheckedUpdateWithoutUserExamAnswerChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userExamJoinId?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionUpsertWithoutUserExamAnswerChoicesInput = {
    update: XOR<QuestionUpdateWithoutUserExamAnswerChoicesInput, QuestionUncheckedUpdateWithoutUserExamAnswerChoicesInput>
    create: XOR<QuestionCreateWithoutUserExamAnswerChoicesInput, QuestionUncheckedCreateWithoutUserExamAnswerChoicesInput>
    where?: QuestionWhereInput
  }

  export type QuestionUpdateToOneWithWhereWithoutUserExamAnswerChoicesInput = {
    where?: QuestionWhereInput
    data: XOR<QuestionUpdateWithoutUserExamAnswerChoicesInput, QuestionUncheckedUpdateWithoutUserExamAnswerChoicesInput>
  }

  export type QuestionUpdateWithoutUserExamAnswerChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUpdateManyWithoutQuestionNestedInput
    exam?: ExamUpdateOneRequiredWithoutQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserExamAnswerChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type ChoiceUpsertWithoutUserExamAnswerChoicesInput = {
    update: XOR<ChoiceUpdateWithoutUserExamAnswerChoicesInput, ChoiceUncheckedUpdateWithoutUserExamAnswerChoicesInput>
    create: XOR<ChoiceCreateWithoutUserExamAnswerChoicesInput, ChoiceUncheckedCreateWithoutUserExamAnswerChoicesInput>
    where?: ChoiceWhereInput
  }

  export type ChoiceUpdateToOneWithWhereWithoutUserExamAnswerChoicesInput = {
    where?: ChoiceWhereInput
    data: XOR<ChoiceUpdateWithoutUserExamAnswerChoicesInput, ChoiceUncheckedUpdateWithoutUserExamAnswerChoicesInput>
  }

  export type ChoiceUpdateWithoutUserExamAnswerChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutChoicesNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutUserExamAnswerChoicesInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamJoinCreateManyUserInput = {
    id: string
    examId: string
    createdAt?: Date | string
  }

  export type UserExamJoinUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    exam?: ExamUpdateOneRequiredWithoutUserExamJoinsNestedInput
    userExamAnswers?: UserExamAnswerUpdateManyWithoutUserExamJoinNestedInput
  }

  export type UserExamJoinUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswers?: UserExamAnswerUncheckedUpdateManyWithoutUserExamJoinNestedInput
  }

  export type UserExamJoinUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    examId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type QuestionCreateManyExamInput = {
    id: string
    text: string
    infoText?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserExamJoinCreateManyExamInput = {
    id: string
    userId: string
    createdAt?: Date | string
  }

  export type QuestionUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUpdateManyWithoutQuestionNestedInput
    userExamAnswerChoices?: UserExamAnswerChoiceUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    choices?: ChoiceUncheckedUpdateManyWithoutQuestionNestedInput
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedUpdateManyWithoutQuestionNestedInput
  }

  export type QuestionUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    infoText?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamJoinUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserExamJoinsNestedInput
    userExamAnswers?: UserExamAnswerUpdateManyWithoutUserExamJoinNestedInput
  }

  export type UserExamJoinUncheckedUpdateWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswers?: UserExamAnswerUncheckedUpdateManyWithoutUserExamJoinNestedInput
  }

  export type UserExamJoinUncheckedUpdateManyWithoutExamInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ChoiceCreateManyQuestionInput = {
    id: string
    text: string
    isCorrect: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type UserExamAnswerChoiceCreateManyQuestionInput = {
    id: string
    userExamAnswerId: string
    choiceId: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type ChoiceUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedUpdateManyWithoutChoiceNestedInput
  }

  export type ChoiceUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    text?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswer?: UserExamAnswerUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput
    choice?: ChoiceUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput
  }

  export type UserExamAnswerChoiceUncheckedUpdateWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userExamAnswerId?: StringFieldUpdateOperationsInput | string
    choiceId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceUncheckedUpdateManyWithoutQuestionInput = {
    id?: StringFieldUpdateOperationsInput | string
    userExamAnswerId?: StringFieldUpdateOperationsInput | string
    choiceId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceCreateManyChoiceInput = {
    id: string
    userExamAnswerId: string
    questionId: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerChoiceUpdateWithoutChoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswer?: UserExamAnswerUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput
    question?: QuestionUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput
  }

  export type UserExamAnswerChoiceUncheckedUpdateWithoutChoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userExamAnswerId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceUncheckedUpdateManyWithoutChoiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    userExamAnswerId?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerCreateManyUserExamJoinInput = {
    id: string
    isPassed: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerUpdateWithoutUserExamJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUpdateManyWithoutUserExamAnswerNestedInput
  }

  export type UserExamAnswerUncheckedUpdateWithoutUserExamJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userExamAnswerChoices?: UserExamAnswerChoiceUncheckedUpdateManyWithoutUserExamAnswerNestedInput
  }

  export type UserExamAnswerUncheckedUpdateManyWithoutUserExamJoinInput = {
    id?: StringFieldUpdateOperationsInput | string
    isPassed?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceCreateManyUserExamAnswerInput = {
    id: string
    questionId: string
    choiceId: string
    isCorrect: boolean
    createdAt?: Date | string
  }

  export type UserExamAnswerChoiceUpdateWithoutUserExamAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: QuestionUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput
    choice?: ChoiceUpdateOneRequiredWithoutUserExamAnswerChoicesNestedInput
  }

  export type UserExamAnswerChoiceUncheckedUpdateWithoutUserExamAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    choiceId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserExamAnswerChoiceUncheckedUpdateManyWithoutUserExamAnswerInput = {
    id?: StringFieldUpdateOperationsInput | string
    questionId?: StringFieldUpdateOperationsInput | string
    choiceId?: StringFieldUpdateOperationsInput | string
    isCorrect?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}