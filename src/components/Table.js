import React from 'react';

const headings = [
    'Lead.No', 
    'Business Name', 
    'Website URL',
    'E-mail ID',
    'Zip Code',
    'Pages',
    'Platform',
    'Status / Actions'
];
const businessDetails = [
    {
        lead:7852,
        business: 'Galtway Marketing',
        url: 'https://www.galtwaymarketing.com',
        mailId: 'info@galtwaymarketing.com',
        zip: 98765,
        pages:8,
        platform: 'Mopro',
        status: 'Queued'
    },
    {
        lead:7853,
        business: 'Dealer Inspire',
        url: 'https://www.dealerinspire.com',
        mailId: 'support@dealerinspire.com',
        zip: 60540,
        pages: 11,
        platform: 'Wordpress',
        status: 'Queued'
    },
    {
        lead:7854,
        business: 'DealerOn, Inc.',
        url: 'https://www.dealeron.com',
        mailId: 'help@dealeron.com',
        zip: 89513,
        pages: 7,
        platform: 'Wordpress',
        status: 'Queued'
    }
];
const Table = () =>{
    
        return(
            <div>
             <table className="table table-striped table-condensed">
                <thead>
                    <tr>
                        { headings.map((head) => {
                            return <td key={head}>{head}</td>
                        })}
                    </tr>
                </thead>
                 <tbody>
                    { businessDetails.map((details) => {
                        return (
                            <tr key={details.lead}>
                                <td key={details.lead}>{details.lead}</td>
                                <td key={details.business}>{details.business}</td>
                                <td key={details.url}><a href="">{details.url}</a></td>
                                <td key={details.mailId}>{details.mailId}</td>
                                <td key={details.zip}>{details.zip}</td>
                                <td key={details.pages}>{details.pages}</td>
                                <td key={details.platform}>{details.platform}</td>
                                <td key={details.status}>{details.status}</td>
                            </tr>
                        )
                    })}
                </tbody>
             </table>
         </div>
        );
    
    }

export default Table;