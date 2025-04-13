import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

const pagesWithGlobalStyle = ['/login', '/register'];

export const GlobalStyleControl = () => {
    const location = useLocation();

    useEffect(() => {
        const isGlobal = pagesWithGlobalStyle.includes(location.pathname);

        if (isGlobal) {
            document.body.classList.remove('no-global-style');
        } else {
            document.body.classList.add('no-global-style');
        }

        return () => {
            document.body.classList.remove('no-global-style');
        };
    }, [location.pathname]);

    return null;
};
