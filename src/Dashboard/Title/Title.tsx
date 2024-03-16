// Own styles
import styles from './Title.module.css'

function Title() {
    return (
        <div className={styles.container_title}>
            <h1 className={styles.title}>
                MedTracker
            </h1>
        </div>
    )
}

export default Title;