import PageHero from '@/components/PageHero';
import RoomDetail from '@/components/RoomDetail';
import { getRoom } from '@/lib/rooms';

const room = getRoom('heritage');

export const metadata = {
  title: room.metaTitle,
  description: room.metaDescription,
};

export default function HeritageRoomPage() {
  return (
    <>
      <PageHero
        image={room.heroImage}
        tag={room.tag}
        title={room.title}
        description={room.heroDescription}
        primaryBook
        primaryLabel="Book Now"
      />
      <RoomDetail room={room} />
    </>
  );
}
