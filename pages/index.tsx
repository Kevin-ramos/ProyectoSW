import Link from 'next/link'
import Layout from '../components/Layout'
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import * as React from 'react';
import Button from "@mui/material/Button";
import {Stack} from "@mui/material";

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">

      <div style={{ backgroundColor: "black", verticalAlign:"middle", textAlign:"center", alignItems:"center"}}>
          <div >
              <h1 style={{color: "white", margin:"0px"}}> Sistema de Gestión de la Seguridad  de la Información: ISO 27002</h1>
              <h4 style={{color: "white"}}> Basado en el control 14: Adquisición, desarrollo y mantenimiento de sistemas de información</h4>
              <Button variant="contained" style={{margin:"1px"}} > Empezar</Button>
              <Button variant="contained" color="error" style={{margin:"1px"}}> Empezar</Button>
          </div>



      </div>


  </Layout>
)

export default IndexPage
