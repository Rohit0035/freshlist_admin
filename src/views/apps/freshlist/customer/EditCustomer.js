import React from "react";
import {
  Card,
  Row,
  Col,
  Button,
  Table,
  Label,
  Input,
  Container,
} from "reactstrap";
import { Trash2, Edit } from "react-feather";
import axiosConfig from "../../../../axiosConfig";
import { FaBeer } from "react-icons/fa";
import { history } from "../../../../history";
import { Route } from "react-router-dom";
import imagecal from "../../../../assets/img/svg/imagecal.png";
import "../../../../layouts/assets/scss/pages/users.scss";
class EditCustomer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: {},
    };
  }
  componentDidMount() {
    // console.log(this.props.match.params);
    let { id } = this.props.match.params;
    axiosConfig
      .get(`/admin/viewone_order/${id}`)
      .then((response) => {
        console.log(response.data.data);
        this.setState({ data: response.data.data });
      })
      .catch((error) => {
        console.log(error);
      });
  }
  render() {
    return (
      <React.Fragment>
        <Container>
          <Row>
            <Col sm="9">
              <Card>
                <Row className="m-2">
                  <Col sm="6">
                    <h4>
                      <b>Order ID</b>
                      <span> #45112</span>
                    </h4>
                    {/* <p className="my-1">
                      <img src={imagecal} alt="cl" width={15} /> 05 Jan 2023
                      01:33:44
                    </p> */}
                    <p>Total KM: 20KM</p>
                    <p>Total Time :27MIN</p>
                  </Col>
                  <Col sm="6" style={{ textAlign: "right" }}>
                    <Input type="search" placeholder="Search Order" />
                  </Col>
                </Row>
                <Container>
                  <Row className="">
                    <Table className="table-responsive">
                      <thead>
                        <tr>
                          <th>SL</th>
                          <th>OrderId</th>
                          <th>Total</th>
                          <th>Actions</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <th scope="row">1</th>
                          <td>Onion</td>
                          <td>29</td>

                          <td>
                            <Route
                              render={({ history }) => (
                                <Edit
                                  className="mr-50"
                                  size="25px"
                                  color="blue"
                                  // onClick={() =>
                                  //   history.push(
                                  //     `/app/freshlist/order/editOrder/${params.data._id}`
                                  //   )
                                  // }
                                />
                              )}
                            />
                            <Route
                              render={() => (
                                <Trash2
                                  className="mr-50"
                                  size="25px"
                                  color="red"
                                  // onClick={() => {
                                  //   let selectedData =
                                  //     this.gridApi.getSelectedRows();
                                  //   this.runthisfunction(params.data._id);
                                  //   this.gridApi.updateRowData({
                                  //     remove: selectedData,
                                  //   });
                                  // }}
                                />
                              )}
                            />
                          </td>
                        </tr>
                        <tr>
                          <th scope="row">2</th>
                          <td>T-shirt</td>
                          <td>2</td>

                          <td>
                            <Route
                              render={({ history }) => (
                                <Edit
                                  className="mr-50"
                                  size="25px"
                                  color="blue"
                                  // onClick={() =>
                                  //   history.push(
                                  //     `/app/freshlist/order/editOrder/${params.data._id}`
                                  //   )
                                  // }
                                />
                              )}
                            />
                            <Route
                              render={() => (
                                <Trash2
                                  className="mr-50"
                                  size="25px"
                                  color="red"
                                  // onClick={() => {
                                  //   let selectedData =
                                  //     this.gridApi.getSelectedRows();
                                  //   this.runthisfunction(params.data._id);
                                  //   this.gridApi.updateRowData({
                                  //     remove: selectedData,
                                  //   });
                                  // }}
                                />
                              )}
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </Row>
                </Container>
              </Card>
            </Col>
            <Col sm="3">
              <Card>
                <Row className="m-2">
                  <Col sm="12" className="my-1">
                    <Label>Customer Information</Label>
                    <Row>
                      <Col sm="6">
                        <img
                          src="https://img.freepik.com/premium-vector/cute-little-boy-cartoon-waving-hand_322598-79.jpg?w=740"
                          alt="aaa"
                          width="50"
                          height="80"
                        />
                      </Col>
                      <Col sm="6">
                        <h6>
                          <b>Rahul Sharma</b>
                        </h6>
                        <p>
                          <b>11</b>Orders
                        </p>
                        <p>#100210</p>
                        <p>customer@customer.com</p>
                      </Col>
                    </Row>
                  </Col>
                </Row>
              </Card>
            </Col>
          </Row>
        </Container>
      </React.Fragment>
    );
  }
}
export default EditCustomer;

