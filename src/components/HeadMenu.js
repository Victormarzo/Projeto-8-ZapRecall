import logo from "../components/img/logo-small.svg"
export default function HeadMenu(){
    return(
        <div className="headMenu">
            <img src={logo} />
            <p className="logo">ZapRecall</p>
        </div>
    )
}