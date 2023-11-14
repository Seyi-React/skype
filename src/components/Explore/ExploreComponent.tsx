import styles from "./explore.module.css";
import {AiOutlineLine} from 'react-icons/ai'
import {SlOptions} from 'react-icons/sl'
import {BsChat,BsAlarm} from 'react-icons/bs'

const ExploreComponent = () => {
  return (
    <div className={styles.explore}>
      <div className={styles.top_explore}>
        <div>
          <h4 className={styles.project}>Project-X</h4>
          <p style={{ color: "gray", fontSize: "13px", letterSpacing: "1px" }}>
            {" "}
            Product Team
          </p>
        </div>
        <div>
          <button className={styles.add_new}>Add New</button>
        </div>
      </div>
      <hr style={{ paddingTop: "1rem" }} />
      <div className={styles.explore_check}>
        <h6>On Going List</h6>
        <h6 style={{ color: "blue" }}>In Progress</h6>
        <h6 style={{ color: "orange" }}>Review</h6>
        <h6 style={{ color: "green" }}>Done</h6>
      </div>
      <div className={styles.grid_layout}> 
      <div className={styles.layout}>
        <div style={{display:'flex',justifyContent:'space-between',gap:'',padding:''}}>
          <div><AiOutlineLine size={26} color='blue'/></div>
          <div><SlOptions/></div>
          </div>
          <div>
            <h5 style={{fontWeight:'bold'}}>Complete SF 424</h5>
          </div>
          <div className={styles.bottom}>
             <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'5px'}}>
                 <BsChat/>
                 0
             </div>
             <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',gap:'5px'}}>
                <BsAlarm/>
                  18 Jan
             </div>
          </div>
      </div>
      <div className={styles.layout}>
        <div style={{display:'flex',justifyContent:'space-between',gap:'',padding:''}}>
          <div><AiOutlineLine size={26} color='red'/></div>
          <div><SlOptions/></div>
          </div>
          <div>
            <h5 style={{fontWeight:'bold'}}>Add New Flow Dashboard</h5>
          </div>
          <div className={styles.bottom}>
             <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'5px'}}>
                 <BsChat/>
                 1
             </div>
             <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',gap:'5px'}}>
                <BsAlarm/>
                  6 Feb
             </div>
          </div>
      </div>
      <div className={styles.layout}>
        <div style={{display:'flex',justifyContent:'space-between',gap:'',padding:''}}>
          <div><AiOutlineLine size={26} color='purple'/></div>
          <div><SlOptions/></div>
          </div>
          <div>
            <h5 style={{fontWeight:'bold'}}>Build API For Chat</h5>
          </div>
          <div className={styles.bottom}>
             <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'5px'}}>
                 <BsChat/>
                 7
             </div>
             <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',gap:'5px'}}>
                <BsAlarm/>
                  20 Dec
             </div>
          </div>
      </div>
      <div className={styles.layout}>
        <div style={{display:'flex',justifyContent:'space-between',gap:'',padding:''}}>
          <div><AiOutlineLine size={26} color='yellow'/></div>
          <div><SlOptions/></div>
          </div>
          <div>
            <h5 style={{fontWeight:'bold'}}>Compile Application Package</h5>
          </div>
          <div className={styles.bottom}>
             <div style={{display:'flex',justifyContent:'flex-start',alignItems:'center',gap:'5px'}}>
                 <BsChat/>
                 5
             </div>
             <div style={{display:'flex',justifyContent:'flex-end',alignItems:'center',gap:'5px'}}>
                <BsAlarm/>
                  21 May
             </div>
          </div>
      </div>
      </div>
    </div>
  );
};

export default ExploreComponent;
