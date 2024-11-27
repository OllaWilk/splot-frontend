import React from 'react';
import { useSelector } from 'react-redux';
import { selectAllCards } from '../../../redux/selectors/cardsSelectores';
import { selectAllColumns } from '../../../redux/selectors/columnsSelector';
import {
  Bar,
  BarChart,
  Legend,
  ResponsiveContainer,
  XAxis,
  YAxis,
} from 'recharts';
import { Tooltip } from 'react-leaflet';
import { getChartData, tickFormatter } from '../../../utils/chart';
import styles from './Chart.module.scss';

const Chart = () => {
  const columns = useSelector(selectAllColumns);
  const cards = useSelector(selectAllCards);

  const chartData = getChartData(columns, cards);

  return (
    <div className={styles.chart}>
      <ResponsiveContainer width='95%' height={450}>
        <BarChart data={chartData}>
          <XAxis
            dataKey='title'
            label={{
              position: 'insideBottom',
              offset: 10,
              style: { fontSize: '14px' },
            }}
            tickFormatter={(title) => tickFormatter(title, columns, cards)}
            dy={10}
          />
          <YAxis
            allowDecimals={false}
            label={{
              angle: -90,
              position: 'insideLeft',
              style: { textAnchor: 'middle', fontSize: '14px' },
            }}
          />
          <Tooltip />
          <Bar dataKey='incomplete' fill='#5955b3' name='Incomplete' />
          <Bar dataKey='completed' fill='#8884d8' name='Completed' />
          <Legend align='center' verticalAlign='top' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export { Chart };
