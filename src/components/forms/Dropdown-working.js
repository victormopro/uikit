import React, {Component} from 'react';

class Dropdown extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ddListOpen: false,
            ddTitle: this.props.title,
            listItem: this.props.listItem
        }
        this.toggleView = this.toggleView.bind(this);
        this.itemChange = this.itemChange.bind(this);
        this.getListItem = this.getListItem.bind(this);
    }

    toggleView() {
        this.setState((prevState) => {
            return{
                ddListOpen: !prevState.ddListOpen
            }
        })
    }

    getListItem() {
        let listItem = this.state.listItem
        if(listItem) {
            return(
                listItem
            )
        } else {
            return(
                listItem = ['List One', 'List Two', 'List Three', 'List Four', 'List Five']
            )
        }
    }

    itemChange(e) {
        this.setState({
            ddTitle: e.target.id,
            ddListOpen: false
        })
        console.log(this.state.ddTitle);
    }

    render() {

        const {
            ddListOpen, 
            ddTitle, 
            listItem = this.getListItem()
        } = this.state

        return(
                <div className={'dd-wrapper ' + (ddListOpen? 'open' : '')}>

                    <DropdownHeader toggleView= {this.toggleView} title= {ddTitle} />
                    
                    <DropdownList listItem= {listItem} itemChange= {this.itemChange}  />
                    
                </div>
        )
    }
}

class DropdownHeader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            ddTitle: this.props.title
        }
        this.toggleView = this.props.toggleView.bind(this);
    }

    render() {
        const {ddTitle} = this.state;
        return(
            <div className='dd-wrapper__header' onClick={this.toggleView}>
                <div className='dd-wrapper__header-title'>
                    {ddTitle} 
                    <i className='icon-ArrowDown'></i>
                </div>
            </div>
        )
    }
}

class DropdownList extends Component{
    constructor(props) {
        super(props);
        this.state = {
            listItem: this.props.listItem,
            ddTitle: undefined
        }
        this.itemChange = this.props.itemChange.bind(this);
    }

    itemChange(e) {
        this.setState( () => {
            return{
                ddTitle: e.target.id
            }
        })
    }

    render() {
        const {listItem, ddTitle} = this.state;
        return(
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
        )
    }
}


export default Dropdown;
