import { RecoilEnv, RecoilRoot } from 'recoil';
import { Dummy } from './dummy';
import Head from 'next/head';

// 開発時にエラーログが出ないようにする
RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;

export const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>LIFF Starter | default title</title>
      </Head>
      <RecoilRoot>
        <main>{children}</main>
        <footer>
          <p>ビルドID: {process.env.NEXT_PUBLIC_BUILD_ID}</p>
          <Dummy />
        </footer>
      </RecoilRoot>
    </>
  );
};
