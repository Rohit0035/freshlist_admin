import React, { Component } from "react";

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

export class Account extends Component {
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
                  Service Details
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
                    <Label>Location</Label>
                    <Input
                      type="text"
                      name="desc"
                      placeholder="Location"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>City</Label>
                    <Input
                      type="text"
                      name="desc"
                      placeholder="City"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>PINCODE</Label>
                    <Input
                      type="text"
                      name="desc"
                      placeholder="PINCODE"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  {/* <Col lg="4" md="4" className="mb-2">
                    <Label>Email</Label>
                    <Input
                      type="text"
                      name="type"
                      value={this.state.type}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="4" md="4" className="mb-1">
                    <Label>Password</Label>
                    <Input
                      type="text"
                      name="Password"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>

                  <Col lg="4" md="4" className="mb-1">
                    <Label> confirm Password</Label>
                    <Input
                      required
                      type="text"
                      name="Enter Password"
                      placeholder="Enter Password."
                      value={this.state.date}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col> */}
                </Row>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default Account;
