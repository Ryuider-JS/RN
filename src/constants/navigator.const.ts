export const NAVIGATOR = {
  ROOT: '/',
  HOME: 'Home',
  DELIVERY: 'Delivery',
  PROFILE: 'Profile',
};

export const BOTTOM_TAB: Record<
  (typeof NAVIGATOR)[keyof typeof NAVIGATOR],
  string
> = {
  [NAVIGATOR.HOME]: '홈',
  [NAVIGATOR.DELIVERY]: '배송',
  [NAVIGATOR.PROFILE]: '마이페이지',
};
