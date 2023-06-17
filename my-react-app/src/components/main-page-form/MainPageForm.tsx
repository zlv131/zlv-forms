import React from 'react';
import styles from './MainPageForm.module.scss';
import {useForm} from "react-hook-form";
import {PATTERN} from "../../const/const.ts";
import {useAppDispatch} from "../../hooks/useAppDispatch.ts";
import {setEmail, setPhoneNumber} from "../../store/slices/valueFormsSlices.ts";
import {useNavigate} from "react-router-dom";

const MainPageForm: React.FC = () => {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();


    const {
        register,
        formState: {
            errors,
        },
        handleSubmit,
    } = useForm({
        mode: "onBlur",
    });

    const onSubmit = (data) => {
        dispatch(setPhoneNumber(JSON.stringify(data.phoneNumber)));
        dispatch(setEmail(JSON.stringify(data.email)));
        navigate('/step');
    }

    const getInputNumberValue = (value: string) => {
        return value.replace(PATTERN, "");
    }
    const handlePhoneInput = (event: React.ChangeEvent<HTMLInputElement>) => {
        const input = event.target;
        const selectionStart = input.selectionStart;
        let inputNumberValue: string = getInputNumberValue(input.value);
        let formattedInputValue: string = "";


        if (!inputNumberValue) {
            return (input.value = "");
        }

        if (input.value.length !== selectionStart) {
            return;
        }

        if (["7", "8", "9"].indexOf(inputNumberValue[0]) > -1) {
            if (inputNumberValue[0] === "9") {
                inputNumberValue = "7" + inputNumberValue;
            }


            const firstSymbol = inputNumberValue[0] === "8" ? "+7" : "+7";
            formattedInputValue = firstSymbol + " ";

            if (inputNumberValue.length > 1) {
                formattedInputValue += "(" + inputNumberValue.substring(1, 4);
            }

            if (inputNumberValue.length >= 5) {
                formattedInputValue += ") " + inputNumberValue.substring(4, 7);
            }

            if (inputNumberValue.length >= 8) {
                formattedInputValue += "-" + inputNumberValue.substring(7, 9);
            }


            if (inputNumberValue.length >= 10) {
                formattedInputValue += "-" + inputNumberValue.substring(9, 11);
            }
        } else {
            formattedInputValue = "+7" + inputNumberValue.substring(0, 16);
        }
        input.value = formattedInputValue;
    };

    const handlePhonePaste = (event: React.ClipboardEvent<HTMLInputElement>) => {
        const pasted = event.clipboardData ?? window["clipboardData"];
        const input: HTMLInputElement = event.target as HTMLInputElement;
        const inputNumberValue: string = getInputNumberValue(input.value);

        if (pasted) {
            const pastedText: string = pasted.getData("Text");
            if (PATTERN.test(pastedText)) {
                input.value = inputNumberValue;
            }
        }
    }

    return (
        <div className={styles.wrapper}>
            <form className={styles.form} onSubmit={handleSubmit(onSubmit)}>
                <label>
                    Номер телефона
                    <input placeholder={'+7 (___) ___-__-__'}
                           onPaste={handlePhonePaste}
                           onInput={handlePhoneInput}
                           maxLength={18}
                           className={styles.formInput}
                        {...register('phoneNumber', {
                        required: {
                            value: true,
                            message: "Это поле обязательно",
                        },
                        minLength: {
                            value: 18,
                            message: "Поле должно состоять из 11 цифр",
                        },
                    })}/>
                </label>
                <div className={styles.error}>
                    {errors?.phoneNumber &&
                      <p> {errors?.phoneNumber?.message} </p>
                    }
                </div>

                <label>
                    Email
                    <input placeholder={'zakharlegler@gmail.com'}
                           maxLength={50}
                           className={styles.formInput}
                           {...register('email', {
                               pattern: {
                                   value: /([a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z0-9_-]+)/,
                                   message: "Email введен некорректно"
                               },
                               required: {
                                   value: true,
                                   message: "Это поле обязательно"
                               }
                           })}/>
                </label>
                <div className={styles.error}>
                    {errors?.email &&
					            <p> {errors?.email?.message} </p>
                    }
                </div>
                    <button id={"button-start"}
                            className={styles.button}> Начать </button>
            </form>
        </div>
    );
};

export default MainPageForm;