import {Card, CardContainer, Img, Title, Info, GitLink, Span, Button, Logo, LogosContainer, PopOver} from "./styles"
import GitHubIcon from '@material-ui/icons/GitHub';
import logos from "./logos"

const View = ({backgroundColor, changeBkColor, color, dark, opacity, setSide, side, imgOp, setPopOver, popOver, setStage})=>{
    const src="https://scontent.fscl1-1.fna.fbcdn.net/v/t1.0-9/10269441_10152381709983025_4868912677698078594_n.jpg?_nc_cat=102&ccb=2&_nc_sid=174925&_nc_eui2=AeEtS7IbfMN9cgHhbU-8PbYi3OsZzRWYSB_c6xnNFZhIH5Gx-PJkoMpXFDc25d-tYLo&_nc_ohc=fD6dOQJZzHYAX8bMAA4&_nc_ht=scontent.fscl1-1.fna&oh=5c3d795939dab3c58d524df2d5cdd151&oe=5FEE7883";
return(
    <CardContainer bkColor={backgroundColor} color={color} onClick={changeBkColor} style={side?{ transform: "scaleX(-1)"}:{}}>

        <Card bkColor={dark?"#3c3c3c":"#cfcfcf"} hoverBkColor={dark?"#414141":"#d5d5d5"} style={side?{ transform: "scaleX(-1)"}:{}}>
            {!side?
            <Img src={src} opacity={imgOp}/>:
            <Title position={"absolute;"} marginTop={"-35vh;"}>'cause I write in <Span>Javascript <br/></Span> at the moment</Title>
            }{!side?
            <Title opacity={opacity}>I love to make <Span>Stuff<br/> </Span> for the web</Title>:
            <></>}
            {!side?
            <Info opacity={opacity} marginTop={"3vh;"}>I'm a coder based on Santiago de Chile. I'm passioned about my work, and like when things get done well.</Info>:
            <Info position={"absolute;"} marginTop={"-25vh;"}>This are the<Span>libraries</Span> I've used</Info>
            }
            <LogosContainer>
            {!side?<></>:
            
            logos.map((e, i)=>{
                return (
                    <a target="_blank" rel="noreferrer" href={e.href}  key={i}>
                    <Logo src={e.url} objFit={e.fit} key={e+i}/>
                    </a>
                    )
            })
            }
            </LogosContainer>
                {!side?
                <></>:
                <Info shadow={dark?"#f3f3f3":"#3f3f3f"} position={"absolute;"} marginTop={"25vh;"}><Span>and I'm just starting</Span>...</Info> 
                }
            <GitLink onPointerEnter={()=>setPopOver(true)} onPointerLeave={()=>setPopOver(false)}
             color={color} href={side? "https://github.com/ftaboada/ftaboada":"https://github.com/ftaboada"} rel="my Github page" target="_blank"><GitHubIcon style={{fontSize:"35px"}}/></GitLink>
            {popOver?<PopOver>{!side?"My git account":"Take a look at the code"}</PopOver>:<></>}
            <Button onClick={!side?()=>setSide(!side):()=>setStage([false,false, true])}
            bkColor={dark?"#3c3c3c":"#cfcfcf"}
            color={color}
            opacity={opacity}
                >{!side?"Wanna know how?":"Contact me"}</Button>
        </Card>
    </CardContainer>
)
}

export default View