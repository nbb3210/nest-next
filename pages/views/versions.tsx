import { NextPage, NextPageContext } from 'next';
import * as React from 'react';
import Layout from '../../components/Layout';

type Props = {
  id: number;
};

const Index: NextPage<Props> = (props) => {
  const { id } = props;
  return (
    <Layout title={`${id}`}>
      <h1>versionList: {id}</h1>
    </Layout>
  );
};

Index.getInitialProps = (res: NextPageContext) => {
  const { query } = res;
  return { ...query } as object & {
    id: number;
  };
};

export default Index;
