import { BarChart } from '@mui/x-charts/BarChart';
import { Box } from '@mui/material';

export default function SimpleCharts({ users, reserv, cars }) {
    return (
        <Box display={'flex'}>
            <BarChart
                xAxis={[
                    {
                        id: 'barCategories',
                        data: ['Users', 'Reservations', 'Cars'],
                        scaleType: 'band',
                    },
                ]}
                series={[
                    {
                        data: [users, reserv, cars],
                    },
                ]}
                width={400}
                height={400}
            />
        </Box>
    );
}
