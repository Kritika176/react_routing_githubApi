import style from "./Menu.module.css";
export const Menu = ({func}) => {
  return (
    <div className={style.mainNav}>
       <div className={style.menuItem} onClick={() => func("all")}>All</div>
       <div className={style.menuItem} onClick={() => func("html")} >HTML</div>
       <div className={style.menuItem} onClick={() => func("css")}>CSS</div>
       <div className={style.menuItem} onClick={() => func("javascript")}>JAVASCRIPT</div>
    </div>
  )
}

