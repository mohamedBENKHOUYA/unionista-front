import React from 'react';
import RenderRoutes from './routes';
import Header from 'components/header/Header';
import Footer from 'components/footer/Footer';
import 'App.css';
import { useSelector } from 'react-redux';
import ModalSpot from 'shared/modal-spot/ModalSpot';
import SignInContent from 'components/modal-content/sign-in-content/SignInContent';
import MenuDrawerContent from 'components/modal-content/menu-drawer-content/MenuDrawerContent';
import { modalContentMapping } from 'utils/bottom-modal';
// import MenuDrawerContent from 'components/modal-content/menu-drawer-content/MenuDrawerContent';
// import SignInContent from 'components/modal-content/sign-in-content/SignInContent';

// import { increment, decrement } from '../redux/slices/counterSlice';
// import { toggleDrawer } from '../redux/slices/headerSlice';

const menuItems = [
    'Early Christmas Deals',
    'Jewelry & Accessories',
    'Clothing & shoes',
    'Home & Living',
    'Wedding & party',
    'toys & entertainment',
    'art & collectibles',
    'craft supplies & tools',
    'etsy registry',
];

function App() {
    const headerState = useSelector((state) => state.header);

    return (
        <div className="app_container">
            <Header />
            <RenderRoutes />
            <Footer />

            {headerState.isBottomModalOpen &&
                _BottomModalContent(headerState.currentContent)}
        </div>
    );
}

function _BottomModalContent(currentContent) {
    switch (currentContent) {
        case modalContentMapping.MENU_DRAWER:
            return (
                <ModalSpot>
                    <MenuDrawerContent menuItems={menuItems} />
                </ModalSpot>
            );
        case modalContentMapping.SIGN_IN:
            return (
                <ModalSpot>
                    <SignInContent />
                </ModalSpot>
            );

        default:
            return (
                <ModalSpot>
                    <h2>no content found</h2>{' '}
                </ModalSpot>
            );
    }
}

export default App;

// export function ModalContentHOC(CurrentModalComp, props) {
//     return <CurrentModalComp {...props} />;
// }
