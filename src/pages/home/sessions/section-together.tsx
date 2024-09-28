export function SectionTogether() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-8 flex flex-col md:flex-row gap-16 items-start">
        <div className="flex-1 md:sticky md:top-[350px]">
          <span className="uppercase text-violet-500 font-medium text-lg sm:text-xl">
            Participe conosco
          </span>


          <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-50">
            Desafie-se, Conecte-se, Impacte
          </h2>


          <p className="mt-4 text-zinc-300 font-light leading-relaxed text-md sm:text-lg">
            Ser parte da Comunidade Sou AmiGU é estar conectado a uma rede de pessoas e 
            organizações que compartilham o desejo de transformar vidas e comunidades. 
            Se você é um jovem talento, um mentor experiente ou uma instituição buscando 
            fazer a diferença, aqui você encontra um espaço para crescer, inovar e causar impacto.
          </p>

        </div>

        <div className="flex-1 ">

          <h1 className="text-lg sm:text-xl md:text-2xl text-zinc-50 font-semibold">
            Quais os benefícios de terceirizar <br /> processos produtivos
            e/ou operacionais?
          </h1>


          <div className="flex flex-col gap-10 mt-10">

            <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
              <div className="absolute -left-5 -top-5 w-10 h-10 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center">
                1
              </div>

              <h2 className="text-zinc-600 leading-relaxed text-md sm:text-lg">
              Participe de nossas maratonas e crie um portfólio que fará você ser 
              visto pelo mercado de outra forma.
              </h2>
            </div>



            <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
              <div className="absolute -left-5 -top-5 w-10 h-10 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center">
                2
              </div>

              <h2 className="text-zinc-600 leading-relaxed text-md sm:text-lg">
              Renove sua carreira, compartilhe seu conhecimento e receba de volta 
              reconhecimento, oportunidades e renda.
              </h2>
            </div>



            <div className="ml-5 relative bg-zinc-100 border-2 border-zinc-200 rounded-md p-5">
              <div className="absolute -left-5 -top-5 w-10 h-10 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center">
                3
              </div>

              <h2 className="text-zinc-600 leading-relaxed text-md sm:text-lg">
              Inscreva sua associação em nossos projetos e maratonas e leve a transformação 
              para sua comunidade.
              </h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}