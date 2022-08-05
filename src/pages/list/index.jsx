import React, { useEffect } from 'react'
import { List } from 'antd'
import {
  CalendarOutlined,
  EyeOutlined,
  HeartOutlined
} from '@ant-design/icons'
import { useSelector, useDispatch } from 'react-redux'
import { getHomeList } from '../../redux/actionCreators'
import './index.less'

export default function ListPage(props) {

  const dispatch = useDispatch()

  const articleList = useSelector(state => state.articleReducer.articleList)

  useEffect(() => {
    dispatch(getHomeList())
  }, [dispatch])


  const IconText = ({ type, text }) => <span>{type}{text}</span>

  return (
    <div className="list">
      <List
        itemLayout="vertical"
        size="large"
        dataSource={articleList}
        renderItem={ item => (
          <List.Item
            style={{cursor:'pointer'}}
            key={item.key}
            onClick={() => props.history.push(`/ui/detail/${item.key}`)}
            actions={
            [ 
              <IconText 
                type={<CalendarOutlined className="move-icon" />} 
                text={`${item.publish}`} 
              />,
              <IconText 
                type={<HeartOutlined className="move-icon" />} 
                text={`${item.like}`} 
              />,
              <IconText 
                type={<EyeOutlined className="move-icon" />} 
                text={`${item.look} 次预览`} 
              />
            ]}
          >
            <List.Item.Meta
              title={item.title}
              description={item.introduce}
            />
          </List.Item>
        )}
      />
    </div>
  )
}
