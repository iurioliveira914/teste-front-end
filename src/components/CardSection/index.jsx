import styles from  './styles.module.scss'

import tecnologia from '../../assets/card-icons/tecnologia.png'
import supermercado from '../../assets/card-icons/supermercado.png'
import bebidas from '../../assets/card-icons/bebidas.png'
import ferramentas from '../../assets/card-icons/ferramentas.png'
import saude from '../../assets/card-icons/saude.png'
import corrida from '../../assets/card-icons/corrida.png'
import moda from '../../assets/card-icons/moda.png'

export function Card() {
    return (
        <section className={styles.sectionCard}>
            <div className={styles.card}>
                <div className={styles.imageContainer}>
                    <img src={tecnologia} alt="Tecnologia" />
                </div>
                <span>Tecnologia</span>
            </div>

            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={supermercado} alt="Supermercado" />
                </div>
                <span>Supermercado</span>
            </div>

            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={bebidas} alt="Tecnologia" />
                </div>
                <span>Bebidas</span>
            </div>

            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={ferramentas} alt="Tecnologia" />
                </div>
                <span>Ferramentas</span>
            </div>

            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={saude} alt="Tecnologia" />
                </div>
                <span>Saúde</span>
            </div>

            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={corrida} alt="Tecnologia" />
                </div>
                <span>Esportes e Fitness</span>
            </div>

            <div className={styles.card}>
                <div className={styles.imgContainer}>
                    <img src={moda} alt="Tecnologia" />
                </div>
                <span>Moda</span>
            </div>
        </section>
    )
}
