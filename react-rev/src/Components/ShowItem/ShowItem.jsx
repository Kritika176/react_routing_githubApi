import style from "./ShowItem.module.css";
export const ShowItem = ({avatar,name,language,star,gitCount}) => {
  return (
    <div className={style.itemBox}>
        <div >
      <img src = {avatar} alt={""} className={style.image}/>
      </div>
      <h3>{name}</h3>
      <h4>{language}</h4>
      <div className={style.count}>
        <p>{star}</p>
        <p>{gitCount}</p>
      </div>
      
    </div>
  )
}

