import React from "react";
import { Link } from 'react-router-dom';



class HumanCard extends React.Component {
  
  imgUrl = () => {
    if(this.props.user.zombie === false && this.props.user.img_url === null) {return 'https://image.flaticon.com/icons/svg/145/145859.svg'}
    else {return this.props.user.img_url}
  }

    render(){
        return (
            <div className='humanCard' style={{ float: 'center'}}>
                <div className="ui column">
                    <div className="ui card">
                        <div className="image">
                            <img src={this.imgUrl()} alt="profile"/>
                        </div>
                        <div className="content">
                            <div className="header">
                                Name: {this.props.user.username}<br/><br/>
                            </div>
                            <Link to='/quiz'>Quiz</Link>
                        <div className="meta text-wrap">
                            <small>STATUS: Alive, and honestly, thriving!</small>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )

    }
}

export default HumanCard;