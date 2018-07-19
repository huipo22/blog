function details(state = {
    loading: true,
    data: {
        data: {
            reply_count: 0,
            replies: [],
            author: {},
            create_at: ""
        }
    }
}, action) {
    switch (action.type) {
        case "DETAILS_UPDATA":
            return {
                loading: true,
                data: state.data
            };
        case "DETAILS_UPDATA_SUCC":
            return {
                loading: false,
                data: action.data.data
            };
        case "DETAILS_UPDATA_ERROR":
            return {
                loading: false,
                data: {
                    data: {
                        reply_count: 0,
                        replies: [],
                        author: {},
                        create_at: ""
                    }
                }
            }
        default:
            return state;
    }
}
export default details