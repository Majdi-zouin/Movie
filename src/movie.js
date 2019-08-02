import React, { Component } from 'react';
import Item from './item' ;



const data = [
    
    {
        title: 'THE SILENCE',
        img: "https://www.ecranlarge.com/uploads/image/001/079/nnkcmerxkzfc9r4kuzmwdjuptch-301.jpg",
        rating: 5
    },
    {
        title: 'SPIDER-MAN',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3WN05PN5BS1iuujD7c8l02YutVBu1vz8tVtZXIaiN5vwOFyIV",
        rating: 4
    },
    {
        title: 'HOBBS & SHAW',
        img: "https://blusteel.fr/uploads/monthly_2019_02/398057003_HobbsShaw.jpg.1c35b137949a3d2fc73d69ca0db2dda1.jpg",
        rating: 5
    },
    {
        title: 'ESCAPE PLAN 2',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoIolv7V2gle5QO6XJBg-wER0dniKTEeM6QfPHNi6Otw28oQe_mw",
        rating: 2
    },
    {
        title: 'ANNABELLE',
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTMdo2Kp1wCo8dvQrS7t9c2p0qLJ4v_10dSrlDaby9iNVadHyvwvQ",
        rating: 5
    },
    {
        title: 'GODLESS',
        img: "https://www.ecranlarge.com/media/cache/1600x1200/uploads/image/001/049/godless-visuel-dvd-1049071.jpg",
        rating: 3
    },
    {
        title: 'CREED II ',
        img: "https://i2.wp.com/www.onrembobine.fr/wp-content/uploads/2018/11/Creed-2-poster.jpg?fit=580%2C860",
        rating: 2
    },
    {
        title: 'Kin :LE COMMENCEMENT',
        img: "http://fr.web.img6.acsta.net/pictures/18/07/16/16/19/2321171.jpg",
        rating: 1
    },
    {
        title: 'SHAFT',
        img: "https://is2-ssl.mzstatic.com/image/thumb/Video123/v4/3e/ec/52/3eec52d8-3f41-af43-167c-e0895f82d22a/pr_source.jpg/268x0w.jpg",
        rating: 2
    },
    {
        title: 'Others',
        img: "https://image.shutterstock.com/z/stock-photo-plus-white-icon-on-grey-background-flat-symbol-510865363.jpg",
        rating:0
    }
]


class Movie extends Component {
    constructor(props) {
        super(props);
        this.state = {
            filtred: data
        };

    }

    render() {

        return (<div className="movie">
            {
                this.state.filtred.filter(el=>el.title.toLowerCase().indexOf(this.props.keyword.toLowerCase())!==-1 && el.rating>=this.props.rating).map((el, i) => <Item key={i} item={el} />)
            }
        </div>
        )
    }
}
export default Movie;