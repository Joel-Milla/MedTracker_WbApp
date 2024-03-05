// Components
import Graph from "../Graph/Graph"
// Own styles
import styles from "./MainAnalysis.module.css"

function MainAnalysis() {
    return (
        <>
            <div className={`${styles.container} col-12 col-md-8`}>
                <Graph />
            </div>
        </>
    )
}

export default MainAnalysis