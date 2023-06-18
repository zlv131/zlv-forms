import React from 'react';
import styles from './SecondStep.module.scss';
import ButtonControl from "../button-control/ButtonControl.tsx";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import AdvantagesItem from "../advantages-item/AdvantagesItem.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {addItemListAdvantages} from "../../store/slices/valueFormsSlices.ts";
import CheckboxItem from "../checkbox-item/CheckboxItem.tsx";
import RadioItem from "../radio-item/RadioItem.tsx";
import {DeepRequired, FieldErrorsImpl, UseFormRegister} from "react-hook-form";
import {IValueForms} from "../../types/types.ts";


interface ISecondStep {
    register: UseFormRegister<IValueForms>;
    errors: Partial<FieldErrorsImpl<DeepRequired<IValueForms>>>;
}
const SecondStep: React.FC<ISecondStep> = ({ register, errors }) => {
    const dispatch = useAppDispatch();
    const listAdvantages  = useAppSelector((state) => state.valueFormsSlices.listAdvantages);
    const listCheckBox = useAppSelector((state) => state.valueFormsSlices.listCheckBox);
    const groupRadio: number[] = [1, 2, 3];

    return (
        <div className={styles.wrapper}>
            <p className={styles.advantages}> Advantages </p>
            {listAdvantages.map((advantagesItem) => <div key={advantagesItem.id}> <AdvantagesItem id={advantagesItem.id} register={register} errors={errors} title={advantagesItem.title}/> </div>)}
            <button id={"button add"} className={styles.addItemButton} onClick={() => dispatch(addItemListAdvantages())}> + </button>

            <p className={styles.checkboxGroup}> Checkbox group </p>
            {listCheckBox.map((checkBoxItem) => <div key={checkBoxItem.id}> <CheckboxItem id={checkBoxItem.id} register={register} checked={checkBoxItem.checked}/> </div>)}

            <p className={styles.radioGroup}> Radio group </p>
            {groupRadio.map((radio) => <div key={radio}> <RadioItem id={radio} register={register}/> </div>)}

            <div className={styles.groupButton}>
                <ButtonControl title={"Назад"}/>
                <ButtonControl title={"Вперед"}/>
            </div>
        </div>
    );
};

export default SecondStep;