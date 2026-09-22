import RoomDetail from '@/components/RoomDetail';
import { getRoom } from '@/lib/rooms';

const room = getRoom('victorian');

export const metadata = {
  title: room.metaTitle,
  description: room.metaDescription,
};

export default function VictorianRoomPage() {
  return <RoomDetail room={room} />;
}
