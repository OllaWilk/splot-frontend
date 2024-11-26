import { RootState } from '../store';

interface Column {
  id: string;
  title: string;
  icon?: string;
}

export const selectAllColumns = (state: RootState) => state.columns as Column[];
