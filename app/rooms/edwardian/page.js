import RoomDetail from '@/components/RoomDetail';
import { getRoom } from '@/lib/rooms';

const room = getRoom('edwardian');

export const metadata = {
  title: room.metaTitle,
  description: room.metaDescription,
};

export default function EdwardianRoomPage() {
  return <RoomDetail room={room} />;
}
