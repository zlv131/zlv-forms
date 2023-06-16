import React from 'react';
import styles from './CheckboxItem.module.scss';
import {setAdvantageValueById, setChecked} from "../../store/slices/valueFormsSlices.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";

interface ICheckboxItemProps {
    id: number,
    checked: boolean;
    register: any;
    errors: any
}

const CheckboxItem: React.FC<ICheckboxItemProps> = ({ id, checked, errors, register }) => {
    const dispatch = useAppDispatch();
    const handleInputClick = (event: React.MouseEvent<HTMLInputElement>, id: number) => {
        const  checked  = event.target.value;
        dispatch(setChecked({id, cheked}));
    };

    return (
        <div className={styles.wrapper}>
            <label>
                <input
                    type={"checkbox"}
                    {...register(`checkbox${id}`)}
                    onClick={(event) => handleInputClick(event, id)}
                    value={checked}
                    placeholder="Placeholder"
                    id={id.toString()}
                    className="form__input form__input_step2"
                />
                {id}
            </label>
            <div className={styles.error}>
                {errors?.advantages &&
					        <span> {errors?.advantages?.message} </span>
                }
            </div>
        </div>
    );
};

export default CheckboxItem;