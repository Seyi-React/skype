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
        <div style={{marginTop:'2rem',fontWeight:'bold',color:'gray',fontSize:'13px',padding:'1rem'}}>
          PROJECT
        </div>
        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'3px'}}>
          <img src={skype} alt="" width={60} />
          <h5>Arena Sport</h5>
        </div>
        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'3px'}}>
          <img src={skype} alt="" width={60} />
          <h5>DSV</h5>
        </div>
        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'3px'}}>
          <img src={skype} alt="" width={60} />
          <h5>SeaFood Mall</h5>
        </div>
        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'3px'}}>
          <img src={skype} alt="" width={60} />
          <h5>FireStar</h5>
        </div>
        <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'3px'}}>
          <img src={skype} alt="" width={60} />
          <h5>Zeta Bank</h5>
        </div>
      </div>
      <div>2</div>
    </div>
  )
}

export default PostComponent