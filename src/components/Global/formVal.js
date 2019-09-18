// when using this component, set a component as a component prop called component
import React from 'react'
import { Button, Popup } from 'semantic-ui-react'


class FormVal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isOpen: true
        }
    }

    handleClose = () => {
        this.setState({ isOpen: false })
    }

    render() {
        return (
            <Popup
                trigger={this.props.comp}
                content={this.props.message || `Invalid email or password. Please input the correct credentials!`}
                on='click'
                open={this.state.isOpen}
                onClose={this.handleClose}
                position='center'
                style={{
                    color: 'white',
                    backgroundColor: '#c94940',
                    border: 'none',
                    maxWidth: '300px'
                }}
            />
        )
    }
}

export default FormVal