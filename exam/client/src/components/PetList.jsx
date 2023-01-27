import { Link } from 'react-router-dom';

const PetList = (props) => {
    return (
        <div>
            <table className='table table-hover table-striped table-bordered table-dark'>
                <thead>
                    <tr>
                        <th className='text-primary'>Name</th>
                        <th className='text-primary'>Type</th>
                        <th className='text-primary'>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {props.pets.map((pet, i) => {
                        return (
                            <tr key={i}>
                                <th>{pet.petName}</th>
                                <th>{pet.petType}</th>
                                <th className='action'>
                                    <Link to={`/pet/${pet._id}`} className="text-decoration-none bg-light text-primary rounded px-2 mx-1 ">details</Link>
                                    <Link to={`/pet/${pet._id}/edit`}  className="text-decoration-none text-danger px-3 bg-light mx-1 rounded ">edit</Link>
                                </th>
                            </tr>
                        )
                    })}
                </tbody>
            </table>
        </div>
    )
}
export default PetList;




