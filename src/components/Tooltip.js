import React, {Component} from 'react';

class Tooltip extends Component {
    constructor(props) {
        super(props);
        this.state = {
            placement: props.placement,
            content: props.content,
            left: props.left,
            top: props.top,
            width: props.width,
            height: props.height,
            isVisible: props.visible,
            children: props.children
        }
        this.mouseEnter = this.mouseEnter.bind(this);
        this.mouseLeave = this.mouseLeave.bind(this);
    }

    // hover events
    mouseEnter() {
        this.setState({
            isVisible: true
        })
    }
    mouseLeave() {
        this.setState({
            isVisible: false
        })
    }


    render() {
        const { 
            placement, 
            content, 
            left, 
            top, 
            width, 
            height, 
            isVisible, 
            children 
        } = this.state;

        // inline style
        let position = { left: left, top: top };
        let size = { width: width, height: height };

        return(

            <div 
                className={ isVisible ? 'tooltip-view' : 'tooltip-hide' } 
                onMouseEnter={ this.mouseEnter }
                onMouseLeave={ this.mouseLeave }
            >

                <div style={ position } className={ 'tooltip ' + placement }>
                    <div className='tooltip__arrow'></div>
                    <div style={ size } className='tooltip__content'>{ content }</div>
                </div>

                {children}

            </div>

        )
    }
}

export default Tooltip