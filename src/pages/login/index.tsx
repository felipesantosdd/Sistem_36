import { FormInput, LoginForm } from "./style";
import * as yup from 'yup'
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup'
import { ButtonText, Title, Toast } from "../../styles/fonts";
import { ILoginData } from "../../interface";
import { useContext } from "react";
import { Context } from "../../context";
import { Button } from "../../components/buttons/style";

export function LoginPage() {

    const { login } = useContext(Context)

    const schema = yup.object().shape({
        email: yup.string().required('Email Obrigatorio').email('Email Invalido'),
        password: yup.string().required('Senha Obrigatoria')
    })

    const { register, handleSubmit, formState: { errors } } = useForm<ILoginData>({
        resolver: yupResolver(schema)

    })

    const onSubmit = (data: ILoginData) => {
        login(data)
    }

    return (
        <LoginForm autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
            <Title>Login</Title>
            <FormInput type="text" placeholder='Email' {...register("email")} />
            {errors?.email?.message && <Toast>{`${errors?.email.message}`}</Toast>}
            <FormInput type="password" placeholder='senha' {...register("password")} />
            {errors?.password?.message && <Toast>{`${errors?.password?.message}`}</Toast>}
            <Button type='submit'><ButtonText>Login</ButtonText></Button>
        </LoginForm>
    )
}