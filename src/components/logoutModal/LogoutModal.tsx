import { ILogout } from "@/type/type"
import styles from './logoutModal.module.css'


const LogoutModal = ({ onYesClick, onNoClick }:ILogout) => {
  return (
    <div className={styles.modal}>
        <h3>Are you sure you want to log out?</h3>
      <div>
        <button onClick={onYesClick}>Yes</button>
        <button onClick={onNoClick}>No</button>
      </div>
    </div>
  )
}

export default LogoutModal