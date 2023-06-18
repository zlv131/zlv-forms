import React from 'react';
import styles from './ThirdStep.module.scss';
import {DeepRequired, FieldErrorsImpl, UseFormRegister} from "react-hook-form";
import {IValueForms} from "../../types/types.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {setAbout} from "../../store/slices/valueFormsSlices.ts";

interface IThirdStepProps {
    register: UseFormRegister<IValueForms>;
    errors: Partial<FieldErrorsImpl<DeepRequired<IValueForms>>>;
}
const ThirdStep: React.FC<IThirdStepProps> = ({ register, errors }) => {
    const dispatch = useAppDispatch();
    const valueAbout = useAppSelector(state => state.valueFormsSlices.about);

    const getCountSymbols = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        dispatch(setAbout(event.target.value));
    }


    return (
        <div className={styles.wrapper}>
            <p className={styles.titleAbout}> About </p>
            <label>
                <textarea
                    id={"field-about"}
                    value={valueAbout}
                    onInput={getCountSymbols}
                    {...register("about", {
                        maxLength: {
                            value: 200,
                            message: "Максимальное количество символов - 200",
                        },
                        required: {
                            value: true,
                            message: "Это поле обязательно",
                        },
                    })}/>
            </label>
            <div className={styles.info}>
                <p className={styles.count}> {valueAbout.length} из 200 </p>
                <div className={styles.error}>
                    {errors?.about &&
					            <span> {errors?.about?.message} </span>
                    }
                </div>
            </div>
        </div>
    );
};

export default ThirdStep;