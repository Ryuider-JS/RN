import React from 'react';
import { View } from 'react-native';

import Skeletons from '@/components/skeletons';
import { useGetUser } from '@/hooks/useGetUser';

import ProfileLoginCommon from './ProfileLoginCommon';

const ProfileLoginContainer = () => {
  const { data, isLoading } = useGetUser();

  return (
    <View className="justify-center px-6 py-4 w-full h-28 bg-white rounded-xl">
      {isLoading ? <Skeletons /> : <ProfileLoginCommon data={data} />}
    </View>
  );
};

export default ProfileLoginContainer;
