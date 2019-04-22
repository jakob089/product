import React from 'react';
import HomePage from "./pages/HomePage/HomePage";
import ProductPage from './pages/ProductPage/ProductPage';
import ProductAddPage from './pages/ProductActionPage/ProductAddPage';
import ProductEditPage from './pages/ProductActionPage/ProductEditPage';


const routes = [
    {
        path : '/',
        exact: true,
        main : () => <HomePage />
    },
    {
        path : '/product-list',
        exact: false,
        main : () => <ProductPage />
    },
    {
        path : '/product/add',
        exact: false,
        main : ({history}) => <ProductAddPage history={history} />
    },
    {
        path : '/product/edit/:id',
        exact: false,
        main : ({match, history}) => <ProductEditPage match={match} history={history} />
    }   

]

export default routes;