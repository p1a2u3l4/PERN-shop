import React, { useContext } from "react";
import { observer } from 'mobx-react-lite';
import { Context } from "..";
import { ListGroup } from "react-bootstrap";

export const TypeBar = observer(() => {
    const {gadget} = useContext(Context);
    return(<div>
        <ListGroup className="list-group">
            {gadget.gadgetTypes.map((type)=>
            <ListGroup.Item
                style={{cursor: 'pointer'}}
                active={type.id === gadget.selectedType }
                onClick={() => {gadget.setSelectedType(type.id)}} 
                key={type.id}>{type.name}
            </ListGroup.Item>)}
        </ListGroup>
    </div>)
})