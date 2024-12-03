import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'
function App() {
  const [count, setCount] = useState(0)
  // let myobj={
  //   username:"asdarsh",
  //   age:23,
  // }
  let newarr=[12,42,5]
  return (
    <> 
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Test</h1>
     <Card username="adashcode" />
     <Card username="akulcode"/>
     
     {/* <figure class="bg-slate-100 rounded-xl p-8 dark:bg-slate-800">
  <img class="w-24 h-24 rounded-full mx-auto" src="https://images.pexels.com/photos/28891272/pexels-photo-28891272/free-photo-of-close-up-of-a-gray-jay-in-rocky-mountain-forest.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load" alt="" width="384" height="512"></img>
  <div class="pt-6 text-center space-y-4">
    <blockquote>
      <p class="text-lg font-medium">
        “Tailwind CSS is the only framework that I've seen scale
        on large teams. It’s easy to customize, adapts to any design,
        and the build size is tiny.”
      </p>
    </blockquote>
    <figcaption class="font-medium">
      <div class="text-sky-500 dark:text-sky-400">
        Sarah Dayan
      </div>
      <div class="text-slate-700 dark:text-slate-500">
        Staff Engineer, Algolia
      </div>
    </figcaption>
  </div>
</figure> */}
   
    </>
  )
}

export default App
