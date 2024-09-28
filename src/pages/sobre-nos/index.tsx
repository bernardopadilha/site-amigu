import { Heart } from "lucide-react";

export function About() {
  return (
    <main>

      {/* Seção de banner */}
      <section className="py-10 h-[45rem] bg-hero-banner-about bg-no-repeat bg-center bg-cover pt-24">
        <div className="flex items-center justify-center w-full h-full">
          <div className="flex flex-col items-center justify-center max-w-4xl mx-auto ">
            <span className="bg-violet-600 border-4 border-violet-700 text-white px-4 rounded-full animate-bounce py-1 flex items-center">
              <Heart className="size-4 mr-2 fill-white" />
              Transformando vidas
            </span>

            <h1 className="text-5xl text-center font-semibold text-white mt-3">
              Nossa Missão Transformar <br /> Vidas, Construir o Futuro{" "}
            </h1>

            <p className="text-lg text-zinc-300 mt-2 max-w-xl text-center">
              Descubra a história e os valores que impulsionam o Instituto AmiGU a criar
              oportunidades e mudar realidades em todo o Brasil e no mundo.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-zinc-900 border-zinc-800 py-10 border-b-2">
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-10">
          <div className="flex items-center justify-between gap-14">
            <div className="flex-1 w-full">
              <img
                alt="Imagem"
                src="/imagens-de-evento/todas-as-pessoas-do-porto.jpg"
                className="aspect-video object-cover rounded-lg border-4 border-zinc-800 z-10"
              />
            </div>

            <div className="flex-1 flex flex-col items-start gap-4">
              <div>
                <span className="text-violet-500 text-sm font-semibold uppercase ">
                  Nossa Missão e Visão
                </span>
                <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                  O Que Nos Move
                </h2>
              </div>
              <p className="text-zinc-400 text-lg text-justify">
                No Instituto AmiGU, acreditamos que o verdadeiro poder da transformação
                está nas pessoas. Nossa missão é clara capacitar comunidades em situação
                de vulnerabilidade, empoderando jovens, mulheres e microempreendedores para
                que possam alcançar seu pleno potencial. Fazemos isso através da educação,
                da inovação tecnológica, e de projetos que geram impacto social sustentável.
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center justify-between gap-5">
            <div className="flex-1 flex flex-col border-l-4 pl-4 border-violet-500 items-start gap-4">
              <div>
                <h2 className="text-3xl text-zinc-50 mt-1 tracking-tight">
                  Visão
                </h2>
              </div>
              <p className="text-zinc-400 text-lg">
                Ser inspiração global na promoção da inclusão digital e no desenvolvimento
                humano, inspirando pessoas e organizações a se unirem por um mundo mais
                justo e igualitário.
              </p>
            </div>
            <div className="grid grid-cols-4 gap-2 mt-10">
              <div className="hover:scale-[.98] transition-all ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="absolute -left-5 -top-5 w-10 h-10 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center">
                  1
                </div>

                <h2 className="text-zinc-50 text-xl">Inclusão</h2>

                <p className="text-zinc-300 leading-relaxed">
                  Acreditamos que todas as pessoas merecem oportunidades iguais de
                  crescimento e sucesso.
                </p>
              </div>

              <div className="hover:scale-[.98] transition-all ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="absolute -left-5 -top-5 w-10 h-10 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center">
                  2
                </div>

                <h2 className="text-zinc-50 text-xl">Inovação</h2>

                <p className="text-zinc-300 leading-relaxed">
                  Usamos a tecnologia para abrir novas portas e criar soluções que
                  transformam vidas.
                </p>
              </div>

              <div className="hover:scale-[.98] transition-all ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="absolute -left-5 -top-5 w-10 h-10 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center">
                  3
                </div>

                <h2 className="text-zinc-50 text-xl">Sustentabilidade</h2>

                <p className="text-zinc-300 leading-relaxed">
                  Nossas ações são projetadas para ter um impacto duradouro, beneficiando
                  tanto as comunidades quanto o planeta.
                </p>
              </div>

              <div className="hover:scale-[.98] transition-all ml-5 relative bg-zinc-800 border-2 border-zinc-700 rounded-md p-5">
                <div className="absolute -left-5 -top-5 w-10 h-10 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center">
                  4
                </div>

                <h2 className="text-zinc-50 text-xl">Transparência</h2>

                <p className="text-zinc-300 leading-relaxed">
                  Agimos com clareza e responsabilidade, prestando contas de todas as
                  nossas ações e recursos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-zinc-900 bg-background bg-center bg-cover bg-no-repeat">
        <div className="max-w-7xl mx-auto px-8 flex flex-col md:flex-row gap-16 items-start">
          <div className="flex-1 md:sticky md:top-[350px]">
            <span className="uppercase text-violet-500 font-medium">
              A História de Gustavo e o Poder da Metodologia Hackathon
            </span>

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-50">
              Como o Luto Transformou-se em Legado: A Inspiração por Trás do Instituto AmiGU
            </h2>

            <p className="mt-4 text-zinc-300 font-light leading-relaxed text-md sm:text-lg">
              A criação do Instituto AmiGU foi profundamente influenciada por uma perda pessoal
              significativa na vida de Marco Riveiros. Em 2016, Marco perdeu tragicamente seu
              sobrinho Gustavo, um jovem com um futuro promissor. Essa perda devastadora levou
              Marco a buscar uma forma de transformar sua dor em algo positivo, que pudesse
              impactar outras vidas.
            </p>
          </div>

          <div className="flex-1 ">
            <div className="flex flex-col gap-10 mt-10">
              <div className="flex items-start">
                <div className=" w-10 h-10 shrink-0 mr-4 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center" />
                <div>
                  <h2 className="text-zinc-50 leading-relaxed text-xl">
                    Uma Perda Inesperada
                  </h2>
                  <p className="text-zinc-300 leading-relaxed">
                    Gustavo foi um jovem que, apesar de seu potencial, teve sua vida interrompida 
                    prematuramente. A dor dessa perda foi imensa para Marco, que decidiu honrar a 
                    memória de seu sobrinho de uma maneira que refletisse os valores e os sonhos 
                    que Gustavo representava.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className=" w-10 h-10 shrink-0 mr-4 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center" />
                <div>
                  <h2 className="text-zinc-50 leading-relaxed text-xl">
                    Uma Perda Inesperada
                  </h2>
                  <p className="text-zinc-300 leading-relaxed">
                    Gustavo foi um jovem que, apesar de seu potencial, teve sua vida interrompida 
                    prematuramente. A dor dessa perda foi imensa para Marco, que decidiu honrar a 
                    memória de seu sobrinho de uma maneira que refletisse os valores e os sonhos 
                    que Gustavo representava.
                  </p>
                </div>
              </div>

              <div className="flex items-start">
                <div className=" w-10 h-10 shrink-0 mr-4 bg-violet-500 text-white rounded-full text-2xl flex items-center justify-center" />
                <div>
                  <h2 className="text-zinc-50 leading-relaxed text-xl">
                    Uma Perda Inesperada
                  </h2>
                  <p className="text-zinc-300 leading-relaxed">
                    Gustavo foi um jovem que, apesar de seu potencial, teve sua vida interrompida 
                    prematuramente. A dor dessa perda foi imensa para Marco, que decidiu honrar a 
                    memória de seu sobrinho de uma maneira que refletisse os valores e os sonhos 
                    que Gustavo representava.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
