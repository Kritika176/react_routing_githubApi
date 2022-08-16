import style from './AllItems.module.css';
import { Menu } from '../Menu/Menu';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { ShowItem } from '../ShowItem/ShowItem';
import { Pages } from '../Pagination/Pages';
export const AllItems = () => {
    const [allItems, setAllItems] = useState("");
    const [page,setPage] = useState(0);
    const [item,setItem] = useState([]);
    const [load,setLoad] = useState();
 console.log("p",page);
    useEffect(() => {
        setLoad(true);
        axios.get(`https://api.github.com/search/repositories?q=stars:%3E1+language:allhttps://api.github.com/search/repositories?q=stars:%3E1+language:${allItems}&page=${page}&per_page=10`)
        .then(res => {
            if(allItems === "html"|| "css" || "javascript")
            {
              const data = res.data.items.sort((a,b) => b.stargazers_count - a.stargazers_count);
              console.log("d",data)
              setItem(data);
              setLoad(false);
            }
            else{
                setItem(res.data.items);
                setLoad(false);
            }
            })
        .catch(err => console.log(err.message))
    },[allItems,page])
  return (
    <div className={style.mainDiv}>
     <Menu func={setAllItems}></Menu>
    <div className={style.itemDiv}>
        {load?<p>Loading..........</p>:""}
      {
          
          item.map(e => <ShowItem avatar={e.owner.avatar_url} name = {e.name} language={e.language} key={e.id} star={e.watchers_count} gitCount={e.forks_count}></ShowItem>)
      } 
        
      </div>
      <Pages set = {setPage} value={page}></Pages>
    </div>
  )
}

