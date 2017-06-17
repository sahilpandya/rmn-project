//CommentBox.js
import React, {Component} from 'react';
import axios from 'axios';
import basscss from 'basscss/css/basscss.min.css';
import style from '../static/style.scss';
import fontAwesome from '../static/font-awesome/css/font-awesome.min.css'

class CommentBox extends Component {
    constructor(props) {
        super(props);
        this.state = {data: []};
        this.loadCommentsFromServer = this.loadCommentsFromServer.bind(this);
        this.handleCommentSubmit = this.handleCommentSubmit.bind(this);
        this.setActiveTab = this.setActiveTab.bind(this);
    }

    loadCommentsFromServer() {
        const url = 'http://localhost:3001/api/comments';
        axios.get(url)
            .then(res => {
                this.setState({data: res.data});
            })
    }

    setActiveTab(event) {
        console.log(event.currentTarget);
    }

    handleCommentSubmit(comment) {
        //add POST request
    }

    componentDidMount() {
        this.loadCommentsFromServer();
        //setInterval(this.loadCommentsFromServer, this.props.pollInterval);
    }

    render() {
        console.log(this.state.data, 'comment data')
        const arr =
        {
            "tweets": [
                {
                    "name": "John",
                    "id": "@john",
                    "detail": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. ",
                    "userImg": "http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg",
                    "imgContentUrl": "",
                    "retweetCount": "",
                    "time": "1h",
                    "markGreen": true
                }
            ]
        };
        var item = arr.tweets[0];
        return (
            <div>
                <div className="main">
                    <div className="clearfix header bg-white menu">
                        <div className="col col-4 md-col-4 center left-menu">
                            <div className="col md-col-3 border-right item p2">
                                <i className="fa fa-leaf circle border p2" aria-hidden="true"></i>
                            </div>
                            <div className="col md-col-3 item p2">
                                <i className="fa fa-bell circle border p2" aria-hidden="true"></i>
                            </div>
                            <div className="col md-col-3 item p2">
                                <i className="fa fa-envelope circle border p2" aria-hidden="true"></i>
                            </div>
                            <div className="col md-col-3 item border-bottom p2">
                                <i className="fa fa-hashtag circle border p2" aria-hidden="true"></i>
                            </div>
                        </div>
                        <div className="col col-4 md-col-4 center">
                            <i className="fa fa-twitter" aria-hidden="true"></i>
                        </div>
                        <div className="col col-4 md-col-4 right-align form-item right-menu">
                            <div className="col md-col-10">
                                <form id="search-form" className="md-col-7 right">
                                    <div className="flexy-search">
                                        <input id="search" type="search" className="input search-field"
                                               id="search-field" placeholder="search"/>
                                        <label htmlFor="search-field" id="search-label">
                                            <i className="fa fa-search" aria-hidden="true"></i>
                                        </label>
                                    </div>
                                </form>
                            </div>
                            <div className="col md-col-2 item pr2">
                                <img className="circle"
                                     src="http://d2v52k3cl9vedd.cloudfront.net/assets/images/placeholder-square.svg"
                                     width="50" height="50"/>
                            </div>
                        </div>
                    </div>
                    <div className="max-width-3 mx-auto mb3">
                        <div className="clearfix bg-white center mt4 mb3 twitter-info-section" id="tabs-list">
                            <div className="col md-col-3 border-bottom active tab" data-name="tweets"
                                 onClick={this.setActiveTab}>
                                <p className="mb0">TWEETS</p>
                                <p className="bold mt0 h3">200</p>
                            </div>
                            <div className="col md-col-3 tab" data-name="photo" onClick={this.setActiveTab}>
                                <p className="mb0">PHOTO/VIDEOS</p>
                                <p className="bold mt0 h3">200</p>
                            </div>
                            <div className="col md-col-3 tab" data-name="following" onClick={this.setActiveTab}>
                                <p className="mb0">FOLLOWING</p>
                                <p className="bold mt0 h3">200</p>
                            </div>
                            <div className="col md-col-3 tab" data-name="followers" onClick={this.setActiveTab}>
                                <p className="mb0">FOLLOWERS</p>
                                <p className="bold mt0 h3">1M</p>
                            </div>
                        </div>
                        <div className="tweets-list" id="tweets-content">
                        </div>
                        <div className="clearfix bg-white center mt4 mb3 no-info-section p2 hide" id="no-content">
                            <div className="col md-col-12 h3">
                                No data available
                            </div>
                        </div>
                        <h2>Comments:</h2>
                        <div className="clearfix bg-white border-bottom tweets p2">
                            <div className="col md-col-2">
                                <a href="#">
                                    <img className="circle" src={item.userImg} width="60" height="60"/>
                                </a>
                            </div>
                            <div className="col md-col-10">
                                <div className="h3 inline name">
                                <span>{item.markGreen ?
                                    <i className="fa fa-retweet" aria-hidden="true"></i> : '' }</span> {item.name}
                                </div>
                                <div className="inline tweet-id">{item.id}</div>
                                <div className="inline right tweet-time-before">2m</div>
                                <p className="block clearfix tweet-detail">
                                    {item.imgContentUrl !== "" ?
                                        <a href="#"><img src={item.imgContentUrl} className="fit"/></a> : item.detail}
                                </p>
                                <p className="block clearfix tweet-share">
                                    <a href="#" className="inline mr1 text-decoration-none">
                                        <i className="fa fa-share" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="inline mr1 ml1 text-decoration-none">
                                        <i className="fa fa-star" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="inline mr1 ml1 text-decoration-none">
                                        <i className="fa fa-retweet" aria-hidden="true"></i>
                                        <span className="tweet-number">{item.retweetCount}</span>
                                    </a>
                                    <a href="#" className="inline mr1 ml1 text-decoration-none">
                                        <i className="fa fa-ellipsis-h" aria-hidden="true"></i>
                                    </a>
                                    <a href="#" className="inline right text-decoration-none">
                                        <i className="fa fa-expand" aria-hidden="true"></i>
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default CommentBox;
