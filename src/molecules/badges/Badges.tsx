// IconsInterface & React.PropsWithChildren<IconsInterface> if we are passing ref, key etc.. 
interface BadgesInterface{
    badges?:[]
}

const Badges:React.FC<BadgesInterface> = (props:BadgesInterface) => {
    const {badges} = props;
    return ( 
        <div>
            {badges}
        </div>
    )
}

export default Badges;