import React, {Component} from 'react';

class TimerForm extends React.Component {
    state = {
        title: this.props.title || '',
        project: this.props.project || '',
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
        });
    };

    render() {
        const submitText = this.props.id ? 'Update' : 'Create';
        return (
            <div className='CardContainer'>
                <div className='field'>
                    <label>Title</label>
                    <input
                        type='text'
                        value={this.state.title}
                        onChange={this.handleTitleChange}
                    />
                </div>
                <div className='field'>
                    <label>Project</label>
                    <input
                        type='text'
                        value={this.state.project}
                        onChange={this.handleProjectChange}
                    />
                </div>
                <div
                    className='submit'
                    onClick={this.handleSubmit}
                >
                    {submitText}
                    <div
                        className='pause'
                        onClick={this.props.onFormClose}
                    >
                        Cancel
                    </div>
                </div>
            </div>
        );
    }
}

export default TimerForm;