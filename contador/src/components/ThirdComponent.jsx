
const verga = () => {
    return 'y te vale verga 3'
}

export const ThirdComponent = ({third}) => {
 return (
        <>
            <p className="verdin">{third}</p>
            <p>{ verga()}</p>
        </>
 )
}