import { RootState } from '../store';
import { Column } from '@alexwilk/spacesteps-types';

export const selectAllColumns = (state: RootState) => state.columns as Column[];
