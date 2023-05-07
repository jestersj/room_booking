import React, {useContext} from 'react';
import {Form} from "react-bootstrap";
import {observer} from "mobx-react-lite";
import {Context} from "../index";

const CommentTextarea = observer(() => {
    const {form} = useContext(Context)
    return (
        <Form.Control
            as='textarea'
            rows={3}
            placeholder='Комментарий'
            value={form.comment}
            onChange={(e) => form.setComment(e.target.value)}
        />
    );
});

export default CommentTextarea;