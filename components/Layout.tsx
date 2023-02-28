import React, { ReactNode } from 'react'
import Link from 'next/link'
import Head from 'next/head'

import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import styles from '../styles/global.module.css'
type Props = {
  children?: ReactNode
  title?: string
}

const Layout = ({ children, title = 'This is the default title' }: Props) => (
  <div className={"styles"}>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <header>
      <nav style={{margin:"0px"}}>
          <Box sx={{ flexGrow: 1 }}>
              <AppBar position="static">
                  <Toolbar>
                      <Button color="inherit"><Link href={"/"} style={{ textDecoration: 'none', color: "white" }}>Home</Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.1.1"} style={{ textDecoration: 'none', color: "white" }} > 14.1.1  </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.1.2"} style={{ textDecoration: 'none', color: "white" }} > 14.1.2  </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.1.3"} style={{ textDecoration: 'none', color: "white" }}> 14.1.3 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.2.1"} style={{ textDecoration: 'none', color: "white" }}> 14.2.1 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.2.2"} style={{ textDecoration: 'none', color: "white" }}> 14.2.2 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.2.3"} style={{ textDecoration: 'none', color: "white" }}> 14.2.3 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.2.4"} style={{ textDecoration: 'none', color: "white" }}> 14.2.4 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.2.5"} style={{ textDecoration: 'none', color: "white" }}> 14.2.5 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.2.6"} style={{ textDecoration: 'none', color: "white" }}> 14.2.6 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.2.7"} style={{ textDecoration: 'none', color: "white" }}> 14.2.7 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.2.8"} style={{ textDecoration: 'none', color: "white" }}> 14.2.8 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.2.9"} style={{ textDecoration: 'none', color: "white" }}> 14.2.9 </Link></Button>
                      <Button color="inherit"><Link href={"/seccion14/14.3.1"} style={{ textDecoration: 'none', color: "white" }}> 14.3.1 </Link></Button>
                  </Toolbar>
              </AppBar>
          </Box>

      </nav>
    </header>

      {children}
    <footer>
        <hr style={{margin:"0px"}}/>
      <div style={{margin: "0px", backgroundColor:"black", color:"white", textAlign:"center"}} >
          <h2 style={{margin:"0px"}}> Desarrollo de Software Seguro : GRUPO 4</h2>
      </div>
    </footer>
  </div>
)

export default Layout
