import React from 'react';
import styles from './CheckboxItem.module.scss';
import {setChecked} from "../../store/slices/valueFormsSlices.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";


interface ICheckboxItemProps {
    id: number,
    checked: boolean;
    register: any;
}

const CheckboxItem: React.FC<ICheckboxItemProps> = ({ id, checked, register }) => {
    const dispatch = useAppDispatch();
    const handleInputClick = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const  checked  = event.target.checked;
        dispatch(setChecked({id, checked}));
    };

    return (
        <div className={styles.wrapper}>
            <label>
                <input
                    type={"checkbox"}
                    {...register(`checkbox${id}`)}
                    onChange={(event) => handleInputClick(event, id)}
                    checked={checked}
                    placeholder="Placeholder"
                    id={`field-checkbox-group-option${id}`}
                />
                {id}
            </label>
        </div>
    );
};

export default CheckboxItem;