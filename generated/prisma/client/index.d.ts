
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
 * Model Address
 * 
 */
export type Address = $Result.DefaultSelection<Prisma.$AddressPayload>
/**
 * Model Telephone
 * 
 */
export type Telephone = $Result.DefaultSelection<Prisma.$TelephonePayload>
/**
 * Model Establishment
 * 
 */
export type Establishment = $Result.DefaultSelection<Prisma.$EstablishmentPayload>
/**
 * Model Servicess
 * 
 */
export type Servicess = $Result.DefaultSelection<Prisma.$ServicessPayload>
/**
 * Model Employee
 * 
 */
export type Employee = $Result.DefaultSelection<Prisma.$EmployeePayload>
/**
 * Model Client
 * 
 */
export type Client = $Result.DefaultSelection<Prisma.$ClientPayload>
/**
 * Model Scheduling
 * 
 */
export type Scheduling = $Result.DefaultSelection<Prisma.$SchedulingPayload>
/**
 * Model Reviews
 * 
 */
export type Reviews = $Result.DefaultSelection<Prisma.$ReviewsPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const Stats: {
  canceled: 'canceled',
  pending: 'pending',
  completed: 'completed'
};

export type Stats = (typeof Stats)[keyof typeof Stats]

}

export type Stats = $Enums.Stats

