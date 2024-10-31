import { revalidatePath } from 'next/cache'

export async function GET (request) {
  const searchParams = request.nextUrl.searchParams

  if (searchParams.get('secret') !== process.env.SECRET_TOKEN) {
    return Response.json({ revalidate: false })
  }

  revalidatePath('/(with-navbar)', 'page')
  revalidatePath('/(with-navbar)/[category]', 'page')

  return Response.json({ revalidate: true })
}
