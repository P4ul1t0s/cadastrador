import {useState} from 'react';
import {useNavigate} from 'react-router';
import axios from 'axios';
import styles from './Log.module.css';
import LinkButton from '../components/LinkButton';

function Entrar(){
    const history = useNavigate()
    const [users, setUsers] = useState([])
    const [values, setValues] = useState()
    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }))
    }
    const submit = async (e) => {
        e.preventDefault();
        const users = await request()
        const currentUser = users.find(user => (user.username === values.username) && user.password1 === values.password)
        console.log(currentUser)
        console.log(values)
    }
    async function request() {
        return await fetch('http://localhost:5001/users', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then((resp) => resp.json())
        .then((data) => data)

        // const response = await axios.get('http://localhost:5001/users');
        // return response.data
    }

    return(
        <section className={styles.section}>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <div className={styles.inputDiv}>
                    <p>Insira seu nome de usuário ou email:</p>
                    <input type="text" placeholder="Usuário/Email" name="username" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input type="password" placeholder="Senha" name="password" onChange={handleChangeValues}/>
                </div>
                <button className={styles.btn} type="submit">Entrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Entrar; 