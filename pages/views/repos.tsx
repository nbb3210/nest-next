import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import Layout from '../../components/Layout';

type Props = {
  title: string;
};

const Index: NextPage<Props> = (props) => {
  const { title } = props;
  return (
    <Layout title={title}>
      <h1>Repo</h1>
    </Layout>
  );
};

Index.getInitialProps = (res: NextPageContext) => {
  const { query } = res;
  return { ...query } as object & {
    title: string;
  };
};

export default Index;
