import {Component} from 'react';

export default class Slideshow extends Component {
    images = ["paris", "rio", "rome", "lisbonne"];
    
    state = { 
        cityName: 'paris',
        cityImageSrc: 'images/paris.jpg',
        imageIndex: 1
    }

    componentDidMount() {
        this.animation1();
    }

    animation1() {
        setInterval(() => {
            
            this.setState({ 
                cityName: this.images[this.state.imageIndex],
                cityImageSrc: "images/" + this.images[this.state.imageIndex] + ".jpg",
            });

            if (this.state.imageIndex === this.images.length - 1) {
                this.setState({ imageIndex: 0})
            } else {
                this.setState({ imageIndex: this.state.imageIndex + 1})
            }

        }, 3000)
    }

    render() {
        const { cityName, cityImageSrc} = this.state;
        return(
            <>
                <h3>{ cityName }</h3>
                <img src={cityImageSrc} alt={cityName} width="400" />
            </>
        )
    }

}