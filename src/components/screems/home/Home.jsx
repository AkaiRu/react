import styles from './Home.module.css'
function Home() {
    return (
        <div>
            <h1>CATALOG</h1>
                <div className={styles.item}>
                    <h2>Jogger Pants</h2>
                    <p className="price">$49,00</p>
                    <button className="btn">Buy now</button>
                </div>
        </div>
    )
}
export default Home