export const Stats: typeof $Enums.Stats

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Addresses
 * const addresses = await prisma.address.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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
   * // Fetch zero or more Addresses
   * const addresses = await prisma.address.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
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


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.address`: Exposes CRUD operations for the **Address** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Addresses
    * const addresses = await prisma.address.findMany()
    * ```
    */
  get address(): Prisma.AddressDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.telephone`: Exposes CRUD operations for the **Telephone** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Telephones
    * const telephones = await prisma.telephone.findMany()
    * ```
    */
  get telephone(): Prisma.TelephoneDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.establishment`: Exposes CRUD operations for the **Establishment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Establishments
    * const establishments = await prisma.establishment.findMany()
    * ```
    */
  get establishment(): Prisma.EstablishmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.servicess`: Exposes CRUD operations for the **Servicess** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Servicesses
    * const servicesses = await prisma.servicess.findMany()
    * ```
    */
  get servicess(): Prisma.ServicessDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.employee`: Exposes CRUD operations for the **Employee** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Employees
    * const employees = await prisma.employee.findMany()
    * ```
    */
  get employee(): Prisma.EmployeeDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.client`: Exposes CRUD operations for the **Client** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Clients
    * const clients = await prisma.client.findMany()
    * ```
    */
  get client(): Prisma.ClientDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.scheduling`: Exposes CRUD operations for the **Scheduling** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Schedulings
    * const schedulings = await prisma.scheduling.findMany()
    * ```
    */
  get scheduling(): Prisma.SchedulingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.reviews`: Exposes CRUD operations for the **Reviews** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.reviews.findMany()
    * ```
    */
  get reviews(): Prisma.ReviewsDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.19.2
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
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
    Address: 'Address',
    Telephone: 'Telephone',
    Establishment: 'Establishment',
    Servicess: 'Servicess',
    Employee: 'Employee',
    Client: 'Client',
    Scheduling: 'Scheduling',
    Reviews: 'Reviews',
    Notification: 'Notification'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "address" | "telephone" | "establishment" | "servicess" | "employee" | "client" | "scheduling" | "reviews" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Address: {
        payload: Prisma.$AddressPayload<ExtArgs>
        fields: Prisma.AddressFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AddressFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AddressFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findFirst: {
            args: Prisma.AddressFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AddressFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          findMany: {
            args: Prisma.AddressFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          create: {
            args: Prisma.AddressCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          createMany: {
            args: Prisma.AddressCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AddressCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          delete: {
            args: Prisma.AddressDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          update: {
            args: Prisma.AddressUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          deleteMany: {
            args: Prisma.AddressDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AddressUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AddressUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>[]
          }
          upsert: {
            args: Prisma.AddressUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AddressPayload>
          }
          aggregate: {
            args: Prisma.AddressAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAddress>
          }
          groupBy: {
            args: Prisma.AddressGroupByArgs<ExtArgs>
            result: $Utils.Optional<AddressGroupByOutputType>[]
          }
          count: {
            args: Prisma.AddressCountArgs<ExtArgs>
            result: $Utils.Optional<AddressCountAggregateOutputType> | number
          }
        }
      }
      Telephone: {
        payload: Prisma.$TelephonePayload<ExtArgs>
        fields: Prisma.TelephoneFieldRefs
        operations: {
          findUnique: {
            args: Prisma.TelephoneFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.TelephoneFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload>
          }
          findFirst: {
            args: Prisma.TelephoneFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.TelephoneFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload>
          }
          findMany: {
            args: Prisma.TelephoneFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload>[]
          }
          create: {
            args: Prisma.TelephoneCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload>
          }
          createMany: {
            args: Prisma.TelephoneCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.TelephoneCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload>[]
          }
          delete: {
            args: Prisma.TelephoneDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload>
          }
          update: {
            args: Prisma.TelephoneUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload>
          }
          deleteMany: {
            args: Prisma.TelephoneDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.TelephoneUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.TelephoneUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload>[]
          }
          upsert: {
            args: Prisma.TelephoneUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$TelephonePayload>
          }
          aggregate: {
            args: Prisma.TelephoneAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateTelephone>
          }
          groupBy: {
            args: Prisma.TelephoneGroupByArgs<ExtArgs>
            result: $Utils.Optional<TelephoneGroupByOutputType>[]
          }
          count: {
            args: Prisma.TelephoneCountArgs<ExtArgs>
            result: $Utils.Optional<TelephoneCountAggregateOutputType> | number
          }
        }
      }
      Establishment: {
        payload: Prisma.$EstablishmentPayload<ExtArgs>
        fields: Prisma.EstablishmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EstablishmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EstablishmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findFirst: {
            args: Prisma.EstablishmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EstablishmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          findMany: {
            args: Prisma.EstablishmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          create: {
            args: Prisma.EstablishmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          createMany: {
            args: Prisma.EstablishmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EstablishmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          delete: {
            args: Prisma.EstablishmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          update: {
            args: Prisma.EstablishmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          deleteMany: {
            args: Prisma.EstablishmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EstablishmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EstablishmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>[]
          }
          upsert: {
            args: Prisma.EstablishmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EstablishmentPayload>
          }
          aggregate: {
            args: Prisma.EstablishmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEstablishment>
          }
          groupBy: {
            args: Prisma.EstablishmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.EstablishmentCountArgs<ExtArgs>
            result: $Utils.Optional<EstablishmentCountAggregateOutputType> | number
          }
        }
      }
      Servicess: {
        payload: Prisma.$ServicessPayload<ExtArgs>
        fields: Prisma.ServicessFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ServicessFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ServicessFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload>
          }
          findFirst: {
            args: Prisma.ServicessFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ServicessFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload>
          }
          findMany: {
            args: Prisma.ServicessFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload>[]
          }
          create: {
            args: Prisma.ServicessCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload>
          }
          createMany: {
            args: Prisma.ServicessCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ServicessCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload>[]
          }
          delete: {
            args: Prisma.ServicessDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload>
          }
          update: {
            args: Prisma.ServicessUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload>
          }
          deleteMany: {
            args: Prisma.ServicessDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ServicessUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ServicessUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload>[]
          }
          upsert: {
            args: Prisma.ServicessUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ServicessPayload>
          }
          aggregate: {
            args: Prisma.ServicessAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateServicess>
          }
          groupBy: {
            args: Prisma.ServicessGroupByArgs<ExtArgs>
            result: $Utils.Optional<ServicessGroupByOutputType>[]
          }
          count: {
            args: Prisma.ServicessCountArgs<ExtArgs>
            result: $Utils.Optional<ServicessCountAggregateOutputType> | number
          }
        }
      }
      Employee: {
        payload: Prisma.$EmployeePayload<ExtArgs>
        fields: Prisma.EmployeeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.EmployeeFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.EmployeeFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findFirst: {
            args: Prisma.EmployeeFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.EmployeeFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          findMany: {
            args: Prisma.EmployeeFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          create: {
            args: Prisma.EmployeeCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          createMany: {
            args: Prisma.EmployeeCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.EmployeeCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          delete: {
            args: Prisma.EmployeeDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          update: {
            args: Prisma.EmployeeUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          deleteMany: {
            args: Prisma.EmployeeDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.EmployeeUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.EmployeeUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>[]
          }
          upsert: {
            args: Prisma.EmployeeUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$EmployeePayload>
          }
          aggregate: {
            args: Prisma.EmployeeAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateEmployee>
          }
          groupBy: {
            args: Prisma.EmployeeGroupByArgs<ExtArgs>
            result: $Utils.Optional<EmployeeGroupByOutputType>[]
          }
          count: {
            args: Prisma.EmployeeCountArgs<ExtArgs>
            result: $Utils.Optional<EmployeeCountAggregateOutputType> | number
          }
        }
      }
      Client: {
        payload: Prisma.$ClientPayload<ExtArgs>
        fields: Prisma.ClientFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ClientFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ClientFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findFirst: {
            args: Prisma.ClientFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ClientFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          findMany: {
            args: Prisma.ClientFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          create: {
            args: Prisma.ClientCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          createMany: {
            args: Prisma.ClientCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ClientCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          delete: {
            args: Prisma.ClientDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          update: {
            args: Prisma.ClientUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          deleteMany: {
            args: Prisma.ClientDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ClientUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ClientUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>[]
          }
          upsert: {
            args: Prisma.ClientUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ClientPayload>
          }
          aggregate: {
            args: Prisma.ClientAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateClient>
          }
          groupBy: {
            args: Prisma.ClientGroupByArgs<ExtArgs>
            result: $Utils.Optional<ClientGroupByOutputType>[]
          }
          count: {
            args: Prisma.ClientCountArgs<ExtArgs>
            result: $Utils.Optional<ClientCountAggregateOutputType> | number
          }
        }
      }
      Scheduling: {
        payload: Prisma.$SchedulingPayload<ExtArgs>
        fields: Prisma.SchedulingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SchedulingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SchedulingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          findFirst: {
            args: Prisma.SchedulingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SchedulingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          findMany: {
            args: Prisma.SchedulingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          create: {
            args: Prisma.SchedulingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          createMany: {
            args: Prisma.SchedulingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SchedulingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          delete: {
            args: Prisma.SchedulingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          update: {
            args: Prisma.SchedulingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          deleteMany: {
            args: Prisma.SchedulingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SchedulingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SchedulingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>[]
          }
          upsert: {
            args: Prisma.SchedulingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SchedulingPayload>
          }
          aggregate: {
            args: Prisma.SchedulingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateScheduling>
          }
          groupBy: {
            args: Prisma.SchedulingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SchedulingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SchedulingCountArgs<ExtArgs>
            result: $Utils.Optional<SchedulingCountAggregateOutputType> | number
          }
        }
      }
      Reviews: {
        payload: Prisma.$ReviewsPayload<ExtArgs>
        fields: Prisma.ReviewsFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewsFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewsFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findFirst: {
            args: Prisma.ReviewsFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewsFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          findMany: {
            args: Prisma.ReviewsFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          create: {
            args: Prisma.ReviewsCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          createMany: {
            args: Prisma.ReviewsCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewsCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          delete: {
            args: Prisma.ReviewsDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          update: {
            args: Prisma.ReviewsUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          deleteMany: {
            args: Prisma.ReviewsDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewsUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewsUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>[]
          }
          upsert: {
            args: Prisma.ReviewsUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewsPayload>
          }
          aggregate: {
            args: Prisma.ReviewsAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReviews>
          }
          groupBy: {
            args: Prisma.ReviewsGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewsGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewsCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewsCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
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
  }
  export type GlobalOmitConfig = {
    address?: AddressOmit
    telephone?: TelephoneOmit
    establishment?: EstablishmentOmit
    servicess?: ServicessOmit
    employee?: EmployeeOmit
    client?: ClientOmit
    scheduling?: SchedulingOmit
    reviews?: ReviewsOmit
    notification?: NotificationOmit
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
   * Count Type EstablishmentCountOutputType
   */

  export type EstablishmentCountOutputType = {
    employees: number
    schedulings: number
  }

  export type EstablishmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employees?: boolean | EstablishmentCountOutputTypeCountEmployeesArgs
    schedulings?: boolean | EstablishmentCountOutputTypeCountSchedulingsArgs
  }

  // Custom InputTypes
  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EstablishmentCountOutputType
     */
    select?: EstablishmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeCountEmployeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
  }

  /**
   * EstablishmentCountOutputType without action
   */
  export type EstablishmentCountOutputTypeCountSchedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }


  /**
   * Count Type ServicessCountOutputType
   */

  export type ServicessCountOutputType = {
    schedulings: number
  }

  export type ServicessCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedulings?: boolean | ServicessCountOutputTypeCountSchedulingsArgs
  }

  // Custom InputTypes
  /**
   * ServicessCountOutputType without action
   */
  export type ServicessCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ServicessCountOutputType
     */
    select?: ServicessCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ServicessCountOutputType without action
   */
  export type ServicessCountOutputTypeCountSchedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }


  /**
   * Count Type EmployeeCountOutputType
   */

  export type EmployeeCountOutputType = {
    reviews: number
    schedulings: number
  }

  export type EmployeeCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    reviews?: boolean | EmployeeCountOutputTypeCountReviewsArgs
    schedulings?: boolean | EmployeeCountOutputTypeCountSchedulingsArgs
  }

  // Custom InputTypes
  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the EmployeeCountOutputType
     */
    select?: EmployeeCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
  }

  /**
   * EmployeeCountOutputType without action
   */
  export type EmployeeCountOutputTypeCountSchedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }


  /**
   * Count Type ClientCountOutputType
   */

  export type ClientCountOutputType = {
    schedulings: number
  }

  export type ClientCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedulings?: boolean | ClientCountOutputTypeCountSchedulingsArgs
  }

  // Custom InputTypes
  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ClientCountOutputType
     */
    select?: ClientCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ClientCountOutputType without action
   */
  export type ClientCountOutputTypeCountSchedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Address
   */

  export type AggregateAddress = {
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  export type AddressAvgAggregateOutputType = {
    id: number | null
  }

  export type AddressSumAggregateOutputType = {
    id: number | null
  }

  export type AddressMinAggregateOutputType = {
    id: number | null
    country: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    public_place: string | null
  }

  export type AddressMaxAggregateOutputType = {
    id: number | null
    country: string | null
    state: string | null
    city: string | null
    neighborhood: string | null
    public_place: string | null
  }

  export type AddressCountAggregateOutputType = {
    id: number
    country: number
    state: number
    city: number
    neighborhood: number
    public_place: number
    _all: number
  }


  export type AddressAvgAggregateInputType = {
    id?: true
  }

  export type AddressSumAggregateInputType = {
    id?: true
  }

  export type AddressMinAggregateInputType = {
    id?: true
    country?: true
    state?: true
    city?: true
    neighborhood?: true
    public_place?: true
  }

  export type AddressMaxAggregateInputType = {
    id?: true
    country?: true
    state?: true
    city?: true
    neighborhood?: true
    public_place?: true
  }

  export type AddressCountAggregateInputType = {
    id?: true
    country?: true
    state?: true
    city?: true
    neighborhood?: true
    public_place?: true
    _all?: true
  }

  export type AddressAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Address to aggregate.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Addresses
    **/
    _count?: true | AddressCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AddressAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AddressSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AddressMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AddressMaxAggregateInputType
  }

  export type GetAddressAggregateType<T extends AddressAggregateArgs> = {
        [P in keyof T & keyof AggregateAddress]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAddress[P]>
      : GetScalarType<T[P], AggregateAddress[P]>
  }




  export type AddressGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AddressWhereInput
    orderBy?: AddressOrderByWithAggregationInput | AddressOrderByWithAggregationInput[]
    by: AddressScalarFieldEnum[] | AddressScalarFieldEnum
    having?: AddressScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AddressCountAggregateInputType | true
    _avg?: AddressAvgAggregateInputType
    _sum?: AddressSumAggregateInputType
    _min?: AddressMinAggregateInputType
    _max?: AddressMaxAggregateInputType
  }

  export type AddressGroupByOutputType = {
    id: number
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
    _count: AddressCountAggregateOutputType | null
    _avg: AddressAvgAggregateOutputType | null
    _sum: AddressSumAggregateOutputType | null
    _min: AddressMinAggregateOutputType | null
    _max: AddressMaxAggregateOutputType | null
  }

  type GetAddressGroupByPayload<T extends AddressGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AddressGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AddressGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AddressGroupByOutputType[P]>
            : GetScalarType<T[P], AddressGroupByOutputType[P]>
        }
      >
    >


  export type AddressSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    public_place?: boolean
    establishment?: boolean | Address$establishmentArgs<ExtArgs>
    employee?: boolean | Address$employeeArgs<ExtArgs>
    client?: boolean | Address$clientArgs<ExtArgs>
  }, ExtArgs["result"]["address"]>

  export type AddressSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    public_place?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    public_place?: boolean
  }, ExtArgs["result"]["address"]>

  export type AddressSelectScalar = {
    id?: boolean
    country?: boolean
    state?: boolean
    city?: boolean
    neighborhood?: boolean
    public_place?: boolean
  }

  export type AddressOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "country" | "state" | "city" | "neighborhood" | "public_place", ExtArgs["result"]["address"]>
  export type AddressInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | Address$establishmentArgs<ExtArgs>
    employee?: boolean | Address$employeeArgs<ExtArgs>
    client?: boolean | Address$clientArgs<ExtArgs>
  }
  export type AddressIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type AddressIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $AddressPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Address"
    objects: {
      establishment: Prisma.$EstablishmentPayload<ExtArgs> | null
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      country: string
      state: string
      city: string
      neighborhood: string
      public_place: string
    }, ExtArgs["result"]["address"]>
    composites: {}
  }

  type AddressGetPayload<S extends boolean | null | undefined | AddressDefaultArgs> = $Result.GetResult<Prisma.$AddressPayload, S>

  type AddressCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AddressFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AddressCountAggregateInputType | true
    }

  export interface AddressDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Address'], meta: { name: 'Address' } }
    /**
     * Find zero or one Address that matches the filter.
     * @param {AddressFindUniqueArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AddressFindUniqueArgs>(args: SelectSubset<T, AddressFindUniqueArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Address that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AddressFindUniqueOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AddressFindUniqueOrThrowArgs>(args: SelectSubset<T, AddressFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AddressFindFirstArgs>(args?: SelectSubset<T, AddressFindFirstArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Address that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindFirstOrThrowArgs} args - Arguments to find a Address
     * @example
     * // Get one Address
     * const address = await prisma.address.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AddressFindFirstOrThrowArgs>(args?: SelectSubset<T, AddressFindFirstOrThrowArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Addresses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Addresses
     * const addresses = await prisma.address.findMany()
     * 
     * // Get first 10 Addresses
     * const addresses = await prisma.address.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const addressWithIdOnly = await prisma.address.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AddressFindManyArgs>(args?: SelectSubset<T, AddressFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Address.
     * @param {AddressCreateArgs} args - Arguments to create a Address.
     * @example
     * // Create one Address
     * const Address = await prisma.address.create({
     *   data: {
     *     // ... data to create a Address
     *   }
     * })
     * 
     */
    create<T extends AddressCreateArgs>(args: SelectSubset<T, AddressCreateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Addresses.
     * @param {AddressCreateManyArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AddressCreateManyArgs>(args?: SelectSubset<T, AddressCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Addresses and returns the data saved in the database.
     * @param {AddressCreateManyAndReturnArgs} args - Arguments to create many Addresses.
     * @example
     * // Create many Addresses
     * const address = await prisma.address.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AddressCreateManyAndReturnArgs>(args?: SelectSubset<T, AddressCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Address.
     * @param {AddressDeleteArgs} args - Arguments to delete one Address.
     * @example
     * // Delete one Address
     * const Address = await prisma.address.delete({
     *   where: {
     *     // ... filter to delete one Address
     *   }
     * })
     * 
     */
    delete<T extends AddressDeleteArgs>(args: SelectSubset<T, AddressDeleteArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Address.
     * @param {AddressUpdateArgs} args - Arguments to update one Address.
     * @example
     * // Update one Address
     * const address = await prisma.address.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AddressUpdateArgs>(args: SelectSubset<T, AddressUpdateArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Addresses.
     * @param {AddressDeleteManyArgs} args - Arguments to filter Addresses to delete.
     * @example
     * // Delete a few Addresses
     * const { count } = await prisma.address.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AddressDeleteManyArgs>(args?: SelectSubset<T, AddressDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AddressUpdateManyArgs>(args: SelectSubset<T, AddressUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Addresses and returns the data updated in the database.
     * @param {AddressUpdateManyAndReturnArgs} args - Arguments to update many Addresses.
     * @example
     * // Update many Addresses
     * const address = await prisma.address.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Addresses and only return the `id`
     * const addressWithIdOnly = await prisma.address.updateManyAndReturn({
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
    updateManyAndReturn<T extends AddressUpdateManyAndReturnArgs>(args: SelectSubset<T, AddressUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Address.
     * @param {AddressUpsertArgs} args - Arguments to update or create a Address.
     * @example
     * // Update or create a Address
     * const address = await prisma.address.upsert({
     *   create: {
     *     // ... data to create a Address
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Address we want to update
     *   }
     * })
     */
    upsert<T extends AddressUpsertArgs>(args: SelectSubset<T, AddressUpsertArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Addresses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressCountArgs} args - Arguments to filter Addresses to count.
     * @example
     * // Count the number of Addresses
     * const count = await prisma.address.count({
     *   where: {
     *     // ... the filter for the Addresses we want to count
     *   }
     * })
    **/
    count<T extends AddressCountArgs>(
      args?: Subset<T, AddressCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AddressCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AddressAggregateArgs>(args: Subset<T, AddressAggregateArgs>): Prisma.PrismaPromise<GetAddressAggregateType<T>>

    /**
     * Group by Address.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AddressGroupByArgs} args - Group by arguments.
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
      T extends AddressGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AddressGroupByArgs['orderBy'] }
        : { orderBy?: AddressGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AddressGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAddressGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Address model
   */
  readonly fields: AddressFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Address.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AddressClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    establishment<T extends Address$establishmentArgs<ExtArgs> = {}>(args?: Subset<T, Address$establishmentArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employee<T extends Address$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Address$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends Address$clientArgs<ExtArgs> = {}>(args?: Subset<T, Address$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Address model
   */
  interface AddressFieldRefs {
    readonly id: FieldRef<"Address", 'Int'>
    readonly country: FieldRef<"Address", 'String'>
    readonly state: FieldRef<"Address", 'String'>
    readonly city: FieldRef<"Address", 'String'>
    readonly neighborhood: FieldRef<"Address", 'String'>
    readonly public_place: FieldRef<"Address", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Address findUnique
   */
  export type AddressFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findUniqueOrThrow
   */
  export type AddressFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address findFirst
   */
  export type AddressFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findFirstOrThrow
   */
  export type AddressFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Address to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Addresses.
     */
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address findMany
   */
  export type AddressFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter, which Addresses to fetch.
     */
    where?: AddressWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Addresses to fetch.
     */
    orderBy?: AddressOrderByWithRelationInput | AddressOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Addresses.
     */
    cursor?: AddressWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Addresses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Addresses.
     */
    skip?: number
    distinct?: AddressScalarFieldEnum | AddressScalarFieldEnum[]
  }

  /**
   * Address create
   */
  export type AddressCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to create a Address.
     */
    data: XOR<AddressCreateInput, AddressUncheckedCreateInput>
  }

  /**
   * Address createMany
   */
  export type AddressCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address createManyAndReturn
   */
  export type AddressCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to create many Addresses.
     */
    data: AddressCreateManyInput | AddressCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Address update
   */
  export type AddressUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The data needed to update a Address.
     */
    data: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
    /**
     * Choose, which Address to update.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address updateMany
   */
  export type AddressUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address updateManyAndReturn
   */
  export type AddressUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * The data used to update Addresses.
     */
    data: XOR<AddressUpdateManyMutationInput, AddressUncheckedUpdateManyInput>
    /**
     * Filter which Addresses to update
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to update.
     */
    limit?: number
  }

  /**
   * Address upsert
   */
  export type AddressUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * The filter to search for the Address to update in case it exists.
     */
    where: AddressWhereUniqueInput
    /**
     * In case the Address found by the `where` argument doesn't exist, create a new Address with this data.
     */
    create: XOR<AddressCreateInput, AddressUncheckedCreateInput>
    /**
     * In case the Address was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AddressUpdateInput, AddressUncheckedUpdateInput>
  }

  /**
   * Address delete
   */
  export type AddressDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
    /**
     * Filter which Address to delete.
     */
    where: AddressWhereUniqueInput
  }

  /**
   * Address deleteMany
   */
  export type AddressDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Addresses to delete
     */
    where?: AddressWhereInput
    /**
     * Limit how many Addresses to delete.
     */
    limit?: number
  }

  /**
   * Address.establishment
   */
  export type Address$establishmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    where?: EstablishmentWhereInput
  }

  /**
   * Address.employee
   */
  export type Address$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Address.client
   */
  export type Address$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Address without action
   */
  export type AddressDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Address
     */
    select?: AddressSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Address
     */
    omit?: AddressOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AddressInclude<ExtArgs> | null
  }


  /**
   * Model Telephone
   */

  export type AggregateTelephone = {
    _count: TelephoneCountAggregateOutputType | null
    _avg: TelephoneAvgAggregateOutputType | null
    _sum: TelephoneSumAggregateOutputType | null
    _min: TelephoneMinAggregateOutputType | null
    _max: TelephoneMaxAggregateOutputType | null
  }

  export type TelephoneAvgAggregateOutputType = {
    id: number | null
  }

  export type TelephoneSumAggregateOutputType = {
    id: number | null
  }

  export type TelephoneMinAggregateOutputType = {
    id: number | null
    number: string | null
  }

  export type TelephoneMaxAggregateOutputType = {
    id: number | null
    number: string | null
  }

  export type TelephoneCountAggregateOutputType = {
    id: number
    number: number
    _all: number
  }


  export type TelephoneAvgAggregateInputType = {
    id?: true
  }

  export type TelephoneSumAggregateInputType = {
    id?: true
  }

  export type TelephoneMinAggregateInputType = {
    id?: true
    number?: true
  }

  export type TelephoneMaxAggregateInputType = {
    id?: true
    number?: true
  }

  export type TelephoneCountAggregateInputType = {
    id?: true
    number?: true
    _all?: true
  }

  export type TelephoneAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telephone to aggregate.
     */
    where?: TelephoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telephones to fetch.
     */
    orderBy?: TelephoneOrderByWithRelationInput | TelephoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: TelephoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telephones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telephones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Telephones
    **/
    _count?: true | TelephoneCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: TelephoneAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: TelephoneSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: TelephoneMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: TelephoneMaxAggregateInputType
  }

  export type GetTelephoneAggregateType<T extends TelephoneAggregateArgs> = {
        [P in keyof T & keyof AggregateTelephone]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateTelephone[P]>
      : GetScalarType<T[P], AggregateTelephone[P]>
  }




  export type TelephoneGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: TelephoneWhereInput
    orderBy?: TelephoneOrderByWithAggregationInput | TelephoneOrderByWithAggregationInput[]
    by: TelephoneScalarFieldEnum[] | TelephoneScalarFieldEnum
    having?: TelephoneScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: TelephoneCountAggregateInputType | true
    _avg?: TelephoneAvgAggregateInputType
    _sum?: TelephoneSumAggregateInputType
    _min?: TelephoneMinAggregateInputType
    _max?: TelephoneMaxAggregateInputType
  }

  export type TelephoneGroupByOutputType = {
    id: number
    number: string
    _count: TelephoneCountAggregateOutputType | null
    _avg: TelephoneAvgAggregateOutputType | null
    _sum: TelephoneSumAggregateOutputType | null
    _min: TelephoneMinAggregateOutputType | null
    _max: TelephoneMaxAggregateOutputType | null
  }

  type GetTelephoneGroupByPayload<T extends TelephoneGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<TelephoneGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof TelephoneGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], TelephoneGroupByOutputType[P]>
            : GetScalarType<T[P], TelephoneGroupByOutputType[P]>
        }
      >
    >


  export type TelephoneSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
    establishment?: boolean | Telephone$establishmentArgs<ExtArgs>
    employee?: boolean | Telephone$employeeArgs<ExtArgs>
    client?: boolean | Telephone$clientArgs<ExtArgs>
  }, ExtArgs["result"]["telephone"]>

  export type TelephoneSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
  }, ExtArgs["result"]["telephone"]>

  export type TelephoneSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    number?: boolean
  }, ExtArgs["result"]["telephone"]>

  export type TelephoneSelectScalar = {
    id?: boolean
    number?: boolean
  }

  export type TelephoneOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "number", ExtArgs["result"]["telephone"]>
  export type TelephoneInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    establishment?: boolean | Telephone$establishmentArgs<ExtArgs>
    employee?: boolean | Telephone$employeeArgs<ExtArgs>
    client?: boolean | Telephone$clientArgs<ExtArgs>
  }
  export type TelephoneIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type TelephoneIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $TelephonePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Telephone"
    objects: {
      establishment: Prisma.$EstablishmentPayload<ExtArgs> | null
      employee: Prisma.$EmployeePayload<ExtArgs> | null
      client: Prisma.$ClientPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      number: string
    }, ExtArgs["result"]["telephone"]>
    composites: {}
  }

  type TelephoneGetPayload<S extends boolean | null | undefined | TelephoneDefaultArgs> = $Result.GetResult<Prisma.$TelephonePayload, S>

  type TelephoneCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<TelephoneFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: TelephoneCountAggregateInputType | true
    }

  export interface TelephoneDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Telephone'], meta: { name: 'Telephone' } }
    /**
     * Find zero or one Telephone that matches the filter.
     * @param {TelephoneFindUniqueArgs} args - Arguments to find a Telephone
     * @example
     * // Get one Telephone
     * const telephone = await prisma.telephone.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends TelephoneFindUniqueArgs>(args: SelectSubset<T, TelephoneFindUniqueArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Telephone that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {TelephoneFindUniqueOrThrowArgs} args - Arguments to find a Telephone
     * @example
     * // Get one Telephone
     * const telephone = await prisma.telephone.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends TelephoneFindUniqueOrThrowArgs>(args: SelectSubset<T, TelephoneFindUniqueOrThrowArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telephone that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneFindFirstArgs} args - Arguments to find a Telephone
     * @example
     * // Get one Telephone
     * const telephone = await prisma.telephone.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends TelephoneFindFirstArgs>(args?: SelectSubset<T, TelephoneFindFirstArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Telephone that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneFindFirstOrThrowArgs} args - Arguments to find a Telephone
     * @example
     * // Get one Telephone
     * const telephone = await prisma.telephone.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends TelephoneFindFirstOrThrowArgs>(args?: SelectSubset<T, TelephoneFindFirstOrThrowArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Telephones that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Telephones
     * const telephones = await prisma.telephone.findMany()
     * 
     * // Get first 10 Telephones
     * const telephones = await prisma.telephone.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const telephoneWithIdOnly = await prisma.telephone.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends TelephoneFindManyArgs>(args?: SelectSubset<T, TelephoneFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Telephone.
     * @param {TelephoneCreateArgs} args - Arguments to create a Telephone.
     * @example
     * // Create one Telephone
     * const Telephone = await prisma.telephone.create({
     *   data: {
     *     // ... data to create a Telephone
     *   }
     * })
     * 
     */
    create<T extends TelephoneCreateArgs>(args: SelectSubset<T, TelephoneCreateArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Telephones.
     * @param {TelephoneCreateManyArgs} args - Arguments to create many Telephones.
     * @example
     * // Create many Telephones
     * const telephone = await prisma.telephone.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends TelephoneCreateManyArgs>(args?: SelectSubset<T, TelephoneCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Telephones and returns the data saved in the database.
     * @param {TelephoneCreateManyAndReturnArgs} args - Arguments to create many Telephones.
     * @example
     * // Create many Telephones
     * const telephone = await prisma.telephone.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Telephones and only return the `id`
     * const telephoneWithIdOnly = await prisma.telephone.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends TelephoneCreateManyAndReturnArgs>(args?: SelectSubset<T, TelephoneCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Telephone.
     * @param {TelephoneDeleteArgs} args - Arguments to delete one Telephone.
     * @example
     * // Delete one Telephone
     * const Telephone = await prisma.telephone.delete({
     *   where: {
     *     // ... filter to delete one Telephone
     *   }
     * })
     * 
     */
    delete<T extends TelephoneDeleteArgs>(args: SelectSubset<T, TelephoneDeleteArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Telephone.
     * @param {TelephoneUpdateArgs} args - Arguments to update one Telephone.
     * @example
     * // Update one Telephone
     * const telephone = await prisma.telephone.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends TelephoneUpdateArgs>(args: SelectSubset<T, TelephoneUpdateArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Telephones.
     * @param {TelephoneDeleteManyArgs} args - Arguments to filter Telephones to delete.
     * @example
     * // Delete a few Telephones
     * const { count } = await prisma.telephone.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends TelephoneDeleteManyArgs>(args?: SelectSubset<T, TelephoneDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telephones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Telephones
     * const telephone = await prisma.telephone.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends TelephoneUpdateManyArgs>(args: SelectSubset<T, TelephoneUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Telephones and returns the data updated in the database.
     * @param {TelephoneUpdateManyAndReturnArgs} args - Arguments to update many Telephones.
     * @example
     * // Update many Telephones
     * const telephone = await prisma.telephone.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Telephones and only return the `id`
     * const telephoneWithIdOnly = await prisma.telephone.updateManyAndReturn({
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
    updateManyAndReturn<T extends TelephoneUpdateManyAndReturnArgs>(args: SelectSubset<T, TelephoneUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Telephone.
     * @param {TelephoneUpsertArgs} args - Arguments to update or create a Telephone.
     * @example
     * // Update or create a Telephone
     * const telephone = await prisma.telephone.upsert({
     *   create: {
     *     // ... data to create a Telephone
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Telephone we want to update
     *   }
     * })
     */
    upsert<T extends TelephoneUpsertArgs>(args: SelectSubset<T, TelephoneUpsertArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Telephones.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneCountArgs} args - Arguments to filter Telephones to count.
     * @example
     * // Count the number of Telephones
     * const count = await prisma.telephone.count({
     *   where: {
     *     // ... the filter for the Telephones we want to count
     *   }
     * })
    **/
    count<T extends TelephoneCountArgs>(
      args?: Subset<T, TelephoneCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], TelephoneCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Telephone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends TelephoneAggregateArgs>(args: Subset<T, TelephoneAggregateArgs>): Prisma.PrismaPromise<GetTelephoneAggregateType<T>>

    /**
     * Group by Telephone.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {TelephoneGroupByArgs} args - Group by arguments.
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
      T extends TelephoneGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: TelephoneGroupByArgs['orderBy'] }
        : { orderBy?: TelephoneGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, TelephoneGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetTelephoneGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Telephone model
   */
  readonly fields: TelephoneFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Telephone.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__TelephoneClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    establishment<T extends Telephone$establishmentArgs<ExtArgs> = {}>(args?: Subset<T, Telephone$establishmentArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    employee<T extends Telephone$employeeArgs<ExtArgs> = {}>(args?: Subset<T, Telephone$employeeArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    client<T extends Telephone$clientArgs<ExtArgs> = {}>(args?: Subset<T, Telephone$clientArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Telephone model
   */
  interface TelephoneFieldRefs {
    readonly id: FieldRef<"Telephone", 'Int'>
    readonly number: FieldRef<"Telephone", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Telephone findUnique
   */
  export type TelephoneFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
    /**
     * Filter, which Telephone to fetch.
     */
    where: TelephoneWhereUniqueInput
  }

  /**
   * Telephone findUniqueOrThrow
   */
  export type TelephoneFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
    /**
     * Filter, which Telephone to fetch.
     */
    where: TelephoneWhereUniqueInput
  }

  /**
   * Telephone findFirst
   */
  export type TelephoneFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
    /**
     * Filter, which Telephone to fetch.
     */
    where?: TelephoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telephones to fetch.
     */
    orderBy?: TelephoneOrderByWithRelationInput | TelephoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telephones.
     */
    cursor?: TelephoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telephones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telephones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telephones.
     */
    distinct?: TelephoneScalarFieldEnum | TelephoneScalarFieldEnum[]
  }

  /**
   * Telephone findFirstOrThrow
   */
  export type TelephoneFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
    /**
     * Filter, which Telephone to fetch.
     */
    where?: TelephoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telephones to fetch.
     */
    orderBy?: TelephoneOrderByWithRelationInput | TelephoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Telephones.
     */
    cursor?: TelephoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telephones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telephones.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Telephones.
     */
    distinct?: TelephoneScalarFieldEnum | TelephoneScalarFieldEnum[]
  }

  /**
   * Telephone findMany
   */
  export type TelephoneFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
    /**
     * Filter, which Telephones to fetch.
     */
    where?: TelephoneWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Telephones to fetch.
     */
    orderBy?: TelephoneOrderByWithRelationInput | TelephoneOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Telephones.
     */
    cursor?: TelephoneWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Telephones from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Telephones.
     */
    skip?: number
    distinct?: TelephoneScalarFieldEnum | TelephoneScalarFieldEnum[]
  }

  /**
   * Telephone create
   */
  export type TelephoneCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
    /**
     * The data needed to create a Telephone.
     */
    data: XOR<TelephoneCreateInput, TelephoneUncheckedCreateInput>
  }

  /**
   * Telephone createMany
   */
  export type TelephoneCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Telephones.
     */
    data: TelephoneCreateManyInput | TelephoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Telephone createManyAndReturn
   */
  export type TelephoneCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * The data used to create many Telephones.
     */
    data: TelephoneCreateManyInput | TelephoneCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Telephone update
   */
  export type TelephoneUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
    /**
     * The data needed to update a Telephone.
     */
    data: XOR<TelephoneUpdateInput, TelephoneUncheckedUpdateInput>
    /**
     * Choose, which Telephone to update.
     */
    where: TelephoneWhereUniqueInput
  }

  /**
   * Telephone updateMany
   */
  export type TelephoneUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Telephones.
     */
    data: XOR<TelephoneUpdateManyMutationInput, TelephoneUncheckedUpdateManyInput>
    /**
     * Filter which Telephones to update
     */
    where?: TelephoneWhereInput
    /**
     * Limit how many Telephones to update.
     */
    limit?: number
  }

  /**
   * Telephone updateManyAndReturn
   */
  export type TelephoneUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * The data used to update Telephones.
     */
    data: XOR<TelephoneUpdateManyMutationInput, TelephoneUncheckedUpdateManyInput>
    /**
     * Filter which Telephones to update
     */
    where?: TelephoneWhereInput
    /**
     * Limit how many Telephones to update.
     */
    limit?: number
  }

  /**
   * Telephone upsert
   */
  export type TelephoneUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
    /**
     * The filter to search for the Telephone to update in case it exists.
     */
    where: TelephoneWhereUniqueInput
    /**
     * In case the Telephone found by the `where` argument doesn't exist, create a new Telephone with this data.
     */
    create: XOR<TelephoneCreateInput, TelephoneUncheckedCreateInput>
    /**
     * In case the Telephone was found with the provided `where` argument, update it with this data.
     */
    update: XOR<TelephoneUpdateInput, TelephoneUncheckedUpdateInput>
  }

  /**
   * Telephone delete
   */
  export type TelephoneDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
    /**
     * Filter which Telephone to delete.
     */
    where: TelephoneWhereUniqueInput
  }

  /**
   * Telephone deleteMany
   */
  export type TelephoneDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Telephones to delete
     */
    where?: TelephoneWhereInput
    /**
     * Limit how many Telephones to delete.
     */
    limit?: number
  }

  /**
   * Telephone.establishment
   */
  export type Telephone$establishmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    where?: EstablishmentWhereInput
  }

  /**
   * Telephone.employee
   */
  export type Telephone$employeeArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
  }

  /**
   * Telephone.client
   */
  export type Telephone$clientArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    where?: ClientWhereInput
  }

  /**
   * Telephone without action
   */
  export type TelephoneDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Telephone
     */
    select?: TelephoneSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Telephone
     */
    omit?: TelephoneOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: TelephoneInclude<ExtArgs> | null
  }


  /**
   * Model Establishment
   */

  export type AggregateEstablishment = {
    _count: EstablishmentCountAggregateOutputType | null
    _avg: EstablishmentAvgAggregateOutputType | null
    _sum: EstablishmentSumAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  export type EstablishmentAvgAggregateOutputType = {
    id: number | null
    telephone_id: number | null
    address_id: number | null
  }

  export type EstablishmentSumAggregateOutputType = {
    id: number | null
    telephone_id: number | null
    address_id: number | null
  }

  export type EstablishmentMinAggregateOutputType = {
    id: number | null
    trade_name: string | null
    cnpj: string | null
    opening_hours: Date | null
    closing_hours: Date | null
    telephone_id: number | null
    address_id: number | null
  }

  export type EstablishmentMaxAggregateOutputType = {
    id: number | null
    trade_name: string | null
    cnpj: string | null
    opening_hours: Date | null
    closing_hours: Date | null
    telephone_id: number | null
    address_id: number | null
  }

  export type EstablishmentCountAggregateOutputType = {
    id: number
    trade_name: number
    cnpj: number
    opening_hours: number
    closing_hours: number
    telephone_id: number
    address_id: number
    _all: number
  }


  export type EstablishmentAvgAggregateInputType = {
    id?: true
    telephone_id?: true
    address_id?: true
  }

  export type EstablishmentSumAggregateInputType = {
    id?: true
    telephone_id?: true
    address_id?: true
  }

  export type EstablishmentMinAggregateInputType = {
    id?: true
    trade_name?: true
    cnpj?: true
    opening_hours?: true
    closing_hours?: true
    telephone_id?: true
    address_id?: true
  }

  export type EstablishmentMaxAggregateInputType = {
    id?: true
    trade_name?: true
    cnpj?: true
    opening_hours?: true
    closing_hours?: true
    telephone_id?: true
    address_id?: true
  }

  export type EstablishmentCountAggregateInputType = {
    id?: true
    trade_name?: true
    cnpj?: true
    opening_hours?: true
    closing_hours?: true
    telephone_id?: true
    address_id?: true
    _all?: true
  }

  export type EstablishmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishment to aggregate.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Establishments
    **/
    _count?: true | EstablishmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EstablishmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EstablishmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EstablishmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EstablishmentMaxAggregateInputType
  }

  export type GetEstablishmentAggregateType<T extends EstablishmentAggregateArgs> = {
        [P in keyof T & keyof AggregateEstablishment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEstablishment[P]>
      : GetScalarType<T[P], AggregateEstablishment[P]>
  }




  export type EstablishmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EstablishmentWhereInput
    orderBy?: EstablishmentOrderByWithAggregationInput | EstablishmentOrderByWithAggregationInput[]
    by: EstablishmentScalarFieldEnum[] | EstablishmentScalarFieldEnum
    having?: EstablishmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EstablishmentCountAggregateInputType | true
    _avg?: EstablishmentAvgAggregateInputType
    _sum?: EstablishmentSumAggregateInputType
    _min?: EstablishmentMinAggregateInputType
    _max?: EstablishmentMaxAggregateInputType
  }

  export type EstablishmentGroupByOutputType = {
    id: number
    trade_name: string
    cnpj: string
    opening_hours: Date
    closing_hours: Date
    telephone_id: number
    address_id: number
    _count: EstablishmentCountAggregateOutputType | null
    _avg: EstablishmentAvgAggregateOutputType | null
    _sum: EstablishmentSumAggregateOutputType | null
    _min: EstablishmentMinAggregateOutputType | null
    _max: EstablishmentMaxAggregateOutputType | null
  }

  type GetEstablishmentGroupByPayload<T extends EstablishmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EstablishmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EstablishmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
            : GetScalarType<T[P], EstablishmentGroupByOutputType[P]>
        }
      >
    >


  export type EstablishmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trade_name?: boolean
    cnpj?: boolean
    opening_hours?: boolean
    closing_hours?: boolean
    telephone_id?: boolean
    address_id?: boolean
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    employees?: boolean | Establishment$employeesArgs<ExtArgs>
    schedulings?: boolean | Establishment$schedulingsArgs<ExtArgs>
    _count?: boolean | EstablishmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trade_name?: boolean
    cnpj?: boolean
    opening_hours?: boolean
    closing_hours?: boolean
    telephone_id?: boolean
    address_id?: boolean
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    trade_name?: boolean
    cnpj?: boolean
    opening_hours?: boolean
    closing_hours?: boolean
    telephone_id?: boolean
    address_id?: boolean
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["establishment"]>

  export type EstablishmentSelectScalar = {
    id?: boolean
    trade_name?: boolean
    cnpj?: boolean
    opening_hours?: boolean
    closing_hours?: boolean
    telephone_id?: boolean
    address_id?: boolean
  }

  export type EstablishmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "trade_name" | "cnpj" | "opening_hours" | "closing_hours" | "telephone_id" | "address_id", ExtArgs["result"]["establishment"]>
  export type EstablishmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    employees?: boolean | Establishment$employeesArgs<ExtArgs>
    schedulings?: boolean | Establishment$schedulingsArgs<ExtArgs>
    _count?: boolean | EstablishmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EstablishmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type EstablishmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $EstablishmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Establishment"
    objects: {
      telephone: Prisma.$TelephonePayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs>
      employees: Prisma.$EmployeePayload<ExtArgs>[]
      schedulings: Prisma.$SchedulingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      trade_name: string
      cnpj: string
      opening_hours: Date
      closing_hours: Date
      telephone_id: number
      address_id: number
    }, ExtArgs["result"]["establishment"]>
    composites: {}
  }

  type EstablishmentGetPayload<S extends boolean | null | undefined | EstablishmentDefaultArgs> = $Result.GetResult<Prisma.$EstablishmentPayload, S>

  type EstablishmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EstablishmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EstablishmentCountAggregateInputType | true
    }

  export interface EstablishmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Establishment'], meta: { name: 'Establishment' } }
    /**
     * Find zero or one Establishment that matches the filter.
     * @param {EstablishmentFindUniqueArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EstablishmentFindUniqueArgs>(args: SelectSubset<T, EstablishmentFindUniqueArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Establishment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EstablishmentFindUniqueOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EstablishmentFindUniqueOrThrowArgs>(args: SelectSubset<T, EstablishmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Establishment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EstablishmentFindFirstArgs>(args?: SelectSubset<T, EstablishmentFindFirstArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Establishment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindFirstOrThrowArgs} args - Arguments to find a Establishment
     * @example
     * // Get one Establishment
     * const establishment = await prisma.establishment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EstablishmentFindFirstOrThrowArgs>(args?: SelectSubset<T, EstablishmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Establishments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Establishments
     * const establishments = await prisma.establishment.findMany()
     * 
     * // Get first 10 Establishments
     * const establishments = await prisma.establishment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const establishmentWithIdOnly = await prisma.establishment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EstablishmentFindManyArgs>(args?: SelectSubset<T, EstablishmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Establishment.
     * @param {EstablishmentCreateArgs} args - Arguments to create a Establishment.
     * @example
     * // Create one Establishment
     * const Establishment = await prisma.establishment.create({
     *   data: {
     *     // ... data to create a Establishment
     *   }
     * })
     * 
     */
    create<T extends EstablishmentCreateArgs>(args: SelectSubset<T, EstablishmentCreateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Establishments.
     * @param {EstablishmentCreateManyArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EstablishmentCreateManyArgs>(args?: SelectSubset<T, EstablishmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Establishments and returns the data saved in the database.
     * @param {EstablishmentCreateManyAndReturnArgs} args - Arguments to create many Establishments.
     * @example
     * // Create many Establishments
     * const establishment = await prisma.establishment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Establishments and only return the `id`
     * const establishmentWithIdOnly = await prisma.establishment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EstablishmentCreateManyAndReturnArgs>(args?: SelectSubset<T, EstablishmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Establishment.
     * @param {EstablishmentDeleteArgs} args - Arguments to delete one Establishment.
     * @example
     * // Delete one Establishment
     * const Establishment = await prisma.establishment.delete({
     *   where: {
     *     // ... filter to delete one Establishment
     *   }
     * })
     * 
     */
    delete<T extends EstablishmentDeleteArgs>(args: SelectSubset<T, EstablishmentDeleteArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Establishment.
     * @param {EstablishmentUpdateArgs} args - Arguments to update one Establishment.
     * @example
     * // Update one Establishment
     * const establishment = await prisma.establishment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EstablishmentUpdateArgs>(args: SelectSubset<T, EstablishmentUpdateArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Establishments.
     * @param {EstablishmentDeleteManyArgs} args - Arguments to filter Establishments to delete.
     * @example
     * // Delete a few Establishments
     * const { count } = await prisma.establishment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EstablishmentDeleteManyArgs>(args?: SelectSubset<T, EstablishmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Establishments
     * const establishment = await prisma.establishment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EstablishmentUpdateManyArgs>(args: SelectSubset<T, EstablishmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Establishments and returns the data updated in the database.
     * @param {EstablishmentUpdateManyAndReturnArgs} args - Arguments to update many Establishments.
     * @example
     * // Update many Establishments
     * const establishment = await prisma.establishment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Establishments and only return the `id`
     * const establishmentWithIdOnly = await prisma.establishment.updateManyAndReturn({
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
    updateManyAndReturn<T extends EstablishmentUpdateManyAndReturnArgs>(args: SelectSubset<T, EstablishmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Establishment.
     * @param {EstablishmentUpsertArgs} args - Arguments to update or create a Establishment.
     * @example
     * // Update or create a Establishment
     * const establishment = await prisma.establishment.upsert({
     *   create: {
     *     // ... data to create a Establishment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Establishment we want to update
     *   }
     * })
     */
    upsert<T extends EstablishmentUpsertArgs>(args: SelectSubset<T, EstablishmentUpsertArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Establishments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentCountArgs} args - Arguments to filter Establishments to count.
     * @example
     * // Count the number of Establishments
     * const count = await prisma.establishment.count({
     *   where: {
     *     // ... the filter for the Establishments we want to count
     *   }
     * })
    **/
    count<T extends EstablishmentCountArgs>(
      args?: Subset<T, EstablishmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EstablishmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EstablishmentAggregateArgs>(args: Subset<T, EstablishmentAggregateArgs>): Prisma.PrismaPromise<GetEstablishmentAggregateType<T>>

    /**
     * Group by Establishment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EstablishmentGroupByArgs} args - Group by arguments.
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
      T extends EstablishmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EstablishmentGroupByArgs['orderBy'] }
        : { orderBy?: EstablishmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EstablishmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEstablishmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Establishment model
   */
  readonly fields: EstablishmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Establishment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EstablishmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telephone<T extends TelephoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TelephoneDefaultArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employees<T extends Establishment$employeesArgs<ExtArgs> = {}>(args?: Subset<T, Establishment$employeesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedulings<T extends Establishment$schedulingsArgs<ExtArgs> = {}>(args?: Subset<T, Establishment$schedulingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Establishment model
   */
  interface EstablishmentFieldRefs {
    readonly id: FieldRef<"Establishment", 'Int'>
    readonly trade_name: FieldRef<"Establishment", 'String'>
    readonly cnpj: FieldRef<"Establishment", 'String'>
    readonly opening_hours: FieldRef<"Establishment", 'DateTime'>
    readonly closing_hours: FieldRef<"Establishment", 'DateTime'>
    readonly telephone_id: FieldRef<"Establishment", 'Int'>
    readonly address_id: FieldRef<"Establishment", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Establishment findUnique
   */
  export type EstablishmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findUniqueOrThrow
   */
  export type EstablishmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment findFirst
   */
  export type EstablishmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findFirstOrThrow
   */
  export type EstablishmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishment to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Establishments.
     */
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment findMany
   */
  export type EstablishmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter, which Establishments to fetch.
     */
    where?: EstablishmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Establishments to fetch.
     */
    orderBy?: EstablishmentOrderByWithRelationInput | EstablishmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Establishments.
     */
    cursor?: EstablishmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Establishments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Establishments.
     */
    skip?: number
    distinct?: EstablishmentScalarFieldEnum | EstablishmentScalarFieldEnum[]
  }

  /**
   * Establishment create
   */
  export type EstablishmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Establishment.
     */
    data: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
  }

  /**
   * Establishment createMany
   */
  export type EstablishmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Establishment createManyAndReturn
   */
  export type EstablishmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * The data used to create many Establishments.
     */
    data: EstablishmentCreateManyInput | EstablishmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Establishment update
   */
  export type EstablishmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Establishment.
     */
    data: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
    /**
     * Choose, which Establishment to update.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment updateMany
   */
  export type EstablishmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Establishments.
     */
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyInput>
    /**
     * Filter which Establishments to update
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to update.
     */
    limit?: number
  }

  /**
   * Establishment updateManyAndReturn
   */
  export type EstablishmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * The data used to update Establishments.
     */
    data: XOR<EstablishmentUpdateManyMutationInput, EstablishmentUncheckedUpdateManyInput>
    /**
     * Filter which Establishments to update
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Establishment upsert
   */
  export type EstablishmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Establishment to update in case it exists.
     */
    where: EstablishmentWhereUniqueInput
    /**
     * In case the Establishment found by the `where` argument doesn't exist, create a new Establishment with this data.
     */
    create: XOR<EstablishmentCreateInput, EstablishmentUncheckedCreateInput>
    /**
     * In case the Establishment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EstablishmentUpdateInput, EstablishmentUncheckedUpdateInput>
  }

  /**
   * Establishment delete
   */
  export type EstablishmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
    /**
     * Filter which Establishment to delete.
     */
    where: EstablishmentWhereUniqueInput
  }

  /**
   * Establishment deleteMany
   */
  export type EstablishmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Establishments to delete
     */
    where?: EstablishmentWhereInput
    /**
     * Limit how many Establishments to delete.
     */
    limit?: number
  }

  /**
   * Establishment.employees
   */
  export type Establishment$employeesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    cursor?: EmployeeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Establishment.schedulings
   */
  export type Establishment$schedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Establishment without action
   */
  export type EstablishmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Establishment
     */
    select?: EstablishmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Establishment
     */
    omit?: EstablishmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EstablishmentInclude<ExtArgs> | null
  }


  /**
   * Model Servicess
   */

  export type AggregateServicess = {
    _count: ServicessCountAggregateOutputType | null
    _avg: ServicessAvgAggregateOutputType | null
    _sum: ServicessSumAggregateOutputType | null
    _min: ServicessMinAggregateOutputType | null
    _max: ServicessMaxAggregateOutputType | null
  }

  export type ServicessAvgAggregateOutputType = {
    id: number | null
    price: Decimal | null
    duration: number | null
  }

  export type ServicessSumAggregateOutputType = {
    id: number | null
    price: Decimal | null
    duration: number | null
  }

  export type ServicessMinAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    description: string | null
    duration: number | null
  }

  export type ServicessMaxAggregateOutputType = {
    id: number | null
    name: string | null
    price: Decimal | null
    description: string | null
    duration: number | null
  }

  export type ServicessCountAggregateOutputType = {
    id: number
    name: number
    price: number
    description: number
    duration: number
    _all: number
  }


  export type ServicessAvgAggregateInputType = {
    id?: true
    price?: true
    duration?: true
  }

  export type ServicessSumAggregateInputType = {
    id?: true
    price?: true
    duration?: true
  }

  export type ServicessMinAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    duration?: true
  }

  export type ServicessMaxAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    duration?: true
  }

  export type ServicessCountAggregateInputType = {
    id?: true
    name?: true
    price?: true
    description?: true
    duration?: true
    _all?: true
  }

  export type ServicessAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicess to aggregate.
     */
    where?: ServicessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicesses to fetch.
     */
    orderBy?: ServicessOrderByWithRelationInput | ServicessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ServicessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Servicesses
    **/
    _count?: true | ServicessCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ServicessAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ServicessSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ServicessMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ServicessMaxAggregateInputType
  }

  export type GetServicessAggregateType<T extends ServicessAggregateArgs> = {
        [P in keyof T & keyof AggregateServicess]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateServicess[P]>
      : GetScalarType<T[P], AggregateServicess[P]>
  }




  export type ServicessGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ServicessWhereInput
    orderBy?: ServicessOrderByWithAggregationInput | ServicessOrderByWithAggregationInput[]
    by: ServicessScalarFieldEnum[] | ServicessScalarFieldEnum
    having?: ServicessScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ServicessCountAggregateInputType | true
    _avg?: ServicessAvgAggregateInputType
    _sum?: ServicessSumAggregateInputType
    _min?: ServicessMinAggregateInputType
    _max?: ServicessMaxAggregateInputType
  }

  export type ServicessGroupByOutputType = {
    id: number
    name: string
    price: Decimal
    description: string
    duration: number
    _count: ServicessCountAggregateOutputType | null
    _avg: ServicessAvgAggregateOutputType | null
    _sum: ServicessSumAggregateOutputType | null
    _min: ServicessMinAggregateOutputType | null
    _max: ServicessMaxAggregateOutputType | null
  }

  type GetServicessGroupByPayload<T extends ServicessGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ServicessGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ServicessGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ServicessGroupByOutputType[P]>
            : GetScalarType<T[P], ServicessGroupByOutputType[P]>
        }
      >
    >


  export type ServicessSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    duration?: boolean
    schedulings?: boolean | Servicess$schedulingsArgs<ExtArgs>
    _count?: boolean | ServicessCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["servicess"]>

  export type ServicessSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    duration?: boolean
  }, ExtArgs["result"]["servicess"]>

  export type ServicessSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    duration?: boolean
  }, ExtArgs["result"]["servicess"]>

  export type ServicessSelectScalar = {
    id?: boolean
    name?: boolean
    price?: boolean
    description?: boolean
    duration?: boolean
  }

  export type ServicessOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "price" | "description" | "duration", ExtArgs["result"]["servicess"]>
  export type ServicessInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    schedulings?: boolean | Servicess$schedulingsArgs<ExtArgs>
    _count?: boolean | ServicessCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ServicessIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ServicessIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ServicessPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Servicess"
    objects: {
      schedulings: Prisma.$SchedulingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      price: Prisma.Decimal
      description: string
      duration: number
    }, ExtArgs["result"]["servicess"]>
    composites: {}
  }

  type ServicessGetPayload<S extends boolean | null | undefined | ServicessDefaultArgs> = $Result.GetResult<Prisma.$ServicessPayload, S>

  type ServicessCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ServicessFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ServicessCountAggregateInputType | true
    }

  export interface ServicessDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Servicess'], meta: { name: 'Servicess' } }
    /**
     * Find zero or one Servicess that matches the filter.
     * @param {ServicessFindUniqueArgs} args - Arguments to find a Servicess
     * @example
     * // Get one Servicess
     * const servicess = await prisma.servicess.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ServicessFindUniqueArgs>(args: SelectSubset<T, ServicessFindUniqueArgs<ExtArgs>>): Prisma__ServicessClient<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Servicess that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ServicessFindUniqueOrThrowArgs} args - Arguments to find a Servicess
     * @example
     * // Get one Servicess
     * const servicess = await prisma.servicess.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ServicessFindUniqueOrThrowArgs>(args: SelectSubset<T, ServicessFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ServicessClient<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicess that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicessFindFirstArgs} args - Arguments to find a Servicess
     * @example
     * // Get one Servicess
     * const servicess = await prisma.servicess.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ServicessFindFirstArgs>(args?: SelectSubset<T, ServicessFindFirstArgs<ExtArgs>>): Prisma__ServicessClient<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Servicess that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicessFindFirstOrThrowArgs} args - Arguments to find a Servicess
     * @example
     * // Get one Servicess
     * const servicess = await prisma.servicess.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ServicessFindFirstOrThrowArgs>(args?: SelectSubset<T, ServicessFindFirstOrThrowArgs<ExtArgs>>): Prisma__ServicessClient<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Servicesses that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicessFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Servicesses
     * const servicesses = await prisma.servicess.findMany()
     * 
     * // Get first 10 Servicesses
     * const servicesses = await prisma.servicess.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const servicessWithIdOnly = await prisma.servicess.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ServicessFindManyArgs>(args?: SelectSubset<T, ServicessFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Servicess.
     * @param {ServicessCreateArgs} args - Arguments to create a Servicess.
     * @example
     * // Create one Servicess
     * const Servicess = await prisma.servicess.create({
     *   data: {
     *     // ... data to create a Servicess
     *   }
     * })
     * 
     */
    create<T extends ServicessCreateArgs>(args: SelectSubset<T, ServicessCreateArgs<ExtArgs>>): Prisma__ServicessClient<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Servicesses.
     * @param {ServicessCreateManyArgs} args - Arguments to create many Servicesses.
     * @example
     * // Create many Servicesses
     * const servicess = await prisma.servicess.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ServicessCreateManyArgs>(args?: SelectSubset<T, ServicessCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Servicesses and returns the data saved in the database.
     * @param {ServicessCreateManyAndReturnArgs} args - Arguments to create many Servicesses.
     * @example
     * // Create many Servicesses
     * const servicess = await prisma.servicess.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Servicesses and only return the `id`
     * const servicessWithIdOnly = await prisma.servicess.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ServicessCreateManyAndReturnArgs>(args?: SelectSubset<T, ServicessCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Servicess.
     * @param {ServicessDeleteArgs} args - Arguments to delete one Servicess.
     * @example
     * // Delete one Servicess
     * const Servicess = await prisma.servicess.delete({
     *   where: {
     *     // ... filter to delete one Servicess
     *   }
     * })
     * 
     */
    delete<T extends ServicessDeleteArgs>(args: SelectSubset<T, ServicessDeleteArgs<ExtArgs>>): Prisma__ServicessClient<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Servicess.
     * @param {ServicessUpdateArgs} args - Arguments to update one Servicess.
     * @example
     * // Update one Servicess
     * const servicess = await prisma.servicess.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ServicessUpdateArgs>(args: SelectSubset<T, ServicessUpdateArgs<ExtArgs>>): Prisma__ServicessClient<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Servicesses.
     * @param {ServicessDeleteManyArgs} args - Arguments to filter Servicesses to delete.
     * @example
     * // Delete a few Servicesses
     * const { count } = await prisma.servicess.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ServicessDeleteManyArgs>(args?: SelectSubset<T, ServicessDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicessUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Servicesses
     * const servicess = await prisma.servicess.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ServicessUpdateManyArgs>(args: SelectSubset<T, ServicessUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Servicesses and returns the data updated in the database.
     * @param {ServicessUpdateManyAndReturnArgs} args - Arguments to update many Servicesses.
     * @example
     * // Update many Servicesses
     * const servicess = await prisma.servicess.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Servicesses and only return the `id`
     * const servicessWithIdOnly = await prisma.servicess.updateManyAndReturn({
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
    updateManyAndReturn<T extends ServicessUpdateManyAndReturnArgs>(args: SelectSubset<T, ServicessUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Servicess.
     * @param {ServicessUpsertArgs} args - Arguments to update or create a Servicess.
     * @example
     * // Update or create a Servicess
     * const servicess = await prisma.servicess.upsert({
     *   create: {
     *     // ... data to create a Servicess
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Servicess we want to update
     *   }
     * })
     */
    upsert<T extends ServicessUpsertArgs>(args: SelectSubset<T, ServicessUpsertArgs<ExtArgs>>): Prisma__ServicessClient<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Servicesses.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicessCountArgs} args - Arguments to filter Servicesses to count.
     * @example
     * // Count the number of Servicesses
     * const count = await prisma.servicess.count({
     *   where: {
     *     // ... the filter for the Servicesses we want to count
     *   }
     * })
    **/
    count<T extends ServicessCountArgs>(
      args?: Subset<T, ServicessCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ServicessCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Servicess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicessAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ServicessAggregateArgs>(args: Subset<T, ServicessAggregateArgs>): Prisma.PrismaPromise<GetServicessAggregateType<T>>

    /**
     * Group by Servicess.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ServicessGroupByArgs} args - Group by arguments.
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
      T extends ServicessGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ServicessGroupByArgs['orderBy'] }
        : { orderBy?: ServicessGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ServicessGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServicessGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Servicess model
   */
  readonly fields: ServicessFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Servicess.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ServicessClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    schedulings<T extends Servicess$schedulingsArgs<ExtArgs> = {}>(args?: Subset<T, Servicess$schedulingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Servicess model
   */
  interface ServicessFieldRefs {
    readonly id: FieldRef<"Servicess", 'Int'>
    readonly name: FieldRef<"Servicess", 'String'>
    readonly price: FieldRef<"Servicess", 'Decimal'>
    readonly description: FieldRef<"Servicess", 'String'>
    readonly duration: FieldRef<"Servicess", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Servicess findUnique
   */
  export type ServicessFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
    /**
     * Filter, which Servicess to fetch.
     */
    where: ServicessWhereUniqueInput
  }

  /**
   * Servicess findUniqueOrThrow
   */
  export type ServicessFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
    /**
     * Filter, which Servicess to fetch.
     */
    where: ServicessWhereUniqueInput
  }

  /**
   * Servicess findFirst
   */
  export type ServicessFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
    /**
     * Filter, which Servicess to fetch.
     */
    where?: ServicessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicesses to fetch.
     */
    orderBy?: ServicessOrderByWithRelationInput | ServicessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicesses.
     */
    cursor?: ServicessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicesses.
     */
    distinct?: ServicessScalarFieldEnum | ServicessScalarFieldEnum[]
  }

  /**
   * Servicess findFirstOrThrow
   */
  export type ServicessFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
    /**
     * Filter, which Servicess to fetch.
     */
    where?: ServicessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicesses to fetch.
     */
    orderBy?: ServicessOrderByWithRelationInput | ServicessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Servicesses.
     */
    cursor?: ServicessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicesses.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Servicesses.
     */
    distinct?: ServicessScalarFieldEnum | ServicessScalarFieldEnum[]
  }

  /**
   * Servicess findMany
   */
  export type ServicessFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
    /**
     * Filter, which Servicesses to fetch.
     */
    where?: ServicessWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Servicesses to fetch.
     */
    orderBy?: ServicessOrderByWithRelationInput | ServicessOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Servicesses.
     */
    cursor?: ServicessWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Servicesses from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Servicesses.
     */
    skip?: number
    distinct?: ServicessScalarFieldEnum | ServicessScalarFieldEnum[]
  }

  /**
   * Servicess create
   */
  export type ServicessCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
    /**
     * The data needed to create a Servicess.
     */
    data: XOR<ServicessCreateInput, ServicessUncheckedCreateInput>
  }

  /**
   * Servicess createMany
   */
  export type ServicessCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Servicesses.
     */
    data: ServicessCreateManyInput | ServicessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicess createManyAndReturn
   */
  export type ServicessCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * The data used to create many Servicesses.
     */
    data: ServicessCreateManyInput | ServicessCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Servicess update
   */
  export type ServicessUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
    /**
     * The data needed to update a Servicess.
     */
    data: XOR<ServicessUpdateInput, ServicessUncheckedUpdateInput>
    /**
     * Choose, which Servicess to update.
     */
    where: ServicessWhereUniqueInput
  }

  /**
   * Servicess updateMany
   */
  export type ServicessUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Servicesses.
     */
    data: XOR<ServicessUpdateManyMutationInput, ServicessUncheckedUpdateManyInput>
    /**
     * Filter which Servicesses to update
     */
    where?: ServicessWhereInput
    /**
     * Limit how many Servicesses to update.
     */
    limit?: number
  }

  /**
   * Servicess updateManyAndReturn
   */
  export type ServicessUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * The data used to update Servicesses.
     */
    data: XOR<ServicessUpdateManyMutationInput, ServicessUncheckedUpdateManyInput>
    /**
     * Filter which Servicesses to update
     */
    where?: ServicessWhereInput
    /**
     * Limit how many Servicesses to update.
     */
    limit?: number
  }

  /**
   * Servicess upsert
   */
  export type ServicessUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
    /**
     * The filter to search for the Servicess to update in case it exists.
     */
    where: ServicessWhereUniqueInput
    /**
     * In case the Servicess found by the `where` argument doesn't exist, create a new Servicess with this data.
     */
    create: XOR<ServicessCreateInput, ServicessUncheckedCreateInput>
    /**
     * In case the Servicess was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ServicessUpdateInput, ServicessUncheckedUpdateInput>
  }

  /**
   * Servicess delete
   */
  export type ServicessDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
    /**
     * Filter which Servicess to delete.
     */
    where: ServicessWhereUniqueInput
  }

  /**
   * Servicess deleteMany
   */
  export type ServicessDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Servicesses to delete
     */
    where?: ServicessWhereInput
    /**
     * Limit how many Servicesses to delete.
     */
    limit?: number
  }

  /**
   * Servicess.schedulings
   */
  export type Servicess$schedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Servicess without action
   */
  export type ServicessDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Servicess
     */
    select?: ServicessSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Servicess
     */
    omit?: ServicessOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ServicessInclude<ExtArgs> | null
  }


  /**
   * Model Employee
   */

  export type AggregateEmployee = {
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  export type EmployeeAvgAggregateOutputType = {
    id: number | null
    telephone_id: number | null
    address_id: number | null
    establishment_id: number | null
  }

  export type EmployeeSumAggregateOutputType = {
    id: number | null
    telephone_id: number | null
    address_id: number | null
    establishment_id: number | null
  }

  export type EmployeeMinAggregateOutputType = {
    id: number | null
    name: string | null
    photo: string | null
    specialty: string | null
    email: string | null
    cpf: string | null
    telephone_id: number | null
    address_id: number | null
    establishment_id: number | null
  }

  export type EmployeeMaxAggregateOutputType = {
    id: number | null
    name: string | null
    photo: string | null
    specialty: string | null
    email: string | null
    cpf: string | null
    telephone_id: number | null
    address_id: number | null
    establishment_id: number | null
  }

  export type EmployeeCountAggregateOutputType = {
    id: number
    name: number
    photo: number
    specialty: number
    email: number
    cpf: number
    telephone_id: number
    address_id: number
    establishment_id: number
    _all: number
  }


  export type EmployeeAvgAggregateInputType = {
    id?: true
    telephone_id?: true
    address_id?: true
    establishment_id?: true
  }

  export type EmployeeSumAggregateInputType = {
    id?: true
    telephone_id?: true
    address_id?: true
    establishment_id?: true
  }

  export type EmployeeMinAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    specialty?: true
    email?: true
    cpf?: true
    telephone_id?: true
    address_id?: true
    establishment_id?: true
  }

  export type EmployeeMaxAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    specialty?: true
    email?: true
    cpf?: true
    telephone_id?: true
    address_id?: true
    establishment_id?: true
  }

  export type EmployeeCountAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    specialty?: true
    email?: true
    cpf?: true
    telephone_id?: true
    address_id?: true
    establishment_id?: true
    _all?: true
  }

  export type EmployeeAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employee to aggregate.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Employees
    **/
    _count?: true | EmployeeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: EmployeeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: EmployeeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: EmployeeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: EmployeeMaxAggregateInputType
  }

  export type GetEmployeeAggregateType<T extends EmployeeAggregateArgs> = {
        [P in keyof T & keyof AggregateEmployee]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateEmployee[P]>
      : GetScalarType<T[P], AggregateEmployee[P]>
  }




  export type EmployeeGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: EmployeeWhereInput
    orderBy?: EmployeeOrderByWithAggregationInput | EmployeeOrderByWithAggregationInput[]
    by: EmployeeScalarFieldEnum[] | EmployeeScalarFieldEnum
    having?: EmployeeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: EmployeeCountAggregateInputType | true
    _avg?: EmployeeAvgAggregateInputType
    _sum?: EmployeeSumAggregateInputType
    _min?: EmployeeMinAggregateInputType
    _max?: EmployeeMaxAggregateInputType
  }

  export type EmployeeGroupByOutputType = {
    id: number
    name: string
    photo: string | null
    specialty: string
    email: string
    cpf: string
    telephone_id: number
    address_id: number
    establishment_id: number
    _count: EmployeeCountAggregateOutputType | null
    _avg: EmployeeAvgAggregateOutputType | null
    _sum: EmployeeSumAggregateOutputType | null
    _min: EmployeeMinAggregateOutputType | null
    _max: EmployeeMaxAggregateOutputType | null
  }

  type GetEmployeeGroupByPayload<T extends EmployeeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<EmployeeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof EmployeeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
            : GetScalarType<T[P], EmployeeGroupByOutputType[P]>
        }
      >
    >


  export type EmployeeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    specialty?: boolean
    email?: boolean
    cpf?: boolean
    telephone_id?: boolean
    address_id?: boolean
    establishment_id?: boolean
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    reviews?: boolean | Employee$reviewsArgs<ExtArgs>
    schedulings?: boolean | Employee$schedulingsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    specialty?: boolean
    email?: boolean
    cpf?: boolean
    telephone_id?: boolean
    address_id?: boolean
    establishment_id?: boolean
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    specialty?: boolean
    email?: boolean
    cpf?: boolean
    telephone_id?: boolean
    address_id?: boolean
    establishment_id?: boolean
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["employee"]>

  export type EmployeeSelectScalar = {
    id?: boolean
    name?: boolean
    photo?: boolean
    specialty?: boolean
    email?: boolean
    cpf?: boolean
    telephone_id?: boolean
    address_id?: boolean
    establishment_id?: boolean
  }

  export type EmployeeOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "photo" | "specialty" | "email" | "cpf" | "telephone_id" | "address_id" | "establishment_id", ExtArgs["result"]["employee"]>
  export type EmployeeInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
    reviews?: boolean | Employee$reviewsArgs<ExtArgs>
    schedulings?: boolean | Employee$schedulingsArgs<ExtArgs>
    _count?: boolean | EmployeeCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }
  export type EmployeeIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }

  export type $EmployeePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Employee"
    objects: {
      telephone: Prisma.$TelephonePayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs>
      establishment: Prisma.$EstablishmentPayload<ExtArgs>
      reviews: Prisma.$ReviewsPayload<ExtArgs>[]
      schedulings: Prisma.$SchedulingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      photo: string | null
      specialty: string
      email: string
      cpf: string
      telephone_id: number
      address_id: number
      establishment_id: number
    }, ExtArgs["result"]["employee"]>
    composites: {}
  }

  type EmployeeGetPayload<S extends boolean | null | undefined | EmployeeDefaultArgs> = $Result.GetResult<Prisma.$EmployeePayload, S>

  type EmployeeCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<EmployeeFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: EmployeeCountAggregateInputType | true
    }

  export interface EmployeeDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Employee'], meta: { name: 'Employee' } }
    /**
     * Find zero or one Employee that matches the filter.
     * @param {EmployeeFindUniqueArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends EmployeeFindUniqueArgs>(args: SelectSubset<T, EmployeeFindUniqueArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Employee that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {EmployeeFindUniqueOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends EmployeeFindUniqueOrThrowArgs>(args: SelectSubset<T, EmployeeFindUniqueOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends EmployeeFindFirstArgs>(args?: SelectSubset<T, EmployeeFindFirstArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Employee that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindFirstOrThrowArgs} args - Arguments to find a Employee
     * @example
     * // Get one Employee
     * const employee = await prisma.employee.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends EmployeeFindFirstOrThrowArgs>(args?: SelectSubset<T, EmployeeFindFirstOrThrowArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Employees that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Employees
     * const employees = await prisma.employee.findMany()
     * 
     * // Get first 10 Employees
     * const employees = await prisma.employee.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const employeeWithIdOnly = await prisma.employee.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends EmployeeFindManyArgs>(args?: SelectSubset<T, EmployeeFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Employee.
     * @param {EmployeeCreateArgs} args - Arguments to create a Employee.
     * @example
     * // Create one Employee
     * const Employee = await prisma.employee.create({
     *   data: {
     *     // ... data to create a Employee
     *   }
     * })
     * 
     */
    create<T extends EmployeeCreateArgs>(args: SelectSubset<T, EmployeeCreateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Employees.
     * @param {EmployeeCreateManyArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends EmployeeCreateManyArgs>(args?: SelectSubset<T, EmployeeCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Employees and returns the data saved in the database.
     * @param {EmployeeCreateManyAndReturnArgs} args - Arguments to create many Employees.
     * @example
     * // Create many Employees
     * const employee = await prisma.employee.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends EmployeeCreateManyAndReturnArgs>(args?: SelectSubset<T, EmployeeCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Employee.
     * @param {EmployeeDeleteArgs} args - Arguments to delete one Employee.
     * @example
     * // Delete one Employee
     * const Employee = await prisma.employee.delete({
     *   where: {
     *     // ... filter to delete one Employee
     *   }
     * })
     * 
     */
    delete<T extends EmployeeDeleteArgs>(args: SelectSubset<T, EmployeeDeleteArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Employee.
     * @param {EmployeeUpdateArgs} args - Arguments to update one Employee.
     * @example
     * // Update one Employee
     * const employee = await prisma.employee.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends EmployeeUpdateArgs>(args: SelectSubset<T, EmployeeUpdateArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Employees.
     * @param {EmployeeDeleteManyArgs} args - Arguments to filter Employees to delete.
     * @example
     * // Delete a few Employees
     * const { count } = await prisma.employee.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends EmployeeDeleteManyArgs>(args?: SelectSubset<T, EmployeeDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends EmployeeUpdateManyArgs>(args: SelectSubset<T, EmployeeUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Employees and returns the data updated in the database.
     * @param {EmployeeUpdateManyAndReturnArgs} args - Arguments to update many Employees.
     * @example
     * // Update many Employees
     * const employee = await prisma.employee.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Employees and only return the `id`
     * const employeeWithIdOnly = await prisma.employee.updateManyAndReturn({
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
    updateManyAndReturn<T extends EmployeeUpdateManyAndReturnArgs>(args: SelectSubset<T, EmployeeUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Employee.
     * @param {EmployeeUpsertArgs} args - Arguments to update or create a Employee.
     * @example
     * // Update or create a Employee
     * const employee = await prisma.employee.upsert({
     *   create: {
     *     // ... data to create a Employee
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Employee we want to update
     *   }
     * })
     */
    upsert<T extends EmployeeUpsertArgs>(args: SelectSubset<T, EmployeeUpsertArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Employees.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeCountArgs} args - Arguments to filter Employees to count.
     * @example
     * // Count the number of Employees
     * const count = await prisma.employee.count({
     *   where: {
     *     // ... the filter for the Employees we want to count
     *   }
     * })
    **/
    count<T extends EmployeeCountArgs>(
      args?: Subset<T, EmployeeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], EmployeeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends EmployeeAggregateArgs>(args: Subset<T, EmployeeAggregateArgs>): Prisma.PrismaPromise<GetEmployeeAggregateType<T>>

    /**
     * Group by Employee.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {EmployeeGroupByArgs} args - Group by arguments.
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
      T extends EmployeeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: EmployeeGroupByArgs['orderBy'] }
        : { orderBy?: EmployeeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, EmployeeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEmployeeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Employee model
   */
  readonly fields: EmployeeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Employee.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__EmployeeClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telephone<T extends TelephoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TelephoneDefaultArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    establishment<T extends EstablishmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstablishmentDefaultArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviews<T extends Employee$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    schedulings<T extends Employee$schedulingsArgs<ExtArgs> = {}>(args?: Subset<T, Employee$schedulingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Employee model
   */
  interface EmployeeFieldRefs {
    readonly id: FieldRef<"Employee", 'Int'>
    readonly name: FieldRef<"Employee", 'String'>
    readonly photo: FieldRef<"Employee", 'String'>
    readonly specialty: FieldRef<"Employee", 'String'>
    readonly email: FieldRef<"Employee", 'String'>
    readonly cpf: FieldRef<"Employee", 'String'>
    readonly telephone_id: FieldRef<"Employee", 'Int'>
    readonly address_id: FieldRef<"Employee", 'Int'>
    readonly establishment_id: FieldRef<"Employee", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Employee findUnique
   */
  export type EmployeeFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findUniqueOrThrow
   */
  export type EmployeeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee findFirst
   */
  export type EmployeeFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findFirstOrThrow
   */
  export type EmployeeFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employee to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Employees.
     */
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee findMany
   */
  export type EmployeeFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter, which Employees to fetch.
     */
    where?: EmployeeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Employees to fetch.
     */
    orderBy?: EmployeeOrderByWithRelationInput | EmployeeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Employees.
     */
    cursor?: EmployeeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Employees from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Employees.
     */
    skip?: number
    distinct?: EmployeeScalarFieldEnum | EmployeeScalarFieldEnum[]
  }

  /**
   * Employee create
   */
  export type EmployeeCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to create a Employee.
     */
    data: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
  }

  /**
   * Employee createMany
   */
  export type EmployeeCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Employee createManyAndReturn
   */
  export type EmployeeCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to create many Employees.
     */
    data: EmployeeCreateManyInput | EmployeeCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee update
   */
  export type EmployeeUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The data needed to update a Employee.
     */
    data: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
    /**
     * Choose, which Employee to update.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee updateMany
   */
  export type EmployeeUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
  }

  /**
   * Employee updateManyAndReturn
   */
  export type EmployeeUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * The data used to update Employees.
     */
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyInput>
    /**
     * Filter which Employees to update
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Employee upsert
   */
  export type EmployeeUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * The filter to search for the Employee to update in case it exists.
     */
    where: EmployeeWhereUniqueInput
    /**
     * In case the Employee found by the `where` argument doesn't exist, create a new Employee with this data.
     */
    create: XOR<EmployeeCreateInput, EmployeeUncheckedCreateInput>
    /**
     * In case the Employee was found with the provided `where` argument, update it with this data.
     */
    update: XOR<EmployeeUpdateInput, EmployeeUncheckedUpdateInput>
  }

  /**
   * Employee delete
   */
  export type EmployeeDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
    /**
     * Filter which Employee to delete.
     */
    where: EmployeeWhereUniqueInput
  }

  /**
   * Employee deleteMany
   */
  export type EmployeeDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Employees to delete
     */
    where?: EmployeeWhereInput
    /**
     * Limit how many Employees to delete.
     */
    limit?: number
  }

  /**
   * Employee.reviews
   */
  export type Employee$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    cursor?: ReviewsWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Employee.schedulings
   */
  export type Employee$schedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Employee without action
   */
  export type EmployeeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Employee
     */
    select?: EmployeeSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Employee
     */
    omit?: EmployeeOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: EmployeeInclude<ExtArgs> | null
  }


  /**
   * Model Client
   */

  export type AggregateClient = {
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  export type ClientAvgAggregateOutputType = {
    id: number | null
    telephone_id: number | null
    address_id: number | null
  }

  export type ClientSumAggregateOutputType = {
    id: number | null
    telephone_id: number | null
    address_id: number | null
  }

  export type ClientMinAggregateOutputType = {
    id: number | null
    name: string | null
    photo: string | null
    email: string | null
    telephone_id: number | null
    address_id: number | null
  }

  export type ClientMaxAggregateOutputType = {
    id: number | null
    name: string | null
    photo: string | null
    email: string | null
    telephone_id: number | null
    address_id: number | null
  }

  export type ClientCountAggregateOutputType = {
    id: number
    name: number
    photo: number
    email: number
    telephone_id: number
    address_id: number
    _all: number
  }


  export type ClientAvgAggregateInputType = {
    id?: true
    telephone_id?: true
    address_id?: true
  }

  export type ClientSumAggregateInputType = {
    id?: true
    telephone_id?: true
    address_id?: true
  }

  export type ClientMinAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    email?: true
    telephone_id?: true
    address_id?: true
  }

  export type ClientMaxAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    email?: true
    telephone_id?: true
    address_id?: true
  }

  export type ClientCountAggregateInputType = {
    id?: true
    name?: true
    photo?: true
    email?: true
    telephone_id?: true
    address_id?: true
    _all?: true
  }

  export type ClientAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Client to aggregate.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Clients
    **/
    _count?: true | ClientCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ClientAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ClientSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ClientMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ClientMaxAggregateInputType
  }

  export type GetClientAggregateType<T extends ClientAggregateArgs> = {
        [P in keyof T & keyof AggregateClient]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateClient[P]>
      : GetScalarType<T[P], AggregateClient[P]>
  }




  export type ClientGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ClientWhereInput
    orderBy?: ClientOrderByWithAggregationInput | ClientOrderByWithAggregationInput[]
    by: ClientScalarFieldEnum[] | ClientScalarFieldEnum
    having?: ClientScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ClientCountAggregateInputType | true
    _avg?: ClientAvgAggregateInputType
    _sum?: ClientSumAggregateInputType
    _min?: ClientMinAggregateInputType
    _max?: ClientMaxAggregateInputType
  }

  export type ClientGroupByOutputType = {
    id: number
    name: string
    photo: string | null
    email: string
    telephone_id: number
    address_id: number
    _count: ClientCountAggregateOutputType | null
    _avg: ClientAvgAggregateOutputType | null
    _sum: ClientSumAggregateOutputType | null
    _min: ClientMinAggregateOutputType | null
    _max: ClientMaxAggregateOutputType | null
  }

  type GetClientGroupByPayload<T extends ClientGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ClientGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ClientGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ClientGroupByOutputType[P]>
            : GetScalarType<T[P], ClientGroupByOutputType[P]>
        }
      >
    >


  export type ClientSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    email?: boolean
    telephone_id?: boolean
    address_id?: boolean
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    schedulings?: boolean | Client$schedulingsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    email?: boolean
    telephone_id?: boolean
    address_id?: boolean
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    photo?: boolean
    email?: boolean
    telephone_id?: boolean
    address_id?: boolean
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["client"]>

  export type ClientSelectScalar = {
    id?: boolean
    name?: boolean
    photo?: boolean
    email?: boolean
    telephone_id?: boolean
    address_id?: boolean
  }

  export type ClientOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "photo" | "email" | "telephone_id" | "address_id", ExtArgs["result"]["client"]>
  export type ClientInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
    schedulings?: boolean | Client$schedulingsArgs<ExtArgs>
    _count?: boolean | ClientCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ClientIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }
  export type ClientIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    telephone?: boolean | TelephoneDefaultArgs<ExtArgs>
    address?: boolean | AddressDefaultArgs<ExtArgs>
  }

  export type $ClientPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Client"
    objects: {
      telephone: Prisma.$TelephonePayload<ExtArgs>
      address: Prisma.$AddressPayload<ExtArgs>
      schedulings: Prisma.$SchedulingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: number
      name: string
      photo: string | null
      email: string
      telephone_id: number
      address_id: number
    }, ExtArgs["result"]["client"]>
    composites: {}
  }

  type ClientGetPayload<S extends boolean | null | undefined | ClientDefaultArgs> = $Result.GetResult<Prisma.$ClientPayload, S>

  type ClientCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ClientFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ClientCountAggregateInputType | true
    }

  export interface ClientDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Client'], meta: { name: 'Client' } }
    /**
     * Find zero or one Client that matches the filter.
     * @param {ClientFindUniqueArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ClientFindUniqueArgs>(args: SelectSubset<T, ClientFindUniqueArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Client that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ClientFindUniqueOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ClientFindUniqueOrThrowArgs>(args: SelectSubset<T, ClientFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ClientFindFirstArgs>(args?: SelectSubset<T, ClientFindFirstArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Client that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindFirstOrThrowArgs} args - Arguments to find a Client
     * @example
     * // Get one Client
     * const client = await prisma.client.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ClientFindFirstOrThrowArgs>(args?: SelectSubset<T, ClientFindFirstOrThrowArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Clients that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Clients
     * const clients = await prisma.client.findMany()
     * 
     * // Get first 10 Clients
     * const clients = await prisma.client.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const clientWithIdOnly = await prisma.client.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ClientFindManyArgs>(args?: SelectSubset<T, ClientFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Client.
     * @param {ClientCreateArgs} args - Arguments to create a Client.
     * @example
     * // Create one Client
     * const Client = await prisma.client.create({
     *   data: {
     *     // ... data to create a Client
     *   }
     * })
     * 
     */
    create<T extends ClientCreateArgs>(args: SelectSubset<T, ClientCreateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Clients.
     * @param {ClientCreateManyArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ClientCreateManyArgs>(args?: SelectSubset<T, ClientCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Clients and returns the data saved in the database.
     * @param {ClientCreateManyAndReturnArgs} args - Arguments to create many Clients.
     * @example
     * // Create many Clients
     * const client = await prisma.client.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ClientCreateManyAndReturnArgs>(args?: SelectSubset<T, ClientCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Client.
     * @param {ClientDeleteArgs} args - Arguments to delete one Client.
     * @example
     * // Delete one Client
     * const Client = await prisma.client.delete({
     *   where: {
     *     // ... filter to delete one Client
     *   }
     * })
     * 
     */
    delete<T extends ClientDeleteArgs>(args: SelectSubset<T, ClientDeleteArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Client.
     * @param {ClientUpdateArgs} args - Arguments to update one Client.
     * @example
     * // Update one Client
     * const client = await prisma.client.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ClientUpdateArgs>(args: SelectSubset<T, ClientUpdateArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Clients.
     * @param {ClientDeleteManyArgs} args - Arguments to filter Clients to delete.
     * @example
     * // Delete a few Clients
     * const { count } = await prisma.client.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ClientDeleteManyArgs>(args?: SelectSubset<T, ClientDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ClientUpdateManyArgs>(args: SelectSubset<T, ClientUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Clients and returns the data updated in the database.
     * @param {ClientUpdateManyAndReturnArgs} args - Arguments to update many Clients.
     * @example
     * // Update many Clients
     * const client = await prisma.client.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Clients and only return the `id`
     * const clientWithIdOnly = await prisma.client.updateManyAndReturn({
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
    updateManyAndReturn<T extends ClientUpdateManyAndReturnArgs>(args: SelectSubset<T, ClientUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Client.
     * @param {ClientUpsertArgs} args - Arguments to update or create a Client.
     * @example
     * // Update or create a Client
     * const client = await prisma.client.upsert({
     *   create: {
     *     // ... data to create a Client
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Client we want to update
     *   }
     * })
     */
    upsert<T extends ClientUpsertArgs>(args: SelectSubset<T, ClientUpsertArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Clients.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientCountArgs} args - Arguments to filter Clients to count.
     * @example
     * // Count the number of Clients
     * const count = await prisma.client.count({
     *   where: {
     *     // ... the filter for the Clients we want to count
     *   }
     * })
    **/
    count<T extends ClientCountArgs>(
      args?: Subset<T, ClientCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ClientCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ClientAggregateArgs>(args: Subset<T, ClientAggregateArgs>): Prisma.PrismaPromise<GetClientAggregateType<T>>

    /**
     * Group by Client.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ClientGroupByArgs} args - Group by arguments.
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
      T extends ClientGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ClientGroupByArgs['orderBy'] }
        : { orderBy?: ClientGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ClientGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetClientGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Client model
   */
  readonly fields: ClientFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Client.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ClientClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    telephone<T extends TelephoneDefaultArgs<ExtArgs> = {}>(args?: Subset<T, TelephoneDefaultArgs<ExtArgs>>): Prisma__TelephoneClient<$Result.GetResult<Prisma.$TelephonePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    address<T extends AddressDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AddressDefaultArgs<ExtArgs>>): Prisma__AddressClient<$Result.GetResult<Prisma.$AddressPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    schedulings<T extends Client$schedulingsArgs<ExtArgs> = {}>(args?: Subset<T, Client$schedulingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Client model
   */
  interface ClientFieldRefs {
    readonly id: FieldRef<"Client", 'Int'>
    readonly name: FieldRef<"Client", 'String'>
    readonly photo: FieldRef<"Client", 'String'>
    readonly email: FieldRef<"Client", 'String'>
    readonly telephone_id: FieldRef<"Client", 'Int'>
    readonly address_id: FieldRef<"Client", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Client findUnique
   */
  export type ClientFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findUniqueOrThrow
   */
  export type ClientFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client findFirst
   */
  export type ClientFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findFirstOrThrow
   */
  export type ClientFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Client to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Clients.
     */
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client findMany
   */
  export type ClientFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter, which Clients to fetch.
     */
    where?: ClientWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Clients to fetch.
     */
    orderBy?: ClientOrderByWithRelationInput | ClientOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Clients.
     */
    cursor?: ClientWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Clients from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Clients.
     */
    skip?: number
    distinct?: ClientScalarFieldEnum | ClientScalarFieldEnum[]
  }

  /**
   * Client create
   */
  export type ClientCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to create a Client.
     */
    data: XOR<ClientCreateInput, ClientUncheckedCreateInput>
  }

  /**
   * Client createMany
   */
  export type ClientCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Client createManyAndReturn
   */
  export type ClientCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to create many Clients.
     */
    data: ClientCreateManyInput | ClientCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client update
   */
  export type ClientUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The data needed to update a Client.
     */
    data: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
    /**
     * Choose, which Client to update.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client updateMany
   */
  export type ClientUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
  }

  /**
   * Client updateManyAndReturn
   */
  export type ClientUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * The data used to update Clients.
     */
    data: XOR<ClientUpdateManyMutationInput, ClientUncheckedUpdateManyInput>
    /**
     * Filter which Clients to update
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Client upsert
   */
  export type ClientUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * The filter to search for the Client to update in case it exists.
     */
    where: ClientWhereUniqueInput
    /**
     * In case the Client found by the `where` argument doesn't exist, create a new Client with this data.
     */
    create: XOR<ClientCreateInput, ClientUncheckedCreateInput>
    /**
     * In case the Client was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ClientUpdateInput, ClientUncheckedUpdateInput>
  }

  /**
   * Client delete
   */
  export type ClientDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
    /**
     * Filter which Client to delete.
     */
    where: ClientWhereUniqueInput
  }

  /**
   * Client deleteMany
   */
  export type ClientDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Clients to delete
     */
    where?: ClientWhereInput
    /**
     * Limit how many Clients to delete.
     */
    limit?: number
  }

  /**
   * Client.schedulings
   */
  export type Client$schedulingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    cursor?: SchedulingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Client without action
   */
  export type ClientDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Client
     */
    select?: ClientSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Client
     */
    omit?: ClientOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ClientInclude<ExtArgs> | null
  }


  /**
   * Model Scheduling
   */

  export type AggregateScheduling = {
    _count: SchedulingCountAggregateOutputType | null
    _avg: SchedulingAvgAggregateOutputType | null
    _sum: SchedulingSumAggregateOutputType | null
    _min: SchedulingMinAggregateOutputType | null
    _max: SchedulingMaxAggregateOutputType | null
  }

  export type SchedulingAvgAggregateOutputType = {
    client_id: number | null
    employee_id: number | null
    service_id: number | null
    establishment_id: number | null
  }

  export type SchedulingSumAggregateOutputType = {
    client_id: number | null
    employee_id: number | null
    service_id: number | null
    establishment_id: number | null
  }

  export type SchedulingMinAggregateOutputType = {
    id: string | null
    time: Date | null
    stats: $Enums.Stats | null
    note: string | null
    client_id: number | null
    employee_id: number | null
    service_id: number | null
    establishment_id: number | null
  }

  export type SchedulingMaxAggregateOutputType = {
    id: string | null
    time: Date | null
    stats: $Enums.Stats | null
    note: string | null
    client_id: number | null
    employee_id: number | null
    service_id: number | null
    establishment_id: number | null
  }

  export type SchedulingCountAggregateOutputType = {
    id: number
    time: number
    stats: number
    note: number
    client_id: number
    employee_id: number
    service_id: number
    establishment_id: number
    _all: number
  }


  export type SchedulingAvgAggregateInputType = {
    client_id?: true
    employee_id?: true
    service_id?: true
    establishment_id?: true
  }

  export type SchedulingSumAggregateInputType = {
    client_id?: true
    employee_id?: true
    service_id?: true
    establishment_id?: true
  }

  export type SchedulingMinAggregateInputType = {
    id?: true
    time?: true
    stats?: true
    note?: true
    client_id?: true
    employee_id?: true
    service_id?: true
    establishment_id?: true
  }

  export type SchedulingMaxAggregateInputType = {
    id?: true
    time?: true
    stats?: true
    note?: true
    client_id?: true
    employee_id?: true
    service_id?: true
    establishment_id?: true
  }

  export type SchedulingCountAggregateInputType = {
    id?: true
    time?: true
    stats?: true
    note?: true
    client_id?: true
    employee_id?: true
    service_id?: true
    establishment_id?: true
    _all?: true
  }

  export type SchedulingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Scheduling to aggregate.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Schedulings
    **/
    _count?: true | SchedulingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SchedulingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SchedulingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SchedulingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SchedulingMaxAggregateInputType
  }

  export type GetSchedulingAggregateType<T extends SchedulingAggregateArgs> = {
        [P in keyof T & keyof AggregateScheduling]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateScheduling[P]>
      : GetScalarType<T[P], AggregateScheduling[P]>
  }




  export type SchedulingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SchedulingWhereInput
    orderBy?: SchedulingOrderByWithAggregationInput | SchedulingOrderByWithAggregationInput[]
    by: SchedulingScalarFieldEnum[] | SchedulingScalarFieldEnum
    having?: SchedulingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SchedulingCountAggregateInputType | true
    _avg?: SchedulingAvgAggregateInputType
    _sum?: SchedulingSumAggregateInputType
    _min?: SchedulingMinAggregateInputType
    _max?: SchedulingMaxAggregateInputType
  }

  export type SchedulingGroupByOutputType = {
    id: string
    time: Date
    stats: $Enums.Stats
    note: string | null
    client_id: number
    employee_id: number
    service_id: number
    establishment_id: number
    _count: SchedulingCountAggregateOutputType | null
    _avg: SchedulingAvgAggregateOutputType | null
    _sum: SchedulingSumAggregateOutputType | null
    _min: SchedulingMinAggregateOutputType | null
    _max: SchedulingMaxAggregateOutputType | null
  }

  type GetSchedulingGroupByPayload<T extends SchedulingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SchedulingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SchedulingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SchedulingGroupByOutputType[P]>
            : GetScalarType<T[P], SchedulingGroupByOutputType[P]>
        }
      >
    >


  export type SchedulingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    stats?: boolean
    note?: boolean
    client_id?: boolean
    employee_id?: boolean
    service_id?: boolean
    establishment_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    service?: boolean | ServicessDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    stats?: boolean
    note?: boolean
    client_id?: boolean
    employee_id?: boolean
    service_id?: boolean
    establishment_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    service?: boolean | ServicessDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    time?: boolean
    stats?: boolean
    note?: boolean
    client_id?: boolean
    employee_id?: boolean
    service_id?: boolean
    establishment_id?: boolean
    client?: boolean | ClientDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    service?: boolean | ServicessDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["scheduling"]>

  export type SchedulingSelectScalar = {
    id?: boolean
    time?: boolean
    stats?: boolean
    note?: boolean
    client_id?: boolean
    employee_id?: boolean
    service_id?: boolean
    establishment_id?: boolean
  }

  export type SchedulingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "time" | "stats" | "note" | "client_id" | "employee_id" | "service_id" | "establishment_id", ExtArgs["result"]["scheduling"]>
  export type SchedulingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    service?: boolean | ServicessDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }
  export type SchedulingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    service?: boolean | ServicessDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }
  export type SchedulingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    client?: boolean | ClientDefaultArgs<ExtArgs>
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
    service?: boolean | ServicessDefaultArgs<ExtArgs>
    establishment?: boolean | EstablishmentDefaultArgs<ExtArgs>
  }

  export type $SchedulingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Scheduling"
    objects: {
      client: Prisma.$ClientPayload<ExtArgs>
      employee: Prisma.$EmployeePayload<ExtArgs>
      service: Prisma.$ServicessPayload<ExtArgs>
      establishment: Prisma.$EstablishmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      time: Date
      stats: $Enums.Stats
      note: string | null
      client_id: number
      employee_id: number
      service_id: number
      establishment_id: number
    }, ExtArgs["result"]["scheduling"]>
    composites: {}
  }

  type SchedulingGetPayload<S extends boolean | null | undefined | SchedulingDefaultArgs> = $Result.GetResult<Prisma.$SchedulingPayload, S>

  type SchedulingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SchedulingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SchedulingCountAggregateInputType | true
    }

  export interface SchedulingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Scheduling'], meta: { name: 'Scheduling' } }
    /**
     * Find zero or one Scheduling that matches the filter.
     * @param {SchedulingFindUniqueArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SchedulingFindUniqueArgs>(args: SelectSubset<T, SchedulingFindUniqueArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Scheduling that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SchedulingFindUniqueOrThrowArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SchedulingFindUniqueOrThrowArgs>(args: SelectSubset<T, SchedulingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindFirstArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SchedulingFindFirstArgs>(args?: SelectSubset<T, SchedulingFindFirstArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Scheduling that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindFirstOrThrowArgs} args - Arguments to find a Scheduling
     * @example
     * // Get one Scheduling
     * const scheduling = await prisma.scheduling.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SchedulingFindFirstOrThrowArgs>(args?: SelectSubset<T, SchedulingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Schedulings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Schedulings
     * const schedulings = await prisma.scheduling.findMany()
     * 
     * // Get first 10 Schedulings
     * const schedulings = await prisma.scheduling.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SchedulingFindManyArgs>(args?: SelectSubset<T, SchedulingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Scheduling.
     * @param {SchedulingCreateArgs} args - Arguments to create a Scheduling.
     * @example
     * // Create one Scheduling
     * const Scheduling = await prisma.scheduling.create({
     *   data: {
     *     // ... data to create a Scheduling
     *   }
     * })
     * 
     */
    create<T extends SchedulingCreateArgs>(args: SelectSubset<T, SchedulingCreateArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Schedulings.
     * @param {SchedulingCreateManyArgs} args - Arguments to create many Schedulings.
     * @example
     * // Create many Schedulings
     * const scheduling = await prisma.scheduling.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SchedulingCreateManyArgs>(args?: SelectSubset<T, SchedulingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Schedulings and returns the data saved in the database.
     * @param {SchedulingCreateManyAndReturnArgs} args - Arguments to create many Schedulings.
     * @example
     * // Create many Schedulings
     * const scheduling = await prisma.scheduling.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Schedulings and only return the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SchedulingCreateManyAndReturnArgs>(args?: SelectSubset<T, SchedulingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Scheduling.
     * @param {SchedulingDeleteArgs} args - Arguments to delete one Scheduling.
     * @example
     * // Delete one Scheduling
     * const Scheduling = await prisma.scheduling.delete({
     *   where: {
     *     // ... filter to delete one Scheduling
     *   }
     * })
     * 
     */
    delete<T extends SchedulingDeleteArgs>(args: SelectSubset<T, SchedulingDeleteArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Scheduling.
     * @param {SchedulingUpdateArgs} args - Arguments to update one Scheduling.
     * @example
     * // Update one Scheduling
     * const scheduling = await prisma.scheduling.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SchedulingUpdateArgs>(args: SelectSubset<T, SchedulingUpdateArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Schedulings.
     * @param {SchedulingDeleteManyArgs} args - Arguments to filter Schedulings to delete.
     * @example
     * // Delete a few Schedulings
     * const { count } = await prisma.scheduling.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SchedulingDeleteManyArgs>(args?: SelectSubset<T, SchedulingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Schedulings
     * const scheduling = await prisma.scheduling.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SchedulingUpdateManyArgs>(args: SelectSubset<T, SchedulingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Schedulings and returns the data updated in the database.
     * @param {SchedulingUpdateManyAndReturnArgs} args - Arguments to update many Schedulings.
     * @example
     * // Update many Schedulings
     * const scheduling = await prisma.scheduling.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Schedulings and only return the `id`
     * const schedulingWithIdOnly = await prisma.scheduling.updateManyAndReturn({
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
    updateManyAndReturn<T extends SchedulingUpdateManyAndReturnArgs>(args: SelectSubset<T, SchedulingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Scheduling.
     * @param {SchedulingUpsertArgs} args - Arguments to update or create a Scheduling.
     * @example
     * // Update or create a Scheduling
     * const scheduling = await prisma.scheduling.upsert({
     *   create: {
     *     // ... data to create a Scheduling
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Scheduling we want to update
     *   }
     * })
     */
    upsert<T extends SchedulingUpsertArgs>(args: SelectSubset<T, SchedulingUpsertArgs<ExtArgs>>): Prisma__SchedulingClient<$Result.GetResult<Prisma.$SchedulingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Schedulings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingCountArgs} args - Arguments to filter Schedulings to count.
     * @example
     * // Count the number of Schedulings
     * const count = await prisma.scheduling.count({
     *   where: {
     *     // ... the filter for the Schedulings we want to count
     *   }
     * })
    **/
    count<T extends SchedulingCountArgs>(
      args?: Subset<T, SchedulingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SchedulingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Scheduling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends SchedulingAggregateArgs>(args: Subset<T, SchedulingAggregateArgs>): Prisma.PrismaPromise<GetSchedulingAggregateType<T>>

    /**
     * Group by Scheduling.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SchedulingGroupByArgs} args - Group by arguments.
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
      T extends SchedulingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SchedulingGroupByArgs['orderBy'] }
        : { orderBy?: SchedulingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, SchedulingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSchedulingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Scheduling model
   */
  readonly fields: SchedulingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Scheduling.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SchedulingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    client<T extends ClientDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ClientDefaultArgs<ExtArgs>>): Prisma__ClientClient<$Result.GetResult<Prisma.$ClientPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    service<T extends ServicessDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ServicessDefaultArgs<ExtArgs>>): Prisma__ServicessClient<$Result.GetResult<Prisma.$ServicessPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    establishment<T extends EstablishmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EstablishmentDefaultArgs<ExtArgs>>): Prisma__EstablishmentClient<$Result.GetResult<Prisma.$EstablishmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Scheduling model
   */
  interface SchedulingFieldRefs {
    readonly id: FieldRef<"Scheduling", 'String'>
    readonly time: FieldRef<"Scheduling", 'DateTime'>
    readonly stats: FieldRef<"Scheduling", 'Stats'>
    readonly note: FieldRef<"Scheduling", 'String'>
    readonly client_id: FieldRef<"Scheduling", 'Int'>
    readonly employee_id: FieldRef<"Scheduling", 'Int'>
    readonly service_id: FieldRef<"Scheduling", 'Int'>
    readonly establishment_id: FieldRef<"Scheduling", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Scheduling findUnique
   */
  export type SchedulingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling findUniqueOrThrow
   */
  export type SchedulingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling findFirst
   */
  export type SchedulingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulings.
     */
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling findFirstOrThrow
   */
  export type SchedulingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Scheduling to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Schedulings.
     */
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling findMany
   */
  export type SchedulingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter, which Schedulings to fetch.
     */
    where?: SchedulingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Schedulings to fetch.
     */
    orderBy?: SchedulingOrderByWithRelationInput | SchedulingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Schedulings.
     */
    cursor?: SchedulingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Schedulings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Schedulings.
     */
    skip?: number
    distinct?: SchedulingScalarFieldEnum | SchedulingScalarFieldEnum[]
  }

  /**
   * Scheduling create
   */
  export type SchedulingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The data needed to create a Scheduling.
     */
    data: XOR<SchedulingCreateInput, SchedulingUncheckedCreateInput>
  }

  /**
   * Scheduling createMany
   */
  export type SchedulingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Schedulings.
     */
    data: SchedulingCreateManyInput | SchedulingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Scheduling createManyAndReturn
   */
  export type SchedulingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * The data used to create many Schedulings.
     */
    data: SchedulingCreateManyInput | SchedulingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scheduling update
   */
  export type SchedulingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The data needed to update a Scheduling.
     */
    data: XOR<SchedulingUpdateInput, SchedulingUncheckedUpdateInput>
    /**
     * Choose, which Scheduling to update.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling updateMany
   */
  export type SchedulingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Schedulings.
     */
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyInput>
    /**
     * Filter which Schedulings to update
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to update.
     */
    limit?: number
  }

  /**
   * Scheduling updateManyAndReturn
   */
  export type SchedulingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * The data used to update Schedulings.
     */
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyInput>
    /**
     * Filter which Schedulings to update
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Scheduling upsert
   */
  export type SchedulingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * The filter to search for the Scheduling to update in case it exists.
     */
    where: SchedulingWhereUniqueInput
    /**
     * In case the Scheduling found by the `where` argument doesn't exist, create a new Scheduling with this data.
     */
    create: XOR<SchedulingCreateInput, SchedulingUncheckedCreateInput>
    /**
     * In case the Scheduling was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SchedulingUpdateInput, SchedulingUncheckedUpdateInput>
  }

  /**
   * Scheduling delete
   */
  export type SchedulingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
    /**
     * Filter which Scheduling to delete.
     */
    where: SchedulingWhereUniqueInput
  }

  /**
   * Scheduling deleteMany
   */
  export type SchedulingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Schedulings to delete
     */
    where?: SchedulingWhereInput
    /**
     * Limit how many Schedulings to delete.
     */
    limit?: number
  }

  /**
   * Scheduling without action
   */
  export type SchedulingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Scheduling
     */
    select?: SchedulingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Scheduling
     */
    omit?: SchedulingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SchedulingInclude<ExtArgs> | null
  }


  /**
   * Model Reviews
   */

  export type AggregateReviews = {
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  export type ReviewsAvgAggregateOutputType = {
    rating: number | null
    employee_id: number | null
  }

  export type ReviewsSumAggregateOutputType = {
    rating: number | null
    employee_id: number | null
  }

  export type ReviewsMinAggregateOutputType = {
    id: string | null
    rating: number | null
    message: string | null
    employee_id: number | null
  }

  export type ReviewsMaxAggregateOutputType = {
    id: string | null
    rating: number | null
    message: string | null
    employee_id: number | null
  }

  export type ReviewsCountAggregateOutputType = {
    id: number
    rating: number
    message: number
    employee_id: number
    _all: number
  }


  export type ReviewsAvgAggregateInputType = {
    rating?: true
    employee_id?: true
  }

  export type ReviewsSumAggregateInputType = {
    rating?: true
    employee_id?: true
  }

  export type ReviewsMinAggregateInputType = {
    id?: true
    rating?: true
    message?: true
    employee_id?: true
  }

  export type ReviewsMaxAggregateInputType = {
    id?: true
    rating?: true
    message?: true
    employee_id?: true
  }

  export type ReviewsCountAggregateInputType = {
    id?: true
    rating?: true
    message?: true
    employee_id?: true
    _all?: true
  }

  export type ReviewsAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to aggregate.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewsCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewsAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewsSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewsMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewsMaxAggregateInputType
  }

  export type GetReviewsAggregateType<T extends ReviewsAggregateArgs> = {
        [P in keyof T & keyof AggregateReviews]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReviews[P]>
      : GetScalarType<T[P], AggregateReviews[P]>
  }




  export type ReviewsGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewsWhereInput
    orderBy?: ReviewsOrderByWithAggregationInput | ReviewsOrderByWithAggregationInput[]
    by: ReviewsScalarFieldEnum[] | ReviewsScalarFieldEnum
    having?: ReviewsScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewsCountAggregateInputType | true
    _avg?: ReviewsAvgAggregateInputType
    _sum?: ReviewsSumAggregateInputType
    _min?: ReviewsMinAggregateInputType
    _max?: ReviewsMaxAggregateInputType
  }

  export type ReviewsGroupByOutputType = {
    id: string
    rating: number
    message: string
    employee_id: number
    _count: ReviewsCountAggregateOutputType | null
    _avg: ReviewsAvgAggregateOutputType | null
    _sum: ReviewsSumAggregateOutputType | null
    _min: ReviewsMinAggregateOutputType | null
    _max: ReviewsMaxAggregateOutputType | null
  }

  type GetReviewsGroupByPayload<T extends ReviewsGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewsGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewsGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewsGroupByOutputType[P]>
        }
      >
    >


  export type ReviewsSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    message?: boolean
    employee_id?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    message?: boolean
    employee_id?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    rating?: boolean
    message?: boolean
    employee_id?: boolean
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["reviews"]>

  export type ReviewsSelectScalar = {
    id?: boolean
    rating?: boolean
    message?: boolean
    employee_id?: boolean
  }

  export type ReviewsOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "rating" | "message" | "employee_id", ExtArgs["result"]["reviews"]>
  export type ReviewsInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }
  export type ReviewsIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    employee?: boolean | EmployeeDefaultArgs<ExtArgs>
  }

  export type $ReviewsPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Reviews"
    objects: {
      employee: Prisma.$EmployeePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      rating: number
      message: string
      employee_id: number
    }, ExtArgs["result"]["reviews"]>
    composites: {}
  }

  type ReviewsGetPayload<S extends boolean | null | undefined | ReviewsDefaultArgs> = $Result.GetResult<Prisma.$ReviewsPayload, S>

  type ReviewsCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewsFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewsCountAggregateInputType | true
    }

  export interface ReviewsDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Reviews'], meta: { name: 'Reviews' } }
    /**
     * Find zero or one Reviews that matches the filter.
     * @param {ReviewsFindUniqueArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewsFindUniqueArgs>(args: SelectSubset<T, ReviewsFindUniqueArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Reviews that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewsFindUniqueOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewsFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewsFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewsFindFirstArgs>(args?: SelectSubset<T, ReviewsFindFirstArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Reviews that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindFirstOrThrowArgs} args - Arguments to find a Reviews
     * @example
     * // Get one Reviews
     * const reviews = await prisma.reviews.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewsFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewsFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.reviews.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.reviews.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewsWithIdOnly = await prisma.reviews.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewsFindManyArgs>(args?: SelectSubset<T, ReviewsFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Reviews.
     * @param {ReviewsCreateArgs} args - Arguments to create a Reviews.
     * @example
     * // Create one Reviews
     * const Reviews = await prisma.reviews.create({
     *   data: {
     *     // ... data to create a Reviews
     *   }
     * })
     * 
     */
    create<T extends ReviewsCreateArgs>(args: SelectSubset<T, ReviewsCreateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewsCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewsCreateManyArgs>(args?: SelectSubset<T, ReviewsCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewsCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const reviews = await prisma.reviews.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewsCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewsCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Reviews.
     * @param {ReviewsDeleteArgs} args - Arguments to delete one Reviews.
     * @example
     * // Delete one Reviews
     * const Reviews = await prisma.reviews.delete({
     *   where: {
     *     // ... filter to delete one Reviews
     *   }
     * })
     * 
     */
    delete<T extends ReviewsDeleteArgs>(args: SelectSubset<T, ReviewsDeleteArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Reviews.
     * @param {ReviewsUpdateArgs} args - Arguments to update one Reviews.
     * @example
     * // Update one Reviews
     * const reviews = await prisma.reviews.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewsUpdateArgs>(args: SelectSubset<T, ReviewsUpdateArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewsDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.reviews.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewsDeleteManyArgs>(args?: SelectSubset<T, ReviewsDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewsUpdateManyArgs>(args: SelectSubset<T, ReviewsUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewsUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const reviews = await prisma.reviews.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewsWithIdOnly = await prisma.reviews.updateManyAndReturn({
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
    updateManyAndReturn<T extends ReviewsUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewsUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Reviews.
     * @param {ReviewsUpsertArgs} args - Arguments to update or create a Reviews.
     * @example
     * // Update or create a Reviews
     * const reviews = await prisma.reviews.upsert({
     *   create: {
     *     // ... data to create a Reviews
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Reviews we want to update
     *   }
     * })
     */
    upsert<T extends ReviewsUpsertArgs>(args: SelectSubset<T, ReviewsUpsertArgs<ExtArgs>>): Prisma__ReviewsClient<$Result.GetResult<Prisma.$ReviewsPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.reviews.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewsCountArgs>(
      args?: Subset<T, ReviewsCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewsCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends ReviewsAggregateArgs>(args: Subset<T, ReviewsAggregateArgs>): Prisma.PrismaPromise<GetReviewsAggregateType<T>>

    /**
     * Group by Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewsGroupByArgs} args - Group by arguments.
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
      T extends ReviewsGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewsGroupByArgs['orderBy'] }
        : { orderBy?: ReviewsGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, ReviewsGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewsGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Reviews model
   */
  readonly fields: ReviewsFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Reviews.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewsClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    employee<T extends EmployeeDefaultArgs<ExtArgs> = {}>(args?: Subset<T, EmployeeDefaultArgs<ExtArgs>>): Prisma__EmployeeClient<$Result.GetResult<Prisma.$EmployeePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Reviews model
   */
  interface ReviewsFieldRefs {
    readonly id: FieldRef<"Reviews", 'String'>
    readonly rating: FieldRef<"Reviews", 'Int'>
    readonly message: FieldRef<"Reviews", 'String'>
    readonly employee_id: FieldRef<"Reviews", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * Reviews findUnique
   */
  export type ReviewsFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findUniqueOrThrow
   */
  export type ReviewsFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews findFirst
   */
  export type ReviewsFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findFirstOrThrow
   */
  export type ReviewsFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews findMany
   */
  export type ReviewsFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewsWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewsOrderByWithRelationInput | ReviewsOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewsWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewsScalarFieldEnum | ReviewsScalarFieldEnum[]
  }

  /**
   * Reviews create
   */
  export type ReviewsCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to create a Reviews.
     */
    data: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
  }

  /**
   * Reviews createMany
   */
  export type ReviewsCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Reviews createManyAndReturn
   */
  export type ReviewsCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewsCreateManyInput | ReviewsCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews update
   */
  export type ReviewsUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The data needed to update a Reviews.
     */
    data: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
    /**
     * Choose, which Reviews to update.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews updateMany
   */
  export type ReviewsUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Reviews updateManyAndReturn
   */
  export type ReviewsUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Reviews upsert
   */
  export type ReviewsUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * The filter to search for the Reviews to update in case it exists.
     */
    where: ReviewsWhereUniqueInput
    /**
     * In case the Reviews found by the `where` argument doesn't exist, create a new Reviews with this data.
     */
    create: XOR<ReviewsCreateInput, ReviewsUncheckedCreateInput>
    /**
     * In case the Reviews was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewsUpdateInput, ReviewsUncheckedUpdateInput>
  }

  /**
   * Reviews delete
   */
  export type ReviewsDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
    /**
     * Filter which Reviews to delete.
     */
    where: ReviewsWhereUniqueInput
  }

  /**
   * Reviews deleteMany
   */
  export type ReviewsDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewsWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Reviews without action
   */
  export type ReviewsDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Reviews
     */
    select?: ReviewsSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Reviews
     */
    omit?: ReviewsOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewsInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    message: string | null
    date: Date | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    message: string | null
    date: Date | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    message: number
    date: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    message?: true
    date?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    message?: true
    date?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    message?: true
    date?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    message: string
    date: Date
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    date?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    date?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    message?: boolean
    date?: boolean
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    message?: boolean
    date?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "message" | "date", ExtArgs["result"]["notification"]>

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {}
    scalars: $Extensions.GetPayloadResult<{
      id: string
      message: string
      date: Date
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly date: FieldRef<"Notification", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
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


  export const AddressScalarFieldEnum: {
    id: 'id',
    country: 'country',
    state: 'state',
    city: 'city',
    neighborhood: 'neighborhood',
    public_place: 'public_place'
  };

  export type AddressScalarFieldEnum = (typeof AddressScalarFieldEnum)[keyof typeof AddressScalarFieldEnum]


  export const TelephoneScalarFieldEnum: {
    id: 'id',
    number: 'number'
  };

  export type TelephoneScalarFieldEnum = (typeof TelephoneScalarFieldEnum)[keyof typeof TelephoneScalarFieldEnum]


  export const EstablishmentScalarFieldEnum: {
    id: 'id',
    trade_name: 'trade_name',
    cnpj: 'cnpj',
    opening_hours: 'opening_hours',
    closing_hours: 'closing_hours',
    telephone_id: 'telephone_id',
    address_id: 'address_id'
  };

  export type EstablishmentScalarFieldEnum = (typeof EstablishmentScalarFieldEnum)[keyof typeof EstablishmentScalarFieldEnum]


  export const ServicessScalarFieldEnum: {
    id: 'id',
    name: 'name',
    price: 'price',
    description: 'description',
    duration: 'duration'
  };

  export type ServicessScalarFieldEnum = (typeof ServicessScalarFieldEnum)[keyof typeof ServicessScalarFieldEnum]


  export const EmployeeScalarFieldEnum: {
    id: 'id',
    name: 'name',
    photo: 'photo',
    specialty: 'specialty',
    email: 'email',
    cpf: 'cpf',
    telephone_id: 'telephone_id',
    address_id: 'address_id',
    establishment_id: 'establishment_id'
  };

  export type EmployeeScalarFieldEnum = (typeof EmployeeScalarFieldEnum)[keyof typeof EmployeeScalarFieldEnum]


  export const ClientScalarFieldEnum: {
    id: 'id',
    name: 'name',
    photo: 'photo',
    email: 'email',
    telephone_id: 'telephone_id',
    address_id: 'address_id'
  };

  export type ClientScalarFieldEnum = (typeof ClientScalarFieldEnum)[keyof typeof ClientScalarFieldEnum]


  export const SchedulingScalarFieldEnum: {
    id: 'id',
    time: 'time',
    stats: 'stats',
    note: 'note',
    client_id: 'client_id',
    employee_id: 'employee_id',
    service_id: 'service_id',
    establishment_id: 'establishment_id'
  };

  export type SchedulingScalarFieldEnum = (typeof SchedulingScalarFieldEnum)[keyof typeof SchedulingScalarFieldEnum]


  export const ReviewsScalarFieldEnum: {
    id: 'id',
    rating: 'rating',
    message: 'message',
    employee_id: 'employee_id'
  };

  export type ReviewsScalarFieldEnum = (typeof ReviewsScalarFieldEnum)[keyof typeof ReviewsScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    message: 'message',
    date: 'date'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


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
   * Reference to a field of type 'Decimal'
   */
  export type DecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal'>
    


  /**
   * Reference to a field of type 'Decimal[]'
   */
  export type ListDecimalFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Decimal[]'>
    


  /**
   * Reference to a field of type 'Stats'
   */
  export type EnumStatsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Stats'>
    


  /**
   * Reference to a field of type 'Stats[]'
   */
  export type ListEnumStatsFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Stats[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type AddressWhereInput = {
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    id?: IntFilter<"Address"> | number
    country?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    neighborhood?: StringFilter<"Address"> | string
    public_place?: StringFilter<"Address"> | string
    establishment?: XOR<EstablishmentNullableScalarRelationFilter, EstablishmentWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }

  export type AddressOrderByWithRelationInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    public_place?: SortOrder
    establishment?: EstablishmentOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
  }

  export type AddressWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: AddressWhereInput | AddressWhereInput[]
    OR?: AddressWhereInput[]
    NOT?: AddressWhereInput | AddressWhereInput[]
    country?: StringFilter<"Address"> | string
    state?: StringFilter<"Address"> | string
    city?: StringFilter<"Address"> | string
    neighborhood?: StringFilter<"Address"> | string
    public_place?: StringFilter<"Address"> | string
    establishment?: XOR<EstablishmentNullableScalarRelationFilter, EstablishmentWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }, "id">

  export type AddressOrderByWithAggregationInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    public_place?: SortOrder
    _count?: AddressCountOrderByAggregateInput
    _avg?: AddressAvgOrderByAggregateInput
    _max?: AddressMaxOrderByAggregateInput
    _min?: AddressMinOrderByAggregateInput
    _sum?: AddressSumOrderByAggregateInput
  }

  export type AddressScalarWhereWithAggregatesInput = {
    AND?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    OR?: AddressScalarWhereWithAggregatesInput[]
    NOT?: AddressScalarWhereWithAggregatesInput | AddressScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Address"> | number
    country?: StringWithAggregatesFilter<"Address"> | string
    state?: StringWithAggregatesFilter<"Address"> | string
    city?: StringWithAggregatesFilter<"Address"> | string
    neighborhood?: StringWithAggregatesFilter<"Address"> | string
    public_place?: StringWithAggregatesFilter<"Address"> | string
  }

  export type TelephoneWhereInput = {
    AND?: TelephoneWhereInput | TelephoneWhereInput[]
    OR?: TelephoneWhereInput[]
    NOT?: TelephoneWhereInput | TelephoneWhereInput[]
    id?: IntFilter<"Telephone"> | number
    number?: StringFilter<"Telephone"> | string
    establishment?: XOR<EstablishmentNullableScalarRelationFilter, EstablishmentWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }

  export type TelephoneOrderByWithRelationInput = {
    id?: SortOrder
    number?: SortOrder
    establishment?: EstablishmentOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    client?: ClientOrderByWithRelationInput
  }

  export type TelephoneWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: TelephoneWhereInput | TelephoneWhereInput[]
    OR?: TelephoneWhereInput[]
    NOT?: TelephoneWhereInput | TelephoneWhereInput[]
    number?: StringFilter<"Telephone"> | string
    establishment?: XOR<EstablishmentNullableScalarRelationFilter, EstablishmentWhereInput> | null
    employee?: XOR<EmployeeNullableScalarRelationFilter, EmployeeWhereInput> | null
    client?: XOR<ClientNullableScalarRelationFilter, ClientWhereInput> | null
  }, "id">

  export type TelephoneOrderByWithAggregationInput = {
    id?: SortOrder
    number?: SortOrder
    _count?: TelephoneCountOrderByAggregateInput
    _avg?: TelephoneAvgOrderByAggregateInput
    _max?: TelephoneMaxOrderByAggregateInput
    _min?: TelephoneMinOrderByAggregateInput
    _sum?: TelephoneSumOrderByAggregateInput
  }

  export type TelephoneScalarWhereWithAggregatesInput = {
    AND?: TelephoneScalarWhereWithAggregatesInput | TelephoneScalarWhereWithAggregatesInput[]
    OR?: TelephoneScalarWhereWithAggregatesInput[]
    NOT?: TelephoneScalarWhereWithAggregatesInput | TelephoneScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Telephone"> | number
    number?: StringWithAggregatesFilter<"Telephone"> | string
  }

  export type EstablishmentWhereInput = {
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    id?: IntFilter<"Establishment"> | number
    trade_name?: StringFilter<"Establishment"> | string
    cnpj?: StringFilter<"Establishment"> | string
    opening_hours?: DateTimeFilter<"Establishment"> | Date | string
    closing_hours?: DateTimeFilter<"Establishment"> | Date | string
    telephone_id?: IntFilter<"Establishment"> | number
    address_id?: IntFilter<"Establishment"> | number
    telephone?: XOR<TelephoneScalarRelationFilter, TelephoneWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    employees?: EmployeeListRelationFilter
    schedulings?: SchedulingListRelationFilter
  }

  export type EstablishmentOrderByWithRelationInput = {
    id?: SortOrder
    trade_name?: SortOrder
    cnpj?: SortOrder
    opening_hours?: SortOrder
    closing_hours?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    telephone?: TelephoneOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    employees?: EmployeeOrderByRelationAggregateInput
    schedulings?: SchedulingOrderByRelationAggregateInput
  }

  export type EstablishmentWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    cnpj?: string
    telephone_id?: number
    address_id?: number
    AND?: EstablishmentWhereInput | EstablishmentWhereInput[]
    OR?: EstablishmentWhereInput[]
    NOT?: EstablishmentWhereInput | EstablishmentWhereInput[]
    trade_name?: StringFilter<"Establishment"> | string
    opening_hours?: DateTimeFilter<"Establishment"> | Date | string
    closing_hours?: DateTimeFilter<"Establishment"> | Date | string
    telephone?: XOR<TelephoneScalarRelationFilter, TelephoneWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    employees?: EmployeeListRelationFilter
    schedulings?: SchedulingListRelationFilter
  }, "id" | "cnpj" | "telephone_id" | "address_id">

  export type EstablishmentOrderByWithAggregationInput = {
    id?: SortOrder
    trade_name?: SortOrder
    cnpj?: SortOrder
    opening_hours?: SortOrder
    closing_hours?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    _count?: EstablishmentCountOrderByAggregateInput
    _avg?: EstablishmentAvgOrderByAggregateInput
    _max?: EstablishmentMaxOrderByAggregateInput
    _min?: EstablishmentMinOrderByAggregateInput
    _sum?: EstablishmentSumOrderByAggregateInput
  }

  export type EstablishmentScalarWhereWithAggregatesInput = {
    AND?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    OR?: EstablishmentScalarWhereWithAggregatesInput[]
    NOT?: EstablishmentScalarWhereWithAggregatesInput | EstablishmentScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Establishment"> | number
    trade_name?: StringWithAggregatesFilter<"Establishment"> | string
    cnpj?: StringWithAggregatesFilter<"Establishment"> | string
    opening_hours?: DateTimeWithAggregatesFilter<"Establishment"> | Date | string
    closing_hours?: DateTimeWithAggregatesFilter<"Establishment"> | Date | string
    telephone_id?: IntWithAggregatesFilter<"Establishment"> | number
    address_id?: IntWithAggregatesFilter<"Establishment"> | number
  }

  export type ServicessWhereInput = {
    AND?: ServicessWhereInput | ServicessWhereInput[]
    OR?: ServicessWhereInput[]
    NOT?: ServicessWhereInput | ServicessWhereInput[]
    id?: IntFilter<"Servicess"> | number
    name?: StringFilter<"Servicess"> | string
    price?: DecimalFilter<"Servicess"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Servicess"> | string
    duration?: IntFilter<"Servicess"> | number
    schedulings?: SchedulingListRelationFilter
  }

  export type ServicessOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    schedulings?: SchedulingOrderByRelationAggregateInput
  }

  export type ServicessWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: ServicessWhereInput | ServicessWhereInput[]
    OR?: ServicessWhereInput[]
    NOT?: ServicessWhereInput | ServicessWhereInput[]
    name?: StringFilter<"Servicess"> | string
    price?: DecimalFilter<"Servicess"> | Decimal | DecimalJsLike | number | string
    description?: StringFilter<"Servicess"> | string
    duration?: IntFilter<"Servicess"> | number
    schedulings?: SchedulingListRelationFilter
  }, "id">

  export type ServicessOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    duration?: SortOrder
    _count?: ServicessCountOrderByAggregateInput
    _avg?: ServicessAvgOrderByAggregateInput
    _max?: ServicessMaxOrderByAggregateInput
    _min?: ServicessMinOrderByAggregateInput
    _sum?: ServicessSumOrderByAggregateInput
  }

  export type ServicessScalarWhereWithAggregatesInput = {
    AND?: ServicessScalarWhereWithAggregatesInput | ServicessScalarWhereWithAggregatesInput[]
    OR?: ServicessScalarWhereWithAggregatesInput[]
    NOT?: ServicessScalarWhereWithAggregatesInput | ServicessScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Servicess"> | number
    name?: StringWithAggregatesFilter<"Servicess"> | string
    price?: DecimalWithAggregatesFilter<"Servicess"> | Decimal | DecimalJsLike | number | string
    description?: StringWithAggregatesFilter<"Servicess"> | string
    duration?: IntWithAggregatesFilter<"Servicess"> | number
  }

  export type EmployeeWhereInput = {
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    photo?: StringNullableFilter<"Employee"> | string | null
    specialty?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    cpf?: StringFilter<"Employee"> | string
    telephone_id?: IntFilter<"Employee"> | number
    address_id?: IntFilter<"Employee"> | number
    establishment_id?: IntFilter<"Employee"> | number
    telephone?: XOR<TelephoneScalarRelationFilter, TelephoneWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
    reviews?: ReviewsListRelationFilter
    schedulings?: SchedulingListRelationFilter
  }

  export type EmployeeOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrderInput | SortOrder
    specialty?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    establishment_id?: SortOrder
    telephone?: TelephoneOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    establishment?: EstablishmentOrderByWithRelationInput
    reviews?: ReviewsOrderByRelationAggregateInput
    schedulings?: SchedulingOrderByRelationAggregateInput
  }

  export type EmployeeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    cpf?: string
    telephone_id?: number
    address_id?: number
    AND?: EmployeeWhereInput | EmployeeWhereInput[]
    OR?: EmployeeWhereInput[]
    NOT?: EmployeeWhereInput | EmployeeWhereInput[]
    name?: StringFilter<"Employee"> | string
    photo?: StringNullableFilter<"Employee"> | string | null
    specialty?: StringFilter<"Employee"> | string
    establishment_id?: IntFilter<"Employee"> | number
    telephone?: XOR<TelephoneScalarRelationFilter, TelephoneWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
    reviews?: ReviewsListRelationFilter
    schedulings?: SchedulingListRelationFilter
  }, "id" | "email" | "cpf" | "telephone_id" | "address_id">

  export type EmployeeOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrderInput | SortOrder
    specialty?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    establishment_id?: SortOrder
    _count?: EmployeeCountOrderByAggregateInput
    _avg?: EmployeeAvgOrderByAggregateInput
    _max?: EmployeeMaxOrderByAggregateInput
    _min?: EmployeeMinOrderByAggregateInput
    _sum?: EmployeeSumOrderByAggregateInput
  }

  export type EmployeeScalarWhereWithAggregatesInput = {
    AND?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    OR?: EmployeeScalarWhereWithAggregatesInput[]
    NOT?: EmployeeScalarWhereWithAggregatesInput | EmployeeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Employee"> | number
    name?: StringWithAggregatesFilter<"Employee"> | string
    photo?: StringNullableWithAggregatesFilter<"Employee"> | string | null
    specialty?: StringWithAggregatesFilter<"Employee"> | string
    email?: StringWithAggregatesFilter<"Employee"> | string
    cpf?: StringWithAggregatesFilter<"Employee"> | string
    telephone_id?: IntWithAggregatesFilter<"Employee"> | number
    address_id?: IntWithAggregatesFilter<"Employee"> | number
    establishment_id?: IntWithAggregatesFilter<"Employee"> | number
  }

  export type ClientWhereInput = {
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    id?: IntFilter<"Client"> | number
    name?: StringFilter<"Client"> | string
    photo?: StringNullableFilter<"Client"> | string | null
    email?: StringFilter<"Client"> | string
    telephone_id?: IntFilter<"Client"> | number
    address_id?: IntFilter<"Client"> | number
    telephone?: XOR<TelephoneScalarRelationFilter, TelephoneWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    schedulings?: SchedulingListRelationFilter
  }

  export type ClientOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrderInput | SortOrder
    email?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    telephone?: TelephoneOrderByWithRelationInput
    address?: AddressOrderByWithRelationInput
    schedulings?: SchedulingOrderByRelationAggregateInput
  }

  export type ClientWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    email?: string
    telephone_id?: number
    address_id?: number
    AND?: ClientWhereInput | ClientWhereInput[]
    OR?: ClientWhereInput[]
    NOT?: ClientWhereInput | ClientWhereInput[]
    name?: StringFilter<"Client"> | string
    photo?: StringNullableFilter<"Client"> | string | null
    telephone?: XOR<TelephoneScalarRelationFilter, TelephoneWhereInput>
    address?: XOR<AddressScalarRelationFilter, AddressWhereInput>
    schedulings?: SchedulingListRelationFilter
  }, "id" | "email" | "telephone_id" | "address_id">

  export type ClientOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrderInput | SortOrder
    email?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    _count?: ClientCountOrderByAggregateInput
    _avg?: ClientAvgOrderByAggregateInput
    _max?: ClientMaxOrderByAggregateInput
    _min?: ClientMinOrderByAggregateInput
    _sum?: ClientSumOrderByAggregateInput
  }

  export type ClientScalarWhereWithAggregatesInput = {
    AND?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    OR?: ClientScalarWhereWithAggregatesInput[]
    NOT?: ClientScalarWhereWithAggregatesInput | ClientScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Client"> | number
    name?: StringWithAggregatesFilter<"Client"> | string
    photo?: StringNullableWithAggregatesFilter<"Client"> | string | null
    email?: StringWithAggregatesFilter<"Client"> | string
    telephone_id?: IntWithAggregatesFilter<"Client"> | number
    address_id?: IntWithAggregatesFilter<"Client"> | number
  }

  export type SchedulingWhereInput = {
    AND?: SchedulingWhereInput | SchedulingWhereInput[]
    OR?: SchedulingWhereInput[]
    NOT?: SchedulingWhereInput | SchedulingWhereInput[]
    id?: StringFilter<"Scheduling"> | string
    time?: DateTimeFilter<"Scheduling"> | Date | string
    stats?: EnumStatsFilter<"Scheduling"> | $Enums.Stats
    note?: StringNullableFilter<"Scheduling"> | string | null
    client_id?: IntFilter<"Scheduling"> | number
    employee_id?: IntFilter<"Scheduling"> | number
    service_id?: IntFilter<"Scheduling"> | number
    establishment_id?: IntFilter<"Scheduling"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    service?: XOR<ServicessScalarRelationFilter, ServicessWhereInput>
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
  }

  export type SchedulingOrderByWithRelationInput = {
    id?: SortOrder
    time?: SortOrder
    stats?: SortOrder
    note?: SortOrderInput | SortOrder
    client_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    establishment_id?: SortOrder
    client?: ClientOrderByWithRelationInput
    employee?: EmployeeOrderByWithRelationInput
    service?: ServicessOrderByWithRelationInput
    establishment?: EstablishmentOrderByWithRelationInput
  }

  export type SchedulingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SchedulingWhereInput | SchedulingWhereInput[]
    OR?: SchedulingWhereInput[]
    NOT?: SchedulingWhereInput | SchedulingWhereInput[]
    time?: DateTimeFilter<"Scheduling"> | Date | string
    stats?: EnumStatsFilter<"Scheduling"> | $Enums.Stats
    note?: StringNullableFilter<"Scheduling"> | string | null
    client_id?: IntFilter<"Scheduling"> | number
    employee_id?: IntFilter<"Scheduling"> | number
    service_id?: IntFilter<"Scheduling"> | number
    establishment_id?: IntFilter<"Scheduling"> | number
    client?: XOR<ClientScalarRelationFilter, ClientWhereInput>
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
    service?: XOR<ServicessScalarRelationFilter, ServicessWhereInput>
    establishment?: XOR<EstablishmentScalarRelationFilter, EstablishmentWhereInput>
  }, "id">

  export type SchedulingOrderByWithAggregationInput = {
    id?: SortOrder
    time?: SortOrder
    stats?: SortOrder
    note?: SortOrderInput | SortOrder
    client_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    establishment_id?: SortOrder
    _count?: SchedulingCountOrderByAggregateInput
    _avg?: SchedulingAvgOrderByAggregateInput
    _max?: SchedulingMaxOrderByAggregateInput
    _min?: SchedulingMinOrderByAggregateInput
    _sum?: SchedulingSumOrderByAggregateInput
  }

  export type SchedulingScalarWhereWithAggregatesInput = {
    AND?: SchedulingScalarWhereWithAggregatesInput | SchedulingScalarWhereWithAggregatesInput[]
    OR?: SchedulingScalarWhereWithAggregatesInput[]
    NOT?: SchedulingScalarWhereWithAggregatesInput | SchedulingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Scheduling"> | string
    time?: DateTimeWithAggregatesFilter<"Scheduling"> | Date | string
    stats?: EnumStatsWithAggregatesFilter<"Scheduling"> | $Enums.Stats
    note?: StringNullableWithAggregatesFilter<"Scheduling"> | string | null
    client_id?: IntWithAggregatesFilter<"Scheduling"> | number
    employee_id?: IntWithAggregatesFilter<"Scheduling"> | number
    service_id?: IntWithAggregatesFilter<"Scheduling"> | number
    establishment_id?: IntWithAggregatesFilter<"Scheduling"> | number
  }

  export type ReviewsWhereInput = {
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    id?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    message?: StringFilter<"Reviews"> | string
    employee_id?: IntFilter<"Reviews"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }

  export type ReviewsOrderByWithRelationInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    employee_id?: SortOrder
    employee?: EmployeeOrderByWithRelationInput
  }

  export type ReviewsWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewsWhereInput | ReviewsWhereInput[]
    OR?: ReviewsWhereInput[]
    NOT?: ReviewsWhereInput | ReviewsWhereInput[]
    rating?: IntFilter<"Reviews"> | number
    message?: StringFilter<"Reviews"> | string
    employee_id?: IntFilter<"Reviews"> | number
    employee?: XOR<EmployeeScalarRelationFilter, EmployeeWhereInput>
  }, "id">

  export type ReviewsOrderByWithAggregationInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    employee_id?: SortOrder
    _count?: ReviewsCountOrderByAggregateInput
    _avg?: ReviewsAvgOrderByAggregateInput
    _max?: ReviewsMaxOrderByAggregateInput
    _min?: ReviewsMinOrderByAggregateInput
    _sum?: ReviewsSumOrderByAggregateInput
  }

  export type ReviewsScalarWhereWithAggregatesInput = {
    AND?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    OR?: ReviewsScalarWhereWithAggregatesInput[]
    NOT?: ReviewsScalarWhereWithAggregatesInput | ReviewsScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Reviews"> | string
    rating?: IntWithAggregatesFilter<"Reviews"> | number
    message?: StringWithAggregatesFilter<"Reviews"> | string
    employee_id?: IntWithAggregatesFilter<"Reviews"> | number
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    message?: StringFilter<"Notification"> | string
    date?: DateTimeFilter<"Notification"> | Date | string
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    message?: SortOrder
    date?: SortOrder
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    message?: StringFilter<"Notification"> | string
    date?: DateTimeFilter<"Notification"> | Date | string
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    message?: SortOrder
    date?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    message?: StringWithAggregatesFilter<"Notification"> | string
    date?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
  }

  export type AddressCreateInput = {
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
    establishment?: EstablishmentCreateNestedOneWithoutAddressInput
    employee?: EmployeeCreateNestedOneWithoutAddressInput
    client?: ClientCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateInput = {
    id?: number
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
    establishment?: EstablishmentUncheckedCreateNestedOneWithoutAddressInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutAddressInput
    client?: ClientUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressUpdateInput = {
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUpdateOneWithoutAddressNestedInput
    employee?: EmployeeUpdateOneWithoutAddressNestedInput
    client?: ClientUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUncheckedUpdateOneWithoutAddressNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutAddressNestedInput
    client?: ClientUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type AddressCreateManyInput = {
    id?: number
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
  }

  export type AddressUpdateManyMutationInput = {
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
  }

  export type AddressUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
  }

  export type TelephoneCreateInput = {
    number: string
    establishment?: EstablishmentCreateNestedOneWithoutTelephoneInput
    employee?: EmployeeCreateNestedOneWithoutTelephoneInput
    client?: ClientCreateNestedOneWithoutTelephoneInput
  }

  export type TelephoneUncheckedCreateInput = {
    id?: number
    number: string
    establishment?: EstablishmentUncheckedCreateNestedOneWithoutTelephoneInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutTelephoneInput
    client?: ClientUncheckedCreateNestedOneWithoutTelephoneInput
  }

  export type TelephoneUpdateInput = {
    number?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUpdateOneWithoutTelephoneNestedInput
    employee?: EmployeeUpdateOneWithoutTelephoneNestedInput
    client?: ClientUpdateOneWithoutTelephoneNestedInput
  }

  export type TelephoneUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUncheckedUpdateOneWithoutTelephoneNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutTelephoneNestedInput
    client?: ClientUncheckedUpdateOneWithoutTelephoneNestedInput
  }

  export type TelephoneCreateManyInput = {
    id?: number
    number: string
  }

  export type TelephoneUpdateManyMutationInput = {
    number?: StringFieldUpdateOperationsInput | string
  }

  export type TelephoneUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
  }

  export type EstablishmentCreateInput = {
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    telephone: TelephoneCreateNestedOneWithoutEstablishmentInput
    address: AddressCreateNestedOneWithoutEstablishmentInput
    employees?: EmployeeCreateNestedManyWithoutEstablishmentInput
    schedulings?: SchedulingCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateInput = {
    id?: number
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    telephone_id: number
    address_id: number
    employees?: EmployeeUncheckedCreateNestedManyWithoutEstablishmentInput
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUpdateInput = {
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: TelephoneUpdateOneRequiredWithoutEstablishmentNestedInput
    address?: AddressUpdateOneRequiredWithoutEstablishmentNestedInput
    employees?: EmployeeUpdateManyWithoutEstablishmentNestedInput
    schedulings?: SchedulingUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUncheckedUpdateManyWithoutEstablishmentNestedInput
    schedulings?: SchedulingUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentCreateManyInput = {
    id?: number
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    telephone_id: number
    address_id: number
  }

  export type EstablishmentUpdateManyMutationInput = {
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type EstablishmentUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
  }

  export type ServicessCreateInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    duration: number
    schedulings?: SchedulingCreateNestedManyWithoutServiceInput
  }

  export type ServicessUncheckedCreateInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    duration: number
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutServiceInput
  }

  export type ServicessUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    schedulings?: SchedulingUpdateManyWithoutServiceNestedInput
  }

  export type ServicessUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
    schedulings?: SchedulingUncheckedUpdateManyWithoutServiceNestedInput
  }

  export type ServicessCreateManyInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    duration: number
  }

  export type ServicessUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type ServicessUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeCreateInput = {
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone: TelephoneCreateNestedOneWithoutEmployeeInput
    address: AddressCreateNestedOneWithoutEmployeeInput
    establishment: EstablishmentCreateNestedOneWithoutEmployeesInput
    reviews?: ReviewsCreateNestedManyWithoutEmployeeInput
    schedulings?: SchedulingCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateInput = {
    id?: number
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone_id: number
    address_id: number
    establishment_id: number
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEmployeeInput
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone?: TelephoneUpdateOneRequiredWithoutEmployeeNestedInput
    address?: AddressUpdateOneRequiredWithoutEmployeeNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutEmployeesNestedInput
    reviews?: ReviewsUpdateManyWithoutEmployeeNestedInput
    schedulings?: SchedulingUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewsUncheckedUpdateManyWithoutEmployeeNestedInput
    schedulings?: SchedulingUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyInput = {
    id?: number
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone_id: number
    address_id: number
    establishment_id: number
  }

  export type EmployeeUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
  }

  export type EmployeeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
  }

  export type ClientCreateInput = {
    name: string
    photo?: string | null
    email: string
    telephone: TelephoneCreateNestedOneWithoutClientInput
    address: AddressCreateNestedOneWithoutClientInput
    schedulings?: SchedulingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateInput = {
    id?: number
    name: string
    photo?: string | null
    email: string
    telephone_id: number
    address_id: number
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientUpdateInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telephone?: TelephoneUpdateOneRequiredWithoutClientNestedInput
    address?: AddressUpdateOneRequiredWithoutClientNestedInput
    schedulings?: SchedulingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    schedulings?: SchedulingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type ClientCreateManyInput = {
    id?: number
    name: string
    photo?: string | null
    email: string
    telephone_id: number
    address_id: number
  }

  export type ClientUpdateManyMutationInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
  }

  export type ClientUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingCreateInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client: ClientCreateNestedOneWithoutSchedulingsInput
    employee: EmployeeCreateNestedOneWithoutSchedulingsInput
    service: ServicessCreateNestedOneWithoutSchedulingsInput
    establishment: EstablishmentCreateNestedOneWithoutSchedulingsInput
  }

  export type SchedulingUncheckedCreateInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client_id: number
    employee_id: number
    service_id: number
    establishment_id: number
  }

  export type SchedulingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutSchedulingsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutSchedulingsNestedInput
    service?: ServicessUpdateOneRequiredWithoutSchedulingsNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutSchedulingsNestedInput
  }

  export type SchedulingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingCreateManyInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client_id: number
    employee_id: number
    service_id: number
    establishment_id: number
  }

  export type SchedulingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SchedulingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsCreateInput = {
    id?: string
    rating: number
    message: string
    employee: EmployeeCreateNestedOneWithoutReviewsInput
  }

  export type ReviewsUncheckedCreateInput = {
    id?: string
    rating: number
    message: string
    employee_id: number
  }

  export type ReviewsUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneRequiredWithoutReviewsNestedInput
  }

  export type ReviewsUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsCreateManyInput = {
    id?: string
    rating: number
    message: string
    employee_id: number
  }

  export type ReviewsUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
    employee_id?: IntFieldUpdateOperationsInput | number
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    date?: Date | string
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    message: string
    date?: Date | string
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationCreateManyInput = {
    id?: string
    message: string
    date?: Date | string
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    date?: DateTimeFieldUpdateOperationsInput | Date | string
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

  export type EstablishmentNullableScalarRelationFilter = {
    is?: EstablishmentWhereInput | null
    isNot?: EstablishmentWhereInput | null
  }

  export type EmployeeNullableScalarRelationFilter = {
    is?: EmployeeWhereInput | null
    isNot?: EmployeeWhereInput | null
  }

  export type ClientNullableScalarRelationFilter = {
    is?: ClientWhereInput | null
    isNot?: ClientWhereInput | null
  }

  export type AddressCountOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    public_place?: SortOrder
  }

  export type AddressAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type AddressMaxOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    public_place?: SortOrder
  }

  export type AddressMinOrderByAggregateInput = {
    id?: SortOrder
    country?: SortOrder
    state?: SortOrder
    city?: SortOrder
    neighborhood?: SortOrder
    public_place?: SortOrder
  }

  export type AddressSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TelephoneCountOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type TelephoneAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type TelephoneMaxOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type TelephoneMinOrderByAggregateInput = {
    id?: SortOrder
    number?: SortOrder
  }

  export type TelephoneSumOrderByAggregateInput = {
    id?: SortOrder
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

  export type TelephoneScalarRelationFilter = {
    is?: TelephoneWhereInput
    isNot?: TelephoneWhereInput
  }

  export type AddressScalarRelationFilter = {
    is?: AddressWhereInput
    isNot?: AddressWhereInput
  }

  export type EmployeeListRelationFilter = {
    every?: EmployeeWhereInput
    some?: EmployeeWhereInput
    none?: EmployeeWhereInput
  }

  export type SchedulingListRelationFilter = {
    every?: SchedulingWhereInput
    some?: SchedulingWhereInput
    none?: SchedulingWhereInput
  }

  export type EmployeeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SchedulingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EstablishmentCountOrderByAggregateInput = {
    id?: SortOrder
    trade_name?: SortOrder
    cnpj?: SortOrder
    opening_hours?: SortOrder
    closing_hours?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
  }

  export type EstablishmentAvgOrderByAggregateInput = {
    id?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
  }

  export type EstablishmentMaxOrderByAggregateInput = {
    id?: SortOrder
    trade_name?: SortOrder
    cnpj?: SortOrder
    opening_hours?: SortOrder
    closing_hours?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
  }

  export type EstablishmentMinOrderByAggregateInput = {
    id?: SortOrder
    trade_name?: SortOrder
    cnpj?: SortOrder
    opening_hours?: SortOrder
    closing_hours?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
  }

  export type EstablishmentSumOrderByAggregateInput = {
    id?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
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

  export type DecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type ServicessCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    duration?: SortOrder
  }

  export type ServicessAvgOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
  }

  export type ServicessMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    duration?: SortOrder
  }

  export type ServicessMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    price?: SortOrder
    description?: SortOrder
    duration?: SortOrder
  }

  export type ServicessSumOrderByAggregateInput = {
    id?: SortOrder
    price?: SortOrder
    duration?: SortOrder
  }

  export type DecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type EstablishmentScalarRelationFilter = {
    is?: EstablishmentWhereInput
    isNot?: EstablishmentWhereInput
  }

  export type ReviewsListRelationFilter = {
    every?: ReviewsWhereInput
    some?: ReviewsWhereInput
    none?: ReviewsWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type ReviewsOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type EmployeeCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    specialty?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    establishment_id?: SortOrder
  }

  export type EmployeeAvgOrderByAggregateInput = {
    id?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    establishment_id?: SortOrder
  }

  export type EmployeeMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    specialty?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    establishment_id?: SortOrder
  }

  export type EmployeeMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    specialty?: SortOrder
    email?: SortOrder
    cpf?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    establishment_id?: SortOrder
  }

  export type EmployeeSumOrderByAggregateInput = {
    id?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
    establishment_id?: SortOrder
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

  export type ClientCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    email?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
  }

  export type ClientAvgOrderByAggregateInput = {
    id?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
  }

  export type ClientMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    email?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
  }

  export type ClientMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    photo?: SortOrder
    email?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
  }

  export type ClientSumOrderByAggregateInput = {
    id?: SortOrder
    telephone_id?: SortOrder
    address_id?: SortOrder
  }

  export type EnumStatsFilter<$PrismaModel = never> = {
    equals?: $Enums.Stats | EnumStatsFieldRefInput<$PrismaModel>
    in?: $Enums.Stats[] | ListEnumStatsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stats[] | ListEnumStatsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatsFilter<$PrismaModel> | $Enums.Stats
  }

  export type ClientScalarRelationFilter = {
    is?: ClientWhereInput
    isNot?: ClientWhereInput
  }

  export type EmployeeScalarRelationFilter = {
    is?: EmployeeWhereInput
    isNot?: EmployeeWhereInput
  }

  export type ServicessScalarRelationFilter = {
    is?: ServicessWhereInput
    isNot?: ServicessWhereInput
  }

  export type SchedulingCountOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    stats?: SortOrder
    note?: SortOrder
    client_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    establishment_id?: SortOrder
  }

  export type SchedulingAvgOrderByAggregateInput = {
    client_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    establishment_id?: SortOrder
  }

  export type SchedulingMaxOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    stats?: SortOrder
    note?: SortOrder
    client_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    establishment_id?: SortOrder
  }

  export type SchedulingMinOrderByAggregateInput = {
    id?: SortOrder
    time?: SortOrder
    stats?: SortOrder
    note?: SortOrder
    client_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    establishment_id?: SortOrder
  }

  export type SchedulingSumOrderByAggregateInput = {
    client_id?: SortOrder
    employee_id?: SortOrder
    service_id?: SortOrder
    establishment_id?: SortOrder
  }

  export type EnumStatsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stats | EnumStatsFieldRefInput<$PrismaModel>
    in?: $Enums.Stats[] | ListEnumStatsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stats[] | ListEnumStatsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatsWithAggregatesFilter<$PrismaModel> | $Enums.Stats
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatsFilter<$PrismaModel>
    _max?: NestedEnumStatsFilter<$PrismaModel>
  }

  export type ReviewsCountOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    employee_id?: SortOrder
  }

  export type ReviewsAvgOrderByAggregateInput = {
    rating?: SortOrder
    employee_id?: SortOrder
  }

  export type ReviewsMaxOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    employee_id?: SortOrder
  }

  export type ReviewsMinOrderByAggregateInput = {
    id?: SortOrder
    rating?: SortOrder
    message?: SortOrder
    employee_id?: SortOrder
  }

  export type ReviewsSumOrderByAggregateInput = {
    rating?: SortOrder
    employee_id?: SortOrder
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    date?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    date?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    message?: SortOrder
    date?: SortOrder
  }

  export type EstablishmentCreateNestedOneWithoutAddressInput = {
    create?: XOR<EstablishmentCreateWithoutAddressInput, EstablishmentUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAddressInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutAddressInput = {
    create?: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAddressInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutAddressInput = {
    create?: XOR<ClientCreateWithoutAddressInput, ClientUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAddressInput
    connect?: ClientWhereUniqueInput
  }

  export type EstablishmentUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<EstablishmentCreateWithoutAddressInput, EstablishmentUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAddressInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type EmployeeUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAddressInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ClientUncheckedCreateNestedOneWithoutAddressInput = {
    create?: XOR<ClientCreateWithoutAddressInput, ClientUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAddressInput
    connect?: ClientWhereUniqueInput
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EstablishmentUpdateOneWithoutAddressNestedInput = {
    create?: XOR<EstablishmentCreateWithoutAddressInput, EstablishmentUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAddressInput
    upsert?: EstablishmentUpsertWithoutAddressInput
    disconnect?: EstablishmentWhereInput | boolean
    delete?: EstablishmentWhereInput | boolean
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutAddressInput, EstablishmentUpdateWithoutAddressInput>, EstablishmentUncheckedUpdateWithoutAddressInput>
  }

  export type EmployeeUpdateOneWithoutAddressNestedInput = {
    create?: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAddressInput
    upsert?: EmployeeUpsertWithoutAddressInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAddressInput, EmployeeUpdateWithoutAddressInput>, EmployeeUncheckedUpdateWithoutAddressInput>
  }

  export type ClientUpdateOneWithoutAddressNestedInput = {
    create?: XOR<ClientCreateWithoutAddressInput, ClientUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAddressInput
    upsert?: ClientUpsertWithoutAddressInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAddressInput, ClientUpdateWithoutAddressInput>, ClientUncheckedUpdateWithoutAddressInput>
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EstablishmentUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<EstablishmentCreateWithoutAddressInput, EstablishmentUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutAddressInput
    upsert?: EstablishmentUpsertWithoutAddressInput
    disconnect?: EstablishmentWhereInput | boolean
    delete?: EstablishmentWhereInput | boolean
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutAddressInput, EstablishmentUpdateWithoutAddressInput>, EstablishmentUncheckedUpdateWithoutAddressInput>
  }

  export type EmployeeUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutAddressInput
    upsert?: EmployeeUpsertWithoutAddressInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutAddressInput, EmployeeUpdateWithoutAddressInput>, EmployeeUncheckedUpdateWithoutAddressInput>
  }

  export type ClientUncheckedUpdateOneWithoutAddressNestedInput = {
    create?: XOR<ClientCreateWithoutAddressInput, ClientUncheckedCreateWithoutAddressInput>
    connectOrCreate?: ClientCreateOrConnectWithoutAddressInput
    upsert?: ClientUpsertWithoutAddressInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutAddressInput, ClientUpdateWithoutAddressInput>, ClientUncheckedUpdateWithoutAddressInput>
  }

  export type EstablishmentCreateNestedOneWithoutTelephoneInput = {
    create?: XOR<EstablishmentCreateWithoutTelephoneInput, EstablishmentUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutTelephoneInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutTelephoneInput = {
    create?: XOR<EmployeeCreateWithoutTelephoneInput, EmployeeUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTelephoneInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ClientCreateNestedOneWithoutTelephoneInput = {
    create?: XOR<ClientCreateWithoutTelephoneInput, ClientUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTelephoneInput
    connect?: ClientWhereUniqueInput
  }

  export type EstablishmentUncheckedCreateNestedOneWithoutTelephoneInput = {
    create?: XOR<EstablishmentCreateWithoutTelephoneInput, EstablishmentUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutTelephoneInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type EmployeeUncheckedCreateNestedOneWithoutTelephoneInput = {
    create?: XOR<EmployeeCreateWithoutTelephoneInput, EmployeeUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTelephoneInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ClientUncheckedCreateNestedOneWithoutTelephoneInput = {
    create?: XOR<ClientCreateWithoutTelephoneInput, ClientUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTelephoneInput
    connect?: ClientWhereUniqueInput
  }

  export type EstablishmentUpdateOneWithoutTelephoneNestedInput = {
    create?: XOR<EstablishmentCreateWithoutTelephoneInput, EstablishmentUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutTelephoneInput
    upsert?: EstablishmentUpsertWithoutTelephoneInput
    disconnect?: EstablishmentWhereInput | boolean
    delete?: EstablishmentWhereInput | boolean
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutTelephoneInput, EstablishmentUpdateWithoutTelephoneInput>, EstablishmentUncheckedUpdateWithoutTelephoneInput>
  }

  export type EmployeeUpdateOneWithoutTelephoneNestedInput = {
    create?: XOR<EmployeeCreateWithoutTelephoneInput, EmployeeUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTelephoneInput
    upsert?: EmployeeUpsertWithoutTelephoneInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutTelephoneInput, EmployeeUpdateWithoutTelephoneInput>, EmployeeUncheckedUpdateWithoutTelephoneInput>
  }

  export type ClientUpdateOneWithoutTelephoneNestedInput = {
    create?: XOR<ClientCreateWithoutTelephoneInput, ClientUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTelephoneInput
    upsert?: ClientUpsertWithoutTelephoneInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTelephoneInput, ClientUpdateWithoutTelephoneInput>, ClientUncheckedUpdateWithoutTelephoneInput>
  }

  export type EstablishmentUncheckedUpdateOneWithoutTelephoneNestedInput = {
    create?: XOR<EstablishmentCreateWithoutTelephoneInput, EstablishmentUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutTelephoneInput
    upsert?: EstablishmentUpsertWithoutTelephoneInput
    disconnect?: EstablishmentWhereInput | boolean
    delete?: EstablishmentWhereInput | boolean
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutTelephoneInput, EstablishmentUpdateWithoutTelephoneInput>, EstablishmentUncheckedUpdateWithoutTelephoneInput>
  }

  export type EmployeeUncheckedUpdateOneWithoutTelephoneNestedInput = {
    create?: XOR<EmployeeCreateWithoutTelephoneInput, EmployeeUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutTelephoneInput
    upsert?: EmployeeUpsertWithoutTelephoneInput
    disconnect?: EmployeeWhereInput | boolean
    delete?: EmployeeWhereInput | boolean
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutTelephoneInput, EmployeeUpdateWithoutTelephoneInput>, EmployeeUncheckedUpdateWithoutTelephoneInput>
  }

  export type ClientUncheckedUpdateOneWithoutTelephoneNestedInput = {
    create?: XOR<ClientCreateWithoutTelephoneInput, ClientUncheckedCreateWithoutTelephoneInput>
    connectOrCreate?: ClientCreateOrConnectWithoutTelephoneInput
    upsert?: ClientUpsertWithoutTelephoneInput
    disconnect?: ClientWhereInput | boolean
    delete?: ClientWhereInput | boolean
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutTelephoneInput, ClientUpdateWithoutTelephoneInput>, ClientUncheckedUpdateWithoutTelephoneInput>
  }

  export type TelephoneCreateNestedOneWithoutEstablishmentInput = {
    create?: XOR<TelephoneCreateWithoutEstablishmentInput, TelephoneUncheckedCreateWithoutEstablishmentInput>
    connectOrCreate?: TelephoneCreateOrConnectWithoutEstablishmentInput
    connect?: TelephoneWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutEstablishmentInput = {
    create?: XOR<AddressCreateWithoutEstablishmentInput, AddressUncheckedCreateWithoutEstablishmentInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEstablishmentInput
    connect?: AddressWhereUniqueInput
  }

  export type EmployeeCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<EmployeeCreateWithoutEstablishmentInput, EmployeeUncheckedCreateWithoutEstablishmentInput> | EmployeeCreateWithoutEstablishmentInput[] | EmployeeUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEstablishmentInput | EmployeeCreateOrConnectWithoutEstablishmentInput[]
    createMany?: EmployeeCreateManyEstablishmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type SchedulingCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<SchedulingCreateWithoutEstablishmentInput, SchedulingUncheckedCreateWithoutEstablishmentInput> | SchedulingCreateWithoutEstablishmentInput[] | SchedulingUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutEstablishmentInput | SchedulingCreateOrConnectWithoutEstablishmentInput[]
    createMany?: SchedulingCreateManyEstablishmentInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type EmployeeUncheckedCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<EmployeeCreateWithoutEstablishmentInput, EmployeeUncheckedCreateWithoutEstablishmentInput> | EmployeeCreateWithoutEstablishmentInput[] | EmployeeUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEstablishmentInput | EmployeeCreateOrConnectWithoutEstablishmentInput[]
    createMany?: EmployeeCreateManyEstablishmentInputEnvelope
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutEstablishmentInput = {
    create?: XOR<SchedulingCreateWithoutEstablishmentInput, SchedulingUncheckedCreateWithoutEstablishmentInput> | SchedulingCreateWithoutEstablishmentInput[] | SchedulingUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutEstablishmentInput | SchedulingCreateOrConnectWithoutEstablishmentInput[]
    createMany?: SchedulingCreateManyEstablishmentInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type TelephoneUpdateOneRequiredWithoutEstablishmentNestedInput = {
    create?: XOR<TelephoneCreateWithoutEstablishmentInput, TelephoneUncheckedCreateWithoutEstablishmentInput>
    connectOrCreate?: TelephoneCreateOrConnectWithoutEstablishmentInput
    upsert?: TelephoneUpsertWithoutEstablishmentInput
    connect?: TelephoneWhereUniqueInput
    update?: XOR<XOR<TelephoneUpdateToOneWithWhereWithoutEstablishmentInput, TelephoneUpdateWithoutEstablishmentInput>, TelephoneUncheckedUpdateWithoutEstablishmentInput>
  }

  export type AddressUpdateOneRequiredWithoutEstablishmentNestedInput = {
    create?: XOR<AddressCreateWithoutEstablishmentInput, AddressUncheckedCreateWithoutEstablishmentInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEstablishmentInput
    upsert?: AddressUpsertWithoutEstablishmentInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutEstablishmentInput, AddressUpdateWithoutEstablishmentInput>, AddressUncheckedUpdateWithoutEstablishmentInput>
  }

  export type EmployeeUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutEstablishmentInput, EmployeeUncheckedCreateWithoutEstablishmentInput> | EmployeeCreateWithoutEstablishmentInput[] | EmployeeUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEstablishmentInput | EmployeeCreateOrConnectWithoutEstablishmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutEstablishmentInput | EmployeeUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: EmployeeCreateManyEstablishmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutEstablishmentInput | EmployeeUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutEstablishmentInput | EmployeeUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type SchedulingUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<SchedulingCreateWithoutEstablishmentInput, SchedulingUncheckedCreateWithoutEstablishmentInput> | SchedulingCreateWithoutEstablishmentInput[] | SchedulingUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutEstablishmentInput | SchedulingCreateOrConnectWithoutEstablishmentInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutEstablishmentInput | SchedulingUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: SchedulingCreateManyEstablishmentInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutEstablishmentInput | SchedulingUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutEstablishmentInput | SchedulingUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type EmployeeUncheckedUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<EmployeeCreateWithoutEstablishmentInput, EmployeeUncheckedCreateWithoutEstablishmentInput> | EmployeeCreateWithoutEstablishmentInput[] | EmployeeUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: EmployeeCreateOrConnectWithoutEstablishmentInput | EmployeeCreateOrConnectWithoutEstablishmentInput[]
    upsert?: EmployeeUpsertWithWhereUniqueWithoutEstablishmentInput | EmployeeUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: EmployeeCreateManyEstablishmentInputEnvelope
    set?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    disconnect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    delete?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    connect?: EmployeeWhereUniqueInput | EmployeeWhereUniqueInput[]
    update?: EmployeeUpdateWithWhereUniqueWithoutEstablishmentInput | EmployeeUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: EmployeeUpdateManyWithWhereWithoutEstablishmentInput | EmployeeUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutEstablishmentNestedInput = {
    create?: XOR<SchedulingCreateWithoutEstablishmentInput, SchedulingUncheckedCreateWithoutEstablishmentInput> | SchedulingCreateWithoutEstablishmentInput[] | SchedulingUncheckedCreateWithoutEstablishmentInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutEstablishmentInput | SchedulingCreateOrConnectWithoutEstablishmentInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutEstablishmentInput | SchedulingUpsertWithWhereUniqueWithoutEstablishmentInput[]
    createMany?: SchedulingCreateManyEstablishmentInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutEstablishmentInput | SchedulingUpdateWithWhereUniqueWithoutEstablishmentInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutEstablishmentInput | SchedulingUpdateManyWithWhereWithoutEstablishmentInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type SchedulingCreateNestedManyWithoutServiceInput = {
    create?: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput> | SchedulingCreateWithoutServiceInput[] | SchedulingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutServiceInput | SchedulingCreateOrConnectWithoutServiceInput[]
    createMany?: SchedulingCreateManyServiceInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutServiceInput = {
    create?: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput> | SchedulingCreateWithoutServiceInput[] | SchedulingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutServiceInput | SchedulingCreateOrConnectWithoutServiceInput[]
    createMany?: SchedulingCreateManyServiceInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type DecimalFieldUpdateOperationsInput = {
    set?: Decimal | DecimalJsLike | number | string
    increment?: Decimal | DecimalJsLike | number | string
    decrement?: Decimal | DecimalJsLike | number | string
    multiply?: Decimal | DecimalJsLike | number | string
    divide?: Decimal | DecimalJsLike | number | string
  }

  export type SchedulingUpdateManyWithoutServiceNestedInput = {
    create?: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput> | SchedulingCreateWithoutServiceInput[] | SchedulingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutServiceInput | SchedulingCreateOrConnectWithoutServiceInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutServiceInput | SchedulingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: SchedulingCreateManyServiceInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutServiceInput | SchedulingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutServiceInput | SchedulingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutServiceNestedInput = {
    create?: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput> | SchedulingCreateWithoutServiceInput[] | SchedulingUncheckedCreateWithoutServiceInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutServiceInput | SchedulingCreateOrConnectWithoutServiceInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutServiceInput | SchedulingUpsertWithWhereUniqueWithoutServiceInput[]
    createMany?: SchedulingCreateManyServiceInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutServiceInput | SchedulingUpdateWithWhereUniqueWithoutServiceInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutServiceInput | SchedulingUpdateManyWithWhereWithoutServiceInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type TelephoneCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<TelephoneCreateWithoutEmployeeInput, TelephoneUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: TelephoneCreateOrConnectWithoutEmployeeInput
    connect?: TelephoneWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutEmployeeInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    connect?: AddressWhereUniqueInput
  }

  export type EstablishmentCreateNestedOneWithoutEmployeesInput = {
    create?: XOR<EstablishmentCreateWithoutEmployeesInput, EstablishmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutEmployeesInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type ReviewsCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ReviewsCreateWithoutEmployeeInput, ReviewsUncheckedCreateWithoutEmployeeInput> | ReviewsCreateWithoutEmployeeInput[] | ReviewsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEmployeeInput | ReviewsCreateOrConnectWithoutEmployeeInput[]
    createMany?: ReviewsCreateManyEmployeeInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type SchedulingCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SchedulingCreateWithoutEmployeeInput, SchedulingUncheckedCreateWithoutEmployeeInput> | SchedulingCreateWithoutEmployeeInput[] | SchedulingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutEmployeeInput | SchedulingCreateOrConnectWithoutEmployeeInput[]
    createMany?: SchedulingCreateManyEmployeeInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type ReviewsUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<ReviewsCreateWithoutEmployeeInput, ReviewsUncheckedCreateWithoutEmployeeInput> | ReviewsCreateWithoutEmployeeInput[] | ReviewsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEmployeeInput | ReviewsCreateOrConnectWithoutEmployeeInput[]
    createMany?: ReviewsCreateManyEmployeeInputEnvelope
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutEmployeeInput = {
    create?: XOR<SchedulingCreateWithoutEmployeeInput, SchedulingUncheckedCreateWithoutEmployeeInput> | SchedulingCreateWithoutEmployeeInput[] | SchedulingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutEmployeeInput | SchedulingCreateOrConnectWithoutEmployeeInput[]
    createMany?: SchedulingCreateManyEmployeeInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type TelephoneUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<TelephoneCreateWithoutEmployeeInput, TelephoneUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: TelephoneCreateOrConnectWithoutEmployeeInput
    upsert?: TelephoneUpsertWithoutEmployeeInput
    connect?: TelephoneWhereUniqueInput
    update?: XOR<XOR<TelephoneUpdateToOneWithWhereWithoutEmployeeInput, TelephoneUpdateWithoutEmployeeInput>, TelephoneUncheckedUpdateWithoutEmployeeInput>
  }

  export type AddressUpdateOneRequiredWithoutEmployeeNestedInput = {
    create?: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    connectOrCreate?: AddressCreateOrConnectWithoutEmployeeInput
    upsert?: AddressUpsertWithoutEmployeeInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutEmployeeInput, AddressUpdateWithoutEmployeeInput>, AddressUncheckedUpdateWithoutEmployeeInput>
  }

  export type EstablishmentUpdateOneRequiredWithoutEmployeesNestedInput = {
    create?: XOR<EstablishmentCreateWithoutEmployeesInput, EstablishmentUncheckedCreateWithoutEmployeesInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutEmployeesInput
    upsert?: EstablishmentUpsertWithoutEmployeesInput
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutEmployeesInput, EstablishmentUpdateWithoutEmployeesInput>, EstablishmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type ReviewsUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ReviewsCreateWithoutEmployeeInput, ReviewsUncheckedCreateWithoutEmployeeInput> | ReviewsCreateWithoutEmployeeInput[] | ReviewsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEmployeeInput | ReviewsCreateOrConnectWithoutEmployeeInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutEmployeeInput | ReviewsUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ReviewsCreateManyEmployeeInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutEmployeeInput | ReviewsUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutEmployeeInput | ReviewsUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type SchedulingUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SchedulingCreateWithoutEmployeeInput, SchedulingUncheckedCreateWithoutEmployeeInput> | SchedulingCreateWithoutEmployeeInput[] | SchedulingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutEmployeeInput | SchedulingCreateOrConnectWithoutEmployeeInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutEmployeeInput | SchedulingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SchedulingCreateManyEmployeeInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutEmployeeInput | SchedulingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutEmployeeInput | SchedulingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type ReviewsUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<ReviewsCreateWithoutEmployeeInput, ReviewsUncheckedCreateWithoutEmployeeInput> | ReviewsCreateWithoutEmployeeInput[] | ReviewsUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: ReviewsCreateOrConnectWithoutEmployeeInput | ReviewsCreateOrConnectWithoutEmployeeInput[]
    upsert?: ReviewsUpsertWithWhereUniqueWithoutEmployeeInput | ReviewsUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: ReviewsCreateManyEmployeeInputEnvelope
    set?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    disconnect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    delete?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    connect?: ReviewsWhereUniqueInput | ReviewsWhereUniqueInput[]
    update?: ReviewsUpdateWithWhereUniqueWithoutEmployeeInput | ReviewsUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: ReviewsUpdateManyWithWhereWithoutEmployeeInput | ReviewsUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutEmployeeNestedInput = {
    create?: XOR<SchedulingCreateWithoutEmployeeInput, SchedulingUncheckedCreateWithoutEmployeeInput> | SchedulingCreateWithoutEmployeeInput[] | SchedulingUncheckedCreateWithoutEmployeeInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutEmployeeInput | SchedulingCreateOrConnectWithoutEmployeeInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutEmployeeInput | SchedulingUpsertWithWhereUniqueWithoutEmployeeInput[]
    createMany?: SchedulingCreateManyEmployeeInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutEmployeeInput | SchedulingUpdateWithWhereUniqueWithoutEmployeeInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutEmployeeInput | SchedulingUpdateManyWithWhereWithoutEmployeeInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type TelephoneCreateNestedOneWithoutClientInput = {
    create?: XOR<TelephoneCreateWithoutClientInput, TelephoneUncheckedCreateWithoutClientInput>
    connectOrCreate?: TelephoneCreateOrConnectWithoutClientInput
    connect?: TelephoneWhereUniqueInput
  }

  export type AddressCreateNestedOneWithoutClientInput = {
    create?: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput
    connect?: AddressWhereUniqueInput
  }

  export type SchedulingCreateNestedManyWithoutClientInput = {
    create?: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput> | SchedulingCreateWithoutClientInput[] | SchedulingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutClientInput | SchedulingCreateOrConnectWithoutClientInput[]
    createMany?: SchedulingCreateManyClientInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type SchedulingUncheckedCreateNestedManyWithoutClientInput = {
    create?: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput> | SchedulingCreateWithoutClientInput[] | SchedulingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutClientInput | SchedulingCreateOrConnectWithoutClientInput[]
    createMany?: SchedulingCreateManyClientInputEnvelope
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
  }

  export type TelephoneUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<TelephoneCreateWithoutClientInput, TelephoneUncheckedCreateWithoutClientInput>
    connectOrCreate?: TelephoneCreateOrConnectWithoutClientInput
    upsert?: TelephoneUpsertWithoutClientInput
    connect?: TelephoneWhereUniqueInput
    update?: XOR<XOR<TelephoneUpdateToOneWithWhereWithoutClientInput, TelephoneUpdateWithoutClientInput>, TelephoneUncheckedUpdateWithoutClientInput>
  }

  export type AddressUpdateOneRequiredWithoutClientNestedInput = {
    create?: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
    connectOrCreate?: AddressCreateOrConnectWithoutClientInput
    upsert?: AddressUpsertWithoutClientInput
    connect?: AddressWhereUniqueInput
    update?: XOR<XOR<AddressUpdateToOneWithWhereWithoutClientInput, AddressUpdateWithoutClientInput>, AddressUncheckedUpdateWithoutClientInput>
  }

  export type SchedulingUpdateManyWithoutClientNestedInput = {
    create?: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput> | SchedulingCreateWithoutClientInput[] | SchedulingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutClientInput | SchedulingCreateOrConnectWithoutClientInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutClientInput | SchedulingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SchedulingCreateManyClientInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutClientInput | SchedulingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutClientInput | SchedulingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type SchedulingUncheckedUpdateManyWithoutClientNestedInput = {
    create?: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput> | SchedulingCreateWithoutClientInput[] | SchedulingUncheckedCreateWithoutClientInput[]
    connectOrCreate?: SchedulingCreateOrConnectWithoutClientInput | SchedulingCreateOrConnectWithoutClientInput[]
    upsert?: SchedulingUpsertWithWhereUniqueWithoutClientInput | SchedulingUpsertWithWhereUniqueWithoutClientInput[]
    createMany?: SchedulingCreateManyClientInputEnvelope
    set?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    disconnect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    delete?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    connect?: SchedulingWhereUniqueInput | SchedulingWhereUniqueInput[]
    update?: SchedulingUpdateWithWhereUniqueWithoutClientInput | SchedulingUpdateWithWhereUniqueWithoutClientInput[]
    updateMany?: SchedulingUpdateManyWithWhereWithoutClientInput | SchedulingUpdateManyWithWhereWithoutClientInput[]
    deleteMany?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
  }

  export type ClientCreateNestedOneWithoutSchedulingsInput = {
    create?: XOR<ClientCreateWithoutSchedulingsInput, ClientUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSchedulingsInput
    connect?: ClientWhereUniqueInput
  }

  export type EmployeeCreateNestedOneWithoutSchedulingsInput = {
    create?: XOR<EmployeeCreateWithoutSchedulingsInput, EmployeeUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSchedulingsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type ServicessCreateNestedOneWithoutSchedulingsInput = {
    create?: XOR<ServicessCreateWithoutSchedulingsInput, ServicessUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: ServicessCreateOrConnectWithoutSchedulingsInput
    connect?: ServicessWhereUniqueInput
  }

  export type EstablishmentCreateNestedOneWithoutSchedulingsInput = {
    create?: XOR<EstablishmentCreateWithoutSchedulingsInput, EstablishmentUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutSchedulingsInput
    connect?: EstablishmentWhereUniqueInput
  }

  export type EnumStatsFieldUpdateOperationsInput = {
    set?: $Enums.Stats
  }

  export type ClientUpdateOneRequiredWithoutSchedulingsNestedInput = {
    create?: XOR<ClientCreateWithoutSchedulingsInput, ClientUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: ClientCreateOrConnectWithoutSchedulingsInput
    upsert?: ClientUpsertWithoutSchedulingsInput
    connect?: ClientWhereUniqueInput
    update?: XOR<XOR<ClientUpdateToOneWithWhereWithoutSchedulingsInput, ClientUpdateWithoutSchedulingsInput>, ClientUncheckedUpdateWithoutSchedulingsInput>
  }

  export type EmployeeUpdateOneRequiredWithoutSchedulingsNestedInput = {
    create?: XOR<EmployeeCreateWithoutSchedulingsInput, EmployeeUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutSchedulingsInput
    upsert?: EmployeeUpsertWithoutSchedulingsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutSchedulingsInput, EmployeeUpdateWithoutSchedulingsInput>, EmployeeUncheckedUpdateWithoutSchedulingsInput>
  }

  export type ServicessUpdateOneRequiredWithoutSchedulingsNestedInput = {
    create?: XOR<ServicessCreateWithoutSchedulingsInput, ServicessUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: ServicessCreateOrConnectWithoutSchedulingsInput
    upsert?: ServicessUpsertWithoutSchedulingsInput
    connect?: ServicessWhereUniqueInput
    update?: XOR<XOR<ServicessUpdateToOneWithWhereWithoutSchedulingsInput, ServicessUpdateWithoutSchedulingsInput>, ServicessUncheckedUpdateWithoutSchedulingsInput>
  }

  export type EstablishmentUpdateOneRequiredWithoutSchedulingsNestedInput = {
    create?: XOR<EstablishmentCreateWithoutSchedulingsInput, EstablishmentUncheckedCreateWithoutSchedulingsInput>
    connectOrCreate?: EstablishmentCreateOrConnectWithoutSchedulingsInput
    upsert?: EstablishmentUpsertWithoutSchedulingsInput
    connect?: EstablishmentWhereUniqueInput
    update?: XOR<XOR<EstablishmentUpdateToOneWithWhereWithoutSchedulingsInput, EstablishmentUpdateWithoutSchedulingsInput>, EstablishmentUncheckedUpdateWithoutSchedulingsInput>
  }

  export type EmployeeCreateNestedOneWithoutReviewsInput = {
    create?: XOR<EmployeeCreateWithoutReviewsInput, EmployeeUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutReviewsInput
    connect?: EmployeeWhereUniqueInput
  }

  export type EmployeeUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<EmployeeCreateWithoutReviewsInput, EmployeeUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: EmployeeCreateOrConnectWithoutReviewsInput
    upsert?: EmployeeUpsertWithoutReviewsInput
    connect?: EmployeeWhereUniqueInput
    update?: XOR<XOR<EmployeeUpdateToOneWithWhereWithoutReviewsInput, EmployeeUpdateWithoutReviewsInput>, EmployeeUncheckedUpdateWithoutReviewsInput>
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

  export type NestedDecimalFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
  }

  export type NestedDecimalWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    in?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    notIn?: Decimal[] | DecimalJsLike[] | number[] | string[] | ListDecimalFieldRefInput<$PrismaModel>
    lt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    lte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gt?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    gte?: Decimal | DecimalJsLike | number | string | DecimalFieldRefInput<$PrismaModel>
    not?: NestedDecimalWithAggregatesFilter<$PrismaModel> | Decimal | DecimalJsLike | number | string
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedDecimalFilter<$PrismaModel>
    _sum?: NestedDecimalFilter<$PrismaModel>
    _min?: NestedDecimalFilter<$PrismaModel>
    _max?: NestedDecimalFilter<$PrismaModel>
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

  export type NestedEnumStatsFilter<$PrismaModel = never> = {
    equals?: $Enums.Stats | EnumStatsFieldRefInput<$PrismaModel>
    in?: $Enums.Stats[] | ListEnumStatsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stats[] | ListEnumStatsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatsFilter<$PrismaModel> | $Enums.Stats
  }

  export type NestedEnumStatsWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Stats | EnumStatsFieldRefInput<$PrismaModel>
    in?: $Enums.Stats[] | ListEnumStatsFieldRefInput<$PrismaModel>
    notIn?: $Enums.Stats[] | ListEnumStatsFieldRefInput<$PrismaModel>
    not?: NestedEnumStatsWithAggregatesFilter<$PrismaModel> | $Enums.Stats
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumStatsFilter<$PrismaModel>
    _max?: NestedEnumStatsFilter<$PrismaModel>
  }

  export type EstablishmentCreateWithoutAddressInput = {
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    telephone: TelephoneCreateNestedOneWithoutEstablishmentInput
    employees?: EmployeeCreateNestedManyWithoutEstablishmentInput
    schedulings?: SchedulingCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateWithoutAddressInput = {
    id?: number
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    telephone_id: number
    employees?: EmployeeUncheckedCreateNestedManyWithoutEstablishmentInput
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentCreateOrConnectWithoutAddressInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutAddressInput, EstablishmentUncheckedCreateWithoutAddressInput>
  }

  export type EmployeeCreateWithoutAddressInput = {
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone: TelephoneCreateNestedOneWithoutEmployeeInput
    establishment: EstablishmentCreateNestedOneWithoutEmployeesInput
    reviews?: ReviewsCreateNestedManyWithoutEmployeeInput
    schedulings?: SchedulingCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone_id: number
    establishment_id: number
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEmployeeInput
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutAddressInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
  }

  export type ClientCreateWithoutAddressInput = {
    name: string
    photo?: string | null
    email: string
    telephone: TelephoneCreateNestedOneWithoutClientInput
    schedulings?: SchedulingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutAddressInput = {
    id?: number
    name: string
    photo?: string | null
    email: string
    telephone_id: number
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutAddressInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutAddressInput, ClientUncheckedCreateWithoutAddressInput>
  }

  export type EstablishmentUpsertWithoutAddressInput = {
    update: XOR<EstablishmentUpdateWithoutAddressInput, EstablishmentUncheckedUpdateWithoutAddressInput>
    create: XOR<EstablishmentCreateWithoutAddressInput, EstablishmentUncheckedCreateWithoutAddressInput>
    where?: EstablishmentWhereInput
  }

  export type EstablishmentUpdateToOneWithWhereWithoutAddressInput = {
    where?: EstablishmentWhereInput
    data: XOR<EstablishmentUpdateWithoutAddressInput, EstablishmentUncheckedUpdateWithoutAddressInput>
  }

  export type EstablishmentUpdateWithoutAddressInput = {
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: TelephoneUpdateOneRequiredWithoutEstablishmentNestedInput
    employees?: EmployeeUpdateManyWithoutEstablishmentNestedInput
    schedulings?: SchedulingUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUncheckedUpdateManyWithoutEstablishmentNestedInput
    schedulings?: SchedulingUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type EmployeeUpsertWithoutAddressInput = {
    update: XOR<EmployeeUpdateWithoutAddressInput, EmployeeUncheckedUpdateWithoutAddressInput>
    create: XOR<EmployeeCreateWithoutAddressInput, EmployeeUncheckedCreateWithoutAddressInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutAddressInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutAddressInput, EmployeeUncheckedUpdateWithoutAddressInput>
  }

  export type EmployeeUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone?: TelephoneUpdateOneRequiredWithoutEmployeeNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutEmployeesNestedInput
    reviews?: ReviewsUpdateManyWithoutEmployeeNestedInput
    schedulings?: SchedulingUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewsUncheckedUpdateManyWithoutEmployeeNestedInput
    schedulings?: SchedulingUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ClientUpsertWithoutAddressInput = {
    update: XOR<ClientUpdateWithoutAddressInput, ClientUncheckedUpdateWithoutAddressInput>
    create: XOR<ClientCreateWithoutAddressInput, ClientUncheckedCreateWithoutAddressInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutAddressInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutAddressInput, ClientUncheckedUpdateWithoutAddressInput>
  }

  export type ClientUpdateWithoutAddressInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telephone?: TelephoneUpdateOneRequiredWithoutClientNestedInput
    schedulings?: SchedulingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutAddressInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    schedulings?: SchedulingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type EstablishmentCreateWithoutTelephoneInput = {
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    address: AddressCreateNestedOneWithoutEstablishmentInput
    employees?: EmployeeCreateNestedManyWithoutEstablishmentInput
    schedulings?: SchedulingCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateWithoutTelephoneInput = {
    id?: number
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    address_id: number
    employees?: EmployeeUncheckedCreateNestedManyWithoutEstablishmentInput
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentCreateOrConnectWithoutTelephoneInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutTelephoneInput, EstablishmentUncheckedCreateWithoutTelephoneInput>
  }

  export type EmployeeCreateWithoutTelephoneInput = {
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    address: AddressCreateNestedOneWithoutEmployeeInput
    establishment: EstablishmentCreateNestedOneWithoutEmployeesInput
    reviews?: ReviewsCreateNestedManyWithoutEmployeeInput
    schedulings?: SchedulingCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutTelephoneInput = {
    id?: number
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    address_id: number
    establishment_id: number
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEmployeeInput
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutTelephoneInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutTelephoneInput, EmployeeUncheckedCreateWithoutTelephoneInput>
  }

  export type ClientCreateWithoutTelephoneInput = {
    name: string
    photo?: string | null
    email: string
    address: AddressCreateNestedOneWithoutClientInput
    schedulings?: SchedulingCreateNestedManyWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutTelephoneInput = {
    id?: number
    name: string
    photo?: string | null
    email: string
    address_id: number
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutClientInput
  }

  export type ClientCreateOrConnectWithoutTelephoneInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutTelephoneInput, ClientUncheckedCreateWithoutTelephoneInput>
  }

  export type EstablishmentUpsertWithoutTelephoneInput = {
    update: XOR<EstablishmentUpdateWithoutTelephoneInput, EstablishmentUncheckedUpdateWithoutTelephoneInput>
    create: XOR<EstablishmentCreateWithoutTelephoneInput, EstablishmentUncheckedCreateWithoutTelephoneInput>
    where?: EstablishmentWhereInput
  }

  export type EstablishmentUpdateToOneWithWhereWithoutTelephoneInput = {
    where?: EstablishmentWhereInput
    data: XOR<EstablishmentUpdateWithoutTelephoneInput, EstablishmentUncheckedUpdateWithoutTelephoneInput>
  }

  export type EstablishmentUpdateWithoutTelephoneInput = {
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: AddressUpdateOneRequiredWithoutEstablishmentNestedInput
    employees?: EmployeeUpdateManyWithoutEstablishmentNestedInput
    schedulings?: SchedulingUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutTelephoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    address_id?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUncheckedUpdateManyWithoutEstablishmentNestedInput
    schedulings?: SchedulingUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type EmployeeUpsertWithoutTelephoneInput = {
    update: XOR<EmployeeUpdateWithoutTelephoneInput, EmployeeUncheckedUpdateWithoutTelephoneInput>
    create: XOR<EmployeeCreateWithoutTelephoneInput, EmployeeUncheckedCreateWithoutTelephoneInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutTelephoneInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutTelephoneInput, EmployeeUncheckedUpdateWithoutTelephoneInput>
  }

  export type EmployeeUpdateWithoutTelephoneInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutEmployeeNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutEmployeesNestedInput
    reviews?: ReviewsUpdateManyWithoutEmployeeNestedInput
    schedulings?: SchedulingUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutTelephoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewsUncheckedUpdateManyWithoutEmployeeNestedInput
    schedulings?: SchedulingUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ClientUpsertWithoutTelephoneInput = {
    update: XOR<ClientUpdateWithoutTelephoneInput, ClientUncheckedUpdateWithoutTelephoneInput>
    create: XOR<ClientCreateWithoutTelephoneInput, ClientUncheckedCreateWithoutTelephoneInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutTelephoneInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutTelephoneInput, ClientUncheckedUpdateWithoutTelephoneInput>
  }

  export type ClientUpdateWithoutTelephoneInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    address?: AddressUpdateOneRequiredWithoutClientNestedInput
    schedulings?: SchedulingUpdateManyWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutTelephoneInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    address_id?: IntFieldUpdateOperationsInput | number
    schedulings?: SchedulingUncheckedUpdateManyWithoutClientNestedInput
  }

  export type TelephoneCreateWithoutEstablishmentInput = {
    number: string
    employee?: EmployeeCreateNestedOneWithoutTelephoneInput
    client?: ClientCreateNestedOneWithoutTelephoneInput
  }

  export type TelephoneUncheckedCreateWithoutEstablishmentInput = {
    id?: number
    number: string
    employee?: EmployeeUncheckedCreateNestedOneWithoutTelephoneInput
    client?: ClientUncheckedCreateNestedOneWithoutTelephoneInput
  }

  export type TelephoneCreateOrConnectWithoutEstablishmentInput = {
    where: TelephoneWhereUniqueInput
    create: XOR<TelephoneCreateWithoutEstablishmentInput, TelephoneUncheckedCreateWithoutEstablishmentInput>
  }

  export type AddressCreateWithoutEstablishmentInput = {
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
    employee?: EmployeeCreateNestedOneWithoutAddressInput
    client?: ClientCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutEstablishmentInput = {
    id?: number
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
    employee?: EmployeeUncheckedCreateNestedOneWithoutAddressInput
    client?: ClientUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutEstablishmentInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutEstablishmentInput, AddressUncheckedCreateWithoutEstablishmentInput>
  }

  export type EmployeeCreateWithoutEstablishmentInput = {
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone: TelephoneCreateNestedOneWithoutEmployeeInput
    address: AddressCreateNestedOneWithoutEmployeeInput
    reviews?: ReviewsCreateNestedManyWithoutEmployeeInput
    schedulings?: SchedulingCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutEstablishmentInput = {
    id?: number
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone_id: number
    address_id: number
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEmployeeInput
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutEstablishmentInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutEstablishmentInput, EmployeeUncheckedCreateWithoutEstablishmentInput>
  }

  export type EmployeeCreateManyEstablishmentInputEnvelope = {
    data: EmployeeCreateManyEstablishmentInput | EmployeeCreateManyEstablishmentInput[]
    skipDuplicates?: boolean
  }

  export type SchedulingCreateWithoutEstablishmentInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client: ClientCreateNestedOneWithoutSchedulingsInput
    employee: EmployeeCreateNestedOneWithoutSchedulingsInput
    service: ServicessCreateNestedOneWithoutSchedulingsInput
  }

  export type SchedulingUncheckedCreateWithoutEstablishmentInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client_id: number
    employee_id: number
    service_id: number
  }

  export type SchedulingCreateOrConnectWithoutEstablishmentInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutEstablishmentInput, SchedulingUncheckedCreateWithoutEstablishmentInput>
  }

  export type SchedulingCreateManyEstablishmentInputEnvelope = {
    data: SchedulingCreateManyEstablishmentInput | SchedulingCreateManyEstablishmentInput[]
    skipDuplicates?: boolean
  }

  export type TelephoneUpsertWithoutEstablishmentInput = {
    update: XOR<TelephoneUpdateWithoutEstablishmentInput, TelephoneUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<TelephoneCreateWithoutEstablishmentInput, TelephoneUncheckedCreateWithoutEstablishmentInput>
    where?: TelephoneWhereInput
  }

  export type TelephoneUpdateToOneWithWhereWithoutEstablishmentInput = {
    where?: TelephoneWhereInput
    data: XOR<TelephoneUpdateWithoutEstablishmentInput, TelephoneUncheckedUpdateWithoutEstablishmentInput>
  }

  export type TelephoneUpdateWithoutEstablishmentInput = {
    number?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneWithoutTelephoneNestedInput
    client?: ClientUpdateOneWithoutTelephoneNestedInput
  }

  export type TelephoneUncheckedUpdateWithoutEstablishmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUncheckedUpdateOneWithoutTelephoneNestedInput
    client?: ClientUncheckedUpdateOneWithoutTelephoneNestedInput
  }

  export type AddressUpsertWithoutEstablishmentInput = {
    update: XOR<AddressUpdateWithoutEstablishmentInput, AddressUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<AddressCreateWithoutEstablishmentInput, AddressUncheckedCreateWithoutEstablishmentInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutEstablishmentInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutEstablishmentInput, AddressUncheckedUpdateWithoutEstablishmentInput>
  }

  export type AddressUpdateWithoutEstablishmentInput = {
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUpdateOneWithoutAddressNestedInput
    client?: ClientUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutEstablishmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    employee?: EmployeeUncheckedUpdateOneWithoutAddressNestedInput
    client?: ClientUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type EmployeeUpsertWithWhereUniqueWithoutEstablishmentInput = {
    where: EmployeeWhereUniqueInput
    update: XOR<EmployeeUpdateWithoutEstablishmentInput, EmployeeUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<EmployeeCreateWithoutEstablishmentInput, EmployeeUncheckedCreateWithoutEstablishmentInput>
  }

  export type EmployeeUpdateWithWhereUniqueWithoutEstablishmentInput = {
    where: EmployeeWhereUniqueInput
    data: XOR<EmployeeUpdateWithoutEstablishmentInput, EmployeeUncheckedUpdateWithoutEstablishmentInput>
  }

  export type EmployeeUpdateManyWithWhereWithoutEstablishmentInput = {
    where: EmployeeScalarWhereInput
    data: XOR<EmployeeUpdateManyMutationInput, EmployeeUncheckedUpdateManyWithoutEstablishmentInput>
  }

  export type EmployeeScalarWhereInput = {
    AND?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    OR?: EmployeeScalarWhereInput[]
    NOT?: EmployeeScalarWhereInput | EmployeeScalarWhereInput[]
    id?: IntFilter<"Employee"> | number
    name?: StringFilter<"Employee"> | string
    photo?: StringNullableFilter<"Employee"> | string | null
    specialty?: StringFilter<"Employee"> | string
    email?: StringFilter<"Employee"> | string
    cpf?: StringFilter<"Employee"> | string
    telephone_id?: IntFilter<"Employee"> | number
    address_id?: IntFilter<"Employee"> | number
    establishment_id?: IntFilter<"Employee"> | number
  }

  export type SchedulingUpsertWithWhereUniqueWithoutEstablishmentInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutEstablishmentInput, SchedulingUncheckedUpdateWithoutEstablishmentInput>
    create: XOR<SchedulingCreateWithoutEstablishmentInput, SchedulingUncheckedCreateWithoutEstablishmentInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutEstablishmentInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutEstablishmentInput, SchedulingUncheckedUpdateWithoutEstablishmentInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutEstablishmentInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutEstablishmentInput>
  }

  export type SchedulingScalarWhereInput = {
    AND?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
    OR?: SchedulingScalarWhereInput[]
    NOT?: SchedulingScalarWhereInput | SchedulingScalarWhereInput[]
    id?: StringFilter<"Scheduling"> | string
    time?: DateTimeFilter<"Scheduling"> | Date | string
    stats?: EnumStatsFilter<"Scheduling"> | $Enums.Stats
    note?: StringNullableFilter<"Scheduling"> | string | null
    client_id?: IntFilter<"Scheduling"> | number
    employee_id?: IntFilter<"Scheduling"> | number
    service_id?: IntFilter<"Scheduling"> | number
    establishment_id?: IntFilter<"Scheduling"> | number
  }

  export type SchedulingCreateWithoutServiceInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client: ClientCreateNestedOneWithoutSchedulingsInput
    employee: EmployeeCreateNestedOneWithoutSchedulingsInput
    establishment: EstablishmentCreateNestedOneWithoutSchedulingsInput
  }

  export type SchedulingUncheckedCreateWithoutServiceInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client_id: number
    employee_id: number
    establishment_id: number
  }

  export type SchedulingCreateOrConnectWithoutServiceInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput>
  }

  export type SchedulingCreateManyServiceInputEnvelope = {
    data: SchedulingCreateManyServiceInput | SchedulingCreateManyServiceInput[]
    skipDuplicates?: boolean
  }

  export type SchedulingUpsertWithWhereUniqueWithoutServiceInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutServiceInput, SchedulingUncheckedUpdateWithoutServiceInput>
    create: XOR<SchedulingCreateWithoutServiceInput, SchedulingUncheckedCreateWithoutServiceInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutServiceInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutServiceInput, SchedulingUncheckedUpdateWithoutServiceInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutServiceInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutServiceInput>
  }

  export type TelephoneCreateWithoutEmployeeInput = {
    number: string
    establishment?: EstablishmentCreateNestedOneWithoutTelephoneInput
    client?: ClientCreateNestedOneWithoutTelephoneInput
  }

  export type TelephoneUncheckedCreateWithoutEmployeeInput = {
    id?: number
    number: string
    establishment?: EstablishmentUncheckedCreateNestedOneWithoutTelephoneInput
    client?: ClientUncheckedCreateNestedOneWithoutTelephoneInput
  }

  export type TelephoneCreateOrConnectWithoutEmployeeInput = {
    where: TelephoneWhereUniqueInput
    create: XOR<TelephoneCreateWithoutEmployeeInput, TelephoneUncheckedCreateWithoutEmployeeInput>
  }

  export type AddressCreateWithoutEmployeeInput = {
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
    establishment?: EstablishmentCreateNestedOneWithoutAddressInput
    client?: ClientCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutEmployeeInput = {
    id?: number
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
    establishment?: EstablishmentUncheckedCreateNestedOneWithoutAddressInput
    client?: ClientUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutEmployeeInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
  }

  export type EstablishmentCreateWithoutEmployeesInput = {
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    telephone: TelephoneCreateNestedOneWithoutEstablishmentInput
    address: AddressCreateNestedOneWithoutEstablishmentInput
    schedulings?: SchedulingCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateWithoutEmployeesInput = {
    id?: number
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    telephone_id: number
    address_id: number
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentCreateOrConnectWithoutEmployeesInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutEmployeesInput, EstablishmentUncheckedCreateWithoutEmployeesInput>
  }

  export type ReviewsCreateWithoutEmployeeInput = {
    id?: string
    rating: number
    message: string
  }

  export type ReviewsUncheckedCreateWithoutEmployeeInput = {
    id?: string
    rating: number
    message: string
  }

  export type ReviewsCreateOrConnectWithoutEmployeeInput = {
    where: ReviewsWhereUniqueInput
    create: XOR<ReviewsCreateWithoutEmployeeInput, ReviewsUncheckedCreateWithoutEmployeeInput>
  }

  export type ReviewsCreateManyEmployeeInputEnvelope = {
    data: ReviewsCreateManyEmployeeInput | ReviewsCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type SchedulingCreateWithoutEmployeeInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client: ClientCreateNestedOneWithoutSchedulingsInput
    service: ServicessCreateNestedOneWithoutSchedulingsInput
    establishment: EstablishmentCreateNestedOneWithoutSchedulingsInput
  }

  export type SchedulingUncheckedCreateWithoutEmployeeInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client_id: number
    service_id: number
    establishment_id: number
  }

  export type SchedulingCreateOrConnectWithoutEmployeeInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutEmployeeInput, SchedulingUncheckedCreateWithoutEmployeeInput>
  }

  export type SchedulingCreateManyEmployeeInputEnvelope = {
    data: SchedulingCreateManyEmployeeInput | SchedulingCreateManyEmployeeInput[]
    skipDuplicates?: boolean
  }

  export type TelephoneUpsertWithoutEmployeeInput = {
    update: XOR<TelephoneUpdateWithoutEmployeeInput, TelephoneUncheckedUpdateWithoutEmployeeInput>
    create: XOR<TelephoneCreateWithoutEmployeeInput, TelephoneUncheckedCreateWithoutEmployeeInput>
    where?: TelephoneWhereInput
  }

  export type TelephoneUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: TelephoneWhereInput
    data: XOR<TelephoneUpdateWithoutEmployeeInput, TelephoneUncheckedUpdateWithoutEmployeeInput>
  }

  export type TelephoneUpdateWithoutEmployeeInput = {
    number?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUpdateOneWithoutTelephoneNestedInput
    client?: ClientUpdateOneWithoutTelephoneNestedInput
  }

  export type TelephoneUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUncheckedUpdateOneWithoutTelephoneNestedInput
    client?: ClientUncheckedUpdateOneWithoutTelephoneNestedInput
  }

  export type AddressUpsertWithoutEmployeeInput = {
    update: XOR<AddressUpdateWithoutEmployeeInput, AddressUncheckedUpdateWithoutEmployeeInput>
    create: XOR<AddressCreateWithoutEmployeeInput, AddressUncheckedCreateWithoutEmployeeInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutEmployeeInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutEmployeeInput, AddressUncheckedUpdateWithoutEmployeeInput>
  }

  export type AddressUpdateWithoutEmployeeInput = {
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUpdateOneWithoutAddressNestedInput
    client?: ClientUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutEmployeeInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUncheckedUpdateOneWithoutAddressNestedInput
    client?: ClientUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type EstablishmentUpsertWithoutEmployeesInput = {
    update: XOR<EstablishmentUpdateWithoutEmployeesInput, EstablishmentUncheckedUpdateWithoutEmployeesInput>
    create: XOR<EstablishmentCreateWithoutEmployeesInput, EstablishmentUncheckedCreateWithoutEmployeesInput>
    where?: EstablishmentWhereInput
  }

  export type EstablishmentUpdateToOneWithWhereWithoutEmployeesInput = {
    where?: EstablishmentWhereInput
    data: XOR<EstablishmentUpdateWithoutEmployeesInput, EstablishmentUncheckedUpdateWithoutEmployeesInput>
  }

  export type EstablishmentUpdateWithoutEmployeesInput = {
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: TelephoneUpdateOneRequiredWithoutEstablishmentNestedInput
    address?: AddressUpdateOneRequiredWithoutEstablishmentNestedInput
    schedulings?: SchedulingUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutEmployeesInput = {
    id?: IntFieldUpdateOperationsInput | number
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    schedulings?: SchedulingUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type ReviewsUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: ReviewsWhereUniqueInput
    update: XOR<ReviewsUpdateWithoutEmployeeInput, ReviewsUncheckedUpdateWithoutEmployeeInput>
    create: XOR<ReviewsCreateWithoutEmployeeInput, ReviewsUncheckedCreateWithoutEmployeeInput>
  }

  export type ReviewsUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: ReviewsWhereUniqueInput
    data: XOR<ReviewsUpdateWithoutEmployeeInput, ReviewsUncheckedUpdateWithoutEmployeeInput>
  }

  export type ReviewsUpdateManyWithWhereWithoutEmployeeInput = {
    where: ReviewsScalarWhereInput
    data: XOR<ReviewsUpdateManyMutationInput, ReviewsUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type ReviewsScalarWhereInput = {
    AND?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    OR?: ReviewsScalarWhereInput[]
    NOT?: ReviewsScalarWhereInput | ReviewsScalarWhereInput[]
    id?: StringFilter<"Reviews"> | string
    rating?: IntFilter<"Reviews"> | number
    message?: StringFilter<"Reviews"> | string
    employee_id?: IntFilter<"Reviews"> | number
  }

  export type SchedulingUpsertWithWhereUniqueWithoutEmployeeInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutEmployeeInput, SchedulingUncheckedUpdateWithoutEmployeeInput>
    create: XOR<SchedulingCreateWithoutEmployeeInput, SchedulingUncheckedCreateWithoutEmployeeInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutEmployeeInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutEmployeeInput, SchedulingUncheckedUpdateWithoutEmployeeInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutEmployeeInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutEmployeeInput>
  }

  export type TelephoneCreateWithoutClientInput = {
    number: string
    establishment?: EstablishmentCreateNestedOneWithoutTelephoneInput
    employee?: EmployeeCreateNestedOneWithoutTelephoneInput
  }

  export type TelephoneUncheckedCreateWithoutClientInput = {
    id?: number
    number: string
    establishment?: EstablishmentUncheckedCreateNestedOneWithoutTelephoneInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutTelephoneInput
  }

  export type TelephoneCreateOrConnectWithoutClientInput = {
    where: TelephoneWhereUniqueInput
    create: XOR<TelephoneCreateWithoutClientInput, TelephoneUncheckedCreateWithoutClientInput>
  }

  export type AddressCreateWithoutClientInput = {
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
    establishment?: EstablishmentCreateNestedOneWithoutAddressInput
    employee?: EmployeeCreateNestedOneWithoutAddressInput
  }

  export type AddressUncheckedCreateWithoutClientInput = {
    id?: number
    country: string
    state: string
    city: string
    neighborhood: string
    public_place: string
    establishment?: EstablishmentUncheckedCreateNestedOneWithoutAddressInput
    employee?: EmployeeUncheckedCreateNestedOneWithoutAddressInput
  }

  export type AddressCreateOrConnectWithoutClientInput = {
    where: AddressWhereUniqueInput
    create: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
  }

  export type SchedulingCreateWithoutClientInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    employee: EmployeeCreateNestedOneWithoutSchedulingsInput
    service: ServicessCreateNestedOneWithoutSchedulingsInput
    establishment: EstablishmentCreateNestedOneWithoutSchedulingsInput
  }

  export type SchedulingUncheckedCreateWithoutClientInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    employee_id: number
    service_id: number
    establishment_id: number
  }

  export type SchedulingCreateOrConnectWithoutClientInput = {
    where: SchedulingWhereUniqueInput
    create: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput>
  }

  export type SchedulingCreateManyClientInputEnvelope = {
    data: SchedulingCreateManyClientInput | SchedulingCreateManyClientInput[]
    skipDuplicates?: boolean
  }

  export type TelephoneUpsertWithoutClientInput = {
    update: XOR<TelephoneUpdateWithoutClientInput, TelephoneUncheckedUpdateWithoutClientInput>
    create: XOR<TelephoneCreateWithoutClientInput, TelephoneUncheckedCreateWithoutClientInput>
    where?: TelephoneWhereInput
  }

  export type TelephoneUpdateToOneWithWhereWithoutClientInput = {
    where?: TelephoneWhereInput
    data: XOR<TelephoneUpdateWithoutClientInput, TelephoneUncheckedUpdateWithoutClientInput>
  }

  export type TelephoneUpdateWithoutClientInput = {
    number?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUpdateOneWithoutTelephoneNestedInput
    employee?: EmployeeUpdateOneWithoutTelephoneNestedInput
  }

  export type TelephoneUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    number?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUncheckedUpdateOneWithoutTelephoneNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutTelephoneNestedInput
  }

  export type AddressUpsertWithoutClientInput = {
    update: XOR<AddressUpdateWithoutClientInput, AddressUncheckedUpdateWithoutClientInput>
    create: XOR<AddressCreateWithoutClientInput, AddressUncheckedCreateWithoutClientInput>
    where?: AddressWhereInput
  }

  export type AddressUpdateToOneWithWhereWithoutClientInput = {
    where?: AddressWhereInput
    data: XOR<AddressUpdateWithoutClientInput, AddressUncheckedUpdateWithoutClientInput>
  }

  export type AddressUpdateWithoutClientInput = {
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUpdateOneWithoutAddressNestedInput
    employee?: EmployeeUpdateOneWithoutAddressNestedInput
  }

  export type AddressUncheckedUpdateWithoutClientInput = {
    id?: IntFieldUpdateOperationsInput | number
    country?: StringFieldUpdateOperationsInput | string
    state?: StringFieldUpdateOperationsInput | string
    city?: StringFieldUpdateOperationsInput | string
    neighborhood?: StringFieldUpdateOperationsInput | string
    public_place?: StringFieldUpdateOperationsInput | string
    establishment?: EstablishmentUncheckedUpdateOneWithoutAddressNestedInput
    employee?: EmployeeUncheckedUpdateOneWithoutAddressNestedInput
  }

  export type SchedulingUpsertWithWhereUniqueWithoutClientInput = {
    where: SchedulingWhereUniqueInput
    update: XOR<SchedulingUpdateWithoutClientInput, SchedulingUncheckedUpdateWithoutClientInput>
    create: XOR<SchedulingCreateWithoutClientInput, SchedulingUncheckedCreateWithoutClientInput>
  }

  export type SchedulingUpdateWithWhereUniqueWithoutClientInput = {
    where: SchedulingWhereUniqueInput
    data: XOR<SchedulingUpdateWithoutClientInput, SchedulingUncheckedUpdateWithoutClientInput>
  }

  export type SchedulingUpdateManyWithWhereWithoutClientInput = {
    where: SchedulingScalarWhereInput
    data: XOR<SchedulingUpdateManyMutationInput, SchedulingUncheckedUpdateManyWithoutClientInput>
  }

  export type ClientCreateWithoutSchedulingsInput = {
    name: string
    photo?: string | null
    email: string
    telephone: TelephoneCreateNestedOneWithoutClientInput
    address: AddressCreateNestedOneWithoutClientInput
  }

  export type ClientUncheckedCreateWithoutSchedulingsInput = {
    id?: number
    name: string
    photo?: string | null
    email: string
    telephone_id: number
    address_id: number
  }

  export type ClientCreateOrConnectWithoutSchedulingsInput = {
    where: ClientWhereUniqueInput
    create: XOR<ClientCreateWithoutSchedulingsInput, ClientUncheckedCreateWithoutSchedulingsInput>
  }

  export type EmployeeCreateWithoutSchedulingsInput = {
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone: TelephoneCreateNestedOneWithoutEmployeeInput
    address: AddressCreateNestedOneWithoutEmployeeInput
    establishment: EstablishmentCreateNestedOneWithoutEmployeesInput
    reviews?: ReviewsCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutSchedulingsInput = {
    id?: number
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone_id: number
    address_id: number
    establishment_id: number
    reviews?: ReviewsUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutSchedulingsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutSchedulingsInput, EmployeeUncheckedCreateWithoutSchedulingsInput>
  }

  export type ServicessCreateWithoutSchedulingsInput = {
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    duration: number
  }

  export type ServicessUncheckedCreateWithoutSchedulingsInput = {
    id?: number
    name: string
    price: Decimal | DecimalJsLike | number | string
    description: string
    duration: number
  }

  export type ServicessCreateOrConnectWithoutSchedulingsInput = {
    where: ServicessWhereUniqueInput
    create: XOR<ServicessCreateWithoutSchedulingsInput, ServicessUncheckedCreateWithoutSchedulingsInput>
  }

  export type EstablishmentCreateWithoutSchedulingsInput = {
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    telephone: TelephoneCreateNestedOneWithoutEstablishmentInput
    address: AddressCreateNestedOneWithoutEstablishmentInput
    employees?: EmployeeCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentUncheckedCreateWithoutSchedulingsInput = {
    id?: number
    trade_name: string
    cnpj: string
    opening_hours: Date | string
    closing_hours: Date | string
    telephone_id: number
    address_id: number
    employees?: EmployeeUncheckedCreateNestedManyWithoutEstablishmentInput
  }

  export type EstablishmentCreateOrConnectWithoutSchedulingsInput = {
    where: EstablishmentWhereUniqueInput
    create: XOR<EstablishmentCreateWithoutSchedulingsInput, EstablishmentUncheckedCreateWithoutSchedulingsInput>
  }

  export type ClientUpsertWithoutSchedulingsInput = {
    update: XOR<ClientUpdateWithoutSchedulingsInput, ClientUncheckedUpdateWithoutSchedulingsInput>
    create: XOR<ClientCreateWithoutSchedulingsInput, ClientUncheckedCreateWithoutSchedulingsInput>
    where?: ClientWhereInput
  }

  export type ClientUpdateToOneWithWhereWithoutSchedulingsInput = {
    where?: ClientWhereInput
    data: XOR<ClientUpdateWithoutSchedulingsInput, ClientUncheckedUpdateWithoutSchedulingsInput>
  }

  export type ClientUpdateWithoutSchedulingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telephone?: TelephoneUpdateOneRequiredWithoutClientNestedInput
    address?: AddressUpdateOneRequiredWithoutClientNestedInput
  }

  export type ClientUncheckedUpdateWithoutSchedulingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
  }

  export type EmployeeUpsertWithoutSchedulingsInput = {
    update: XOR<EmployeeUpdateWithoutSchedulingsInput, EmployeeUncheckedUpdateWithoutSchedulingsInput>
    create: XOR<EmployeeCreateWithoutSchedulingsInput, EmployeeUncheckedCreateWithoutSchedulingsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutSchedulingsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutSchedulingsInput, EmployeeUncheckedUpdateWithoutSchedulingsInput>
  }

  export type EmployeeUpdateWithoutSchedulingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone?: TelephoneUpdateOneRequiredWithoutEmployeeNestedInput
    address?: AddressUpdateOneRequiredWithoutEmployeeNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutEmployeesNestedInput
    reviews?: ReviewsUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutSchedulingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewsUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type ServicessUpsertWithoutSchedulingsInput = {
    update: XOR<ServicessUpdateWithoutSchedulingsInput, ServicessUncheckedUpdateWithoutSchedulingsInput>
    create: XOR<ServicessCreateWithoutSchedulingsInput, ServicessUncheckedCreateWithoutSchedulingsInput>
    where?: ServicessWhereInput
  }

  export type ServicessUpdateToOneWithWhereWithoutSchedulingsInput = {
    where?: ServicessWhereInput
    data: XOR<ServicessUpdateWithoutSchedulingsInput, ServicessUncheckedUpdateWithoutSchedulingsInput>
  }

  export type ServicessUpdateWithoutSchedulingsInput = {
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type ServicessUncheckedUpdateWithoutSchedulingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    price?: DecimalFieldUpdateOperationsInput | Decimal | DecimalJsLike | number | string
    description?: StringFieldUpdateOperationsInput | string
    duration?: IntFieldUpdateOperationsInput | number
  }

  export type EstablishmentUpsertWithoutSchedulingsInput = {
    update: XOR<EstablishmentUpdateWithoutSchedulingsInput, EstablishmentUncheckedUpdateWithoutSchedulingsInput>
    create: XOR<EstablishmentCreateWithoutSchedulingsInput, EstablishmentUncheckedCreateWithoutSchedulingsInput>
    where?: EstablishmentWhereInput
  }

  export type EstablishmentUpdateToOneWithWhereWithoutSchedulingsInput = {
    where?: EstablishmentWhereInput
    data: XOR<EstablishmentUpdateWithoutSchedulingsInput, EstablishmentUncheckedUpdateWithoutSchedulingsInput>
  }

  export type EstablishmentUpdateWithoutSchedulingsInput = {
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone?: TelephoneUpdateOneRequiredWithoutEstablishmentNestedInput
    address?: AddressUpdateOneRequiredWithoutEstablishmentNestedInput
    employees?: EmployeeUpdateManyWithoutEstablishmentNestedInput
  }

  export type EstablishmentUncheckedUpdateWithoutSchedulingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    trade_name?: StringFieldUpdateOperationsInput | string
    cnpj?: StringFieldUpdateOperationsInput | string
    opening_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    closing_hours?: DateTimeFieldUpdateOperationsInput | Date | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    employees?: EmployeeUncheckedUpdateManyWithoutEstablishmentNestedInput
  }

  export type EmployeeCreateWithoutReviewsInput = {
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone: TelephoneCreateNestedOneWithoutEmployeeInput
    address: AddressCreateNestedOneWithoutEmployeeInput
    establishment: EstablishmentCreateNestedOneWithoutEmployeesInput
    schedulings?: SchedulingCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeUncheckedCreateWithoutReviewsInput = {
    id?: number
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone_id: number
    address_id: number
    establishment_id: number
    schedulings?: SchedulingUncheckedCreateNestedManyWithoutEmployeeInput
  }

  export type EmployeeCreateOrConnectWithoutReviewsInput = {
    where: EmployeeWhereUniqueInput
    create: XOR<EmployeeCreateWithoutReviewsInput, EmployeeUncheckedCreateWithoutReviewsInput>
  }

  export type EmployeeUpsertWithoutReviewsInput = {
    update: XOR<EmployeeUpdateWithoutReviewsInput, EmployeeUncheckedUpdateWithoutReviewsInput>
    create: XOR<EmployeeCreateWithoutReviewsInput, EmployeeUncheckedCreateWithoutReviewsInput>
    where?: EmployeeWhereInput
  }

  export type EmployeeUpdateToOneWithWhereWithoutReviewsInput = {
    where?: EmployeeWhereInput
    data: XOR<EmployeeUpdateWithoutReviewsInput, EmployeeUncheckedUpdateWithoutReviewsInput>
  }

  export type EmployeeUpdateWithoutReviewsInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone?: TelephoneUpdateOneRequiredWithoutEmployeeNestedInput
    address?: AddressUpdateOneRequiredWithoutEmployeeNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutEmployeesNestedInput
    schedulings?: SchedulingUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutReviewsInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
    schedulings?: SchedulingUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeCreateManyEstablishmentInput = {
    id?: number
    name: string
    photo?: string | null
    specialty: string
    email: string
    cpf: string
    telephone_id: number
    address_id: number
  }

  export type SchedulingCreateManyEstablishmentInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client_id: number
    employee_id: number
    service_id: number
  }

  export type EmployeeUpdateWithoutEstablishmentInput = {
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone?: TelephoneUpdateOneRequiredWithoutEmployeeNestedInput
    address?: AddressUpdateOneRequiredWithoutEmployeeNestedInput
    reviews?: ReviewsUpdateManyWithoutEmployeeNestedInput
    schedulings?: SchedulingUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateWithoutEstablishmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
    reviews?: ReviewsUncheckedUpdateManyWithoutEmployeeNestedInput
    schedulings?: SchedulingUncheckedUpdateManyWithoutEmployeeNestedInput
  }

  export type EmployeeUncheckedUpdateManyWithoutEstablishmentInput = {
    id?: IntFieldUpdateOperationsInput | number
    name?: StringFieldUpdateOperationsInput | string
    photo?: NullableStringFieldUpdateOperationsInput | string | null
    specialty?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    cpf?: StringFieldUpdateOperationsInput | string
    telephone_id?: IntFieldUpdateOperationsInput | number
    address_id?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutSchedulingsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutSchedulingsNestedInput
    service?: ServicessUpdateOneRequiredWithoutSchedulingsNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingUncheckedUpdateManyWithoutEstablishmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingCreateManyServiceInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client_id: number
    employee_id: number
    establishment_id: number
  }

  export type SchedulingUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutSchedulingsNestedInput
    employee?: EmployeeUpdateOneRequiredWithoutSchedulingsNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutSchedulingsNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingUncheckedUpdateManyWithoutServiceInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
    employee_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
  }

  export type ReviewsCreateManyEmployeeInput = {
    id?: string
    rating: number
    message: string
  }

  export type SchedulingCreateManyEmployeeInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    client_id: number
    service_id: number
    establishment_id: number
  }

  export type ReviewsUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type ReviewsUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    message?: StringFieldUpdateOperationsInput | string
  }

  export type SchedulingUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client?: ClientUpdateOneRequiredWithoutSchedulingsNestedInput
    service?: ServicessUpdateOneRequiredWithoutSchedulingsNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutSchedulingsNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingUncheckedUpdateManyWithoutEmployeeInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    client_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingCreateManyClientInput = {
    id?: string
    time: Date | string
    stats?: $Enums.Stats
    note?: string | null
    employee_id: number
    service_id: number
    establishment_id: number
  }

  export type SchedulingUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    employee?: EmployeeUpdateOneRequiredWithoutSchedulingsNestedInput
    service?: ServicessUpdateOneRequiredWithoutSchedulingsNestedInput
    establishment?: EstablishmentUpdateOneRequiredWithoutSchedulingsNestedInput
  }

  export type SchedulingUncheckedUpdateWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
  }

  export type SchedulingUncheckedUpdateManyWithoutClientInput = {
    id?: StringFieldUpdateOperationsInput | string
    time?: DateTimeFieldUpdateOperationsInput | Date | string
    stats?: EnumStatsFieldUpdateOperationsInput | $Enums.Stats
    note?: NullableStringFieldUpdateOperationsInput | string | null
    employee_id?: IntFieldUpdateOperationsInput | number
    service_id?: IntFieldUpdateOperationsInput | number
    establishment_id?: IntFieldUpdateOperationsInput | number
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