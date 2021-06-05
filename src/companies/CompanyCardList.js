import { Card, CardTitle, CardSubtitle } from 'reactstrap';

const CompanyCardList = ({ company }) => {
    const { name, description, /*logoUrl*/ } = company;
    return (<Card className='my-3 p-2 px-4 text-start bg-light' >
        <CardTitle>
            <div className='d-flex justify-content-between'>
                <h4>{name}</h4>
                {/* Logos not found in files */}
                {/* {logoUrl && <img className='align-self-end' src={logoUrl}
                        alt={name} /> */}
                        
            </div>

        </CardTitle>
        <CardSubtitle><small>{description}</small></CardSubtitle>
    </Card>)



}

export default CompanyCardList;