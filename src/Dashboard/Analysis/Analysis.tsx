// External components
import { Card } from "@nextui-org/react";
import { Divider } from '@tremor/react';
// Own Components
import Graph from "./Graph/Graph";
import Insights from "./Insights/Insights";

function Analysis() {
    return (
        <>
            {/* Divide analysis in two parts, the graph amd the insights that can be obtained from the data */}
            <Card className="flex p-3">
                <Graph />
                <Divider>Diagnóstico</Divider>
                <Insights />
            </Card>
        </>
    )
}

export default Analysis;