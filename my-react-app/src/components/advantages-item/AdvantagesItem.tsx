import React from 'react';
import styles from './AdvantagesItem.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {removeItemListAdvantages, setAdvantageValueById} from "../../store/slices/valueFormsSlices.ts";


interface IAdvantagesItemProps {
    id: number,
    title: string;
    register: any;
    errors: any
}
const AdvantagesItem: React.FC<IAdvantagesItemProps> = ({ id, title, register, errors }) => {
    const dispatch = useAppDispatch();


    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const  title  = event.target.value;
        dispatch(setAdvantageValueById({id, title}));
    };

    return (
        <div className={styles.wrapper}>
            <input
                {...register(`advantage${id}`)}
                onChange={(event) => handleInputChange(event, id)}
                value={title}
                placeholder="Placeholder"
                id={id.toString()}
                className="form__input form__input_step2"
            />
            <div className={styles.error}>
                {errors?.advantages &&
					        <span> {errors?.advantages?.message} </span>
                }
            </div>
            <img onClick={() => dispatch(removeItemListAdvantages({id}))}
                 className={styles.deleteButton}
                 src="./src/assets/buttonDelete.svg" alt=""/>
        </div>
    );
};

export default AdvantagesItem;