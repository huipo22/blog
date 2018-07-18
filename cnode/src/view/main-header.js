import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Layout, Row, Col, Divider, Icon, Dropdown, Button } from 'antd'

import Nav from './nav'
const { Header } = Layout
class MainHeader extends Component {
    render() {
        return (<Layout.Header>
            <Row className="wrap">
                <Col md={6} xs={24}>
                    <h1 id="logo">cNode</h1>
                </Col>
                <Col md={18} xs={0}>
                    <Divider type="vertical" className="headerDivider" />
                    <Nav id="nav" mode="horizontal"></Nav>
                </Col>
                <Col md={0} xs={24} className="xsNav">
                    <Dropdown overlay={
                        <Nav mode="vertical" id="xsNav"></Nav>
                    }
                        placement="bottomRight"
                        trigger={["click", "touchend"]}>
                        <Button><Icon type="bars"></Icon></Button>
                    </Dropdown>
                </Col>
            </Row>
        </Layout.Header>)
    }
}
export default MainHeader