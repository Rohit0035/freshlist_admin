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
      new_address: "",
      notify: [],
      inputlist: [{ notify: "", attribute: "", quantity: "" }],
      // selectedOptions: [],
    };
  }

  changeHandler = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleremove = (index) => {
    const list = [...this.state.inputlist];
    list.splice(index, 1);
    this.setState({ inputlist: list });
  };

  handleinputchange = (e, index) => {
    const { name, value } = e.target;
    const list = [...this.state.inputlist];
    list[index][name] = value;

    this.setState({ inputlist: list });
  };
  handleClick = () => {
    this.setState({
      inputlist: [
        ...this.state.inputlist,
        { notify: "", attribute: "", quantity: "" },
      ],
    });
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
                      required
                      type="tel"
                      maxlength="10"
                      placeholder="Mobile Number"
                      name="phone_no"
                      value={this.state.phone_no}
                      onChange={this.changeHandler.bind(this)}
                    />
                  </FormGroup>
                </Col>
                {/* <Col lg="6" md="6">
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
                </Col> */}
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
                    <Label>Delivery Address</Label>
                    <Input
                      type="textarea"
                      placeholder="Delivery Address"
                      name="delivery_add"
                      value={this.state.delivery_add}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                {/* <Col lg="6" md="6">
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
                </Col> */}
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>New Address</Label>
                    <Input
                      type="textarea"
                      placeholder="New Address"
                      name="new_address"
                      value={this.state.new_address}
                      onChange={this.changeHandler}
                    />
                  </FormGroup>
                </Col>
                <Col lg="6" md="6">
                  <FormGroup>
                    <Label>Select Delivery Date</Label>
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
                    <Label>Time Slot of Delivery</Label>
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
                  <Label>Notify by </Label>
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
              <hr />
              <Row className="">
                <h1 col-sm-6 className="float-left mt-2 mb-2 mx-2">
                  Add Product
                </h1>
              </Row>
              <Row>
                <Col lg="6" md="6" className="mb-1">
                  <Label>Category name</Label>
                  <Input
                    type="select"
                    placeholder="Enter Attribute"
                    name="attribute"
                    value={this.state.attribute}
                    onChange={this.changeHandler}
                  >
                    <option>Select Category</option>
                    {this.state.attribuName?.map((attlist) => (
                      <option value={attlist?._id} key={attlist?._id}>
                        {attlist?.units_name}
                      </option>
                    ))}
                  </Input>
                </Col>
                <Col lg="6" md="6" className="mb-1">
                  <Label> Select Sub Category</Label>
                  <Input
                    type="select"
                    placeholder="Enter Attribute"
                    name="attribute"
                    value={this.state.attribute}
                    onChange={this.changeHandler}
                  >
                    <option>Select Sub-Category</option>
                    {this.state.attribuName?.map((attlist) => (
                      <option value={attlist?._id} key={attlist?._id}>
                        {attlist?.units_name}
                      </option>
                    ))}
                  </Input>
                </Col>
              </Row>

              {this.state.inputlist.map((e, i) => {
                return (
                  <Row key={i}>
                    <Col lg="3" md="3" className="mb-1">
                      <Label>Product Name</Label>
                      <Multiselect
                        name="notify"
                        value={this.state.notify}
                        isObject={false}
                        placeholder="Search and Select"
                        onRemove={(e) => {
                          console.log(e);
                        }}
                        onSelect={(e) => {
                          this.setState({ notify: e });
                          // this.setState({ [e.target.name]: e.target.value });
                          console.log(e);
                        }}
                        selectionLimit="1"
                        onChange={(e) => this.handleinputchange(e, i)}
                        options={[
                          "Aalu - 2kg ",
                          "tamater",
                          "ata",
                          "milk",
                          "began,",
                        ]}
                        showCheckbox
                        className="mmm"
                      />
                      {/* <Input
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
                  </Input> */}
                    </Col>
                    <Col lg="3" md="3" className="mb-1">
                      <Label>Attribute Name</Label>
                      <Input
                        type="select"
                        placeholder="Enter Attribute"
                        name="attribute"
                        value={this.state.inputlist.attribute}
                        onChange={(e) => this.handleinputchange(e, i)}
                      >
                        <option>Select Attribute</option>
                        {this.state.attribuName?.map((attlist) => (
                          <option value={attlist?._id} key={attlist?._id}>
                            {attlist?.units_name}
                          </option>
                        ))}
                      </Input>
                    </Col>

                    <Col lg="3" md="3">
                      <Label>Quantity</Label>
                      <Input
                        type="number"
                        placeholder="Quantity"
                        name="quantity"
                        value={this.state.inputlist.quantity}
                        onChange={(e) => this.handleinputchange(e, i)}
                      />
                    </Col>
                    {/* <Col>
                      <Button.Ripple
                        onClick={this.handleClick}
                        color="primary"
                        className="mr-1 mt-2"
                      >
                        Add new Field
                      </Button.Ripple>
                    </Col> */}
                    <Col lg="3" md="3" className="d-flex">
                      {this.state.inputlist.length !== 1 && (
                        <Button.Ripple
                          color="primary"
                          className="mr-1 mt-2"
                          style={{ height: "40px" }}
                          onClick={() => this.handleremove(i)}
                        >
                          Remove
                        </Button.Ripple>
                      )}
                      {this.state.inputlist.length - 1 === i && (
                        <Button.Ripple
                          color="primary"
                          className="mr-1 mt-2"
                          style={{ height: "40px" }}
                          onClick={this.handleClick}
                        >
                          Add More
                        </Button.Ripple>
                      )}
                    </Col>
                  </Row>
                );
              })}

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
