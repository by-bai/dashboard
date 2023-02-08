import { VictoryPie } from 'victory';

const VPie = ({ data }) => (
    <VictoryPie
        data={[
            { x: 'Cats', y: 35 },
            { x: 'Dogs', y: 40 },
            { x: 'Birds', y: 55 },
        ]}
    />
);

export default VPie;
