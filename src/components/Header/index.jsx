import styles from './styles.module.scss'

import shieldCheck from '../../assets/header-icons/shieldCheck.svg'
import truck from '../../assets/header-icons/truck.svg'
import creditCard from '../../assets/header-icons/creditCard.svg'
import logo from '../../assets/header-icons/logo.svg'
import findIcon from '../../assets/header-icons/findIcon.svg'
import group from '../../assets/header-icons/group.svg'
import heart from '../../assets/header-icons/heart.svg'
import userCircle from '../../assets/header-icons/userCircle.svg'
import shoppingCart from '../../assets/header-icons/shoppingCart.svg'
import crownSimple from '../../assets/header-icons/crownSimple.svg'


export function Header() {
    return (
        <header className={styles.headerContent}>
           <div className={styles.informationContainer}>
                <div className={styles.information}>
                    <img src={shieldCheck} alt="Verificação de escudo" />
                    <p>Compra <span>100% segura</span></p>
                </div>
                <div className={styles.information}>
                    <img src={truck} alt="Caminhão" />
                    <p><span>Frete grátis</span> acima de R$ 200</p>
                </div>
                <div className={styles.information}>
                    <img src={creditCard} alt="Cartão de crédito" />
                    <p><span>Parcele</span> suas compras</p>
                </div>
           </div>

           <hr className={styles.line} />

           <div className={styles.shoppingContainer}>
                <img src={logo} className={styles.logotipo} alt="Logotipo" />

                <div className={styles.inputContainer}>
                <input type="text" placeholder="O que você está buscando?" />
                <img src={findIcon} alt="Ícone de busca" />
                </div>

                <div className={styles.shoppingIcons}>
                    <img src={group} alt="Grupo" />
                    <img src={heart} alt="Favoritos" />
                    <img src={userCircle} alt="Usuário" />
                    <img src={shoppingCart} alt="Carrinho de compras" />
                </div>
           </div>

           <hr className={styles.line} />

           <div className={styles.categoriesContainer}>
                <ul className={styles.cotegoriesList}>
                    <li>Todas categorias</li>
                    <li>Super mercado</li>
                    <li>Livros</li>
                    <li>Moda</li>
                    <li>Lançamentos</li>
                    <li>Ofertas do dia</li>
                    <li>
                        <img src={crownSimple} alt="Coroa" />
                        Assinatura
                    </li>
                </ul>
           </div>
        </header>
    )
}
