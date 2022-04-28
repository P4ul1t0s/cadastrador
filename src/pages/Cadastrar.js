import { useState } from 'react';
import styles from './Log.module.css';
import LinkButton from '../components/LinkButton';

function Cadastrar(){
    const [values, setValues] = useState()
    
    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }))
    }
    const submit = (e) => {
        e.preventDefault()
        console.log(values)
    }

    return(
        <section className={styles.section}>
            <h1>Cadastro</h1>
            <form>
                <div className={styles.inputDiv}>
                    <p>Insira seu nome de usuário:</p>
                    <input type="text" placeholder="Usuário" name="username" onChange={handleChangeValues}/>
                    <p>Insira seu email:</p>
                    <input type="text" placeholder="Email" name="email" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input type="password" placeholder="Senha" name="password1" onChange={handleChangeValues}/>
                    <p>Confirme sua senha:</p>
                    <input type="password" placeholder="Senha" name="password2" onChange={handleChangeValues}/>
                </div>
                <button className={styles.btn} onClick={submit}>Cadastrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Cadastrar;