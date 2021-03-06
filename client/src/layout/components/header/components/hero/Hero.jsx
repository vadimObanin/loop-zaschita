import styles from './Hero.module.scss';

function Hero() {
    return (
        <div className={styles.container}>
            <div className={styles.item}>
                <h2 className={styles.title}>Липецкое областное объединение потребителей</h2>
            </div>
            <div className={styles.item_name}>
                <h1 className={styles.name}>«Защита»</h1>
            </div>
            <div className={styles.description}>
                <p>Основано в 1994 году в качестве общественной организации управлением юстиции администрации Липецкой
                    области</p>

            </div>
        </div>
    )
}

export default Hero;