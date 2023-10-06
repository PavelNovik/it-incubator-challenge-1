import React, {FC} from 'react';

type DisplayPropsType = {
    counter: number
}
const Display: FC<DisplayPropsType> = ({counter}) => {
    return (
        <div className={`counter__display ${counter === 5 ? "stop" : ''} `}>
            {counter}
        </div>
    );
};

export default Display;