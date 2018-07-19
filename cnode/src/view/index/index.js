import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'antd'
import IndexMenu from './indexMenu'
import IndexList from './list'

class Index extends Component {
    render() {
        console.log(this.props.location.pathname.split('/index/')[1])
        let tab=this.props.location.pathname.split('/index/')[1];
        return (
            <Row className="wrap">
                <Col md={6} xs={0}>
                    <IndexMenu id="indexMenu" mode="vertical"/>
                </Col>
                <Col md={0} xs={24}>
                    <IndexMenu id="indexXsMenu" mode="horizontal"/>
                </Col>
                <Col md={18} xs={24}
                    className="indexList">
                    <IndexList tab={tab}/>
                </Col>
            </Row>
        )
    }
}
export default Index