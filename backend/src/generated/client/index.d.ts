
/**
 * Client
**/

import * as runtime from './runtime/client.js';
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
 * Model Provider
 * 
 */
export type Provider = $Result.DefaultSelection<Prisma.$ProviderPayload>
/**
 * Model Category
 * 
 */
export type Category = $Result.DefaultSelection<Prisma.$CategoryPayload>
/**
 * Model Api
 * 
 */
export type Api = $Result.DefaultSelection<Prisma.$ApiPayload>
/**
 * Model Endpoint
 * 
 */
export type Endpoint = $Result.DefaultSelection<Prisma.$EndpointPayload>
/**
 * Model UserApiInteraction
 * 
 */
export type UserApiInteraction = $Result.DefaultSelection<Prisma.$UserApiInteractionPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const PricingType: {
  FREE: 'FREE',
  FREEMIUM: 'FREEMIUM',
  PAID: 'PAID',
  ENTERPRISE: 'ENTERPRISE'
};

export type PricingType = (typeof PricingType)[keyof typeof PricingType]


export const AuthType: {
  API_KEY: 'API_KEY',
  OAUTH2: 'OAUTH2',
  BASIC: 'BASIC',
  BEARER_TOKEN: 'BEARER_TOKEN',
  NONE: 'NONE'
};

export type AuthType = (typeof AuthType)[keyof typeof AuthType]


export const InteractionType: {
  VIEW: 'VIEW',
  COMPARE: 'COMPARE',
  REDIRECT: 'REDIRECT'
};

export type InteractionType = (typeof InteractionType)[keyof typeof InteractionType]

}

export type PricingType = $Enums.PricingType

export const PricingType: typeof $Enums.PricingType

export type AuthType = $Enums.AuthType

export const AuthType: typeof $Enums.AuthType

export type InteractionType = $Enums.InteractionType

