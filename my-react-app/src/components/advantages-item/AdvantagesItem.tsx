import React from 'react';
import styles from './AdvantagesItem.module.scss';
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {removeItemListAdvantages, setAdvantageValueById} from "../../store/slices/valueFormsSlices.ts";


interface IAdvantagesItemProps {
    id: number,
    title: string;
    register: any;
}
const AdvantagesItem: React.FC<IAdvantagesItemProps> = ({ id, title, register }) => {
    const dispatch = useAppDispatch();

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>, id: number) => {
        const  title  = event.target.value;
        dispatch(setAdvantageValueById({id, title}));
    };
    return (
        <div className={styles.wrapper}>
            <input
                {...register(`advantage${id}`, {
                    required: {
                        value: true,
                        message: "Это поле обязательно"
                    }
                })}
                onChange={(event) => handleInputChange(event, id)}
                value={title}
                placeholder="Placeholder"
                id={`field-advantages-${id}`}
                className="form__input form__input_step2"
            />
            <svg onClick={() => dispatch(removeItemListAdvantages({id}))}
                 id={`button-remove-${id}`}
                 className={styles.deleteButton}
                width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M3.4551 15.5498L2.5551 6.54975C2.52566 6.25541 2.75681 6 3.05262 6H12.9476C13.2434 6 13.4746 6.25541 13.4451 6.54975L12.5451 15.5498C12.5196 15.8054 12.3045 16 12.0476 16H3.95262C3.69574 16 3.48066 15.8054 3.4551 15.5498Z" fill="#CCCCCC"/>
                <path d="M15.0001 4H1.00012C0.72398 4 0.500122 3.77614 0.500122 3.5V2.5C0.500122 2.22386 0.72398 2 1.00012 2H3.34873C3.44745 2 3.54395 1.97078 3.62608 1.91603L6.37416 0.0839749C6.45629 0.029219 6.5528 0 6.65151 0H9.34873C9.44745 0 9.54395 0.029219 9.62608 0.0839748L12.3742 1.91603C12.4563 1.97078 12.5528 2 12.6515 2H15.0001C15.2763 2 15.5001 2.22386 15.5001 2.5V3.5C15.5001 3.77614 15.2763 4 15.0001 4Z" fill="#CCCCCC"/>
            </svg>
        </div>
    );
};

export default AdvantagesItem;