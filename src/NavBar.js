import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useSelector } from 'react-redux';

export default function NavBar() {

    const quantity = useSelector((state) => state.cart.quantity);

    return (
        <div className="NavBar" style={{
            width: "100%",
            // overflow: "hidden",
            zIndex: "100",
        }}>
                <Box sx={{ flexGrow: 1 }}>
                    <AppBar position={'fixed'} style={{
                        backgroundColor: "#660a78"
                    }}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }} onClick={
                                () => {
                                    window.location.href = "/";
                                }
                            } style={{
                                cursor: "pointer",
                                fontFamily: "Monospace",
                            }}>
                                Chimoney Shop
                            </Typography>
                            <IconButton aria-label="cart" color='inherit'>
                                <Badge badgeContent={quantity} color="error">
                                        <ShoppingCartIcon onClick={
                                            () => {
                                                window.location.href = "/cart";
                                            }
                                        } />

                                </Badge>
                            </IconButton>
                        </Toolbar>
                    </AppBar>

                </Box>
        </div>

    );
}