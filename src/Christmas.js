import React, {PropTypes, Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import snow from './snow.jpg';

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
            <div class = "container" style={{alignItems:'center',justifyContent:"center"}}>
                <div class = "row" style = {{height:"50vh",alignItems:"center", justifyContent:"center"}}>
                    <h1>Time until Christmas</h1>
                    <div class = "row gap-5">
                        <div class = "col-sm shadow-lg bg-white">
                            <h1 style={{fontSize:"70px"}}>{this.state.days}</h1>
                            <h1 class ="display-1" style={{fontSize:"30px"}}>Days</h1>
                        </div>
                        <div class = "col-sm shadow-lg bg-white">
                            <h1 style={{fontSize:"70px"}}>{this.state.hours}</h1>
                            <h1 class ="display-1" style={{fontSize:"30px"}}>Hours</h1>
                        </div>
                        <div class = "col-sm shadow-lg bg-white">
                            <h1 style={{fontSize:"70px"}}>{this.state.minutes}</h1>
                            <h1 class ="display-1" style={{fontSize:"30px"}}>Minutes</h1>
                        </div>
                        <div class = "col-sm shadow-lg bg-white">
                            <h1 style={{fontSize:"70px"}}>{this.state.seconds}</h1>
                            <h1 class ="display-1" style={{fontSize:"30px"}}>Seconds</h1>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Christmas;