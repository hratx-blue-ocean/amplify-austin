import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

const ConditionMenu = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const menuItems = ['popularity', 'recent']

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    console.log("This is the text from the close: ")
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        Sort By:
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        {menuItems.map((item, index) => {
          return (<MenuItem
            key={index}
            value={item}
            onClick={() => { props.sortBy(item) }}
          />
          )
        })}
      </Menu>
    </div>
  );
}

export default ConditionMenu;
