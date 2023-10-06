import React, {FC} from 'react';
import s from './Wrapper.module.css'
type CounterProps = {
    children: React.ReactNode
}
const Wrapper: FC<CounterProps> = ({children}) => {
    return (
        <div className={s.wrapper}>
            {children}
        </div>
    );
};

export default Wrapper;