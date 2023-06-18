import React from 'react';
import styles from './FirstStep.module.scss';
import ButtonControl from "../button-control/ButtonControl.tsx";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {useAppSelector} from "../../hooks/useAppSelector.ts";
import {setName, setNickname, setSex, setSurname} from "../../store/slices/valueFormsSlices.ts";
import {DeepRequired, FieldErrorsImpl, UseFormRegister} from "react-hook-form";
import {IValueForms} from "../../types/types.ts";


interface IFirstStepProps {
    register: UseFormRegister<IValueForms>;
    errors: Partial<FieldErrorsImpl<DeepRequired<IValueForms>>>;
}

const FirstStep: React.FC<IFirstStepProps> = ({ register, errors }) => {
    const dispatch = useAppDispatch();
    const nickname = useAppSelector(state => state.valueFormsSlices.nickname);
    const name = useAppSelector(state => state.valueFormsSlices.name);
    const surname = useAppSelector(state => state.valueFormsSlices.surname);
    const sex = useAppSelector(state => state.valueFormsSlices.sex);


    return (
        <div className={styles.wrapper}>
            <label>
                Nickname
                <input
                    id={"field-nickname"}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(setNickname(event.target.value));
                    }}
                    value={nickname}
                    {...register("nickname", {
                        required: {
                            value: true,
                            message: "Это поле обязательно",
                        },
                        maxLength: {
                            value: 30,
                            message: "Максимальное количество символов - 30",
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9а-яА-Я]+$/,
                            message: "Поле может содержать только цифры и буквы",
                        },
                    })}
                />
            </label>
            <div className={styles.error}>
                {errors?.nickname &&
					        <span> {errors?.nickname?.message} </span>
                }
            </div>

            <label>
                Name
                <input
                    id={"field-name"}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(setName(event.target.value));
                    }}
                    value={name}
                    {...register("name", {
                        maxLength: {
                            value: 50,
                            message: "Максимальное количество символов - 50",
                        },
                        pattern: {
                            value: /^[a-zA-Zа-яА-Я]+$/,
                            message: "Поле может содержать только буквы",
                        },
                        required: {
                            value: true,
                            message: "Это поле обязательно",
                        }
                    })}/>
            </label>
            <div className={styles.error}>
                {errors?.name &&
					        <span> {errors?.name?.message} </span>
                }
            </div>

            <label>
                Surname
                <input
                    id={"field-surname"}
                    onInput={(event: React.ChangeEvent<HTMLInputElement>) => {
                        dispatch(setSurname(event.target.value));
                    }}
                    value={surname}
                    {...register("surname", {
                        maxLength: {
                            value: 50,
                            message: "Максимальное количество символов - 50",
                        },
                        pattern: {
                            value: /^[a-zA-Zа-яА-Я]+$/,
                            message: "Поле может содержать только буквы",
                        },
                        required: {
                            value: true,
                            message: "Это поле обязательно",
                        },
                    })}/>
            </label>
            <div className={styles.error}>
                {errors?.surname &&
					        <span> {errors?.surname?.message} </span>
                }
            </div>

            <label> Sex
                <select
                        id={"field-sex"}
                        onInput={(event: React.ChangeEvent<HTMLSelectElement>) => {
                            dispatch(setSex(event.target.value))
                        }}
                        value={sex}
                        {...register("sex", {
                        required: {
                            value: true,
                            message: "Это поле обязательно",
                        }
                        })}>
                    <option value=""> Не выбрано </option>
                    <option id={"field-sex-option-man"} value="man"> man </option>
                    <option id={"field-sex-option-woman"} value="woman"> woman </option>
                </select>
            </label>
            <div className={styles.error}>
                {errors?.sex &&
					        <span> {errors?.sex?.message} </span>
                }
            </div>

            <div className={styles.groupButton}>
                <ButtonControl title={"Назад"}/>
                <ButtonControl title={"Вперед"}/>
            </div>
        </div>
    );
};

export default FirstStep;