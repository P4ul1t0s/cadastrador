import styles from './Input.module.css';

function Input({text, type, placeholder, name}){
    return(
        <div className={styles.input}>
            <p>{text}</p>
            <input
                type={type}
                name={name}
                placeholder={placeholder}
            />
        </div>
    )
}

export default Input;