import { SocialIcons } from "@/components/social-icons"
import Image from "next/image"

export default function AboutPage() {
  return (
    <section className="py-16">
      <div className="container mx-auto animate-in px-4 duration-700 fade-in slide-in-from-bottom-4">
        {/* Section Title */}
        <div className="mb-12 text-center">
          <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
            About Me
          </h1>
        </div>

        <div className="flex flex-col items-center justify-center gap-10">
          <div className="flex size-64 items-center justify-center overflow-hidden rounded-md bg-muted shadow-xl shadow-primary/15">
            <Image
              src="/images/ishant_bhurani.jpg"
              alt="Ishant Bhurani"
              width={256}
              height={256}
            />
          </div>

          <SocialIcons />

          <div className="w-full max-w-xl space-y-4 text-center text-lg text-muted-foreground">
            <p className="text-2xl text-primary">
              Hi, I'm{" "}
              <span className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
                Ishant Bhurani
              </span>
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vel
              consequuntur, pariatur quaerat sapiente sint magni. Similique
              praesentium placeat nesciunt quas nam sequi reiciendis quisquam at
              dolore rerum quidem vero nulla, perspiciatis recusandae libero qui
              suscipit illum asperiores quia nobis maiores repellat debitis? Quo
              nobis delectus nemo recusandae doloribus obcaecati consectetur.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Optio
              dolor sunt repudiandae aperiam fugit quibusdam recusandae, quidem
              praesentium fuga esse dolorum voluptatum alias reprehenderit velit
              maiores iste quae perspiciatis voluptate.
            </p>

            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque,
              quaerat. Ut, beatae. Necessitatibus natus tempore architecto
              consequatur ut? Facilis dignissimos doloremque, deleniti
              consectetur beatae vero fugit velit dolor provident sequi! Maxime
              totam inventore adipisci dicta quas aspernatur optio numquam
              aliquam amet. Quis, non. Harum in dignissimos, animi fuga totam
              esse.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
