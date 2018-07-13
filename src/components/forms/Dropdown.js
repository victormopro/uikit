import React, {Component} from 'react';


class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ddListOpen: false,
            ddTitle:3
        }
        this.toggleView = this.toggleView.bind(this);
        this.itemChange = this.itemChange.bind(this);
    }

   

    toggleView() {
        this.setState((prevState) => {
            return{
                ddListOpen: !prevState.ddListOpen
            }
        })
    }

    itemChange(e) {
        this.setState({
            ddTitle: e.target.id,
            ddListOpen: false
        })
    }


    render() {
        const {ddListOpen, ddTitle} = this.state

        const listItem = [1,2,3,4,5,6,7,8,9]
        return(
            <div>
                

                <div className={'dd-wrapper ' + (ddListOpen? 'open' : '')}>
                    <div className='dd-wrapper__header'>
                        <div className='dd-wrapper__header-title'
                            onClick={this.toggleView}
                        >
                            {ddTitle} 
                            <i className='icon-ArrowDown'></i>
                            
                        </div>
                    </div>
                    
                        <ul className='dd-wrapper__list'>
                            {listItem.map((item) => {
                               return(
                                <li className={'dd-wrapper__list-item ' + (ddTitle === item ? 'selected' : '') } 
                                    key={item}
                                    id={item}
                                    onClick={this.itemChange}
                                >{item}</li>
                               ) 
                            })}
                        </ul>
                    
                </div>

            </div>
        )
    }
}

export default Dropdown;
