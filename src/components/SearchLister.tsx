import React from "react";
import { Card, Button, Row, Col, Dropdown } from "react-bootstrap";
import {moviesData} from "../movies-list";


const SsearchLister = () =>{

    const Onchange = (event) =>{

const  [slectValue, setSelectValue] = React.useState("");
        const value = event.target.value;
setSelectValue(value);
    }

    return (
        <div style={
            {backgroundColor:"lightblue", height:"40px",justifyContent:"center"}}> 
            <Row>
                <Col>
                <select onChange={onchange} className="form-select">
        <option defaultValue disabled>
          Select Fruit
        </option>
        <option value="Apples">Apples</option>
        <option value="Grape">Grape</option>
        <option value="Bananas">Bananas</option>
        <option value="Blueberries">Blueberries</option>
        <option value="Melons">Melons</option>
      </select>
    </Col>
    </Row>
        </div>
    )
}
export {SsearchLister}