import React, {useContext} from 'react';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Context} from "../index";
import {observer} from "mobx-react-lite";

const DateSelect = () => {
    const {form} = useContext(Context)
    return (
        <div>
            <DatePicker
                selected={form.date}
                onChange={(date) => form.setDate(date)}
                showTimeSelect
                dateFormat="Pp"
            />
        </div>
    );
};

export default observer(DateSelect);