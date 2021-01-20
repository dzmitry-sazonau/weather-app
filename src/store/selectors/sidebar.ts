import { RootState } from '../configure-store';
import { SidebarCondition } from '../../model/sidebar-сondition';

export const getActiveSidebarCondition = (state: RootState): SidebarCondition => {
  return state.sidebarSlice.condition;
};
