import { useEffect } from 'react';
import useAppStore from '../store/store';
import axiosInstance, { setAccessToken } from '../axiosInstance';

export default function useAppInit() {
  const setUser = useAppStore((store) => store.setUser);
  const setChairs = useAppStore((store) => store.setChairs);

  useEffect(() => {
    axiosInstance
      .get('/tokens/refresh')
      .then((res) => {
        const { user, accessToken } = res.data;
        setUser(user);
        setAccessToken(accessToken);
      })
      .catch(() => {
        setUser(null);
      });

    axiosInstance
      .get('/chairs')
      .then((res) => setChairs(res.data))
      .catch(() => setChairs([]));
  }, []);
}
