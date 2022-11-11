import Link from "next/link"

 function Home() {
  return (
    <div className='home'>
     <h1>This is the Home page</h1>
     <Link href='/products'>Go to products</Link> 
     <br></br>
     <Link href='/about'>Go to About</Link>
    </div>
  )
}

export default Home
