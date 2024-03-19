// External components
import { Card } from "@nextui-org/react";
import { Divider } from '@tremor/react';
// Own Components
import Graph from "./Graph/Graph";
import Insights from "./Insights/Insights";

function Analysis() {
    return (
        <>
            <Card className="p-3 flex justify-center">
                <Graph />
                <Divider>Diagnóstico</Divider>
                <Insights />
            </Card>
        </>
    )
}

export default Analysis;