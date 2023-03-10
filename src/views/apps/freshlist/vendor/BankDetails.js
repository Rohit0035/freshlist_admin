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

export class BankDetails extends Component {
  constructor(props) {
    super(props);

    this.state = {
      accountNo: "",
      name: "",
      branch: "",
      ifscCode: "",
      selectedFile: null,
      selectedName: "",
      sortorder: "",
      passbook_img: "",
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
    data.append("accountNo", this.state.name);
    data.append("branch", this.state.name);
    data.append("ifscCode", this.state.name);
    data.append("passbook_img", this.state.name);
    data.append("sortorder", this.state.sortorder);
    // data.append("desc", this.state.desc);
    // data.append("status", this.state.status);
    data.append(
      "passbook_img",
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
                  Bank Details
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
                    <Label>Account Number</Label>
                    <Input
                      type="number"
                      name="account"
                      placeholder="Account Number"
                      value={this.state.account}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Name</Label>
                    <Input
                      type="text"
                      name="name"
                      placeholder="Name"
                      value={this.state.name}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>Branch</Label>
                    <Input
                      type="text"
                      name="branch"
                      placeholder="Branch Name"
                      value={this.state.desc}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                  <Col lg="6" md="6" className="mb-1">
                    <Label>IFSC Code</Label>
                    <Input
                      type="text"
                      name="ifscCode"
                      placeholder="IFSC Code"
                      value={this.state.ifscCode}
                      onChange={this.changeHandler}
                    ></Input>
                  </Col>
                </Row>
              </Form>
            </CardBody>
          </Card>
        </div>
      </div>
    );
  }
}
export default BankDetails;
