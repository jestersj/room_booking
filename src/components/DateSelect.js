import React, {forwardRef, useContext} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Context} from "../index";
import {observer} from "mobx-react-lite";
import {Button} from "react-bootstrap";

const DateSelect = () => {
    const {form} = useContext(Context)
    const CustomInput = forwardRef(({ value, onClick }, ref) => (
        <Button onClick={onClick} ref={ref}>
            {value || 'Дата и время'}
        </Button>
    ));
    return (
        <div>
            <DatePicker
                customInput={<CustomInput/>}
                selected={form.date}
                onChange={(date) => form.setDate(date)}
                showTimeSelect
                dateFormat="Pp"
            />
        </div>
    );
};

export default observer(DateSelect);