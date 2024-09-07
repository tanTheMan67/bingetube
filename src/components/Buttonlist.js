import Button from "./Button";

const Buttonlist = ()=>{
    return(
<div className="flex ">
    <Button name="All"/>
    <Button name="Music"/>
    <Button name="Live"/>
    <Button name="News"/>
    <Button name="Football"/>
    <Button name="Sitcoms"/>
</div>
    );
}
export default Buttonlist;