import { HomeCard } from './HomeCard';

export const HomeList = ({ homes }: { homes: Home[] }) =>
  <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4 my-4">
    {homes.map(home => <HomeCard key={home.id} {...home} />)}
  </div>

