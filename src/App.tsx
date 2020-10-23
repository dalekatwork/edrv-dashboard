import React from "react";
import { Layout } from "antd";
import "./App.css";

const { Header, Content, Footer } = Layout;

function App({ content }: { content: JSX.Element }) {
  return (
    <Layout className="layout">
      <Header>
        <div className="logo" />
      </Header>
      <Content style={{ padding: "32px 50px", height: "100%" }}>
        <div className="site-layout-content">{content}</div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
        Dashboard ©2020 Created by eDrv
      </Footer>
    </Layout>
  );
}

export default App;
