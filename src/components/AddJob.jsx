import React, { Component } from 'react';
import { connect } from 'react-redux';
import { jobRef } from '../firebase';

class AddJob extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title: ''
        }
    }

    addJob() {
        console.log('this', this);
        const { title } = this.state;
        const { email } = this.props.user;
        jobRef.push({ email, title });
    }

    render() {
        return (
            <div className="form-inline">
                <div className="form-group">
                    <input
                        type="text"
                        placeholder="Add a job"
                        className="form-control"
                        style={{ marginRight: '5px' }}
                        onChange={event => this.setState({ title: event.target.value })}
                    />
                    <button
                        className="btn btn-success"
                        type="button"
                        onClick={() => this.addJob()}
                    >
                        Submit
                    </button>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {
    const { user } = state;
    return {
        user
    }
}

export default connect(mapStateToProps, null)(AddJob);