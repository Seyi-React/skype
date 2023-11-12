import styles from './postComponent.module.css'
import skype from '../../assets/Logo no background.webp'

const PostComponent = () => {
  return (
    <div className={styles.post}>
      <div className={styles.posting}>
        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'3px'}}>
          <img src={skype} alt="" width={60} />
          <h5>All Post</h5>
        </div>
        <div style={{marginTop:'2rem',fontWeight:'bold',color:'gray',fontSize:'13px'}}>
          PROJECT
        </div>
      </div>
      <div>2</div>
    </div>
  )
}

export default PostComponent