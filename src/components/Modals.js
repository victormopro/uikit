import React from 'react';
import Button from './Button';

const Modals = ({ 
    title, 
    children, 
    defaultButton, 
    primaryButton, 
    modal, 
    loading,
    success,
    add,
    oops 
}) => {

    return(
        <div>
            { modal &&
                <div className="modal">
                    <div className="modal__content-wrap">
                    <div className="modal__header">
                        <h3>{ title }</h3>
                    </div>
                    <div className="modal__content">
                        { children }
                    </div>
                    <div className="modal__footer">
                        <Button size='small' type='default'>{ defaultButton }</Button>  
                        <Button size='small' type='primary'>{ primaryButton }</Button>
                    </div>
                    </div>
                </div>
            }

            { loading && 
                <div className="modal loading">
                    <div className="modal__content-wrap">
                        <div className="modal__content text-center">
                            <h3>Loading</h3>
                            <small>Hold on while we upload your file</small>
                        </div>
                    </div>
                </div>
            }

            { success && 
                <div className="modal success">
                    <div className="modal__content-wrap">
                        <div className="modal__content text-center">
                            <div className="modal__icon">
                                <i className="icon-Checked" />
                            </div>
                            <h3>Sucess</h3>
                            <small>Your file uploaded successfully</small>
                        </div>
                    </div>
                </div>
            }

            { add && 
                <div className="modal add">
                    <div className="modal__content-wrap">
                        <div className="modal__content text-center">
                            <div className="modal__icon">
                                <i className="icon-Plus" />
                            </div>
                            <h3>Add</h3>
                            <small>Please add your file</small>
                        </div>
                    </div>
                </div>
            }

            { oops && 
                <div className="modal oops">
                    <div className="modal__content-wrap">
                        <div className="modal__content text-center">
                            <div className="modal__icon">
                                <i className="icon-Close" />
                            </div>
                            <h3>Oops</h3>
                            <small>Please try again</small>
                        </div>
                    </div>
                </div>
            }

        </div>
    )
}
export default Modals;