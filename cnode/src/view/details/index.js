import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { Card, Avatar } from 'antd'
import data from './data'
import TxtTag from "../txtTag"

class Details extends Component {
    render() {
        const title = (<div>
            <h1>{data.data.title}</h1>
            <div style={{
                display:"flex",
                alignItem:"center"
            }}>
                <TxtTag data={data.data} />
                <Avatar src={data.data.author.author_url} />
                <Link to={"/user/" + data.data.author.loginname}>{data.data.author.loginname}</Link>
                发表于：{data.data.create_at.split('T')[0]}
            </div>
        </div>)
        return (
            <div className="wrap">
                <Card title={title}></Card>
                <div dangerouslySetInnerHTML={{
                    __html:data.data.content
                }}></div>
            </div>
        )
    }
}
export default Details