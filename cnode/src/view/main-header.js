import React, { Component } from 'react'
import { Layout, Row, Col, Divider } from 'antd'

const { Header } = Layout
class MainHeader extends Component {
    render() {
        return (<Layout.Header>
            <Row className="wrap">
                <Col md={6} xs={24}>
                    <h1 id="logo">cNode</h1>
                </Col>
                <Col md={18} xs={0}>
                    <Divider type="vertical" className="headerDivider"/>
                </Col>
            </Row>
        </Layout.Header>)
    }
}
export default MainHeader