export const InteractionType: typeof $Enums.InteractionType

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
 * Read more in our [docs](https://pris.ly/d/client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
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
   * Read more in our [docs](https://pris.ly/d/client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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
   * Read more in our [docs](https://pris.ly/d/raw-queries).
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

  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.provider`: Exposes CRUD operations for the **Provider** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Providers
    * const providers = await prisma.provider.findMany()
    * ```
    */
  get provider(): Prisma.ProviderDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.category`: Exposes CRUD operations for the **Category** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Categories
    * const categories = await prisma.category.findMany()
    * ```
    */
  get category(): Prisma.CategoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.api`: Exposes CRUD operations for the **Api** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Apis
    * const apis = await prisma.api.findMany()
    * ```
    */
  get api(): Prisma.ApiDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.endpoint`: Exposes CRUD operations for the **Endpoint** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Endpoints
    * const endpoints = await prisma.endpoint.findMany()
    * ```
    */
  get endpoint(): Prisma.EndpointDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userApiInteraction`: Exposes CRUD operations for the **UserApiInteraction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserApiInteractions
    * const userApiInteractions = await prisma.userApiInteraction.findMany()
    * ```
    */
  get userApiInteraction(): Prisma.UserApiInteractionDelegate<ExtArgs, ClientOptions>;
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
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 7.3.0
   * Query Engine version: 9d6ad21cbbceab97458517b147a6a09ff43aa735
   */
  export type PrismaVersion = {
    client: string
    engine: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
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
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
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
    Provider: 'Provider',
    Category: 'Category',
    Api: 'Api',
    Endpoint: 'Endpoint',
    UserApiInteraction: 'UserApiInteraction'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]



  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "provider" | "category" | "api" | "endpoint" | "userApiInteraction"
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
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
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
      Provider: {
        payload: Prisma.$ProviderPayload<ExtArgs>
        fields: Prisma.ProviderFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProviderFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProviderFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findFirst: {
            args: Prisma.ProviderFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProviderFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          findMany: {
            args: Prisma.ProviderFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          create: {
            args: Prisma.ProviderCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          createMany: {
            args: Prisma.ProviderCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProviderCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          delete: {
            args: Prisma.ProviderDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          update: {
            args: Prisma.ProviderUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          deleteMany: {
            args: Prisma.ProviderDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProviderUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProviderUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>[]
          }
          upsert: {
            args: Prisma.ProviderUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProviderPayload>
          }
          aggregate: {
            args: Prisma.ProviderAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProvider>
          }
          groupBy: {
            args: Prisma.ProviderGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProviderGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProviderCountArgs<ExtArgs>
            result: $Utils.Optional<ProviderCountAggregateOutputType> | number
          }
        }
      }
      Category: {
        payload: Prisma.$CategoryPayload<ExtArgs>
        fields: Prisma.CategoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CategoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CategoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findFirst: {
            args: Prisma.CategoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CategoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          findMany: {
            args: Prisma.CategoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          create: {
            args: Prisma.CategoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          createMany: {
            args: Prisma.CategoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CategoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          delete: {
            args: Prisma.CategoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          update: {
            args: Prisma.CategoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          deleteMany: {
            args: Prisma.CategoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CategoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CategoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>[]
          }
          upsert: {
            args: Prisma.CategoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CategoryPayload>
          }
          aggregate: {
            args: Prisma.CategoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCategory>
          }
          groupBy: {
            args: Prisma.CategoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<CategoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.CategoryCountArgs<ExtArgs>
            result: $Utils.Optional<CategoryCountAggregateOutputType> | number
          }
        }
      }
      Api: {
        payload: Prisma.$ApiPayload<ExtArgs>
        fields: Prisma.ApiFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApiFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApiFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          findFirst: {
            args: Prisma.ApiFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApiFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          findMany: {
            args: Prisma.ApiFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          create: {
            args: Prisma.ApiCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          createMany: {
            args: Prisma.ApiCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApiCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          delete: {
            args: Prisma.ApiDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          update: {
            args: Prisma.ApiUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          deleteMany: {
            args: Prisma.ApiDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApiUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApiUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>[]
          }
          upsert: {
            args: Prisma.ApiUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApiPayload>
          }
          aggregate: {
            args: Prisma.ApiAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApi>
          }
          groupBy: {
            args: Prisma.ApiGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApiGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApiCountArgs<ExtArgs>
            result: $Utils.Optional<ApiCountAggregateOutputType> | number
          }
        }
      }
      Endpoint: {
        payload: Prisma.$EndpointPayload<ExtArgs>
        fields: Prisma.EndpointFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EndpointFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EndpointFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          findFirst: {
            args: Prisma.EndpointFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EndpointFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          findMany: {
            args: Prisma.EndpointFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>[]
          }
          create: {
            args: Prisma.EndpointCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          createMany: {
            args: Prisma.EndpointCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EndpointCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>[]
          }
          delete: {
            args: Prisma.EndpointDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          update: {
            args: Prisma.EndpointUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          deleteMany: {
            args: Prisma.EndpointDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EndpointUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EndpointUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>[]
          }
          upsert: {
            args: Prisma.EndpointUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EndpointPayload>
          }
          aggregate: {
            args: Prisma.EndpointAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEndpoint>
          }
          groupBy: {
            args: Prisma.EndpointGroupByArgs<ExtArgs>
            result: $Utils.Optional<EndpointGroupByOutputType>[]
          }
          count: {
            args: Prisma.EndpointCountArgs<ExtArgs>
            result: $Utils.Optional<EndpointCountAggregateOutputType> | number
          }
        }
      }
      UserApiInteraction: {
        payload: Prisma.$UserApiInteractionPayload<ExtArgs>
        fields: Prisma.UserApiInteractionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserApiInteractionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserApiInteractionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload>
          }
          findFirst: {
            args: Prisma.UserApiInteractionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserApiInteractionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload>
          }
          findMany: {
            args: Prisma.UserApiInteractionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload>[]
          }
          create: {
            args: Prisma.UserApiInteractionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload>
          }
          createMany: {
            args: Prisma.UserApiInteractionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserApiInteractionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload>[]
          }
          delete: {
            args: Prisma.UserApiInteractionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload>
          }
          update: {
            args: Prisma.UserApiInteractionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload>
          }
          deleteMany: {
            args: Prisma.UserApiInteractionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserApiInteractionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserApiInteractionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload>[]
          }
          upsert: {
            args: Prisma.UserApiInteractionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserApiInteractionPayload>
          }
          aggregate: {
            args: Prisma.UserApiInteractionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserApiInteraction>
          }
          groupBy: {
            args: Prisma.UserApiInteractionGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserApiInteractionGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserApiInteractionCountArgs<ExtArgs>
            result: $Utils.Optional<UserApiInteractionCountAggregateOutputType> | number
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
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://pris.ly/d/logging).
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory
    /**
     * Prisma Accelerate URL allowing the client to connect through Accelerate instead of a direct database.
     */
    accelerateUrl?: string
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
    /**
     * SQL commenter plugins that add metadata to SQL queries as comments.
     * Comments follow the sqlcommenter format: https://google.github.io/sqlcommenter/
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   adapter,
     *   comments: [
     *     traceContext(),
     *     queryInsights(),
     *   ],
     * })
     * ```
     */
    comments?: runtime.SqlCommenterPlugin[]
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    provider?: ProviderOmit
    category?: CategoryOmit
    api?: ApiOmit
    endpoint?: EndpointOmit
    userApiInteraction?: UserApiInteractionOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

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
    | 'updateManyAndReturn'
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
    interactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | UserCountOutputTypeCountInteractionsArgs
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
  export type UserCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApiInteractionWhereInput
  }


  /**
   * Count Type ProviderCountOutputType
   */

  export type ProviderCountOutputType = {
    apis: number
  }

  export type ProviderCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apis?: boolean | ProviderCountOutputTypeCountApisArgs
  }

  // Custom InputTypes
  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProviderCountOutputType
     */
    select?: ProviderCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProviderCountOutputType without action
   */
  export type ProviderCountOutputTypeCountApisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiWhereInput
  }


  /**
   * Count Type CategoryCountOutputType
   */

  export type CategoryCountOutputType = {
    apis: number
  }

  export type CategoryCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apis?: boolean | CategoryCountOutputTypeCountApisArgs
  }

  // Custom InputTypes
  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CategoryCountOutputType
     */
    select?: CategoryCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * CategoryCountOutputType without action
   */
  export type CategoryCountOutputTypeCountApisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiWhereInput
  }


  /**
   * Count Type ApiCountOutputType
   */

  export type ApiCountOutputType = {
    endpoints: number
    interactions: number
  }

  export type ApiCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    endpoints?: boolean | ApiCountOutputTypeCountEndpointsArgs
    interactions?: boolean | ApiCountOutputTypeCountInteractionsArgs
  }

  // Custom InputTypes
  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ApiCountOutputType
     */
    select?: ApiCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountEndpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndpointWhereInput
  }

  /**
   * ApiCountOutputType without action
   */
  export type ApiCountOutputTypeCountInteractionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApiInteractionWhereInput
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
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    createdAt: Date | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    createdAt: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    createdAt?: true
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
    name: string
    email: string
    password: string
    createdAt: Date
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
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    createdAt?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "createdAt", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    interactions?: boolean | User$interactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      interactions: Prisma.$UserApiInteractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      createdAt: Date
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    interactions<T extends User$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
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
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.interactions
   */
  export type User$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    where?: UserApiInteractionWhereInput
    orderBy?: UserApiInteractionOrderByWithRelationInput | UserApiInteractionOrderByWithRelationInput[]
    cursor?: UserApiInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserApiInteractionScalarFieldEnum | UserApiInteractionScalarFieldEnum[]
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
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Provider
   */

  export type AggregateProvider = {
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  export type ProviderMinAggregateOutputType = {
    id: string | null
    name: string | null
    website: string | null
    description: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderMaxAggregateOutputType = {
    id: string | null
    name: string | null
    website: string | null
    description: string | null
    logoUrl: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProviderCountAggregateOutputType = {
    id: number
    name: number
    website: number
    description: number
    logoUrl: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProviderMinAggregateInputType = {
    id?: true
    name?: true
    website?: true
    description?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderMaxAggregateInputType = {
    id?: true
    name?: true
    website?: true
    description?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProviderCountAggregateInputType = {
    id?: true
    name?: true
    website?: true
    description?: true
    logoUrl?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProviderAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Provider to aggregate.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Providers
    **/
    _count?: true | ProviderCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProviderMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProviderMaxAggregateInputType
  }

  export type GetProviderAggregateType<T extends ProviderAggregateArgs> = {
        [P in keyof T & keyof AggregateProvider]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProvider[P]>
      : GetScalarType<T[P], AggregateProvider[P]>
  }




  export type ProviderGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProviderWhereInput
    orderBy?: ProviderOrderByWithAggregationInput | ProviderOrderByWithAggregationInput[]
    by: ProviderScalarFieldEnum[] | ProviderScalarFieldEnum
    having?: ProviderScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProviderCountAggregateInputType | true
    _min?: ProviderMinAggregateInputType
    _max?: ProviderMaxAggregateInputType
  }

  export type ProviderGroupByOutputType = {
    id: string
    name: string
    website: string
    description: string | null
    logoUrl: string | null
    createdAt: Date
    updatedAt: Date
    _count: ProviderCountAggregateOutputType | null
    _min: ProviderMinAggregateOutputType | null
    _max: ProviderMaxAggregateOutputType | null
  }

  type GetProviderGroupByPayload<T extends ProviderGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProviderGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProviderGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProviderGroupByOutputType[P]>
            : GetScalarType<T[P], ProviderGroupByOutputType[P]>
        }
      >
    >


  export type ProviderSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    description?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    apis?: boolean | Provider$apisArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    description?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    website?: boolean
    description?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["provider"]>

  export type ProviderSelectScalar = {
    id?: boolean
    name?: boolean
    website?: boolean
    description?: boolean
    logoUrl?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProviderOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "website" | "description" | "logoUrl" | "createdAt" | "updatedAt", ExtArgs["result"]["provider"]>
  export type ProviderInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apis?: boolean | Provider$apisArgs<ExtArgs>
    _count?: boolean | ProviderCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProviderIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProviderIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProviderPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Provider"
    objects: {
      apis: Prisma.$ApiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      website: string
      description: string | null
      logoUrl: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["provider"]>
    composites: {}
  }

  type ProviderGetPayload<S extends boolean | null | undefined | ProviderDefaultArgs> = $Result.GetResult<Prisma.$ProviderPayload, S>

  type ProviderCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProviderFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProviderCountAggregateInputType | true
    }

  export interface ProviderDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Provider'], meta: { name: 'Provider' } }
    /**
     * Find zero or one Provider that matches the filter.
     * @param {ProviderFindUniqueArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProviderFindUniqueArgs>(args: SelectSubset<T, ProviderFindUniqueArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Provider that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProviderFindUniqueOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProviderFindUniqueOrThrowArgs>(args: SelectSubset<T, ProviderFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProviderFindFirstArgs>(args?: SelectSubset<T, ProviderFindFirstArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Provider that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindFirstOrThrowArgs} args - Arguments to find a Provider
     * @example
     * // Get one Provider
     * const provider = await prisma.provider.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProviderFindFirstOrThrowArgs>(args?: SelectSubset<T, ProviderFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Providers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Providers
     * const providers = await prisma.provider.findMany()
     * 
     * // Get first 10 Providers
     * const providers = await prisma.provider.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const providerWithIdOnly = await prisma.provider.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProviderFindManyArgs>(args?: SelectSubset<T, ProviderFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Provider.
     * @param {ProviderCreateArgs} args - Arguments to create a Provider.
     * @example
     * // Create one Provider
     * const Provider = await prisma.provider.create({
     *   data: {
     *     // ... data to create a Provider
     *   }
     * })
     * 
     */
    create<T extends ProviderCreateArgs>(args: SelectSubset<T, ProviderCreateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Providers.
     * @param {ProviderCreateManyArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProviderCreateManyArgs>(args?: SelectSubset<T, ProviderCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Providers and returns the data saved in the database.
     * @param {ProviderCreateManyAndReturnArgs} args - Arguments to create many Providers.
     * @example
     * // Create many Providers
     * const provider = await prisma.provider.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProviderCreateManyAndReturnArgs>(args?: SelectSubset<T, ProviderCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Provider.
     * @param {ProviderDeleteArgs} args - Arguments to delete one Provider.
     * @example
     * // Delete one Provider
     * const Provider = await prisma.provider.delete({
     *   where: {
     *     // ... filter to delete one Provider
     *   }
     * })
     * 
     */
    delete<T extends ProviderDeleteArgs>(args: SelectSubset<T, ProviderDeleteArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Provider.
     * @param {ProviderUpdateArgs} args - Arguments to update one Provider.
     * @example
     * // Update one Provider
     * const provider = await prisma.provider.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProviderUpdateArgs>(args: SelectSubset<T, ProviderUpdateArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Providers.
     * @param {ProviderDeleteManyArgs} args - Arguments to filter Providers to delete.
     * @example
     * // Delete a few Providers
     * const { count } = await prisma.provider.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProviderDeleteManyArgs>(args?: SelectSubset<T, ProviderDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProviderUpdateManyArgs>(args: SelectSubset<T, ProviderUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Providers and returns the data updated in the database.
     * @param {ProviderUpdateManyAndReturnArgs} args - Arguments to update many Providers.
     * @example
     * // Update many Providers
     * const provider = await prisma.provider.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Providers and only return the `id`
     * const providerWithIdOnly = await prisma.provider.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProviderUpdateManyAndReturnArgs>(args: SelectSubset<T, ProviderUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Provider.
     * @param {ProviderUpsertArgs} args - Arguments to update or create a Provider.
     * @example
     * // Update or create a Provider
     * const provider = await prisma.provider.upsert({
     *   create: {
     *     // ... data to create a Provider
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Provider we want to update
     *   }
     * })
     */
    upsert<T extends ProviderUpsertArgs>(args: SelectSubset<T, ProviderUpsertArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Providers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderCountArgs} args - Arguments to filter Providers to count.
     * @example
     * // Count the number of Providers
     * const count = await prisma.provider.count({
     *   where: {
     *     // ... the filter for the Providers we want to count
     *   }
     * })
    **/
    count<T extends ProviderCountArgs>(
      args?: Subset<T, ProviderCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProviderCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ProviderAggregateArgs>(args: Subset<T, ProviderAggregateArgs>): Prisma.PrismaPromise<GetProviderAggregateType<T>>

    /**
     * Group by Provider.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProviderGroupByArgs} args - Group by arguments.
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
      T extends ProviderGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProviderGroupByArgs['orderBy'] }
        : { orderBy?: ProviderGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ProviderGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProviderGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Provider model
   */
  readonly fields: ProviderFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Provider.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProviderClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apis<T extends Provider$apisArgs<ExtArgs> = {}>(args?: Subset<T, Provider$apisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Provider model
   */
  interface ProviderFieldRefs {
    readonly id: FieldRef<"Provider", 'String'>
    readonly name: FieldRef<"Provider", 'String'>
    readonly website: FieldRef<"Provider", 'String'>
    readonly description: FieldRef<"Provider", 'String'>
    readonly logoUrl: FieldRef<"Provider", 'String'>
    readonly createdAt: FieldRef<"Provider", 'DateTime'>
    readonly updatedAt: FieldRef<"Provider", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Provider findUnique
   */
  export type ProviderFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findUniqueOrThrow
   */
  export type ProviderFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider findFirst
   */
  export type ProviderFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findFirstOrThrow
   */
  export type ProviderFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Provider to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Providers.
     */
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider findMany
   */
  export type ProviderFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter, which Providers to fetch.
     */
    where?: ProviderWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Providers to fetch.
     */
    orderBy?: ProviderOrderByWithRelationInput | ProviderOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Providers.
     */
    cursor?: ProviderWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Providers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Providers.
     */
    skip?: number
    distinct?: ProviderScalarFieldEnum | ProviderScalarFieldEnum[]
  }

  /**
   * Provider create
   */
  export type ProviderCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to create a Provider.
     */
    data: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
  }

  /**
   * Provider createMany
   */
  export type ProviderCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider createManyAndReturn
   */
  export type ProviderCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to create many Providers.
     */
    data: ProviderCreateManyInput | ProviderCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Provider update
   */
  export type ProviderUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The data needed to update a Provider.
     */
    data: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
    /**
     * Choose, which Provider to update.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider updateMany
   */
  export type ProviderUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider updateManyAndReturn
   */
  export type ProviderUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * The data used to update Providers.
     */
    data: XOR<ProviderUpdateManyMutationInput, ProviderUncheckedUpdateManyInput>
    /**
     * Filter which Providers to update
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to update.
     */
    limit?: number
  }

  /**
   * Provider upsert
   */
  export type ProviderUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * The filter to search for the Provider to update in case it exists.
     */
    where: ProviderWhereUniqueInput
    /**
     * In case the Provider found by the `where` argument doesn't exist, create a new Provider with this data.
     */
    create: XOR<ProviderCreateInput, ProviderUncheckedCreateInput>
    /**
     * In case the Provider was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProviderUpdateInput, ProviderUncheckedUpdateInput>
  }

  /**
   * Provider delete
   */
  export type ProviderDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
    /**
     * Filter which Provider to delete.
     */
    where: ProviderWhereUniqueInput
  }

  /**
   * Provider deleteMany
   */
  export type ProviderDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Providers to delete
     */
    where?: ProviderWhereInput
    /**
     * Limit how many Providers to delete.
     */
    limit?: number
  }

  /**
   * Provider.apis
   */
  export type Provider$apisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    where?: ApiWhereInput
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    cursor?: ApiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Provider without action
   */
  export type ProviderDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Provider
     */
    select?: ProviderSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Provider
     */
    omit?: ProviderOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProviderInclude<ExtArgs> | null
  }


  /**
   * Model Category
   */

  export type AggregateCategory = {
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  export type CategoryMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type CategoryMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    icon: string | null
    createdAt: Date | null
  }

  export type CategoryCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    icon: number
    createdAt: number
    _all: number
  }


  export type CategoryMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    createdAt?: true
  }

  export type CategoryMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    createdAt?: true
  }

  export type CategoryCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    icon?: true
    createdAt?: true
    _all?: true
  }

  export type CategoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Category to aggregate.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Categories
    **/
    _count?: true | CategoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CategoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CategoryMaxAggregateInputType
  }

  export type GetCategoryAggregateType<T extends CategoryAggregateArgs> = {
        [P in keyof T & keyof AggregateCategory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCategory[P]>
      : GetScalarType<T[P], AggregateCategory[P]>
  }




  export type CategoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CategoryWhereInput
    orderBy?: CategoryOrderByWithAggregationInput | CategoryOrderByWithAggregationInput[]
    by: CategoryScalarFieldEnum[] | CategoryScalarFieldEnum
    having?: CategoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CategoryCountAggregateInputType | true
    _min?: CategoryMinAggregateInputType
    _max?: CategoryMaxAggregateInputType
  }

  export type CategoryGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string | null
    icon: string | null
    createdAt: Date
    _count: CategoryCountAggregateOutputType | null
    _min: CategoryMinAggregateOutputType | null
    _max: CategoryMaxAggregateOutputType | null
  }

  type GetCategoryGroupByPayload<T extends CategoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CategoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CategoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CategoryGroupByOutputType[P]>
            : GetScalarType<T[P], CategoryGroupByOutputType[P]>
        }
      >
    >


  export type CategorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
    apis?: boolean | Category$apisArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["category"]>

  export type CategorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
  }, ExtArgs["result"]["category"]>

  export type CategorySelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    icon?: boolean
    createdAt?: boolean
  }

  export type CategoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "icon" | "createdAt", ExtArgs["result"]["category"]>
  export type CategoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    apis?: boolean | Category$apisArgs<ExtArgs>
    _count?: boolean | CategoryCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type CategoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type CategoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $CategoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Category"
    objects: {
      apis: Prisma.$ApiPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string | null
      icon: string | null
      createdAt: Date
    }, ExtArgs["result"]["category"]>
    composites: {}
  }

  type CategoryGetPayload<S extends boolean | null | undefined | CategoryDefaultArgs> = $Result.GetResult<Prisma.$CategoryPayload, S>

  type CategoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CategoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CategoryCountAggregateInputType | true
    }

  export interface CategoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Category'], meta: { name: 'Category' } }
    /**
     * Find zero or one Category that matches the filter.
     * @param {CategoryFindUniqueArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CategoryFindUniqueArgs>(args: SelectSubset<T, CategoryFindUniqueArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Category that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CategoryFindUniqueOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CategoryFindUniqueOrThrowArgs>(args: SelectSubset<T, CategoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CategoryFindFirstArgs>(args?: SelectSubset<T, CategoryFindFirstArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Category that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindFirstOrThrowArgs} args - Arguments to find a Category
     * @example
     * // Get one Category
     * const category = await prisma.category.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CategoryFindFirstOrThrowArgs>(args?: SelectSubset<T, CategoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Categories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Categories
     * const categories = await prisma.category.findMany()
     * 
     * // Get first 10 Categories
     * const categories = await prisma.category.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const categoryWithIdOnly = await prisma.category.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CategoryFindManyArgs>(args?: SelectSubset<T, CategoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Category.
     * @param {CategoryCreateArgs} args - Arguments to create a Category.
     * @example
     * // Create one Category
     * const Category = await prisma.category.create({
     *   data: {
     *     // ... data to create a Category
     *   }
     * })
     * 
     */
    create<T extends CategoryCreateArgs>(args: SelectSubset<T, CategoryCreateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Categories.
     * @param {CategoryCreateManyArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CategoryCreateManyArgs>(args?: SelectSubset<T, CategoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Categories and returns the data saved in the database.
     * @param {CategoryCreateManyAndReturnArgs} args - Arguments to create many Categories.
     * @example
     * // Create many Categories
     * const category = await prisma.category.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CategoryCreateManyAndReturnArgs>(args?: SelectSubset<T, CategoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Category.
     * @param {CategoryDeleteArgs} args - Arguments to delete one Category.
     * @example
     * // Delete one Category
     * const Category = await prisma.category.delete({
     *   where: {
     *     // ... filter to delete one Category
     *   }
     * })
     * 
     */
    delete<T extends CategoryDeleteArgs>(args: SelectSubset<T, CategoryDeleteArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Category.
     * @param {CategoryUpdateArgs} args - Arguments to update one Category.
     * @example
     * // Update one Category
     * const category = await prisma.category.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CategoryUpdateArgs>(args: SelectSubset<T, CategoryUpdateArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Categories.
     * @param {CategoryDeleteManyArgs} args - Arguments to filter Categories to delete.
     * @example
     * // Delete a few Categories
     * const { count } = await prisma.category.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CategoryDeleteManyArgs>(args?: SelectSubset<T, CategoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CategoryUpdateManyArgs>(args: SelectSubset<T, CategoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Categories and returns the data updated in the database.
     * @param {CategoryUpdateManyAndReturnArgs} args - Arguments to update many Categories.
     * @example
     * // Update many Categories
     * const category = await prisma.category.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Categories and only return the `id`
     * const categoryWithIdOnly = await prisma.category.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CategoryUpdateManyAndReturnArgs>(args: SelectSubset<T, CategoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Category.
     * @param {CategoryUpsertArgs} args - Arguments to update or create a Category.
     * @example
     * // Update or create a Category
     * const category = await prisma.category.upsert({
     *   create: {
     *     // ... data to create a Category
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Category we want to update
     *   }
     * })
     */
    upsert<T extends CategoryUpsertArgs>(args: SelectSubset<T, CategoryUpsertArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Categories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryCountArgs} args - Arguments to filter Categories to count.
     * @example
     * // Count the number of Categories
     * const count = await prisma.category.count({
     *   where: {
     *     // ... the filter for the Categories we want to count
     *   }
     * })
    **/
    count<T extends CategoryCountArgs>(
      args?: Subset<T, CategoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CategoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CategoryAggregateArgs>(args: Subset<T, CategoryAggregateArgs>): Prisma.PrismaPromise<GetCategoryAggregateType<T>>

    /**
     * Group by Category.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CategoryGroupByArgs} args - Group by arguments.
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
      T extends CategoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CategoryGroupByArgs['orderBy'] }
        : { orderBy?: CategoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CategoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCategoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Category model
   */
  readonly fields: CategoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Category.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CategoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    apis<T extends Category$apisArgs<ExtArgs> = {}>(args?: Subset<T, Category$apisArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Category model
   */
  interface CategoryFieldRefs {
    readonly id: FieldRef<"Category", 'String'>
    readonly name: FieldRef<"Category", 'String'>
    readonly slug: FieldRef<"Category", 'String'>
    readonly description: FieldRef<"Category", 'String'>
    readonly icon: FieldRef<"Category", 'String'>
    readonly createdAt: FieldRef<"Category", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Category findUnique
   */
  export type CategoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findUniqueOrThrow
   */
  export type CategoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category findFirst
   */
  export type CategoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findFirstOrThrow
   */
  export type CategoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Category to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Categories.
     */
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category findMany
   */
  export type CategoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter, which Categories to fetch.
     */
    where?: CategoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Categories to fetch.
     */
    orderBy?: CategoryOrderByWithRelationInput | CategoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Categories.
     */
    cursor?: CategoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Categories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Categories.
     */
    skip?: number
    distinct?: CategoryScalarFieldEnum | CategoryScalarFieldEnum[]
  }

  /**
   * Category create
   */
  export type CategoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to create a Category.
     */
    data: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
  }

  /**
   * Category createMany
   */
  export type CategoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category createManyAndReturn
   */
  export type CategoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to create many Categories.
     */
    data: CategoryCreateManyInput | CategoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Category update
   */
  export type CategoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The data needed to update a Category.
     */
    data: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
    /**
     * Choose, which Category to update.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category updateMany
   */
  export type CategoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category updateManyAndReturn
   */
  export type CategoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * The data used to update Categories.
     */
    data: XOR<CategoryUpdateManyMutationInput, CategoryUncheckedUpdateManyInput>
    /**
     * Filter which Categories to update
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to update.
     */
    limit?: number
  }

  /**
   * Category upsert
   */
  export type CategoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * The filter to search for the Category to update in case it exists.
     */
    where: CategoryWhereUniqueInput
    /**
     * In case the Category found by the `where` argument doesn't exist, create a new Category with this data.
     */
    create: XOR<CategoryCreateInput, CategoryUncheckedCreateInput>
    /**
     * In case the Category was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CategoryUpdateInput, CategoryUncheckedUpdateInput>
  }

  /**
   * Category delete
   */
  export type CategoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
    /**
     * Filter which Category to delete.
     */
    where: CategoryWhereUniqueInput
  }

  /**
   * Category deleteMany
   */
  export type CategoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Categories to delete
     */
    where?: CategoryWhereInput
    /**
     * Limit how many Categories to delete.
     */
    limit?: number
  }

  /**
   * Category.apis
   */
  export type Category$apisArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    where?: ApiWhereInput
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    cursor?: ApiWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Category without action
   */
  export type CategoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Category
     */
    select?: CategorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Category
     */
    omit?: CategoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CategoryInclude<ExtArgs> | null
  }


  /**
   * Model Api
   */

  export type AggregateApi = {
    _count: ApiCountAggregateOutputType | null
    _avg: ApiAvgAggregateOutputType | null
    _sum: ApiSumAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  export type ApiAvgAggregateOutputType = {
    reliabilityScore: number | null
    popularityScore: number | null
  }

  export type ApiSumAggregateOutputType = {
    reliabilityScore: number | null
    popularityScore: number | null
  }

  export type ApiMinAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    baseUrl: string | null
    docsUrl: string | null
    pricingType: $Enums.PricingType | null
    pricingDetails: string | null
    authType: $Enums.AuthType | null
    rateLimit: string | null
    hasFreeTier: boolean | null
    reliabilityScore: number | null
    popularityScore: number | null
    source: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    providerId: string | null
    categoryId: string | null
  }

  export type ApiMaxAggregateOutputType = {
    id: string | null
    name: string | null
    slug: string | null
    description: string | null
    baseUrl: string | null
    docsUrl: string | null
    pricingType: $Enums.PricingType | null
    pricingDetails: string | null
    authType: $Enums.AuthType | null
    rateLimit: string | null
    hasFreeTier: boolean | null
    reliabilityScore: number | null
    popularityScore: number | null
    source: string | null
    isActive: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
    providerId: string | null
    categoryId: string | null
  }

  export type ApiCountAggregateOutputType = {
    id: number
    name: number
    slug: number
    description: number
    baseUrl: number
    docsUrl: number
    pricingType: number
    pricingDetails: number
    authType: number
    rateLimit: number
    hasFreeTier: number
    reliabilityScore: number
    popularityScore: number
    features: number
    source: number
    isActive: number
    createdAt: number
    updatedAt: number
    providerId: number
    categoryId: number
    _all: number
  }


  export type ApiAvgAggregateInputType = {
    reliabilityScore?: true
    popularityScore?: true
  }

  export type ApiSumAggregateInputType = {
    reliabilityScore?: true
    popularityScore?: true
  }

  export type ApiMinAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    baseUrl?: true
    docsUrl?: true
    pricingType?: true
    pricingDetails?: true
    authType?: true
    rateLimit?: true
    hasFreeTier?: true
    reliabilityScore?: true
    popularityScore?: true
    source?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    providerId?: true
    categoryId?: true
  }

  export type ApiMaxAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    baseUrl?: true
    docsUrl?: true
    pricingType?: true
    pricingDetails?: true
    authType?: true
    rateLimit?: true
    hasFreeTier?: true
    reliabilityScore?: true
    popularityScore?: true
    source?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    providerId?: true
    categoryId?: true
  }

  export type ApiCountAggregateInputType = {
    id?: true
    name?: true
    slug?: true
    description?: true
    baseUrl?: true
    docsUrl?: true
    pricingType?: true
    pricingDetails?: true
    authType?: true
    rateLimit?: true
    hasFreeTier?: true
    reliabilityScore?: true
    popularityScore?: true
    features?: true
    source?: true
    isActive?: true
    createdAt?: true
    updatedAt?: true
    providerId?: true
    categoryId?: true
    _all?: true
  }

  export type ApiAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Api to aggregate.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Apis
    **/
    _count?: true | ApiCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ApiAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ApiSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApiMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApiMaxAggregateInputType
  }

  export type GetApiAggregateType<T extends ApiAggregateArgs> = {
        [P in keyof T & keyof AggregateApi]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApi[P]>
      : GetScalarType<T[P], AggregateApi[P]>
  }




  export type ApiGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApiWhereInput
    orderBy?: ApiOrderByWithAggregationInput | ApiOrderByWithAggregationInput[]
    by: ApiScalarFieldEnum[] | ApiScalarFieldEnum
    having?: ApiScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApiCountAggregateInputType | true
    _avg?: ApiAvgAggregateInputType
    _sum?: ApiSumAggregateInputType
    _min?: ApiMinAggregateInputType
    _max?: ApiMaxAggregateInputType
  }

  export type ApiGroupByOutputType = {
    id: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails: string | null
    authType: $Enums.AuthType
    rateLimit: string | null
    hasFreeTier: boolean
    reliabilityScore: number | null
    popularityScore: number
    features: string[]
    source: string | null
    isActive: boolean
    createdAt: Date
    updatedAt: Date
    providerId: string
    categoryId: string
    _count: ApiCountAggregateOutputType | null
    _avg: ApiAvgAggregateOutputType | null
    _sum: ApiSumAggregateOutputType | null
    _min: ApiMinAggregateOutputType | null
    _max: ApiMaxAggregateOutputType | null
  }

  type GetApiGroupByPayload<T extends ApiGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApiGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApiGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApiGroupByOutputType[P]>
            : GetScalarType<T[P], ApiGroupByOutputType[P]>
        }
      >
    >


  export type ApiSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    baseUrl?: boolean
    docsUrl?: boolean
    pricingType?: boolean
    pricingDetails?: boolean
    authType?: boolean
    rateLimit?: boolean
    hasFreeTier?: boolean
    reliabilityScore?: boolean
    popularityScore?: boolean
    features?: boolean
    source?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    categoryId?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    endpoints?: boolean | Api$endpointsArgs<ExtArgs>
    interactions?: boolean | Api$interactionsArgs<ExtArgs>
    _count?: boolean | ApiCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type ApiSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    baseUrl?: boolean
    docsUrl?: boolean
    pricingType?: boolean
    pricingDetails?: boolean
    authType?: boolean
    rateLimit?: boolean
    hasFreeTier?: boolean
    reliabilityScore?: boolean
    popularityScore?: boolean
    features?: boolean
    source?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    categoryId?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type ApiSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    baseUrl?: boolean
    docsUrl?: boolean
    pricingType?: boolean
    pricingDetails?: boolean
    authType?: boolean
    rateLimit?: boolean
    hasFreeTier?: boolean
    reliabilityScore?: boolean
    popularityScore?: boolean
    features?: boolean
    source?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    categoryId?: boolean
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["api"]>

  export type ApiSelectScalar = {
    id?: boolean
    name?: boolean
    slug?: boolean
    description?: boolean
    baseUrl?: boolean
    docsUrl?: boolean
    pricingType?: boolean
    pricingDetails?: boolean
    authType?: boolean
    rateLimit?: boolean
    hasFreeTier?: boolean
    reliabilityScore?: boolean
    popularityScore?: boolean
    features?: boolean
    source?: boolean
    isActive?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    providerId?: boolean
    categoryId?: boolean
  }

  export type ApiOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "slug" | "description" | "baseUrl" | "docsUrl" | "pricingType" | "pricingDetails" | "authType" | "rateLimit" | "hasFreeTier" | "reliabilityScore" | "popularityScore" | "features" | "source" | "isActive" | "createdAt" | "updatedAt" | "providerId" | "categoryId", ExtArgs["result"]["api"]>
  export type ApiInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
    endpoints?: boolean | Api$endpointsArgs<ExtArgs>
    interactions?: boolean | Api$interactionsArgs<ExtArgs>
    _count?: boolean | ApiCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ApiIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }
  export type ApiIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    provider?: boolean | ProviderDefaultArgs<ExtArgs>
    category?: boolean | CategoryDefaultArgs<ExtArgs>
  }

  export type $ApiPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Api"
    objects: {
      provider: Prisma.$ProviderPayload<ExtArgs>
      category: Prisma.$CategoryPayload<ExtArgs>
      endpoints: Prisma.$EndpointPayload<ExtArgs>[]
      interactions: Prisma.$UserApiInteractionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      slug: string
      description: string
      baseUrl: string
      docsUrl: string
      pricingType: $Enums.PricingType
      pricingDetails: string | null
      authType: $Enums.AuthType
      rateLimit: string | null
      hasFreeTier: boolean
      reliabilityScore: number | null
      popularityScore: number
      features: string[]
      source: string | null
      isActive: boolean
      createdAt: Date
      updatedAt: Date
      providerId: string
      categoryId: string
    }, ExtArgs["result"]["api"]>
    composites: {}
  }

  type ApiGetPayload<S extends boolean | null | undefined | ApiDefaultArgs> = $Result.GetResult<Prisma.$ApiPayload, S>

  type ApiCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApiFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApiCountAggregateInputType | true
    }

  export interface ApiDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Api'], meta: { name: 'Api' } }
    /**
     * Find zero or one Api that matches the filter.
     * @param {ApiFindUniqueArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApiFindUniqueArgs>(args: SelectSubset<T, ApiFindUniqueArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Api that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApiFindUniqueOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApiFindUniqueOrThrowArgs>(args: SelectSubset<T, ApiFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindFirstArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApiFindFirstArgs>(args?: SelectSubset<T, ApiFindFirstArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Api that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindFirstOrThrowArgs} args - Arguments to find a Api
     * @example
     * // Get one Api
     * const api = await prisma.api.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApiFindFirstOrThrowArgs>(args?: SelectSubset<T, ApiFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Apis that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Apis
     * const apis = await prisma.api.findMany()
     * 
     * // Get first 10 Apis
     * const apis = await prisma.api.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const apiWithIdOnly = await prisma.api.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApiFindManyArgs>(args?: SelectSubset<T, ApiFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Api.
     * @param {ApiCreateArgs} args - Arguments to create a Api.
     * @example
     * // Create one Api
     * const Api = await prisma.api.create({
     *   data: {
     *     // ... data to create a Api
     *   }
     * })
     * 
     */
    create<T extends ApiCreateArgs>(args: SelectSubset<T, ApiCreateArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Apis.
     * @param {ApiCreateManyArgs} args - Arguments to create many Apis.
     * @example
     * // Create many Apis
     * const api = await prisma.api.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApiCreateManyArgs>(args?: SelectSubset<T, ApiCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Apis and returns the data saved in the database.
     * @param {ApiCreateManyAndReturnArgs} args - Arguments to create many Apis.
     * @example
     * // Create many Apis
     * const api = await prisma.api.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Apis and only return the `id`
     * const apiWithIdOnly = await prisma.api.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApiCreateManyAndReturnArgs>(args?: SelectSubset<T, ApiCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Api.
     * @param {ApiDeleteArgs} args - Arguments to delete one Api.
     * @example
     * // Delete one Api
     * const Api = await prisma.api.delete({
     *   where: {
     *     // ... filter to delete one Api
     *   }
     * })
     * 
     */
    delete<T extends ApiDeleteArgs>(args: SelectSubset<T, ApiDeleteArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Api.
     * @param {ApiUpdateArgs} args - Arguments to update one Api.
     * @example
     * // Update one Api
     * const api = await prisma.api.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApiUpdateArgs>(args: SelectSubset<T, ApiUpdateArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Apis.
     * @param {ApiDeleteManyArgs} args - Arguments to filter Apis to delete.
     * @example
     * // Delete a few Apis
     * const { count } = await prisma.api.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApiDeleteManyArgs>(args?: SelectSubset<T, ApiDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Apis
     * const api = await prisma.api.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApiUpdateManyArgs>(args: SelectSubset<T, ApiUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Apis and returns the data updated in the database.
     * @param {ApiUpdateManyAndReturnArgs} args - Arguments to update many Apis.
     * @example
     * // Update many Apis
     * const api = await prisma.api.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Apis and only return the `id`
     * const apiWithIdOnly = await prisma.api.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApiUpdateManyAndReturnArgs>(args: SelectSubset<T, ApiUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Api.
     * @param {ApiUpsertArgs} args - Arguments to update or create a Api.
     * @example
     * // Update or create a Api
     * const api = await prisma.api.upsert({
     *   create: {
     *     // ... data to create a Api
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Api we want to update
     *   }
     * })
     */
    upsert<T extends ApiUpsertArgs>(args: SelectSubset<T, ApiUpsertArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Apis.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiCountArgs} args - Arguments to filter Apis to count.
     * @example
     * // Count the number of Apis
     * const count = await prisma.api.count({
     *   where: {
     *     // ... the filter for the Apis we want to count
     *   }
     * })
    **/
    count<T extends ApiCountArgs>(
      args?: Subset<T, ApiCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApiCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ApiAggregateArgs>(args: Subset<T, ApiAggregateArgs>): Prisma.PrismaPromise<GetApiAggregateType<T>>

    /**
     * Group by Api.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApiGroupByArgs} args - Group by arguments.
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
      T extends ApiGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApiGroupByArgs['orderBy'] }
        : { orderBy?: ApiGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ApiGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Api model
   */
  readonly fields: ApiFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Api.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApiClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    provider<T extends ProviderDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProviderDefaultArgs<ExtArgs>>): Prisma__ProviderClient<$Result.GetResult<Prisma.$ProviderPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    category<T extends CategoryDefaultArgs<ExtArgs> = {}>(args?: Subset<T, CategoryDefaultArgs<ExtArgs>>): Prisma__CategoryClient<$Result.GetResult<Prisma.$CategoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    endpoints<T extends Api$endpointsArgs<ExtArgs> = {}>(args?: Subset<T, Api$endpointsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    interactions<T extends Api$interactionsArgs<ExtArgs> = {}>(args?: Subset<T, Api$interactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Api model
   */
  interface ApiFieldRefs {
    readonly id: FieldRef<"Api", 'String'>
    readonly name: FieldRef<"Api", 'String'>
    readonly slug: FieldRef<"Api", 'String'>
    readonly description: FieldRef<"Api", 'String'>
    readonly baseUrl: FieldRef<"Api", 'String'>
    readonly docsUrl: FieldRef<"Api", 'String'>
    readonly pricingType: FieldRef<"Api", 'PricingType'>
    readonly pricingDetails: FieldRef<"Api", 'String'>
    readonly authType: FieldRef<"Api", 'AuthType'>
    readonly rateLimit: FieldRef<"Api", 'String'>
    readonly hasFreeTier: FieldRef<"Api", 'Boolean'>
    readonly reliabilityScore: FieldRef<"Api", 'Float'>
    readonly popularityScore: FieldRef<"Api", 'Int'>
    readonly features: FieldRef<"Api", 'String[]'>
    readonly source: FieldRef<"Api", 'String'>
    readonly isActive: FieldRef<"Api", 'Boolean'>
    readonly createdAt: FieldRef<"Api", 'DateTime'>
    readonly updatedAt: FieldRef<"Api", 'DateTime'>
    readonly providerId: FieldRef<"Api", 'String'>
    readonly categoryId: FieldRef<"Api", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Api findUnique
   */
  export type ApiFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api findUniqueOrThrow
   */
  export type ApiFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api findFirst
   */
  export type ApiFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Api findFirstOrThrow
   */
  export type ApiFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Api to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Apis.
     */
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Api findMany
   */
  export type ApiFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter, which Apis to fetch.
     */
    where?: ApiWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Apis to fetch.
     */
    orderBy?: ApiOrderByWithRelationInput | ApiOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Apis.
     */
    cursor?: ApiWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Apis from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Apis.
     */
    skip?: number
    distinct?: ApiScalarFieldEnum | ApiScalarFieldEnum[]
  }

  /**
   * Api create
   */
  export type ApiCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * The data needed to create a Api.
     */
    data: XOR<ApiCreateInput, ApiUncheckedCreateInput>
  }

  /**
   * Api createMany
   */
  export type ApiCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Apis.
     */
    data: ApiCreateManyInput | ApiCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Api createManyAndReturn
   */
  export type ApiCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * The data used to create many Apis.
     */
    data: ApiCreateManyInput | ApiCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Api update
   */
  export type ApiUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * The data needed to update a Api.
     */
    data: XOR<ApiUpdateInput, ApiUncheckedUpdateInput>
    /**
     * Choose, which Api to update.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api updateMany
   */
  export type ApiUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Apis.
     */
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyInput>
    /**
     * Filter which Apis to update
     */
    where?: ApiWhereInput
    /**
     * Limit how many Apis to update.
     */
    limit?: number
  }

  /**
   * Api updateManyAndReturn
   */
  export type ApiUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * The data used to update Apis.
     */
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyInput>
    /**
     * Filter which Apis to update
     */
    where?: ApiWhereInput
    /**
     * Limit how many Apis to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Api upsert
   */
  export type ApiUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * The filter to search for the Api to update in case it exists.
     */
    where: ApiWhereUniqueInput
    /**
     * In case the Api found by the `where` argument doesn't exist, create a new Api with this data.
     */
    create: XOR<ApiCreateInput, ApiUncheckedCreateInput>
    /**
     * In case the Api was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApiUpdateInput, ApiUncheckedUpdateInput>
  }

  /**
   * Api delete
   */
  export type ApiDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
    /**
     * Filter which Api to delete.
     */
    where: ApiWhereUniqueInput
  }

  /**
   * Api deleteMany
   */
  export type ApiDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Apis to delete
     */
    where?: ApiWhereInput
    /**
     * Limit how many Apis to delete.
     */
    limit?: number
  }

  /**
   * Api.endpoints
   */
  export type Api$endpointsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    where?: EndpointWhereInput
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    cursor?: EndpointWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Api.interactions
   */
  export type Api$interactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    where?: UserApiInteractionWhereInput
    orderBy?: UserApiInteractionOrderByWithRelationInput | UserApiInteractionOrderByWithRelationInput[]
    cursor?: UserApiInteractionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserApiInteractionScalarFieldEnum | UserApiInteractionScalarFieldEnum[]
  }

  /**
   * Api without action
   */
  export type ApiDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Api
     */
    select?: ApiSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Api
     */
    omit?: ApiOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApiInclude<ExtArgs> | null
  }


  /**
   * Model Endpoint
   */

  export type AggregateEndpoint = {
    _count: EndpointCountAggregateOutputType | null
    _min: EndpointMinAggregateOutputType | null
    _max: EndpointMaxAggregateOutputType | null
  }

  export type EndpointMinAggregateOutputType = {
    id: string | null
    path: string | null
    method: string | null
    summary: string | null
    description: string | null
    createdAt: Date | null
    apiId: string | null
  }

  export type EndpointMaxAggregateOutputType = {
    id: string | null
    path: string | null
    method: string | null
    summary: string | null
    description: string | null
    createdAt: Date | null
    apiId: string | null
  }

  export type EndpointCountAggregateOutputType = {
    id: number
    path: number
    method: number
    summary: number
    description: number
    createdAt: number
    apiId: number
    _all: number
  }


  export type EndpointMinAggregateInputType = {
    id?: true
    path?: true
    method?: true
    summary?: true
    description?: true
    createdAt?: true
    apiId?: true
  }

  export type EndpointMaxAggregateInputType = {
    id?: true
    path?: true
    method?: true
    summary?: true
    description?: true
    createdAt?: true
    apiId?: true
  }

  export type EndpointCountAggregateInputType = {
    id?: true
    path?: true
    method?: true
    summary?: true
    description?: true
    createdAt?: true
    apiId?: true
    _all?: true
  }

  export type EndpointAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endpoint to aggregate.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Endpoints
    **/
    _count?: true | EndpointCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EndpointMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EndpointMaxAggregateInputType
  }

  export type GetEndpointAggregateType<T extends EndpointAggregateArgs> = {
        [P in keyof T & keyof AggregateEndpoint]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEndpoint[P]>
      : GetScalarType<T[P], AggregateEndpoint[P]>
  }




  export type EndpointGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EndpointWhereInput
    orderBy?: EndpointOrderByWithAggregationInput | EndpointOrderByWithAggregationInput[]
    by: EndpointScalarFieldEnum[] | EndpointScalarFieldEnum
    having?: EndpointScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EndpointCountAggregateInputType | true
    _min?: EndpointMinAggregateInputType
    _max?: EndpointMaxAggregateInputType
  }

  export type EndpointGroupByOutputType = {
    id: string
    path: string
    method: string
    summary: string | null
    description: string | null
    createdAt: Date
    apiId: string
    _count: EndpointCountAggregateOutputType | null
    _min: EndpointMinAggregateOutputType | null
    _max: EndpointMaxAggregateOutputType | null
  }

  type GetEndpointGroupByPayload<T extends EndpointGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EndpointGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EndpointGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EndpointGroupByOutputType[P]>
            : GetScalarType<T[P], EndpointGroupByOutputType[P]>
        }
      >
    >


  export type EndpointSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    method?: boolean
    summary?: boolean
    description?: boolean
    createdAt?: boolean
    apiId?: boolean
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type EndpointSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    method?: boolean
    summary?: boolean
    description?: boolean
    createdAt?: boolean
    apiId?: boolean
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type EndpointSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    path?: boolean
    method?: boolean
    summary?: boolean
    description?: boolean
    createdAt?: boolean
    apiId?: boolean
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["endpoint"]>

  export type EndpointSelectScalar = {
    id?: boolean
    path?: boolean
    method?: boolean
    summary?: boolean
    description?: boolean
    createdAt?: boolean
    apiId?: boolean
  }

  export type EndpointOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "path" | "method" | "summary" | "description" | "createdAt" | "apiId", ExtArgs["result"]["endpoint"]>
  export type EndpointInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type EndpointIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type EndpointIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }

  export type $EndpointPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Endpoint"
    objects: {
      api: Prisma.$ApiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      path: string
      method: string
      summary: string | null
      description: string | null
      createdAt: Date
      apiId: string
    }, ExtArgs["result"]["endpoint"]>
    composites: {}
  }

  type EndpointGetPayload<S extends boolean | null | undefined | EndpointDefaultArgs> = $Result.GetResult<Prisma.$EndpointPayload, S>

  type EndpointCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EndpointFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EndpointCountAggregateInputType | true
    }

  export interface EndpointDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Endpoint'], meta: { name: 'Endpoint' } }
    /**
     * Find zero or one Endpoint that matches the filter.
     * @param {EndpointFindUniqueArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EndpointFindUniqueArgs>(args: SelectSubset<T, EndpointFindUniqueArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Endpoint that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EndpointFindUniqueOrThrowArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EndpointFindUniqueOrThrowArgs>(args: SelectSubset<T, EndpointFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpoint that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointFindFirstArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EndpointFindFirstArgs>(args?: SelectSubset<T, EndpointFindFirstArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Endpoint that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointFindFirstOrThrowArgs} args - Arguments to find a Endpoint
     * @example
     * // Get one Endpoint
     * const endpoint = await prisma.endpoint.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EndpointFindFirstOrThrowArgs>(args?: SelectSubset<T, EndpointFindFirstOrThrowArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Endpoints that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Endpoints
     * const endpoints = await prisma.endpoint.findMany()
     * 
     * // Get first 10 Endpoints
     * const endpoints = await prisma.endpoint.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const endpointWithIdOnly = await prisma.endpoint.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EndpointFindManyArgs>(args?: SelectSubset<T, EndpointFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Endpoint.
     * @param {EndpointCreateArgs} args - Arguments to create a Endpoint.
     * @example
     * // Create one Endpoint
     * const Endpoint = await prisma.endpoint.create({
     *   data: {
     *     // ... data to create a Endpoint
     *   }
     * })
     * 
     */
    create<T extends EndpointCreateArgs>(args: SelectSubset<T, EndpointCreateArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Endpoints.
     * @param {EndpointCreateManyArgs} args - Arguments to create many Endpoints.
     * @example
     * // Create many Endpoints
     * const endpoint = await prisma.endpoint.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EndpointCreateManyArgs>(args?: SelectSubset<T, EndpointCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Endpoints and returns the data saved in the database.
     * @param {EndpointCreateManyAndReturnArgs} args - Arguments to create many Endpoints.
     * @example
     * // Create many Endpoints
     * const endpoint = await prisma.endpoint.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Endpoints and only return the `id`
     * const endpointWithIdOnly = await prisma.endpoint.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EndpointCreateManyAndReturnArgs>(args?: SelectSubset<T, EndpointCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Endpoint.
     * @param {EndpointDeleteArgs} args - Arguments to delete one Endpoint.
     * @example
     * // Delete one Endpoint
     * const Endpoint = await prisma.endpoint.delete({
     *   where: {
     *     // ... filter to delete one Endpoint
     *   }
     * })
     * 
     */
    delete<T extends EndpointDeleteArgs>(args: SelectSubset<T, EndpointDeleteArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Endpoint.
     * @param {EndpointUpdateArgs} args - Arguments to update one Endpoint.
     * @example
     * // Update one Endpoint
     * const endpoint = await prisma.endpoint.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EndpointUpdateArgs>(args: SelectSubset<T, EndpointUpdateArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Endpoints.
     * @param {EndpointDeleteManyArgs} args - Arguments to filter Endpoints to delete.
     * @example
     * // Delete a few Endpoints
     * const { count } = await prisma.endpoint.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EndpointDeleteManyArgs>(args?: SelectSubset<T, EndpointDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Endpoints
     * const endpoint = await prisma.endpoint.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EndpointUpdateManyArgs>(args: SelectSubset<T, EndpointUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Endpoints and returns the data updated in the database.
     * @param {EndpointUpdateManyAndReturnArgs} args - Arguments to update many Endpoints.
     * @example
     * // Update many Endpoints
     * const endpoint = await prisma.endpoint.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Endpoints and only return the `id`
     * const endpointWithIdOnly = await prisma.endpoint.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends EndpointUpdateManyAndReturnArgs>(args: SelectSubset<T, EndpointUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Endpoint.
     * @param {EndpointUpsertArgs} args - Arguments to update or create a Endpoint.
     * @example
     * // Update or create a Endpoint
     * const endpoint = await prisma.endpoint.upsert({
     *   create: {
     *     // ... data to create a Endpoint
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Endpoint we want to update
     *   }
     * })
     */
    upsert<T extends EndpointUpsertArgs>(args: SelectSubset<T, EndpointUpsertArgs<ExtArgs>>): Prisma__EndpointClient<$Result.GetResult<Prisma.$EndpointPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Endpoints.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointCountArgs} args - Arguments to filter Endpoints to count.
     * @example
     * // Count the number of Endpoints
     * const count = await prisma.endpoint.count({
     *   where: {
     *     // ... the filter for the Endpoints we want to count
     *   }
     * })
    **/
    count<T extends EndpointCountArgs>(
      args?: Subset<T, EndpointCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EndpointCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Endpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EndpointAggregateArgs>(args: Subset<T, EndpointAggregateArgs>): Prisma.PrismaPromise<GetEndpointAggregateType<T>>

    /**
     * Group by Endpoint.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EndpointGroupByArgs} args - Group by arguments.
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
      T extends EndpointGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EndpointGroupByArgs['orderBy'] }
        : { orderBy?: EndpointGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EndpointGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEndpointGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Endpoint model
   */
  readonly fields: EndpointFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Endpoint.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EndpointClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    api<T extends ApiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiDefaultArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Endpoint model
   */
  interface EndpointFieldRefs {
    readonly id: FieldRef<"Endpoint", 'String'>
    readonly path: FieldRef<"Endpoint", 'String'>
    readonly method: FieldRef<"Endpoint", 'String'>
    readonly summary: FieldRef<"Endpoint", 'String'>
    readonly description: FieldRef<"Endpoint", 'String'>
    readonly createdAt: FieldRef<"Endpoint", 'DateTime'>
    readonly apiId: FieldRef<"Endpoint", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Endpoint findUnique
   */
  export type EndpointFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint findUniqueOrThrow
   */
  export type EndpointFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint findFirst
   */
  export type EndpointFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endpoints.
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endpoints.
     */
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Endpoint findFirstOrThrow
   */
  export type EndpointFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoint to fetch.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Endpoints.
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Endpoints.
     */
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Endpoint findMany
   */
  export type EndpointFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter, which Endpoints to fetch.
     */
    where?: EndpointWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Endpoints to fetch.
     */
    orderBy?: EndpointOrderByWithRelationInput | EndpointOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Endpoints.
     */
    cursor?: EndpointWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Endpoints from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Endpoints.
     */
    skip?: number
    distinct?: EndpointScalarFieldEnum | EndpointScalarFieldEnum[]
  }

  /**
   * Endpoint create
   */
  export type EndpointCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * The data needed to create a Endpoint.
     */
    data: XOR<EndpointCreateInput, EndpointUncheckedCreateInput>
  }

  /**
   * Endpoint createMany
   */
  export type EndpointCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Endpoints.
     */
    data: EndpointCreateManyInput | EndpointCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Endpoint createManyAndReturn
   */
  export type EndpointCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * The data used to create many Endpoints.
     */
    data: EndpointCreateManyInput | EndpointCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endpoint update
   */
  export type EndpointUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * The data needed to update a Endpoint.
     */
    data: XOR<EndpointUpdateInput, EndpointUncheckedUpdateInput>
    /**
     * Choose, which Endpoint to update.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint updateMany
   */
  export type EndpointUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Endpoints.
     */
    data: XOR<EndpointUpdateManyMutationInput, EndpointUncheckedUpdateManyInput>
    /**
     * Filter which Endpoints to update
     */
    where?: EndpointWhereInput
    /**
     * Limit how many Endpoints to update.
     */
    limit?: number
  }

  /**
   * Endpoint updateManyAndReturn
   */
  export type EndpointUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * The data used to update Endpoints.
     */
    data: XOR<EndpointUpdateManyMutationInput, EndpointUncheckedUpdateManyInput>
    /**
     * Filter which Endpoints to update
     */
    where?: EndpointWhereInput
    /**
     * Limit how many Endpoints to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Endpoint upsert
   */
  export type EndpointUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * The filter to search for the Endpoint to update in case it exists.
     */
    where: EndpointWhereUniqueInput
    /**
     * In case the Endpoint found by the `where` argument doesn't exist, create a new Endpoint with this data.
     */
    create: XOR<EndpointCreateInput, EndpointUncheckedCreateInput>
    /**
     * In case the Endpoint was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EndpointUpdateInput, EndpointUncheckedUpdateInput>
  }

  /**
   * Endpoint delete
   */
  export type EndpointDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
    /**
     * Filter which Endpoint to delete.
     */
    where: EndpointWhereUniqueInput
  }

  /**
   * Endpoint deleteMany
   */
  export type EndpointDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Endpoints to delete
     */
    where?: EndpointWhereInput
    /**
     * Limit how many Endpoints to delete.
     */
    limit?: number
  }

  /**
   * Endpoint without action
   */
  export type EndpointDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Endpoint
     */
    select?: EndpointSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Endpoint
     */
    omit?: EndpointOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EndpointInclude<ExtArgs> | null
  }


  /**
   * Model UserApiInteraction
   */

  export type AggregateUserApiInteraction = {
    _count: UserApiInteractionCountAggregateOutputType | null
    _min: UserApiInteractionMinAggregateOutputType | null
    _max: UserApiInteractionMaxAggregateOutputType | null
  }

  export type UserApiInteractionMinAggregateOutputType = {
    id: string | null
    type: $Enums.InteractionType | null
    createdAt: Date | null
    userId: string | null
    apiId: string | null
  }

  export type UserApiInteractionMaxAggregateOutputType = {
    id: string | null
    type: $Enums.InteractionType | null
    createdAt: Date | null
    userId: string | null
    apiId: string | null
  }

  export type UserApiInteractionCountAggregateOutputType = {
    id: number
    type: number
    createdAt: number
    userId: number
    apiId: number
    _all: number
  }


  export type UserApiInteractionMinAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    userId?: true
    apiId?: true
  }

  export type UserApiInteractionMaxAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    userId?: true
    apiId?: true
  }

  export type UserApiInteractionCountAggregateInputType = {
    id?: true
    type?: true
    createdAt?: true
    userId?: true
    apiId?: true
    _all?: true
  }

  export type UserApiInteractionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApiInteraction to aggregate.
     */
    where?: UserApiInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiInteractions to fetch.
     */
    orderBy?: UserApiInteractionOrderByWithRelationInput | UserApiInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserApiInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserApiInteractions
    **/
    _count?: true | UserApiInteractionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserApiInteractionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserApiInteractionMaxAggregateInputType
  }

  export type GetUserApiInteractionAggregateType<T extends UserApiInteractionAggregateArgs> = {
        [P in keyof T & keyof AggregateUserApiInteraction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserApiInteraction[P]>
      : GetScalarType<T[P], AggregateUserApiInteraction[P]>
  }




  export type UserApiInteractionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserApiInteractionWhereInput
    orderBy?: UserApiInteractionOrderByWithAggregationInput | UserApiInteractionOrderByWithAggregationInput[]
    by: UserApiInteractionScalarFieldEnum[] | UserApiInteractionScalarFieldEnum
    having?: UserApiInteractionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserApiInteractionCountAggregateInputType | true
    _min?: UserApiInteractionMinAggregateInputType
    _max?: UserApiInteractionMaxAggregateInputType
  }

  export type UserApiInteractionGroupByOutputType = {
    id: string
    type: $Enums.InteractionType
    createdAt: Date
    userId: string
    apiId: string
    _count: UserApiInteractionCountAggregateOutputType | null
    _min: UserApiInteractionMinAggregateOutputType | null
    _max: UserApiInteractionMaxAggregateOutputType | null
  }

  type GetUserApiInteractionGroupByPayload<T extends UserApiInteractionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserApiInteractionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserApiInteractionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserApiInteractionGroupByOutputType[P]>
            : GetScalarType<T[P], UserApiInteractionGroupByOutputType[P]>
        }
      >
    >


  export type UserApiInteractionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    apiId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiInteraction"]>

  export type UserApiInteractionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    apiId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiInteraction"]>

  export type UserApiInteractionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    apiId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userApiInteraction"]>

  export type UserApiInteractionSelectScalar = {
    id?: boolean
    type?: boolean
    createdAt?: boolean
    userId?: boolean
    apiId?: boolean
  }

  export type UserApiInteractionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "type" | "createdAt" | "userId" | "apiId", ExtArgs["result"]["userApiInteraction"]>
  export type UserApiInteractionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type UserApiInteractionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }
  export type UserApiInteractionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    api?: boolean | ApiDefaultArgs<ExtArgs>
  }

  export type $UserApiInteractionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserApiInteraction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      api: Prisma.$ApiPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      type: $Enums.InteractionType
      createdAt: Date
      userId: string
      apiId: string
    }, ExtArgs["result"]["userApiInteraction"]>
    composites: {}
  }

  type UserApiInteractionGetPayload<S extends boolean | null | undefined | UserApiInteractionDefaultArgs> = $Result.GetResult<Prisma.$UserApiInteractionPayload, S>

  type UserApiInteractionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserApiInteractionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserApiInteractionCountAggregateInputType | true
    }

  export interface UserApiInteractionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserApiInteraction'], meta: { name: 'UserApiInteraction' } }
    /**
     * Find zero or one UserApiInteraction that matches the filter.
     * @param {UserApiInteractionFindUniqueArgs} args - Arguments to find a UserApiInteraction
     * @example
     * // Get one UserApiInteraction
     * const userApiInteraction = await prisma.userApiInteraction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserApiInteractionFindUniqueArgs>(args: SelectSubset<T, UserApiInteractionFindUniqueArgs<ExtArgs>>): Prisma__UserApiInteractionClient<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserApiInteraction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserApiInteractionFindUniqueOrThrowArgs} args - Arguments to find a UserApiInteraction
     * @example
     * // Get one UserApiInteraction
     * const userApiInteraction = await prisma.userApiInteraction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserApiInteractionFindUniqueOrThrowArgs>(args: SelectSubset<T, UserApiInteractionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserApiInteractionClient<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApiInteraction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiInteractionFindFirstArgs} args - Arguments to find a UserApiInteraction
     * @example
     * // Get one UserApiInteraction
     * const userApiInteraction = await prisma.userApiInteraction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserApiInteractionFindFirstArgs>(args?: SelectSubset<T, UserApiInteractionFindFirstArgs<ExtArgs>>): Prisma__UserApiInteractionClient<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserApiInteraction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiInteractionFindFirstOrThrowArgs} args - Arguments to find a UserApiInteraction
     * @example
     * // Get one UserApiInteraction
     * const userApiInteraction = await prisma.userApiInteraction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserApiInteractionFindFirstOrThrowArgs>(args?: SelectSubset<T, UserApiInteractionFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserApiInteractionClient<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserApiInteractions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiInteractionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserApiInteractions
     * const userApiInteractions = await prisma.userApiInteraction.findMany()
     * 
     * // Get first 10 UserApiInteractions
     * const userApiInteractions = await prisma.userApiInteraction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userApiInteractionWithIdOnly = await prisma.userApiInteraction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserApiInteractionFindManyArgs>(args?: SelectSubset<T, UserApiInteractionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserApiInteraction.
     * @param {UserApiInteractionCreateArgs} args - Arguments to create a UserApiInteraction.
     * @example
     * // Create one UserApiInteraction
     * const UserApiInteraction = await prisma.userApiInteraction.create({
     *   data: {
     *     // ... data to create a UserApiInteraction
     *   }
     * })
     * 
     */
    create<T extends UserApiInteractionCreateArgs>(args: SelectSubset<T, UserApiInteractionCreateArgs<ExtArgs>>): Prisma__UserApiInteractionClient<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserApiInteractions.
     * @param {UserApiInteractionCreateManyArgs} args - Arguments to create many UserApiInteractions.
     * @example
     * // Create many UserApiInteractions
     * const userApiInteraction = await prisma.userApiInteraction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserApiInteractionCreateManyArgs>(args?: SelectSubset<T, UserApiInteractionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserApiInteractions and returns the data saved in the database.
     * @param {UserApiInteractionCreateManyAndReturnArgs} args - Arguments to create many UserApiInteractions.
     * @example
     * // Create many UserApiInteractions
     * const userApiInteraction = await prisma.userApiInteraction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserApiInteractions and only return the `id`
     * const userApiInteractionWithIdOnly = await prisma.userApiInteraction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserApiInteractionCreateManyAndReturnArgs>(args?: SelectSubset<T, UserApiInteractionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserApiInteraction.
     * @param {UserApiInteractionDeleteArgs} args - Arguments to delete one UserApiInteraction.
     * @example
     * // Delete one UserApiInteraction
     * const UserApiInteraction = await prisma.userApiInteraction.delete({
     *   where: {
     *     // ... filter to delete one UserApiInteraction
     *   }
     * })
     * 
     */
    delete<T extends UserApiInteractionDeleteArgs>(args: SelectSubset<T, UserApiInteractionDeleteArgs<ExtArgs>>): Prisma__UserApiInteractionClient<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserApiInteraction.
     * @param {UserApiInteractionUpdateArgs} args - Arguments to update one UserApiInteraction.
     * @example
     * // Update one UserApiInteraction
     * const userApiInteraction = await prisma.userApiInteraction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserApiInteractionUpdateArgs>(args: SelectSubset<T, UserApiInteractionUpdateArgs<ExtArgs>>): Prisma__UserApiInteractionClient<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserApiInteractions.
     * @param {UserApiInteractionDeleteManyArgs} args - Arguments to filter UserApiInteractions to delete.
     * @example
     * // Delete a few UserApiInteractions
     * const { count } = await prisma.userApiInteraction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserApiInteractionDeleteManyArgs>(args?: SelectSubset<T, UserApiInteractionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApiInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiInteractionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserApiInteractions
     * const userApiInteraction = await prisma.userApiInteraction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserApiInteractionUpdateManyArgs>(args: SelectSubset<T, UserApiInteractionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserApiInteractions and returns the data updated in the database.
     * @param {UserApiInteractionUpdateManyAndReturnArgs} args - Arguments to update many UserApiInteractions.
     * @example
     * // Update many UserApiInteractions
     * const userApiInteraction = await prisma.userApiInteraction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserApiInteractions and only return the `id`
     * const userApiInteractionWithIdOnly = await prisma.userApiInteraction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserApiInteractionUpdateManyAndReturnArgs>(args: SelectSubset<T, UserApiInteractionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserApiInteraction.
     * @param {UserApiInteractionUpsertArgs} args - Arguments to update or create a UserApiInteraction.
     * @example
     * // Update or create a UserApiInteraction
     * const userApiInteraction = await prisma.userApiInteraction.upsert({
     *   create: {
     *     // ... data to create a UserApiInteraction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserApiInteraction we want to update
     *   }
     * })
     */
    upsert<T extends UserApiInteractionUpsertArgs>(args: SelectSubset<T, UserApiInteractionUpsertArgs<ExtArgs>>): Prisma__UserApiInteractionClient<$Result.GetResult<Prisma.$UserApiInteractionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserApiInteractions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiInteractionCountArgs} args - Arguments to filter UserApiInteractions to count.
     * @example
     * // Count the number of UserApiInteractions
     * const count = await prisma.userApiInteraction.count({
     *   where: {
     *     // ... the filter for the UserApiInteractions we want to count
     *   }
     * })
    **/
    count<T extends UserApiInteractionCountArgs>(
      args?: Subset<T, UserApiInteractionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserApiInteractionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserApiInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiInteractionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserApiInteractionAggregateArgs>(args: Subset<T, UserApiInteractionAggregateArgs>): Prisma.PrismaPromise<GetUserApiInteractionAggregateType<T>>

    /**
     * Group by UserApiInteraction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserApiInteractionGroupByArgs} args - Group by arguments.
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
      T extends UserApiInteractionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserApiInteractionGroupByArgs['orderBy'] }
        : { orderBy?: UserApiInteractionGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserApiInteractionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserApiInteractionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserApiInteraction model
   */
  readonly fields: UserApiInteractionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserApiInteraction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserApiInteractionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    api<T extends ApiDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApiDefaultArgs<ExtArgs>>): Prisma__ApiClient<$Result.GetResult<Prisma.$ApiPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the UserApiInteraction model
   */
  interface UserApiInteractionFieldRefs {
    readonly id: FieldRef<"UserApiInteraction", 'String'>
    readonly type: FieldRef<"UserApiInteraction", 'InteractionType'>
    readonly createdAt: FieldRef<"UserApiInteraction", 'DateTime'>
    readonly userId: FieldRef<"UserApiInteraction", 'String'>
    readonly apiId: FieldRef<"UserApiInteraction", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserApiInteraction findUnique
   */
  export type UserApiInteractionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserApiInteraction to fetch.
     */
    where: UserApiInteractionWhereUniqueInput
  }

  /**
   * UserApiInteraction findUniqueOrThrow
   */
  export type UserApiInteractionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserApiInteraction to fetch.
     */
    where: UserApiInteractionWhereUniqueInput
  }

  /**
   * UserApiInteraction findFirst
   */
  export type UserApiInteractionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserApiInteraction to fetch.
     */
    where?: UserApiInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiInteractions to fetch.
     */
    orderBy?: UserApiInteractionOrderByWithRelationInput | UserApiInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApiInteractions.
     */
    cursor?: UserApiInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApiInteractions.
     */
    distinct?: UserApiInteractionScalarFieldEnum | UserApiInteractionScalarFieldEnum[]
  }

  /**
   * UserApiInteraction findFirstOrThrow
   */
  export type UserApiInteractionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserApiInteraction to fetch.
     */
    where?: UserApiInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiInteractions to fetch.
     */
    orderBy?: UserApiInteractionOrderByWithRelationInput | UserApiInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserApiInteractions.
     */
    cursor?: UserApiInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiInteractions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserApiInteractions.
     */
    distinct?: UserApiInteractionScalarFieldEnum | UserApiInteractionScalarFieldEnum[]
  }

  /**
   * UserApiInteraction findMany
   */
  export type UserApiInteractionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    /**
     * Filter, which UserApiInteractions to fetch.
     */
    where?: UserApiInteractionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserApiInteractions to fetch.
     */
    orderBy?: UserApiInteractionOrderByWithRelationInput | UserApiInteractionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserApiInteractions.
     */
    cursor?: UserApiInteractionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserApiInteractions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserApiInteractions.
     */
    skip?: number
    distinct?: UserApiInteractionScalarFieldEnum | UserApiInteractionScalarFieldEnum[]
  }

  /**
   * UserApiInteraction create
   */
  export type UserApiInteractionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    /**
     * The data needed to create a UserApiInteraction.
     */
    data: XOR<UserApiInteractionCreateInput, UserApiInteractionUncheckedCreateInput>
  }

  /**
   * UserApiInteraction createMany
   */
  export type UserApiInteractionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserApiInteractions.
     */
    data: UserApiInteractionCreateManyInput | UserApiInteractionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserApiInteraction createManyAndReturn
   */
  export type UserApiInteractionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * The data used to create many UserApiInteractions.
     */
    data: UserApiInteractionCreateManyInput | UserApiInteractionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserApiInteraction update
   */
  export type UserApiInteractionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    /**
     * The data needed to update a UserApiInteraction.
     */
    data: XOR<UserApiInteractionUpdateInput, UserApiInteractionUncheckedUpdateInput>
    /**
     * Choose, which UserApiInteraction to update.
     */
    where: UserApiInteractionWhereUniqueInput
  }

  /**
   * UserApiInteraction updateMany
   */
  export type UserApiInteractionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserApiInteractions.
     */
    data: XOR<UserApiInteractionUpdateManyMutationInput, UserApiInteractionUncheckedUpdateManyInput>
    /**
     * Filter which UserApiInteractions to update
     */
    where?: UserApiInteractionWhereInput
    /**
     * Limit how many UserApiInteractions to update.
     */
    limit?: number
  }

  /**
   * UserApiInteraction updateManyAndReturn
   */
  export type UserApiInteractionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * The data used to update UserApiInteractions.
     */
    data: XOR<UserApiInteractionUpdateManyMutationInput, UserApiInteractionUncheckedUpdateManyInput>
    /**
     * Filter which UserApiInteractions to update
     */
    where?: UserApiInteractionWhereInput
    /**
     * Limit how many UserApiInteractions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserApiInteraction upsert
   */
  export type UserApiInteractionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    /**
     * The filter to search for the UserApiInteraction to update in case it exists.
     */
    where: UserApiInteractionWhereUniqueInput
    /**
     * In case the UserApiInteraction found by the `where` argument doesn't exist, create a new UserApiInteraction with this data.
     */
    create: XOR<UserApiInteractionCreateInput, UserApiInteractionUncheckedCreateInput>
    /**
     * In case the UserApiInteraction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserApiInteractionUpdateInput, UserApiInteractionUncheckedUpdateInput>
  }

  /**
   * UserApiInteraction delete
   */
  export type UserApiInteractionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
    /**
     * Filter which UserApiInteraction to delete.
     */
    where: UserApiInteractionWhereUniqueInput
  }

  /**
   * UserApiInteraction deleteMany
   */
  export type UserApiInteractionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserApiInteractions to delete
     */
    where?: UserApiInteractionWhereInput
    /**
     * Limit how many UserApiInteractions to delete.
     */
    limit?: number
  }

  /**
   * UserApiInteraction without action
   */
  export type UserApiInteractionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserApiInteraction
     */
    select?: UserApiInteractionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserApiInteraction
     */
    omit?: UserApiInteractionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserApiInteractionInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    createdAt: 'createdAt'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProviderScalarFieldEnum: {
    id: 'id',
    name: 'name',
    website: 'website',
    description: 'description',
    logoUrl: 'logoUrl',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProviderScalarFieldEnum = (typeof ProviderScalarFieldEnum)[keyof typeof ProviderScalarFieldEnum]


  export const CategoryScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    icon: 'icon',
    createdAt: 'createdAt'
  };

  export type CategoryScalarFieldEnum = (typeof CategoryScalarFieldEnum)[keyof typeof CategoryScalarFieldEnum]


  export const ApiScalarFieldEnum: {
    id: 'id',
    name: 'name',
    slug: 'slug',
    description: 'description',
    baseUrl: 'baseUrl',
    docsUrl: 'docsUrl',
    pricingType: 'pricingType',
    pricingDetails: 'pricingDetails',
    authType: 'authType',
    rateLimit: 'rateLimit',
    hasFreeTier: 'hasFreeTier',
    reliabilityScore: 'reliabilityScore',
    popularityScore: 'popularityScore',
    features: 'features',
    source: 'source',
    isActive: 'isActive',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    providerId: 'providerId',
    categoryId: 'categoryId'
  };

  export type ApiScalarFieldEnum = (typeof ApiScalarFieldEnum)[keyof typeof ApiScalarFieldEnum]


  export const EndpointScalarFieldEnum: {
    id: 'id',
    path: 'path',
    method: 'method',
    summary: 'summary',
    description: 'description',
    createdAt: 'createdAt',
    apiId: 'apiId'
  };

  export type EndpointScalarFieldEnum = (typeof EndpointScalarFieldEnum)[keyof typeof EndpointScalarFieldEnum]


  export const UserApiInteractionScalarFieldEnum: {
    id: 'id',
    type: 'type',
    createdAt: 'createdAt',
    userId: 'userId',
    apiId: 'apiId'
  };

  export type UserApiInteractionScalarFieldEnum = (typeof UserApiInteractionScalarFieldEnum)[keyof typeof UserApiInteractionScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


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
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'PricingType'
   */
  export type EnumPricingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingType'>
    


  /**
   * Reference to a field of type 'PricingType[]'
   */
  export type ListEnumPricingTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'PricingType[]'>
    


  /**
   * Reference to a field of type 'AuthType'
   */
  export type EnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType'>
    


  /**
   * Reference to a field of type 'AuthType[]'
   */
  export type ListEnumAuthTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AuthType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'InteractionType'
   */
  export type EnumInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionType'>
    


  /**
   * Reference to a field of type 'InteractionType[]'
   */
  export type ListEnumInteractionTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'InteractionType[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    interactions?: UserApiInteractionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    interactions?: UserApiInteractionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    interactions?: UserApiInteractionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
  }

  export type ProviderWhereInput = {
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    id?: StringFilter<"Provider"> | string
    name?: StringFilter<"Provider"> | string
    website?: StringFilter<"Provider"> | string
    description?: StringNullableFilter<"Provider"> | string | null
    logoUrl?: StringNullableFilter<"Provider"> | string | null
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    apis?: ApiListRelationFilter
  }

  export type ProviderOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    apis?: ApiOrderByRelationAggregateInput
  }

  export type ProviderWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: ProviderWhereInput | ProviderWhereInput[]
    OR?: ProviderWhereInput[]
    NOT?: ProviderWhereInput | ProviderWhereInput[]
    website?: StringFilter<"Provider"> | string
    description?: StringNullableFilter<"Provider"> | string | null
    logoUrl?: StringNullableFilter<"Provider"> | string | null
    createdAt?: DateTimeFilter<"Provider"> | Date | string
    updatedAt?: DateTimeFilter<"Provider"> | Date | string
    apis?: ApiListRelationFilter
  }, "id" | "name">

  export type ProviderOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    description?: SortOrderInput | SortOrder
    logoUrl?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProviderCountOrderByAggregateInput
    _max?: ProviderMaxOrderByAggregateInput
    _min?: ProviderMinOrderByAggregateInput
  }

  export type ProviderScalarWhereWithAggregatesInput = {
    AND?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    OR?: ProviderScalarWhereWithAggregatesInput[]
    NOT?: ProviderScalarWhereWithAggregatesInput | ProviderScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Provider"> | string
    name?: StringWithAggregatesFilter<"Provider"> | string
    website?: StringWithAggregatesFilter<"Provider"> | string
    description?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    logoUrl?: StringNullableWithAggregatesFilter<"Provider"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Provider"> | Date | string
  }

  export type CategoryWhereInput = {
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    id?: StringFilter<"Category"> | string
    name?: StringFilter<"Category"> | string
    slug?: StringFilter<"Category"> | string
    description?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    apis?: ApiListRelationFilter
  }

  export type CategoryOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    apis?: ApiOrderByRelationAggregateInput
  }

  export type CategoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    slug?: string
    AND?: CategoryWhereInput | CategoryWhereInput[]
    OR?: CategoryWhereInput[]
    NOT?: CategoryWhereInput | CategoryWhereInput[]
    description?: StringNullableFilter<"Category"> | string | null
    icon?: StringNullableFilter<"Category"> | string | null
    createdAt?: DateTimeFilter<"Category"> | Date | string
    apis?: ApiListRelationFilter
  }, "id" | "name" | "slug">

  export type CategoryOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrderInput | SortOrder
    icon?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: CategoryCountOrderByAggregateInput
    _max?: CategoryMaxOrderByAggregateInput
    _min?: CategoryMinOrderByAggregateInput
  }

  export type CategoryScalarWhereWithAggregatesInput = {
    AND?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    OR?: CategoryScalarWhereWithAggregatesInput[]
    NOT?: CategoryScalarWhereWithAggregatesInput | CategoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Category"> | string
    name?: StringWithAggregatesFilter<"Category"> | string
    slug?: StringWithAggregatesFilter<"Category"> | string
    description?: StringNullableWithAggregatesFilter<"Category"> | string | null
    icon?: StringNullableWithAggregatesFilter<"Category"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Category"> | Date | string
  }

  export type ApiWhereInput = {
    AND?: ApiWhereInput | ApiWhereInput[]
    OR?: ApiWhereInput[]
    NOT?: ApiWhereInput | ApiWhereInput[]
    id?: StringFilter<"Api"> | string
    name?: StringFilter<"Api"> | string
    slug?: StringFilter<"Api"> | string
    description?: StringFilter<"Api"> | string
    baseUrl?: StringFilter<"Api"> | string
    docsUrl?: StringFilter<"Api"> | string
    pricingType?: EnumPricingTypeFilter<"Api"> | $Enums.PricingType
    pricingDetails?: StringNullableFilter<"Api"> | string | null
    authType?: EnumAuthTypeFilter<"Api"> | $Enums.AuthType
    rateLimit?: StringNullableFilter<"Api"> | string | null
    hasFreeTier?: BoolFilter<"Api"> | boolean
    reliabilityScore?: FloatNullableFilter<"Api"> | number | null
    popularityScore?: IntFilter<"Api"> | number
    features?: StringNullableListFilter<"Api">
    source?: StringNullableFilter<"Api"> | string | null
    isActive?: BoolFilter<"Api"> | boolean
    createdAt?: DateTimeFilter<"Api"> | Date | string
    updatedAt?: DateTimeFilter<"Api"> | Date | string
    providerId?: StringFilter<"Api"> | string
    categoryId?: StringFilter<"Api"> | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    endpoints?: EndpointListRelationFilter
    interactions?: UserApiInteractionListRelationFilter
  }

  export type ApiOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    baseUrl?: SortOrder
    docsUrl?: SortOrder
    pricingType?: SortOrder
    pricingDetails?: SortOrderInput | SortOrder
    authType?: SortOrder
    rateLimit?: SortOrderInput | SortOrder
    hasFreeTier?: SortOrder
    reliabilityScore?: SortOrderInput | SortOrder
    popularityScore?: SortOrder
    features?: SortOrder
    source?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
    provider?: ProviderOrderByWithRelationInput
    category?: CategoryOrderByWithRelationInput
    endpoints?: EndpointOrderByRelationAggregateInput
    interactions?: UserApiInteractionOrderByRelationAggregateInput
  }

  export type ApiWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    slug?: string
    AND?: ApiWhereInput | ApiWhereInput[]
    OR?: ApiWhereInput[]
    NOT?: ApiWhereInput | ApiWhereInput[]
    name?: StringFilter<"Api"> | string
    description?: StringFilter<"Api"> | string
    baseUrl?: StringFilter<"Api"> | string
    docsUrl?: StringFilter<"Api"> | string
    pricingType?: EnumPricingTypeFilter<"Api"> | $Enums.PricingType
    pricingDetails?: StringNullableFilter<"Api"> | string | null
    authType?: EnumAuthTypeFilter<"Api"> | $Enums.AuthType
    rateLimit?: StringNullableFilter<"Api"> | string | null
    hasFreeTier?: BoolFilter<"Api"> | boolean
    reliabilityScore?: FloatNullableFilter<"Api"> | number | null
    popularityScore?: IntFilter<"Api"> | number
    features?: StringNullableListFilter<"Api">
    source?: StringNullableFilter<"Api"> | string | null
    isActive?: BoolFilter<"Api"> | boolean
    createdAt?: DateTimeFilter<"Api"> | Date | string
    updatedAt?: DateTimeFilter<"Api"> | Date | string
    providerId?: StringFilter<"Api"> | string
    categoryId?: StringFilter<"Api"> | string
    provider?: XOR<ProviderScalarRelationFilter, ProviderWhereInput>
    category?: XOR<CategoryScalarRelationFilter, CategoryWhereInput>
    endpoints?: EndpointListRelationFilter
    interactions?: UserApiInteractionListRelationFilter
  }, "id" | "slug">

  export type ApiOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    baseUrl?: SortOrder
    docsUrl?: SortOrder
    pricingType?: SortOrder
    pricingDetails?: SortOrderInput | SortOrder
    authType?: SortOrder
    rateLimit?: SortOrderInput | SortOrder
    hasFreeTier?: SortOrder
    reliabilityScore?: SortOrderInput | SortOrder
    popularityScore?: SortOrder
    features?: SortOrder
    source?: SortOrderInput | SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
    _count?: ApiCountOrderByAggregateInput
    _avg?: ApiAvgOrderByAggregateInput
    _max?: ApiMaxOrderByAggregateInput
    _min?: ApiMinOrderByAggregateInput
    _sum?: ApiSumOrderByAggregateInput
  }

  export type ApiScalarWhereWithAggregatesInput = {
    AND?: ApiScalarWhereWithAggregatesInput | ApiScalarWhereWithAggregatesInput[]
    OR?: ApiScalarWhereWithAggregatesInput[]
    NOT?: ApiScalarWhereWithAggregatesInput | ApiScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Api"> | string
    name?: StringWithAggregatesFilter<"Api"> | string
    slug?: StringWithAggregatesFilter<"Api"> | string
    description?: StringWithAggregatesFilter<"Api"> | string
    baseUrl?: StringWithAggregatesFilter<"Api"> | string
    docsUrl?: StringWithAggregatesFilter<"Api"> | string
    pricingType?: EnumPricingTypeWithAggregatesFilter<"Api"> | $Enums.PricingType
    pricingDetails?: StringNullableWithAggregatesFilter<"Api"> | string | null
    authType?: EnumAuthTypeWithAggregatesFilter<"Api"> | $Enums.AuthType
    rateLimit?: StringNullableWithAggregatesFilter<"Api"> | string | null
    hasFreeTier?: BoolWithAggregatesFilter<"Api"> | boolean
    reliabilityScore?: FloatNullableWithAggregatesFilter<"Api"> | number | null
    popularityScore?: IntWithAggregatesFilter<"Api"> | number
    features?: StringNullableListFilter<"Api">
    source?: StringNullableWithAggregatesFilter<"Api"> | string | null
    isActive?: BoolWithAggregatesFilter<"Api"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Api"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Api"> | Date | string
    providerId?: StringWithAggregatesFilter<"Api"> | string
    categoryId?: StringWithAggregatesFilter<"Api"> | string
  }

  export type EndpointWhereInput = {
    AND?: EndpointWhereInput | EndpointWhereInput[]
    OR?: EndpointWhereInput[]
    NOT?: EndpointWhereInput | EndpointWhereInput[]
    id?: StringFilter<"Endpoint"> | string
    path?: StringFilter<"Endpoint"> | string
    method?: StringFilter<"Endpoint"> | string
    summary?: StringNullableFilter<"Endpoint"> | string | null
    description?: StringNullableFilter<"Endpoint"> | string | null
    createdAt?: DateTimeFilter<"Endpoint"> | Date | string
    apiId?: StringFilter<"Endpoint"> | string
    api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }

  export type EndpointOrderByWithRelationInput = {
    id?: SortOrder
    path?: SortOrder
    method?: SortOrder
    summary?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    apiId?: SortOrder
    api?: ApiOrderByWithRelationInput
  }

  export type EndpointWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    apiId_path_method?: EndpointApiIdPathMethodCompoundUniqueInput
    AND?: EndpointWhereInput | EndpointWhereInput[]
    OR?: EndpointWhereInput[]
    NOT?: EndpointWhereInput | EndpointWhereInput[]
    path?: StringFilter<"Endpoint"> | string
    method?: StringFilter<"Endpoint"> | string
    summary?: StringNullableFilter<"Endpoint"> | string | null
    description?: StringNullableFilter<"Endpoint"> | string | null
    createdAt?: DateTimeFilter<"Endpoint"> | Date | string
    apiId?: StringFilter<"Endpoint"> | string
    api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }, "id" | "apiId_path_method">

  export type EndpointOrderByWithAggregationInput = {
    id?: SortOrder
    path?: SortOrder
    method?: SortOrder
    summary?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    apiId?: SortOrder
    _count?: EndpointCountOrderByAggregateInput
    _max?: EndpointMaxOrderByAggregateInput
    _min?: EndpointMinOrderByAggregateInput
  }

  export type EndpointScalarWhereWithAggregatesInput = {
    AND?: EndpointScalarWhereWithAggregatesInput | EndpointScalarWhereWithAggregatesInput[]
    OR?: EndpointScalarWhereWithAggregatesInput[]
    NOT?: EndpointScalarWhereWithAggregatesInput | EndpointScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Endpoint"> | string
    path?: StringWithAggregatesFilter<"Endpoint"> | string
    method?: StringWithAggregatesFilter<"Endpoint"> | string
    summary?: StringNullableWithAggregatesFilter<"Endpoint"> | string | null
    description?: StringNullableWithAggregatesFilter<"Endpoint"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Endpoint"> | Date | string
    apiId?: StringWithAggregatesFilter<"Endpoint"> | string
  }

  export type UserApiInteractionWhereInput = {
    AND?: UserApiInteractionWhereInput | UserApiInteractionWhereInput[]
    OR?: UserApiInteractionWhereInput[]
    NOT?: UserApiInteractionWhereInput | UserApiInteractionWhereInput[]
    id?: StringFilter<"UserApiInteraction"> | string
    type?: EnumInteractionTypeFilter<"UserApiInteraction"> | $Enums.InteractionType
    createdAt?: DateTimeFilter<"UserApiInteraction"> | Date | string
    userId?: StringFilter<"UserApiInteraction"> | string
    apiId?: StringFilter<"UserApiInteraction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }

  export type UserApiInteractionOrderByWithRelationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
    user?: UserOrderByWithRelationInput
    api?: ApiOrderByWithRelationInput
  }

  export type UserApiInteractionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: UserApiInteractionWhereInput | UserApiInteractionWhereInput[]
    OR?: UserApiInteractionWhereInput[]
    NOT?: UserApiInteractionWhereInput | UserApiInteractionWhereInput[]
    type?: EnumInteractionTypeFilter<"UserApiInteraction"> | $Enums.InteractionType
    createdAt?: DateTimeFilter<"UserApiInteraction"> | Date | string
    userId?: StringFilter<"UserApiInteraction"> | string
    apiId?: StringFilter<"UserApiInteraction"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    api?: XOR<ApiScalarRelationFilter, ApiWhereInput>
  }, "id">

  export type UserApiInteractionOrderByWithAggregationInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
    _count?: UserApiInteractionCountOrderByAggregateInput
    _max?: UserApiInteractionMaxOrderByAggregateInput
    _min?: UserApiInteractionMinOrderByAggregateInput
  }

  export type UserApiInteractionScalarWhereWithAggregatesInput = {
    AND?: UserApiInteractionScalarWhereWithAggregatesInput | UserApiInteractionScalarWhereWithAggregatesInput[]
    OR?: UserApiInteractionScalarWhereWithAggregatesInput[]
    NOT?: UserApiInteractionScalarWhereWithAggregatesInput | UserApiInteractionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserApiInteraction"> | string
    type?: EnumInteractionTypeWithAggregatesFilter<"UserApiInteraction"> | $Enums.InteractionType
    createdAt?: DateTimeWithAggregatesFilter<"UserApiInteraction"> | Date | string
    userId?: StringWithAggregatesFilter<"UserApiInteraction"> | string
    apiId?: StringWithAggregatesFilter<"UserApiInteraction"> | string
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    interactions?: UserApiInteractionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
    interactions?: UserApiInteractionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: UserApiInteractionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    interactions?: UserApiInteractionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderCreateInput = {
    id?: string
    name: string
    website: string
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apis?: ApiCreateNestedManyWithoutProviderInput
  }

  export type ProviderUncheckedCreateInput = {
    id?: string
    name: string
    website: string
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    apis?: ApiUncheckedCreateNestedManyWithoutProviderInput
  }

  export type ProviderUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apis?: ApiUpdateManyWithoutProviderNestedInput
  }

  export type ProviderUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apis?: ApiUncheckedUpdateManyWithoutProviderNestedInput
  }

  export type ProviderCreateManyInput = {
    id?: string
    name: string
    website: string
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    apis?: ApiCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
    apis?: ApiUncheckedCreateNestedManyWithoutCategoryInput
  }

  export type CategoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apis?: ApiUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apis?: ApiUncheckedUpdateManyWithoutCategoryNestedInput
  }

  export type CategoryCreateManyInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
  }

  export type CategoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutApisInput
    category: CategoryCreateNestedOneWithoutApisInput
    endpoints?: EndpointCreateNestedManyWithoutApiInput
    interactions?: UserApiInteractionCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    categoryId: string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutApiInput
    interactions?: UserApiInteractionUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutApisNestedInput
    category?: CategoryUpdateOneRequiredWithoutApisNestedInput
    endpoints?: EndpointUpdateManyWithoutApiNestedInput
    interactions?: UserApiInteractionUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    endpoints?: EndpointUncheckedUpdateManyWithoutApiNestedInput
    interactions?: UserApiInteractionUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiCreateManyInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    categoryId: string
  }

  export type ApiUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type EndpointCreateInput = {
    id?: string
    path: string
    method: string
    summary?: string | null
    description?: string | null
    createdAt?: Date | string
    api: ApiCreateNestedOneWithoutEndpointsInput
  }

  export type EndpointUncheckedCreateInput = {
    id?: string
    path: string
    method: string
    summary?: string | null
    description?: string | null
    createdAt?: Date | string
    apiId: string
  }

  export type EndpointUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api?: ApiUpdateOneRequiredWithoutEndpointsNestedInput
  }

  export type EndpointUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiId?: StringFieldUpdateOperationsInput | string
  }

  export type EndpointCreateManyInput = {
    id?: string
    path: string
    method: string
    summary?: string | null
    description?: string | null
    createdAt?: Date | string
    apiId: string
  }

  export type EndpointUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiId?: StringFieldUpdateOperationsInput | string
  }

  export type UserApiInteractionCreateInput = {
    id?: string
    type: $Enums.InteractionType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInteractionsInput
    api: ApiCreateNestedOneWithoutInteractionsInput
  }

  export type UserApiInteractionUncheckedCreateInput = {
    id?: string
    type: $Enums.InteractionType
    createdAt?: Date | string
    userId: string
    apiId: string
  }

  export type UserApiInteractionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
    api?: ApiUpdateOneRequiredWithoutInteractionsNestedInput
  }

  export type UserApiInteractionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
  }

  export type UserApiInteractionCreateManyInput = {
    id?: string
    type: $Enums.InteractionType
    createdAt?: Date | string
    userId: string
    apiId: string
  }

  export type UserApiInteractionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiInteractionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    apiId?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type UserApiInteractionListRelationFilter = {
    every?: UserApiInteractionWhereInput
    some?: UserApiInteractionWhereInput
    none?: UserApiInteractionWhereInput
  }

  export type UserApiInteractionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    createdAt?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type ApiListRelationFilter = {
    every?: ApiWhereInput
    some?: ApiWhereInput
    none?: ApiWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ApiOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProviderCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProviderMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    website?: SortOrder
    description?: SortOrder
    logoUrl?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type CategoryCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type CategoryMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    icon?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumPricingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingType | EnumPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingTypeFilter<$PrismaModel> | $Enums.PricingType
  }

  export type EnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type FloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type ProviderScalarRelationFilter = {
    is?: ProviderWhereInput
    isNot?: ProviderWhereInput
  }

  export type CategoryScalarRelationFilter = {
    is?: CategoryWhereInput
    isNot?: CategoryWhereInput
  }

  export type EndpointListRelationFilter = {
    every?: EndpointWhereInput
    some?: EndpointWhereInput
    none?: EndpointWhereInput
  }

  export type EndpointOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApiCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    baseUrl?: SortOrder
    docsUrl?: SortOrder
    pricingType?: SortOrder
    pricingDetails?: SortOrder
    authType?: SortOrder
    rateLimit?: SortOrder
    hasFreeTier?: SortOrder
    reliabilityScore?: SortOrder
    popularityScore?: SortOrder
    features?: SortOrder
    source?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
  }

  export type ApiAvgOrderByAggregateInput = {
    reliabilityScore?: SortOrder
    popularityScore?: SortOrder
  }

  export type ApiMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    baseUrl?: SortOrder
    docsUrl?: SortOrder
    pricingType?: SortOrder
    pricingDetails?: SortOrder
    authType?: SortOrder
    rateLimit?: SortOrder
    hasFreeTier?: SortOrder
    reliabilityScore?: SortOrder
    popularityScore?: SortOrder
    source?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
  }

  export type ApiMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    slug?: SortOrder
    description?: SortOrder
    baseUrl?: SortOrder
    docsUrl?: SortOrder
    pricingType?: SortOrder
    pricingDetails?: SortOrder
    authType?: SortOrder
    rateLimit?: SortOrder
    hasFreeTier?: SortOrder
    reliabilityScore?: SortOrder
    popularityScore?: SortOrder
    source?: SortOrder
    isActive?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    providerId?: SortOrder
    categoryId?: SortOrder
  }

  export type ApiSumOrderByAggregateInput = {
    reliabilityScore?: SortOrder
    popularityScore?: SortOrder
  }

  export type EnumPricingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingType | EnumPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingTypeWithAggregatesFilter<$PrismaModel> | $Enums.PricingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricingTypeFilter<$PrismaModel>
    _max?: NestedEnumPricingTypeFilter<$PrismaModel>
  }

  export type EnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type FloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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

  export type ApiScalarRelationFilter = {
    is?: ApiWhereInput
    isNot?: ApiWhereInput
  }

  export type EndpointApiIdPathMethodCompoundUniqueInput = {
    apiId: string
    path: string
    method: string
  }

  export type EndpointCountOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    method?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    apiId?: SortOrder
  }

  export type EndpointMaxOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    method?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    apiId?: SortOrder
  }

  export type EndpointMinOrderByAggregateInput = {
    id?: SortOrder
    path?: SortOrder
    method?: SortOrder
    summary?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    apiId?: SortOrder
  }

  export type EnumInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeFilter<$PrismaModel> | $Enums.InteractionType
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type UserApiInteractionCountOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
  }

  export type UserApiInteractionMaxOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
  }

  export type UserApiInteractionMinOrderByAggregateInput = {
    id?: SortOrder
    type?: SortOrder
    createdAt?: SortOrder
    userId?: SortOrder
    apiId?: SortOrder
  }

  export type EnumInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumInteractionTypeFilter<$PrismaModel>
  }

  export type UserApiInteractionCreateNestedManyWithoutUserInput = {
    create?: XOR<UserApiInteractionCreateWithoutUserInput, UserApiInteractionUncheckedCreateWithoutUserInput> | UserApiInteractionCreateWithoutUserInput[] | UserApiInteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiInteractionCreateOrConnectWithoutUserInput | UserApiInteractionCreateOrConnectWithoutUserInput[]
    createMany?: UserApiInteractionCreateManyUserInputEnvelope
    connect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
  }

  export type UserApiInteractionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserApiInteractionCreateWithoutUserInput, UserApiInteractionUncheckedCreateWithoutUserInput> | UserApiInteractionCreateWithoutUserInput[] | UserApiInteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiInteractionCreateOrConnectWithoutUserInput | UserApiInteractionCreateOrConnectWithoutUserInput[]
    createMany?: UserApiInteractionCreateManyUserInputEnvelope
    connect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type UserApiInteractionUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserApiInteractionCreateWithoutUserInput, UserApiInteractionUncheckedCreateWithoutUserInput> | UserApiInteractionCreateWithoutUserInput[] | UserApiInteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiInteractionCreateOrConnectWithoutUserInput | UserApiInteractionCreateOrConnectWithoutUserInput[]
    upsert?: UserApiInteractionUpsertWithWhereUniqueWithoutUserInput | UserApiInteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserApiInteractionCreateManyUserInputEnvelope
    set?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    disconnect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    delete?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    connect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    update?: UserApiInteractionUpdateWithWhereUniqueWithoutUserInput | UserApiInteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserApiInteractionUpdateManyWithWhereWithoutUserInput | UserApiInteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserApiInteractionScalarWhereInput | UserApiInteractionScalarWhereInput[]
  }

  export type UserApiInteractionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserApiInteractionCreateWithoutUserInput, UserApiInteractionUncheckedCreateWithoutUserInput> | UserApiInteractionCreateWithoutUserInput[] | UserApiInteractionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserApiInteractionCreateOrConnectWithoutUserInput | UserApiInteractionCreateOrConnectWithoutUserInput[]
    upsert?: UserApiInteractionUpsertWithWhereUniqueWithoutUserInput | UserApiInteractionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserApiInteractionCreateManyUserInputEnvelope
    set?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    disconnect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    delete?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    connect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    update?: UserApiInteractionUpdateWithWhereUniqueWithoutUserInput | UserApiInteractionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserApiInteractionUpdateManyWithWhereWithoutUserInput | UserApiInteractionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserApiInteractionScalarWhereInput | UserApiInteractionScalarWhereInput[]
  }

  export type ApiCreateNestedManyWithoutProviderInput = {
    create?: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput> | ApiCreateWithoutProviderInput[] | ApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutProviderInput | ApiCreateOrConnectWithoutProviderInput[]
    createMany?: ApiCreateManyProviderInputEnvelope
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
  }

  export type ApiUncheckedCreateNestedManyWithoutProviderInput = {
    create?: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput> | ApiCreateWithoutProviderInput[] | ApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutProviderInput | ApiCreateOrConnectWithoutProviderInput[]
    createMany?: ApiCreateManyProviderInputEnvelope
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type ApiUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput> | ApiCreateWithoutProviderInput[] | ApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutProviderInput | ApiCreateOrConnectWithoutProviderInput[]
    upsert?: ApiUpsertWithWhereUniqueWithoutProviderInput | ApiUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ApiCreateManyProviderInputEnvelope
    set?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    disconnect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    delete?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    update?: ApiUpdateWithWhereUniqueWithoutProviderInput | ApiUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ApiUpdateManyWithWhereWithoutProviderInput | ApiUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ApiScalarWhereInput | ApiScalarWhereInput[]
  }

  export type ApiUncheckedUpdateManyWithoutProviderNestedInput = {
    create?: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput> | ApiCreateWithoutProviderInput[] | ApiUncheckedCreateWithoutProviderInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutProviderInput | ApiCreateOrConnectWithoutProviderInput[]
    upsert?: ApiUpsertWithWhereUniqueWithoutProviderInput | ApiUpsertWithWhereUniqueWithoutProviderInput[]
    createMany?: ApiCreateManyProviderInputEnvelope
    set?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    disconnect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    delete?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    update?: ApiUpdateWithWhereUniqueWithoutProviderInput | ApiUpdateWithWhereUniqueWithoutProviderInput[]
    updateMany?: ApiUpdateManyWithWhereWithoutProviderInput | ApiUpdateManyWithWhereWithoutProviderInput[]
    deleteMany?: ApiScalarWhereInput | ApiScalarWhereInput[]
  }

  export type ApiCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ApiCreateWithoutCategoryInput, ApiUncheckedCreateWithoutCategoryInput> | ApiCreateWithoutCategoryInput[] | ApiUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutCategoryInput | ApiCreateOrConnectWithoutCategoryInput[]
    createMany?: ApiCreateManyCategoryInputEnvelope
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
  }

  export type ApiUncheckedCreateNestedManyWithoutCategoryInput = {
    create?: XOR<ApiCreateWithoutCategoryInput, ApiUncheckedCreateWithoutCategoryInput> | ApiCreateWithoutCategoryInput[] | ApiUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutCategoryInput | ApiCreateOrConnectWithoutCategoryInput[]
    createMany?: ApiCreateManyCategoryInputEnvelope
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
  }

  export type ApiUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ApiCreateWithoutCategoryInput, ApiUncheckedCreateWithoutCategoryInput> | ApiCreateWithoutCategoryInput[] | ApiUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutCategoryInput | ApiCreateOrConnectWithoutCategoryInput[]
    upsert?: ApiUpsertWithWhereUniqueWithoutCategoryInput | ApiUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ApiCreateManyCategoryInputEnvelope
    set?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    disconnect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    delete?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    update?: ApiUpdateWithWhereUniqueWithoutCategoryInput | ApiUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ApiUpdateManyWithWhereWithoutCategoryInput | ApiUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ApiScalarWhereInput | ApiScalarWhereInput[]
  }

  export type ApiUncheckedUpdateManyWithoutCategoryNestedInput = {
    create?: XOR<ApiCreateWithoutCategoryInput, ApiUncheckedCreateWithoutCategoryInput> | ApiCreateWithoutCategoryInput[] | ApiUncheckedCreateWithoutCategoryInput[]
    connectOrCreate?: ApiCreateOrConnectWithoutCategoryInput | ApiCreateOrConnectWithoutCategoryInput[]
    upsert?: ApiUpsertWithWhereUniqueWithoutCategoryInput | ApiUpsertWithWhereUniqueWithoutCategoryInput[]
    createMany?: ApiCreateManyCategoryInputEnvelope
    set?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    disconnect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    delete?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    connect?: ApiWhereUniqueInput | ApiWhereUniqueInput[]
    update?: ApiUpdateWithWhereUniqueWithoutCategoryInput | ApiUpdateWithWhereUniqueWithoutCategoryInput[]
    updateMany?: ApiUpdateManyWithWhereWithoutCategoryInput | ApiUpdateManyWithWhereWithoutCategoryInput[]
    deleteMany?: ApiScalarWhereInput | ApiScalarWhereInput[]
  }

  export type ApiCreatefeaturesInput = {
    set: string[]
  }

  export type ProviderCreateNestedOneWithoutApisInput = {
    create?: XOR<ProviderCreateWithoutApisInput, ProviderUncheckedCreateWithoutApisInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutApisInput
    connect?: ProviderWhereUniqueInput
  }

  export type CategoryCreateNestedOneWithoutApisInput = {
    create?: XOR<CategoryCreateWithoutApisInput, CategoryUncheckedCreateWithoutApisInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutApisInput
    connect?: CategoryWhereUniqueInput
  }

  export type EndpointCreateNestedManyWithoutApiInput = {
    create?: XOR<EndpointCreateWithoutApiInput, EndpointUncheckedCreateWithoutApiInput> | EndpointCreateWithoutApiInput[] | EndpointUncheckedCreateWithoutApiInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutApiInput | EndpointCreateOrConnectWithoutApiInput[]
    createMany?: EndpointCreateManyApiInputEnvelope
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
  }

  export type UserApiInteractionCreateNestedManyWithoutApiInput = {
    create?: XOR<UserApiInteractionCreateWithoutApiInput, UserApiInteractionUncheckedCreateWithoutApiInput> | UserApiInteractionCreateWithoutApiInput[] | UserApiInteractionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UserApiInteractionCreateOrConnectWithoutApiInput | UserApiInteractionCreateOrConnectWithoutApiInput[]
    createMany?: UserApiInteractionCreateManyApiInputEnvelope
    connect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
  }

  export type EndpointUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<EndpointCreateWithoutApiInput, EndpointUncheckedCreateWithoutApiInput> | EndpointCreateWithoutApiInput[] | EndpointUncheckedCreateWithoutApiInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutApiInput | EndpointCreateOrConnectWithoutApiInput[]
    createMany?: EndpointCreateManyApiInputEnvelope
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
  }

  export type UserApiInteractionUncheckedCreateNestedManyWithoutApiInput = {
    create?: XOR<UserApiInteractionCreateWithoutApiInput, UserApiInteractionUncheckedCreateWithoutApiInput> | UserApiInteractionCreateWithoutApiInput[] | UserApiInteractionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UserApiInteractionCreateOrConnectWithoutApiInput | UserApiInteractionCreateOrConnectWithoutApiInput[]
    createMany?: UserApiInteractionCreateManyApiInputEnvelope
    connect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
  }

  export type EnumPricingTypeFieldUpdateOperationsInput = {
    set?: $Enums.PricingType
  }

  export type EnumAuthTypeFieldUpdateOperationsInput = {
    set?: $Enums.AuthType
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableFloatFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ApiUpdatefeaturesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProviderUpdateOneRequiredWithoutApisNestedInput = {
    create?: XOR<ProviderCreateWithoutApisInput, ProviderUncheckedCreateWithoutApisInput>
    connectOrCreate?: ProviderCreateOrConnectWithoutApisInput
    upsert?: ProviderUpsertWithoutApisInput
    connect?: ProviderWhereUniqueInput
    update?: XOR<XOR<ProviderUpdateToOneWithWhereWithoutApisInput, ProviderUpdateWithoutApisInput>, ProviderUncheckedUpdateWithoutApisInput>
  }

  export type CategoryUpdateOneRequiredWithoutApisNestedInput = {
    create?: XOR<CategoryCreateWithoutApisInput, CategoryUncheckedCreateWithoutApisInput>
    connectOrCreate?: CategoryCreateOrConnectWithoutApisInput
    upsert?: CategoryUpsertWithoutApisInput
    connect?: CategoryWhereUniqueInput
    update?: XOR<XOR<CategoryUpdateToOneWithWhereWithoutApisInput, CategoryUpdateWithoutApisInput>, CategoryUncheckedUpdateWithoutApisInput>
  }

  export type EndpointUpdateManyWithoutApiNestedInput = {
    create?: XOR<EndpointCreateWithoutApiInput, EndpointUncheckedCreateWithoutApiInput> | EndpointCreateWithoutApiInput[] | EndpointUncheckedCreateWithoutApiInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutApiInput | EndpointCreateOrConnectWithoutApiInput[]
    upsert?: EndpointUpsertWithWhereUniqueWithoutApiInput | EndpointUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: EndpointCreateManyApiInputEnvelope
    set?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    disconnect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    delete?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    update?: EndpointUpdateWithWhereUniqueWithoutApiInput | EndpointUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: EndpointUpdateManyWithWhereWithoutApiInput | EndpointUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
  }

  export type UserApiInteractionUpdateManyWithoutApiNestedInput = {
    create?: XOR<UserApiInteractionCreateWithoutApiInput, UserApiInteractionUncheckedCreateWithoutApiInput> | UserApiInteractionCreateWithoutApiInput[] | UserApiInteractionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UserApiInteractionCreateOrConnectWithoutApiInput | UserApiInteractionCreateOrConnectWithoutApiInput[]
    upsert?: UserApiInteractionUpsertWithWhereUniqueWithoutApiInput | UserApiInteractionUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: UserApiInteractionCreateManyApiInputEnvelope
    set?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    disconnect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    delete?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    connect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    update?: UserApiInteractionUpdateWithWhereUniqueWithoutApiInput | UserApiInteractionUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: UserApiInteractionUpdateManyWithWhereWithoutApiInput | UserApiInteractionUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: UserApiInteractionScalarWhereInput | UserApiInteractionScalarWhereInput[]
  }

  export type EndpointUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<EndpointCreateWithoutApiInput, EndpointUncheckedCreateWithoutApiInput> | EndpointCreateWithoutApiInput[] | EndpointUncheckedCreateWithoutApiInput[]
    connectOrCreate?: EndpointCreateOrConnectWithoutApiInput | EndpointCreateOrConnectWithoutApiInput[]
    upsert?: EndpointUpsertWithWhereUniqueWithoutApiInput | EndpointUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: EndpointCreateManyApiInputEnvelope
    set?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    disconnect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    delete?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    connect?: EndpointWhereUniqueInput | EndpointWhereUniqueInput[]
    update?: EndpointUpdateWithWhereUniqueWithoutApiInput | EndpointUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: EndpointUpdateManyWithWhereWithoutApiInput | EndpointUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
  }

  export type UserApiInteractionUncheckedUpdateManyWithoutApiNestedInput = {
    create?: XOR<UserApiInteractionCreateWithoutApiInput, UserApiInteractionUncheckedCreateWithoutApiInput> | UserApiInteractionCreateWithoutApiInput[] | UserApiInteractionUncheckedCreateWithoutApiInput[]
    connectOrCreate?: UserApiInteractionCreateOrConnectWithoutApiInput | UserApiInteractionCreateOrConnectWithoutApiInput[]
    upsert?: UserApiInteractionUpsertWithWhereUniqueWithoutApiInput | UserApiInteractionUpsertWithWhereUniqueWithoutApiInput[]
    createMany?: UserApiInteractionCreateManyApiInputEnvelope
    set?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    disconnect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    delete?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    connect?: UserApiInteractionWhereUniqueInput | UserApiInteractionWhereUniqueInput[]
    update?: UserApiInteractionUpdateWithWhereUniqueWithoutApiInput | UserApiInteractionUpdateWithWhereUniqueWithoutApiInput[]
    updateMany?: UserApiInteractionUpdateManyWithWhereWithoutApiInput | UserApiInteractionUpdateManyWithWhereWithoutApiInput[]
    deleteMany?: UserApiInteractionScalarWhereInput | UserApiInteractionScalarWhereInput[]
  }

  export type ApiCreateNestedOneWithoutEndpointsInput = {
    create?: XOR<ApiCreateWithoutEndpointsInput, ApiUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: ApiCreateOrConnectWithoutEndpointsInput
    connect?: ApiWhereUniqueInput
  }

  export type ApiUpdateOneRequiredWithoutEndpointsNestedInput = {
    create?: XOR<ApiCreateWithoutEndpointsInput, ApiUncheckedCreateWithoutEndpointsInput>
    connectOrCreate?: ApiCreateOrConnectWithoutEndpointsInput
    upsert?: ApiUpsertWithoutEndpointsInput
    connect?: ApiWhereUniqueInput
    update?: XOR<XOR<ApiUpdateToOneWithWhereWithoutEndpointsInput, ApiUpdateWithoutEndpointsInput>, ApiUncheckedUpdateWithoutEndpointsInput>
  }

  export type UserCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    connect?: UserWhereUniqueInput
  }

  export type ApiCreateNestedOneWithoutInteractionsInput = {
    create?: XOR<ApiCreateWithoutInteractionsInput, ApiUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: ApiCreateOrConnectWithoutInteractionsInput
    connect?: ApiWhereUniqueInput
  }

  export type EnumInteractionTypeFieldUpdateOperationsInput = {
    set?: $Enums.InteractionType
  }

  export type UserUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutInteractionsInput
    upsert?: UserUpsertWithoutInteractionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutInteractionsInput, UserUpdateWithoutInteractionsInput>, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type ApiUpdateOneRequiredWithoutInteractionsNestedInput = {
    create?: XOR<ApiCreateWithoutInteractionsInput, ApiUncheckedCreateWithoutInteractionsInput>
    connectOrCreate?: ApiCreateOrConnectWithoutInteractionsInput
    upsert?: ApiUpsertWithoutInteractionsInput
    connect?: ApiWhereUniqueInput
    update?: XOR<XOR<ApiUpdateToOneWithWhereWithoutInteractionsInput, ApiUpdateWithoutInteractionsInput>, ApiUncheckedUpdateWithoutInteractionsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
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
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPricingTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingType | EnumPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingTypeFilter<$PrismaModel> | $Enums.PricingType
  }

  export type NestedEnumAuthTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeFilter<$PrismaModel> | $Enums.AuthType
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
  }

  export type NestedEnumPricingTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.PricingType | EnumPricingTypeFieldRefInput<$PrismaModel>
    in?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.PricingType[] | ListEnumPricingTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumPricingTypeWithAggregatesFilter<$PrismaModel> | $Enums.PricingType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumPricingTypeFilter<$PrismaModel>
    _max?: NestedEnumPricingTypeFilter<$PrismaModel>
  }

  export type NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AuthType | EnumAuthTypeFieldRefInput<$PrismaModel>
    in?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.AuthType[] | ListEnumAuthTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumAuthTypeWithAggregatesFilter<$PrismaModel> | $Enums.AuthType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAuthTypeFilter<$PrismaModel>
    _max?: NestedEnumAuthTypeFilter<$PrismaModel>
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedFloatNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedFloatNullableFilter<$PrismaModel>
    _min?: NestedFloatNullableFilter<$PrismaModel>
    _max?: NestedFloatNullableFilter<$PrismaModel>
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
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
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedEnumInteractionTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeFilter<$PrismaModel> | $Enums.InteractionType
  }

  export type NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.InteractionType | EnumInteractionTypeFieldRefInput<$PrismaModel>
    in?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.InteractionType[] | ListEnumInteractionTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumInteractionTypeWithAggregatesFilter<$PrismaModel> | $Enums.InteractionType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumInteractionTypeFilter<$PrismaModel>
    _max?: NestedEnumInteractionTypeFilter<$PrismaModel>
  }

  export type UserApiInteractionCreateWithoutUserInput = {
    id?: string
    type: $Enums.InteractionType
    createdAt?: Date | string
    api: ApiCreateNestedOneWithoutInteractionsInput
  }

  export type UserApiInteractionUncheckedCreateWithoutUserInput = {
    id?: string
    type: $Enums.InteractionType
    createdAt?: Date | string
    apiId: string
  }

  export type UserApiInteractionCreateOrConnectWithoutUserInput = {
    where: UserApiInteractionWhereUniqueInput
    create: XOR<UserApiInteractionCreateWithoutUserInput, UserApiInteractionUncheckedCreateWithoutUserInput>
  }

  export type UserApiInteractionCreateManyUserInputEnvelope = {
    data: UserApiInteractionCreateManyUserInput | UserApiInteractionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserApiInteractionUpsertWithWhereUniqueWithoutUserInput = {
    where: UserApiInteractionWhereUniqueInput
    update: XOR<UserApiInteractionUpdateWithoutUserInput, UserApiInteractionUncheckedUpdateWithoutUserInput>
    create: XOR<UserApiInteractionCreateWithoutUserInput, UserApiInteractionUncheckedCreateWithoutUserInput>
  }

  export type UserApiInteractionUpdateWithWhereUniqueWithoutUserInput = {
    where: UserApiInteractionWhereUniqueInput
    data: XOR<UserApiInteractionUpdateWithoutUserInput, UserApiInteractionUncheckedUpdateWithoutUserInput>
  }

  export type UserApiInteractionUpdateManyWithWhereWithoutUserInput = {
    where: UserApiInteractionScalarWhereInput
    data: XOR<UserApiInteractionUpdateManyMutationInput, UserApiInteractionUncheckedUpdateManyWithoutUserInput>
  }

  export type UserApiInteractionScalarWhereInput = {
    AND?: UserApiInteractionScalarWhereInput | UserApiInteractionScalarWhereInput[]
    OR?: UserApiInteractionScalarWhereInput[]
    NOT?: UserApiInteractionScalarWhereInput | UserApiInteractionScalarWhereInput[]
    id?: StringFilter<"UserApiInteraction"> | string
    type?: EnumInteractionTypeFilter<"UserApiInteraction"> | $Enums.InteractionType
    createdAt?: DateTimeFilter<"UserApiInteraction"> | Date | string
    userId?: StringFilter<"UserApiInteraction"> | string
    apiId?: StringFilter<"UserApiInteraction"> | string
  }

  export type ApiCreateWithoutProviderInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    category: CategoryCreateNestedOneWithoutApisInput
    endpoints?: EndpointCreateNestedManyWithoutApiInput
    interactions?: UserApiInteractionCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutProviderInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutApiInput
    interactions?: UserApiInteractionUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutProviderInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput>
  }

  export type ApiCreateManyProviderInputEnvelope = {
    data: ApiCreateManyProviderInput | ApiCreateManyProviderInput[]
    skipDuplicates?: boolean
  }

  export type ApiUpsertWithWhereUniqueWithoutProviderInput = {
    where: ApiWhereUniqueInput
    update: XOR<ApiUpdateWithoutProviderInput, ApiUncheckedUpdateWithoutProviderInput>
    create: XOR<ApiCreateWithoutProviderInput, ApiUncheckedCreateWithoutProviderInput>
  }

  export type ApiUpdateWithWhereUniqueWithoutProviderInput = {
    where: ApiWhereUniqueInput
    data: XOR<ApiUpdateWithoutProviderInput, ApiUncheckedUpdateWithoutProviderInput>
  }

  export type ApiUpdateManyWithWhereWithoutProviderInput = {
    where: ApiScalarWhereInput
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyWithoutProviderInput>
  }

  export type ApiScalarWhereInput = {
    AND?: ApiScalarWhereInput | ApiScalarWhereInput[]
    OR?: ApiScalarWhereInput[]
    NOT?: ApiScalarWhereInput | ApiScalarWhereInput[]
    id?: StringFilter<"Api"> | string
    name?: StringFilter<"Api"> | string
    slug?: StringFilter<"Api"> | string
    description?: StringFilter<"Api"> | string
    baseUrl?: StringFilter<"Api"> | string
    docsUrl?: StringFilter<"Api"> | string
    pricingType?: EnumPricingTypeFilter<"Api"> | $Enums.PricingType
    pricingDetails?: StringNullableFilter<"Api"> | string | null
    authType?: EnumAuthTypeFilter<"Api"> | $Enums.AuthType
    rateLimit?: StringNullableFilter<"Api"> | string | null
    hasFreeTier?: BoolFilter<"Api"> | boolean
    reliabilityScore?: FloatNullableFilter<"Api"> | number | null
    popularityScore?: IntFilter<"Api"> | number
    features?: StringNullableListFilter<"Api">
    source?: StringNullableFilter<"Api"> | string | null
    isActive?: BoolFilter<"Api"> | boolean
    createdAt?: DateTimeFilter<"Api"> | Date | string
    updatedAt?: DateTimeFilter<"Api"> | Date | string
    providerId?: StringFilter<"Api"> | string
    categoryId?: StringFilter<"Api"> | string
  }

  export type ApiCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutApisInput
    endpoints?: EndpointCreateNestedManyWithoutApiInput
    interactions?: UserApiInteractionCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutApiInput
    interactions?: UserApiInteractionUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutCategoryInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutCategoryInput, ApiUncheckedCreateWithoutCategoryInput>
  }

  export type ApiCreateManyCategoryInputEnvelope = {
    data: ApiCreateManyCategoryInput | ApiCreateManyCategoryInput[]
    skipDuplicates?: boolean
  }

  export type ApiUpsertWithWhereUniqueWithoutCategoryInput = {
    where: ApiWhereUniqueInput
    update: XOR<ApiUpdateWithoutCategoryInput, ApiUncheckedUpdateWithoutCategoryInput>
    create: XOR<ApiCreateWithoutCategoryInput, ApiUncheckedCreateWithoutCategoryInput>
  }

  export type ApiUpdateWithWhereUniqueWithoutCategoryInput = {
    where: ApiWhereUniqueInput
    data: XOR<ApiUpdateWithoutCategoryInput, ApiUncheckedUpdateWithoutCategoryInput>
  }

  export type ApiUpdateManyWithWhereWithoutCategoryInput = {
    where: ApiScalarWhereInput
    data: XOR<ApiUpdateManyMutationInput, ApiUncheckedUpdateManyWithoutCategoryInput>
  }

  export type ProviderCreateWithoutApisInput = {
    id?: string
    name: string
    website: string
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderUncheckedCreateWithoutApisInput = {
    id?: string
    name: string
    website: string
    description?: string | null
    logoUrl?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProviderCreateOrConnectWithoutApisInput = {
    where: ProviderWhereUniqueInput
    create: XOR<ProviderCreateWithoutApisInput, ProviderUncheckedCreateWithoutApisInput>
  }

  export type CategoryCreateWithoutApisInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
  }

  export type CategoryUncheckedCreateWithoutApisInput = {
    id?: string
    name: string
    slug: string
    description?: string | null
    icon?: string | null
    createdAt?: Date | string
  }

  export type CategoryCreateOrConnectWithoutApisInput = {
    where: CategoryWhereUniqueInput
    create: XOR<CategoryCreateWithoutApisInput, CategoryUncheckedCreateWithoutApisInput>
  }

  export type EndpointCreateWithoutApiInput = {
    id?: string
    path: string
    method: string
    summary?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EndpointUncheckedCreateWithoutApiInput = {
    id?: string
    path: string
    method: string
    summary?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type EndpointCreateOrConnectWithoutApiInput = {
    where: EndpointWhereUniqueInput
    create: XOR<EndpointCreateWithoutApiInput, EndpointUncheckedCreateWithoutApiInput>
  }

  export type EndpointCreateManyApiInputEnvelope = {
    data: EndpointCreateManyApiInput | EndpointCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type UserApiInteractionCreateWithoutApiInput = {
    id?: string
    type: $Enums.InteractionType
    createdAt?: Date | string
    user: UserCreateNestedOneWithoutInteractionsInput
  }

  export type UserApiInteractionUncheckedCreateWithoutApiInput = {
    id?: string
    type: $Enums.InteractionType
    createdAt?: Date | string
    userId: string
  }

  export type UserApiInteractionCreateOrConnectWithoutApiInput = {
    where: UserApiInteractionWhereUniqueInput
    create: XOR<UserApiInteractionCreateWithoutApiInput, UserApiInteractionUncheckedCreateWithoutApiInput>
  }

  export type UserApiInteractionCreateManyApiInputEnvelope = {
    data: UserApiInteractionCreateManyApiInput | UserApiInteractionCreateManyApiInput[]
    skipDuplicates?: boolean
  }

  export type ProviderUpsertWithoutApisInput = {
    update: XOR<ProviderUpdateWithoutApisInput, ProviderUncheckedUpdateWithoutApisInput>
    create: XOR<ProviderCreateWithoutApisInput, ProviderUncheckedCreateWithoutApisInput>
    where?: ProviderWhereInput
  }

  export type ProviderUpdateToOneWithWhereWithoutApisInput = {
    where?: ProviderWhereInput
    data: XOR<ProviderUpdateWithoutApisInput, ProviderUncheckedUpdateWithoutApisInput>
  }

  export type ProviderUpdateWithoutApisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProviderUncheckedUpdateWithoutApisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    website?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    logoUrl?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUpsertWithoutApisInput = {
    update: XOR<CategoryUpdateWithoutApisInput, CategoryUncheckedUpdateWithoutApisInput>
    create: XOR<CategoryCreateWithoutApisInput, CategoryUncheckedCreateWithoutApisInput>
    where?: CategoryWhereInput
  }

  export type CategoryUpdateToOneWithWhereWithoutApisInput = {
    where?: CategoryWhereInput
    data: XOR<CategoryUpdateWithoutApisInput, CategoryUncheckedUpdateWithoutApisInput>
  }

  export type CategoryUpdateWithoutApisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type CategoryUncheckedUpdateWithoutApisInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    icon?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointUpsertWithWhereUniqueWithoutApiInput = {
    where: EndpointWhereUniqueInput
    update: XOR<EndpointUpdateWithoutApiInput, EndpointUncheckedUpdateWithoutApiInput>
    create: XOR<EndpointCreateWithoutApiInput, EndpointUncheckedCreateWithoutApiInput>
  }

  export type EndpointUpdateWithWhereUniqueWithoutApiInput = {
    where: EndpointWhereUniqueInput
    data: XOR<EndpointUpdateWithoutApiInput, EndpointUncheckedUpdateWithoutApiInput>
  }

  export type EndpointUpdateManyWithWhereWithoutApiInput = {
    where: EndpointScalarWhereInput
    data: XOR<EndpointUpdateManyMutationInput, EndpointUncheckedUpdateManyWithoutApiInput>
  }

  export type EndpointScalarWhereInput = {
    AND?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
    OR?: EndpointScalarWhereInput[]
    NOT?: EndpointScalarWhereInput | EndpointScalarWhereInput[]
    id?: StringFilter<"Endpoint"> | string
    path?: StringFilter<"Endpoint"> | string
    method?: StringFilter<"Endpoint"> | string
    summary?: StringNullableFilter<"Endpoint"> | string | null
    description?: StringNullableFilter<"Endpoint"> | string | null
    createdAt?: DateTimeFilter<"Endpoint"> | Date | string
    apiId?: StringFilter<"Endpoint"> | string
  }

  export type UserApiInteractionUpsertWithWhereUniqueWithoutApiInput = {
    where: UserApiInteractionWhereUniqueInput
    update: XOR<UserApiInteractionUpdateWithoutApiInput, UserApiInteractionUncheckedUpdateWithoutApiInput>
    create: XOR<UserApiInteractionCreateWithoutApiInput, UserApiInteractionUncheckedCreateWithoutApiInput>
  }

  export type UserApiInteractionUpdateWithWhereUniqueWithoutApiInput = {
    where: UserApiInteractionWhereUniqueInput
    data: XOR<UserApiInteractionUpdateWithoutApiInput, UserApiInteractionUncheckedUpdateWithoutApiInput>
  }

  export type UserApiInteractionUpdateManyWithWhereWithoutApiInput = {
    where: UserApiInteractionScalarWhereInput
    data: XOR<UserApiInteractionUpdateManyMutationInput, UserApiInteractionUncheckedUpdateManyWithoutApiInput>
  }

  export type ApiCreateWithoutEndpointsInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutApisInput
    category: CategoryCreateNestedOneWithoutApisInput
    interactions?: UserApiInteractionCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutEndpointsInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    categoryId: string
    interactions?: UserApiInteractionUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutEndpointsInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutEndpointsInput, ApiUncheckedCreateWithoutEndpointsInput>
  }

  export type ApiUpsertWithoutEndpointsInput = {
    update: XOR<ApiUpdateWithoutEndpointsInput, ApiUncheckedUpdateWithoutEndpointsInput>
    create: XOR<ApiCreateWithoutEndpointsInput, ApiUncheckedCreateWithoutEndpointsInput>
    where?: ApiWhereInput
  }

  export type ApiUpdateToOneWithWhereWithoutEndpointsInput = {
    where?: ApiWhereInput
    data: XOR<ApiUpdateWithoutEndpointsInput, ApiUncheckedUpdateWithoutEndpointsInput>
  }

  export type ApiUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutApisNestedInput
    category?: CategoryUpdateOneRequiredWithoutApisNestedInput
    interactions?: UserApiInteractionUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutEndpointsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    interactions?: UserApiInteractionUncheckedUpdateManyWithoutApiNestedInput
  }

  export type UserCreateWithoutInteractionsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserUncheckedCreateWithoutInteractionsInput = {
    id?: string
    name: string
    email: string
    password: string
    createdAt?: Date | string
  }

  export type UserCreateOrConnectWithoutInteractionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
  }

  export type ApiCreateWithoutInteractionsInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    provider: ProviderCreateNestedOneWithoutApisInput
    category: CategoryCreateNestedOneWithoutApisInput
    endpoints?: EndpointCreateNestedManyWithoutApiInput
  }

  export type ApiUncheckedCreateWithoutInteractionsInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
    categoryId: string
    endpoints?: EndpointUncheckedCreateNestedManyWithoutApiInput
  }

  export type ApiCreateOrConnectWithoutInteractionsInput = {
    where: ApiWhereUniqueInput
    create: XOR<ApiCreateWithoutInteractionsInput, ApiUncheckedCreateWithoutInteractionsInput>
  }

  export type UserUpsertWithoutInteractionsInput = {
    update: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
    create: XOR<UserCreateWithoutInteractionsInput, UserUncheckedCreateWithoutInteractionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutInteractionsInput, UserUncheckedUpdateWithoutInteractionsInput>
  }

  export type UserUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApiUpsertWithoutInteractionsInput = {
    update: XOR<ApiUpdateWithoutInteractionsInput, ApiUncheckedUpdateWithoutInteractionsInput>
    create: XOR<ApiCreateWithoutInteractionsInput, ApiUncheckedCreateWithoutInteractionsInput>
    where?: ApiWhereInput
  }

  export type ApiUpdateToOneWithWhereWithoutInteractionsInput = {
    where?: ApiWhereInput
    data: XOR<ApiUpdateWithoutInteractionsInput, ApiUncheckedUpdateWithoutInteractionsInput>
  }

  export type ApiUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutApisNestedInput
    category?: CategoryUpdateOneRequiredWithoutApisNestedInput
    endpoints?: EndpointUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutInteractionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    categoryId?: StringFieldUpdateOperationsInput | string
    endpoints?: EndpointUncheckedUpdateManyWithoutApiNestedInput
  }

  export type UserApiInteractionCreateManyUserInput = {
    id?: string
    type: $Enums.InteractionType
    createdAt?: Date | string
    apiId: string
  }

  export type UserApiInteractionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    api?: ApiUpdateOneRequiredWithoutInteractionsNestedInput
  }

  export type UserApiInteractionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiId?: StringFieldUpdateOperationsInput | string
  }

  export type UserApiInteractionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    apiId?: StringFieldUpdateOperationsInput | string
  }

  export type ApiCreateManyProviderInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    categoryId: string
  }

  export type ApiUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    category?: CategoryUpdateOneRequiredWithoutApisNestedInput
    endpoints?: EndpointUpdateManyWithoutApiNestedInput
    interactions?: UserApiInteractionUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
    endpoints?: EndpointUncheckedUpdateManyWithoutApiNestedInput
    interactions?: UserApiInteractionUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateManyWithoutProviderInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    categoryId?: StringFieldUpdateOperationsInput | string
  }

  export type ApiCreateManyCategoryInput = {
    id?: string
    name: string
    slug: string
    description: string
    baseUrl: string
    docsUrl: string
    pricingType: $Enums.PricingType
    pricingDetails?: string | null
    authType: $Enums.AuthType
    rateLimit?: string | null
    hasFreeTier?: boolean
    reliabilityScore?: number | null
    popularityScore?: number
    features?: ApiCreatefeaturesInput | string[]
    source?: string | null
    isActive?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    providerId: string
  }

  export type ApiUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    provider?: ProviderUpdateOneRequiredWithoutApisNestedInput
    endpoints?: EndpointUpdateManyWithoutApiNestedInput
    interactions?: UserApiInteractionUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
    endpoints?: EndpointUncheckedUpdateManyWithoutApiNestedInput
    interactions?: UserApiInteractionUncheckedUpdateManyWithoutApiNestedInput
  }

  export type ApiUncheckedUpdateManyWithoutCategoryInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    slug?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    baseUrl?: StringFieldUpdateOperationsInput | string
    docsUrl?: StringFieldUpdateOperationsInput | string
    pricingType?: EnumPricingTypeFieldUpdateOperationsInput | $Enums.PricingType
    pricingDetails?: NullableStringFieldUpdateOperationsInput | string | null
    authType?: EnumAuthTypeFieldUpdateOperationsInput | $Enums.AuthType
    rateLimit?: NullableStringFieldUpdateOperationsInput | string | null
    hasFreeTier?: BoolFieldUpdateOperationsInput | boolean
    reliabilityScore?: NullableFloatFieldUpdateOperationsInput | number | null
    popularityScore?: IntFieldUpdateOperationsInput | number
    features?: ApiUpdatefeaturesInput | string[]
    source?: NullableStringFieldUpdateOperationsInput | string | null
    isActive?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    providerId?: StringFieldUpdateOperationsInput | string
  }

  export type EndpointCreateManyApiInput = {
    id?: string
    path: string
    method: string
    summary?: string | null
    description?: string | null
    createdAt?: Date | string
  }

  export type UserApiInteractionCreateManyApiInput = {
    id?: string
    type: $Enums.InteractionType
    createdAt?: Date | string
    userId: string
  }

  export type EndpointUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EndpointUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    path?: StringFieldUpdateOperationsInput | string
    method?: StringFieldUpdateOperationsInput | string
    summary?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserApiInteractionUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutInteractionsNestedInput
  }

  export type UserApiInteractionUncheckedUpdateWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserApiInteractionUncheckedUpdateManyWithoutApiInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: EnumInteractionTypeFieldUpdateOperationsInput | $Enums.InteractionType
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
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