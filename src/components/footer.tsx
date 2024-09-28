import { format } from "date-fns";
import { Facebook, Instagram, Linkedin } from "lucide-react";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-zinc-800">
      <div className="bg-zinc-700">
        <div className="container py-6 lg:py-4">
          <div className="max-w-6xl mx-auto px-8 flex flex-col lg:flex-row lg:items-center gap-9">
            <img
              src="/logo-amigu-branco.png"
              alt="Logo Instituto Amigu"
              width={120}
              height={80}
            />

            <p className="text-zinc-200 text-sm lg:text-md font-medium">
              Nossa missão é impulsionar o sucesso de nossos clientes,
              construindo parcerias sólidas e entregando projetos que
              realmente fazem a diferença. Junte-se a nós na jornada de
              transformação digital e descubra o que é possível quando a
              velocidade, a qualidade e a inovação se unem
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-8 py-14 grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-4">

        <div className="flex items-center justify-center">
          <div className="text-center lg:items-left lg:text-left">
            <h1 className="text-xl text-zinc-200 font-semibold">Menu</h1>

            <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
              <button
                type="button"
                title="Início"
                className="hover:ml-2 transition-all"
              >
                Início
              </button>
              <button
                type="button"
                title="Sobre"
                className="hover:ml-2 transition-all"
              >
                Sobre
              </button>
              <button
                type="button"
                title="Serviços"
                className="hover:ml-2 transition-all"
              >
                Serviços
              </button>
              <button
                type="button"
                title="Contato"
                className="hover:ml-2 transition-all"
              >
                Contato
              </button>
            </div>
          </div>
        </div>



        <div className="flex items-center justify-center">
          <div className="text-center lg:items-left lg:text-left">
            <h1 className="text-xl text-zinc-200 font-semibold">
              Redes sociais
            </h1>

            <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
              <Link
                to="/"
                target="_blank"
                title="Clique para ir ao nosso Instagram"
                className="flex items-center gap-2 hover:ml-2 transition-all"
              >
                <Instagram size={20} />
                Instagram
              </Link>
              <Link
                to="/"
                target="_blank"
                title="Clique para ir ao nosso Facebook"
                className="flex items-center gap-2 hover:ml-2 transition-all"
              >
                <Facebook />
                Facebook
              </Link>
              <Link
                to="/"
                target="_blank"
                title="Clique para ir ao nosso WhatsApp"
                className="flex items-center gap-2 hover:ml-2 transition-all"
              >
                <Linkedin />
                Linkedin
              </Link>
            </div>
          </div>
        </div>



        <div className="flex items-center justify-center">
          <div className="text-center lg:items-left lg:text-left">
            <h1 className="text-xl text-zinc-200 font-semibold">
              Contato
            </h1>
            <div className="flex flex-col gap-2 items-center lg:items-start mt-4 text-zinc-200">
              <Link
                to="/"
                target="_blank"
                title="Clique para ir ao nosso E-mail"
                className="hover:ml-2 transition-all"
              >
                E-mail
              </Link>
              <Link
                to="/"
                target="_blank"
                title="Clique para ir ao nosso WhatsApp"
                className="hover:ml-2 transition-all"
              >
                WhatsApp
              </Link>
            </div>
          </div>
        </div>

      </div>


      <div className="w-full py-4 flex flex-col lg:flex-row justify-center items-center text-white text-xs border-t border-t-zinc-700">
        @{format(new Date(), 'yyyy')} Instituto AmigGu | Todos os direito reservados
        <span className="ml-1">
          <Link
            target="_blank"
            to="/"
            className="underline underline-offset-2"
          >
            {' '}
            Instituto AmiGu
          </Link>
        </span>
      </div>

    </footer>
  )
}