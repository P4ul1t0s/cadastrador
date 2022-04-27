import LinkButton from '../components/LinkButton';
import styles from './Home.module.css';

function Home(){
    return(
        <section className={styles.section}>
            <h1>Bem vindo ao <span>Cadastrador!</span></h1>
            <p>Escolha entre <span>Cadastrar-se</span>, para criar uma conta ou <span>Entrar</span>, caso já possua uma</p>
            <div>
                <div className={styles.div}>
                    <LinkButton to="/Entrar" text="Entrar"/>
                </div>
                <div className={styles.div}>
                    <LinkButton to="/Cadastrar" text="Cadastrar"/>
                </div>
            </div>
        </section>
    )
}

export default Home;