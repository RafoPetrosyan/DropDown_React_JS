import React, {useState} from "react";
import './App.css';

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
                        children: [{
                            id: 12,
                            parent_id: null,
                            ordering: 2,
                            icon: null,
                            title: "Բիզնես",
                            children: []
                        },]
                    },
                    {
                        id: 7,
                        parent_id: 5,
                        ordering: 2,
                        icon: null,
                        title: "Մոբայլ Ծրագրավորում",
                        children: [
                            {
                                id: 13,
                                parent_id: null,
                                ordering: 3,
                                icon: null,
                                title: "Ֆինանսներ և հաշվապահություն",
                                children: []
                            },
                        ]
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
        children: [
            {
                id: 22,
                parent_id: null,
                ordering: 2,
                icon: null,
                title: "Բիզնես",
                children: []
            },
        ]
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

const App = () => {
    const [dropDownList, setDropDownList] = useState({});
    const [selectedDropDownIds, setSelectedDropDownIds] = useState([]);

    const handleMouseOver = ({children, id}) => {
        if(!children.length) return;
        setSelectedDropDownIds(prev => [...prev, id]);
        setDropDownList(prev => ({...prev, [id]: children}));
    };

    const handleMouseLeave = () => {
        setDropDownList({});
        setSelectedDropDownIds([]);
    }

    const handleMouseLeaveItem = (id) => {
        const newList = dropDownList;
        delete newList[id];
        setTimeout(() => {
            setDropDownList(newList);
        })
    }

  return (
    <div className="app">
        <div>
            <ul className='dropDownMenu'>
                {data.map(({id, title, children}) => (
                     <li
                         key={id}
                         onMouseOver={() => handleMouseOver({children, id})}
                         className={selectedDropDownIds.includes(id) ? 'selectedItem' : 'item'}
                     >
                         {title}
                     </li>
                ))}
            </ul>
            <div className='dropDownContainer' onMouseLeave={handleMouseLeave}>
                {Boolean(Object.keys(dropDownList).length) && Object.values(dropDownList).map(item => (
                    <div className='dropDownList'>
                        <ul>
                            {Object.values(item).map(({id, title, children}) => (
                                <li
                                    key={id}
                                    onMouseLeave={() => handleMouseLeaveItem(id)}
                                    onMouseOver={() => handleMouseOver({children, id})}
                                    className={selectedDropDownIds.includes(id) ? 'selectedItem' : 'item'}
                                >
                                    {title}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </div>
    </div>
  );
}

export default App;
