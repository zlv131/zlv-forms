import React from 'react';
import styles from './RadioItem.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {setSelectedRadio} from "../../store/slices/valueFormsSlices.ts";

interface IRadioItemProps {
    id: number,
    checked: boolean;
    register: any;
    errors: any
}
const RadioItem: React.FC<IRadioItemProps> = ({ register, errors, id }) => {
    const dispatch = useAppDispatch();
    const selectedRadio = useAppSelector(state => state.valueFormsSlices.selectedRadio);

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        dispatch(setSelectedRadio(Number(event.target.value)));
    }

    return (
        <div className={styles.wrapper}>


            <label>
                <input
                    type={"radio"}
                    value={id}
                    {...register(`radio${id}`)}
                    onChange={handleInputChange}
                    checked={selectedRadio === id}
                    id={`field-radio-group-option${id}`}
                />
                {id}
            </label>
            <div className={styles.error}>
                {errors?.radio &&
					        <span> {errors?.radio?.message} </span>
                }
            </div>


        </div>
    );
};

export default RadioItem;