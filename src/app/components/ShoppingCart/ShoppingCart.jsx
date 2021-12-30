import { useEffect } from 'react'
import useAuth from 'app/hooks/useAuth'
import { styled, useTheme } from '@mui/system'
import { useNavigate } from 'react-router-dom'
import useSettings from 'app/hooks/useSettings'
import React, { Fragment, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { themeShadows } from '../MatxTheme/themeColors'
import { sideNavWidth, topBarHeight } from 'app/utils/constant'
import { getCartList } from 'app/redux/actions/EcommerceActions'
import { Drawer, ThemeProvider } from '@mui/material'

let cartListLoaded = false

function ShoppingCart({ container }) {
    const [totalCost, setTotalCost] = useState(0)
    const [panelOpen, setPanelOpen] = useState(false)
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const { user } = useAuth()
    const { cartList } = useSelector((state) => state.ecommerce)
    const { settings } = useSettings()

    if (!cartListLoaded) {
        dispatch(getCartList(user.id))
        cartListLoaded = true
    }

    const handleDrawerToggle = () => {
        setPanelOpen(!panelOpen)
    }

    useEffect(() => {
        let total = 0

        cartList.forEach((product) => {
            total += product.price * product.amount
        })
        setTotalCost(total)
    }, [cartList])

    return (
        <Fragment>
            {/* <IconButton onClick={handleDrawerToggle}>
                <Badge color="secondary" badgeContent={cartList.length}>
                    <Icon sx={{ color: textColor }}>shopping_cart</Icon>
                </Badge>
            </IconButton> */}

            <ThemeProvider theme={settings.themes[settings.activeTheme]}>
                <Drawer
                    container={container}
                    variant="temporary"
                    anchor={'right'}
                    open={panelOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                >
                    {/* <MiniCart>
                        <CartBox>
                            <Icon color="primary">shopping_cart</Icon>
                            <h5>Cart</h5>
                        </CartBox>

                        <Box flexGrow={1} overflow="auto">
                            {cartList.map((product) => (
                                <ProductBox key={product.id}>
                                    <Box
                                        mr="4px"
                                        display="flex"
                                        flexDirection="column"
                                    >
                                        <StyledIconButton
                                            size="small"
                                            onClick={() =>
                                                dispatch(
                                                    updateCartAmount(
                                                        user.id,
                                                        product.id,
                                                        product.amount + 1
                                                    )
                                                )
                                            }
                                        >
                                            <Icon sx={{ cursor: 'pinter' }}>
                                                keyboard_arrow_up
                                            </Icon>
                                        </StyledIconButton>
                                        <StyledIconButton
                                            disabled={!(product.amount - 1)}
                                            size="small"
                                            onClick={() =>
                                                dispatch(
                                                    updateCartAmount(
                                                        user.id,
                                                        product.id,
                                                        product.amount - 1
                                                    )
                                                )
                                            }
                                        >
                                            <Icon id={!(product.amount - 1) && 'disable'}>
                                                keyboard_arrow_down
                                            </Icon>
                                        </StyledIconButton>
                                    </Box>
                                    <Box mr={1}>
                                        <IMG
                                            src={product.imgUrl}
                                            alt={product.title}
                                        />
                                    </Box>
                                    <ProductDetails>
                                        <H6>{product.title}</H6>
                                        <Small sx={{ color: secondary }}>
                                            ${product.price} x {product.amount}
                                        </Small>
                                    </ProductDetails>
                                    <StyledIconButton
                                        size="small"
                                        onClick={() =>
                                            dispatch(
                                                deleteProductFromCart(
                                                    user.userId,
                                                    product.id
                                                )
                                            )
                                        }
                                    >
                                        <Icon fontSize="small">clear</Icon>
                                    </StyledIconButton>
                                </ProductBox>
                            ))}
                        </Box>

                        <Button
                            sx={{ width: '100%', borderRadius: 0 }}
                            variant="contained"
                            color="primary"
                            onClick={handleCheckoutClick}
                        >
                            Checkout (${totalCost.toFixed(2)})
                        </Button>
                    </MiniCart> */}
                </Drawer>
            </ThemeProvider>
        </Fragment>
    )
}

export default ShoppingCart
