import React, { Component, useState, useEffect } from "react";

class LoginError extends Component {
    state = { closeErr: false };

    ErrClose = () => {
        this.props.removeErr(this.state.closeErr);
    };

    render() {
        return (
            <div className="ui error message">
                <i onClick={this.ErrClose} className="close icon"></i>
                <div className="header">
                    Please Enter the Correct Authentication Token
                </div>
            </div>
        )
    }
}
export default LoginError;

// REACT HOOK
// const LoginError = (props) =>{
//     const [closeErr, setCloseErr] = useState(false);

//     const ErrClose = () => {
//         props.removeErr(closeErr);
//     };

//     return (
//         <div className="ui error message">
//             <i onClick={ErrClose} className="close icon"></i>
//             <div className="header">
//                 Please Enter the Correct Authentication Token
//             </div>
//         </div>
//     )

// }
// export default LoginError;