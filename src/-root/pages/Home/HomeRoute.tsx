import styles from './HomeRoute.module.css'
import skype from '../../../assets/Logo no background.webp'
import { MdExplore, MdMail, MdOutlinePostAdd } from 'react-icons/md'
import { BiTrendingUp } from 'react-icons/bi'
import { AiFillSave } from 'react-icons/ai'
import { BsPerson } from 'react-icons/bs'

const HomeRoute = () => {
  return (
    <div className={styles.home_route}>
            <div className={styles.home}>
          Welcome to skype
          <div
            style={{
              display: "flex",
              justifyContent: "flex-start",
              alignItems: "center",
              marginTop: "1rem",
              gap: "4px",
            }}
          >
            <img src={skype} alt="" width={40} />
            <small> skype</small>
          </div>
        </div>
        <div className={styles.users_home}>
            Top Users
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
               
              }}
            >
              <div>Posts</div>
              <MdOutlinePostAdd />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Trends</div>
              <BiTrendingUp />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Saved Post</div>
              <AiFillSave />
            </div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <div>Explore</div>
              <MdExplore />
            </div>
          </div>
          <div className={styles.sub_home}>
              Skype Toppers
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>01</div>
                <MdOutlinePostAdd />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>02</div>
                <BiTrendingUp />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>03</div>
                <AiFillSave />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <div>04</div>
                <MdExplore />
              </div>
            </div>
            <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding:'20px'
            }}
          >
            <MdMail size={27} />
            <BsPerson size={27} />
          </div>
          <div className={styles.report_home}>
            
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                flexDirection: "column",
                marginTop: "-1.2rem",
                color:'black',
                fontWeight:'300',
                marginLeft:'-2.2rem',
                fontFamily:'jost',
                paddingLeft:'1rem'
              }}
            >
              Reports
              <div>15k</div>
              <div>10k</div>
              <div>5k</div>
              <div>0k</div>
            </div>
            <div style={{display: "flex",
                justifyContent: "space-around",
                alignItems:'center',
                color:'black',
                fontWeight:'300',
                fontFamily:'jost',
                marginBottom:'-2rem',
                fontSize:'12px'
                }}>
                <div>Jan</div>
                <div>Feb</div>
                <div>Mar</div>
                <div>Apr</div>
                <div>May</div>
                <div>June</div>
            </div>
          </div>
          <div className={styles.report_2_home}>
             <div style={{textAlign:'center'}}>Utility</div>
             <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
              <div>Price</div>
              <div>$100.00</div>
             </div>
             <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
              <div>Toppers</div>
              <div>$60.00</div>
             </div>
             <div style={{display:'flex',justifyContent:'space-between',padding:'10px'}}>
              <div>Utility</div>
              <div>$50.00</div>
             </div>
          </div>
    </div>
  )
}

export default HomeRoute