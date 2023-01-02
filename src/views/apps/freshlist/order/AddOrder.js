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
import Multiselect from "multiselect-react-dropdown";
import swal from "sweetalert";
import "../../../../../src/layouts/assets/scss/pages/users.scss";
import { Route } from "react-router-dom";
export class AddOrder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      delivery_slot: "",
      quantity: "",
      phone_no: "",
      order_zone: "",
      delivery_add: "",
      attribute: "",
      // items: "",
      email: "",
      delivery_date: "",
      time_slot: "",
      status: "",
      productName: [],
      attribuName: [],
      previous_add: "",
      new_address: "",
      notify: [],
      // selectedOptions: [],
    };
  }
  // changeHandler1 = (e) => {
  //   this.setState({ status: e.target.value });
  // };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    axiosConfig
      .get("/admin/product_list")
      .then((response) => {
        // console.log(response);
        this.setState({
          productName: response.data.data,
        });
      })
      .catch((error) => {
        console.log(error);
      });

    axiosConfig
      .get("/admin/getall_units")
      .then((response) => {
        this.setState({
          attribuName: response.data.data,
        });
      })
      .catch((err) => {
        swal("Oops", "Something went wrong!", "error");
        console.log(err);
      });
  }

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
                Add Order
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
                    <Label>Mobile Number</Label>
                    <Input
                      type="number"
                      pattern="[0-9]{0,5}"
                      placeholder="Mobile Number"
                      name="phone_no"
                      value={this.state.phone_no}
                      // onChange={this.changeHandler}
                      // onInput={this.handleChange.bind(this)}
                      onChange={this.changeHandler.bind(this)}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Delivery Slot</Label>
                    <Input
                      type="text"
                      placeholder="Delivery Slot"
                      name="delivery_slot"
                      value={this.state.delivery_slot}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                {/* <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Items</Label>
                    <Input
                      type="text"
                      placeholder="Items"
                      name="items"
                      value={this.state.items}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col> */}
                <Col lg="6" md="6">
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
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Previous Address</Label>
                    <Input
                      type="text"
                      placeholder="Previous Address"
                      name="previous_add"
                      value={this.state.previous_add}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>New Address</Label>
                    <Input
                      type="text"
                      placeholder="New Address"
                      name="new_address"
                      value={this.state.new_address}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Delivery Date</Label>
                    <Input
                      type="date"
                      placeholder="Delivery Date"
                      name="d_date"
                      value={this.state.d_date}
                      onChange={this.changeHandler}
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
                  <Label>Notify </Label>
                  <Multiselect
                    name="notify"
                    value={this.state.notify}
                    isObject={false}
                    onRemove={(e) => {
                      console.log(e);
                    }}
                    onSelect={(e) => {
                      this.setState({ notify: e });
                      // this.setState({ [e.target.name]: e.target.value });
                      console.log(e);
                    }}
                    onChange={this.changeHandler}
                    options={["SMS", "EMAIL", "WHATSAPP", "APP NOTIFICATION"]}
                    showCheckbox
                    className="mmm"
                  />
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Order Zone </Label>
                    <Input
                      type="text"
                      placeholder=""
                      name="order_zone"
                      value={this.state.order_zone}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <Label>Order Status</Label>
                  <CustomInput
                    type="select"
                    placeholder=""
                    name="status"
                    value={this.state.status}
                    onChange={this.changeHandler}
                  >
                    <option>--Select--</option>
                    <option value="pending">Pending</option>
                    <option value="complete">Completed</option>
                    <option value="delivery">Delivery</option>
                    <option value="canceled">Canceled</option>
                    {/* <option value="Approved">Approved</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Rejected">Rejected</option> */}
                    {/* <option value="Outfordelivery">Outfordelivery</option> */}
                    {/* <option value="Delivered">Delivered</option>
                    <option value="Failedtodeliver">Failedtodeliver</option>
                    <option value="Returned">Returned</option> */}
                  </CustomInput>
                </Col>
              </Row>
              <Row className="m-2">
                <Col>
                  <h1 col-sm-6 className="float-left">
                    Add Product
                  </h1>
                </Col>
              </Row>
              <Row>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Product Name</Label>
                  <Input
                    type="select"
                    placeholder="Enter Product"
                    name="product"
                    value={this.state.product}
                    onChange={this.changeHandler}
                  >
                    <option>Select Product</option>
                    {this.state.productName?.map((pnlist) => (
                      <option value={pnlist?._id} key={pnlist?._id}>
                        {pnlist?.product_name}
                      </option>
                    ))}
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Attribute Name</Label>
                  <Input
                    type="select"
                    placeholder="Enter Attribute"
                    name="attribute"
                    value={this.state.attribute}
                    onChange={this.changeHandler}
                  >
                    <option>Select Attribute</option>
                    {this.state.attribuName?.map((attlist) => (
                      <option value={attlist?._id} key={attlist?._id}>
                        {attlist?.units_name}
                      </option>
                    ))}
                  </Input>
                </Col>

                <Col lg="6" md="6">
                  <Label>Quantity</Label>
                  <Input
                    type="number"
                    placeholder="Quantity"
                    name="quantity"
                    value={this.state.quantity}
                    onChange={this.changeHandler}
                  />
                </Col>
              </Row>
              <Row>
                <Button.Ripple
                  color="primary"
                  type="submit"
                  className="mr-1 mt-2"
                >
                  Add Order
                </Button.Ripple>
              </Row>
            </Form>
          </CardBody>
        </Card>
      </div>
    );
  }
}
export default AddOrder;
