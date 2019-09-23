import React from 'react';
import { format } from 'url';
 
class CharacterCard extends React.Component {
 
    state = {
        active: false
    }
 
    activate = () => {
        this.setState({
            active:true
        });
        if (this.state.active === false)
        this.props.activationHandler(this.props.value);
    }

    render() {
        let activeClass = this.state.active ? 'activeCard' : '';
        let className = `card ${activeClass}`
        return (
            <div className={className} onClick={this.activate}>
                {this.props.value}
            </div>
        )
    }
}
 
export default CharacterCard;
