import React from 'react';
import { View } from 'react-native';

import Skeletons from '@/components/skeletons';
import { useGetAuthQuery } from '@/queries/useGetAuthUser';

import ProfileLoginCommon from './ProfileLoginCommon';

const ProfileLoginContainer = () => {
  const { data, isPending } = useGetAuthQuery();

  return (
    <View className="justify-center px-6 py-4 w-full h-28 bg-white rounded-xl">
      {isPending ? <Skeletons /> : <ProfileLoginCommon data={data} />}
    </View>
  );
};

export default ProfileLoginContainer;
