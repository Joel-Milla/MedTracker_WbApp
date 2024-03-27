
function DataValues() {
    return (
        <>
            {/* Show the numeric values of min/mean/max of all the values of the chart */}
            <div className="flex justify-around">
                {/* Apply to each card similar styles as symptomCard */}
                <div>
                    <h2 className="text-sm text-gray-500">Minimo</h2>
                    <p className="text-4xl font-semibold">4,200</p>
                </div>
                <div>
                    <h2 className="text-sm text-gray-500">Promedio</h2>
                    <p className="text-4xl font-semibold">9,000</p>
                </div>
                <div>
                    <h2 className="text-sm text-gray-500">Maximo</h2>
                    <p className="text-4xl font-semibold">18,000</p>
                </div>
            </div>
        </>
    )
}

export default DataValues;