import { Input, Select, Slider, Table } from 'antd'
import { useSelector, useDispatch } from "react-redux";
import { useEffect } from 'react';
import { GoodsActions, GoodsSelectors } from "store/goodsSlice";
import { CategoriesSelectors } from 'store/сategoriesSlice';
export const GoodsPage = () => {

  
    const goods = useSelector(GoodsSelectors.getGoods)
    const categories = useSelector(CategoriesSelectors.getCategories)
    const dispatch = useDispatch()
    useEffect(() => {
      dispatch(GoodsActions.fetchGoods())
    },[dispatch])
  const { Column } = Table

  return (
    <> <div style={{ margin: '20px 0 0 20px' }}>

    <div  >
        Цена:
        <Slider 
        range 
        defaultValue={[0, 1000]} 
       
        style={{ width: '200px' }} 
    
        />
    </div>
    <Select
     
    mode="multiple"
    allowClear
    style={{ width: '200px' }}
    placeholder="Выберите категорию"
   
    >
     
    </Select>
</div><Table  style={{ margin: '20px 0 0 20px' }}
dataSource={goods}>
        <Column
          title="Название"
          dataIndex="label"
          key="label" />
        <Column
          title="Цена"
          dataIndex="price"
          key="price" />

      </Table></>

      
  )
}


