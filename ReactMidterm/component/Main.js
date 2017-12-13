
import React, {Component} from "react";
import PropTypes from "prop-types";
import Heading from "./Heading"
import List from "./List"
import ItemDetail from "./ItemDetail"

export default class Main extends Component{
    render(){
        return (
            <div className="row">
                <Heading/>
                <div>
                    <List contacts={this.props.contactList} selectContact={this.props.selectContact}></List>
                    <ItemDetail contact={this.props.contact}></ItemDetail>
                </div>
            </div>
        );
    }
}

Main.propTypes = {
    contactList: PropTypes.array.isRequired,
    selectContact:PropTypes.func.isRequired,
    contact: PropTypes.object
}
