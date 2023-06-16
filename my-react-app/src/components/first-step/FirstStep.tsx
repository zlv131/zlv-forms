import React from 'react';
import styles from './FirstStep.module.scss';
import ButtonControl from "../button-control/ButtonControl.tsx";


//поправить пропс
interface IFirstStepProps {
    register: any;
    errors: any
}

const FirstStep: React.FC<IFirstStepProps> = ({ register, errors }) => {


    return (
        <div className={styles.wrapper}>
            <label>
                Nickname
                <input
                    {...register("nickname", {
                        maxLength: {
                            value: 30,
                            message: "Максимальное количество символов - 30",
                        },
                        pattern: {
                            value: /^[a-zA-Z0-9а-яА-Я]+$/,
                            message: "Поле может содержать только цифры и буквы",
                        },
                        required: {
                            value: true,
                            message: "Это поле обязательно",
                        },
                    })}/>
            </label>
            <div className={styles.error}>
                {errors?.nickname &&
					        <span> {errors?.nickname?.message} </span>
                }
            </div>


            <label>
                Name
                <input
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
                {console.log(errors?.nickname)}
                {errors?.name &&
					        <span> {errors?.name?.message} </span>
                }
            </div>

            <label>
                Surname
                <input
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
                        }
                    })}/>
            </label>
            <div className={styles.error}>
                {errors?.surname &&
					        <span> {errors?.surname?.message} </span>
                }
            </div>

            <label> Sex
                <select name="sex"
                        {...register("sex", {
                        maxLength: {
                            value: 50,
                            message: "Максимальное количество символов - 50",
                        },
                        pattern: {
                            value: /^[a-zA-Zа-яА-Я]+$/,
                        },
                        })}>
                    <option value="Не выбрано"> Не выбрано </option>
                    <option value="man"> man </option>
                    <option value="woman"> woman </option>
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