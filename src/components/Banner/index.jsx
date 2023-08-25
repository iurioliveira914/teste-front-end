import sytles from './styles.module.scss'

export function Banner() {
    return (
        <div className={sytles.bannerContainer}>
            <div className={sytles.bannerContent}>
                <h1 className={sytles.bannerTitle}>Venha conhecer nossas <br /> promoções</h1>
                <h2 className={sytles.bannerSubtitle}>50% Off nos produtos </h2>
                <button className={sytles.bannerBtn}>Ver produto</button>
            </div>
        </div>
    )
}
