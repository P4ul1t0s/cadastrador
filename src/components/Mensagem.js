import styles from './Mensagem.module.css';

function Mensagem({title, body, type}){
    return(
        <div className={`${styles.div} ${styles[type]}`}>
            <h2>{title}</h2>
            <p>{body}</p>
        </div>
    )
}

export default Mensagem;