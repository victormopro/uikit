import React, { Component } from 'react';

// class Accordion extends Component{
//     constructor(props){
//         super();
//         this.state = {
//             visiblity : true,
//             title : props.title,
//             description: props.description
//         }

//         this.visiblityToggle = this.visiblityToggle.bind(this);

//     }
    
//     visiblityToggle() {
//         this.setState({
//             visiblity : !this.state.visiblity
//         });
//     }

//     render(){
//         return(
//             <div className="accordion">
//                 <div className="accordion__title">
//                     <h4 className="">{this.state.title}</h4>
//                     <button className="accordion__close" onClick={this.visiblityToggle} >
//                         {this.state.visiblity ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
//                     </button>
//                 </div>
//                 {
//                     this.state.visiblity &&
//                     <div className="accordion__description">
//                         <p>{this.state.description}</p>
//                     </div>
//                 }
//             </div>
//         )
//     }
// }

class Accordion extends Component{
    constructor(props){
        super();
        this.state = {
            visiblity : false,
            title : props.title,
            children: props.children
        }

        this.visiblityToggle = this.visiblityToggle.bind(this);

    }
    
    visiblityToggle() {
        this.setState({
            visiblity : !this.state.visiblity,
            height: this.refs.inner.clientHeight
        });
    }

    render(){
        const { visiblity, title, children, height } = this.state;
        const currentHeight = visiblity ? height : 0
        return(
            <div className="accordion">
                <div className="accordion__heading" onClick={this.visiblityToggle}>
                    <h4 className="">{title}</h4>
                    <button className="accordion__close">
                        {visiblity ? <i className="fas fa-minus"></i> : <i className="fas fa-plus"></i>}
                    </button>
                </div>
                
                <div style={{ height: currentHeight + 'px' }} className="accordion__collapse">
                    <div className="accordion__body"  ref='inner'>{children}</div>
                </div>
            </div>
        )
    }
}


export default Accordion;
