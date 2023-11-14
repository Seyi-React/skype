import React, { useState } from "react";
import styles from "./Home.module.css";
import skypeLogo from "../../assets/Logo no background.webp";
import { MdNotifications, MdOutlinePostAdd, MdExplore } from "react-icons/md";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { BiTrendingUp, BiHomeAlt2 } from "react-icons/bi";
import { AiFillSave } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import HomeComponent from "@/components/HomeComponent/HomeComponent";
import TrendsComponent from "@/components/Trends/TrendsComponent";
import SavedPostComponent from "@/components/Saved/SavedPostComponent";
import PostComponent from "@/components/Post/PostComponent";
import ExploreComponent from "@/components/Explore/ExploreComponent";
import HomeRoute from "./Home/HomeRoute";
import Trending from "./Trending/Trending";
import Save from "./Save/Save";
import Explore from "./Explore/Explore";
import PostAdd from "./PostAdd/PostAdd";

const Home = (): JSX.Element => {
  const [toggleSideBar, setToggleSidebar] = useState<boolean>(false);
  const [activeItem, setActiveItem] = useState<string | null>('Home');
  const [activeComponent, setActiveComponent] = useState<string>("Feed");

  const handleSideFunction = () => {
    setToggleSidebar(!toggleSideBar);
  };

  const navigateToComponent = (component: string) => {
    setActiveComponent(component);
  };

  const handleItemClick = (item: string) => {
    setActiveItem(item);
  };

  return (
    <React.Fragment>
      {/* Laptop dashboard */}
      <>
        <div className={styles.container}>
          <div
            className={styles.sidebar}
            style={{
              width: toggleSideBar ? "100px" : "220px",
              backgroundColor: toggleSideBar ? "#1b1f26" : " ",
            }}
          >
            <div className={styles.sidebar_content}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                }}
              >
                {/* image div */}
                <div>
                  <img src={skypeLogo} alt="logo" width={30} height={30} />
                </div>
                {/* Text(skype div) */}
                <div>
                  <h6
                    style={{
                      fontWeight: "bold",
                      // color: "navy",
                      fontFamily: "Jost",
                      letterSpacing: "2px",
                      fontSize: "13px",
                      color: toggleSideBar? '#d5dfed' : 'navy'
                    }}

                  
                  >
                    Skype
                  </h6>
                </div>
              </div>
              <div
                style={{
                  backgroundColor: "navy",
                  padding: "0.8rem",
                  // width: "10px,",
                  height: "20px",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  cursor: "pointer",
                  borderTopRightRadius: "20px",
                  borderBottomRightRadius: "20px",
                  marginLeft: toggleSideBar ? "20px" : "",
                  transition: toggleSideBar ? "300ms" : "",
                }}
                onClick={handleSideFunction}
              >
                {toggleSideBar ? (
                  <BsChevronRight size={18} style={{ color: "white" }} />
                ) : (
                  <BsChevronLeft size={18} style={{ color: "white" }} />
                )}
              </div>
            </div>
            {/* icons */}
            <div
              style={{
                marginTop: "4.5rem",
                fontSize: "12px",
                letterSpacing: "1px",
                fontFamily: "Jost",
                cursor: "pointer",
              }}
            >
              {/*Home  */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  background: activeItem === "Home" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === "Home" ? "white" : "",
                }}
                onClick={() => handleItemClick("Home")}
              >
                <div>
                  <small>
                    <BiHomeAlt2 size={20} style={{
                      color: toggleSideBar? '#d5dfed' : ''
                    }} />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Home</h5>}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  background: activeItem === "Trends" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === "Trends" ? "white" : "",
                }}
                onClick={() => handleItemClick("Trends")}
              >
                <div>
                  <small>
                    <BiTrendingUp size={20} style={{
                      color: toggleSideBar? '#d5dfed' : ''
                    }}  />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Trends</h5>}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  background: activeItem === " Saved Post" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === " Saved Post" ? "white" : "",
                }}
                onClick={() => handleItemClick(" Saved Post")}
              >
                <div>
                  <small>
                    <AiFillSave size={20} style={{
                      color: toggleSideBar? '#d5dfed' : ''
                    }} />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Saved Post</h5>}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",

                  background: activeItem === "Post" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === "Post" ? "white" : "",
                }}
                onClick={() => handleItemClick("Post")}
              >
                <div>
                  <small>
                    <MdOutlinePostAdd size={20} style={{
                      color: toggleSideBar? '#d5dfed' : ''
                    }} />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Post</h5>}</div>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  background: activeItem === "Explore" ? "navy" : "",
                  borderRadius: "10px",
                  padding: "8px",
                  color: activeItem === "Explore" ? "white" : "",
                }}
                onClick={() => handleItemClick("Explore")}
              >
                <div>
                  <small>
                    <MdExplore size={20} style={{
                      color: toggleSideBar? '#d5dfed' : ''
                    }} />
                  </small>
                </div>
                <div>{toggleSideBar ? "" : <h5>Explore</h5>}</div>
              </div>
              {/* log out */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "flex-start",
                  alignItems: "center",
                  margin: "2rem",
                  gap: "10px",
                  borderRadius: "10px",
                  padding: "8px",
                }}
                
              >
                <small>
                  <BiLogOut size={20} style={{
                      color: toggleSideBar? '#d5dfed' : ''
                    }} />
                </small>
                {toggleSideBar ? "" : <h5>Log out</h5>}
              </div>
            </div>
          </div>

          <main className={styles.main} style={{
            marginLeft: toggleSideBar ? '12rem' : '15rem'
          }}>
            {activeItem === "Home" && <HomeComponent />}
            {activeItem === "Trends" && <TrendsComponent />}
            {activeItem === " Saved Post" && <SavedPostComponent />}
            {activeItem === "Post" && <PostComponent />}
            {activeItem === "Explore" && <ExploreComponent />}
          </main>
        </div>
      </>

      {/* Mobile dashboard */}
      <>
        <div className={styles.mobile_parent}>
          {/* top bar div */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              paddingRight: "2rem",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "flex-start",
                alignItems: "center",
                paddingTop: "2rem",
                paddingLeft: "2rem",
                paddingBottom: "1rem",
              }}
            >
              {/* image div */}
              <div>
                <img src={skypeLogo} alt="logo" width={50} height={40} />
              </div>
              {/* Text(skype div) */}
              <div>
                <h6
                  style={{
                    fontWeight: "bold",
                    color: "navy",
                    fontFamily: "Jost",
                    letterSpacing: "2px",
                    fontSize: "17px",
                  }}
                >
                  Skype
                </h6>
              </div>
            </div>
            {/* Notif & Logout div */}
            <div>
              <small>
                <MdNotifications size={30} style={{ marginTop: "15px" }} />
              </small>
            </div>
          </div>
          {/*  reendered on screen */}
          <div className="main-content">
            {activeComponent === "HomeRoute" && <HomeRoute />}
            {activeComponent === "Trending" && <Trending />}
            {activeComponent === "Save" && <Save />}
            {activeComponent === "ExploreIt" && <Explore />}
            {activeComponent === "PostAdd" && <PostAdd />}
          </div>

          {/* bottom bar */}
          <div className={styles.bottom_bar}>
            <div
              style={{
                display: "flex",
                justifyContent: "space-around",
                alignItems: "center",
                padding: "2rem",
                position: "fixed",
                bottom: 0,
                left: 0,
                width: "100%",
                background: "white",
              }}
            >
              <BiHomeAlt2
                size={24}
                onClick={() => navigateToComponent("HomeRoute")}
                style={{
                  color: activeComponent === "HomeRoute" ? "white" : "",
                  background: activeComponent === "HomeRoute" ? "navy" : "",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
              <BiTrendingUp
                size={24}
                onClick={() => navigateToComponent("Trending")}
                style={{
                  color: activeComponent === "Trending" ? "white" : "",
                  background: activeComponent === "Trending" ? "navy" : "",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
              <AiFillSave
                size={24}
                onClick={() => navigateToComponent("Save")}
                style={{
                  color: activeComponent === "Save" ? "white" : "",
                  background: activeComponent === "Save" ? "navy" : "",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
              <MdExplore
                size={24}
                onClick={() => navigateToComponent("ExploreIt")}
                style={{
                  color: activeComponent === "ExploreIt" ? "white" : "",
                  background: activeComponent === "ExploreIt" ? "navy" : "",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
              <MdOutlinePostAdd
                size={24}
                onClick={() => navigateToComponent("PostAdd")}
                style={{
                  color: activeComponent === "PostAdd" ? "white" : "",
                  background: activeComponent === "PostAdd" ? "navy" : "",
                  borderRadius: "10px",
                  width: "100%",
                }}
              />
            </div>
          </div>
        </div>
      </>
    </React.Fragment>
  );
};

export default Home;
