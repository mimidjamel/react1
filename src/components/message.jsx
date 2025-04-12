import React, {Component} from "react";
class Message extends Component
{
    constructor()
    {
        super()
        this.state={
            color:'red',
            fontSize:'16px'
                }

    }

    changer1=()=>{
        this.setState({
color:'blue',
fontSize:'20px'

        })
        
    }
    changer2=()=>{
        this.setState({
color:'red',
fontSize:'16px'

        })
}
render(){
    const {color,fontSize}=this.state;

    
return(
<p style={{color: color, fontSize:fontSize,transition:'all 0.3s eas'}}
/*  */
onMouseEnter={this.changer1}
onMouseLeave={this.changer2}>changer mon style en survolant la souris</p>
)
}
}
export default Message