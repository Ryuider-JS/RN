export const formatPhoneNumber = (
  phoneNumber: string | null | undefined,
): string => {
  if (!phoneNumber) return '';
  if (phoneNumber.startsWith('+82')) {
    return '0' + phoneNumber.slice(4);
  }

  return phoneNumber;
};
