import React from 'react';
import { bool } from 'prop-types';
import { StyledMenu } from './Menu.styled';
import { Link } from 'react-router-dom';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { MdAdd, MdRemove } from "react-icons/md";
import Dropdown from 'react-bootstrap/Dropdown'
import Acordeao from '../Acordeao';

const Menu = ({ open }) => {
  return (
    <StyledMenu open={open}>
       <div className="mb-8">
  <Acordeao></Acordeao>

 </div>
    </StyledMenu>
  )
}
Menu.propTypes = {
  open: bool.isRequired,
}
export default Menu;