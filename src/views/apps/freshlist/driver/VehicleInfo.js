import React, { Component } from "react";
import { BsFillPersonFill } from "react-icons/bs";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  CustomInput,
  Label,
  Button,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";

export class VehicleInfo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      desc: "",
      product_img: "",
      status: "",
    };
  }

  onChangeHandler = (event) => {
    this.setState({ selectedFile: event.target.files[0] });
    this.setState({ selectedName: event.target.files[0].name });
    console.log(event.target.files[0]);
  };

  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitHandler = (e) => {
    e.preventDefault();
    const data = new FormData();
    data.append("name", this.state.name);
    data.append("sortorder", this.state.sortorder);
    data.append("desc", this.state.desc);
    data.append("status", this.state.status);
    data.append(
      "product_img",
      this.state.selectedFile,
      this.state.selectedName
    );
    //   for (var value of data.values()) {
    //     console.log(value);
    //  }
    axiosConfig
      .post(" /addproductcategory", data)
      .then((response) => {
        console.log(response);
        this.props.history.push("/app/category/category");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  render() {
    return (
      <div>
        <div>
          <Card>
            <Row className="m-1">
              <Col>
                <h3 col-sm-6 className="float-left">
                  <BsFillPersonFill /> Vehicle Information
                </h3>
              </Col>

              {/* <div className="table-input mr-1">
                                <Input
                                    placeholder="search by Product..."
                                    onChange={(e) =>
                                        this.updateSearchQuery(e.target.value)
                                    }
                                    value={this.state.value}
                                />
                            </div> */}
            </Row>
            <CardBody>
              <Form className="m-1" onSubmit={this.submitHandler}>
                <Row className="mb-2">
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Registration Card</Label>
                    <CustomInput
                      required
                      type="file"
                      name="identity"
                      value={this.state.identity}
                      onChange={this.changeHandler}
                    ></CustomInput>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Insurance</Label>
                    <CustomInput
                      required
                      type="file"
                      name="identity"
                      value={this.state.identity}
                      onChange={this.changeHandler}
                    ></CustomInput>
                  </Col>

                  <Col lg="6" md="6" className="mb-1">
                    <Label>License</Label>
                    <CustomInput
                      required
                      type="file"
                      name="identity"
                      value={this.state.identity}
                      onChange={this.changeHandler}
                    ></CustomInput>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Driver Photo</Label>
                    <CustomInput
                      required
                      type="file"
                      name="identity"
                      value={this.state.identity}
                      onChange={this.changeHandler}
                    ></CustomInput>
                  </Col>
                </Row>
                <Row style={{ float: "right" }}>
                  <Button.Ripple
                    color="primary"
                    type="submit"
                    className="mr-1 mb-1 "
                  >
                    Submit
                  </Button.Ripple>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default VehicleInfo;
