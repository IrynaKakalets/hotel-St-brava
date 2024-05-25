import { Banner } from '../../components/Banner';
import { Contact } from '../../components/Contact';
import { RoomList } from '../../components/RoomList';
import './style.css';

export const HomePage = () => {
  return (
    <>
      <Banner />
      <RoomList />
      <Contact />
    </>
  );
};
