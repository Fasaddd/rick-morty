import {FC, ReactElement, ReactNode} from 'react';
import './LayoutWrapper.scss';

type Props = {
    children: ReactNode;
}

const LayoutWrapper: FC<Props> = ({children,}): ReactElement => {
    return (
        <div className="layout-wrapper">
            {children}
        </div>
    )
}

export default LayoutWrapper;