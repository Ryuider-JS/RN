// snake to camel
export type SnakeToCamel<S extends string> =
  S extends `${infer P}_${infer C}${infer R}`
    ? `${Lowercase<P>}${Uppercase<C>}${SnakeToCamel<R>}`
    : Lowercase<S>;

export type CamelCaseObject<T> =
  T extends Array<infer U>
    ? Array<CamelCaseObject<U>>
    : T extends object
      ? { [K in keyof T as SnakeToCamel<K & string>]: CamelCaseObject<T[K]> }
      : T;
export const snakeToCamel = (str: string): string =>
  str.replace(/_([a-z])/g, (_, char: string) => char.toUpperCase());

export const snakeToCamelObject = <T>(obj: T): CamelCaseObject<T> => {
  // 1. 전달받은 데이터가 null 또는 undefined일 경우 그대로 반환
  if (obj === null || obj === undefined) {
    return obj as unknown as CamelCaseObject<T>;
  }
  // 2. 배열이면 모든 요소 재귀 반환
  if (Array.isArray(obj)) {
    return obj.map(item =>
      snakeToCamelObject(item),
    ) as unknown as CamelCaseObject<T>;
  }
  // 3. 객체가 아니라면 그대로 반환
  if (typeof obj !== 'object') {
    return obj as CamelCaseObject<T>;
  }
  // 4. 객체라면 키를 카멜케이스로 변환 후 값에 대해 재귀 호출
  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = snakeToCamel(key);
    if (typeof value === 'object') result[newKey] = snakeToCamelObject(value);
    else result[newKey] = value;
  }

  return result as CamelCaseObject<T>;
};

// camel to snake

export type CamelToSnake<S extends string> = S extends `${infer C}${infer R}`
  ? C extends Lowercase<C>
    ? `${C}${CamelToSnake<R>}`
    : `_${Lowercase<C>}${CamelToSnake<R>}`
  : S;

export type SnakeCaseObject<T> =
  T extends Array<infer U>
    ? Array<SnakeCaseObject<U>>
    : T extends object
      ? { [K in keyof T as CamelToSnake<K & string>]: SnakeCaseObject<T[K]> }
      : T;

export const camelToSnake = (str: string) =>
  str.replace(/([A-Z])/g, '_$1').toLowerCase();

export const camelToSnakeObject = <T>(obj: T): SnakeCaseObject<T> => {
  if (obj === null || obj === undefined)
    return obj as unknown as SnakeCaseObject<T>;
  if (Array.isArray(obj))
    return obj.map(camelToSnakeObject) as unknown as SnakeCaseObject<T>;
  if (typeof obj !== 'object') return obj as SnakeCaseObject<T>;

  const result: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(obj)) {
    const newKey = camelToSnake(key);
    result[newKey] =
      typeof value === 'object' ? camelToSnakeObject(value) : value;
  }
  return result as SnakeCaseObject<T>;
};
