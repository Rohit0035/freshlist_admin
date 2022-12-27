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
import ReactMultiSelectCheckboxes from "react-multiselect-checkboxes";

const options = [
  { label: "Email", value: 1 },
  { label: "WhatsApp", value: 2 },
  { label: "SMS", value: 3 },
  { label: "App Notification", value: 4 },
];
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
      items: "",
      notifyby_email: "",
      delivery_date: "",
      time_slot: "",
      status: "",
      productName: [],
      attribuName: [],
      previousAdd: "",
      newAddress: "",
    };
  }
  changeHandler1 = (e) => {
    this.setState({ status: e.target.value });
  };

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  async componentDidMount() {
    axiosConfig
      .get("/admin/product_list")
      .then((response) => {
        console.log(response);
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
        console.log(response);
        this.setState({
          attribuName: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  }
  submitHandler = (e) => {
    e.preventDefault();

    axiosConfig
      .post("/admin/addorder", this.state)

      .then((response) => {
        console.log(response);
        // swal("Success!", "Submitted SuccessFull!", "success");
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
              <Button
                className=" btn btn-danger float-right"
                onClick={() => history.push("/app/freshlist/order/all")}
              >
                Back
              </Button>
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
                      placeholder="Mobile Number"
                      name="phone_no"
                      value={this.state.phone_no}
                      onChange={this.changeHandler}
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
                      name="previousAdd"
                      value={this.state.previousAdd}
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
                      name="previousAdd"
                      value={this.state.newAddress}
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
                    <Label>Notify</Label>

                    <ReactMultiSelectCheckboxes
                      options={options}
                      width="100%"
                    />
                  </FormGroup>
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

                {/* <Col lg="6" md="6">
                  <Label>Order Status</Label>
                  <CustomInput
                    type="select"
                    placeholder=""
                    name="status"
                    value={this.state.status}
                    onChange={this.changeHandler}
                  >
                    <option>--Select--</option>
                    <option value="Pending">Pending</option>
                    <option value="Approved">Approved</option>
                    <option value="Packaging">Packaging</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Outfordelivery">Outfordelivery</option>
                    <option value="Canceled">Canceled</option>
                    <option value="Delivered">Delivered</option>
                    <option value="Failedtodeliver">Failedtodeliver</option>
                    <option value="Returned">Returned</option>
                  </CustomInput>
                </Col> */}
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
