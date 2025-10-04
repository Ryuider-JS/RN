import Svg, { Path } from 'react-native-svg';

const OrangeIcon = () => {
  const size = 48;
  return (
    <Svg width={size} height={size} viewBox="0 0 24 24" fill="none">
      <Path
        d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z"
        fill="#FF9900"
      />

      <Path
        d="M17 6C17 6 15.5 4.5 14 4.5C12.5 4.5 11 6 11 6V7C11 7 12.5 8.5 14 8.5C15.5 8.5 17 7 17 7V6Z"
        fill="#6B8E23"
        stroke-linejoin="round"
      />

      <Path
        d="M13 5.5C13 5.5 11.5 4 10 4C8.5 4 7 5.5 7 5.5V6.5C7 6.5 8.5 8 10 8C11.5 8 13 6.5 13 6.5V5.5Z"
        fill="#6B8E23"
        stroke-linejoin="round"
      />
    </Svg>
  );
};

export default OrangeIcon;
