import React from "react";
import { Scrollbars } from "react-custom-scrollbars";
import "./style.css";
import { Carousel, Button } from "antd";
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
  const contentStyle = {
    height: "160px",
    color: "#fff",
    lineHeight: "160px",
    textAlign: "center",
    background: "#364d79",
    marginTop: "27px",
    width: "300px",
  };

  return (
    <div>
      <h1 className='recentads'>Recent Ads</h1>
      <CustomScrollbars
        style={{ position: "absolute", height: "80vh" }}
        autoHide
        autoHideTimeout={500}
        autoHideDuration={200}
      >
        <div className='ad11 '>
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
          <div className='inrowview'>
            <div style={{ width: "50%" }} className='container '>
              <Carousel autoplay={true} dots={false} effect={"fade"}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
            <div style={{ width: "20em" }}>
              <h5>Description:</h5>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled...
              </p>
              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#FA9746",
                  fontWeight: "300",
                  paddingLeft: "20%",
                  paddingRight: "20%",
                }}
                htmlType='submit'
              >
                View Full
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div className='ad11 '>
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
          <div className='inrowview'>
            <div style={{ width: "50%" }} className='container '>
              <Carousel autoplay={true} dots={false} effect={"fade"}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
            <div style={{ width: "20em" }}>
              <h5>Description:</h5>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled...
              </p>
              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#FA9746",
                  fontWeight: "300",
                  paddingLeft: "20%",
                  paddingRight: "20%",
                }}
                htmlType='submit'
              >
                View Full
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div className='ad11 '>
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
          <div className='inrowview'>
            <div style={{ width: "50%" }} className='container '>
              <Carousel autoplay={true} dots={false} effect={"fade"}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
            <div style={{ width: "20em" }}>
              <h5>Description:</h5>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled...
              </p>
              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#FA9746",
                  fontWeight: "300",
                  paddingLeft: "20%",
                  paddingRight: "20%",
                }}
                htmlType='submit'
              >
                View Full
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div className='ad11 '>
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
          <div className='inrowview'>
            <div style={{ width: "50%" }} className='container '>
              <Carousel autoplay={true} dots={false} effect={"fade"}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
            <div style={{ width: "20em" }}>
              <h5>Description:</h5>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled...
              </p>
              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#FA9746",
                  fontWeight: "300",
                  paddingLeft: "20%",
                  paddingRight: "20%",
                }}
                htmlType='submit'
              >
                View Full
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div className='ad11 '>
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
          <div className='inrowview'>
            <div style={{ width: "50%" }} className='container '>
              <Carousel autoplay={true} dots={false} effect={"fade"}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
            <div style={{ width: "20em" }}>
              <h5>Description:</h5>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled...
              </p>
              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#FA9746",
                  fontWeight: "300",
                  paddingLeft: "20%",
                  paddingRight: "20%",
                }}
                htmlType='submit'
              >
                View Full
              </Button>
            </div>
          </div>
        </div>
        <br />
        <div className='ad11 '>
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
          <div className='inrowview'>
            <div style={{ width: "50%" }} className='container '>
              <Carousel autoplay={true} dots={false} effect={"fade"}>
                <div>
                  <h3 style={contentStyle}>1</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>2</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>3</h3>
                </div>
                <div>
                  <h3 style={contentStyle}>4</h3>
                </div>
              </Carousel>
            </div>
            <div style={{ width: "20em" }}>
              <h5>Description:</h5>
              <p>
                {" "}
                Lorem Ipsum has been the industry's standard dummy text ever
                since the 1500s, when an unknown printer took a galley of type
                and scrambled...
              </p>
              <Button
                style={{
                  color: "#fff",
                  backgroundColor: "#FA9746",
                  fontWeight: "300",
                  paddingLeft: "20%",
                  paddingRight: "20%",
                }}
                htmlType='submit'
              >
                View Full
              </Button>
            </div>
          </div>
        </div>
        <br />
      </CustomScrollbars>
    </div>
  );
}

export default AdsComponent;
