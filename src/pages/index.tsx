import { Liff } from '@line/liff';
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

import { Button } from '@/components/atoms/Button';
import { profileState } from '@/recoilAtoms/profile';

type Props = {
  liff: null | Liff;
};

export default function Home(props: Props) {
  const router = useRouter();
  const [liffObject, setLiffObject] = useState<null | Liff>(null);
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useRecoilState(profileState);

  useEffect(() => {
    const getProfile = async () => {
      if (props.liff === null) {
        return;
      }
      const lineProfile = await props.liff.getProfile();
      console.log(lineProfile);
      setProfile({
        status: 'authenticated',
        ...lineProfile,
      });
    };

    if (props.liff === null) {
      return;
    }

    props.liff.ready.then(() => {
      setIsReady(true);
      setLiffObject(props.liff);

      if (props.liff && props.liff.isLoggedIn()) {
        setIsLoggedIn(true);
        getProfile();
      }
    });
  }, [props.liff]);

  const logoutHandler = useCallback(() => {
    if (!liffObject) {
      console.error('LIFF Objectが取得できません');
      return;
    }
    if (!isLoggedIn) {
      console.error('ログインしていません');
    }
    liffObject.logout();
    setIsLoggedIn(false);
    router.push('/');
  }, [props.liff, liffObject, router]);

  return (
    <div>
      <Head>
        <title>LIFF Starter</title>
      </Head>
      <div className='home'>
        <h1 className='h1'>
          Welcome to <br />
          <span className=''>ミニアプリ_テスト</span>
        </h1>
        <div className='home__content'>
          {isReady && isLoggedIn && liffObject !== null ? (
            <>
              <p>ログイン済みです</p>
              <p>LIFF version = {liffObject.getVersion()}</p>
              <p>access token = {liffObject.getAccessToken()}</p>
              <div>
                <Link href='/test'>testへ</Link>
              </div>
              <Button
                color='secondary'
                size='medium'
                classes={['rounded-full']}
                onClick={logoutHandler}
              >
                ログアウト
              </Button>
            </>
          ) : isReady && liffObject !== null ? (
            <>
              <Button
                color='line'
                size='medium'
                classes={['rounded-full']}
                onClick={() => liffObject.login()}
              >
                LINEでログイン
              </Button>
              <p>LIFF version = {liffObject.getVersion()}</p>
            </>
          ) : (
            <></>
          )}
        </div>
        <div>
          <p>プロフィール</p>
          {profile?.status === 'authenticated' ? (
            <>
              <p>status: {profile.status}</p>
              <p>name: {profile.displayName}</p>
            </>
          ) : (
            <>
              <p>status: {profile.status}</p>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
