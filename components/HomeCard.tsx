import Image from 'next/image';
import { formatCurrency } from '../utils/format';

interface HomeCardProps {
  home: Home;
  onClick: () => void;
}

export const HomeCard = ({home, onClick}: HomeCardProps) => {
  return (
    <div className="w-full p-4 mb-1 overflow-hidden bg-white border rounded shadow-xl cursor-pointer" onClick={onClick}>
      <div className="flex justify-between w-full pb-3">
        <div className="flex flex-row justify-between w-full">
          <span className="text-sm font-bold">{home.address}</span>
          <span className="text-sm font-bold text-blue-900">{formatCurrency(home.price, home.currency)}</span>
        </div>
      </div>
      <div className="w-full h-48 bg-cover relative">

        <Image  src={home.picture} alt="home picture" layout="fill"/>
      </div>
      <div className="pb-2">
        <div className="pt-2">
          <i className="cursor-pointer far fa-heart"></i>
          <span className="text-sm font-medium text-gray-400">{home.owner}</span>
        </div>
        <div className="pt-1">
          <div className="mb-2 text-sm">
            <span className="mr-2 font-medium">Surface:</span> {home.surface}
          </div>
        </div>
      </div>
    </div>
  );
};
