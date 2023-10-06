import React, {FC} from 'react';
type Props = {
    children: React.ReactNode
}
const Counter: FC<Props> = ({children}) => {
    return (
        <div className={"counter"}>
            {children}
        </div>
    );
};

export default Counter;