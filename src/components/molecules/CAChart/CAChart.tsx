import React, { useState } from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend, ChartOptions } from 'chart.js';
import styled from 'styled-components';
import { StyledCardMain, StyledTitle, StyledChartContainer, StyledLegend, StyledText, StyledPopup, StyledOverlay } from './CAChart-styling';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export const CAChart = () => {
  const [popupData, setPopupData] = useState(null);

  const chartData = {
    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    datasets: [
      {
        label: 'Bitcoin (BTC)',
        data: [33000, 47000, 49900, 60000, 49000, 41000, 61500],
        borderColor: '#f2a900',
        backgroundColor: 'rgba(242, 169, 0, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#f2a900',
      },
      {
        label: 'Ethereum (ETH)',
        data: [43500, 51600, 63700, 53800, 33900, 24000, 14100],
        borderColor: '#627eea',
        backgroundColor: 'rgba(98, 126, 234, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#627eea',
      },
      {
        label: 'Litecoin (LTC)',
        data: [30500, 41000, 42000, 37800, 35500, 31700, 42900],
        borderColor: '#00c2cb',
        backgroundColor: 'rgba(0, 194, 203, 0.2)',
        borderWidth: 2,
        pointBackgroundColor: '#00c2cb',
      },
    ],
  };

  const chartOptions: ChartOptions<'line'> = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
      },
    },
    scales: {
      y: {
        ticks: {
          callback: (tickValue) => {
            if (typeof tickValue === 'number') {
              return `$${tickValue}`;
            }
            return tickValue;
          },
        },
      },
    },
    onClick: (event, elements, chart) => {
      if (elements.length > 0) {
        const element = elements[0];
        const datasetIndex = element.datasetIndex;
        const dataIndex = element.index;

        const dataset = chartData.datasets[datasetIndex];
        const value = dataset.data[dataIndex];
        const label = chartData.labels[dataIndex];

        setPopupData({
          label: dataset.label,
          value: value,
          day: label,
        });
      }
    },
  };

  const closePopup = () => {
    setPopupData(null);
  };

  return (
    <StyledCardMain>
      <StyledTitle>Cryptocurrency Market Trends</StyledTitle>
      <StyledText>
        Track the weekly performance of top cryptocurrencies like Bitcoin, Ethereum, and Litecoin. Our app provides real-time data to help
        you stay ahead in the market.
      </StyledText>
      <StyledChartContainer>
        <Line data={chartData} options={chartOptions} />
      </StyledChartContainer>
      <StyledLegend>
        <span style={{ color: '#f2a900' }}>■ Bitcoin</span>
        <span style={{ color: '#627eea', marginLeft: '20px' }}>■ Ethereum</span>
        <span style={{ color: '#00c2cb', marginLeft: '20px' }}>■ Litecoin</span>
      </StyledLegend>

      {popupData && (
        <>
          <StyledOverlay onClick={closePopup} />
          <StyledPopup>
            <h4>{popupData.label}</h4>
            <p>Day: {popupData.day}</p>
            <p>Value: ${popupData.value}</p>
            <button onClick={closePopup}>Close</button>
          </StyledPopup>
        </>
      )}
    </StyledCardMain>
  );
};
