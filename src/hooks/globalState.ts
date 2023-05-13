import React from 'react';

export default function useGlobalState() {
  const [accessToken, setAccessToken] = React.useState('');

  return {accessToken, setAccessToken};
}
