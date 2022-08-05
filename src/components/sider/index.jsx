import React from "react";
import { Card, Divider, Input, Affix } from "antd";
import "./index.less";

const { Search } = Input;

export default function Sider() {
  return (
    <div className="sider-container">
      <div className="search">
        <Search placeholder="搜索内容..." enterButton allowClear />
      </div>
      <div className="tags-wrapper">
        <Card bordered={false} hoverable>
          <Divider orientation="left">分类导航</Divider>
        </Card>
      </div>
      <div className="recent-article">
        <Affix offsetTop={86}>
          <Card bordered={false} hoverable>
            <Divider orientation="left">最近更新</Divider>
          </Card>
        </Affix>
      </div>
    </div>
  );
}
