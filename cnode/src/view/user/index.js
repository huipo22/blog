import React, { Component } from 'react'
import { Avatar, Row, Col } from 'antd'
import data from './data'
import UserList from './userList'

class User extends Component {
    render() {
        let { avatar_url, loginname, create_at, score, recent_topics } = data.data
        return (
            <div className="wrap">
                <Avatar
                    src={avatar_url}
                    className="userAvatar" />
                <Row className="userInfo">
                    <Col md={8}>
                        用户名：<a href="">{loginname}</a>
                    </Col>
                    <Col md={8}>
                        积分：<a href="">{score}</a>
                    </Col>
                    <Col md={8}>
                        注册时间:{create_at.split('T')[0]}
                    </Col>
                </Row>
                <UserList loading={false} title="dd" data={recent_topics} />
            </div>
        )
    }
}
export default User