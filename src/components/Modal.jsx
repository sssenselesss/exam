import { useContext, useEffect, useRef, useState } from "react"
import { ModalContext } from "../Pages/Root"

const Modal = () => {
    const { modal, toggleModal } = useContext(ModalContext);

    const overlayRef = useRef();

    const close = (e) => {
        if (e.target === overlayRef.current) {
            toggleModal();
        }
    }

    const [form, setForm] = useState({
        email: "",
        full_name: "",
        message: "",
        service_id: 1,
    });

    const [services, setServices] = useState([]);

    const fetchServices = async () => {
        const r = await fetch("https://exam.avavion.ru/api/services");

        const data = await r.json();
        setServices(data.data);
    };

    useEffect(() => {
        fetchServices();
    }, []);

    const onSubmitHandle = (event) => {
        event.preventDefault();
    };

    const onChangeForm = (e) => {
        setForm((prev) => {
          prev = { ...prev };
    
          prev[e.target.name] = e.target.value.trim();
    
          console.log(prev);
          return prev;
        });
      };
    
      const sendRequest = async (body) => {
        const response = await fetch(
          "https://exam.avavion.ru/api/requests/create",
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
            body: JSON.stringify(body),
          }
        );
    
        const data = await response.json();
    
       console.log(data);
      };
    
      const onClickHandle = (e) => {
        e.preventDefault();
    
        sendRequest(form);
      };
    
      const onChangeSelectForm = (e) => {
        setForm((prev) => {
          prev = { ...prev };
    
          prev[e.target.name] = e.target.options[e.target.selectedIndex].value
    
          console.log(prev);
          return prev;
        });
      };

    return (
        <section
            onClick={(e) => close(e)}
            ref={overlayRef}
            className={`overlay ${modal ? "active" : ""}`}
        >
            <div className="modal">
                <div className="modal-body">
                    <form onSubmit={onSubmitHandle.bind(this)}>


                        <input type="email"

                            value={form.email}
                            id="email"
                            onChange={onChangeForm.bind(this)}
                            name="email"
                            placeholder="email" />
                        <input
                            type="text"
                            value={form.full_name}
                            onChange={onChangeForm.bind(this)}
                            name="full_name"
                            id="full_name"
                            placeholder="full_name" />

                        <textarea
                            onChange={onChangeForm.bind(this)}
                            name="message"
                            id="message">
                            {form.message}
                        </textarea>
                        <select onChange={onChangeSelectForm.bind(this)}
                            name="service_id"
                            id="service"
                            >
                            {services.map((item) => {
                                return (
                                    <option key={item.id} value={item.id}>
                                        {item.name}
                                    </option>
                                );
                            })}


                        </select>

                        <button onClick={onClickHandle.bind(this)}>Отправить сообщение</button>
                    </form>


                </div>
            </div>
        </section>
    )
}

export default Modal;