import React from 'react';
import styles from './Chart.module.scss';
import { useSelector } from 'react-redux';
import { RootState } from 'src/redux/store';
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';
import { Tooltip } from 'react-leaflet';

interface ChartData {
  title: string;
  count: number;
}

const Chart = () => {
  const columns = useSelector((state: RootState) => state.columns);
  const cards = useSelector((state: RootState) => state.cards);

  console.log('COLUMNS', columns, 'CARDS', cards);

  const chartData: ChartData[] = columns.map((column) => ({
    title: column.title,
    count: cards.filter((card) => card.columnId === column.id).length,
  }));

  console.log('CHART DATA', chartData);

  return (
    <div className={styles.chart}>
      {' '}
      <h2>Items per Category</h2>
      <ResponsiveContainer width='100%' height={400}>
        <BarChart data={chartData}>
          <XAxis dataKey='title' />
          <YAxis />
          <Tooltip />
          <Bar dataKey='count' fill='#8884d8' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export { Chart };
