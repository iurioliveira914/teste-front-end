import styles from './styles.module.scss'

import facebook from '../../assets/footer-icons/facebook.svg'
import instagram from '../../assets/footer-icons/instagram.svg'
import youtube from '../../assets/footer-icons/youtube.svg'
import formasPagamento from '../../assets/footer-icons/formasPagamento.svg'
import group from '../../assets/footer-icons/group.svg'

export function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.information}>
                <div className={styles.sobreNos}>
                    <strong>Sobre nós</strong>
                    <p>Conheça</p>
                    <p>Como comprar</p>
                    <p>Indicação e desconto</p>

                    <div className={styles.social}>
                        <img src={facebook} alt="Facebook" />
                        <img src={instagram} alt="Instagram" />
                        <img src={youtube} alt="Youtube" />
                    </div>
                </div>

                <div className={styles.informacoesUteis}>
                    <strong>Informações úteis</strong>
                    <p>Fale conosco</p>
                    <p>Dúvidas</p>
                    <p>Prazos de entrega</p>
                    <p>Formas de pagamento</p>
                    <p>Política de privacidade</p>
                    <p>Trocas e devoluções</p>
                </div>

                <div className={styles.formasPagamento}>
                    <strong>Formas de pagamento</strong>
                    <img src={formasPagamento} alt="Formas de pagamento" />
                </div>

                <form>
                    <div className={styles.formContent}>
                        <p className={styles.paragrafo1}>Cadastre-se e receba nossa <span>novidades e promoções</span></p>
                        <p className={styles.paragrafo2}>Excepteur sint occaecat cudatat non ent, sunt in culpa qui officia lorem ipsum</p>
                        <div className={styles.caixa}>
                            <input type="email" placeholder="Seu e-mail" />
                            <button>OK</button>
                        </div>
                    </div>
                </form>
            </div>

            <div className={styles.baseInferior}>
                <p>
                    Copyright © 2019. Todos os direitos reservados. Todas as marcas e suas imagens são de propriedade de seus      respectivos donos. <br /> É vedada a reprodução, total ou parcial, de qualquer conteúdo sem expressa autorização.
                </p>
                <img src={group} alt="Grup" />
            </div>
        </footer>
    )
}
