export const NAVIGATOR = {
  ROOT: '/',
  HOME: 'home',
  DELIVERY: 'truck',
  PROFILE: 'account',
} as const;

export const BOTTOM_TAB: Record<
  (typeof NAVIGATOR)[keyof typeof NAVIGATOR],
  string
> = {
  [NAVIGATOR.HOME]: '홈',
  [NAVIGATOR.DELIVERY]: '배송',
  [NAVIGATOR.PROFILE]: '마이페이지',
  '/': '',
};
