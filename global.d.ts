// env 추가시 타입 선언
declare module '@env' {
  export const DATABASE_URL: string;
  export const SUPABASE_URL: string;
  export const SUPABASE_ANON_KEY: string;
  export const KAKAO_NATIVE_APP_KEY: string;
  export const KAKAO_NATIVE_TEST_APP_KEY: string;
  export const KAKAO_CLIENT_SECRET_CODE: string;
}
