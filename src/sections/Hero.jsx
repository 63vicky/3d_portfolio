import { PerspectiveCamera } from '@react-three/drei';
import { Canvas } from '@react-three/fiber';
import HackerRoom from '../components/HackerRoom';

const Hero = () => {
  return (
    <section className="min-h-screen flex w-full flex-col relative">
      <div className="w-full mx-auto flex flex-col sm:mt-36 mt-20 c-space gap-3">
        <p className="sm:text-3xl text-xl font-medium text-white text-center font-generalsans">
          Hi, I am Vivek <span className="waving-hand">👋</span>
        </p>
        <p className="text-gray_gradient hero_tag">Building Product & Brands</p>
      </div>
      <div className="w-full h-full absolute inset-0">
        <Canvas className="w-full h-full">
          <PerspectiveCamera makeDefault position={[0, 0, 30]} />

          <HackerRoom />
        </Canvas>
      </div>
    </section>
  );
};

export default Hero;
