import { Group, Stack, Text, Title } from '@mantine/core'
import { ArcElement, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { useStyles } from './styles';
Chart.register(ArcElement)

type Props = {}

const config = {
  data: {
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: [
          "rgb(255, 99, 132)",
          "rgb(54, 162, 235)",
          "rgb(255, 205, 86)",
        ],
        hoverOffset: 4,
        borderRadius: 30,
        spacing: 10
      },
    ],
  },
  options: {
    cutout: 115
  }
};


const Graph = (props: Props) => {
  const { classes } = useStyles()
  return (
    <Group mx={"auto"} sx={{ maxWidth: "xs" }}>
      <div>
        <Doughnut {...config}></Doughnut>
        <Title mb={4} order={3} className={classes.chartTotal}>Total <Text size={"xl"} className="chart-total-number">${0}</Text></Title>
      </div>
      <Stack py={80} spacing="sm">
        Labels
      </Stack>
    </Group>
  )
}

export default Graph