import { Canvas } from '@react-three/fiber';
import { OrbitControls, Stats } from '@react-three/drei';

import { store } from './store.js';
import { Provider } from 'react-redux';

import Table from './components/table';

function App() {
  return (
    <Canvas shadows dpr={[1, 2]} camera={{ position: [12, 9, 11] }}>
      <Provider store={store}>
        <ambientLight intensity={1} />
        <spotLight penumbra={0.5} position={[10, 10, 5]} castShadow />

        <axesHelper args={[100, 100, 100]} />

        <Table />
        <Stats />
        <OrbitControls minPolarAngle={Math.PI / 4} maxPolarAngle={Math.PI / 2} enablePan={false} enableZoom={false} />
      </Provider>
    </Canvas>
  );
}

export default App;
