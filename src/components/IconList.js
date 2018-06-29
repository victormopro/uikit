import React, { Component } from 'react';

class IconList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      filteredIcons: this.props.icons
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.filterIcons = this.filterIcons.bind(this);
  }

  onTextChange(e) {
    this.setState(
      { searchText: e.target.value },
      () => this.filterIcons(this.state.searchText)
    );
  }

  renderIcons() {
    return this.state.filteredIcons.map(icon => {
      return (
        <div key={icon.name} className="icon__wrap">
          <i className={icon.name} />
          <p className="icon__text">{icon.name}</p>
        </div>
      );
    });
  }

  filterIcons(text) {
    this.setState({
      filteredIcons: this.props.icons.filter(icon => {
        return icon.name.toLowerCase().indexOf(text.toLowerCase()) !== -1;
      })
    });
  }

  render() {
    return (
      <React.Fragment>
        <div className="input-field input-lg has-icon">
          <input type="text" placeholder="Search" value={this.state.searchText} onChange={this.onTextChange} />
          <i className="input__icon gradient-text icon-Search" />
        </div>
        <div className="mopro-icons mt-25">
          { this.renderIcons() }
        </div>
      </React.Fragment>
    );
  }
}

export default IconList;
