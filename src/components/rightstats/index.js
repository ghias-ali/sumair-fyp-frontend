import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
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
function RightStats() {
  return (
    <div className='container'>
        <h4 style={{textAlign:"center",color:"#FA9746"}}>Google Ads</h4>
      <CustomScrollbars
        style={{ position: "absolute", height: "80vh" }}
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
      >
          
        <img
          style={{ width: "300px", height: "180px",marginTop:"10px" }}
          src={
            "https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg"
          }
          alt={''}
        />
         <img
          style={{ width: "300px", height: "180px",marginTop:"10px" }}
          src={
            "https://froggyads.com/blog/wp-content/uploads/2020/02/Tips-on-How-to-Make-Banner-Ads-More-Effective.png"
          }
          alt={''}
        />
         <img
          style={{ width: "300px", height: "180px",marginTop:"10px" }}
          src={
            "https://froggyads.com/blog/wp-content/uploads/2020/02/Tips-on-How-to-Make-Banner-Ads-More-Effective.png"
          }
          alt={''}
        />
         <img
          style={{ width: "300px", height: "180px",marginTop:"10px" }}
          src={
            "https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg"
          }
          alt={''}
        />
         <img
          style={{ width: "300px", height: "180px",marginTop:"10px" }}
          src={
            "https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg"
          }
          alt={''}
        />
         <img
          style={{ width: "300px", height: "180px",marginTop:"10px" }}
          src={
            "https://neilpatel.com/wp-content/uploads/2021/02/ExamplesofSuccessfulBannerAdvertising-700x420.jpg"
          }
          alt={''}
        />
        
      </CustomScrollbars>
    </div>
  );
}

export default RightStats;
