import { GithubLogoIcon, InstagramLogoIcon, LinkedinLogoIcon } from '@phosphor-icons/react'

function Footer() {

    let data = new Date().getFullYear()

    return (
        <>
            <div className='flex justify-center text-white bg-black'>
                <div className='container flex flex-col items-center py-4'>
                    <p className='text-xl font-bold'>
                        Blog Pessoal Iago Willian | Copyright:{' '}
                        {data}
                    </p>
                    <p className='text-lg'>
                        Acesse minhas redes sociais
                    </p>
                    <div className='flex gap-2'>
                        <a href="https://linkedin.com/in/iago-willian-" target="_blank">
                            <LinkedinLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://www.instagram.com/iagowillian?igsh=MTVrbzEwbDVkNzN1MA==" target="_blank">
                            <InstagramLogoIcon size={48} weight='bold' />
                        </a>
                        <a href="https://github.com/IagoWiliian " target="_blank">
                            <GithubLogoIcon size={48} weight='bold' />
                        </a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Footer