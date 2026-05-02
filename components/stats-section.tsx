import { Users, Calendar, Recycle, MapPin } from "lucide-react"

const stats = [
  { value: "30+", label: "Mitarbeiter", icon: Users },
  { value: "30+", label: "Jahre Erfahrung", icon: Calendar },
  { value: "45K", label: "Tonnen/Jahr Kapazität", icon: Recycle },
  { value: "2", label: "Standorte", icon: MapPin },
]

export function StatsSection() {
  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-primary">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-12">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-white/10 mx-auto mb-2 sm:mb-3 group-hover:bg-white/20 transition-colors">
                <stat.icon className="w-5 h-5 sm:w-6 sm:h-6 text-primary-foreground" />
              </div>
              <p className="text-2xl sm:text-3xl lg:text-4xl font-bold text-primary-foreground">
                {stat.value}
              </p>
              <p className="mt-1 text-xs sm:text-sm text-primary-foreground/70">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
