import React from "react";
import { Route } from "react-router-dom";

import "./LayoutAdmin.scss";
import { Layout } from "antd";

export default function LayoutAdmin(props) {
  const { routes } = props;
  const { Header, Content, Footer } = Layout;

  return (
    <Layout>
      <h2>Menu Sider Admin</h2>
      <Layout>
        <Header>Cabecera...</Header>
        <Content>
          <LoadRouters routes={routes} />
        </Content>
        <Footer>Diego Gonzalez 2020</Footer>
      </Layout>
    </Layout>
  );
}

function LoadRouters({ routes }) {
  return routes.map((route, index) => (
    <Route
      key={index}
      path={route.path}
      exact={route.exact}
      component={route.component}
    />
  ));
}
