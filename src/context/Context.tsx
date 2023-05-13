import React from 'react';

export const Context = React.createContext<{
  accessToken: string;
  setAccessToken: React.Dispatch<React.SetStateAction<any>>;
}>({
  accessToken: '',
  setAccessToken: () => null,
});

export default function useApplicationContext() {
  return React.useContext(Context);
}
