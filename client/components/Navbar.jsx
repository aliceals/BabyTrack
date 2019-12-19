import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import { logOff } from 'authenticare/client'

import { IfAuthenticated, IfNotAuthenticated } from './Authenticated'


const NavGroup = styled.div`
  float: right;
`

const NavLink = styled(Link)`
  margin-right: 30px;
`


export class Nav extends React.Component {

    render() {
        return (
            <React.Fragment>
                <NavGroup>
                    <IfAuthenticated>
                        <NavLink to='/signin' data-testid='logoff'
                            onClick={logOff}>Log off</NavLink>
                    </IfAuthenticated>
                    <IfNotAuthenticated>
                        <NavLink to='/register' data-testid='register'>Register</NavLink>
                        <NavLink to='/signin' data-testid='signin'>Sign in</NavLink>
                    </IfNotAuthenticated>
                </NavGroup>
                <h4>Baby Tracker</h4>
            </React.Fragment>
        )
    }
}

export default Nav