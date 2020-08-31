import React, { Fragment } from 'react'
import { MDBContainer, MDBBreadcrumb, MDBBreadcrumbItem, } from "mdbreact";
import Header from '../components/Header'
import ColorBoxComponent from '../components/ColorBoxComponent';

export default function Home() {
    return (
        <Fragment>
            <Header />
            <MDBBreadcrumb >
                <MDBBreadcrumbItem><b>Homepage</b></MDBBreadcrumbItem>
            </MDBBreadcrumb>
            <MDBContainer className="mt-0" fluid>
                <ColorBoxComponent />
            </MDBContainer>
        </Fragment>
    )
}
