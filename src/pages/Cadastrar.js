import styles from './Log.module.css';
import LinkButton from '../components/LinkButton';
import Input from '../components/Input';

function Cadastrar(){
    return(
        <section className={styles.section}>
            <h1>Cadastrar</h1>
            <form>
                <Input text="Insira seu nome de usuário:" type="text" placeholder="Usuário" name="username"/>
                <Input text="Insira seu email:" type="text" placeholder="Email" name="email"/>
                <Input text="Insira sua senha:" type="password" placeholder="Senha" name="password1"/>
                <Input text="Confirme sua senha:" type="password" placeholder="Senha" name="password2"/>
            </form>
            <LinkButton to="/" text="Cadastrar"/>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Cadastrar;