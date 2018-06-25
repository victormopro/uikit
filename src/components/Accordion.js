import React, { Component } from 'react';

class Accordion extends Component{
    constructor(props){
        super();
        this.state = {
            visiblity : true
        }

        this.visiblityToggle = this.visiblityToggle.bind(this);

    }
    
    visiblityToggle() {
        this.setState({
            visiblity : !this.state.visiblity
        });
    }

    render(){
        return(
            <div className="accordion">
                <div className="accordion__title">
                    <h4 className="">{this.props.title}</h4>
                    <button className="accordion__close" onClick={this.visiblityToggle} >
                        {this.state.visiblity ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </div>
                {
                    this.state.visiblity &&
                    <div className="accordion__description">
                        <p>{this.props.description}</p>
                    </div>
                }
            </div>
        )
    }
}


export default Accordion;
