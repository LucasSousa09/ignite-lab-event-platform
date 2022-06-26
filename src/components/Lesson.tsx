import { Link, useParams } from 'react-router-dom'

import { isPast, format } from 'date-fns';
import ptBR  from 'date-fns/locale/pt-BR'

import { CheckCircle, Lock } from 'phosphor-react'
import classNames from 'classnames'

interface LessonProps {
    title: string;
    slug: string
    scheduledFor: Date;
    lessonType: 'live' | 'class';
}

export function Lesson({slug, title, scheduledFor, lessonType}:  LessonProps){
    const params = useParams<{slug: string}>()

    const contentReleased = isPast(scheduledFor)
    const availableDateFormatted = format(scheduledFor, "EEEE ' • ' d ' de ' MMMM ' • ' k'h'mm ",{
        locale: ptBR
    })

    const isActiveLesson = slug === params.slug

    return (
        <Link to={`/event/lesson/${slug}`} className='group'>
            <span className="text-gray-300 mb-2 block">
                {availableDateFormatted}
            </span>
            <div className={classNames('border border-gray-600 p-4 rounded group-hover:border-green-500', {
                'bg-green-500': isActiveLesson
            })}>
                <header className="flex justify-between mb-5">    
                        {
                            contentReleased ?
                            <span className={classNames("flex items-center text-sm font-medium gap-2", {
                                "text-blue-500": !isActiveLesson,
                                "text-white": isActiveLesson
                            })}>
                                <CheckCircle size={20}/>
                                Conteúdo liberado                    
                            </span> :
                            <span className="flex items-center text-sm text-orange-500 font-medium gap-2">
                                <Lock/>
                                Em breve
                            </span>
                        }
                    <span className={classNames('text-xs font-medium border text-white px-2 py-[.125rem] rounded', {
                        'border-green-500': !isActiveLesson,
                        'border-white': isActiveLesson
                    })}>
                        {
                            lessonType === 'live' ? 'AO VIVO' : 'AULA PRÁTICA'
                        }
                    </span>
                </header>
                <strong className={classNames( {
                    'text-white': isActiveLesson,
                    'text-gray-200': !isActiveLesson,
                })}>{title}</strong>
            </div>
        </Link>
    )
}