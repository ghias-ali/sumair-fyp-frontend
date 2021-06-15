import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "./style.css";
import { HeartOutlined, HeartFilled } from "@ant-design/icons";
const renderThumb = ({ style, ...props }) => {
  const thumbStyle = {
    borderRadius: 6,
    backgroundColor: "rgba(35, 49, 86, 0.8)",
  };
  return <div style={{ ...style, ...thumbStyle }} {...props} />;
};

const CustomScrollbars = (props) => (
  <Scrollbars
    renderThumbHorizontal={renderThumb}
    renderThumbVertical={renderThumb}
    {...props}
  />
);
function AdsComponent() {
  return (
    <div>
      <h1 className='recentads'>Recent Ads</h1>
      <CustomScrollbars
        style={{ position: "absolute", height: "80vh" }}
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
      >
        <div className='ad11 ' >
          <div className='titleandimage container '>
            <img
              style={{ height: "60px", width: "60px", marginTop: "5px" }}
              src='/assetes/avatars/avatar.png'
              alt='avatar'
            />
            <div>
              <h5 className='adtitle'>Hotel Rooms are available </h5>
              <p className='a-tag-up'>
                Posted By <a className='color-tag'>Zubair</a> on Dec 12, 2021
              </p>
            </div>
            <div className='heartsvg'>
              <HeartOutlined />
            </div>
          </div>
          <div className="container">
              
          </div>
        </div>
        <br />
        
        
        
      </CustomScrollbars>
    </div>
  );
}

export default AdsComponent;
