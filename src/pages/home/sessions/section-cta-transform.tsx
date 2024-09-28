import { Button } from "@/components/ui/button";

export function SectionCtaTransform() {
  return (
    <section className="bg-gradient-to-r from-violet-950 via-violet-500 to-violet-950">
      <div className="max-w-6xl mx-auto px-8 flex items-center justify-between py-6">
        <div>
          <h1 className="text-2xl text-zinc-50">Veja como você pode fazer parte dessa transformação</h1>
          <p className="text-zinc-300">Deserunt exercitation culpa amet voluptate sit ex id cupidatat sunt deserunt.</p>
        </div>

        <Button className="bg-transparent border rounded-none hover:bg-zinc-50 hover:text-zinc-700 border-zinc-50">Como fazer parte</Button>
      </div>
    </section>
  )
}