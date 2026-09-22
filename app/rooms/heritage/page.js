import RoomDetail from '@/components/RoomDetail';
import { getRoom } from '@/lib/rooms';

const room = getRoom('heritage');

export const metadata = {
  title: room.metaTitle,
  description: room.metaDescription,
};

export default function HeritageRoomPage() {
  return <RoomDetail room={room} />;
}
