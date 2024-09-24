import { Coordinates } from '@/src/components/Game/Game';
import { createContext } from 'react';

const CoordinateContext = createContext<Coordinates>({ x: 0, y: 0 });

export default CoordinateContext;
