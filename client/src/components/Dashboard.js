import React from 'react';

const password = 'thisisatest';

class Dashboard extends React.Component{
    state={
        password: '',
        authenticated: false
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })
    }

    submition = () => {
        if(this.state.password === password){
            this.setState({
                authenticated: true
            })
        } else{
            alert('fuck off')
        }
    }

    render(){
        return(
            <div>
            {!this.state.authenticated ? 
                <div>
                <input type="text" value={this.state.password} name='password' onChange={this.handleChange}/>
                <button onClick={this.submition}>submit</button>
            </div>
            :
            <div>
                no entering
            </div>
            }
            </div>
            
        )
    }
}

export default Dashboard;