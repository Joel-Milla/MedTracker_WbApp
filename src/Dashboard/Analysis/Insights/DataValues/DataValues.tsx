
function DataValues() {
    return (
        <>
        {/* Show the numeric values of min/mean/max of all the values of the chart */}
            <div className="grid grid-cols-3">
                <div>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        <span className="absolute inset-0" aria-hidden={true} />
                        Minimo
                    </p>
                    <p className="mt-3 flex items-end">
                        <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            4,200
                        </span>
                    </p>
                </div>
                <div>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        <span className="absolute inset-0" aria-hidden={true} />
                        Promedio
                    </p>
                    <p className="mt-3 flex items-end">
                        <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            9,000
                        </span>
                    </p>
                </div>
                <div>
                    <p className="text-tremor-default text-tremor-content dark:text-dark-tremor-content">
                        <span className="absolute inset-0" aria-hidden={true} />
                        Maximo
                    </p>
                    <p className="mt-3 flex items-end">
                        <span className="text-tremor-metric font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
                            18,000
                        </span>
                    </p>
                </div>
            </div>
        </>
    )
}

export default DataValues;