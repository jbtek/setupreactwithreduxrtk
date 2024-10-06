const Icon = (props: { title: string, icon: string, id: string }) => {
    return (
            <div className="icon">
                <img loading="lazy" src={`${process.env.REACT_APP_ICON_URL}${props.icon}.png`}/>
            </div>
    )
}

export default Icon;