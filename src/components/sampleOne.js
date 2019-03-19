import React, { Component } from 'react';

class SampleOne extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            message: 'Hello',
            people: [{
                id: '1',
                name: 'Tim'
            },
            {
                id: '2',
                name: 'Berlin'
            },
            {
                id: '3',
                name: 'Marshall'
            }]
        }
    }

    UpdateResults (event) {
        this.setState({value: event.target.value})
    }

    render(){
        const people = this.state.people.map((person,key) => 
            <p key={ person.id }> {person.name }</p>
        )

        return (
            <div>
                <h1>{ this.state.message }</h1>
                { people }

                <form>
                    <input type="text"
                    name="searchNames"
                    onChange={this.UpdateResults} />
                </form>
            </div>
        )

    }
}

export default SampleOne;