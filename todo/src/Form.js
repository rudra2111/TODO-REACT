import React, {Component} from 'react'



class Form extends Component{
    constructor(props){
        super(props);

        this.initialState = {
            Serial_Number : 1,
            taskName: ' ',
            Description: ' '
        };
        this.state = this.initialState;
        this.count = 1;
    }

    handleChange = event =>{
        const{name,value} = event.target;

        this.setState({
            [name]:value
        });
    }

    onFormSubmit = event =>{
        event.preventDefault();

        this.setState(prevState => ({
            Serial_Number: prevState.Serial_Number + this.count
        }));
    

        this.props.handleChange(this.state);
        this.setState({
            Serial_Number : this.state.Serial_Number +1,
            taskName : ' ',
            Description: ' '
        });
        this.count++;
    }

    render(){
        const{Serial_Number,taskName,Description} = this.state;
        return (
            <form onSubmit={this.onFormSubmit}>
                <label for = "taskName">Task</label>
                <input 
                    type = "text"
                    name = "taskName"
                    id = "taskName"
                    value = {taskName}
                    onChange = {this.handleChange} />
                <label for = "Description">Description</label>
                <input 
                    type = 'text'
                    name = "Description"
                    id = "Description"
                    value = {Description}
                    onChange= {this.handleChange}/>
                <button type = "submit">submit</button>
            </form>
        )
    }
}

export default Form;
