export function multiply(a: number, b: number): Promise<number> {
  return Promise.resolve(a * b);
}
import {
  rootReducer,
  selectInputState,
  store,
} from '@hiucuockhanh/react-native-input-status';

export { rootReducer, selectInputState, store };
