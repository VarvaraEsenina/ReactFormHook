import React from 'react'
import { useForm } from "react-hook-form"

let count = 0;
export default function FeedbackForm() {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = (data) => console.log(data)

    console.log(watch("example")) // watch input value by passing the name of it

    console.log(watch("example"))

    console.log(++count);
    console.log(errors);

    return (
        <>
            <h1 className="text-center">Заполнить заявку на обратную связь</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label className="form-label">Фамилия</label>
                    <input {...register("lastName", {
                        required: {
                            value: true,
                            message: "Поле Фамилия обязательно для заполнения"
                        }, 
                        minLength: {
                            value: 4,
                            message: "Минимальное кол-во символов -4 "
                        }
                    })} type="text" className="form-control" placeholder='Фамилия' />
                    <div className="form-text">{errors.lastName?.message}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Имя</label>
                    <input {...register("FirstName", {
                        required: {
                            value: true,
                            message: "Поле Имя обязательно для заполнения"
                        }
                    })} type="text" className="form-control" placeholder='Имя' />
                    <div className="form-text">{errors.FirstName?.message}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Отчество</label>
                    <input {...register("middlName", {
                        required: {
                            value: true,
                            message: "Поле Отчество обязательно для заполнения"
                        }
                    })} type="text" className="form-control" placeholder='Отчество' />
                    <div className="form-text">{errors.middlName?.message}</div>
                </div>
                <div className="mb-3">
                    <label className="form-label">Электронаая почта</label>
                    <input {...register("email", {
                        required: {
                            value: true,
                            message: "Поле email обязательно для заполнения"
                        }
                    })} type="email" className="form-control" placeholder='Email' />
                    <div className="form-text">{errors.email?.message}</div>
                </div>

                <div className='mb-3'>
                    <button className='btn btn-outline-primary' type='submit'>Отправить
                    </button>
                </div>

            </form>



        </>
    )
}
