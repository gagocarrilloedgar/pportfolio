import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import DashboardIcon from '@material-ui/icons/DashboardOutlined';
import Companies from '@material-ui/icons/BusinessRounded';
import PeopleIcon from '@material-ui/icons/PeopleAltOutlined';
import Learn from '@material-ui/icons/SchoolOutlined';
import Settings from '@material-ui/icons/SettingsApplicationsOutlined';
import { GiPodiumWinner } from "react-icons/gi"
import { FiTarget } from "react-icons/fi"
import { IconContext } from "react-icons";
import { CgWorkAlt } from "react-icons/cg"
import User from "@material-ui/icons/PersonOutline"


const IconProvider = (props) => {
  return (
    <IconContext.Provider value={{ size: "20px" }}>
      {props.children}
    </IconContext.Provider>
  )
}


export const mainListItems = (
  <div>
    <ListItem button onClick={() => window.location = "/app/profile"}>
      <ListItemIcon>
        <User />
      </ListItemIcon>
      <ListItemText primary="Perfil" />
    </ListItem>
    <ListItem button onClick={() => window.location = "/app"}>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <ListItem button onClick={() => window.location = "/app/competiciones"}>
      <ListItemIcon>
        <IconProvider>
          <GiPodiumWinner />
        </IconProvider>
      </ListItemIcon>
      <ListItemText primary="Competiciones" />
    </ListItem>
    <ListItem button onClick={() => window.location = "/app/companies"}>
      <ListItemIcon>
        <Companies />
      </ListItemIcon>
      <ListItemText primary="Compañias" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <PeopleIcon />
      </ListItemIcon>
      <ListItemText primary="Comunidad" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <IconProvider>
          <CgWorkAlt />
        </IconProvider>
      </ListItemIcon>
      <ListItemText primary="Ofertas" />
    </ListItem>
    <ListItem button onClick={() => window.location = "/app/academy"}>
      <ListItemIcon>
        <Learn />
      </ListItemIcon>
      <ListItemText primary="Acadademy" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <Settings />
      </ListItemIcon>
      <ListItemText primary="Configuración" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <IconProvider>
          <FiTarget />
        </IconProvider>
      </ListItemIcon>
      <ListItemText primary="Retos" />
    </ListItem>
  </div>
);



