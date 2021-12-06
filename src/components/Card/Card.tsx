import "antd/dist/antd.css";
import React from "react";
import { Card } from "antd";

export interface CardType {
  id: number;
  category_type: string;
  label: string;
  price: number;
  img: string;
  discription: string;
}

export const GoodCard: React.FC<CardType> = ({ id, label, price, img, discription }) => {
  return (
    <Card
      hoverable
      style={{ width: 240, margin: "10px", backgroundColor: "#abcdef" }}
    >
      <img src={img} alt="" style={{ width: "190px", height: "110px" }} />
     <p>{label} </p> 
      {price + "$"}
     
    <p>{discription} </p> 
    </Card>
   

  );
};
