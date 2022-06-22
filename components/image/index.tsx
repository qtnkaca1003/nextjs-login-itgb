interface IImage{
    src:string,
    alt:string
}
const Image =(PropsImage: IImage)=>{
    return(
        <img src={PropsImage.src} alt={PropsImage.alt}/>
    )
}
export default Image