import  styles from './Header.module.css'

import igniteLogo from '../assets/ignite-logo.svg'

/* Para chamar uma classe css em um elemento do HTML, precisamos usar este import e no className definir qual deles usaremos 
    como o styles.header, ou se tivesse uma classe de .button chamariamos como styles.button ai a estilização do button
    apareceria normalmente no navegador.
*/

export function Header() {
    return (
        <header className={styles.header}>
            <img src={igniteLogo} alt="Logotipo do Ignite" />
        </header>
    )
}