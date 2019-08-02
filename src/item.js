import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';


class Item extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    render() {
        return (
            <div className="carte">
                <div className="rat">
                    <StarRatingComponent
                        starCount={5}
                        value={this.props.item.rating}
                    />
                </div>
                <div>
                    <img alt="" src={this.props.item.img}></img>
                    <h3>{this.props.item.title}</h3>
                </div>
                 </div>);
    }
}

export default Item;