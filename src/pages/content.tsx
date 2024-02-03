import {MagazineBright} from "@/public/icons/magazineBright";

export const Content = () => {
    return(
        <div className={'flex flex-col items-center mx-auto'}>
                <p className={'text-black font-bold text-2xl'}>Журнал Bright</p>
                <div className={'flex flex-col rounded-md bg-amber-50 max-w-96 p-5'}>
                    <a className={'flex justify-start text-blue-700 text-xl pt-5 pb-10'}>Новости</a>
                    <MagazineBright/>
                    <p className={'text-3xl font-bold text-black py-10'}>Превращаем стресс в своего помощника</p>
                    <p>Исследователи Йельского унивирситета заявляют, что люди, которые рассматривают стресс, как
                        возможность личностного, отмечают улучшение качества жизни. Сегодня узнаем, как это работает и
                        как
                        увидеть положительные стороны стресса</p>
                    <button className={'text-blue-700 py-2'}>Читать далее</button>
                </div>
        </div>
    )
}