/* eslint-disable react/prop-types */
const AllCharacterCard2 = (props) => {
    return (
        <>
            <div className='card-container'>
                <img width="250" src={props.image} />
                <h2>{props.title}</h2>
                <p>{props.detail}</p>
            </div>
        </>
    )
}
export default AllCharacterCard2;