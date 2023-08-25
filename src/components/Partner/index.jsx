import styles from './styles.module.scss'

import logo from '../../assets/header-icons/logo.svg'

export function Partner() {
    return (
        <section className={styles.sectionExterna}>

            <div className={styles.partnerSection}>
                <div className={styles.partnerContent}>
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit.</p>
                    <button>Confira</button>
                </div>

                <div className={styles.partnerContent}>
                    <h2>Parceiros</h2>
                    <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit.</p>
                    <button>Confira</button>
                </div>  
            </div>

            <h2 className={styles.headingExterno}>Produtos relacionados</h2>
            <p className={styles.paragraphExterno}>Ver todos</p>

            <div className={styles.partnerSection}>
                <div className={styles.partnerContent}>
                    <h2>Produtos</h2>
                    <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit.</p>
                    <button>Confira</button>
                </div>

                <div className={styles.partnerContent}>
                    <h2>Produtos</h2>
                    <p>Lorem ipsum dolor sit <br /> amet consectetur adipisicing elit.</p>
                    <button>Confira</button>
                </div>
            </div>

            <h2 className={styles.headingExterno}>Navegue por marcas</h2>

            <div className={styles.marcasContainer}>
                <div className={styles.imageContainer}>
                    <img src={logo} alt="Marcas" />
                </div>

                <div className={styles.imageContainer}>
                    <img src={logo} alt="Marcas" />
                </div>

                <div className={styles.imageContainer}>
                    <img src={logo} alt="Marcas" />
                </div>

                <div className={styles.imageContainer}>
                    <img src={logo} alt="Marcas" />
                </div>

                <div className={styles.imageContainer}>
                    <img src={logo} alt="Marcas" />
                </div>
            </div>
        </section>
    )
}
