import {useState} from 'react';
import {useNavigate} from 'react-router';
import styles from './Log.module.css';
import LinkButton from '../../globalComponents/LinkButton';

function Login(){
    const msg = require('sweetalert2')
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
        if(!!!currentUser){
            // algum valor é default
            msg.fire({color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff',
            title:'Usuário não encontrado!', 
            text:'Verifique as informações inseridas', 
            icon:'warning'})
        }else{
            // cadastro localizado, verificar senha
            if(currentUser.password === values.password){
                // senha correta
                msg.fire({color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff',
                title:'Login bem-sucedido!', 
                text:'Bem-vindo, ' + currentUser.username + '!', 
                icon:'success'})
                navigate('\dashboard');
            }else{
                // senha incorreta
                msg.fire({color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff',
                title:'Senha incorreta!', 
                text:'Tente novamente', 
                icon:'error'})
            }
        }
        document.getElementById("passwordField").value = "";
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
                    <input required id="passwordField" type="password" placeholder="Senha" name="password" onChange={handleChangeValues}/>
                </div>
                <button className={styles.btn} type="submit">Entrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Login; 