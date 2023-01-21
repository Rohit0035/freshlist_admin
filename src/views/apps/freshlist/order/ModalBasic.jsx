import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  TabContent,
  TabPane,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";
import classnames from "classnames";
import { Eye, Code } from "react-feather";

import { modalBasic } from "../../../../components/reactstrap/modal/ModalSourceCode.js";
import AddExorder from "./AddExorder.jsx";

class ModalBasic extends React.Component {
  state = {
    activeTab: "1",
    modal: false,
  };

  toggleTab = (tab) => {
    if (this.state.activeTab !== tab) {
      this.setState({ activeTab: tab });
    }
  };

  toggleModal = () => {
    this.setState((prevState) => ({
      modal: !prevState.modal,
    }));
  };

  render() {
    return (
      <>
        <Card>
          {/* <CardHeader> */}
          {/* <CardTitle>Basic Modal</CardTitle> */}
          {/* <div className="views">
              <Nav tabs>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "1",
                    })}
                    onClick={() => {
                      this.toggleTab("1");
                    }}
                  >
                    <Eye size={15} />
                  </NavLink>
                </NavItem>
                <NavItem>
                  <NavLink
                    className={classnames({
                      active: this.state.activeTab === "2",
                    })}
                    onClick={() => {
                      this.toggleTab("2");
                    }}
                  >
                    <Code size={15} />
                  </NavLink>
                </NavItem>
              </Nav>
            </div> */}
          {/* </CardHeader> */}

          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="1">
              <Button.Ripple
                color="primary"
                className="btn-block"
                size="md"
                outline
                onClick={this.toggleModal}
              >
                Add Product
              </Button.Ripple>
              <Modal
                isOpen={this.state.modal}
                toggle={this.toggleModal}
                style={{ maxWidth: "950px" }}
                // className={this.props.className}
              >
                <ModalHeader toggle={this.toggleModal}>Add Product</ModalHeader>
                <ModalBody>
                  <AddExorder />
                </ModalBody>
                {/* <ModalFooter>
                    <Button color="primary" onClick={this.toggleModal}>
                      Accept
                    </Button>{" "}
                  </ModalFooter> */}
              </Modal>
            </TabPane>
            <TabPane className="component-code" tabId="2">
              {modalBasic}
            </TabPane>
          </TabContent>
        </Card>
      </>
    );
  }
}
export default ModalBasic;
