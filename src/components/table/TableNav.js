import React, {Component} from 'react';
import Dropdown from '../forms/Dropdown';

const tabHeadings = [
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
    },
    {
        lead:7855,
        business: 'Galtway Marketing',
        url: 'https://www.galtwaymarketing.com',
        mailId: 'info@galtwaymarketing.com',
        zip: 98765,
        pages:8,
        platform: 'Mopro',
        status: 'Queued'
    },
    {
        lead:7856,
        business: 'Dealer Inspire',
        url: 'https://www.dealerinspire.com',
        mailId: 'support@dealerinspire.com',
        zip: 60540,
        pages: 11,
        platform: 'Wordpress',
        status: 'Queued'
    },
    {
        lead:7857,
        business: 'DealerOn, Inc.',
        url: 'https://www.dealeron.com',
        mailId: 'help@dealeron.com',
        zip: 89513,
        pages: 7,
        platform: 'Wordpress',
        status: 'Queued'
    },{
        lead:7858,
        business: 'Galtway Marketing',
        url: 'https://www.galtwaymarketing.com',
        mailId: 'info@galtwaymarketing.com',
        zip: 98765,
        pages:8,
        platform: 'Mopro',
        status: 'Queued'
    },
    {
        lead:7859,
        business: 'Dealer Inspire',
        url: 'https://www.dealerinspire.com',
        mailId: 'support@dealerinspire.com',
        zip: 60540,
        pages: 11,
        platform: 'Wordpress',
        status: 'Queued'
    },
    {
        lead:7860,
        business: 'DealerOn, Inc.',
        url: 'https://www.dealeron.com',
        mailId: 'help@dealeron.com',
        zip: 89513,
        pages: 7,
        platform: 'Wordpress',
        status: 'Queued'
    }
];
class TableNav extends Component {
    constructor(props) {
        super(props);
        this.state = {
            heading: tabHeadings,
            details: businessDetails,
            currentPage: 1,
            detailsPerPage: 3
        }
        this.changePage = this.changePage.bind(this);
        this.changeRowCount = this.changeRowCount.bind(this);
        this.prevPage = this.prevPage.bind(this);
        this.nextPage = this.nextPage.bind(this);
    }

    // change page view
    changePage(e) {
        this.setState({
            currentPage: e.target.id
        })
        console.log(this.state.currentPage);
    }

    // change row count
    changeRowCount(e) {
        this.setState({
            detailsPerPage: e.target.value
        });
        console.log(this.state.detailsPerPage);
    }

    // previous page
    prevPage() {
        this.setState((prevState) => {
            return{
                currentPage: prevState.currentPage - 1,
            }
        })
        console.log(this.state.currentPage);
    }

    // next page
    nextPage() {
        this.setState((prevState) => {
            return{
                currentPage: prevState.currentPage + 1
            }
        })
        console.log(this.state.currentPage);
    }

    render() {
        const {heading, details, currentPage, detailsPerPage} = this.state

        // Displaying current details
        const indexOfLastDetails = currentPage * detailsPerPage;
        const indexOfFirstDetails = indexOfLastDetails - detailsPerPage;
        const currentDetails = details.slice(indexOfFirstDetails, indexOfLastDetails);

        const renderDetails = currentDetails.map((detail, index) => {
            return (
                <tr key={index}>
                    <td key={detail.lead}>{detail.lead}</td>
                    <td key={detail.business}>{detail.business}</td>
                    <td key={detail.url}><a href="">{detail.url}</a></td>
                    <td key={detail.mailId}>{detail.mailId}</td>
                    <td key={detail.zip}>{detail.zip}</td>
                    <td key={detail.pages}>{detail.pages}</td>
                    <td key={detail.platform}>{detail.platform}</td>
                    <td key={detail.status}>{detail.status}</td>
                </tr>
            )
        });

        // Displaying page numbers
        const pageNumbers = [];
        for (let i=1; i <= Math.ceil(details.length/detailsPerPage); i++) {
            pageNumbers.push(i);
        }

        const renderPageNumber = pageNumbers.map((number) => {
            return(
                <li key={number} id={number} onClick={this.changePage} >{number}</li>
            )
        });

        // Rows per page
        const totalItems = [];
        for (let i=1; i <= details.length; i++) {
            totalItems.push(i);
        }
        const rowsPerPage = totalItems.map((items) => {
            return <option key={items} value={items}>{items}</option>
        })

        return(
            <div>
                <h2>Table with Navigation</h2> <br />
                <table className="highlight responsive-table">
                    <thead>
                        <tr>
                            { heading.map((head) => {
                                return <td key={head}>{head}</td>
                            }) }
                        </tr>
                    </thead>
                    <tbody>
                        {renderDetails}
                    </tbody>
                    <tfoot>
                            <tr>
                                <td colSpan='8'>
                                    <div className='table__nav'>
                                        <div className='table__nav__total-page'>
                                            <ul>
                                                {renderPageNumber}
                                            </ul>
                                        </div>
                                        <div className='table__nav__select-items'>
                                            <ul>
                                                <li>Rows per page</li>
                                                <li>
                                                    <select onChange={this.changeRowCount} value={detailsPerPage}>{rowsPerPage}</select>
                                                    <Dropdown title={detailsPerPage} listItem= {totalItems}/>
                                                </li>
                                            </ul>
                                        </div>
                                        <p><span className='color-primary'>{currentPage}</span>-{detailsPerPage} of {details.length}</p>
                                        <div className='table__nav__prev-next'>
                                            <ul>
                                                <li>
                                                    <button disabled={currentPage === 1} onClick={this.prevPage}>
                                                        <i className='icon-ArrowLeft'></i>
                                                    </button>
                                                </li>
                                                <li>
                                                    <button disabled={currentPage === pageNumbers.length} onClick={this.nextPage}>
                                                        <i className='icon-ArrowRight'></i>
                                                    </button>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </td>
                            </tr>
                        </tfoot>
                </table>
                
                
                <Dropdown title={detailsPerPage} listItem= {totalItems}/>
            </div>
        )
    }
    
}
export default TableNav;
