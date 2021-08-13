import React, { useState } from "react";
import {
  Upload,
  Form,
  Input,
  Button,
  Select,
  Row,
  Col,
  DatePicker,
} from "antd";
import ImgCrop from "antd-img-crop";
import { storage } from "../../configs/firebaseConfig";
import './style.css'
const { TextArea } = Input;
const { Option } = Select;

// function getBase64(file) {
//   return new Promise((resolve, reject) => {
//     const reader = new FileReader();
//     reader.readAsDataURL(file);
//     reader.onload = () => resolve(reader.result);
//     reader.onerror = (error) => reject(error);
//   });
// }
function Postad() {
  const [fileList, setFileList] = useState([]);
  const [index, setindex] = useState(0)
  

  const onChange = ({ fileList: newFileList }) => {
    setFileList(newFileList);
    console.log(newFileList[index]?.name);
    const uploadTask = storage.ref(`images/${newFileList[index]?.name}`).put(newFileList[index]?.originFileObj);
    uploadTask.on(
      "state_changed",
        snapshot =>{},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(newFileList[index]?.name)
          .getDownloadURL()
          .then(url => {
            console.log ('saa',url);
          });
      }
    );
    setindex(index+1);

  };

  const onPreview = async (file) => {
    let src = file.url;
    if (!src) {
      src = await new Promise((resolve) => {
        const reader = new FileReader();
        reader.readAsDataURL(file.originFileObj);
        reader.onload = () => resolve(reader.result);
      });
    }
    const image = new Image();
    image.src = src;
    const imgWindow = window.open(src);
    imgWindow.document.write(image.outerHTML);
  };

  const onFinish = (values) => {
    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const onChangeinput = (e) => {
    console.log("Change:", e.target.value);
  };

  function onChangeDropdown(value) {
    console.log(`selected ${value}`);
  }

  function onBlur() {
    console.log("blur");
  }

  function onFocus() {
    console.log("focus");
  }

  function onSearch(val) {
    console.log("search:", val);
  }
  function onChangeDate(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <div>
      <div>
        <h3>Upload Your Pictures</h3>
        <ImgCrop rotate>
          <Upload
            // action='https://www.mocky.io/v2/5cc8019d300000980a055e76'
            listType='picture-card'
            fileList={fileList}
            onChange={onChange}
            onPreview={onPreview}
          >
            {fileList.length < 5 && "+ Upload"}
          </Upload>
        </ImgCrop>
      </div>
      <div>
        <h4>Enter Following details</h4>
        <Row justify='Center' className='align-items-stretch h-100'>
          <Col xs={20} sm={20} md={24} lg={12}>
            <Form
              style={{ marginRight: "5%" }}
              name='basic'
              labelCol={{
                span: 8,
              }}
              wrapperCol={{
                span: 16,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
            >
              <Form.Item
                label='Title'
                name='title'
                rules={[
                  {
                    required: true,
                    message: "Please input your title!",
                  },
                ]}
              >
                <TextArea showCount maxLength={100} onChange={onChangeinput} />
              </Form.Item>

              <Form.Item
                label='Description'
                name='description'
                rules={[
                  {
                    required: true,
                    message: "Please input your description!",
                  },
                ]}
              >
                <TextArea
                  showCount
                  rows={4}
                  maxLength={300}
                  onChange={onChangeinput}
                />
              </Form.Item>
              <Form.Item
                label='Phone Number'
                name='phNumber'
                rules={[
                  {
                    required: true,
                    message: "Please input your Phone Number!",
                  },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
              style={{float:"right"}}
                wrapperCol={{
                  offset: 8,
                  span: 16,
                }}
              >
                <Button
                  className='submitbutton'
                  type='primary'
                  htmlType='submit'
                >
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Col>
          <Col xs={20} sm={20} md={24} lg={12}>
            <p>Select Category</p>
            <Select
              showSearch
              style={{ width: 200 }}
              placeholder='Select a category'
              optionFilterProp='children'
              onChange={onChangeDropdown}
              onFocus={onFocus}
              onBlur={onBlur}
              onSearch={onSearch}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              <Option value='Dining Space'>Dining Space</Option>
              <Option value='Hotel Room'>Hotel Room</Option>
              <Option value='Plot'>Plot</Option>
              <Option value='Marraige Hall'>Marraige Hall</Option>
              <Option value='Seminar Hall'>Seminar Hall</Option>

              <Option value='Meeting Hall'>Meeting Hall</Option>

              <Option value='Marquee'>Marquee</Option>


            </Select>
            <div>
              <p style={{ marginTop: "3%" }}>Select Avaiable Date</p>
              <DatePicker onChange={onChangeDate} />
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Postad;
