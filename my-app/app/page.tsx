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
            src='/Portfolio-img.jpg'
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

        {/* About Me Section */}
        <section className='my-16'>
          <h2 className='text-3xl font-bold mb-6 text-center'>About Me</h2>
          <div className='max-w-3xl mx-auto text-base'>
            <p className='mb-4'>
              Hello! I'm Jabari, a computer science student with a passion for
              web development and software engineering. My journey in tech began
              with the curiosity behind users interaction with technology and
              how code comes together to create interactive software. This
              evolved into a deep interest in creating innovative digital
              experiences.
            </p>
            <p className='mb-4'>
              My skill set encompasses front-end development using React,
              Next.js, and Tailwind CSS, along with a working knowledge of
              back-end development and database management, contributing to my
              understanding of the full-stack environment.
            </p>
            <p>
              Outside of coding, I enjoy a diverse range of interests including
              forex trading and analysis, roller skating, and music production.
              I'm a firm believer in lifelong learning, always seeking new
              technologies and insights from every experience and interaction to
              expand my skillset.
            </p>
          </div>
        </section>

        <Projects />
      </div>
    </main>
  )
}
