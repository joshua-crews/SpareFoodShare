import "../components/Theme.css";
import "./Chats.css";
import ProfileFramework from "../components/ProfileFramework";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import {PureComponent} from "react";
import jwtDecode from "jwt-decode";

class Chats extends PureComponent {

    constructor(props) {
        super(props);
        this.state = {
            error: false,
            loading: false,
            chats: [],
            has_more: true,
            offset: 0,
            limit: 20
        };

        window.onscroll = () => {
            const {
                state: {error, loading, has_more}
            } = this;
            if (error || loading || !has_more) return;
            var changeHeight = document.documentElement.scrollHeight - document.documentElement.scrollTop;
            // TODO we need to look at getting the height of the footer instead of a hard coded 100 for now
            var difference = document.documentElement.clientHeight + 100;
            if (changeHeight <= difference) {
                this.loadChats();
            }
        }
    }

    componentDidMount() {
        this.loadChats()
        console.log(this.state.chats)
    }

    loadChats = () => {
        this.setState({loading: true, user: this.context.user}, async () => {
            const { offset, limit } = this.state;
            const user_id = (jwtDecode(JSON.parse(localStorage.getItem('authTokens')).access).user_id).toString();
            let response = await fetch(`http://127.0.0.1:8000/api/chats/?limit=${limit}&offset=${offset}&user_id=${user_id}`, {
                method:'GET'
            })
            let data = await response.json()
            if (response.status === 200) {
                const newChats = data.chats;
                const has_more = data.has_more;
                this.setState({
                    has_more: has_more,
                    loading: false,
                    chats: [...this.state.chats, ...newChats],
                    offset: offset + limit
                })
            } else {
                alert('Chat list service failed! Is it maybe down?')
            }
        })
    }

    render() {
        return (
            <div className="page-content">
                <Navbar/>
                <body className="chats-body">
                <ProfileFramework />
                <div className="chats-list">
                    <ul>
                        {this.state.chats && this.state.chats.map((chatObj) => (
                            <div key={chatObj.id} className="chats-entry">
                                <li>
                                    <h4>Item Name: {chatObj.item_name}</h4>
                                </li>
                            </div>
                            )
                        )}
                        {this.state.chats.length === 0 &&
                            <div className="no_chats_msg">
                                You currently have no active chats.
                            </div>
                        }
                    </ul>
                </div>
                </body>
                <Footer id="foot_id"/>
            </div>
        );
    }

}

export default Chats;