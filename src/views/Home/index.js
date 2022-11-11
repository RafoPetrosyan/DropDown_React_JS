import React from "react";
import {v4 as uniqueId} from "uuid";
import {Dropdown, Space} from "antd";
import {DownOutlined} from "@ant-design/icons";
import {Link} from "react-router-dom";
import "./style.css";

const data = [
    {
        id: 1,
        parent_id: null,
        ordering: 1,
        icon: null,
        title: "Ծրագրավորում",
        children: [
            {
                id: 5,
                parent_id: 1,
                ordering: 1,
                icon: null,
                title: "Վեբ Ծրագրավորում",
                children: [
                    {
                        id: 6,
                        parent_id: 5,
                        ordering: 2,
                        icon: null,
                        title: "Մոբայլ Ծրագրավորում",
                        children: [
                            {
                                id: 34,
                                parent_id: null,
                                ordering: 3,
                                icon: null,
                                title: "Ֆինանսներ և հաշվապահություն",
                                children: []
                            },
                        ]
                    },
                    {
                        id: 7,
                        parent_id: 5,
                        ordering: 2,
                        icon: null,
                        title: "Մոբայլ Ծրագրավորում",
                        children: []
                    },
                ]
            }
        ]
    },
    {
        id: 2,
        parent_id: null,
        ordering: 2,
        icon: null,
        title: "Բիզնես",
        children: []
    },
    {
        id: 3,
        parent_id: null,
        ordering: 3,
        icon: null,
        title: "Ֆինանսներ և հաշվապահություն",
        children: []
    },
];

const Home = () => {

    const dropDownMenu = (values) => {
        return values.map(item => {
            item = {
                ...item,
                key: uniqueId(),
                label: <Link to={`category/${item.id}`}>{item.title}</Link>,
                children: Boolean(item.children.length) ? dropDownMenu(item.children) : null,
            }
            return item
        });
    };

    return (
        <div className='home'>
            {data.map(item => (Boolean(item.children.length) ?
                    <Dropdown
                        menu={{items: dropDownMenu(item?.children)}}
                        key={item.id}
                    >
                        <button>
                            <Space>
                                {item.title}
                                <DownOutlined />
                            </Space>
                        </button>
                    </Dropdown> : <button key={item.id}>
                        <Space>
                            {item.title}
                        </Space>
                    </button>
            ))}
        </div>
    )
};

export default Home;