import React from 'react';
import Alert from 'react-s-alert';

class MyCustomContentTemplate extends React.Component {
    constructor(props) {
        super(props);
    }

    handleConfirm() {
        console.log('Customer confirmation!');
        Alert.close(this.props.id);
    }
    render() {
        return (
            <div className={this.props.classNames} id={this.props.id} style={this.props.styles}>
                <div className='s-alert-box-inner'>
                    {this.props.message}
                </div>
                <p>Загружено постов: {this.props.customFields.count}</p>
                
                <span className='s-alert-close' onClick={this.props.handleClose}></span>
            </div>
        )
    }
}

export default MyCustomContentTemplate;