import styles from './styles.module.scss'

import { Banner } from "../../components/Banner";
import { Card } from "../../components/CardSection";
import { Header } from "../../components/Header";
import { Products } from '../../components/Products';
import { Partner } from '../../components/Partner';
import { Footer } from '../../components/Footer';

export function Home() {
    return (
        <>
            <Header />
            <main>
                <Banner />
                <Card />
                <h2 className={styles.productTitle}>Produtos relacionados</h2>
                <ul className={styles.list}>
                    <li>Celular</li>
                    <li>Acessórios</li>
                    <li>Tablets</li>
                    <li>Notebooks</li>
                    <li>TVS</li>
                    <li>Ver todos</li>
                </ul>
                <Products />
                <Partner /> 
            </main>
            <Footer />
        </>
    )
}
