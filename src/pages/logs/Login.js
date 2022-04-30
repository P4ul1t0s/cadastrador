import {useState} from 'react';
import {useNavigate} from 'react-router';
import styles from './Log.module.css';
import LinkButton from '../../globalComponents/LinkButton';
import {Message} from '../../globalComponents/Message'

import swal from 'sweetalert'
// import withReactContent from 'sweetalert2-react-content'


function Login(){
    // const msg = withReactContent(Swal)
    // const msg = require('sweetalert2')
    const navigate = useNavigate();
    const [values, setValues] = useState()
    const handleChangeValues = (value) => {
        setValues(prevValue => ({
            ...prevValue, 
            [value.target.name]: value.target.value,
        }))
    }
    const submit = async (e) => {
        e.preventDefault();
        const users = await request();
        const currentUser = users.find(user => user.username === values.username || user.email === values.username);
        if(!!!currentUser){ //Se currentuser for default, o usuário não foi encontrado
            console.log("Usuário não cadastrado")
        }else{
            if(currentUser.password === values.password){
                console.log("Login válido")
                navigate('/dashboard', {state: {users: users}})
            }else{
                console.log("Senha inválida")
                // Message("Teste", "Texto", "success")
                swal({
                    title:"{title}",
                    text:"{text}",
                    icon:"success",
                    color:'#222',
                    iconColor:'#0088ff',
                    confirmButtonColor:'#0088ff'
                })
            }
        }
    }
    async function request() {
        return await fetch('http://localhost:5001/users', {
          method: 'GET',
          headers: {'Content-Type': 'application/json'},
        })
        .then((resp) => resp.json())
        .then((data) => data)
    }
    return(
        <section className={styles.section}>
            <h1>Login</h1>
            <form onSubmit={submit}>
                <div className={styles.inputDiv}>
                    <p>Insira seu nome de usuário ou email:</p>
                    <input required type="text" placeholder="Usuário/Email" name="username" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input required type="password" placeholder="Senha" name="password" onChange={handleChangeValues}/>
                </div>
                <button className={styles.btn} type="submit">Entrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Login; 