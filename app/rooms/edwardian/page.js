import PageHero from '@/components/PageHero';
import RoomDetail from '@/components/RoomDetail';
import { getRoom } from '@/lib/rooms';

const room = getRoom('edwardian');

export const metadata = {
  title: room.metaTitle,
  description: room.metaDescription,
};

export default function EdwardianRoomPage() {
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
