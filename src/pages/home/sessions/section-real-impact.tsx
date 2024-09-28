import { QuoteIcon } from "lucide-react";

export function SectionRealImpact() {
  return (
    <section>
      <div className="pb-20 max-w-6xl mx-auto px-8">
        <div className="flex items-center justify-between">
          <div className="flex-1 flex flex-col items-start gap-4">
            <div>
              <span className="text-violet-500 font-semibold uppercase ">Transformando Vidas</span>
              <h2 className="text-4xl text-zinc-50 mt-1">Seu Apoio Transforma <br /> Vidas e Comunidades</h2>
            </div>
            <p className="text-zinc-300">
              No Instituto AmiGU, acreditamos que o verdadeiro impacto começa
              com uma pequena faísca – e essa faísca pode vir de você. Desde 2019,
              capacitamos mais de 88 mil pessoas, conectamos 6 mil famílias a novas oportunidades
              e realizamos mais de 40 eventos que transformaram vidas e comunidades inteiras.
              E com sua ajuda, podemos ir ainda mais longe.
            </p>
          </div>

          <div className="flex-1 flex flex-col items-start gap-4">
            <div className="bg-zinc-900 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
              <QuoteIcon className="text-violet-500 fill-violet-500" />

              <p className="text-zinc-300">
                Ser uma Mantenedora do Instituto AmiGU nos permitiu ver de perto como nossos
                recursos estão transformando realidades.
              </p>

              <h2 className="text-zinc-500">- Executivo da Resolv</h2>
            </div>

            <div className="bg-zinc-900 p-4 rounded-lg flex flex-col items-start gap-2 hover:scale-[.98] transition-all">
              <QuoteIcon className="text-violet-500 fill-violet-500" />

              <p className="text-zinc-300">
                Participar do Porto Hack Santos mudou minha vida. Agora, tenho um portfólio
                real e oportunidades de emprego que nunca imaginei.
              </p>

              <h2 className="text-zinc-500">- Lucas, Competidor da Maratona</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}