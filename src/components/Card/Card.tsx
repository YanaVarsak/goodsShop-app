import "antd/dist/antd.css";
import React from "react";
import { Card } from "antd";

export interface CardType {
  id: string;
  label: string;
  price: number;
  img: string;
  description: string;
}

export const GoodCard: React.FC<CardType> = ({ id, label, price, img, description }) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: "10px", backgroundColor: "#abcdef" }}
    >
      <img src={img} alt="" style={{ width: "190px", height: "110px" }} />
     <p>{label} </p> 
      {price + "$"}
     
    <p>{description} </p> 
    </Card>
   

  );
};
