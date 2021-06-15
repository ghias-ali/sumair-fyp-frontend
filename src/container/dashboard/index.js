import React from "react";
import AdsComponent from "../../components/ads/index";
import RightStats from "../../components/rightstats/index";
import LeftStats from "../../components/leftstats/index";
import { Row, Col } from "antd";

import "./style.css"

function Dashboard() {
  return (
    <div>
      <Row justify='Center' className='align-items-stretch h-100'>
        <Col xs={0} sm={0} md={0} lg={4}>
          <LeftStats />
        </Col>
        <Col  xs={20} sm={20} md={24} lg={16}>
          {" "}
          <AdsComponent />
        </Col>
        <Col xs={0} sm={0} md={0} lg={4}>
          <RightStats />
        </Col>
      </Row>
    </div>
  );
}

export default Dashboard;
