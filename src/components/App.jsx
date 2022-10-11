import { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCatalogs } from 'redux/operation';
import { Loader, Header, Footer } from 'components';
import { Home } from 'pages';

const Products = lazy(() => import('pages/Products/Products'));
const Catalog = lazy(() => import('pages/Catalog/Catalog'));
const ProductCard = lazy(() => import('pages/ProductCard/ProductCard'));
const Cooperation = lazy(() => import('pages/Cooperation/Cooperation'));
const PageNotFound = lazy(() => import('pages/PageNotFound/PageNotFound'));

export const App = () => {
    const isLoading = useSelector(state => state.isLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getCatalogs());
    }, [dispatch]);

    return isLoading ? (
        <Loader />
    ) : (
        <div >
            <Header />
            <main className="main">
                <Suspense fallback={<Loader />}>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="catalog" element={<Catalog />} />
                        <Route path="catalog/:catalogIdx" element={<Products />} />
                        <Route path="product/:productId" element={<ProductCard />} />
                        <Route path="cooperation" element={<Cooperation />} />
                        {/* <Route path="something" element={<Something />} /> */}
                        <Route path="*" element={<PageNotFound />} />
                    </Routes>
                </Suspense>
            </main>
            <Footer />
        </div>
    );
};
