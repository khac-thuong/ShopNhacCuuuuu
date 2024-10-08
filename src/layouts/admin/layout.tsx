import React, { useState } from "react";
import { HomeOutlined, UserOutlined, DollarOutlined } from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Layout, Menu, theme } from "antd";
import { Outlet, useNavigate } from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;

const siderStyle: React.CSSProperties = {
  overflow: "auto",
  height: "100vh",
  position: "fixed",
  insetInlineStart: 0,
  top: 0,
  bottom: 0,
  scrollbarWidth: "thin",
  scrollbarColor: "unset",
};

const items: MenuProps["items"] = [
  {
    key: "1",
    label: "Dashboard",
    icon: <HomeOutlined />,
  },
  {
    key: "2",
    label: "Profile",
    icon: <UserOutlined />,
  },
  {
    key: "3",
    label: "User",
    icon: <DollarOutlined />,
  },
  {
    key: "4",
    label: "Products",
    icon: <DollarOutlined />,
  },
];

const LayoutAdmin: React.FC = () => {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const [current, setCurrent] = useState("1");

  const onClick: MenuProps["onClick"] = (e) => {
    console.log("click ", e);
    setCurrent(e.key);
    switch (e.key) {
      case "1":
        navigate("/admin/dashboard");
        break;
      case "2":
        navigate("/admin/profile");
        break;
      case "3":
        navigate("/admin/user");
        break;
      case "4":
        navigate("/admin/product");
        break;
      default:
        break;
    }
  };
  return (
    <Layout hasSider>
      <Sider style={siderStyle}>
        <div className="demo-logo-vertical" />
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={[current]}
          items={items}
          onClick={onClick}
        />
      </Sider>
      <Layout style={{ marginInlineStart: 200 }}>
        <Header style={{ padding: 0, background: colorBgContainer }} />
        <Content style={{ margin: "24px 16px 0", overflow: "initial" }}>
          <Outlet />
        </Content>
        <Footer style={{ textAlign: "center" }}>
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </Layout>
  );
};

export default LayoutAdmin;