// import React, { Component } from "react";
// import {
//   Card,
//   CardBody,
//   Row,
//   Col,
//   Form,
//   Label,
//   Input,
//   Button,
//   Breadcrumb,
//   BreadcrumbItem,
//   FormGroup,
// } from "reactstrap";
// import axiosConfig from "../../../../axiosConfig";
// // import { history } from "../../../history";
// import { Route } from "react-router-dom";
// import swal from "sweetalert";

// export default class EditCustomer extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       username: "",
//       email: "",
//       mobile: "",
//       status: "",
//     };
//   }
//   componentDidMount() {
//     let { id } = this.props.match.params;
//     axiosConfig
//       .get(`/user/getviewone/${id}`)
//       .then((response) => {
//         console.log("getviewone", response.data.data);
//         this.setState({
//           username: response.data.data.username,
//           mobile: response.data.data.mobile,
//           email: response.data.data.email,
//           status: response.data.data.status,
//         });
//       })
//       .catch((error) => {
//         console.log(error);
//       });
//   }
//   changeHandler1 = (e) => {
//     this.setState({ status: e.target.value });
//   };

//   changeHandler = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
//   };

//   submitHandler = (e) => {
//     e.preventDefault();
//     let { id } = this.props.match.params;
//     console.log(id);
//     axiosConfig
//       .post(`/admin/edit_order/${id}`, this.state)
//       .then((response) => {
//         console.log(response);
//         this.props.history.push("/app/freshlist/order/all");
//       })
//       .catch((error) => {
//         console.log(error.response.data);
//       });
//   };

//   render() {
//     return (
//       <div>
//         <Row>
//           <Col sm="12">
//             <div>
//               <Breadcrumb listTag="div">
//                 <BreadcrumbItem href="/analyticsDashboard" tag="a">
//                   Home
//                 </BreadcrumbItem>
//                 <BreadcrumbItem
//                   href="/app/freshlist/customer/customerList"
//                   tag="a"
//                 >
//                   Customer List
//                 </BreadcrumbItem>
//                 <BreadcrumbItem active>Edit Customer List</BreadcrumbItem>
//               </Breadcrumb>
//             </div>
//           </Col>
//         </Row>
//         <Card>
//           <Row className="m-2">
//             <Col>
//               <h1 className="float-left">Edit Resource List</h1>
//             </Col>
//             <Col>
//               <Route
//                 render={({ history }) => (
//                   <Button
//                     className=" btn btn-danger float-right"
//                     onClick={() =>
//                       history.push("/app/freshlist/customer/customerList")
//                     }
//                   >
//                     Back
//                   </Button>
//                 )}
//               />
//             </Col>
//           </Row>

//           <CardBody>
//             <Form className="m-1" onSubmit={this.submitHandler}>
//               <Row>
//                 <Col lg="5" md="5" className="ml-2">
//                   <FormGroup>
//                     <Label>Customer Name</Label>
//                     <Input
//                       type="text"
//                       placeholder="Customer Name"
//                       name="username"
//                       value={this.state.username}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="5" md="5">
//                   <FormGroup>
//                     <Label>Email</Label>
//                     <Input
//                       type="email"
//                       placeholder="Enter Email"
//                       name="email"
//                       value={this.state.email}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>

//                 <Col lg="5" md="5" className="ml-2">
//                   <FormGroup>
//                     <Label>Mobile</Label>
//                     <Input
//                       type="number"
//                       placeholder="Enter Mobile"
//                       name="mobile"
//                       value={this.state.mobile}
//                       onChange={this.changeHandler}
//                     />
//                   </FormGroup>
//                 </Col>
//                 <Col lg="6" md="6" sm="6" className="mb-2 mt-1">
//                   <Label className="mb-1">
//                     <h4>Status</h4>
//                   </Label>
//                   <div
//                     className="form-label-group"
//                     onChange={this.changeHandler1}
//                   >
//                     <input
//                       style={{ marginRight: "3px" }}
//                       type="radio"
//                       name="status"
//                       value="true"
//                     />
//                     <span style={{ marginRight: "20px" }}>Active</span>

//                     <input
//                       style={{ marginRight: "3px" }}
//                       type="radio"
//                       name="status"
//                       value="false"
//                     />
//                     <span style={{ marginRight: "3px" }}>Deactive</span>
//                   </div>
//                 </Col>
//               </Row>
//               <Row>
//                 <Col lg="6" md="6" sm="6" className="mb-2">
//                   <Button.Ripple
//                     color="primary"
//                     type="submit"
//                     className="mr-2 mb-1"
//                   >
//                     Update
//                   </Button.Ripple>
//                 </Col>
//               </Row>
//             </Form>
//           </CardBody>
//         </Card>
//       </div>
//     );
//   }
// }
