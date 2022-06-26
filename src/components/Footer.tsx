import { Rocketseat } from './Rocketseat'

export function Footer(){
    return (
        <footer className='block px-6'>
            <div className='flex flex-1 border-t border-gray-600 py-6 justify-between item'>

                <span className='flex items-center gap-6 text-gray-300'> <Rocketseat/> Rocketseat - Todos os direitos reservados</span>
                <span className='text-gray-300'>Políticas de privacidade</span>
            </div>
        </footer>
    )
}