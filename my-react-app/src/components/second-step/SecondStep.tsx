import React from 'react';
import styles from './SecondStep.module.scss';
import ButtonControl from "../button-control/ButtonControl.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import AdvantagesItem from "../advantages-item/AdvantagesItem.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {addItemListAdvantages} from "../../store/slices/valueFormsSlices.ts";
import CheckboxItem from "../checkbox-item/CheckboxItem.tsx";


interface ISecondStep {
    register: any;
    errors: any
}
const SecondStep: React.FC<ISecondStep> = ({ register, errors }) => {
    const dispatch = useAppDispatch();
    const listAdvantages  = useAppSelector((state) => state.valueFormsSlices.listAdvantages);
    const listCheckBox = useAppSelector((state) => state.valueFormsSlices.listCheckBox);

    return (
        <div className={styles.wrapper}>
            <p> Advantages </p>
            {listAdvantages.map((advantagesItem) => <div key={advantagesItem.id}> <AdvantagesItem id={advantagesItem.id} register={register} errors={errors} title={advantagesItem.title}/> </div>)}
            <button className={styles.addItemButton} onClick={() => dispatch(addItemListAdvantages())}> + </button>

            <p> Checkbox group </p>
            {listCheckBox.map((checkBoxItem) => <div key={checkBoxItem.id}> <CheckboxItem id={checkBoxItem.id} register={register} errors={errors} checked={checkBoxItem.checked}/> </div>)}



            <div className={styles.groupButton}>
                <ButtonControl title={"Назад"}/>
                <ButtonControl title={"Вперед"}/>
            </div>
        </div>
    );
};

export default SecondStep;