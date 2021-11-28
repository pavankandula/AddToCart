import React from 'react'
import Button from "@material-ui/core/Button";
import Badge from "@material-ui/core/Badge";
import { withStyles } from "@material-ui/core/styles";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -3,
      top: 10,
      border: `2px solid ${theme.palette.background.paper}`,
      padding: "0 4px",
    },
  }))(Badge);

export default function AddtoCart({add}) {
    return (
        <div>
      <Button variant="outlined" className="cart-btn">
        <StyledBadge badgeContent={add} color="secondary">
          <ShoppingCartIcon />
        </StyledBadge>
      </Button>
    </div>
    )
}
