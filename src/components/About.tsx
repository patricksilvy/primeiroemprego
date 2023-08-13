import Image from "next/image";

export default function About() {
    return (
        <section className="">
            <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                <Image className="mb-4 w-full rounded-lg" src="/men.png" width={900} height={600} alt="Homem" />
                <div className="font-light text-gray-500 sm:text-lg">
                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900">Quer entrar no mercado de trabalho como estagiário ou menor aprendiz?</h2>
                    <p className="mb-4">
                        O Projeto Meu Primeiro Emprego é uma iniciativa não governamental que tem como principal objetivo facilitar o ingresso do jovem estudante no mercado de trabalho como estagiário ou menor aprendiz.
                    </p>
                    <p>
                        Se você tem 14 anos ou mais, pode trabalhar como menor aprendiz ou se você tem mais de 16 anos e está devidamente matriculado no ensino regular, pode começar sua carreira profissional como um estagiário. Clique no botão acima, preencha o seu cadastro e aguarde nosso contato.
                    </p>
                </div>
            </div>
        </section>

    )
}