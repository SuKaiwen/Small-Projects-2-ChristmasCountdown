import React, {PropTypes, Component} from 'react';

class Christmas extends Component {
    constructor(props){
        super(props);

        this.state = {
            time: new Date("25 December 2021").getTime() - new Date().getTime(),
            days: [],
            hours: [],
            min: [],
            sec: [],
        };
    };

    componentDidMount(){
        this.interval = setInterval(() => this.countDown(), 1000);
    }

    countDown(){
        let newTime = this.state.time - 1000;
        let days = Math.floor(newTime/(1000 * 60 * 60 * 24));
        let hours = Math.floor((this.state.time - days*1000*60*60*24)/(1000*60*60));
        let minutes = Math.floor((this.state.time - days*1000*60*60*24 - hours*1000*60*60)/(60*1000));
        let seconds = Math.floor((this.state.time - days*1000*60*60*24 - hours*1000*60*60 - minutes*60*1000)/1000);
        this.setState({
            time: newTime,
            days: days,
            hours: hours,
            minutes: minutes,
            seconds: seconds,
        });
    }

    render(){
        return (
            <div>
                <h1>Days: {this.state.days}</h1>
                <h1>Hours: {this.state.hours}</h1>
                <h1>Minutes: {this.state.minutes}</h1>
                <h1>Seconds: {this.state.seconds}</h1>
            </div>
        );
    }
}

export default Christmas;