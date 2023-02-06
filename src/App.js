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
        </div>
    );
}
