import Row from "./transrow"
function Table({transaction}){


    return(
        <>

        <table className="table table-light">
            <thead>
                <tr>
                    <th>Date</th>
                    <th>Description</th>
                    <th>Category</th>
                    <th>Amount</th>
                    
                </tr>
            </thead>
            <tbody>
                <Row transactions={transaction}/>
            </tbody>    
        </table>
        </>
    )

}


export default Table
