import React, {FC} from 'react';
import s from './Display.module.css'

type DisplayPropsType = {
    counter: number
    stopCount: boolean
}
const Display: FC<DisplayPropsType> = ({counter, stopCount}) => {
    return (
        <span className={s.display + ' ' + `${stopCount ? s.stop : ''}`}>
            {counter}
        </span>
    );
};

export default Display;