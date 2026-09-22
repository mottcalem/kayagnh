import RoomDetail from '@/components/RoomDetail';
import { getRoom } from '@/lib/rooms';

const room = getRoom('couchette');

export const metadata = {
  title: room.metaTitle,
  description: room.metaDescription,
};

export default function CouchetteRoomPage() {
  return <RoomDetail room={room} />;
}
