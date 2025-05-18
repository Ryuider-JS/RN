import {ActivityIndicator} from 'react-native';
import React from 'react';

const SActivityIndicator = () => {
  return (
    <>
      <ActivityIndicator />
      <ActivityIndicator size="large" />
      <ActivityIndicator size="small" color="#0000ff" />
      <ActivityIndicator size="large" color="#00ff00" />
    </>
  );
};

export default SActivityIndicator;
