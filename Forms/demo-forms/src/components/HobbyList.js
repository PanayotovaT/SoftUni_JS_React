import React from 'react';
import './HobbyList.css';

class HobbyList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            hobbies: [],
            selectedHobbie: null
        }
        // this.onHobbyClick = this.onHobbyClick.bind(this);
    }


    componentDidMount() {
        fetch('http://localhost:3030/jsonstore/hobbies')
            .then(res => res.json())
            .then(result => {
                console.log(Object.values(result));
                this.setState({ hobbies: Object.values(result) });
            });
    }
    onHobbyClick(e) {
        console.log(e.target);
        this.setState({ selectedHobbie: e.target.textContent });
    }
    render() {

        console.log(this.props);
        return (
            <>
                <h2>{this.props.title}</h2>
                <ul>
                    {this.state.hobbies.map(x =>
                        <li
                            className={x.name == this.state.selectedHobbie ? 'selected-hobby' : ''}
                            key={x._id}
                            onClick={this.onHobbyClick.bind(this)}
                        >{x.name}
                        </li>)}
                </ul>
            </>
        );

    }
}

export default HobbyList;