export function SectionReliability() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-8 py-20 md:pvy-28 ">
        <div className="bg-zinc-900 gap-20 border-2 border-zinc-800 p-5 sm:p-10 rounded-md flex flex-col md:flex-row items-center">
          <div className="flex-1 w-full">

            <img
              src="/qualivida/nicole.jpg"
              alt=""
              className="h-[300px] object-cover rounded-lg border-4 border-zinc-800 z-10"
            />

          </div>
          <div className="flex-1">

            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-zinc-50">
              Nossa Missão, Nossa Transparência
            </h2>


            <p className="mt-4 text-zinc-300 font-light leading-relaxed text-sm sm:text-md md:text-lg">
              Transparência e responsabilidade são pilares do Instituto AmiGU. Como uma OSCIP, temos o compromisso de mostrar como cada real investido é utilizado para criar impacto social e transformar vidas. Confira nossos relatórios anuais e auditorias para ver como fazemos isso acontecer.
            </p>

          </div>
        </div>
      </div>
    </section>
  )
}