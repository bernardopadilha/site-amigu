import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import { ArrowUpRightIcon } from "lucide-react"

interface ProjectsCarouselProps {
  title: string
  description: string
  CTA: string
}

const projectsCarousel: ProjectsCarouselProps[] = [
  {
    title: "AmiGU Resolv",
    description: "Capacitando a próxima geração de líderes digitais. Participe como mentor ou jovem talento e veja seu impacto florescer.",
    CTA: "Saiba Mais"
  },
  {
    title: "Maratona Um Porto para o Futuro",
    description: "Transformando a logística portuária com inovação e inclusão digital. Junte-se à maratona e crie soluções que impactam.",
    CTA: "Participe Agora"
  },
  {
    title: "AmiGU Resolv",
    description: "Empoderando mulheres empreendedoras e herdeiros de negócios tradicionais para o futuro digital. Descubra como participar.",
    CTA: "Explore o Projeto"
  },
]

export function SectionOurProjects() {
  return (
    <section>
      <div className="max-w-6xl mx-auto px-8 flex flex-col py-20 items-center">
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <h2 className="text-4xl font-semibold text-zinc-50">Projetos que Criam Oportunidades Reais</h2>
          <p className="max-w-4xl text-zinc-300">
            Nossos projetos são mais do que iniciativas – são portas para um futuro melhor. 
            Desde capacitar jovens em situação de vulnerabilidade até transformar negócios 
            tradicionais em empreendimentos digitais, cada projeto do Instituto AmiGU é 
            desenhado para gerar impacto sustentável e duradouro.
          </p> 
        </div>

        <Carousel
      opts={{
        align: "start",
      }}
      className="w-full pt-20 lg:max-w-6xl md:max-w-3xl sm:max-w-sm"
    >
      <CarouselContent className="border-none">
        {projectsCarousel.map((carousel, index) => (
          <CarouselItem key={carousel.title} className="md:basis-1/2 lg:basis-1/3 border-none">
            <div className="p-1">
              <Card className="border-2 border-zinc-900">
                <CardContent className="bg-zinc-950 flex rounded-sm flex-col aspect-square items-start justify-between p-6">
                  <Badge className="flex items-center gap-2 text-lg border border-violet-500 rounded-sm bg-transparent hover:bg-transparent">
                    {index + 1} 
                    <ArrowUpRightIcon className="size-6" />
                  </Badge>
                  
                  <h2 className="text-3xl text-zinc-50 font-semibold">{carousel.title}</h2>
                  <p className="text-zinc-300">{carousel.description}</p>

                  <Button className="w-full">{carousel.CTA}</Button>
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="lg:hidden" />
      <CarouselNext className="lg:hidden" />
    </Carousel>
      </div>
    </section>
  )
}