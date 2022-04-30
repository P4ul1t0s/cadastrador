import {useState} from 'react';
import {useNavigate} from 'react-router';
import validator from 'validator'
import styles from './Log.module.css';
import LinkButton from '../../globalComponents/LinkButton';

function Sigin(){
    const msg = require('sweetalert2')
    const navigate = useNavigate()
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
        var currentUser = users.find(user => (user.username === values.username));
        if(!!!currentUser){
            // disponivel para cadastro
            if(validateEmail(values.email)){
                //email valido
                currentUser = users.find(user => (user.email === values.email));
                if(!!!currentUser){
                    // disponivel para cadastro
                    if(values.password.length >= 8){
                        if(values.password === document.getElementById("passwordField").value){
                            // senhas iguais, realizar cadastro
                            msg.fire({color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff',
                            title:'Cadastro bem-sucedido!', 
                            text:'Seu cadastro foi registrado em nosso sistema', 
                            icon:'success'})
                            createPost(values)
                        }else{
                            // senhas diferentes
                            msg.fire({color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff',
                            title:'Senhas diferem!', 
                            text:'As senhas não são iguais, tente novamente', 
                            icon:'warning'})
                        }}else{
                            // senha muito curta
                            msg.fire({color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff',
                            title:'Senhas fraca!', 
                            text:'Sua senha deve ter ao menos 8 caracteres', 
                            icon:'warning'})
                    }}else{
                        // email em uso
                        msg.fire({color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff',
                        title:'Email já cadastrado!', 
                        text:'Experimente outro endereço', 
                        icon:'warning'})
                }}else{
                    msg.fire({color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff',
                    title:'Email inválido!', 
                    text:'Experimente outro endereço', 
                    icon:'error'})
            }}else{
                // user em uso
                msg.fire({color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff',
                title:'Usuário já cadastrado!', 
                text:'Experimente outro apelido', 
                icon:'warning'})
        }
        document.getElementById("passwordField").value = "";
        document.getElementById("passwordField2").value = "";
    }
    const validateEmail = (e) => {
        var email = e
        if(validator.isEmail(email)){
          return(true)
        }else{
          return(false)
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
    function createPost(values) {
        fetch('http://localhost:5001/users', {
          method: 'POST',
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify(values),
        })
        .then((resp) => resp.json())
        navigate('/')
    }
    return(
        <section className={styles.section}>
            <h1>Cadastro</h1>
            <form onSubmit={submit}>
                <div className={styles.inputDiv}>
                    <p>Insira seu nome de usuário:</p>
                    <input required type="text" placeholder="Usuário" name="username" onChange={handleChangeValues}/>
                    <p>Insira seu email:</p>
                    <input required type="text" placeholder="Email" name="email" onChange={handleChangeValues}/>
                    <p>Insira sua senha:</p>
                    <input required id="passwordField2" type="password" placeholder="Senha" name="password" onChange={handleChangeValues}/>
                    <p>Confirme sua senha:</p>
                    <input required id="passwordField" type="password" placeholder="Senha"/>
                </div>
                <button className={styles.btn} type="submit">Cadastrar</button>
            </form>
            <span/>
            <LinkButton to="/" text="Voltar"/>
        </section>
    )
}

export default Sigin;