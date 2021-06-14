
import React from 'react';
import { connect } from 'react-redux';


function mapStateToProps(state) {
    
    return {
        persons: state.personReducer.persons,
    };
}

export default connect(mapStateToProps)(function listPerson(props) {
    const { persons } = props
    return (
        <>
            <h1>person list</h1>
            {
                (persons)=>{
               Object.values(persons).map((item, index) => (
                  
                        item.map((item, index) => (
                            <div className="d-flex justify-content-center">
                                <div className="col-5">
                                    <ul className="list-group" key={index}>
                                        <li className="list-group-item">{`name: ${item.name} email: ${item.email}`}</li>
                                    </ul>
                                </div>
                            </div>
                        )
                      
                
                    
                )
                )
                        
                )
                        }
            }

        </>
    );
})