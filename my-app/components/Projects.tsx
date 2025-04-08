import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

const projects = [
  {
    title: "Project 1",
    description: "A brief description of project 1",
    link: "#",
  },
  {
    title: "Project 2",
    description: "A brief description of project 2",
    link: "#",
  },
  {
    title: "Project 3",
    description: "A brief description of project 3",
    link: "#",
  },
]

export default function Projects() {
  return (
    <section className='my-16'>
      <h2 className='text-3xl font-bold mb-8 text-center'>Projects</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {projects.map((project, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>{project.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}
