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
  const [isReady, setIsReady] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [profile, setProfile] = useRecoilState(profileState);

  useEffect(() => {
    const getProfile = async () => {
      if (props.liff === null) {
        return;
      }
      const lineProfile = await props.liff.getProfile();
      // サーバーに保存リクエスト
      const res = await fetch('/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          lineUid: lineProfile.userId,
          displayName: lineProfile.displayName,
          pictureUrl: lineProfile.pictureUrl,
          statusMessage: lineProfile.statusMessage,
        }),
      }).catch((e) => {
        console.error(e);
        throw e;
      });
      if (res) {
        const resProfile = await res.json();
        setProfile({
          status: 'authenticated',
          ...resProfile,
        });
      }
    };

    if (props.liff === null) {
      return;
    }

    props.liff.ready.then(() => {
      setIsReady(true);

      if (props.liff && props.liff.isLoggedIn()) {
        setIsLoggedIn(true);
        if (profile.status === 'unauthenticated') {
          getProfile();
        }
      }
    });
  }, [props.liff, profile.status]);

  const logoutHandler = useCallback(() => {
    if (props.liff === null) {
      console.error('LIFF Objectが取得できません');
      return;
    }
    if (profile.status === 'unauthenticated') {
      console.error('ログインしていません');
      return;
    }
    props.liff.logout();
    setIsLoggedIn(false);
    setProfile({
      status: 'unauthenticated',
    });
    router.push('/');
  }, [props.liff, router, profile.status]);

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
          {isReady && isLoggedIn && props.liff !== null ? (
            <>
              <p>ログイン済みです</p>
              <p>LIFF version = {props.liff.getVersion()}</p>
              <p>access token = {props.liff.getAccessToken()}</p>
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
          ) : isReady && props.liff !== null ? (
            <>
              <Button
                color='line'
                size='medium'
                classes={['rounded-full']}
                onClick={() => props.liff?.login()}
              >
                LINEでログイン
              </Button>
              <p>LIFF version = {props.liff.getVersion()}</p>
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
              <p>userId: {profile.id}</p>
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
