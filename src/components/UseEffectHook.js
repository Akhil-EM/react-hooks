import React,{useState,useEffect} from "react";
export  function UseEffectHook() {
  const [resourceType,setResourceType] = useState('posts');
  const [items,setItems] = useState([]);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  },[resourceType])//[] empty array runs only once
       //[resourceType] runs whenever resourceType changes

  function setPosts() {
    setResourceType('posts');
  }
  function setUsers(){
    setResourceType('users');
  }
  function setComments() {
    setResourceType('comments');
  }
  return (
    <div>
        <div style={{display:'flex'}}>
            <button onClick={setPosts}>posts</button>
            <button onClick={setUsers}>users</button>
            <button onClick={setComments}>contacts</button>
        </div>
        <h1>{resourceType}</h1>
        {
            items.map((item,key)=>
                <pre key={key}>
                    {JSON.stringify(item)}
                </pre>)
        }
    </div>
  )
}



export function WindowWidth() {
    const [windowWidth,setWindowWidth] = useState(window.innerWidth);

    function handleResize() {
        setWindowWidth(window.innerWidth)
    }
    useEffect(()=>{
        window.addEventListener('resize',handleResize);

        return ()=> {
            //component unmount code here
            //removes the event listener
            window.removeEventListener('resize',handleResize);
        }
    },[])

    return(
        <div>
            <p>{windowWidth}</p>
        </div>
    );
}