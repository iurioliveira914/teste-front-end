import styles from './styles.module.scss'

export function Products() {
    return (
        <section className={styles.productsSection}>
            <div className={styles.productCard}>
                <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="Produto" />
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><del>R$ 30,90</del></p>
                <strong>R$ 28,90</strong>
                <p className={styles.parcela}>ou 2x de R$ 45,90 sem juros</p>
                <p className={styles.frete}>Frete grátis</p>
                <button>Comprar</button>
            </div>

            <div className={styles.productCard}>
                <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="Produto" />
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><del>R$ 30,90</del></p>
                <strong>R$ 28,90</strong>
                <p className={styles.parcela}>ou 2x de R$ 45,90 sem juros</p>
                <p className={styles.frete}>Frete grátis</p>
                <button>Comprar</button>
            </div>

            <div className={styles.productCard}>
                <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="Produto" />
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><del>R$ 30,90</del></p>
                <strong>R$ 28,90</strong>
                <p className={styles.parcela}>ou 2x de R$ 45,90 sem juros</p>
                <p className={styles.frete}>Frete grátis</p>
                <button>Comprar</button>
            </div>

            <div className={styles.productCard}>
                <img src="https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/foto-iphone.png" alt="Produto" />
                <p className={styles.description}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <p><del>R$ 30,90</del></p>
                <strong>R$ 28,90</strong>
                <p className={styles.parcela}>ou 2x de R$ 45,90 sem juros</p>
                <p className={styles.frete}>Frete grátis</p>
                <button>Comprar</button>
            </div>
        </section>
    )
}
