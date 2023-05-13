import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';
import { Context } from "..";
import { Card, ListGroup } from "react-bootstrap";
import {Row} from 'react-bootstrap'

export const BrandsPanel = observer(() => {
    const {gadget} = useContext(Context);
    return(<Row className="d-flex">
        {gadget.brands.map((brand) =>
            <Card 
                key={brand.id} 
                onClick={() => gadget.setSelectedBrand(brand)}
                border={brand.id === gadget.selectedBrand.id ? 'danger' : 'success'}
                style={{cursor: 'pointer'}}
                >
                {brand.name}
            </Card>
        )}
    </Row>)
})