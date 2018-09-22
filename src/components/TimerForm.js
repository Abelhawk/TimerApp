import React, {Component} from 'react';

class TimerForm extends React.Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
        active: this.props.active || true
    };

    handleTitleChange = (e) => {
        this.setState({title: e.target.value});
    };
    handleProjectChange = (e) => {
        this.setState({project: e.target.value});
    };
    handleSubmit = () => {
        this.props.onFormSubmit({
            id: this.props.id,
            title: this.state.title,
            project: this.state.project,
            active: this.state.active
        });
    };

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className='form'>
                <div className='form-group'>
                    <label>Title: </label>
                    <input className='form-control'
                        type='text'
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                </div>
                <div className='form-group'>
                    <label>Project: </label>
                    <input className='form-control'
                        type='text'
                        value={this.state.project}
                        onChange={this.handleProjectChange}
                    />
                </div>
                <div className='btn btn-primary'
                    onClick={this.handleSubmit}
                >
                    {submitText}
                    </div>
                <div
                    className='btn btn-danger'
                    onClick={this.props.onFormClose}
                >
                    Cancel
                </div>
            </div>
        );
    }
}

export default TimerForm;