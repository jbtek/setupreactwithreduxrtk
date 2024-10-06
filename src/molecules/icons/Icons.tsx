import Icon from "../../common/icon/Icon";

// IconsInterface & React.PropsWithChildren<IconsInterface> if we are passing ref, key etc.. 
interface IconsInterface{
    icons:Icon[]
}

interface Icon {
    title:string
    id:string
    icon:string
}

const Icons = (props:IconsInterface) => {
    const {icons} = props;
    return ( 
            <ul>
            {
                icons.map(val => (
                        <Icon {...val}/>
                    )
                )
            }
            
        </ul>
    )
}

export default Icons

//we can use above OR either this one
// export const Icons: React.FC<IconsInterface> = ({icons}) => {
//     return ( 
//         <div>
//             {icons}
//         </div>
//     )
// }