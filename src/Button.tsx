import React, {FC} from 'react';
import s from './Button.module.css'

type ButtonPropsType = {
    isActive: boolean
    onClick: ()=> void
    name: string
}
const Button: FC<ButtonPropsType> = ({onClick, name, isActive}) => {
    return (
        <button className={s.button} disabled={isActive} onClick={onClick}>
            {name}
        </button>
    );
};

export default Button;