import { Table } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { GoodsActions, GoodsSelectors } from "store/goodsSlice";
export const GoodsPage = () => {
    const goods = useSelector(GoodsSelectors.getGoods)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GoodsActions.fetchGoods())
    },[dispatch])
  const { Column } = Table

  return (
      <Table dataSource={goods}>
          <Column 
              title="Название" 
              dataIndex="label" 
              key="label"
              />
          <Column 
              title="Цена" 
              dataIndex="price" 
              key="price"
              />
      </Table>
  )
}