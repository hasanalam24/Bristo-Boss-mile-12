import { useState } from 'react';
import orderImg from '../../../../assets/shop/banner2.jpg'
import Cover from '../../../Shared/Cover/Cover';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../Hooks/UseHooksMenu';
import OrderCart from '../OrderCart/OrderCart';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Order = () => {

    const categories = ["salad", "pizza", "soup", "dessert", "drinks"]
    const { category } = useParams()
    const initialIndex = categories.indexOf(category)

    const [tabIndex, setTabIndex] = useState(initialIndex)
    const [menu] = useMenu()

    const dessert = menu.filter(item => item.category === 'dessert')
    const soup = menu.filter(item => item.category === 'soup')
    const salad = menu.filter(item => item.category === 'salad')
    const pizza = menu.filter(item => item.category === 'pizza')

    const drinks = menu.filter(item => item.category === 'drinks')


    return (
        <div>
            <Helmet>
                <title>Bistro Boss | Order Food</title>
            </Helmet>
            <Cover coverImg={orderImg} title="Order Food"></Cover>

            <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>Salad</Tab>
                    <Tab>Pizza</Tab>
                    <Tab>Soup</Tab>
                    <Tab>Dessert</Tab>
                    <Tab>Drinks</Tab>

                </TabList>
                <TabPanel>
                    <OrderCart items={salad}></OrderCart>
                </TabPanel>
                <TabPanel>
                    <OrderCart items={pizza}></OrderCart>
                </TabPanel>
                <TabPanel>
                    <OrderCart items={soup}></OrderCart>
                </TabPanel>
                <TabPanel>
                    <OrderCart items={dessert}></OrderCart>
                </TabPanel>
                <TabPanel>
                    <OrderCart items={drinks}></OrderCart>
                </TabPanel>
            </Tabs>
        </div>
    );
};

export default Order;