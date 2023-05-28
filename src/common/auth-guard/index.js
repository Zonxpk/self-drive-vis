import { useQuery } from '@tanstack/react-query';
import { useRouter } from 'next/router';
import nookies from 'nookies';
import { useEffect } from 'react';
import { getCurrentUserInfo } from 'services/auth.service';
import userStore from 'stores/user.store';

export default function AuthGuard(props) {
  const router = useRouter();
  const cookies = nookies.get();
  const setUser = userStore((e) => e.setUser);

  useQuery({
    queryKey: ['getCurrentUserInfo'],
    queryFn: getCurrentUserInfo,
    onSuccess: (user) => setUser(user),
  });

  useEffect(() => {
    if (!router.isReady || props.disabled) {
      return;
    }

    if (!cookies.token) {
      router.push('/login');
    }
  }, [router]);

  return props.children;
}
