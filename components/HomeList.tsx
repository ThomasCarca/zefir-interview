import { useState } from 'react';
import { HomeCard } from './HomeCard';
import { HomeModal } from './HomeModal';

export const HomeList = ({ homes }: { homes: Home[] }) =>
{
  const [selectedHome, setSelectedHome] = useState<Home>();
  const isModalVisible = selectedHome !== undefined;

  return <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
    {homes.map(home => <HomeCard key={home.id} home={home} onClick={() => setSelectedHome(home)} />)}
    {selectedHome && <HomeModal home={selectedHome} isVisible={isModalVisible} onClose={() => setSelectedHome(undefined)}/>}
  </div>;
}

