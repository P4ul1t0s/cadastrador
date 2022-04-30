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
        // if(document.getElementById("usernameField").value === "" || document.getElementById("passwordField").value === ""){
        //     console.log("Preencha todos os campos corretamente!")
        //     msg.fire({title:'Preencha todos os campos!', text:'Verifique se todos os campos estão preenchidos', icon:'warning', color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff'})
        // }else{
        //     const users = await request()
        //     try{
        //         const currentUser = users.find(user => (user.username === values.username || user.email === values.username) && user.password1 === values.password)                
        //         try{
        //             msg.fire({title:'Sucesso!', text:'Você se cadastrou como ' + currentUser.username, icon:'success', color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff'})
        //             navigate('/dashboard', {state: {users: users}})
        //         }catch(err){
        //             msg.fire({title:'Usuário ou senha incorretos!', text:'Verifique se todos os campos estão preenchidos', icon:'error', color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff'})
        //         }
        //     }catch(err){
        //         msg.fire({title:'Preencha todos os campos!', text:'Verifique se todos os campos estão preenchidos', icon:'warning', color:'#222', iconColor:'#0088ff', confirmButtonColor:'#0088ff'})
        //     }
        // }

        const users = await request();
        const currentUser = users.find(user => (user.username === values.username || user.email === values.username) && user.password1 === values.password);
        if(!!!currentUser){
            // algum valor é default
            console.log("Usuário não cadastrado")
        }else{
            console.log("Usuário encontrado")
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
                    <input required id="usernameField" type="text" placeholder="Usuário/Email" name="username" onChange={handleChangeValues}/>
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