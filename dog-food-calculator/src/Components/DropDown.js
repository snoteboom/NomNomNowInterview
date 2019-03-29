import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import FormField from '../Elements/FormField'
import DropDownList from '../Elements/DropDownList'
class DropDown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open: false
        };
    }

    openDropDown(){
        this.setState({
            open: !this.state.open
        })
    }

    selectItem(food){
        this.props.select(food)
        this.setState({
            open: false
        })
    }
    componentDidMount() {
        document.addEventListener('click', this.handleClickOutside, true);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.handleClickOutside, true);
    }

    handleClickOutside = event => {
        const domNode = ReactDOM.findDOMNode(this);

        if (!domNode || !domNode.contains(event.target)) {
            this.setState({
                open: false
            });
        }
    }
    render() {
        return (
            <div className="dropdown-container">
                <FormField selectable={true}
                           placeholder="Select a dog food"
                           select={this.openDropDown.bind(this)}
                           title={this.props.title}
                           selected={this.props.selected? this.props.selected.name : null}/>
                {this.state.open? <DropDownList list={this.props.list}
                                                hasSubCategory={this.props.hasSubCategory}
                                                selectItem={this.selectItem.bind(this)}
                    /> : null}
            </div>
        );
    }
}
export default DropDown;