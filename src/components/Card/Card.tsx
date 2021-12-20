import "antd/dist/antd.css";
import React from "react";
import { Card } from "antd";
import { Link } from "react-router-dom";

export interface CardType {
  id: string;
  label: string;
  price: number;
  img: string;
  description: string;
}

export const GoodCard: React.FC<CardType> = ({
  id,
  label,
  price,
  img,
  description,
}) => {
  return (
    <Link to={`/good/${id}`}>
      <Card
        hoverable
        style={{ width: 240, margin: "10px", minHeight: "420px" }}
      >
        <img src={img} alt="" style={{ width: "190px", height: "170px" }} />
        <p>{label} </p>
        {price + "$"}

        <p>{description} </p>
      </Card>
    </Link>
  );
};
