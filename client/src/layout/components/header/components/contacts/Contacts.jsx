import styles from "./Contacts.module.scss";
import logo from "../../../../../assets/logo.png";
import Button from "../../../../../components/button/Button";
import CallIcon from '@material-ui/icons/Call';

function Contacts() {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.contacts}>
                    <img src={logo} alt="лого" className={styles.logo}/>
                    <div className={styles.wrap}>
                        <CallIcon className={styles.icon}/>
                        <a className={styles.phone} href="tel:+74742476245">+7(4742) 47-62-45</a>
                        <Button/>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Contacts;