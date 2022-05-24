import Image from 'next/image'
import { Modal } from './Modal'
interface HomeModalProps {
    home: Home;
    isVisible: boolean;
    onClose: () => void;
}

export const HomeModal = ({home, isVisible, onClose}: HomeModalProps ) => {

  return (<Modal title={home.address} onClose={onClose} isVisible={isVisible}>
    <Image src={home.picture} alt={'Home picture'} height={900} width={1600}/>
    <div className="text-lg font-bold text-blue-900">
      {home.price} {home.currency}
    </div>
    <div>
      <span className="text-sm font-medium text-black">{'Owned by '}</span>
      <span className="text-sm font-medium text-gray-600">{home.owner}</span>
    </div>
    {home.floors && 
          <span className="mr-2 font-medium">{home.floors} floors</span> 
    }
    <div>
      <span className="mr-2 font-medium">{home.rooms} rooms</span> 
    </div>
    <div>
      <span className="mr-2 font-medium">{home.surface} m²</span> 
    </div>
    {home.floors && 
          <span className="mr-2 font-medium">Built in {home.year}</span> 
    }
  </Modal>)
}