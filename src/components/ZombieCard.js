import React from "react";
import { Link } from 'react-router-dom';

class ZombieCard extends React.Component {

  imgUrl = () => {
    if (this.props.user.zombie === true && this.props.user.img_url === null) {return `https://image.flaticon.com/icons/png/512/1141/1141441.png`}
    else {return this.props.user.img_url}
  }

  render(){
      return (
            <div className='ZombieCard'>
                <h1>{this.props.user.username}</h1>
                <div className="ui column">
                    <div className="ui card">
                        <div className="image">
                            <img src={this.imgUrl()} alt="profile" className="myFilter" />
                            </div>
                            <div className="content">
                                <div className="header">
                                    Name: {this.props.user.username}<br/><br/>
                                </div>
                                <Link to='/quiz'>Quiz</Link>
                            <div className="meta text-wrap">
                                <small>STATUS: You're a zombie</small>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }  
}


export default ZombieCard;