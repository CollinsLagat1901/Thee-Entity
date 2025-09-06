import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function CtaBanner() {
  return (
    <section className="py-20 lg:py-24">
      <div className="container mx-auto px-4">
        <div className="relative rounded-lg overflow-hidden p-12 text-center bg-gradient-to-r from-primary to-accent shadow-2xl">
          <div className="relative z-10">
            <h2 className="font-headline text-3xl md:text-4xl font-bold text-background">
              Ready to Take Your Business to the Next Level?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-background/80">
              Your success story could be next. Let’s build something futuristic together.
            </p>
            <Button 
              size="lg" 
              className="mt-8 bg-background/20 text-white hover:bg-background/30 backdrop-blur-sm border border-white/20"
              asChild
            >
              <Link href="/#contact">Start Your Project with Us</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
