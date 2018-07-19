import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { List, Avatar } from 'antd'
import { connect } from 'react-redux'
import data from './data'
import TxtTag from '../txtTag'
import axios from 'axios'

class IndexList extends Component {
    constructor(arg) {
        super(arg)
        this.state = {
            page: 1,
        }
        this.getData(this.props.tab)
    }
    componentWillReceiveProps(nextProps){
        if(this.props.tab!==nextProps.tab){
            this.getData(nextProps.tab)
            return false
        }
        return true
    }
    getData(tab) {
        this.props.dispatch((dispatch) => {
            dispatch({
                type:"LIST_UPDATA"
            })
            axios.get(`https://cnodejs.org/api/v1/topics?tab=${tab}&limit=15&page=${this.state.page}`)
                .then((res) => {
                    dispatch({
                        type: "LIST_UPDATA_SUCC",
                        data: res
                    })
                }).catch((error) => {
                    dispatch({
                        type: "LIST_UPDATA_ERROR",
                        data: error
                    })
                })
        })
    }
    render() {
        let { loading, data } = this.props;
        return (
            <List
                loading={loading}
                dataSource={data.data}
                renderItem={item =>
                    (<List.Item actions={["回复" + item.reply_count, "访问" + item.visit_count]}>
                        <List.Item.Meta
                            avatar={<Avatar src={item.author.avatar_url} />}
                            title={<div>
                                <TxtTag data={item} />
                                <Link to={"/details/" + item.id} >{item.title}</Link>
                            </div>}
                            description={<p>
                                <Link to={"/user/" + item.author.loginname}>{item.author.loginname}</Link>
                                发表于：{item.create_at.split("T")[0]}
                            </p>}
                        />
                    </List.Item>)}>
            </List>
        )
    }
}
export default connect(state => state.list)(IndexList)