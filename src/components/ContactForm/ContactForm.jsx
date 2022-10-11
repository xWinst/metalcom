import { useState, useRef } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector, useDispatch } from 'react-redux';
import { Button, Loader, Modal } from 'components';
// import axios from 'axios';
import sendFile from '../../images/icons/send-file.svg';
import s from './ContactForm.module.css';
import { sendEmail } from 'redux/operation';

const ContactForm = () => {
    const [isModalShow, setIsModalShow] = useState(false);
    const filePicker = useRef(null);
    const [selectedFile, setSelectedFile] = useState(null);
    const lang = useSelector(state => state.lang);
    const isSending = useSelector(state => state.isSending);
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm({ mode: 'onBlur' });

    const dispatch = useDispatch();

    const send = async data => {
        dispatch(sendEmail({ selectedFile, data }));
        setIsModalShow(true);
    };

    const chooseFile = file => {
        setSelectedFile(file);

    };

    const handlePick = e => {
        e.preventDefault();
        filePicker.current.click();
    };

    const toggleModal = () => {
        setIsModalShow(state => !state);
        setSelectedFile(null);
    };

    return (
        <>
            <form className={s.form}>
                <h3 className={s.form__title}>{lang.formTitle}</h3>
                <label className={s.label}>
                    <input
                        className={s.input}
                        placeholder={lang.namePlaceholder}
                        title={lang.nameTitle}
                        {...register('name', {
                            required: lang.requiredField,
                        })}
                    />
                    <p className={s.error}>{errors?.name ? `* ${errors.name.message}` : <>&nbsp;</>}</p>
                </label>

                <label className={s.label}>
                    <input
                        className={s.input}
                        placeholder={lang.phonePlaceholder}
                        title={lang.phoneTitle}
                        {...register('phone', {
                            required: lang.requiredField,
                            pattern: {
                                value: /(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?/,
                                message: lang.phoneErrorMessage,
                            },
                        })}
                    />
                    <p className={s.error}>{errors?.phone ? `* ${errors.phone.message}` : <>&nbsp;</>}</p>
                </label>

                <label className={s.label}>
                    <input
                        className={s.input}
                        placeholder={lang.emailPlaceholder}
                        title={lang.emailTitle}
                        {...register('email', {
                            pattern: {
                                value: /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                                message: lang.emailErrorMessage,
                            },
                        })}
                    />
                    <p className={s.error}>{errors?.email ? `* ${errors.email.message}` : <>&nbsp;</>}</p>
                </label>

                <label className={s.label}>
                    <textarea className={s.input__text} placeholder={lang.textareaPlaceholder} {...register('text')} />
                </label>

                <div className={s.sendFile}>
                        
                    <img
                        className={s.load_icon}
                        src={sendFile}
                        alt="Load file"
                        onClick={handlePick}
                        title="Load file"
                    />
                    {selectedFile?.name &&<div className={s.file_name}> {selectedFile?.name}</div>}
                    <input
                        className="hidden"
                        type="file"
                        ref={filePicker}
                        // accept=".jpg, .jpeg, .png"
                        onChange={e => chooseFile(e.target.files[0])}
                    />
                    <Button text={lang.formButtonText} onClick={handleSubmit(send)} />
                </div>
            </form>
            {isSending && (
                <Modal
                    className={s.modal}
                    child={
                        <>
                            <p>Зачекайте будь ласка...</p>
                            <Loader className={s.miniLoad} />
                        </>
                    }
                />
            )}
            {isModalShow && !isSending && (
                <Modal
                    className={s.modal}
                    onClose={toggleModal}
                    child={
                        <>
                            <p>
                                Дякуємо за співпрацю!
                                <br />
                                Ми зв'яжемось з Вами найближчим часом
                            </p>
                            <Button text="OK" onClick={toggleModal} />
                        </>
                    }
                />
            )}
        </>
    );
};

export default ContactForm;
