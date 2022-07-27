import * as yup from 'yup';

export const Validation = yup.object().shape({
    name: yup.string().required("이름을 입력해주세요."),
    password: yup.string().required("비밀번호를 입력해주세요."),
    content: yup.string().required("내용을 입력해주세요."),
})

