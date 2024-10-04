// IconsInterface & React.PropsWithChildren<IconsInterface> if we are passing ref, key etc.. 
interface IconsInterface{
    icons:[]
}

export const Icons = (props:IconsInterface) => {
    const {icons} = props;
    return ( 
        <div>
            {icons}
        </div>
    )
}

//we can use above OR either this one
// export const Icons: React.FC<IconsInterface> = ({icons}) => {
//     return ( 
//         <div>
//             {icons}
//         </div>
//     )
// }