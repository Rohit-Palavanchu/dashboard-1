import {
    HomeContainer,
    NavBarSmall,
    NavBarTitle,
    NavBarLinksContainer,
    NavBarLinkItem,
    NavBarLarge,
    NavBarLargeInnerContainer,
    NavBarLargeMenuContainer,
    NavBarLinkItemLarge,
    NavBarLinkIcon,
    HelpAndContactContainer,
    HelpTitle,
    ApiContainer,
    ApiNavBar,
    ApiNavBarTitle,
    ApiNavBarEnd,
    SearchBarContainer,
    SearchBar,
    SearchIcon,
    VectorIcon,
    LogoutIcon,
    SearchBarContainerSmall,
    LineChartContainerSmall,
    LineChartContainer,
    LineChartHeader
} from './styledComponents'
import { Link } from 'react-router-dom'
import { FiLogOut } from 'react-icons/fi'
import { v4 as uuid } from 'uuid'
import { useState } from "react"
import Cookies from 'js-cookie'
import { LineChart, Line, XAxis, YAxis,  Tooltip, Legend, ResponsiveContainer } from 'recharts';

const MenuItems = [
    { id: uuid(), menuItemName: 'Dashboard', imageUrl: 'https://res.cloudinary.com/dwlqoevvr/image/upload/v1688290333/dashboard_icon_fuo6u7.png' },
    { id: uuid(), menuItemName: "Transactions", imageUrl: 'https://res.cloudinary.com/dwlqoevvr/image/upload/v1688291321/transaction_icon_f91tbw.png' },
    { id: uuid(), menuItemName: "Schedules", imageUrl: 'https://res.cloudinary.com/dwlqoevvr/image/upload/v1688291378/schedule_icon_c4ydq4.png' },
    { id: uuid(), menuItemName: "Users", imageUrl: 'https://res.cloudinary.com/dwlqoevvr/image/upload/v1688291408/user_icon_nzudvl.png' },
    { id: uuid(), menuItemName: "Settings", imageUrl: 'https://res.cloudinary.com/dwlqoevvr/image/upload/v1688291445/setting_icon_i0gvgb.png' }
]



const RenderMenuItems = (props) => {
    const { i, menuItem, changeMenuItem } = props
    const a = i.menuItemName === menuItem
    return (<NavBarLinkItemLarge onClick={() => { changeMenuItem(i.menuItemName) }}>
        <NavBarLinkIcon src={i.imageUrl}></NavBarLinkIcon>
        <NavBarLinkItem fontWeight={a.toString()}>{i.menuItemName}</NavBarLinkItem>
    </NavBarLinkItemLarge>)
}

const data = [
    {
        name: 'Week 1',
        Guest: 4000,
        User: 2400,
        amt: 2400,
    },
    {
        name: 'Week 2',
        Guest: 3000,
        User: 1398,
        amt: 2210,
    },
    {
        name: 'Week 3',
        Guest: 2000,
        User: 9800,
        amt: 2290,
    },
    {
        name: 'Week 4',
        Guest: 2780,
        User: 3908,
        amt: 2000,
    },
    
];


const Home = (props) => {
    const [menuItem, onChangeMenuItem] = useState(MenuItems[0].menuItemName)
    const changeMenuItem = (a) => {
        onChangeMenuItem(a)
    }
    const onLogout = () => {
        Cookies.remove('jwt_token')
        const { history } = props
        history.replace('/login')
    }
    return <HomeContainer>
        <NavBarSmall>
            <NavBarTitle>Board.</NavBarTitle>
            <NavBarLinksContainer>
                <Link to="/"><NavBarLinkItem>Dashboard</NavBarLinkItem></Link>
                <Link to="/transactions"><NavBarLinkItem>Transactions</NavBarLinkItem></Link>
                <Link to='/schedules'><NavBarLinkItem>Schedules</NavBarLinkItem></Link>
                <Link to='/users'><NavBarLinkItem>Users</NavBarLinkItem></Link>
                <Link to='/settings'><NavBarLinkItem>Settings</NavBarLinkItem></Link>
                <FiLogOut color="white" fontSize="1.5em" onClick={onLogout} />
            </NavBarLinksContainer>
        </NavBarSmall>
        <NavBarLarge>
            <NavBarLargeInnerContainer>
                <NavBarTitle>Board.</NavBarTitle>
                <NavBarLargeMenuContainer>
                    <div>{MenuItems.map((i) => <RenderMenuItems key={i.id} i={i} menuItem={menuItem} changeMenuItem={changeMenuItem} />)}</div>
                </NavBarLargeMenuContainer>
                <HelpAndContactContainer>
                    <HelpTitle>Help</HelpTitle>
                    <HelpTitle>Contact Us</HelpTitle>
                </HelpAndContactContainer>
            </NavBarLargeInnerContainer>
        </NavBarLarge>
        <ApiContainer>
            <ApiNavBar>
                <ApiNavBarTitle>Dashboard</ApiNavBarTitle>
                <ApiNavBarEnd>
                    <SearchBarContainer>
                        <SearchBar type="search"></SearchBar>
                        <SearchIcon src="https://res.cloudinary.com/dwlqoevvr/image/upload/v1688300209/Search_icon_gyxp9t.png"></SearchIcon>
                    </SearchBarContainer>
                    <VectorIcon src="https://res.cloudinary.com/dwlqoevvr/image/upload/v1688300508/Vector_hlv3lu.png"></VectorIcon>
                    <LogoutIcon onClick={onLogout} src="https://res.cloudinary.com/dwlqoevvr/image/upload/v1688300663/Mask_Group_nmy72r.png"></LogoutIcon>
                </ApiNavBarEnd>
            </ApiNavBar>
            <LineChartContainer>
                <LineChartHeader>
                    <ApiNavBarTitle>Activity</ApiNavBarTitle>
                    <HelpTitle style={{ color:'#858585'} }>May-June 2021</HelpTitle>
                </LineChartHeader>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart
                        width={500}
                        height={300}
                        data={data}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >

                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" activeDot={{ r: 8 }} />
                        <Line type="monotone" dataKey="User" stroke="#9BDD7C" />
                    </LineChart>
                </ResponsiveContainer>
            </LineChartContainer>
            
        </ApiContainer>
        <SearchBarContainerSmall>
            <SearchBar type="search"></SearchBar>
            <SearchIcon src="https://res.cloudinary.com/dwlqoevvr/image/upload/v1688300209/Search_icon_gyxp9t.png"></SearchIcon>
        </SearchBarContainerSmall>
        <LineChartContainerSmall>
            <ResponsiveContainer width="100%" height="100%">
            <LineChart
                width={500}
                height={300}
                data={data}
                margin={{
                    top: 5,
                    right: 30,
                    left: 20,
                    bottom: 5,
                }}
            >

                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="Guest" stroke="#E9A0A0" activeDot={{ r: 8 }} />
                <Line type="monotone" dataKey="User" stroke="#9BDD7C" />
            </LineChart>
        </ResponsiveContainer></LineChartContainerSmall>

    </HomeContainer>
}
export default Home