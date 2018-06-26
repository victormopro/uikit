import React, { Component } from 'react';

class Accordion extends Component{
    constructor(props){
        super();
        this.state = {
            visiblity : true,
            title : props.title,
            description: props.description
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
                    <h4 className="">{this.state.title}</h4>
                    <button className="accordion__close" onClick={this.visiblityToggle} >
                        {this.state.visiblity ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </div>
                {
                    this.state.visiblity &&
                    <div className="accordion__description">
                        <p>{this.state.description}</p>
                    </div>
                }
            </div>
        )
    }
}


export default Accordion;
