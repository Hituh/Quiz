import React, { useState } from 'react';

function AddQuizButton(props){
    var check = true

    const [isShown, setIsShown] = useState(false);
    const handleAdd = () => {
        setIsShown(current => !current);
    }

    return(
        <div>
         {check === true &&
                <div>
                    <button style={{ minWidth: "100%", marginTop: "200px", background: "#060a1f", color: "white", borderRadius: "10px", fontSize: "20px" }} onClick={() => handleAdd()}>Dodaj Pytanie</button>
                    {isShown &&
                        <div className="example-container1">
                            Tu dac formularz
                        </div>

                    }
                </div>
            }
        </div>
    )

}


export default AddQuizButton;