import Container from "@/components/ui/container"

export default async function Page({ params, }: { params: Promise<{ slug: string }> }) {
  const slug = (await params).slug
  return (
    <Container className="">
      <div>My Post: {slug}</div>
    </Container>
  )
}