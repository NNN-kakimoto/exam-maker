import { NextPage } from 'next';
import Link from 'next/link';
import { useRecoilValue } from 'recoil';

import { Profile, profileState } from '@/recoilAtoms/profile';

export const Test: NextPage = () => {
  const profile = useRecoilValue<Profile>(profileState);
  return (
    <>
      <div>
        <Link href='/'>戻る</Link>
      </div>
      {profile?.status === 'authenticated' ? (
        <>
          <div>name: {profile.displayName ?? ''}</div>
          <div>message: {profile.statusMessage ?? ''}</div>
          <div>
            <img src={profile.pictureUrl ?? ''} alt='' />
          </div>
        </>
      ) : (
        <>
          <p>ログインしていません</p>
          <p>status: {profile.status}</p>
        </>
      )}
    </>
  );
};

export default Test;
