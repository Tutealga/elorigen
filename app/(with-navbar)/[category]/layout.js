import { CategoryTitle } from "@/utils/CategoryTitle"

export async function generateMetadata({ params }) {
    const { category } = params
  
    const data = await CategoryTitle({ category })
   
    return {
      title: data.metatitle || data.title,
      description: data.description,
    }
  }

export default function RootLayout ({ children }) {
    return (
        <>
        {children}
        </>
    )
  }