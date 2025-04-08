import Image from "next/image"
import { Github, Linkedin, Mail } from "lucide-react"
import { Button } from "@/components/ui/button"
import Projects from "@/components/Projects"

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-center p-24'>
      <div className='z-10 max-w-5xl w-full items-center justify-between font-mono text-sm'>
        <div className='flex flex-col items-center gap-8'>
          <Image
            src='/Portfolioimg.jpg'
            alt='Profile Picture'
            width={150}
            height={150}
            className='rounded-full'
          />
          <h1 className='text-4xl font-bold'>Jabari Robinson</h1>
          <p className='text-xl text-center max-w-md'>
            Computer science student passionate about creating beautiful and
            functional web applications.
          </p>
          <div className='flex gap-4'>
            <Button variant='outline' size='icon' asChild>
              <a
                href='https://github.com/robinsonjabari'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Github className='h-4 w-4' />
              </a>
            </Button>
            <Button variant='outline' size='icon' asChild>
              <a
                href='https://www.linkedin.com/in/robinson-jabari/'
                target='_blank'
                rel='noopener noreferrer'
              >
                <Linkedin className='h-4 w-4' />
              </a>
            </Button>
            <Button variant='outline' size='icon' asChild>
              <a href='mailto:jbrobinson15@icloud.com'>
                <Mail className='h-4 w-4' />
              </a>
            </Button>
          </div>
        </div>
        <Projects />
      </div>
    </main>
  )
}
