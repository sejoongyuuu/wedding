import React, {useState} from 'react';
import {TextField} from "@mui/material";

export const Modal = (props) => {
    // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
    const {open, close, header, comment, deleteComment} = props;
    const [password, setPassword] = useState("");
    const [invalid, setInvalid] = useState(false);

    const handleInputChange = (e) => {
        setPassword(e.target.value);
    }
    const handleClick = e => {
        if(comment.password === password){
            setInvalid(false);
            deleteComment(comment._id);
            setPassword("");
            close();
        } else {
            setInvalid(true);
        }

    }
    const handleCloseClick = ()=>{
        setPassword("");
        setInvalid(false);
        close();
    }

    return (
        // 모달이 열릴때 openModal 클래스가 생성된다.
        <div className={open ? 'openModal modal' : 'modal'}>
            {open ? (
                <section>
                    <header>
                        {header}
                        <button className="close" onClick={handleCloseClick}>
                            &times;
                        </button>
                    </header>
                    <main> 비밀번호를 입력해주세요.<br/>
                        {invalid && <div>비밀번호가 일치하지 않습니다.</div>}
                        <TextField
                            size={"small"}
                            value={password}
                            onChange={handleInputChange}
                        ></TextField></main>
                    <footer>
                        <button onClick={handleClick}>
                            confirm
                        </button>
                        <button className="close" onClick={handleCloseClick}>
                            close
                        </button>
                    </footer>
                </section>
            ) : null}
        </div>
    );
};


