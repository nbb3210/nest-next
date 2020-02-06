import * as React from 'react';
import Head from 'next/head';

type Props = {
  title?: string;
};

const Layout: React.FunctionComponent<Props> = ({ children, title = 'title' }) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    {children}
    <footer>
      <span> Powered by 产品研发和工程架构部-前端-基础工程-前端工程化体系</span>
    </footer>
  </div>
);

export default Layout;
