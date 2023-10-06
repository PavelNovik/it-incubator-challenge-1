import React, {FC} from 'react';

type ButtonPropsType = {
    isActive: boolean
    onClick: ()=> void
    name: string
}
const Button: FC<ButtonPropsType> = ({onClick, name, isActive}) => {
    return (
        <button disabled={isActive} onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;