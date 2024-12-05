import { RecoilRoot } from 'recoil';
import { Dummy } from './dummy';
import Head from 'next/head';

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
