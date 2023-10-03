import { useLoaderData } from "react-router-dom"



function Github() {
    
    const data = useLoaderData()
    return (
        <div className='text-center m-4 bg-orange-200 border-1   rounded-lg text-white p-4 text-lg'>
          <div className="flex"><img src={data.avatar_url} alt="Git picture" width={200} height={100}/> 
          
          <div className="flex flex-wrap m-4  items-start flex-col justify-center font-sm text-gray-700">
          <span className="inline-block">Name :- {data.name}</span>
          <span className="inline-block start-0">Profile Link :- {data.url}</span>
          <span className="inline-block start-0">public Repos :- {data.public_repos}</span>
         
          </div>
          </div>
        </div>
        
      )
    }
    
    export default Github
    
    export const githubInfoLoader = async () => {
        const response = await fetch('https://api.github.com/users/NileshJain82')
        return response.json()
    }

    // url,name, repos_url
