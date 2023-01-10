import React, { Component } from "react";
import {
  Card,
  CardBody,
  Col,
  Form,
  Row,
  Input,
  Label,
  Button,
  FormGroup,
  CustomInput,
} from "reactstrap";
import { history } from "../../../../history";
import axiosConfig from "../../../../axiosConfig";
// import Multiselect from "multiselect-react-dropdown";
import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
export class AddRefund extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery_slot: "",
      quantity: "",
      phone_no: "",
      order_zone: "",
      delivery_add: "",
      attribute: "",
      email: "",
      delivery_date: "",
      time_slot: "",
      status: "",
      productName: [],
      attribuName: [],
      previous_add: "",
      new_address: "",
      notify: [],
      rowData: [],
    };
  }
  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  async componentDidMount() {
    axiosConfig.get("/admin/allorder_list").then((response) => {
      console.log(response.data.data);
      this.setState({ rowData: response.data.data });
    });
  }

  //   async componentDidMount() {
  //     axiosConfig
  //       .get("/admin/product_list")
  //       .then((response) => {
  //         console.log(response.data.data);
  //         this.setState({
  //           productName: response.data.data,
  //         });
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       });

  //     axiosConfig
  //       .get("/admin/getall_units")
  //       .then((response) => {
  //         this.setState({
  //           attribuName: response.data.data,
  //         });
  //       })
  //       .catch((err) => {
  //         swal("Oops", "Something went wrong!", "error");
  //         console.log(err);
  //       });
  //   }

  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/addorder", this.state)

      .then((response) => {
        console.log(response.data.data);
        swal("Success!", "Submitted SuccessFull!", "success");
        this.props.history.push("/app/freshlist/order/all");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    return (
      <div>
        <Card>
          <Row className="m-2">
            <Col>
              <h1 col-sm-6 className="float-left">
                Add Refund
              </h1>
            </Col>
            <Col>
              <Route
                render={({ history }) => (
                  <Button
                    className=" btn btn-danger float-right"
                    onClick={() => history.push("/app/freshlist/order/all")}
                  >
                    Back
                  </Button>
                )}
              />
            </Col>
          </Row>
          <CardBody>
            <Form className="m-1" onSubmit={this.submitHandler}>
              <Row className="mb-2">
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Order Id</Label>
                    <Input
                      type="number"
                      placeholder=""
                      name="orderId"
                      value={this.state.orderId}
                      onChange={this.changeHandler.bind(this)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Customer Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter Customer"
                      name="customer"
                      value={this.state.customer}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Mobile Number</Label>
                    <Input
                      type="number"
                      // maxLength={10}
                      // size={10}
                      placeholder="Mobile Number"
                      name="phone_no"
                      value={this.state.phone_no}
                      onChange={this.changeHandler.bind(this)}
                    />
                  </FormGroup>
                </Col>

                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Delivery Address</Label>
                    <Input
                      type="text"
                      placeholder="Delivery Address"
                      name="delivery_add"
                      value={this.state.delivery_add}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col> */}
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Email</Label>
                    <Input
                      type="email"
                      placeholder="Enter Email"
                      name="email"
                      value={this.state.email}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Unit Price</Label>
                    <Input
                      type="number"
                      placeholder=""
                      name="unit"
                      value={this.state.unit}
                      onChange={this.changeHandler.bind(this)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Time Slot</Label>
                    <Input
                      type="time"
                      placeholder="Time Slot"
                      name="time_slot"
                      value={this.state.time_slot}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Product Name</Label>
                    <Input
                      type="text"
                      placeholder="Enter Product"
                      name="product"
                      value={this.state.product}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Total Quantity</Label>
                    <Input
                      type="text"
                      placeholder="Enter Quantity"
                      name="quantity"
                      value={this.state.quantity}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Total Price</Label>
                    <Input
                      type="text"
                      placeholder="Enter Price"
                      name="price"
                      value={this.state.price}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>

                <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
                  <Label className="mb-1">Payment</Label>
                  <div
                    className="form-label-group"
                    onChange={this.changeHandler}
                  >
                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="payment"
                      value="Replacement"
                    />
                    <span style={{ marginRight: "20px" }}>Replacement</span>

                    <input
                      style={{ marginRight: "3px" }}
                      type="radio"
                      name="payment"
                      value="Refund"
                    />
                    <span style={{ marginRight: "3px" }}>Refund</span>
                  </div>
                </Col>
                <Col lg="6" md="6">
                  <Label>Payment Status</Label>
                  <CustomInput
                    type="select"
                    placeholder=""
                    name="status"
                    value={this.state.status}
                    onChange={this.changeHandler}
                  >
                    <option value="paid">paid</option>
                    <option value="unpaid">unpaid</option>
                  </CustomInput>
                </Col>
                <Col lg="6" md="6">
                  <Label>Product Status</Label>
                  <CustomInput
                    type="select"
                    placeholder=""
                    name="status"
                    value={this.state.status}
                    onChange={this.changeHandler}
                  >
                    <option value="pending">Pending</option>
                    {/* <option value="complete">Completed</option> */}
                    {/* <option value="delivery">Delivery</option> */}
                    <option value="canceled">Canceled</option>
                    <option value="Approved">Approved</option>
                    {/* <option value="Packaging">Packaging</option> */}
                    <option value="Rejected">Rejected</option>
                    {/* <option value="Outfordelivery">Outfordelivery</option> */}
                    {/* <option value="Delivered">Delivered</option> */}
                    {/* <option value="Failedtodeliver">Failedtodeliver</option> */}
                    {/* <option value="Returned">Returned</option> */}
                  </CustomInput>
                </Col>
              </Row>
              <FormGroup row>
                <Label for="exampleText">Reason</Label>
                <Col sm={10}>
                  <Input id="exampleText" name="text" type="textarea" />
                </Col>
              </FormGroup>
              <Row>
                {/* <Col lg="6" md="6" className="mb-1">
                  <Label>Product Name</Label>
                  <Input
                    type="select"
                    placeholder="Enter Product"
                    name="product"
                    value={this.state.product}
                    onChange={this.changeHandler}
                  >
                    <option>Order ID</option>
                    {this.state.productName?.map((pnlist) => (
                      <option value={pnlist?._id} key={pnlist?._id}>
                        {pnlist?._id}
                      </option>
                    ))}
                  </Input>
                </Col> */}

                {/* <Col lg="6" md="6">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.changeHandler}
                  />
                </Col> */}
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-2"
                >
                  Add Refund
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddRefund;
