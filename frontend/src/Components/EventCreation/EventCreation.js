import React from 'react';
import ReactDOM from 'react-dom';
import FileBase from 'react-file-base64';
import './EventCreation.scss'

class EventCreation extends React.Component {
    constructor(props)
    {
        super(props);
        this.state={
            eventName :'',
            description : '',
            img : '',
            date : '',
            time : ''
        }
    }
    
    //whenever form is submitted
    submitForm=(e)=>{
        
        console.log(" Submitting");
        this.props.postItem(this.state.eventName, this.state.description, this.state.img, this.state.time , this.state.date);
    }
    //whenever fields are updated
    change=(oneElement,property)=>{
        console.log("In update ="+oneElement.target.value + "Property="+property);
        //const property=oneElement.target.name;
        this.setState({[property] :oneElement.target.value})
        
    }
    render() { 
        const close =
        <svg xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 0 24 24" width="24px" fill="white"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>
        return <div>
            <div id="form">
            <button className="closeAdd" onClick={this.closeAdd}>{close}</button>
                    <h1 className="star"> Create an Event</h1>
                    <div className="formElement">
                        <label> Event Name</label>
                        <input type="text" name="eventName" id="eventName" onChange={(event)=>this.change(event, "eventName")} required/>
                    </div>
                    <div className="formElement">
                        <label> Description</label>
                        <input type="text" name="desc" id="desc" onChange={(e)=>this.change(e,"description")} required/>
                    </div>
                    <div className="formElement">
                        <label> Date </label>
                        <input type="date" name="date" id="date" onChange={(e)=>this.change(e,"date")} required/>
                    </div>
                    <div className="formElement">
                        <label> Time</label>
                        <input type="time" name="time" id="time" onChange={(e)=>this.change(e,"time")} required/>
                    </div>                 
                    <div className="formElement right">
                        <label> Image</label>
                        <input type="file" name="img" id="img" onChange={(e)=>this.change(e,"img")}  required/>
                        {/* <FileBase type="file" multiple="false" onChange={(e)=>this.change(e,"img")}/> */}
                    </div>    
                        
                    {/* <label> Time</label>
                    <input type="time" name="time" id="time" onChange={(e)=>this.change(e,"time")} required/> */}

                    <button id="save" onClick={this.submitForm}>Add</button>
                    
                
                
            </div>
        </div>
    }
}
 
export default EventCreation;

