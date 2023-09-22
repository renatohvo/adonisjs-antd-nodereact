import React from 'react';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { ToastContainer } from "react-toastify";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Button, Checkbox, Input, Layout, Menu, Table, theme } from 'antd';
import type { ColumnsType } from 'antd/es/table';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';
import { People } from '../../models/people';
import { BASE_URL } from '../../util/request';
import Header from "../../components/Header";
import FooterAntd from '../FooterAntd';

const { Content, Sider } = Layout;

function LayoutAntd() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();

  const [peoples, setPeoples] = useState<People[]>([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState<React.Key[]>([]);
  const [collapsed, setCollapsed] = useState(false);

  const columns: ColumnsType<People> = [
    {
      title: 'Id',
      dataIndex: 'id',
      key: 'id',
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Favorito',
      dataIndex: 'favorite',
      key: 'favorite',
      render: (_, record) => (
        <Checkbox
          checked={record.favorite}
          onChange={() => toggleFavorite(record.key)}
        />
      )
    },
  ];

  // MARK/UNMARK FAVORITE
  const toggleFavorite = (key: React.Key) => {
    const updatedData = peoples.map((item) => {
      if (item.key === key) {
        axios.patch(`${BASE_URL}/personas/${key}/favorite/${!item.favorite}`)
          .then(response => {
            if (!item.favorite == true) {
              toast.info("Favoritado! ❤️ ");
            }
          })
          .catch((error) => {
            console.log(error.message);
          });
        return { ...item, favorite: !item.favorite };
      }
      return item;
    });
    setPeoples(updatedData);
    setSelectedRowKeys([...selectedRowKeys]);
  };

  // FIND BY NAME
  const handleInputChange = (e: { preventDefault: () => void; target: { value: any; }; }) => {
    e.preventDefault();
    const { value } = e.target;
    axios.get(`${BASE_URL}/personas/${value}`)
      .then(response => {
        const responsePeople: People[] = response.data.results || [];
        const dataPeople: People[] = [];
        responsePeople.map(people => {
          dataPeople.push({
            key: people.id,
            id: people.id,
            name: people.name,
            favorite: people.favorite,
          });
        })
        setPeoples(dataPeople);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // FIND BY FAVORITE
  function handleListFavoritesClick(favorite: number) {
    axios.get(`${BASE_URL}/personas/favorite/${favorite}`)
      .then(response => {
        const responsePeople: People[] = response.data.results || [];
        const dataPeople: People[] = [];
        responsePeople.map(people => {
          dataPeople.push({
            key: people.id,
            id: people.id,
            name: people.name,
            favorite: people.favorite,
          });
        })
        setPeoples(dataPeople);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  // FIND ALL
  function handleListAllClick() {
    axios.get(`${BASE_URL}/personas`)
      .then(response => {
        const responsePeople: People[] = response.data.results || [];
        const dataPeople: People[] = [];
        responsePeople.map(people => {
          dataPeople.push({
            key: people.id,
            id: people.id,
            name: people.name,
            favorite: people.favorite,
          });
        })
        setPeoples(dataPeople);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }

  useEffect(() => {
    axios.get(`${BASE_URL}/personas`)
      .then(response => {
        const responsePeople: People[] = response.data.results || [];
        const dataPeople: People[] = [];
        responsePeople.map(people => {
          dataPeople.push({
            key: people.id,
            id: people.id,
            name: people.name,
            favorite: people.favorite,
          });
        })
        setPeoples(dataPeople);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }, []);

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={['todos']}
          items={[
            {
              label: 'Todos',
              key: 'todos',
              icon: React.createElement(TeamOutlined),
              onClick: () => {
                handleListAllClick()
              }
            },
            {
              label: 'Favoritos',
              key: 'favoritos',
              icon: React.createElement(UserOutlined),
              onClick: () => {
                handleListFavoritesClick(1)
              }
            }
          ]}
        ></Menu>
      </Sider>
      <Layout style={{ minWidth: 250, minHeight: 360 }}>
        <ToastContainer />
        <Button
          type="text"
          icon={collapsed ? <MenuUnfoldOutlined rev={undefined} /> : <MenuFoldOutlined rev={undefined} />}
          onClick={() => setCollapsed(!collapsed)}
          style={{
            fontSize: '16px',
            width: 64,
            height: 64,
          }}
        />
        <Header />
        <Content style={{ margin: '24px 10px 12px' }}>
          <div style={{ marginBottom: 10 }}>
            <Input.Search placeholder="Buscar..." onChange={handleInputChange} ></Input.Search>
          </div>
          <div style={{ padding: 10, background: colorBgContainer }}>
            <Table columns={columns} dataSource={peoples} />
          </div>
        </Content>
        <FooterAntd />
      </Layout>
    </Layout>
  )
}

export default LayoutAntd;
