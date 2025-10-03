/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ['./App.tsx', './src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      fontFamily: {
        // 💡 Pretendard 폰트 두께별 클래스 등록 (파일명 기반)
        // 파일명: Pretendard-[Weight].otf
        // Tailwind 클래스명: font-pretendard-[weight]
        'pretendard-black': ['Pretendard-Black'],
        'pretendard-bold': ['Pretendard-Bold'],
        'pretendard-extrabold': ['Pretendard-ExtraBold'],
        'pretendard-extralight': ['Pretendard-ExtraLight'],
        'pretendard-light': ['Pretendard-Light'],
        'pretendard-medium': ['Pretendard-Medium'],
        'pretendard-regular': ['Pretendard-Regular'],
        'pretendard-semibold': ['Pretendard-SemiBold'],
        'pretendard-thin': ['Pretendard-Thin'],
      },
    },
  },
  plugins: [],
};
