import type { NextPage } from 'next';
import { useEffect, useState } from 'react';

import { HomeList } from '../components/HomeList';
import { Layout } from '../components/Layout';
import { AnimatedLoader } from '../components/AnimatedLoader';
import { getRandomHomes } from '../business/getRandomHomes';
import { Filter } from '../components/Filter';

const Homes: NextPage = () => {
  const [homes, setHomes] = useState<Home[]>();
  const [isLoading, setLoading] = useState(true);
  const [filter, setFilter] = useState<string>('');

  useEffect(() => {
    const fetchHomes = async () => {
      const homes = await getRandomHomes();
      setHomes(homes);
      setLoading(false);
    }
    fetchHomes();
  }, []);

  if (isLoading) return <AnimatedLoader />
  if (!homes) return <p>No home to show, please reload the page!</p>

  return (
    <Layout>
      <Filter onFilter={(text) => setFilter(text)}/>
      <HomeList homes={homes} filter={filter} />
    </Layout>
  );
};


export default Homes;
