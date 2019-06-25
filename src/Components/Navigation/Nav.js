import * as React from "react";
import * as Scrivito from "scrivito";
import NavChild from "./NavChild";
import { Link as ScrollLink } from "react-scroll";



class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.registeredDropdowns = [];

    this.closeAll = this.closeAll.bind(this);
    this.closeDropdowns = this.closeDropdowns.bind(this);
    this.registerDropdown = this.registerDropdown.bind(this);
    this.unregisterDropdown = this.unregisterDropdown.bind(this);
    
    
  }

  
  

  closeAll() {
    this.props.closeExpanded();
    this.closeDropdowns();
  }

  closeDropdowns() {
    this.registeredDropdowns.forEach(dropdown => dropdown.closeDropdown());
  }

  registerDropdown(dropdownComponent) {
    this.registeredDropdowns.push(dropdownComponent);
  }

  unregisterDropdown(dropdownComponent) {
    this.registeredDropdowns = this.registeredDropdowns.filter(
      i => i !== dropdownComponent
    );
  }
  

  render() {
    return (
      <ul className="nav navbar-nav navbar-right">
      {/* <li className="nav-item nav-hover">
         <a target="_self" href="/#big_gallery" className="nav-link">arbeiten</a> 
        <ScrollLink
      to="nextSection"
      smooth
      duration={500}
      className="nav-link"
    >
      arbeiten
    </ScrollLink>
      </li> */}
<Scrivito.ChildListTag
        className="nav navbar-nav"
        parent={Scrivito.Obj.root()}
        renderChild={child => (
          <NavChild
            child={child}
            registerDropdown={this.registerDropdown}
            unregisterDropdown={this.unregisterDropdown}
            closeAll={this.closeAll}
            closeDropdowns={this.closeDropdowns}
            expanded={this.props.expanded}
          />
        )}
      />
      </ul>
      
    );
  }
}

export default Scrivito.connect(Nav);
