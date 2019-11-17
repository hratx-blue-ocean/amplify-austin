import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import PlaylistAddIcon from "@material-ui/icons/PlaylistAdd";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5"
  }
})(props => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center"
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center"
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles(theme => ({
  root: {
    "&:focus": {
      backgroundColor: theme.palette.primary.main,
      "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
        color: theme.palette.common.white
      }
    }
  }
}))(MenuItem);

const Sort = props => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  // sets the setAncharEl to the selection chosen by user, and
  //  sets the condition to the type select by the User
  const handleClick = event => {
    setAnchorEl(event.currentTarget);
    console.log("This is event: ", event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="customized-menu"
        aria-haspopup="true"
        variant="contained"
        color="primary"
        onClick={handleClick}
      >
        Sort By:
      </Button>
      <StyledMenu
        id="customized-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <StyledMenuItem>
          <ListItemIcon>
            <RecordVoiceOverIcon fontSize="small" />
          </ListItemIcon>
          Popularity
        </StyledMenuItem>
        <StyledMenuItem>
          <ListItemIcon>
            <PlaylistAddIcon fontSize="small" />
          </ListItemIcon>
          Recent
        </StyledMenuItem>
      </StyledMenu>
    </div>
  );
};

export default Sort;
