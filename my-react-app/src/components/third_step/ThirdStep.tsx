import React, {useState} from 'react';
import styles from './ThirdStep.module.scss';

interface IThirdStepProps {
    register: any;
    errors: any
}
const ThirdStep: React.FC<IThirdStepProps> = ({ register, errors }) => {
    const [countSymbols, setCountSymbols] = useState<number>(0);

    const getCountSymbols = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
        setCountSymbols((event.target.value).length)
    }


    return (
        <div className={styles.wrapper}>
            <p className={styles.titleAbout}> About </p>
            <label>
                <textarea
                    id={"field-about"}
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
                <p className={styles.count}> {countSymbols} из 200 </p>
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