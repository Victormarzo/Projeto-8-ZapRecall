import logo from "../components/img/logo-small.svg"
export default function HeadMenu(){
    return(
        <div class="headMenu">
            <img src={logo} />
            <p class="logo">ZapRecall</p>
        </div>
    )
}