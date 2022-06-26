import { gql, useMutation } from "@apollo/client";
import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../components/Logo";
import { useCreateSubscriberMutation } from "../graphql/generated";

export function Subscribe(){
    const navigate = useNavigate()

    const [name, setName] = useState('')
    const [email, setEmail] = useState('')

    const [createSubscriber, { loading }] = useCreateSubscriberMutation()

    async function handleSubscribe(evt: FormEvent){
        evt.preventDefault()

        await createSubscriber({
            variables: {
                name,
                email
            }
        })

        navigate('/event')
    }

    return (
        <div className='min-h-screen bg-blur bg-cover bg-no-repeat flex flex-col items-center'>
            <div className='max-w-[1100px] w-full flex items-center justify-between mt-20 mx-auto'>
                <div className='max-w-[624px]'>
                    <Logo/>
                    <h1 className='mt-8 text-[2.5rem] leading-tight'>
                        Construa uma 
                        <span className='text-blue-500 font-medium'> aplicação completa </span> 
                        do zero, com 
                        <span className='text-blue-500 font-medium'> React JS</span>
                    </h1>
                    <p>
                        Em apenas uma semana você vai dominar na prática uma das tecnologias mais utilizadas e com alta demanda para acessar as melhores oportunidades do mercado.
                    </p>
                </div>
                <div className='bg-gray-700 p-8 border border-gray-600 rounded'>
                    <strong className='text-2xl mb-6 block'>Inscreva-se gratuitamente</strong>
                    <form onSubmit={handleSubscribe} className='flex flex-col gap-2 w-full'>
                        <input 
                            className='bg-gray-900 text-gray-300 px-5 h-14 rounded' 
                            type="text" 
                            placeholder="Seu nome completo"
                            onChange={evt => setName(evt.target.value)}
                        />
                        <input 
                            className='bg-gray-900 text-gray-300 px-5 h-14 rounded' 
                            type="email"
                            placeholder="Digite seu email"
                            onChange={evt => setEmail(evt.target.value)}
                        />
                        <button
                            className='mt-4 bg-green-500 p-5 uppercase text-white font-medium rounded hover:bg-green-700 transition-colors disabled:opacity-50'
                            type='submit'
                            disabled={loading}
                        > 
                            Garantir minha vaga
                        </button>
                    </form>
                </div>
            </div>
            <img src="/src/assets/code-mockup.png" className='mt-10' alt="" />
        </div>
    )
}