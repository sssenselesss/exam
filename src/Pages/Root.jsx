import React, { createContext, useState } from "react";
import { Outlet } from "react-router-dom";

import Header from "../components/Header";
import Modal from "../components/Modal";

export const ModalContext = createContext(null);


const Root = () => {

    const [modal, setModal] = useState(false);
    const toggleModal = setModal.bind(this, !modal);
    return (
        <ModalContext.Provider value={{ modal, toggleModal }}>
            <Header />

            <main>
                <Outlet />
            </main>
            <Modal />
        </ModalContext.Provider>
    )




}

export default Root;