export default function Testimonials() {
    return (
        <section>
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6 ">
                <div className="mx-auto max-w-screen-md text-center mb-8 lg:mb-16">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Depoimentos</h2>
                    <p className="font-light text-gray-500 lg:mb-16 sm:text-xl">Além do encaminhamento o Projeto Primeiro Emprego dá toda orientação e assessoria tanto ao jovem como à empresa concedente do estágio. Confira o depoimento de alguns de nossos jovens encaminhados ao mercado de trabalho.</p>
                </div>
                <div className="grid gap-8 mb-6 lg:mb-16 md:grid-cols-2">
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex">
                        <iframe src="//www.youtube.com/embed/5ahO7jBlOhU" width="100%" height="300px" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
                    <iframe src="//www.youtube.com/embed/ZbeJpdNEaso" width="100%" height="300px" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
                    <iframe src="//www.youtube.com/embed/bxRcvxSuYtc" width="100%" height="300px" allowFullScreen>
                        </iframe>
                    </div>
                    <div className="items-center bg-gray-50 rounded-lg shadow sm:flex ">
                    <iframe src="//www.youtube.com/embed/EKgffmsDCxo" width="100%" height="300px" allowFullScreen>
                        </iframe>
                    </div>
                </div>
            </div>
        </section>
    )
}