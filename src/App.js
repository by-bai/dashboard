import Bar from './lib/NivoBar';
import Line from './lib/NivoLine';
import Pie from './lib/NivoPie';
import RechartsLine from './lib/RechartsLine';
import { nivoBarData, nivoLineData, nivoPieData } from './data/NivoData';
import {
    rechartsLineData,
    rechartsBarData,
    rechartsPieData,
} from './data/RechartsData';
import RechartsPie from './lib/RechartsPie';
import RechartsBar from './lib/RechartsBar';
import {
    victoryBarData,
    victoryLineData,
    victoryPieData,
} from './data/VictoryData';
import VBar from './lib/VictoryBar';
import VPie from './lib/VictoryPie';
import VLine from './lib/VictoryLine';

export default function App() {
    return (
        <div>
            <div style={{ height: 500 }}>
                <Bar data={nivoBarData} />
            </div>
            <div style={{ height: 500 }}>
                <Line data={nivoLineData} />
            </div>
            <div style={{ height: 500 }}>
                <Pie data={nivoPieData} />
            </div>
            <div style={{ height: 500 }}>
                <RechartsLine data={rechartsLineData} />
            </div>
            <div style={{ height: 500 }}>
                <RechartsPie data={rechartsPieData} />
            </div>
            <div style={{ height: 500 }}>
                <RechartsBar data={rechartsBarData} />
            </div>

            <div style={{ height: 800 }}>
                <VBar data={victoryBarData} />
            </div>

            <div style={{ height: 800 }}>
                {' '}
                <VPie data={victoryPieData} />
            </div>

            <div style={{ height: 800 }}>
                {' '}
                <VLine data={victoryLineData} />
            </div>
        </div>
    );
}
