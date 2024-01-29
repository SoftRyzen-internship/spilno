import { ModalTest } from '@/components/ui/ModalTest';
import { SliderTest } from '@/components/base/SliderTest/SliderTest';

export default function Home() {
  return (
    <div>
      <ModalTest />
      <div className="container">
        <SliderTest />
      </div>
    </div>
  );
}
