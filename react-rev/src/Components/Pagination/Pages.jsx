import style from "./Pages.module.css"
export const Pages = ({set,value}) => {
    
  return (
    <div className={style.pageBox}>
      <div className={style.button} onClick={() => {
        if(value>1)
        {
          set(value-1);
        }
      }} >Prev</div>
      <div className={style.button} onClick={() => {
         set(value+1);
      }}>Next</div>
    </div>
  )
}

