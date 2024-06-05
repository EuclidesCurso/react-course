import style from "./style.module.css"

export default function Header() {
    return (
        <div className={style.containerHeader}>
            <div className={style.descricao}>
                
            <h4 className={style.titulo}>Tagline</h4>
            <h1>Short heading here</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique</p>
            </div>
          

            <div>
            <button>Button</button>

            <button>Button</button>
            </div> 
        </div>
    )
}
